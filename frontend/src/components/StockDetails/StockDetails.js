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
      <div className="bg-white dark:bg-gray-800 pt-36 sm:pt-12">
        <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-128 lg:py-16 lg:flex-row lg:items-center lg:space-x-6">
          <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
            <div className="max-w-lg lg:mx-12 lg:order-2">
              <h1 className="text-3xl font-medium tracking-wide text-gray-800 dark:text-white lg:text-4xl">{stock.name} - <strong>{stock.exchange} : {stock.ticker}</strong></h1>
              <p className="mt-4 text-gray-600 dark:text-gray-300">{stock.description}</p>
              <div className="flex items-center">
                <div className="block">
                  <div className="mt-6">
                    <h1 className="text-xl font-medium tracking-wide text-gray-800 dark:text-white lg:text-4xl mb-2">Current Price</h1>
                    <CurrentPrice currentPrice={stock.currentPrice} ticker={stock.ticker} socket={socket} />
                  </div>
                  <div className="mt-6">
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
                <div className="ml-8">
                  <h1 className="text-xl font-medium tracking-wide text-gray-800 dark:text-white lg:text-4xl mb-2">Trend Chart</h1>
                  <PriceChart id={stock.ticker} legendDisplay={false} xDisplay={false} yDisplay={false} socket={socket} ticker={stock.ticker} currPrice={stock.currentPrice} styleSet={"h-24 w-64"} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full h-full lg:w-1/2 text-center">
            <div className="max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
              <img className="object-contain object-center w-full h-56 p-12 bg-gray-100 dark:bg-gray-700" src={stock.icon} alt={stock.name} />

              <div className="flex items-center px-6 py-3 bg-gray-300 dark:bg-gray-900">
                <svg className="w-6 h-6 text-gray-800 dark:text-gray-200 fill-current" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M17 21C15.8954 21 15 20.1046 15 19V15C15 13.8954 15.8954 13 17 13H19V12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12V13H7C8.10457 13 9 13.8954 9 15V19C9 20.1046 8.10457 21 7 21H3V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V21H17ZM19 15H17V19H19V15ZM7 15H5V19H7V15Z" />
                </svg>

                <a href={stock.siteURL} className="mx-3 text-lg font-semibold text-gray-800 dark:text-white hover:text-gray-200"><h1>Company Website</h1></a>
              </div>

              <div className="px-6 py-4">

                <div className="flex items-center text-gray-700 dark:text-gray-200">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.063 10.063 6.27214 12.2721 6.27214C14.4813 6.27214 16.2721 8.063 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16757 11.1676 8.27214 12.2721 8.27214C13.3767 8.27214 14.2721 9.16757 14.2721 10.2721Z" /><path fillRule="evenodd" clipRule="evenodd" d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.3941 5.48178 3.79418C8.90918 0.194258 14.6059 0.0543983 18.2059 3.48179C21.8058 6.90919 21.9457 12.606 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.9732 6.93028 5.17326C9.59603 2.37332 14.0268 2.26454 16.8268 4.93029C19.6267 7.59604 19.7355 12.0269 17.0698 14.8268Z" />
                  </svg>

                  <h1 className="px-2 text-sm">Ticker: {stock.ticker}</h1>
                </div>

                <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.063 10.063 6.27214 12.2721 6.27214C14.4813 6.27214 16.2721 8.063 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16757 11.1676 8.27214 12.2721 8.27214C13.3767 8.27214 14.2721 9.16757 14.2721 10.2721Z" /><path fillRule="evenodd" clipRule="evenodd" d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.3941 5.48178 3.79418C8.90918 0.194258 14.6059 0.0543983 18.2059 3.48179C21.8058 6.90919 21.9457 12.606 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.9732 6.93028 5.17326C9.59603 2.37332 14.0268 2.26454 16.8268 4.93029C19.6267 7.59604 19.7355 12.0269 17.0698 14.8268Z" />
                  </svg>

                  <h1 className="px-2 text-sm">Exchange: {stock.exchange}</h1>
                </div>

                <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 11H10V13H14V11Z" /><path fillRule="evenodd" clipRule="evenodd" d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z" />
                  </svg>

                  <h1 className="px-2 text-sm">IPO Date: {stock.ipoDate}</h1>
                </div>

                <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.063 10.063 6.27214 12.2721 6.27214C14.4813 6.27214 16.2721 8.063 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16757 11.1676 8.27214 12.2721 8.27214C13.3767 8.27214 14.2721 9.16757 14.2721 10.2721Z" /><path fillRule="evenodd" clipRule="evenodd" d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.3941 5.48178 3.79418C8.90918 0.194258 14.6059 0.0543983 18.2059 3.48179C21.8058 6.90919 21.9457 12.606 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.9732 6.93028 5.17326C9.59603 2.37332 14.0268 2.26454 16.8268 4.93029C19.6267 7.59604 19.7355 12.0269 17.0698 14.8268Z" />
                  </svg>

                  <h1 className="px-2 text-sm">Industries: {stock.industries.join(", ")}</h1>
                </div>

                <div className="mt-6 mb-2 text-gray-700 dark:text-gray-200 text-center">
                  <Link to={`/transaction/${stock._id}`} className="w-full px-20 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-500 rounded-md dark:bg-blue-700 hover:bg-blue-600 dark:hover:bg-blue-600 focus:outline-none focus:bg-blue-500 dark:focus:bg-blue-600">
                    Buy
                  </Link>
                  <Link to={`/markets`} className="ml-2 w-full px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-400 rounded-md dark:bg-gray-700 hover:bg-gray-500 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-500 dark:focus:bg-gray-600">
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