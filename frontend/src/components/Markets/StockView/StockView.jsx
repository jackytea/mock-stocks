import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import socketIOClient from "socket.io-client";
import { getStocks } from "../../../actions/stocks";
import { SORT_STOCKS_BY_FIELD, MARKET_ERROR_OCCURRED } from '../../../constants/actions';
import ListView from "./ListView/ListView";
import GridView from "./GridView/GridView";
import TopInfoSection from "./TopInfoSection/TopInfoSection";
import Pagination from "../../Pagination/Pagination";

const StockView = () => {
  const socket = socketIOClient(process.env.REACT_APP_STOCKS_API, { transports: ['websocket', 'polling', 'flashsocket'] });
  const errors = useSelector((state) => state.marketErrorsReducer);
  const stocks = useSelector((state) => state.stocksReducer);
  const [isListMode, setIsListMode] = useState(true);
  const [searchFilter, setSearchFilter] = useState("");
  const [sortById, setSortById] = useState(true);
  const [sortByName, setSortByName] = useState(true);
  const [sortByTicker, setSortByTicker] = useState(true);
  const [sortByPrice, setSortByPrice] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [stocksPerPage] = useState(12);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStocks());
  }, [dispatch]);

  useEffect(() => {
    socket.connect();
    dispatch({ type: MARKET_ERROR_OCCURRED, payload: "" });
    return () => {
      socket.disconnect();
      dispatch({ type: MARKET_ERROR_OCCURRED, payload: "" });
    }
  }, [socket, dispatch]);

  const filteredStocks = stocks?.length ? stocks.filter((stock) => {
    return stock.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
      stock.ticker.toLowerCase().includes(searchFilter.toLowerCase())
  }) : null;

  const sortByField = (field, reverse) => {
    dispatch({ type: SORT_STOCKS_BY_FIELD, payload: { field: field, reverse: reverse } });
  }

  const searchStocks = (e) => {
    setCurrentPage(1);
    setSearchFilter(e.target.value);
  }

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const indexOfLastStock = currentPage * stocksPerPage;
  const indexOfFirstStock = indexOfLastStock - stocksPerPage;
  const currentStocks = filteredStocks?.length ? filteredStocks.slice(indexOfFirstStock, indexOfLastStock) : null;

  return (
    <>
      <TopInfoSection count={stocks?.length ? stocks.length : 0} />
      <div className="bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-8 w-full">
          <div className="py-8">
            <div className="flex flex-row mb-1 sm:mb-0 justify-between w-full">
              <input onChange={searchStocks} type="text" id="&quot;form-subscribe-Filter" className="rounded-lg border-transparent flex-2 appearance-none border border-gray-300 w-full py-2 px-4 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" placeholder="Search by company or ticker..." />
              {isListMode ?
                <button onClick={() => { setIsListMode(false); }} className="ml-4 flex items-center px-2 py-2 font-medium tracking-wide text-black dark:text-gray-200 capitalize transition-colors duration-200 transform bg-white rounded-md dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-500 dark:focus:bg-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                :
                <>
                  <button onClick={() => { setIsListMode(true); }} className="ml-4 flex items-center px-2 py-2 font-medium tracking-wide text-black dark:text-gray-200 capitalize transition-colors duration-200 transform bg-white rounded-md dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:bg-blue-200 dark:focus:bg-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                    </svg>
                  </button>
                  <button
                    onClick={() => { sortByField("id", sortById); setSortById((prevSortById) => !prevSortById); }} className="ml-4 flex items-center px-2 py-2 font-medium tracking-wide text-black dark:text-gray-200 capitalize transition-colors duration-200 transform bg-white rounded-md dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-700">
                    <div className="text-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                      </svg>
                    </div>
                  </button>
                  <button onClick={() => { sortByField("name", sortByName); setSortByName((prevSortByName) => !prevSortByName); }} className="ml-4 flex items-center px-2 py-2 font-medium tracking-wide text-black dark:text-gray-200 capitalize transition-colors duration-200 transform bg-white rounded-md dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-700">
                    <div className="text-center">
                      {sortByName ?
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
                        </svg>
                      }
                    </div>
                  </button>
                  <button
                    onClick={() => { sortByField("currentPrice", sortByPrice); setSortByPrice((prevSortByPrice) => !prevSortByPrice); }} className="ml-4 flex items-center px-2 py-2 font-medium tracking-wide text-black dark:text-gray-200 capitalize transition-colors duration-200 transform bg-white rounded-md dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-700">
                    <div className="text-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </button>
                </>
              }
            </div>
            {filteredStocks?.length ?
              <span className="mt-4 text-center w-full relative inline-block px-3 py-1 font-semibold text-blue-900 leading-tight">
                <span aria-hidden="true" className="absolute inset-0 bg-blue-200 dark:bg-blue-700 opacity-50 rounded-full">
                </span>
                <span className="relative text-blue-500 dark:text-blue-400">
                  {`${filteredStocks.length}` + (filteredStocks.length > 1 ? " results found..." : " result found...")}
                </span>
              </span>
              :
              <span className="mt-4 text-center w-full relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                <span aria-hidden="true" className="absolute inset-0 bg-red-200 dark:bg-red-700 opacity-50 rounded-full">
                </span>
                <span className="relative text-red-500 dark:text-red-400">
                  No results found...
                </span>
              </span>
            }
            {isListMode ? (
              <ListView
                filteredStocks={currentStocks}
                errors={errors}
                socket={socket}
                searchStocks={searchStocks}
                setIsListMode={setIsListMode}
                sortByField={sortByField}
                sortById={sortById}
                sortByName={sortByName}
                sortByTicker={sortByTicker}
                sortByPrice={sortByPrice}
                setSortById={setSortById}
                setSortByName={setSortByName}
                setSortByTicker={setSortByTicker}
                setSortByPrice={setSortByPrice}
              />
            ) : (
              <GridView
                filteredStocks={currentStocks}
                errors={errors}
                socket={socket}
                searchStocks={searchStocks}
                setIsListMode={setIsListMode}
              />
            )}
            <Pagination
              currentPage={currentPage}
              stocksPerPage={stocksPerPage}
              totalStocks={filteredStocks?.length ? filteredStocks.length : 0}
              paginate={paginate}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default StockView;
