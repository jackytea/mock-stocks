import express from 'express';

import {
  getPurchasedStocks,
  getPurchasedStock,
  addPurchasedStock,
  updatePurchasedStock,
  removePurchasedStock
} from '../controllers/purchased_stocks.js';

const router = express.Router();

router.get('/', getPurchasedStocks);
router.get('/:id', getPurchasedStock);
router.post('/', addPurchasedStock);
router.patch('/:id', updatePurchasedStock)
router.delete('/:id', removePurchasedStock)

export default router;
