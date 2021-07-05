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
    !stock || purchase?.length === 0 ?
      <div className="bg-white dark:bg-gray-800 pt-36 sm:pt-12">
        <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-128 lg:py-16 lg:flex-row lg:items-center lg:space-x-6">
        </div>
      </div>
      : (
        purchase ?
          <div className="bg-white dark:bg-gray-800 pt-36 sm:pt-12">
            <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-128 lg:py-16 lg:flex-row lg:items-center lg:space-x-6">
              <div class="w-full max-w-sm p-6 m-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                <h1 class="text-3xl font-semibold text-center text-gray-700 dark:text-white">Updating {stock.exchange}:{stock.ticker}</h1>
                <form class="mt-6" onSubmit={handleSubmitUpdatePurchase}>
                  <div>
                    <label for="shares" class="block text-sm text-gray-800 dark:text-gray-200">Shares</label>
                    <input type="number" min="1" max="100" onChange={handleChange}
                      class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                  </div>
                  <div class="mt-6">
                    <button
                      class="w-full px-20 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-500 rounded-md dark:bg-blue-700 hover:bg-blue-600 dark:hover:bg-blue-600 focus:outline-none focus:bg-blue-500 dark:focus:bg-blue-600">
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          :
          <div className="bg-white dark:bg-gray-800 pt-36 sm:pt-12">
            <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-128 lg:py-16 lg:flex-row lg:items-center lg:space-x-6">
              <div class="w-full max-w-sm p-6 m-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                <h1 class="text-3xl font-semibold text-center text-gray-700 dark:text-white">Buying {stock.exchange}:{stock.ticker}</h1>
                <form class="mt-6" onSubmit={handleSubmitNewPurchase}>
                  <div>
                    <label for="shares" class="block text-sm text-gray-800 dark:text-gray-200">Shares</label>
                    <input type="number" min="1" max="100" onChange={handleChange}
                      class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                  </div>
                  <div class="mt-6">
                    <button
                      class="w-full px-20 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-500 rounded-md dark:bg-blue-700 hover:bg-blue-600 dark:hover:bg-blue-600 focus:outline-none focus:bg-blue-500 dark:focus:bg-blue-600">
                      Buy
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
      )
  );
}

export default TransactionForm;

/*
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
*/