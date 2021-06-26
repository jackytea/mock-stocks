import mongoose from 'mongoose';
import Stock from './stock.js';

const purchasedStockSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  stock: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Stock,
    required: true,
    unique: true
  },
  tickerBought: {
    type: String,
    required: true,
    unique: true
  },
  shares: {
    type: String,
    required: true,
    min: 0
  },
  initialInvestment: {
    type: Number,
    required: true
  }
});

var PurchasedStock = mongoose.model('PurchasedStock', purchasedStockSchema);

export default PurchasedStock;
