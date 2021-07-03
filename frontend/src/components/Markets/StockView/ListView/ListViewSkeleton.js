const ListViewSkeleton = () => {
  return (
    <>
      {[...Array(10).keys()].map(_ => (
        <tr>
          <td className="bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">
            <div class="animate-pulse flex space-x-4">
              <div class="p-4 max-w-sm w-full mx-auto">
                <div class="flex-1 space-y-4 py-1">
                  <div class="space-y-2">
                    <div class="h-4 bg-blue-400 dark:bg-gray-500 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </td>
          <td className="bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">
            <div class="animate-pulse flex space-x-4">
              <div class="p-4 max-w-sm w-full mx-auto">
                <div class="flex-1 space-y-4 py-1">
                  <div class="space-y-2">
                    <div class="h-4 bg-blue-400 dark:bg-gray-500 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </td>
          <td className="bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">
            <div class="animate-pulse flex space-x-4">
              <div class="p-4 max-w-sm w-full mx-auto">
                <div class="flex-1 space-y-4 py-1">
                  <div class="space-y-2">
                    <div class="h-4 bg-blue-400 dark:bg-gray-500 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </td>
          <td className="bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">
            <div class="animate-pulse flex space-x-4">
              <div class="p-4 max-w-sm w-full mx-auto">
                <div class="flex-1 space-y-4 py-1">
                  <div class="space-y-2">
                    <div class="h-4 bg-blue-400 dark:bg-gray-500 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </td>
          <td className="bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">
            <div class="animate-pulse flex space-x-4">
              <div class="p-4 max-w-sm w-full mx-auto">
                <div class="flex-1 space-y-4 py-1">
                  <div class="space-y-2">
                    <div class="h-4 bg-blue-400 dark:bg-gray-500 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </td>
          <td className="bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">
            <div class="animate-pulse flex space-x-4">
              <div class="p-4 max-w-sm w-full mx-auto">
                <div class="flex-1 space-y-4 py-1">
                  <div class="space-y-2">
                    <div class="h-4 bg-blue-400 dark:bg-gray-500 rounded"></div>
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