import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getStocks } from "../../../actions/stocks";
import { MARKET_ERROR_OCCURRED } from '../../../constants/actions';
import socketIOClient from "socket.io-client";
import ShowcaseCardSkeleton from "./ShowcaseCardSkeleton";
import ShowcaseCard from "./ShowcaseCard";

const Showcase = () => {
  const socket = socketIOClient(process.env.REACT_APP_STOCKS_API, { transports: ['websocket', 'polling', 'flashsocket'] });
  const stocks = useSelector((state) => state.stocksReducer);
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

  return (
    <div className="bg-white dark:bg-gray-800">
      <div className="container sm:px-32 py-16 sm:py-16 mx-auto">
        <h2 className="text-2xl text-center font-extrabold text-black dark:text-white sm:text-3xl mb-4 sm:mb-12">
          <span className="block">
            Today's Featured Picks
          </span>
        </h2>
        <div className="flex flex-col items-center justify-center lg:flex-row">
          {!stocks?.length ? <ShowcaseCardSkeleton /> : <ShowcaseCard socket={socket} stocks={stocks} stockOne={stocks[0]} stockTwo={stocks[16]} stockThree={stocks[1]} />}
        </div>
      </div>
    </div>
  );
}

export default Showcase;
