import express from 'express';

import { getStocks, getStock } from '../controllers/stocks.js';

const router = express.Router();

router.get('/', getStocks);
router.get('/:id', getStock);

export default router;
