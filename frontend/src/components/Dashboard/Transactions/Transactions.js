import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getTransactions } from "../../../actions/transactions";

const Transactions = () => {
  const dispatch = useDispatch();
  const transactions = useSelector((state) => state.transactionsReducer);

  useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch]);

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="container px-4 py-4 mx-auto">
        <h2 class="text-left text-lg font-semibold text-gray-700 capitalize dark:text-gray-200 mb-2">Transactions</h2>
        {!transactions?.length ? <></>
          :
          <div className="text-center overflow-auto max-h-96">
            <div className="shadow rounded-lg">
              <table className="table-auto leading-normal">
                <thead>
                  <tr>
                    <th scope="col" className="cursor-pointer hidden md:table-cell w-1/5 px-5 py-3 bg-white dark:bg-gray-900  border-b border-gray-200 dark:border-gray-800 text-gray-800  dark:text-white text-left text-sm uppercase font-normal">
                      #
                    </th>
                    <th scope="col" className="w-1/5 px-5 py-3 bg-white dark:bg-gray-900  border-b border-gray-200 dark:border-gray-800 text-gray-800  dark:text-white text-left text-sm uppercase font-normal">
                      Type
                    </th>
                    <th scope="col" className="cursor-pointer hidden md:table-cell w-1/5 px-5 py-3 bg-white dark:bg-gray-900  border-b border-gray-200 dark:border-gray-800 text-gray-800  dark:text-white text-left text-sm uppercase font-normal">
                      Shares
                    </th>
                    <th scope="col" className="w-1/5 px-5 py-3 bg-white dark:bg-gray-900  border-b border-gray-200 dark:border-gray-800 text-gray-800  text-left dark:text-white text-sm uppercase font-normal">
                      Ticker
                    </th>
                    <th scope="col" className="w-1/6 px-5 py-3 bg-white dark:bg-gray-900  border-b border-gray-200 dark:border-gray-800 text-gray-800  text-left dark:text-white text-sm uppercase font-normal">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction, index) => (
                    <tr key={transaction._id} className="bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">
                      <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-800  text-sm cursor-pointer">
                        <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                          {index + 1}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-800  text-sm cursor-pointer">
                        <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                          {transaction.transactionType}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-800  text-sm cursor-pointer">
                        <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                          {transaction.shares}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-800  text-sm cursor-pointer">
                        <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                          {transaction.tickerBought}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-800  text-sm cursor-pointer">
                        <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                          {new Date(transaction.transactedAt).toDateString()}
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default Transactions;
