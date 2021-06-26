import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import socketIOClient from "socket.io-client";
import { getStocks } from '../../actions/stocks';
import CurrentPrice from "../CurrentPrice/CurrentPrice";
import { MARKET_ERROR_OCCURRED } from '../../constants/actions';

const Markets = () => {
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
    !stocks.length ? <div>
      <div style={{ color: "red" }}>{errors}</div>
      loading</div> : (
      <div>
        {stocks.map((stock) => (
          <Link key={stock._id} to={`/stock/${stock.id}`}>
            <div style={{ marginTop: "20px", backgroundColor: "lightgray" }}>
              Ticker: {stock.name}
              <img src={stock.icon} height="20" width="40" alt={stock.name}></img>
              Initial price: {stock.initialPrice}
              <CurrentPrice currentPrice={stock.currentPrice} ticker={stock.ticker} socket={socket} />
            </div>
          </Link>
        ))}
      </div>
    )
  );
}

export default Markets;
