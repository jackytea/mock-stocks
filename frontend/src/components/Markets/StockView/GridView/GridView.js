import React from 'react';
import { Link } from "react-router-dom";
import GridViewSkeleton from './GridViewSkeleton';
import CurrentPrice from "../../../CurrentPrice/CurrentPrice";
import PriceChart from "../../../PriceChart/PriceChart";

const GridView = (props) => {
  const { socket, filteredStocks } = props;

  return (
    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {!filteredStocks?.length ?
          <GridViewSkeleton />
          :
          <>
            {filteredStocks.map((stock) => (
              <div key={stock._id} className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-900 mt-4">
                <img className="object-scale-down w-96 h-56 p-16 bg-gray-100 dark:bg-gray-900" src={stock.icon} alt={stock.name} />
                <div className="pt-5 pb-1 text-center">
                  <a href={stock.siteURL} className="block text-2xl font-bold text-gray-800 dark:text-white">{stock.name}</a>
                  <span className="text-sm text-gray-600 dark:text-gray-300">{stock.exchange}:{stock.ticker}</span>
                </div>
                <div className="py-5 text-center flex flex-col items-center justify-center">
                  <CurrentPrice currentPrice={stock.currentPrice} ticker={stock.ticker} socket={socket} />
                  <div className="my-2"></div>
                  <PriceChart id={stock.ticker} legendDisplay={false} xDisplay={false} yDisplay={false} socket={socket} ticker={stock.ticker} currPrice={stock.currentPrice} styleSet={"h-16 w-32"} />
                </div>
                <div className="py-5 text-center flex items-center justify-center">
                  <Link to={`/transaction/${stock._id}`} className="w-1/3 px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md dark:bg-blue-600 hover:bg-blue-500 dark:hover:bg-blue-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-blue-700">
                    Buy
                  </Link>
                  <Link to={`/stock/${stock._id}`} className="ml-4 w-1/3 ml-2 px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-500 rounded-md dark:bg-gray-800 hover:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-500 dark:focus:bg-gray-700">
                    Details
                  </Link>
                </div>
              </div>
            ))}
          </>
        }
      </div>
    </div>
  );
}

export default GridView;