import mongoose from 'mongoose';
import Stock from './stock.js';

const purchasedStockSchema = mongoose.Schema({
  userId: String,
  stock: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Stock
  },
  shares: Number,
  initialInvestment: Number
});

var PurchasedStock = mongoose.model('PurchasedStock', purchasedStockSchema);

export default PurchasedStock;
