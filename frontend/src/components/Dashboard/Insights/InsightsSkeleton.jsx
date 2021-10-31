import React from "react";
import { Link } from 'react-router-dom';

const InsightsSkeleton = () => {
  return (
    <div className="text-xs overflow-auto h-80">
      <div className="rounded-lg flex flex-col items-center justify-center">
        <h2 className="text-left text-xl font-semibold text-gray-400 dark:text-gray-600 mt-32">No active investments found...</h2>
        <Link to="/markets" className="mt-2 px-4 py-2 text-xl font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md dark:bg-blue-800 hover:bg-blue-500 dark:hover:bg-blue-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-blue-700">
          Browse Markets
        </Link>
      </div>
    </div>
  )
}

export default InsightsSkeleton;