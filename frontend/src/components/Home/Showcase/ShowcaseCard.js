import React from "react";
import { Link } from 'react-router-dom';
import CurrentPrice from "../../CurrentPrice/CurrentPrice";
import PriceChart from "../../PriceChart/PriceChart";

const ShowcaseCard = (props) => {
  const { socket, stocks } = props;

  const randomStockIndex = (stocksInput) => {
    const indices = new Set();
    while (indices.size !== 3) {
      indices.add(Math.floor(Math.random() * (stocks.length - 1)) + 1);
    }
    const arrIndices = Array.from(indices);
    return [stocksInput[arrIndices[0]], stocksInput[arrIndices[1]], stocksInput[arrIndices[2]]];
  }

  const randomizedStocks = stocks?.length ? randomStockIndex(stocks) : null;

  return (
    !randomizedStocks?.length ?
      <>
        <div className="animate-pulse max-w-xs mx-auto overflow-hidden bg-gray-200 rounded-lg shadow-lg dark:bg-gray-900 mt-4 w-96">
          <div className="animate-pulse flex space-x-4">
            <div className="p-4 max-w-sm w-full mx-auto">
              <div className="flex-1 space-y-4 py-1">
                <div className="space-y-2">
                  <div className="h-32 bg-white dark:bg-gray-700 rounded">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="animate-pulse flex space-x-4">
            <div className="p-4 max-w-sm w-full mx-auto">
              <div className="flex-1 space-y-4 py-1">
                <div className="space-y-2">
                  <div className="h-4 bg-white dark:bg-gray-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="animate-pulse flex space-x-4">
            <div className="p-4 max-w-sm w-full mx-auto">
              <div className="flex-1 space-y-4 py-1">
                <div className="space-y-2">
                  <div className="h-4 bg-white dark:bg-gray-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="animate-pulse max-w-xs mx-auto overflow-hidden bg-gray-200 rounded-lg shadow-lg dark:bg-gray-900 mt-4 w-96">
          <div className="animate-pulse flex space-x-4">
            <div className="p-4 max-w-sm w-full mx-auto">
              <div className="flex-1 space-y-4 py-1">
                <div className="space-y-2">
                  <div className="h-32 bg-white dark:bg-gray-700 rounded">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="animate-pulse flex space-x-4">
            <div className="p-4 max-w-sm w-full mx-auto">
              <div className="flex-1 space-y-4 py-1">
                <div className="space-y-2">
                  <div className="h-4 bg-white dark:bg-gray-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="animate-pulse flex space-x-4">
            <div className="p-4 max-w-sm w-full mx-auto">
              <div className="flex-1 space-y-4 py-1">
                <div className="space-y-2">
                  <div className="h-4 bg-white dark:bg-gray-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="animate-pulse max-w-xs mx-auto overflow-hidden bg-gray-200 rounded-lg shadow-lg dark:bg-gray-900 mt-4 w-96">
          <div className="animate-pulse flex space-x-4">
            <div className="p-4 max-w-sm w-full mx-auto">
              <div className="flex-1 space-y-4 py-1">
                <div className="space-y-2">
                  <div className="h-32 bg-white dark:bg-gray-700 rounded">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="animate-pulse flex space-x-4">
            <div className="p-4 max-w-sm w-full mx-auto">
              <div className="flex-1 space-y-4 py-1">
                <div className="space-y-2">
                  <div className="h-4 bg-white dark:bg-gray-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="animate-pulse flex space-x-4">
            <div className="p-4 max-w-sm w-full mx-auto">
              <div className="flex-1 space-y-4 py-1">
                <div className="space-y-2">
                  <div className="h-4 bg-white dark:bg-gray-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      :
      <>
        <div className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-900 mt-4">
          <Link to={`/stock/${randomizedStocks[0]._id}`}>
            <img className="object-contain w-96 h-56 p-12 bg-gray-100 dark:bg-gray-700" src={randomizedStocks[0].icon} alt={randomizedStocks[0].name} />
            <div className="pt-5 pb-1 text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">{randomizedStocks[0].name}</h1>
              <span className="text-sm text-gray-600 dark:text-gray-300">{randomizedStocks[0].exchange}:{randomizedStocks[0].ticker}</span>
            </div>
            <div className="py-5 text-center flex flex-col items-center justify-center">
              <CurrentPrice currentPrice={randomizedStocks[0].currentPrice} ticker={randomizedStocks[0].ticker} socket={socket} />
              <div className="my-2"></div>
              <PriceChart id={randomizedStocks[0].ticker} legendDisplay={false} xDisplay={false} yDisplay={false} socket={socket} ticker={randomizedStocks[0].ticker} currPrice={randomizedStocks[0].currentPrice} styleSet={"h-16 w-32"} />
            </div>
          </Link>
          <div className="py-5 text-center flex items-center justify-center">
            <Link to={`/transaction/${randomizedStocks[0]._id}`} className="w-1/3 px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md dark:bg-blue-600 hover:bg-blue-500 dark:hover:bg-blue-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-blue-700">
              Buy
            </Link>
            <Link to={`/stock/${randomizedStocks[0]._id}`} className="ml-4 w-1/3 ml-2 px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-500 rounded-md dark:bg-gray-800 hover:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-500 dark:focus:bg-gray-700">
              Details
            </Link>
          </div>
        </div>
        <div className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-900 mt-4">
          <Link to={`/stock/${randomizedStocks[1]._id}`}>
            <img className="object-contain w-96 h-56 p-12 bg-gray-100 dark:bg-gray-700" src={randomizedStocks[1].icon} alt={randomizedStocks[1].name} />
            <div className="pt-5 pb-1 text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">{randomizedStocks[1].name}</h1>
              <span className="text-sm text-gray-600 dark:text-gray-300">{randomizedStocks[1].exchange}:{randomizedStocks[1].ticker}</span>
            </div>
            <div className="py-5 text-center flex flex-col items-center justify-center">
              <CurrentPrice currentPrice={randomizedStocks[1].currentPrice} ticker={randomizedStocks[1].ticker} socket={socket} />
              <div className="my-2"></div>
              <PriceChart id={randomizedStocks[1].ticker} legendDisplay={false} xDisplay={false} yDisplay={false} socket={socket} ticker={randomizedStocks[1].ticker} currPrice={randomizedStocks[1].currentPrice} styleSet={"h-16 w-32"} />
            </div>
          </Link>
          <div className="py-5 text-center flex items-center justify-center">
            <Link to={`/transaction/${randomizedStocks[1]._id}`} className="w-1/3 px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md dark:bg-blue-600 hover:bg-blue-500 dark:hover:bg-blue-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-blue-700">
              Buy
            </Link>
            <Link to={`/stock/${randomizedStocks[1]._id}`} className="ml-4 w-1/3 ml-2 px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-500 rounded-md dark:bg-gray-800 hover:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-500 dark:focus:bg-gray-700">
              Details
            </Link>
          </div>
        </div>
        <div className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-900 mt-4">
          <Link to={`/stock/${randomizedStocks[2]._id}`}>
            <img className="object-contain w-96 h-56 p-12 bg-gray-100 dark:bg-gray-700" src={randomizedStocks[2].icon} alt={randomizedStocks[2].name} />
            <div className="pt-5 pb-1 text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">{randomizedStocks[2].name}</h1>
              <span className="text-sm text-gray-600 dark:text-gray-300">{randomizedStocks[2].exchange}:{randomizedStocks[2].ticker}</span>
            </div>
            <div className="py-5 text-center flex flex-col items-center justify-center">
              <CurrentPrice currentPrice={randomizedStocks[2].currentPrice} ticker={randomizedStocks[2].ticker} socket={socket} />
              <div className="my-2"></div>
              <PriceChart id={randomizedStocks[2].ticker} legendDisplay={false} xDisplay={false} yDisplay={false} socket={socket} ticker={randomizedStocks[2].ticker} currPrice={randomizedStocks[2].currentPrice} styleSet={"h-16 w-32"} />
            </div>
          </Link>
          <div className="py-5 text-center flex items-center justify-center">
            <Link to={`/transaction/${randomizedStocks[2]._id}`} className="w-1/3 px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md dark:bg-blue-600 hover:bg-blue-500 dark:hover:bg-blue-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-blue-700">
              Buy
            </Link>
            <Link to={`/stock/${randomizedStocks[2]._id}`} className="ml-4 w-1/3 ml-2 px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-500 rounded-md dark:bg-gray-800 hover:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-500 dark:focus:bg-gray-700">
              Details
            </Link>
          </div>
        </div>
      </>
  );
}

export default ShowcaseCard;
