import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import socketIOClient from "socket.io-client";
import { getStocks } from '../../actions/stocks';
import CurrentPrice from './CurrentPrice/CurrentPrice'

const Markets = () => {
  const socket = socketIOClient(process.env.REACT_APP_STOCKS_API, { transports: ['websocket', 'polling', 'flashsocket'] });
  const stocks = useSelector((state) => state.stocks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStocks());
  }, [dispatch]);

  return (
    !stocks.length ? <div>loading</div> : (
      <div>
        {stocks.map((stock) => (
          <div key={stock._id}>
            Ticker: {stock.name}
            <img src={stock.icon} height="20" width="40" alt={stock.name}></img>
            Initial price: {stock.initialPrice}
            <CurrentPrice currentPrice={stock.currentPrice} ticker={stock.ticker} socket={socket} />
          </div>
        ))}
      </div>
    )
  );
}

export default Markets;
