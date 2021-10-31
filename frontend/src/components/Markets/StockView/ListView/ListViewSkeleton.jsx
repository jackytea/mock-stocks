const ListViewSkeleton = () => {
  return (
    <>
      {[...Array(10).keys()].map(index => (
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
          <td className="hidden md:table-cell  bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">
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
        </tr>
      ))}
    </>
  );
}

export default ListViewSkeleton;