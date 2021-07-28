const LogsSkeleton = () => {
  return (
    <div className="text-xs overflow-auto max-h-96 shadow">
      <div className="shadow rounded-lg">
        <table className="table-auto leading-normal">
          <thead>
            <tr>
              <th scope="col" className="w-1/6 px-5 py-3 bg-gray-50 dark:bg-gray-800  border-b border-gray-200 dark:border-gray-800 text-gray-800  dark:text-white text-left text-xs uppercase font-normal">
                #
              </th>
              <th scope="col" className=" hidden md:table-cell w-1/6 px-5 py-3 bg-gray-50 dark:bg-gray-800  border-b border-gray-200 dark:border-gray-800 text-gray-800  dark:text-white text-left text-xs uppercase font-normal">
                Action
              </th>
              <th scope="col" className="w-1/6 px-5 py-3 bg-gray-50 dark:bg-gray-800  border-b border-gray-200 dark:border-gray-800 text-gray-800  text-left dark:text-white text-xs uppercase font-normal">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {[...Array(5).keys()].map(index => (
              <tr key={index}>
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

export default LogsSkeleton;