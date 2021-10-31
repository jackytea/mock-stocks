import React from "react";
import { Link } from 'react-router-dom';
import Step1 from '../../assets/images/step1.svg';
import Step2 from '../../assets/images/step2.svg';
import Step3 from '../../assets/images/step3.svg';
import Step4 from '../../assets/images/step4.svg';

const Guide = () => {
  return (
    <>
      <div className="bg-white dark:bg-gray-800 pt-24">
        <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 z-20">
          <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span className="block">
              The Official Mock Stocks Guide.
            </span>
          </h2>
          <p className="text-xl mt-4 max-w-full mx-auto text-gray-400">
            Follow the guide below to get started with Mock Stocks and invest today!
          </p>
        </div>
      </div>
      <section className="bg-white dark:bg-gray-800">
        <div className="container px-16 sm:px-32 py-16 sm:py-16 mx-auto">
          <div className="items-center flex flex-col lg:flex-row">
            <div className="lg:w-1/2 dark:bg-gray-900 p-8 rounded-lg shadow">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Step 1: Log Into Mock Stocks</h2>
              <p className="my-4 text-gray-500 dark:text-gray-400 lg:max-w-full">
                Log in to your Mock Stocks account. If you don't have an account, you can create one by clicking the button below.
              </p>
              <Link to="/auth" className="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md dark:bg-blue-800 hover:bg-blue-500 dark:hover:bg-blue-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-blue-700">
                Login
              </Link>
            </div>
            <div className="mt-8 lg:mt-0 lg:w-1/2">
              <div className="flex items-center justify-center lg:justify-end">
                <div className="max-w-md">
                  <img className="opacity-90 object-contain object-center w-full h-72" src={Step1} alt="step 1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-800">
        <div className="container px-16 sm:px-32 py-16 sm:py-16 mx-auto">
          <div className="items-center flex flex-col-reverse lg:flex-row">
            <div className="mt-8 lg:mt-0 lg:w-1/2">
              <div className="flex items-center justify-center lg:justify-start">
                <div className="max-w-md">
                  <img className="opacity-90 object-contain object-center w-full h-72" src={Step2} alt="step 2" />
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 dark:bg-gray-900 p-8 rounded-lg shadow">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Step 2: Browse Stocks</h2>
              <p className="my-4 text-gray-500 dark:text-gray-400 lg:max-w-full">
                Browse our collection of the biggest names in the industry and invest in a company.
              </p>
              <Link to="/markets" className="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md dark:bg-blue-800 hover:bg-blue-500 dark:hover:bg-blue-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-blue-700">
                Browse Markets
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-800">
        <div className="container px-16 sm:px-32 py-16 sm:py-16 mx-auto">
          <div className="items-center flex flex-col lg:flex-row">
            <div className="lg:w-1/2 dark:bg-gray-900 p-8 rounded-lg shadow">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Step 3: Make a Transaction</h2>
              <p className="mt-4 text-gray-500 dark:text-gray-400 lg:max-w-full">
                Buy up to 100 shares with your virtual currency. Note that price updates may affect the money needed for a transaction.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 lg:w-1/2">
              <div className="flex items-center justify-center lg:justify-end">
                <div className="max-w-md">
                  <img className="opacity-90 object-contain object-center w-full h-72" src={Step3} alt="step 3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-800">
        <div className="container px-16 sm:px-32 py-16 sm:py-16 mx-auto">
          <div className="items-center flex flex-col-reverse lg:flex-row">
            <div className="mt-8 lg:mt-0 lg:w-1/2">
              <div className="flex items-center justify-center lg:justify-start">
                <div className="max-w-md">
                  <img className="opacity-90 object-contain  object-center w-full h-72" src={Step4} alt="step 4" />
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 dark:bg-gray-900 p-8 rounded-lg shadow">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Step 4: Sit Back and Invest</h2>
              <p className="mt-4 text-gray-500 dark:text-gray-400 lg:max-w-full">
                Now you're done! Check out your investments to see your profits and sell at anytime!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Guide;