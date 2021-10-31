import React from 'react';
import { Link } from "react-router-dom";
import CurrentPrice from "../CurrentPrice/CurrentPrice";
import PriceChart from "../PriceChart/PriceChart";

const StockCard = (props) => {
  const { socket, stock } = props;

  return (
    <div key={stock._id} className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-900 mt-4">
      <Link to={`/stock/${stock._id}`}>
        <img className="object-contain w-96 h-56 p-12 bg-gray-100 dark:bg-gray-700" src={stock.icon} alt={stock.name} />
        <div className="pt-5 pb-1 text-center">
          <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">{stock.name}</h1>
          <span className="text-sm text-gray-600 dark:text-gray-300">{stock.exchange}:{stock.ticker}</span>
        </div>
        <div className="py-5 text-center flex flex-col items-center justify-center">
          <CurrentPrice currentPrice={stock.currentPrice} ticker={stock.ticker} socket={socket} />
          <div className="my-2"></div>
          <PriceChart id={stock.ticker} legendDisplay={false} xDisplay={false} yDisplay={false} socket={socket} ticker={stock.ticker} currPrice={stock.currentPrice} styleSet={"h-16 w-32"} />
        </div>
      </Link>
      <div className="py-5 text-center flex items-center justify-center">
        <Link to={`/transaction/${stock._id}`} className="w-1/3 px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md dark:bg-blue-600 hover:bg-blue-500 dark:hover:bg-blue-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-blue-700">
          Buy
        </Link>
        <Link to={`/stock/${stock._id}`} className="ml-4 w-1/3 ml-2 px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-500 rounded-md dark:bg-gray-800 hover:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-500 dark:focus:bg-gray-700">
          Details
        </Link>
      </div>
    </div>
  );
}

export default StockCard;
