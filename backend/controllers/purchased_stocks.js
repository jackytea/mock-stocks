import express from 'express';
import mongoose from 'mongoose';
import User from '../models/user.js';
import Stock from '../models/stock.js';
import Transaction from '../models/transaction.js';
import PurchasedStock from '../models/purchased_stock.js';

const router = express.Router();

// remove first transaction after a certain amount to keep logs clean
async function clearFirstTransactionLog(res, userId) {
  try {
    const countTransactions = await Transaction.find({ userId: userId }).countDocuments();
    if (countTransactions > 20) {
      await Transaction.findOneAndDelete({ userId: userId }, { sort: { transactedAt: 1 } });
    }
  } catch (error) {
    res.status(400).json({ message: "Failure to cleanup transaction logs!" });
  }
}

// GET
export const getPurchasedStocks = async (req, res) => {
  try {
    const allPurchasedStocks = await PurchasedStock.find({ userId: req.userId });
    res.status(200).json(allPurchasedStocks);
  } catch (error) {
    res.status(404).json({ message: "An error has occurred fetching your purchased stocks." });
  }
}

//GET /:id
export const getPurchasedStock = async (req, res) => {
  try {
    const { id } = req.params;
    const onePurchasedStock = await PurchasedStock.findOne({ userId: req.userId, stock: id });
    res.status(200).json(onePurchasedStock);
  } catch (error) {
    res.status(404).json({ message: "An error has occurred fetching your purchased stock." });
  }
}

// POST
export const addPurchasedStock = async (req, res) => {
  try {
    const { stockId, sharesBought } = req.body;

    const stock = await Stock.findById(stockId);
    const user = await User.findById(req.userId);
    const alreadyPurchased = await PurchasedStock.find({ userId: req.userId, stock: stock }).countDocuments() > 0;

    if (alreadyPurchased) {
      return res.status(409).send(`Stock: ${stock.ticker} was already purchased!`);
    }

    if (sharesBought < 0 || sharesBought > 100) {
      return res.status(400).json({ message: "Invalid shares!" });
    }

    const initialInvestment = sharesBought * stock.currentPrice;
    if (initialInvestment > user.coins) {
      return res.status(400).json({ message: "Not enough funds!" });
    }

    const newPurchasedStock = new PurchasedStock({
      userId: req.userId,
      stock: stock,
      tickerBought: stock.ticker,
      shares: sharesBought,
      initialInvestment: initialInvestment
    });
    const cost = user.coins - initialInvestment;

    await User.findByIdAndUpdate(req.userId, { coins: cost });
    await newPurchasedStock.save();

    const transactionLog = new Transaction({
      userId: req.userId,
      transactionType: "BUY",
      tickerBought: stock.ticker,
      shares: sharesBought,
      investment: initialInvestment
    });
    await transactionLog.save();
    clearFirstTransactionLog(res, req.userId);

    res.status(200).json(newPurchasedStock);
  } catch (error) {
    res.status(404).json({ message: "An error has occurred purchasing stock." });
  }
}


// PATCH
export const updatePurchasedStock = async (req, res) => {
  try {
    const { id } = req.params;
    const { sharesBought } = req.body;
    const bought = parseInt(sharesBought);

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send(`No stock with id: ${id}`);
    }

    if (bought > 100) {
      return res.status(400).json({ message: "Invalid shares!" });
    }

    const stock = await Stock.findById(id);
    const user = await User.findById(req.userId);
    const purchased = await PurchasedStock.findOne({ userId: req.userId, stock: stock });

    const transactionLog = new Transaction({
      userId: req.userId,
      transactionType: "ADJUST",
      tickerBought: stock.ticker,
      shares: bought,
      investment: (stock.currentPrice * purchased.shares)
    });
    await transactionLog.save();
    clearFirstTransactionLog(res, req.userId);

    if ((purchased.shares + bought) <= 0) {
      const profit = user.coins + (stock.currentPrice * purchased.shares);
      await User.findByIdAndUpdate(req.userId, { coins: profit });
      await PurchasedStock.findOneAndDelete({ userId: req.userId, stock: stock });
      return res.status(200).json({ message: "Fully sold stock!" });
    }

    if (bought < 0) {
      const profit = user.coins + (stock.currentPrice * Math.abs(bought));
      await User.findByIdAndUpdate(req.userId, { coins: profit });
      await PurchasedStock.findOneAndUpdate({ userId: req.userId, stock: stock }, { shares: purchased.shares - Math.abs(bought), initialInvestment: purchased.initialInvestment - (Math.abs(bought) * stock.currentPrice) });
      return res.status(200).json({ message: "Sold some shares!" });
    }

    if ((bought * stock.currentPrice) > user.coins) {
      return res.status(400).json({ message: "Not enough funds!" });
    }

    const cost = user.coins - (bought * stock.currentPrice);
    await User.findByIdAndUpdate(req.userId, { coins: cost });
    await PurchasedStock.findOneAndUpdate({ userId: req.userId, stock: stock }, { shares: purchased.shares + bought, initialInvestment: purchased.initialInvestment + (bought * stock.currentPrice) });

    res.status(200).json({ message: "Bought more shares!" });
  } catch (error) {
    res.status(404).json({ message: "An error has occurred updated your purchased stock." });
  }
}

// DELETE
export const removePurchasedStock = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send(`No stock with id: ${id}`);
    }

    const stock = await Stock.findById(id);
    const user = await User.findById(req.userId);
    const sold = await PurchasedStock.findOne({ userId: req.userId, stock: stock });
    const profit = user.coins + (stock.currentPrice * sold.shares);

    await User.findByIdAndUpdate(req.userId, { coins: profit });
    await PurchasedStock.findOneAndDelete({ userId: req.userId, stock: stock });

    const transactionLog = new Transaction({
      userId: req.userId,
      transactionType: "SELL",
      tickerBought: stock.ticker,
      shares: sold.shares,
      investment: profit
    });
    await transactionLog.save();
    clearFirstTransactionLog(res, req.userId);

    res.status(200).json({ message: "Stock fully sold!" });
  } catch (error) {
    res.status(404).json({ message: "An error has occurred selling your purchased stock." });
  }
}

export default router;
