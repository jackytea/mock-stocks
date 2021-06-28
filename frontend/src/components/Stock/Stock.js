import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import socketIOClient from "socket.io-client";
import { useDispatch, useSelector } from 'react-redux';
import { getStock } from '../../actions/stocks';
import CurrentPrice from "../CurrentPrice/CurrentPrice"

const Stock = (props) => {
  const socket = socketIOClient(process.env.REACT_APP_STOCKS_API, { transports: ['websocket', 'polling', 'flashsocket'] });
  const { id } = props;
  const stock = useSelector((state) => state.stocksReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStock(id));
  }, [id, dispatch]);

  return (
    !stock?._id ? <div>No stock</div> :
      <div>Stock {id}
        <br />
        Ticker {stock.ticker}
        <CurrentPrice currentPrice={stock.currentPrice} ticker={stock.ticker} socket={socket} />
        <Link to={`/transaction/${stock._id}`}><button style={{ background: "green" }}>Buy now</button></Link>
      </div>
  );
}

export default Stock;