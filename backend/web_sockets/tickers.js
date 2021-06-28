import { stockPrice } from './markets.js';
import Stock from '../models/stock.js';

const tickers = async (socket) => {
    try {
        const allStocks = await Stock.find();
        for (let i = 0; i < allStocks.length; i++) {
            let fluctuationRange = Math.floor(Math.random() * 10);
            let delayTime = Math.floor(Math.random() * (3000 - 1500) + 1500);
            stockPrice(socket, allStocks[i].currentPrice, delayTime, allStocks[i].ticker, fluctuationRange, allStocks[i].id);
        }
    } catch (error) {
        console.log("Stock fetching error:", error);
    }
}

export { tickers }
