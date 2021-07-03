import React from 'react';
import { Link, useHistory } from "react-router-dom";
import ListViewSkeleton from './ListViewSkeleton';
import CurrentPrice from "../../../CurrentPrice/CurrentPrice";
import PriceChart from "../../../PriceChart/PriceChart";

const ListView = (props) => {
  const { user, socket, stocks, purchases, errors } = props;
  const history = useHistory();

  const detailPage = (id) => {
    history.push(`/stock/${id}`);
  }

  return (
    <div className="bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-8 w-full">
        <div className="py-8">
          <div className="flex flex-row mb-1 sm:mb-0 justify-between w-full">
            <h2 className="text-2xl leading-tight dark:text-white">
              Stocks
            </h2>
            <div className="text-end">
              <form className="flex w-full max-w-sm space-x-3">
                <div className=" relative ">
                  <input type="text" id="&quot;form-subscribe-Filter" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="name" />
                </div>
                <button className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
                  Filter
                </button>
              </form>
            </div>
          </div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="table-fixed min-w-xl sm:min-w-full leading-normal">
                <thead>
                  <tr>
                    <th scope="col" className="w-1/12 px-5 py-3 bg-white dark:bg-gray-900  border-b border-gray-200 dark:border-gray-800 text-gray-800 dark:text-white text-left text-sm uppercase font-normal">
                      #
                    </th>
                    <th scope="col" className="hidden md:table-cell w-1/5 px-5 py-3 bg-white dark:bg-gray-900  border-b border-gray-200 dark:border-gray-800 text-gray-800  dark:text-white text-left text-sm uppercase font-normal">
                      Name
                    </th>
                    <th scope="col" className="w-1/5 px-5 py-3 bg-white dark:bg-gray-900  border-b border-gray-200 dark:border-gray-800 text-gray-800  text-left dark:text-white text-sm uppercase font-normal">
                      Ticker
                    </th>
                    <th scope="col" className="w-1/5 px-5 py-3 bg-white dark:bg-gray-900  border-b border-gray-200 dark:border-gray-800 text-gray-800  text-left dark:text-white text-sm uppercase font-normal">
                      Current Price
                    </th>
                    <th scope="col" className="hidden md:table-cell w-1/6 px-5 py-3 bg-white dark:bg-gray-900  border-b border-gray-200 dark:border-gray-800 text-gray-800  text-left dark:text-white text-sm uppercase font-normal">
                      Chart
                    </th>
                    {user?.result &&
                      <th scope="col" className="px-5 py-3 bg-white dark:bg-gray-900  border-b border-gray-200 dark:border-gray-800 text-gray-800  dark:text-white text-left text-sm uppercase font-normal">
                        Status
                      </th>
                    }
                    <th scope="col" className="w-1/6 px-5 py-3 bg-white dark:bg-gray-900  border-b border-gray-200 dark:border-gray-800 text-gray-800  text-left dark:text-white text-sm uppercase font-normal">

                    </th>
                  </tr>
                </thead>
                <tbody>
                  {!stocks?.length ?
                    <ListViewSkeleton />
                    :
                    <>
                      {stocks.map((stock, index) => (
                        <tr key={stock._id} className="bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">
                          <td onClick={() => detailPage(stock._id)} className="px-5 py-5 border-b border-gray-200 dark:border-gray-800  text-sm cursor-pointer">
                            <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                              {index + 1}
                            </p>
                          </td>
                          <td onClick={() => detailPage(stock._id)} className="hidden md:table-cell px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm cursor-pointer">
                            <div className="flex items-center">
                              <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                                {stock.name}
                              </p>
                            </div>
                          </td>
                          <td onClick={() => detailPage(stock._id)} className="px-5 py-5 border-b border-gray-200 dark:border-gray-800   text-sm cursor-pointer">
                            <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                              {stock.ticker}
                            </p>
                          </td>
                          <td onClick={() => detailPage(stock._id)} className="px-5 py-5 border-b border-gray-200 dark:border-gray-800   text-sm cursor-pointer">
                            <CurrentPrice currentPrice={stock.currentPrice} ticker={stock.ticker} socket={socket} />
                          </td>
                          <td onClick={() => detailPage(stock._id)} className="hidden md:table-cell px-5 py-5 border-b border-gray-200 dark:border-gray-800   text-sm cursor-pointer">
                            <PriceChart id={stock.ticker} legendDisplay={false} xDisplay={false} yDisplay={false} socket={socket} ticker={stock.ticker} currPrice={stock.currentPrice} styleSet={{ width: "100px", height: "80px" }} />
                          </td>
                          {user?.result &&
                            <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-800  text-sm">
                              {purchases?.length && purchases.find(p => p.stock === stock._id) ? <div style={{ color: "red" }}>Bought</div> : <div></div>}
                            </td>
                          }
                          <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-800   text-sm">
                            <Link to={`/transaction/${stock._id}`} class="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-gray-700">
                              Buy
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </>
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListView;