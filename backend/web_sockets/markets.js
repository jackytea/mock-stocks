import Stock from '../models/stock.js';

const delay = async (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const stockPrice = async (socket, currPrice, delayMs, stockTicker, fluctuationRange, stockId) => {
  try {
    let price = currPrice;
    while (socket.connected) {
      let up = Math.round(Math.random());
      if (up) {
        price += Math.random() * fluctuationRange;
        up = false;
      } else {
        price -= Math.random() * fluctuationRange;
        up = true;
      }
      if (price < 0) {
        price = 0;
      }
      await Stock.findOneAndUpdate({ id: stockId }, { currentPrice: price })
      socket.emit(stockTicker, price.toFixed(2));
      await delay(delayMs);
    }
  } catch (error) {
    socket.disconnect();
    console.log("Market error", error);
  }
}

export { stockPrice }
