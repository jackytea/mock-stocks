import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import GridViewSkeleton from './GridViewSkeleton';
import CurrentPrice from "../../../CurrentPrice/CurrentPrice";
import PriceChart from "../../../PriceChart/PriceChart";
import { SORT_STOCKS_BY_FIELD } from '../../../../constants/actions';

const GridView = (props) => {
  const { socket, stocks } = props;
  const [searchFilter, setSearchFilter] = useState("");
  const [sortByName, setSortByName] = useState(true);
  const [sortByTicker, setSortByTicker] = useState(true);
  const [sortByPrice, setSortByPrice] = useState(true);
  const history = useHistory();
  const dispatch = useDispatch();

  const detailPage = (id) => {
    history.push(`/stock/${id}`);
  }

  const sortByField = (field, reverse) => {
    dispatch({ type: SORT_STOCKS_BY_FIELD, payload: { field: field, reverse: reverse } });
  }

  const searchStocks = (e) => {
    setSearchFilter(e.target.value);
  }

  const filteredStocks = stocks?.length ? stocks.filter((stock) => {
    return stock.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
      stock.ticker.toLowerCase().includes(searchFilter.toLowerCase())
  }) : null;

  return (
    <div className="bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-8 w-full">
        <div className="py-8">
          <div className="flex flex-row mb-1 sm:mb-0 justify-between w-full">
            <input onChange={searchStocks} type="text" id="&quot;form-subscribe-Filter" className="rounded-lg border-transparent flex-2 appearance-none border border-gray-300 w-full py-2 px-4 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" placeholder="Search by company or ticker..." />
            <button class="ml-4 flex items-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
            </button>
            <button class="ml-4 flex items-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-gray-700">
              <div className="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
            </button>
          </div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="table-fixed min-w-xl sm:min-w-full leading-normal">
                <thead>
                  <tr>
                    <th scope="col" className="w-1/12 px-5 py-3 bg-white dark:bg-gray-900  border-b border-gray-200 dark:border-gray-800 text-gray-800 dark:text-white text-left text-sm uppercase font-normal">
                      #
                    </th>
                    <th onClick={() => { sortByField("name", sortByName); setSortByName((prevSortByName) => !prevSortByName); }} scope="col" className="cursor-pointer hidden md:table-cell w-1/5 px-5 py-3 bg-white dark:bg-gray-900  border-b border-gray-200 dark:border-gray-800 text-gray-800  dark:text-white text-left text-sm uppercase font-normal">
                      Name
                    </th>
                    <th onClick={() => { sortByField("ticker", sortByTicker); setSortByTicker((prevSortByTicker) => !prevSortByTicker); }} scope="col" className="cursor-pointer w-1/5 px-5 py-3 bg-white dark:bg-gray-900  border-b border-gray-200 dark:border-gray-800 text-gray-800  text-left dark:text-white text-sm uppercase font-normal">
                      Ticker
                    </th>
                    <th onClick={() => { sortByField("currentPrice", sortByPrice); setSortByPrice((prevSortByPrice) => !prevSortByPrice); }} scope="col" className="cursor-pointer w-1/5 px-5 py-3 bg-white dark:bg-gray-900  border-b border-gray-200 dark:border-gray-800 text-gray-800  text-left dark:text-white text-sm uppercase font-normal">
                      Current Price
                    </th>
                    <th scope="col" className="hidden md:table-cell w-1/6 px-5 py-3 bg-white dark:bg-gray-900  border-b border-gray-200 dark:border-gray-800 text-gray-800  text-left dark:text-white text-sm uppercase font-normal">
                      Chart
                    </th>
                    <th scope="col" className="w-1/6 px-5 py-3 bg-white dark:bg-gray-900  border-b border-gray-200 dark:border-gray-800 text-gray-800  text-left dark:text-white text-sm uppercase font-normal">

                    </th>
                  </tr>
                </thead>
                <tbody>
                  {!filteredStocks?.length ?
                    <GridViewSkeleton />
                    :
                    <>
                      {filteredStocks.map((stock, index) => (
                        <tr key={stock._id} className="bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">
                          <td onClick={() => detailPage(stock._id)} className="px-5 py-5 border-b border-gray-200 dark:border-gray-800  text-sm cursor-pointer">
                            <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                              {index + 1}
                            </p>
                          </td>
                          <td onClick={() => detailPage(stock._id)} className="hidden md:table-cell px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm cursor-pointer">
                            <div className="flex items-center">
                              <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                                {stock.name}
                              </p>
                            </div>
                          </td>
                          <td onClick={() => detailPage(stock._id)} className="px-5 py-5 border-b border-gray-200 dark:border-gray-800   text-sm cursor-pointer">
                            <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                              {stock.ticker}
                            </p>
                          </td>
                          <td onClick={() => detailPage(stock._id)} className="px-5 py-5 border-b border-gray-200 dark:border-gray-800   text-sm cursor-pointer">
                            <CurrentPrice currentPrice={stock.currentPrice} ticker={stock.ticker} socket={socket} />
                          </td>
                          <td onClick={() => detailPage(stock._id)} className="hidden md:table-cell px-5 py-5 border-b border-gray-200 dark:border-gray-800   text-sm cursor-pointer">
                            <PriceChart id={stock.ticker} legendDisplay={false} xDisplay={false} yDisplay={false} socket={socket} ticker={stock.ticker} currPrice={stock.currentPrice} styleSet={"h-16 w-32"} />
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-800   text-sm">
                            <Link to={`/transaction/${stock._id}`} className="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-gray-700">
                              Buy
                            </Link>
                            <Link to={`/stock/${stock._id}`} className="ml-2 px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-gray-700">
                              Details
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </>
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default GridView;