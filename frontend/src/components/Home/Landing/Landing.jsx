import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Stocks from '../../../assets/images/stocks.svg';

const Landing = () => {
  const [user,] = useState(JSON.parse(localStorage.getItem('profile')));

  return (
    <header className="bg-white dark:bg-gray-800">
      <div className="container px-16 sm:px-32 pt-32 lg:pt-16 md:pt-48 sm:pt-32 mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-semibold text-gray-800 uppercase dark:text-white lg:text-4xl">
                { user?.result ? `Welcome back, ${String(user?.result.name).split(" ")[0]}.` : "Mock Stocks" }
              </h1>
              <p className="mt-2 text-gray-600 dark:text-gray-400 mb-6"> { user?.result ? <strong>Mock Stocks - </strong> : "" } The trading platform for everyone. Start off with a $100k in imaginary currency to see how you perform in the markets. Prices are randomly generated and are not reflective of real world stock performance.</p>
              <div className="flex flex-wrap">
                <Link to="/markets" className="mr-2 px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md dark:bg-blue-800 hover:bg-blue-500 dark:hover:bg-blue-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-blue-700">
                  Browse Markets
                </Link>
                <Link to="/auth" className="mt-2 sm:mt-0 px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md dark:bg-blue-800 hover:bg-blue-500 dark:hover:bg-blue-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-blue-700">
                  Get Started
                </Link>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img className="w-full h-full lg:max-w-2xl" src={Stocks} alt="stocks landing" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Landing;
