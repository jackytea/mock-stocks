import express from 'express';
import Stock from '../models/stock.js';

const router = express.Router();

export const getStocks = async (req, res) => {
  try {
    const allStocks = await Stock.find();
    res.status(200).json(allStocks);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export const getStock = async (req, res) => {
  const { id } = req.params;
  try {
    const oneStock = await Stock.findOne({ id: id });
    res.status(200).json(oneStock);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export default router;
