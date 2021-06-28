import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getStock } from '../../actions/stocks';
import { getPurchase, addPurchase } from '../../actions/purchased';
import { useParams } from "react-router";


const initialState = { stockId: null, sharesBought: 0 };

const TransactionForm = () => {
  const stock = useSelector((state) => state.stocksReducer);
  const purchase = useSelector((state) => state.purchasedReducer);
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getStock(id));
  }, [id, dispatch]);

  useEffect(() => {
    dispatch(getPurchase(id));
  }, [dispatch, id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form)
    dispatch(addPurchase(form, history));
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value, stockId: id });
  }

  return (
    !stock || purchase?.length === 0 ? <div>NO STOCK Exists for this!</div> : (
      purchase ? <div>Already bought!</div> :
        <div>
          <h3>Transaction for {stock.ticker} : {stock.name} NOT BOUGHT YET</h3>
          <form onSubmit={handleSubmit}>
            <label>Shares you want to buy:
              <input name="sharesBought" onChange={handleChange} type="number" min="1" max="100" />
            </label>
          </form>
        </div>
    )
  );
}

export default TransactionForm;