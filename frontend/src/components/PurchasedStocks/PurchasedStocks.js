import React, { useEffect } from "react";
import socketIOClient from "socket.io-client";
import { getPurchases } from '../../actions/purchased';
import { useDispatch, useSelector } from 'react-redux';
import PurchaseListView from "./PurchaseListView/PurchaseListView";
import PurchaseOverview from "./PurchaseOverview/PurchaseOverview";

const PurchasedStocks = () => {
  const socket = socketIOClient(process.env.REACT_APP_STOCKS_API, { transports: ['websocket', 'polling', 'flashsocket'] });
  const purchases = useSelector((state) => state.purchasedReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPurchases());
  }, [dispatch]);

  useEffect(() => {
    socket.connect();
    return () => {
      socket.disconnect();
    }
  }, [socket]);

  return (
    <div className="bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-8 w-full">
        <div className="py-8">
          {
            !purchases?.length ?
              <>
                <div className="h-screen">oops</div>
              </>
              :
              <>
                <PurchaseOverview purchases={purchases} />
                <PurchaseListView purchases={purchases} socket={socket} />
              </>
          }
        </div>
      </div>
    </div>
  );
}

export default PurchasedStocks;

/*
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
*/