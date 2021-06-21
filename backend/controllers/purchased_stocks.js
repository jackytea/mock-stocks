import express from 'express';
import mongoose from 'mongoose';
import Stock from '../models/stock.js';
import PurchasedStock from '../models/purchased_stock.js';

const router = express.Router();

export const getPurchasedStocks = async (req, res) => {
  try {
    const allPurchasedStocks = await PurchasedStock.find();
    res.status(200).json(allPurchasedStocks);
  } catch (error) {
    res.status(404).json({ message: "An error has occurred fetching your purchased stocks." });
  }
}

export const getPurchasedStock = async (req, res) => {
  const { id } = req.params;
  try {
    const onePurchasedStock = await PurchasedStock.findById(id);
    res.status(200).json(onePurchasedStock);
  } catch (error) {
    res.status(404).json({ message: "An error has occurred fetching your purchased stocks" });
  }
}

export const addPurchasedStock = async (req, res) => {
  try {
    const userId = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9";
    const stock = await Stock.findOne({ id: 5 });
    const shares = 15;
    const initialInvestment = shares * stock.currentPrice;
    const newPurchasedStock = new PurchasedStock({ userId, stock, shares, initialInvestment });
    const alreadyPurchased = await PurchasedStock.find({ stock: stock }).countDocuments() > 0;
    if (alreadyPurchased) {
      return res.status(409).send(`Stock: ${stock.ticker} was already purchased!`);
    }
    await newPurchasedStock.save();
    res.status(200).json(newPurchasedStock);
  } catch (error) {
    res.status(404).json({ message: "An error has occurred purchasing stock." });
  }
}

export const updatePurchasedStock = async (req, res) => {
  try {
    const { id } = req.params;
    const boughtOrSoldShares = 3;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send(`No stock with id: ${id}`);
    }
    const purchased = await PurchasedStock.findById(id);
    const stock = await Stock.findById(purchased.stock);
    await PurchasedStock.findByIdAndUpdate(id, { shares: purchased.shares + boughtOrSoldShares, initialInvestment: purchased.initialInvestment + boughtOrSoldShares * stock.currentPrice });
    res.status(200).json({ message: "Bought more shares!" });
  } catch (error) {
    res.status(404).json({ message: "An error has occurred updated your purchased stock." });
  }
}

export const removePurchasedStock = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send(`No stock with id: ${id}`);
    }
    await PurchasedStock.findByIdAndRemove(id);
    res.status(200).json({ message: "Stock fully sold!" });
  } catch (error) {
    res.status(404).json({ message: "An error has occurred selling your purchased stock." });
  }
}

export default router;
