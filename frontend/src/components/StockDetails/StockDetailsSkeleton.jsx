import React from "react";

const StockDetailsSkeleton = () => {
  return (
    <div className="bg-white dark:bg-gray-800 pt-24 lg:pt-16 md:pt-32 sm:pt-32">
      <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-128 lg:py-16 lg:flex-row lg:items-center lg:space-x-6">
        <div className="flex flex-col-reverse items-left w-full lg:flex-col-reverse lg:w-1/2">
          <div className="animate-pulse max-w-full lg:mx-12 lg:order-2">
            <h1 className="text-3xl font-medium text-gray-800 dark:text-white lg:text-4xl">Loading your stock...</h1>
            <div className="my-2 h-4 bg-gray-200 dark:bg-gray-500 rounded"></div>
            <div className="my-2 h-4 bg-gray-200 dark:bg-gray-500 rounded"></div>
            <div className="my-2 h-4 bg-gray-200 dark:bg-gray-500 rounded"></div>
            <div className="h-12 bg-gray-200 dark:bg-gray-500 rounded"></div>
          </div>
        </div>
        <div className="animate-pulse flex items-center justify-center w-full h-96 lg:w-1/2">
          <div className="object-cover w-full h-full max-w-2xl rounded-md bg-gray-200 dark:bg-gray-700"></div>
        </div>
      </div>
    </div>
  );
}

export default StockDetailsSkeleton;