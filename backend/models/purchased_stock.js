import mongoose from 'mongoose';
import Stock from './stock.js';

const purchasedStockSchema = mongoose.Schema({
  userId: {
    type: String,
    unique: true
  },
  stock: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Stock,
    unique: true
  },
  shares: {
    type: String,
    min: 0
  },
  initialInvestment: Number
});

var PurchasedStock = mongoose.model('PurchasedStock', purchasedStockSchema);

export default PurchasedStock;
