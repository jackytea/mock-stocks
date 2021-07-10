import mongoose from 'mongoose';

const transactionSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  transactionType: {
    type: String,
    required: true,
  },
  tickerBought: {
    type: String,
    required: true,
  },
  shares: {
    type: Number,
    required: true,
  },
  investment: {
    type: Number,
    required: true
  },
  transactedAt: {
    type: Date,
    default: Date.now
  }
});

var Transaction = mongoose.model('Transaction', transactionSchema);

export default Transaction;
