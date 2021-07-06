import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from "react-router";
import { getStock } from '../../actions/stocks';
import { getUserInfo } from "../../actions/auth";
import { getPurchase, addPurchase, updatePurchase, removePurchase } from '../../actions/purchased';


const initialState = { stockId: null, sharesBought: 0 };

const TransactionForm = () => {
  const { id } = useParams();
  const stock = useSelector((state) => state.stocksReducer);
  const purchase = useSelector((state) => state.purchasedReducer);
  const [form, setForm] = useState(initialState);
  const [isSell, setIsSell] = useState(false);
  const [shares, setShares] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory();

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
    setShares(e.target.value === "" ? 0 : e.target.value);
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
              <div className="w-full max-w-sm p-6 m-auto bg-white rounded-md shadow-md dark:bg-gray-900">
                <h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">Updating {stock.exchange}:{stock.ticker}</h1>
                <form className="mt-6" onSubmit={handleSubmitUpdatePurchase}>
                  <div>
                    <label htmlFor="shares" className="block text-sm text-gray-800 dark:text-gray-200">Shares</label>
                    <input type="number" name="sharesBought" min="-100" max="100" onChange={handleChange}
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                  </div>
                  <p className="mt-4 text-sm text-center text-gray-700 dark:text-white">{shares > 0 ? "Buying" : "Selling"} {shares} shares of {stock.exchange}:{stock.ticker}
                    <br />
                    Cost: ${(stock.currentPrice * shares).toFixed(2)}
                  </p>
                  <div className="mt-6">
                    <button type="submit" onClick={() => switchSellOrBuy(true)}
                      className="w-full px-20 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-yellow-500 rounded-md dark:bg-yellow-700 hover:bg-yellow-600 dark:hover:bg-yellow-600 focus:outline-none focus:bg-yellow-500 dark:focus:bg-yellow-600">
                      Buy / Sell More
                    </button>
                    <button type="submit" onClick={() => switchSellOrBuy(false)}
                      className="mt-2 w-full px-20 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-red-500 rounded-md dark:bg-red-700 hover:bg-red-600 dark:hover:bg-red-600 focus:outline-none focus:bg-red-500 dark:focus:bg-red-600">
                      Sell All
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          :
          <div className="bg-white dark:bg-gray-800 pt-36 sm:pt-12">
            <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-128 lg:py-16 lg:flex-row lg:items-center lg:space-x-6">
              <div className="w-full max-w-sm p-6 m-auto bg-white rounded-md shadow-md dark:bg-gray-900">
                <h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">Buying {stock.exchange}:{stock.ticker}</h1>
                <form className="mt-6" onSubmit={handleSubmitNewPurchase}>
                  <div>
                    <label htmlFor="shares" className="block text-sm text-gray-800 dark:text-gray-200">Shares</label>
                    <input type="number" name="sharesBought" min="1" max="100" onChange={handleChange}
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                  </div>
                  <p className="mt-4 text-sm text-center text-gray-700 dark:text-white">Buying {shares} shares of {stock.exchange}:{stock.ticker}
                    <br />
                    Cost: ${(stock.currentPrice * shares).toFixed(2)}
                  </p>
                  <div className="mt-6">
                    <button type="submit"
                      className="w-full px-20 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-500 rounded-md dark:bg-blue-700 hover:bg-blue-600 dark:hover:bg-blue-600 focus:outline-none focus:bg-blue-500 dark:focus:bg-blue-600">
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
