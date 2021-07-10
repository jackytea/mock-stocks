import express from 'express';
import Transaction from '../models/transaction.js';

const router = express.Router();

// GET
export const getTransactions = async (req, res) => {
  try {
    const allTransactions = await Transaction.find({ userId: req.userId }).sort({ transactedAt: -1 });
    res.status(200).json(allTransactions);
  } catch (error) {
    res.status(404).json({ message: "An error has occurred fetching your transactions." });
  }
}

export default router;
