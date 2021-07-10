import express from 'express';
import ActionLog from '../models/action_log.js';

const router = express.Router();

// GET
export const getActionLogs = async (req, res) => {
  try {
    const allActionLogs = await ActionLog.find({ userId: req.userId }).sort({ loggedAt: -1 });
    res.status(200).json(allActionLogs);
  } catch (error) {
    res.status(404).json({ message: "An error has occurred fetching your action logs." });
  }
}

export default router;
