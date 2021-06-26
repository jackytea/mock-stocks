import React, { useEffect } from "react";
import socketIOClient from "socket.io-client";
import { getPurchases } from '../../actions/purchased';
import { useDispatch, useSelector } from 'react-redux';
import InvestmentPrice from "../InvestmentPrice/InvestmentPrice";

const PurchasedStocks = () => {
  const socket = socketIOClient(process.env.REACT_APP_STOCKS_API, { transports: ['websocket', 'polling', 'flashsocket'] });
  const purchases = useSelector((state) => state.purchasedReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPurchases());
  }, [dispatch]);

  return (
    !purchases.length ? <div>loading purchases</div> : (
      <div>
        {purchases.map((p) => (
            <div key={p._id}>Shares: {p.shares}
            init invest: {p.initialInvestment}
            ticker: {p.tickerBought}
            <InvestmentPrice shares={p.shares} ticker={p.tickerBought} socket={socket}/>
            </div>
        ))}
      </div>
    )
  );
}

export default PurchasedStocks;