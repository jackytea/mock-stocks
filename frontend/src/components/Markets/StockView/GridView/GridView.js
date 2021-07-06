import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import GridViewSkeleton from './GridViewSkeleton';
import CurrentPrice from "../../../CurrentPrice/CurrentPrice";
import PriceChart from "../../../PriceChart/PriceChart";
import { SORT_STOCKS_BY_FIELD } from '../../../../constants/actions';

const GridView = (props) => {
  const { socket, filteredStocks, searchStocks, setIsListMode } = props;
  const [sortByName, setSortByName] = useState(true);
  const [sortByPrice, setSortByPrice] = useState(true);
  const dispatch = useDispatch();

  const sortByField = (field, reverse) => {
    dispatch({ type: SORT_STOCKS_BY_FIELD, payload: { field: field, reverse: reverse } });
  }

  return (
    <div className="bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-8 w-full">
        <div className="py-8">
          <div className="flex flex-row mb-1 sm:mb-0 justify-between w-full">
            <input onChange={searchStocks} type="text" id="&quot;form-subscribe-Filter" className="rounded-lg border-transparent flex-2 appearance-none border border-gray-300 w-full py-2 px-4 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" placeholder="Search by company or ticker..." />
            <button onClick={() => setIsListMode(true)} class="ml-4 flex items-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
            </button>
            <button onClick={() => { sortByField("name", sortByName); setSortByName((prevSortByName) => !prevSortByName); }} class="ml-4 flex items-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-gray-700">
              <div className="text-center">
                {sortByName ?
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                  </svg>
                  :
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
                  </svg>
                }
              </div>
            </button>
            <button
              onClick={() => { sortByField("currentPrice", sortByPrice); setSortByPrice((prevSortByPrice) => !prevSortByPrice); }} class="ml-4 flex items-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-gray-700">
              <div className="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </button>
          </div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {!filteredStocks?.length ?
                <GridViewSkeleton />
                :
                <>
                  {filteredStocks.map((stock, index) => (
                    <div class="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-900 mt-4">
                      <img class="object-scale-down w-96 h-56 p-16 bg-gray-100 dark:bg-gray-900" src={stock.icon} alt={stock.name} />
                      <div class="pt-5 pb-1 text-center">
                        <a href={stock.siteURL} class="block text-2xl font-bold text-gray-800 dark:text-white">{stock.name}</a>
                        <span class="text-sm text-gray-600 dark:text-gray-300">{stock.exchange}:{stock.ticker}</span>
                      </div>
                      <div class="py-5 text-center flex flex-col items-center justify-center">
                        <CurrentPrice currentPrice={stock.currentPrice} ticker={stock.ticker} socket={socket} />
                        <div className="my-2"></div>
                        <PriceChart id={stock.ticker} legendDisplay={false} xDisplay={false} yDisplay={false} socket={socket} ticker={stock.ticker} currPrice={stock.currentPrice} styleSet={"h-16 w-32"} />
                      </div>
                      <div class="py-5 text-center flex items-center justify-center">
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
        </div>
      </div>
    </div>
  );
}

export default GridView;