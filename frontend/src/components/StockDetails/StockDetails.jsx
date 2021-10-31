import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import socketIOClient from "socket.io-client";
import { useDispatch, useSelector } from 'react-redux';
import { getStock } from '../../actions/stocks';
import StockDetailsSkeleton from "./StockDetailsSkeleton";
import CurrentPrice from "../CurrentPrice/CurrentPrice"
import PriceChart from "../PriceChart/PriceChart";

const StockDetails = (props) => {
  const { id } = props;
  const socket = socketIOClient(process.env.REACT_APP_STOCKS_API, { transports: ['websocket', 'polling', 'flashsocket'] });
  const stock = useSelector((state) => state.stocksReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStock(id));
  }, [dispatch, id]);

  useEffect(() => {
    socket.connect();
    return () => {
      socket.disconnect();
    }
  }, [dispatch, socket]);


  return (
    !stock?._id ?
      <StockDetailsSkeleton />
      :
      <div className="bg-white dark:bg-gray-800 pt-24 lg:pt-16 md:pt-32 sm:pt-32">
        <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-128 lg:py-16 lg:flex-row lg:items-center lg:space-x-6">
          <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
            <div className="max-w-lg lg:mx-12 lg:order-2">
              <h1 className="text-3xl font-medium tracking-wide text-gray-800 dark:text-white lg:text-4xl">{stock.name} - <strong>{stock.exchange} : {stock.ticker}</strong></h1>
              <p className="mt-4 text-gray-600 dark:text-gray-300">{stock.description}</p>
              <div className="flex flex-col p-6 sm:p-0 sm:flex-row items-start sm:items-center">
                <div className="block">
                  <div className="mt-6">
                    <h1 className="text-xl font-medium tracking-wide text-gray-800 dark:text-white lg:text-4xl mb-2">Current Price</h1>
                    <CurrentPrice currentPrice={stock.currentPrice} ticker={stock.ticker} socket={socket} />
                  </div>
                  <div className="mt-6 mb-6 sm:mb-0">
                    <h1 className="text-xl font-medium tracking-wide text-gray-800 dark:text-white lg:text-4xl mb-2">All Time Change</h1>
                    {(stock.currentPrice / stock.initialPrice).toFixed(2) > 1 ?
                      <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span aria-hidden="true" className="absolute inset-0 bg-green-200 dark:bg-green-700 opacity-50 rounded-full">
                        </span>
                        <span className="relative text-green-500 dark:text-green-400">
                          + %{Math.abs((1 - (stock.currentPrice / stock.initialPrice)) * 100).toFixed(2)} up all time.
                        </span>
                      </span>
                      :
                      <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                        <span aria-hidden="true" className="absolute inset-0 bg-red-200 dark:bg-red-700 opacity-50 rounded-full">
                        </span>
                        <span className="relative text-red-500 dark:text-red-400">
                          - %{Math.abs((1 - (stock.currentPrice / stock.initialPrice)) * 100).toFixed(2)} down all time.
                        </span>
                      </span>
                    }
                  </div>
                </div>
                <div className="ml-0 sm:ml-8">
                  <h1 className="text-xl font-medium tracking-wide text-gray-800 dark:text-white lg:text-4xl mb-2">Trend Chart</h1>
                  <PriceChart id={stock.ticker} legendDisplay={false} xDisplay={false} yDisplay={false} socket={socket} ticker={stock.ticker} currPrice={stock.currentPrice} styleSet={"h-24 w-64"} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full h-full lg:w-1/2 text-center">
            <div className="max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
              <img className="object-contain object-center w-full h-56 p-12 bg-gray-100 dark:bg-gray-700" src={stock.icon} alt={stock.name} />

              <div className="flex items-center px-6 py-3 bg-gray-300 dark:bg-gray-900 text-gray-700 dark:text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>

                <a href={stock.siteURL} className="mx-3 text-lg font-semibold text-gray-800 dark:text-white hover:text-gray-200" target="_blank" rel="noopener noreferrer"><h1>Company Website</h1></a>
              </div>

              <div className="px-6 py-4">

                <div className="flex items-center text-gray-700 dark:text-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                  </svg>

                  <h1 className="px-2 text-sm">Ticker: {stock.ticker}</h1>
                </div>

                <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>

                  <h1 className="px-2 text-sm">Exchange: {stock.exchange}</h1>
                </div>

                <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>

                  <h1 className="px-2 text-sm">IPO Date: {stock.ipoDate}</h1>
                </div>

                <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>

                  <h1 className="px-2 text-sm">Industries: {stock.industries.join(", ")}</h1>
                </div>

                <div className="mt-6 mb-2 text-gray-700 dark:text-gray-200 text-center flex flex-wrap sm:block">
                  <Link to={`/transaction/${stock._id}`} className="w-full px-20 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-500 rounded-md dark:bg-blue-700 hover:bg-blue-600 dark:hover:bg-blue-600 focus:outline-none focus:bg-blue-500 dark:focus:bg-blue-600">
                    Buy
                  </Link>
                  <Link to={`/markets`} className="mt-2 sm:mt-0 ml-0 sm:ml-2 w-full px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-400 rounded-md dark:bg-gray-700 hover:bg-gray-500 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-500 dark:focus:bg-gray-600">
                    Back to Markets
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default StockDetails;