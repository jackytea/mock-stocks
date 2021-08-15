import React from "react";
import DefaultAvatarImage from '../../assets/images/avatar.jpg';

const Careers = () => {
  return (
    <>
      <div className="bg-white dark:bg-gray-800 pt-24">
        <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 z-20">
          <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span className="block">
              Careers at Mock Stocks.
            </span>
          </h2>
          <p className="text-xl mt-4 max-w-full mx-auto text-gray-400">
            See our job opportunities below.
          </p>
        </div>
      </div>
      <section className="bg-white dark:bg-gray-800">
        <div className="container px-8 sm:px-8 py-16 sm:py-16 mx-auto">
          <div className="items-center flex flex-col sm:flex-row">
            <div class="max-w-2xl px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-900">
              <div class="flex items-center justify-between">
                <span class="text-sm font-light text-gray-600 dark:text-gray-400">{new Date().toDateString()}</span>
                <p class="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform rounded bg-blue-500 hover:bg-gray-600 dark:bg-blue-700 dark:hover:bg-blue-600">Engineering</p>
              </div>
              <div class="mt-2">
                <p class="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200">Front-End Engineer</p>
                <p class="mt-2 text-gray-600 dark:text-gray-300">Join the Mock Stocks team as a Front-End Engineer to help us build beautiful and intuitive user-facing systems.</p>
              </div>
              <div class="flex items-center justify-between mt-4">
                <p href="#" class="text-red-600 dark:text-red-400 cursor-not-allowed">Position Unavailable</p>

                <div class="flex items-center">
                  <img class="hidden object-cover w-10 h-10 mx-4 rounded-full md:block" src={DefaultAvatarImage} alt="avatar" />
                  <p class="font-bold text-gray-700 dark:text-gray-200">Recruitment</p>
                </div>
              </div>
            </div>
            <div class="mt-4 sm:mt-0 ml-0 sm:ml-2 max-w-2xl px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-900">
              <div class="flex items-center justify-between">
                <span class="text-sm font-light text-gray-600 dark:text-gray-400">{new Date().toDateString()}</span>
                <p class="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform rounded bg-blue-500 hover:bg-gray-600 dark:bg-blue-700 dark:hover:bg-blue-600">Engineering</p>
              </div>
              <div class="mt-2">
                <p class="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200">Back-End Engineer</p>
                <p class="mt-2 text-gray-600 dark:text-gray-300">Join the Mock Stocks team as a Back-End Engineer to help us build reliable APIs and high-performance infrastructure.</p>
              </div>
              <div class="flex items-center justify-between mt-4">
                <p href="#" class="text-red-600 dark:text-red-400 cursor-not-allowed">Position Unavailable</p>

                <div class="flex items-center">
                  <img class="hidden object-cover w-10 h-10 mx-4 rounded-full md:block" src={DefaultAvatarImage} alt="avatar" />
                  <p class="font-bold text-gray-700 dark:text-gray-200">Recruitment</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 sm:mt-16 items-center flex flex-col sm:flex-row">
            <div class="max-w-2xl px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-900">
              <div class="flex items-center justify-between">
                <span class="text-sm font-light text-gray-600 dark:text-gray-400">{new Date().toDateString()}</span>
                <p class="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform rounded bg-blue-500 hover:bg-gray-600 dark:bg-blue-700 dark:hover:bg-blue-600">Engineering</p>
              </div>
              <div class="mt-2">
                <p class="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200">DevOps Engineer</p>
                <p class="mt-2 text-gray-600 dark:text-gray-300">Join the Mock Stocks team as a DevOps Engineer to help us continuously deploy , test, scale and maintain our large scale operations.</p>
              </div>
              <div class="flex items-center justify-between mt-4">
                <p href="#" class="text-red-600 dark:text-red-400 cursor-not-allowed">Position Unavailable</p>

                <div class="flex items-center">
                  <img class="hidden object-cover w-10 h-10 mx-4 rounded-full md:block" src={DefaultAvatarImage} alt="avatar" />
                  <p class="font-bold text-gray-700 dark:text-gray-200">Recruitment</p>
                </div>
              </div>
            </div>
            <div class="mt-4 sm:mt-0 ml-0 sm:ml-2 max-w-2xl px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-900">
              <div class="flex items-center justify-between">
                <span class="text-sm font-light text-gray-600 dark:text-gray-400">{new Date().toDateString()}</span>
                <p class="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform rounded bg-green-500 hover:bg-green-600 dark:bg-green-700 dark:hover:bg-green-600">Finance</p>
              </div>
              <div class="mt-2">
                <p class="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200">Staff Accountant</p>
                <p class="mt-2 text-gray-600 dark:text-gray-300">Join the Mock Stocks team as a Staff Accountant to help us keep track of our extensive financial and business operations.</p>
              </div>
              <div class="flex items-center justify-between mt-4">
                <p href="#" class="text-red-600 dark:text-red-400 cursor-not-allowed">Position Unavailable</p>

                <div class="flex items-center">
                  <img class="hidden object-cover w-10 h-10 mx-4 rounded-full md:block" src={DefaultAvatarImage} alt="avatar" />
                  <p class="font-bold text-gray-700 dark:text-gray-200">Recruitment</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 sm:mt-16 items-center flex flex-col sm:flex-row">
            <div class="max-w-2xl px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-900">
              <div class="flex items-center justify-between">
                <span class="text-sm font-light text-gray-600 dark:text-gray-400">{new Date().toDateString()}</span>
                <p class="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform rounded bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-700 dark:hover:bg-yellow-600">Management</p>
              </div>
              <div class="mt-2">
                <p class="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200">Product Manager</p>
                <p class="mt-2 text-gray-600 dark:text-gray-300">Join the Mock Stocks team as a Product Manager to oversee our vision, partaking in both engineering and business endeavours.</p>
              </div>
              <div class="flex items-center justify-between mt-4">
                <p href="#" class="text-red-600 dark:text-red-400 cursor-not-allowed">Position Unavailable</p>

                <div class="flex items-center">
                  <img class="hidden object-cover w-10 h-10 mx-4 rounded-full md:block" src={DefaultAvatarImage} alt="avatar" />
                  <p class="font-bold text-gray-700 dark:text-gray-200">Recruitment</p>
                </div>
              </div>
            </div>
            <div class="mt-4 sm:mt-0 ml-0 sm:ml-2 max-w-2xl px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-900">
              <div class="flex items-center justify-between">
                <span class="text-sm font-light text-gray-600 dark:text-gray-400">{new Date().toDateString()}</span>
                <p class="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform rounded bg-indigo-500 hover:bg-indigo-600 dark:bg-indigo-700 dark:hover:bg-indigo-600">Research</p>
              </div>
              <div class="mt-2">
                <p class="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200">Data Scientist</p>
                <p class="mt-2 text-gray-600 dark:text-gray-300">Join the Mock Stocks team as a Data Scientist to help us analyze the crypto markets for our upcoming decentralized finance project.</p>
              </div>
              <div class="flex items-center justify-between mt-4">
                <p href="#" class="text-red-600 dark:text-red-400 cursor-not-allowed">Position Unavailable</p>

                <div class="flex items-center">
                  <img class="hidden object-cover w-10 h-10 mx-4 rounded-full md:block" src={DefaultAvatarImage} alt="avatar" />
                  <p class="font-bold text-gray-700 dark:text-gray-200">Recruitment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Careers;