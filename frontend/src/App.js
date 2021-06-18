import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import socketIOClient from "socket.io-client";
import { getStocks } from './actions/stocks';

const App = () => {
  const stocks = useSelector((state) => state.stocks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStocks());
  }, [dispatch]);

  /*
  useEffect(() => {
    //const socket = socketIOClient(process.env.REACT_APP_STOCKS_API, { transports: ['websocket', 'polling', 'flashsocket'] });
    socket.on("WMT", data => {
      setResponse(data);
    });
  }, []);
  */

  return (
    <div>
      {stocks.map((stock) => (
        <div key={stock._id}>
          {stock.name} {stock.currentPrice}
          <img src={stock.icon} height="20" width="40"></img>

        </div>
      ))}
    </div>
  );
}

export default App;
