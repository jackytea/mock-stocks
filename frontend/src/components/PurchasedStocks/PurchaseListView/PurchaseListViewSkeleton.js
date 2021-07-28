const PurchaseListViewSkeleton = () => {
  return (
    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
      <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
        <table className="table-fixed min-w-xl sm:min-w-full leading-normal">
          <thead>
            <tr>
              <th scope="col" className="hidden md:table-cell w-1/12 px-5 py-3 bg-gray-50 dark:bg-gray-900  border-b border-gray-200 dark:border-gray-800 text-gray-800 dark:text-white text-left text-sm uppercase font-normal">
                #
              </th>
              <th scope="col" className="cursor-pointer w-1/5 px-5 py-3 bg-gray-50 dark:bg-gray-900  border-b border-gray-200 dark:border-gray-800 text-gray-800  dark:text-white text-left text-sm uppercase font-normal">
                Ticker
              </th>
              <th scope="col" className="hidden md:table-cell cursor-pointer w-1/5 px-5 py-3 bg-gray-50 dark:bg-gray-900  border-b border-gray-200 dark:border-gray-800 text-gray-800  text-left dark:text-white text-sm uppercase font-normal">
                Shares
              </th>
              <th scope="col" className="hidden md:table-cell cursor-pointer w-1/5 px-5 py-3 bg-gray-50 dark:bg-gray-900  border-b border-gray-200 dark:border-gray-800 text-gray-800  text-left dark:text-white text-sm uppercase font-normal">
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
            {[...Array(10).keys()].map(index => (
              <tr key={index}>
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PurchaseListViewSkeleton;