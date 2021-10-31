import React, { useState } from "react";
import General from "./General/General";
import Account from "./Account/Account";
import Insights from "./Insights/Insights";
import Transactions from "./Transactions/Transactions";
import Logs from "./Logs/Logs";

const Dashboard = () => {
  const [user] = useState(JSON.parse(localStorage.getItem('profile')));
  const [currentTab, setCurrentTab] = useState("Account");

  const shownTab = (tab) => {
    switch (tab) {
      case "Account":
        return <Account user={user} />;
      case "General":
        return <General />
      case "Insights":
        return <Insights user={user} />
      case "Transactions":
        return <Transactions />
      case "Logs":
        return <Logs />
      default:
        return <Account />;
    }
  }

  return (
    <div className="bg-gray-100 dark:bg-gray-800 pt-24 lg:pt-16 md:pt-32 sm:pt-32">
      <div className="container flex flex-col justify-center px-6 py-4 mx-auto space-y-6 lg:h-128 lg:py-16 lg:flex-row lg:items-center lg:space-x-6">
        <section className="bg-white dark:bg-gray-900 px-4 sm:px-12 rounded shadow w-full">
          <div className="container pb-8 pt-2 mx-auto">
            <div className="items-center lg:flex">
              <div className="lg:w-1/2">
                <div className="py-5 w-full flex flex-col items-center sm:block">
                  <h3 className="text-xl leading-6 font-medium text-gray-900 dark:text-white">
                    Hi, {user?.result && user.result.name} ({user?.result && user.result.email})
                  </h3>
                  <p className="mt-1 max-w-2xl text-md text-gray-500 dark:text-gray-200">
                    Adjust your preferred settings here.
                  </p>
                </div>
                <div className="container flex flex-col mx-auto w-full items-center justify-center bg-white dark:bg-gray-900 rounded-lg">
                  <ul className="flex flex-col w-full divide">
                    <li onClick={() => setCurrentTab("General")} className={currentTab === "General" ? "flex flex-row my-2 bg-blue-300 dark:bg-blue-900 hover:bg-blue-400 dark:hover:bg-blue-700 rounded" : "flex flex-row my-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"}>
                      <div className="select-none cursor-pointer flex flex-1 items-center p-4">
                        <div className="flex-1 pl-1 mr-16">
                          <div className="font-medium dark:text-white flex flex-row">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            General
                          </div>
                        </div>
                      </div>
                    </li>
                    <li onClick={() => setCurrentTab("Account")} className={currentTab === "Account" ? "flex flex-row my-2 bg-blue-300 dark:bg-blue-900 hover:bg-blue-400 dark:hover:bg-blue-700 rounded" : "flex flex-row my-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"}>
                      <div className="select-none cursor-pointer flex flex-1 items-center p-4">
                        <div className="flex-1 pl-1 mr-16">
                          <div className="font-medium dark:text-white flex flex-row">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            Account
                          </div>
                        </div>
                      </div>
                    </li>
                    <li onClick={() => setCurrentTab("Transactions")} className={currentTab === "Transactions" ? "flex flex-row my-2 bg-blue-300 dark:bg-blue-900 hover:bg-blue-400 dark:hover:bg-blue-700 rounded" : "flex flex-row my-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"}>
                      <div className="select-none cursor-pointer flex flex-1 items-center p-4">
                        <div className="flex-1 pl-1 mr-16">
                          <div className="font-medium dark:text-white flex flex-row">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            Transaction History
                          </div>
                        </div>
                      </div>
                    </li>
                    <li onClick={() => setCurrentTab("Logs")} className={currentTab === "Logs" ? "flex flex-row my-2 bg-blue-300 dark:bg-blue-900 hover:bg-blue-400 dark:hover:bg-blue-700 rounded" : "flex flex-row my-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"}>
                      <div className="select-none cursor-pointer flex flex-1 items-center p-4">
                        <div className="flex-1 pl-1 mr-16">
                          <div className="font-medium dark:text-white flex flex-row">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                            </svg>
                            Activity Logs
                          </div>
                        </div>
                      </div>
                    </li>
                    <li onClick={() => setCurrentTab("Insights")} className={currentTab === "Insights" ? "flex flex-row my-2 bg-blue-300 dark:bg-blue-900 hover:bg-blue-400 dark:hover:bg-blue-700 rounded" : "flex flex-row my-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"}>
                      <div className="select-none cursor-pointer flex flex-1 items-center p-4">
                        <div className="flex-1 pl-1 mr-16">
                          <div className="font-medium dark:text-white flex flex-row items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                            </svg>
                            Insights
                            <span className="relative inline-block px-3 py-1 font-semibold text-indigo-900 leading-tight ml-2">
                              <span aria-hidden="true" className="absolute inset-0 bg-indigo-200 dark:bg-indigo-600 opacity-50 rounded-full">
                              </span>
                              <span className="text-sm relative text-indigo-600 dark:text-indigo-400">
                                BETA
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:w-1/2">
                <div className="flex items-center justify-center lg:justify-end">
                  <div className="w-full sm:w-5/6">
                    {shownTab(currentTab)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;

