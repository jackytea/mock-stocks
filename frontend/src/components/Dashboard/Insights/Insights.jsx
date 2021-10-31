import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getPurchases } from '../../../actions/purchased';
import InsightsChart from "./InsightsChart";
import InsightsSkeleton from "./InsightsSkeleton";

const Insights = (props) => {
  const dispatch = useDispatch();
  const purchases = useSelector((state) => state.purchasedReducer);
  const { user } = props;

  useEffect(() => {
    dispatch(getPurchases());
  }, [dispatch]);

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-4 mx-auto">
        <h2 className="text-left text-lg font-semibold text-gray-700 capitalize dark:text-gray-200 mb-2">Insights</h2>
        <div className="text-xs overflow-auto max-h-96">
          <div className="rounded-lg flex flex-col sm:flex-row ">
            <span className="w-full sm:w-1/2 h-12 relative inline-block px-3 py-1 font-semibold text-yellow-900 leading-tight flex items-center justify-center">
              <span aria-hidden="true" className="absolute inset-0 bg-yellow-200 dark:bg-yellow-700 opacity-50 rounded-full">
              </span>
              <span className="text-lg sm:text-xl relative text-yellow-600 dark:text-yellow-400">
                ${user?.result.coins.toFixed(2)}
              </span>
            </span>
            {user?.result.coins > 100000 ?
              <span className="mt-2 sm:mt-0 ml-0 sm:ml-2 w-full sm:w-1/2 h-12 relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight flex items-center justify-center">
                <span aria-hidden="true" className="absolute inset-0 bg-green-200 dark:bg-green-700 opacity-50 rounded-full">
                </span>
                <span className="text-lg sm:text-xl relative text-green-600 dark:text-green-400">
                  + %{(Math.abs(1 - (user?.result.coins / 100000)) * 100).toFixed(2)} profit
                </span>
              </span>
              :
              <span className="mt-2 sm:mt-0 ml-0 sm:ml-2 w-full sm:w-1/2 h-12 relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight flex items-center justify-center">
                <span aria-hidden="true" className="absolute inset-0 bg-red-200 dark:bg-red-700 opacity-50 rounded-full">
                </span>
                <span className="text-lg sm:text-xl relative text-red-600 dark:text-red-400">
                  - %{(Math.abs(1 - (user?.result.coins / 100000)) * 100).toFixed(2)} loss
                </span>
              </span>
            }
          </div>
        </div>
        {purchases?.length ?
          <div className="text-xs overflow-auto">
            <div className="rounded-lg flex">
              <InsightsChart id={"insights-on-purchases-bar-chart"} purchases={purchases} styleSet={"h-full w-full mt-8"} />
            </div>
          </div>
          :
          <InsightsSkeleton />
        }
      </div>
    </div>
  );
}

export default Insights;
