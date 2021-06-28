import React, { useEffect } from "react";
import socketIOClient from "socket.io-client";
import { getPurchases } from '../../actions/purchased';
import { useDispatch, useSelector } from 'react-redux';
import InvestmentPrice from "../InvestmentPrice/InvestmentPrice";
import { Link } from "react-router-dom";

const PurchasedStocks = () => {
  const socket = socketIOClient(process.env.REACT_APP_STOCKS_API, { transports: ['websocket', 'polling', 'flashsocket'] });
  const purchases = useSelector((state) => state.purchasedReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPurchases());
  }, [dispatch]);

  return (
    !purchases?.length ? <div>loading purchases</div> : (
      <div>
        {purchases.map((p) => (
          <Link key={p._id} to={`/purchased/${p.stock}`}>
            <div style={{ marginTop: "20px", backgroundColor: "lightgray" }}>Shares: {p.shares}
              init invest: {p.initialInvestment}
              ticker: {p.tickerBought}
              <InvestmentPrice shares={p.shares} ticker={p.tickerBought} socket={socket} />
              {p.stock}
              <br />
              <br />
            </div>
          </Link>
        ))}
      </div>
    )
  );
}

export default PurchasedStocks;