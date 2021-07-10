import express from 'express';

import { getTransactions } from '../controllers/transactions.js';
import auth from "../middleware/auth.js";

const router = express.Router();

router.get('/', auth, getTransactions);

export default router;
