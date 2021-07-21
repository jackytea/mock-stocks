import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from "react-router";
import { getStock } from '../../actions/stocks';
import { getUserInfo } from "../../actions/auth";
import { getPurchase, addPurchase, updatePurchase, removePurchase } from '../../actions/purchased';
import { PURCHASED_ERROR_OCCURRED } from "../../constants/actions";


const initialState = { stockId: null, sharesBought: 0 };

const TransactionForm = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const stock = useSelector((state) => state.stocksReducer);
  const purchase = useSelector((state) => state.purchasedReducer);
  const errors = useSelector((state) => state.purchasedErrorsReducer);
  const [form, setForm] = useState(initialState);
  const [isSell, setIsSell] = useState(false);
  const [shares, setShares] = useState(0);

  useEffect(() => {
    dispatch({ type: PURCHASED_ERROR_OCCURRED, payload: "" });
    return () => {
      dispatch({ type: PURCHASED_ERROR_OCCURRED, payload: "" });
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(getStock(id));
  }, [id, dispatch]);

  useEffect(() => {
    dispatch(getPurchase(id));
  }, [dispatch, id]);

  const handleSubmitNewPurchase = (e) => {
    e.preventDefault();
    dispatch({ type: PURCHASED_ERROR_OCCURRED, payload: "" });
    dispatch(addPurchase(form, history));
    dispatch(getUserInfo());
  };

  const handleSubmitUpdatePurchase = (e) => {
    e.preventDefault();
    dispatch({ type: PURCHASED_ERROR_OCCURRED, payload: "" });
    if (isSell) {
      dispatch(removePurchase(id, history));
    } else {
      dispatch(updatePurchase(id, form, history, shares, purchase.shares));
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
      <div className="bg-white dark:bg-gray-800 w-full h-full text-center">
        <div className="max-w-2xl mx-auto py-64 bg-white dark:bg-gray-800 flex items-center justify-center">
          <div className="p-6">
            <div>
              <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">Error 404</span>
              <h1 className="block mt-2 text-2xl font-semibold text-gray-800 dark:text-white hover:text-gray-600 hover:underline">Oops! Invalid Transaction <code className="text-red-900 dark:text-red-600">{window.location.pathname}</code></h1>
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-center">
                <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">Error occurred on {new Date().toTimeString()}</span>
              </div>
            </div>
            <div className="mt-8">
              <Link to="/" className="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md dark:bg-blue-800 hover:bg-blue-500 dark:hover:bg-blue-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-blue-700">
                Back to Home Page
              </Link>
            </div>
          </div>
        </div>
      </div>
      : (
        purchase ?
          <div className="bg-gray-100 dark:bg-gray-800 pt-24 lg:pt-16 md:pt-32 sm:pt-32">
            <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-128 lg:py-16 lg:flex-row lg:items-center lg:space-x-6">
              <section className="w-full max-w-2xl px-6 py-4 mx-auto bg-white rounded-md shadow-md dark:bg-gray-900">
                <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white">{shares < 0 ? "Selling" : "Buying"} {stock.name} stock.</h2>
                <p className="mt-3 text-center text-gray-600 dark:text-gray-400">Enter a <strong>negative value</strong> to sell shares.</p>

                <div className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-4">
                  <div className="flex flex-col items-center px-4 py-3 text-gray-700 rounded-md dark:text-gray-200 ">
                    <div>
                      <span className="relative inline-block px-3 py-1 font-semibold text-blue-900 leading-tight">
                        <span aria-hidden="true" className="absolute inset-0 bg-blue-200 dark:bg-blue-700 opacity-50 rounded-full">
                        </span>
                        <span className="relative text-blue-500 dark:text-blue-400">
                          {stock.ticker}
                        </span>
                      </span>
                    </div>
                    <span className="mt-2">Ticker</span>
                  </div>

                  <div className="flex flex-col items-center px-4 py-3 text-gray-700 rounded-md dark:text-gray-200 ">
                    <div>
                      <span className="relative inline-block px-3 py-1 font-semibold text-blue-900 leading-tight">
                        <span aria-hidden="true" className="absolute inset-0 bg-blue-200 dark:bg-blue-700 opacity-50 rounded-full">
                        </span>
                        <span className="relative text-blue-500 dark:text-blue-400">
                          {shares}
                        </span>
                      </span>
                    </div>
                    <span className="mt-2">Shares</span>
                  </div>

                  {purchase?._id &&
                    <div className="flex flex-col items-center px-4 py-3 text-gray-700 rounded-md dark:text-gray-200 ">
                      <div>
                        <span className="relative inline-block px-3 py-1 font-semibold text-blue-900 leading-tight">
                          <span aria-hidden="true" className="absolute inset-0 bg-blue-200 dark:bg-blue-700 opacity-50 rounded-full">
                          </span>
                          <span className="relative text-blue-500 dark:text-blue-400">
                            {purchase.shares}
                          </span>
                        </span>
                      </div>
                      <span className="mt-2">Shares Owned</span>
                    </div>
                  }

                  <div className="flex flex-col items-center px-4 py-3 text-gray-700 rounded-md dark:text-gray-200 ">
                    <div>
                      <span className="relative inline-block px-3 py-1 font-semibold text-blue-900 leading-tight">
                        <span aria-hidden="true" className="absolute inset-0 bg-blue-200 dark:bg-blue-700 opacity-50 rounded-full">
                        </span>
                        <span className="relative text-blue-500 dark:text-blue-400">
                          ${parseFloat(shares * stock.currentPrice).toFixed(2)}
                        </span>
                      </span>
                    </div>
                    <span className="mt-2">Cost</span>
                  </div>
                </div>

                <form onSubmit={handleSubmitUpdatePurchase}>
                  <div className="mt-2">
                    <div className="items-center -mx-2 md:flex">
                      <div className="w-full mx-0 sm:mx-2">
                        <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Shares</label>
                        <input onChange={handleChange} className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="number" name="sharesBought" min="-100" max="100" />
                      </div>
                    </div>
                    {(shares < 0 && (Math.abs(shares) >= purchase.shares)) &&
                      <div className="flex mt-6 w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                        <div className="flex items-center justify-center w-12 bg-yellow-400">
                          <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z" />
                          </svg>
                        </div>

                        <div className="px-4 py-2 -mx-3">
                          <div className="mx-3">
                            <span className="font-semibold text-yellow-400 dark:text-yellow-300">Warning</span>
                            <p className="text-sm text-gray-600 dark:text-gray-200">Entering a negative value less or equal to your current shares will sell your entire investment!</p>
                          </div>
                        </div>
                      </div>
                    }
                    {errors &&
                      <div className="flex mt-6 w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                        <div className="flex items-center justify-center w-12 bg-red-500">
                          <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
                          </svg>
                        </div>

                        <div className="px-4 py-2 -mx-3">
                          <div className="mx-3">
                            <span className="font-semibold text-red-500 dark:text-red-400">Error</span>
                            <p className="text-sm text-gray-600 dark:text-gray-200">{errors}</p>
                          </div>
                        </div>
                      </div>
                    }
                    <div className="flex justify-center mt-6 flex-col sm:flex-row">
                      <button onClick={() => switchSellOrBuy(false)} type="submit" className="w-full px-4 py-2 text-white transition-colors duration-200 transform bg-yellow-500 rounded-md dark:bg-yellow-700 hover:bg-yellow-600 dark:hover:bg-yellow-600 focus:outline-none focus:bg-yellow-500 dark:focus:bg-yellow-600">Buy / Sell More</button>
                      <button onClick={() => switchSellOrBuy(true)} className="ml-0 sm:ml-4 mt-2 sm:mt-0 w-full px-4 py-2 text-white transition-colors duration-200 transform bg-red-500 rounded-md dark:bg-red-700 hover:bg-red-600 dark:hover:bg-red-600 focus:outline-none focus:bg-red-500 dark:focus:bg-red-600">Sell All</button>
                      <Link to={`/purchased/${stock._id}`} className="text-center ml-0 sm:ml-4 mt-2 sm:mt-0 w-full px-4 py-2 text-white transition-colors duration-200 transform bg-gray-500 rounded-md dark:bg-gray-700 hover:bg-gray-600 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-500 dark:focus:bg-gray-600">Cancel</Link>
                    </div>
                  </div>
                </form>
              </section>
            </div>
          </div>
          :
          <div className="bg-gray-100 dark:bg-gray-800 pt-36 sm:pt-12">
            <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-128 lg:py-16 lg:flex-row lg:items-center lg:space-x-6">
              <section className="w-full max-w-2xl px-6 py-4 mx-auto bg-white rounded-md shadow-md dark:bg-gray-900">
                <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white">Buying {stock.name} stock.</h2>
                <p className="mt-3 text-center text-gray-600 dark:text-gray-400">Limit of <strong>100</strong> shares per transaction.</p>

                <div className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-3">
                  <div className="flex flex-col items-center px-4 py-3 text-gray-700 rounded-md dark:text-gray-200 ">
                    <div>
                      <span className="relative inline-block px-3 py-1 font-semibold text-blue-900 leading-tight">
                        <span aria-hidden="true" className="absolute inset-0 bg-blue-200 dark:bg-blue-700 opacity-50 rounded-full">
                        </span>
                        <span className="relative text-blue-500 dark:text-blue-400">
                          {stock.ticker}
                        </span>
                      </span>
                    </div>
                    <span className="mt-2">Ticker</span>
                  </div>

                  <div className="flex flex-col items-center px-4 py-3 text-gray-700 rounded-md dark:text-gray-200 ">
                    <div>
                      <span className="relative inline-block px-3 py-1 font-semibold text-blue-900 leading-tight">
                        <span aria-hidden="true" className="absolute inset-0 bg-blue-200 dark:bg-blue-700 opacity-50 rounded-full">
                        </span>
                        <span className="relative text-blue-500 dark:text-blue-400">
                          {shares}
                        </span>
                      </span>
                    </div>
                    <span className="mt-2">Shares</span>
                  </div>

                  <div className="flex flex-col items-center px-4 py-3 text-gray-700 rounded-md dark:text-gray-200 ">
                    <div>
                      <span className="relative inline-block px-3 py-1 font-semibold text-blue-900 leading-tight">
                        <span aria-hidden="true" className="absolute inset-0 bg-blue-200 dark:bg-blue-700 opacity-50 rounded-full">
                        </span>
                        <span className="relative text-blue-500 dark:text-blue-400">
                          ${parseFloat(shares * stock.currentPrice).toFixed(2)}
                        </span>
                      </span>
                    </div>
                    <span className="mt-2">Cost</span>
                  </div>
                </div>

                <form onSubmit={handleSubmitNewPurchase}>
                  <div className="mt-2">
                    <div className="items-center -mx-2 md:flex">
                      <div className="w-full mx-0 sm:mx-2">
                        <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Shares</label>
                        <input onChange={handleChange} className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="number" name="sharesBought" min="1" max="100" />
                      </div>
                    </div>
                    {errors &&
                      <div className="w-full mx-0 sm:mx-2">
                        <div className="flex mt-6 w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                          <div className="flex items-center justify-center w-12 bg-red-500">
                            <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
                            </svg>
                          </div>

                          <div className="px-4 py-2 -mx-3">
                            <div className="mx-3">
                              <span className="font-semibold text-red-500 dark:text-red-400">Error</span>
                              <p className="text-sm text-gray-600 dark:text-gray-200">{errors}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    }
                    <div className="flex justify-center mt-6">
                      <button type="submit" className="w-full px-4 py-2 text-white transition-colors duration-200 transform bg-blue-500 rounded-md dark:bg-blue-700 hover:bg-blue-600 dark:hover:bg-blue-600 focus:outline-none focus:bg-blue-500 dark:focus:bg-blue-600">Buy Shares</button>
                      <Link to={`/stock/${stock._id}`} className="text-center ml-4 w-full px-4 py-2 text-white transition-colors duration-200 transform bg-gray-500 rounded-md dark:bg-gray-700 hover:bg-gray-600 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-500 dark:focus:bg-gray-600">Cancel</Link>
                    </div>
                  </div>
                </form>
              </section>
            </div>
          </div>
      )
  );
}

export default TransactionForm;

