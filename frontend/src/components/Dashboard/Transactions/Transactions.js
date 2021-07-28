import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getTransactions } from "../../../actions/transactions";
import TransactionsSkeleton from "./TransactionsSkeleton";

const Transactions = () => {
  const dispatch = useDispatch();
  const transactions = useSelector((state) => state.transactionsReducer);

  useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch]);

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="container px-4 py-4 mx-auto">
        <h2 className="text-left text-lg font-semibold text-gray-700 capitalize dark:text-gray-200 mb-2">Transactions ({!transactions?.length ? 0 : transactions.length} latest records)</h2>
        {!transactions?.length ? <TransactionsSkeleton/>
          :
          <div className="text-xs overflow-auto max-h-96 shadow">
            <div className="shadow rounded-lg">
              <table className="table-auto leading-normal">
                <thead>
                  <tr>
                    <th scope="col" className="w-1/6 px-5 py-3 bg-gray-50 dark:bg-gray-800  border-b border-gray-200 dark:border-gray-800 text-gray-800  dark:text-white text-left text-xs uppercase font-normal">
                      Type
                    </th>
                    <th scope="col" className=" hidden md:table-cell w-1/6 px-5 py-3 bg-gray-50 dark:bg-gray-800  border-b border-gray-200 dark:border-gray-800 text-gray-800  dark:text-white text-left text-xs uppercase font-normal">
                      Shares
                    </th>
                    <th scope="col" className="w-1/6 px-5 py-3 bg-gray-50 dark:bg-gray-800  border-b border-gray-200 dark:border-gray-800 text-gray-800  text-left dark:text-white text-xs uppercase font-normal">
                      Ticker
                    </th>
                    <th scope="col" className="w-1/6 px-5 py-3 bg-gray-50 dark:bg-gray-800  border-b border-gray-200 dark:border-gray-800 text-gray-800  text-left dark:text-white text-xs uppercase font-normal">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction, index) => (
                    <tr key={transaction._id} className="bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">
                      <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-800  text-xs ">
                        <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                          {transaction.transactionType}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-800  text-xs ">
                        <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                          {transaction.shares}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-800  text-xs ">
                        <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                          {transaction.tickerBought}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-800  text-xs ">
                        <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                          {new Date(transaction.transactedAt).toDateString()} {new Date(transaction.transactedAt).toLocaleTimeString()}
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
