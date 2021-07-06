import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import socketIOClient from "socket.io-client";
import { getStocks } from "../../../actions/stocks";
import { MARKET_ERROR_OCCURRED } from '../../../constants/actions';
import ListView from "./ListView/ListView";
import GridView from "./GridView/GridView";

const StockView = () => {
  const socket = socketIOClient(process.env.REACT_APP_STOCKS_API, { transports: ['websocket', 'polling', 'flashsocket'] });
  const errors = useSelector((state) => state.marketErrorsReducer);
  const stocks = useSelector((state) => state.stocksReducer);
  const [isListMode, setIsListMode] = useState(true);
  const [searchFilter, setSearchFilter] = useState("");
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

  const searchStocks = (e) => {
    setSearchFilter(e.target.value);
  }

  const filteredStocks = stocks?.length ? stocks.filter((stock) => {
    return stock.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
      stock.ticker.toLowerCase().includes(searchFilter.toLowerCase())
  }) : null;

  return (
    isListMode ? (
      <ListView
        filteredStocks={filteredStocks}
        errors={errors}
        socket={socket}
        searchStocks={searchStocks}
        setIsListMode={setIsListMode}
      />
    ) : (
      <GridView
        filteredStocks={filteredStocks}
        errors={errors}
        socket={socket}
        searchStocks={searchStocks}
        setIsListMode={setIsListMode}
      />
    )
  );
}

export default StockView;
