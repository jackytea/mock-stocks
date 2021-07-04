import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import socketIOClient from "socket.io-client";
import { getStocks } from "../../../actions/stocks";
import { MARKET_ERROR_OCCURRED } from '../../../constants/actions';
import ListView from "./ListView/ListView";

const StockView = () => {
  const errors = useSelector((state) => state.marketErrorsReducer);
  const socket = socketIOClient(process.env.REACT_APP_STOCKS_API, { transports: ['websocket', 'polling', 'flashsocket'] });
  const stocks = useSelector((state) => state.stocksReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStocks());
  }, [dispatch]);

  useEffect(() => {
    dispatch({ type: MARKET_ERROR_OCCURRED, payload: "" });
    return () => {
      dispatch({ type: MARKET_ERROR_OCCURRED, payload: "" });
    }
  }, [dispatch]);

  return (
    <ListView stocks={stocks} errors={errors} socket={socket} />
  );
}

export default StockView;
