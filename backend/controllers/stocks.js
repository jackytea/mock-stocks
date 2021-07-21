import express from 'express';
import Stock from '../models/stock.js';

const router = express.Router();

export const getStocks = async (req, res) => {
  try {
    const allStocks = await Stock.find().sort({ id: 1 });
    res.status(200).json(allStocks);
  } catch (error) {
    res.status(404).json({ message: "An error has occurred fetching stocks." });
  }
}

export const getStock = async (req, res) => {
  try {
    const { id } = req.params;
    const oneStock = await Stock.findById(id);
    res.status(200).json(oneStock);
  } catch (error) {
    res.status(404).json({ message: "An error has occurred fetching the stock." });
  }
}

export default router;
