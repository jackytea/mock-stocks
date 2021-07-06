import React from 'react';

const PurchaseOverview = (props) => {
  const { purchases } = props;
  
  return (
    <div className="bg-white dark:bg-gray-800 pt-12">
      <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
          <span className="block">
            You have {purchases.length} {(purchases.length === 0 || purchases.length > 1) ? "investments" : "investment" }.
          </span>
        </h2>
        <p className="text-xl mt-4 max-w-md mx-auto text-gray-400">
          See the stocks you bought below.
        </p>
      </div>
    </div>
  );
}

export default PurchaseOverview;