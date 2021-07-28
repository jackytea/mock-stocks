import React from 'react';
import { Link, useHistory } from "react-router-dom";
import InvestmentPrice from '../../InvestmentPrice/InvestmentPrice';

const PurchaseListView = (props) => {
  const { socket, purchases } = props;
  const history = useHistory();

  const detailPage = (id) => {
    history.push(`/purchased/${id}`);
  }

  return (
    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
      <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
        <table className="table-fixed min-w-xl sm:min-w-full leading-normal">
          <thead>
            <tr>
              <th scope="col" className="hidden md:table-cell w-1/12 px-5 py-3 bg-gray-50 dark:bg-gray-900  border-b border-gray-200 dark:border-gray-800 text-gray-800 dark:text-white text-left text-sm uppercase font-normal">
                #
              </th>
              <th scope="col" className="w-1/5 px-5 py-3 bg-gray-50 dark:bg-gray-900  border-b border-gray-200 dark:border-gray-800 text-gray-800  dark:text-white text-left text-sm uppercase font-normal">
                Ticker
              </th>
              <th scope="col" className="hidden md:table-cell w-1/5 px-5 py-3 bg-gray-50 dark:bg-gray-900  border-b border-gray-200 dark:border-gray-800 text-gray-800  text-left dark:text-white text-sm uppercase font-normal">
                Shares
              </th>
              <th scope="col" className="hidden md:table-cell w-1/5 px-5 py-3 bg-gray-50 dark:bg-gray-900  border-b border-gray-200 dark:border-gray-800 text-gray-800  text-left dark:text-white text-sm uppercase font-normal">
                Investment
              </th>
              <th scope="col" className="w-1/6 px-5 py-3 bg-gray-50 dark:bg-gray-900  border-b border-gray-200 dark:border-gray-800 text-gray-800  text-left dark:text-white text-sm uppercase font-normal">
                Gain
              </th>
              <th scope="col" className="w-1/6 px-5 py-3 bg-gray-50 dark:bg-gray-900  border-b border-gray-200 dark:border-gray-800 text-gray-800  text-left dark:text-white text-sm uppercase font-normal">

              </th>
            </tr>
          </thead>
          <tbody>
            {purchases?.length ?
              <>
                {purchases.map((purchase, index) => (
                  <tr key={purchase._id} className="bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">
                    <td onClick={() => detailPage(purchase.stock)} className="hidden md:table-cell px-5 py-5 border-b border-gray-200 dark:border-gray-800  text-sm cursor-pointer">
                      <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                        {index + 1}
                      </p>
                    </td>
                    <td onClick={() => detailPage(purchase.stock)} className="px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm cursor-pointer">
                      <div className="flex items-center">
                        <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                          {purchase.tickerBought}
                        </p>
                      </div>
                    </td>
                    <td onClick={() => detailPage(purchase.stock)} className="hidden md:table-cell px-5 py-5 border-b border-gray-200 dark:border-gray-800   text-sm cursor-pointer">
                      <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                        {purchase.shares}
                      </p>
                    </td>
                    <td onClick={() => detailPage(purchase.stock)} className="hidden md:table-cell px-5 py-5 border-b border-gray-200 dark:border-gray-800   text-sm cursor-pointer">
                      <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                        ${purchase.initialInvestment.toFixed(2)}
                      </p>
                    </td>
                    <td onClick={() => detailPage(purchase.stock)} className="px-5 py-5 border-b border-gray-200 dark:border-gray-800   text-sm cursor-pointer">
                      <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                        <InvestmentPrice shares={purchase.shares} ticker={purchase.tickerBought} initialInvestment={purchase.initialInvestment} socket={socket} />
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-800   text-sm">
                      <Link to={`/purchased/${purchase.stock}`} className="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-500 rounded-md dark:bg-gray-800 hover:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-500 dark:focus:bg-gray-700">
                        Details
                      </Link>
                      <Link to={`/transaction/${purchase.stock}`} className="ml-2 px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-yellow-500 rounded-md dark:bg-yellow-600 hover:bg-yellow-500 dark:hover:bg-yellow-700 focus:outline-none focus:bg-yellow-500 dark:focus:bg-yellow-700">
                        Update
                      </Link>
                    </td>
                  </tr>
                ))}
              </>
              :
              <>
                <tr>
                  <td className="hidden md:table-cell bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">
                    <div className="animate-pulse flex space-x-4">
                      <div className="p-4 max-w-sm w-full mx-auto">
                        <div className="flex-1 space-y-4 py-1">
                          <div className="space-y-2">
                            <div className="h-4 bg-gray-200 dark:bg-gray-500 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">
                    <div className="animate-pulse flex space-x-4">
                      <div className="p-4 max-w-sm w-full mx-auto">
                        <div className="flex-1 space-y-4 py-1">
                          <div className="space-y-2">
                            <div className="h-4 bg-gray-200 dark:bg-gray-500 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="hidden md:table-cell bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">
                    <div className="animate-pulse flex space-x-4">
                      <div className="p-4 max-w-sm w-full mx-auto">
                        <div className="flex-1 space-y-4 py-1">
                          <div className="space-y-2">
                            <div className="h-4 bg-gray-200 dark:bg-gray-500 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="hidden md:table-cell bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">
                    <div className="animate-pulse flex space-x-4">
                      <div className="p-4 max-w-sm w-full mx-auto">
                        <div className="flex-1 space-y-4 py-1">
                          <div className="space-y-2">
                            <div className="h-4 bg-gray-200 dark:bg-gray-500 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">
                    <div className="animate-pulse flex space-x-4">
                      <div className="p-4 max-w-sm w-full mx-auto">
                        <div className="flex-1 space-y-4 py-1">
                          <div className="space-y-2">
                            <div className="h-4 bg-gray-200 dark:bg-gray-500 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">
                    <div className="animate-pulse flex space-x-4">
                      <div className="p-4 max-w-sm w-full mx-auto">
                        <div className="flex-1 space-y-4 py-1">
                          <div className="space-y-2">
                            <div className="h-4 bg-gray-200 dark:bg-gray-500 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </>
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PurchaseListView;