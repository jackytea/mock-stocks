import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import socketIOClient from "socket.io-client";
import { getStocks } from '../../actions/stocks';
import { getPurchases } from '../../actions/purchased';
import CurrentPrice from "../CurrentPrice/CurrentPrice";
import { MARKET_ERROR_OCCURRED } from '../../constants/actions';

const Markets = () => {
  const [user] = useState(JSON.parse(localStorage.getItem('profile')));
  const errors = useSelector((state) => state.marketErrorsReducer);
  const socket = socketIOClient(process.env.REACT_APP_STOCKS_API, { transports: ['websocket', 'polling', 'flashsocket'] });
  const stocks = useSelector((state) => state.stocksReducer);
  const purchases = useSelector((state) => state.purchasedReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStocks());
    if (user?.result) {
      dispatch(getPurchases());
    }
  }, [dispatch, user]);


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
          <Link key={stock._id} to={`/stock/${stock._id}`}>
            <div style={{ marginTop: "20px", backgroundColor: "lightgray" }}>
              Ticker: {stock.name}
              <img src={stock.icon} height="20" width="40" alt={stock.name}></img>
              Initial price: {stock.initialPrice}
              <CurrentPrice currentPrice={stock.currentPrice} ticker={stock.ticker} socket={socket} />
              {purchases.length && purchases.find(p => p.stock === stock._id) ? <div style={{ color: "red" }}>Bought</div> : <div></div>}
            </div>
          </Link>
        ))}
      </div>
    )
  );
}

export default Markets;
