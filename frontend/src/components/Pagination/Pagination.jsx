import React from 'react';

const Pagination = (props) => {
  const { currentPage, stocksPerPage, totalStocks, paginate } = props;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalStocks / stocksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex flex-wrap justify-center mt-3">
      {pageNumbers.map(number => (
        <button key={number} onClick={() => paginate(number)} className={currentPage === number ? "cursor-pointer flex items-center px-4 py-2 mx-1 text-gray-200 transition-colors duration-200 transform bg-blue-500 rounded-md dark:bg-blue-700 dark:text-gray-200 hover:bg-blue-300 dark:hover:bg-blue-700 hover:text-black dark:hover:text-gray-700 sm:mt-0 mt-2" : "cursor-pointer flex items-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-black dark:hover:text-gray-200 sm:mt-0 mt-2"}>
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;