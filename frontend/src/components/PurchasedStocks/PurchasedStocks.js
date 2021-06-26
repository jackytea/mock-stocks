import React, { useEffect } from "react";
import { getPurchases } from '../../actions/purchased';
import { useDispatch, useSelector } from 'react-redux';

const PurchasedStocks = () => {
  const purchases = useSelector((state) => state.purchasedReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPurchases());
  }, [dispatch]);

  return (
    !purchases.length ? <div>sasdsad loading</div> : (
      <div>
        {purchases.map((p) => (
            <div key={p._id}>Shares: {p.shares}
            init invest: {p.initialInvestment}</div>
        ))}
      </div>
    )
  );
}

export default PurchasedStocks;