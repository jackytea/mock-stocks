const GridViewSkeleton = () => {
  return (
    <>
      {[...Array(4).keys()].map(index => (
        <div class="animate-pulse max-w-xs mx-auto overflow-hidden bg-gray-200 rounded-lg shadow-lg dark:bg-gray-900 mt-4 w-96">
          <div className="animate-pulse flex space-x-4">
            <div className="p-4 max-w-sm w-full mx-auto">
              <div className="flex-1 space-y-4 py-1">
                <div className="space-y-2">
                  <div className="h-32 bg-white dark:bg-gray-700 rounded flex justify-center items-center">
                    <h1 className="text-xl text-gray-600 darkLtext-gray-900">No Results</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="animate-pulse flex space-x-4">
            <div className="p-4 max-w-sm w-full mx-auto">
              <div className="flex-1 space-y-4 py-1">
                <div className="space-y-2">
                  <div className="h-4 bg-white dark:bg-gray-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="animate-pulse flex space-x-4">
            <div className="p-4 max-w-sm w-full mx-auto">
              <div className="flex-1 space-y-4 py-1">
                <div className="space-y-2">
                  <div className="h-4 bg-white dark:bg-gray-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default GridViewSkeleton;