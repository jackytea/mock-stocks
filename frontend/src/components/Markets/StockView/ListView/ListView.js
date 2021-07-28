import React from 'react';
import { Link, useHistory } from "react-router-dom";
import ListViewSkeleton from './ListViewSkeleton';
import CurrentPrice from "../../../CurrentPrice/CurrentPrice";
import PriceChart from "../../../PriceChart/PriceChart";

const ListView = (props) => {
  const { 
    socket, 
    filteredStocks,
    sortByField,
    sortById,
    sortByName,
    sortByTicker,
    sortByPrice,
    setSortById,
    setSortByName,
    setSortByTicker,
    setSortByPrice 
  } = props;
  const history = useHistory();

  const detailPage = (id) => {
    history.push(`/stock/${id}`);
  }

  return (
    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
      <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
        <table className="table-fixed min-w-xl sm:min-w-full leading-normal">
          <thead>
            <tr>
              <th onClick={() => { sortByField("id", sortById); setSortById((prevSortById) => !prevSortById); }} scope="col" className="cursor-pointer w-1/12 px-5 py-3 bg-gray-50 dark:bg-gray-900  border-b border-gray-200 dark:border-gray-800 text-gray-800 dark:text-white text-left text-sm uppercase font-normal">
                ID
              </th>
              <th onClick={() => { sortByField("name", sortByName); setSortByName((prevSortByName) => !prevSortByName); }} scope="col" className="cursor-pointer hidden md:table-cell w-1/5 px-5 py-3 bg-gray-50 dark:bg-gray-900  border-b border-gray-200 dark:border-gray-800 text-gray-800  dark:text-white text-left text-sm uppercase font-normal">
                Name
              </th>
              <th onClick={() => { sortByField("ticker", sortByTicker); setSortByTicker((prevSortByTicker) => !prevSortByTicker); }} scope="col" className="cursor-pointer w-1/5 px-5 py-3 bg-gray-50 dark:bg-gray-900  border-b border-gray-200 dark:border-gray-800 text-gray-800  text-left dark:text-white text-sm uppercase font-normal">
                Ticker
              </th>
              <th onClick={() => { sortByField("currentPrice", sortByPrice); setSortByPrice((prevSortByPrice) => !prevSortByPrice); }} scope="col" className="cursor-pointer w-1/5 px-5 py-3 bg-gray-50 dark:bg-gray-900  border-b border-gray-200 dark:border-gray-800 text-gray-800  text-left dark:text-white text-sm uppercase font-normal">
                Current Price
              </th>
              <th scope="col" className="hidden md:table-cell w-1/6 px-5 py-3 bg-gray-50 dark:bg-gray-900  border-b border-gray-200 dark:border-gray-800 text-gray-800  text-left dark:text-white text-sm uppercase font-normal">
                Chart
              </th>
              <th scope="col" className="w-1/6 px-5 py-3 bg-gray-50 dark:bg-gray-900  border-b border-gray-200 dark:border-gray-800 text-gray-800  text-left dark:text-white text-sm uppercase font-normal">

              </th>
            </tr>
          </thead>
          <tbody>
            {!filteredStocks?.length ?
              <ListViewSkeleton />
              :
              <>
                {filteredStocks.map((stock) => (
                  <tr key={stock._id} className="bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">
                    <td onClick={() => detailPage(stock._id)} className="px-5 py-5 border-b border-gray-200 dark:border-gray-800  text-sm cursor-pointer">
                      <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                        {stock.id}
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
                      <PriceChart id={stock.ticker} legendDisplay={false} xDisplay={false} yDisplay={false} socket={socket} ticker={stock.ticker} currPrice={stock.currentPrice} styleSet={"h-16 w-32"} />
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-800   text-sm">
                      <Link to={`/transaction/${stock._id}`} className="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md dark:bg-blue-600 hover:bg-blue-500 dark:hover:bg-blue-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-blue-700">
                        Buy
                      </Link>
                      <Link to={`/stock/${stock._id}`} className="ml-2 px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-500 rounded-md dark:bg-gray-800 hover:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-500 dark:focus:bg-gray-700">
                        Details
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
  );
}

export default ListView;