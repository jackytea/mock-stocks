import mongoose from 'mongoose';

const actionLogSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  logAction: {
    type: String,
    required: true,
  },
  tickerBought: {
    type: String,
  },
  shares: {
    type: Number
  },
  loggedAt: {
    type: Date,
    default: Date.now
  }
});

var ActionLog = mongoose.model('ActionLog', actionLogSchema);

export default ActionLog;
