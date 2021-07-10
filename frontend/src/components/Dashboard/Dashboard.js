import React, { useState } from "react";

const Dashboard = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [currentTab, setCurrentTab] = useState("Account");

  const shownTab = (tab) => {
    switch (tab) {
      case "Account":
        return null;
      default:
        return "Account";
    }
  }

  return (
    <div className="bg-gray-100 dark:bg-gray-800 pt-36 sm:pt-12">
      <div className="container flex flex-col justify-center px-6 py-4 mx-auto space-y-6 lg:h-128 lg:py-16 lg:flex-row lg:items-center lg:space-x-6">

        <section class="bg-white dark:bg-gray-900 p-12 rounded shadow">
          <div class="container px-6 py-8 mx-auto">
            <div class="items-center lg:flex">
              <div class="lg:w-1/2">
                <div class="px-4 py-5 sm:px-6 w-full">
                  <h3 class="text-2xl leading-6 font-medium text-gray-900 dark:text-white">
                    Welcome back, {user?.result && user.result.name}
                  </h3>
                  <p class="mt-1 max-w-2xl text-md text-gray-500 dark:text-gray-200">
                    Adjust your preferred settings here.
                  </p>
                </div>
                <div class="container flex flex-col mx-auto w-full items-center justify-center bg-white dark:bg-gray-900 rounded-lg">
                  <ul class="flex flex-col w-full divide">
                    <li class="flex flex-row my-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
                      <div class="select-none cursor-pointer flex flex-1 items-center p-4">
                        <div class="flex-1 pl-1 mr-16">
                          <div class="font-medium dark:text-white">
                            General
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="flex flex-row my-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
                      <div class="select-none cursor-pointer flex flex-1 items-center p-4">
                        <div class="flex-1 pl-1 mr-16">
                          <div class="font-medium dark:text-white">
                            Account
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="flex flex-row my-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
                      <div class="select-none cursor-pointer flex flex-1 items-center p-4">
                        <div class="flex-1 pl-1 mr-16">
                          <div class="font-medium dark:text-white">
                            Insights
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="flex flex-row my-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
                      <div class="select-none cursor-pointer flex flex-1 items-center p-4">
                        <div class="flex-1 pl-1 mr-16">
                          <div class="font-medium dark:text-white">
                            Transactions
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="flex flex-row my-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
                      <div class="select-none cursor-pointer flex flex-1 items-center p-4">
                        <div class="flex-1 pl-1 mr-16">
                          <div class="font-medium dark:text-white">
                            Logs
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="mt-8 lg:mt-0 lg:w-1/2">
                <div class="flex items-center justify-center lg:justify-end">
                  <div class="max-w-lg w-96">

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

