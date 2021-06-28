import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getStock } from '../../actions/stocks';
import { getUserInfo } from "../../actions/auth";
import { getPurchase, addPurchase, updatePurchase, removePurchase } from '../../actions/purchased';
import { useParams } from "react-router";


const initialState = { stockId: null, sharesBought: 0 };

const TransactionForm = () => {
  const stock = useSelector((state) => state.stocksReducer);
  const purchase = useSelector((state) => state.purchasedReducer);
  const [form, setForm] = useState(initialState);
  const [isSell, setIsSell] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getStock(id));
  }, [id, dispatch]);

  useEffect(() => {
    dispatch(getPurchase(id));
  }, [dispatch, id]);

  const handleSubmitNewPurchase = (e) => {
    e.preventDefault();
    dispatch(addPurchase(form, history));
    dispatch(getUserInfo());
  };

  const handleSubmitUpdatePurchase = (e) => {
    e.preventDefault();
    if (isSell) {
      dispatch(updatePurchase(id, form, history));
    } else {
      dispatch(removePurchase(id, history));
    }
    dispatch(getUserInfo());
  };

  const switchSellOrBuy = (condition) => {
    setIsSell(condition);
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value, stockId: id });
  }

  return (
    !stock || purchase?.length === 0 ? <div>NO STOCK Exists for this!</div> : (
      purchase ?
        <div>
          <h3>Transaction for {stock.ticker} : {stock.name} ALREADY BOUGHT</h3>
          <form onSubmit={handleSubmitUpdatePurchase}>
            <label>Shares you want to buy:
              <input name="sharesBought" onChange={handleChange} type="number" min="-100" max="100" />
            </label>
            <button style={{ background: "yellow" }} onClick={() => switchSellOrBuy(true)} type="submit">Buy more or sell some shares</button>
            <button style={{ background: "red" }} onClick={() => switchSellOrBuy(false)} type="submit">Sell all shares</button>
          </form>
        </div>
        :
        <div>
          <h3>Transaction for {stock.ticker} : {stock.name} NOT BOUGHT YET</h3>
          <form onSubmit={handleSubmitNewPurchase}>
            <label>Shares you want to buy:
              <input name="sharesBought" onChange={handleChange} type="number" min="1" max="100" />
            </label>
            <button type="submit">Buy shares</button>
          </form>
        </div>
    )
  );
}

export default TransactionForm;