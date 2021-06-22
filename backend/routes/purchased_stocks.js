import express from 'express';

import {
  getPurchasedStocks,
  getPurchasedStock,
  addPurchasedStock,
  updatePurchasedStock,
  removePurchasedStock
} from '../controllers/purchased_stocks.js';
import auth from "../middleware/auth.js";

const router = express.Router();

router.get('/', auth, getPurchasedStocks);
router.get('/:id', auth, getPurchasedStock);
router.post('/', auth, addPurchasedStock);
router.patch('/', auth, updatePurchasedStock);
router.delete('/', auth, removePurchasedStock);

export default router;
