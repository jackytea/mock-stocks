import React from "react";

const Dashboard = () => {
  return (
    <div className="bg-white dark:bg-gray-800 pt-36 sm:pt-12">
      <div className="container flex flex-col justify-center px-6 py-4 mx-auto space-y-6 lg:h-128 lg:py-16 lg:flex-row lg:items-center lg:space-x-6">
        <section className="bg-white dark:bg-gray-800 lg:py-12 lg:flex lg:justify-center overflow-y-hidden">
          <div className="bg-white dark:bg-gray-900 shadow lg:mx-8 lg:flex lg:max-w-5xl lg:rounded-lg">
            <div className="lg:w-1/2 py-12">
              <div className="h-64 bg-cover lg:rounded-lg lg:h-full">
                <div className="container flex flex-col mt-6 mx-auto w-full bg-white dark:bg-gray-900 rounded-lg">
                  <ul className="flex flex-col divide">
                    <li className="flex flex-row">
                      <div className="select-none cursor-pointer flex flex-1 items-center p-4">
                        <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                        </div>
                        <div className="flex-1 pl-1 mr-16">
                          <div className="font-medium dark:text-white">
                            General
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="flex flex-row">
                      <div className="select-none cursor-pointer flex flex-1 items-center p-4">
                        <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                        </div>
                        <div className="flex-1 pl-1 mr-16">
                          <div className="font-medium dark:text-white">
                            Account
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="flex flex-row">
                      <div className="select-none cursor-pointer flex flex-1 items-center p-4">
                        <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                        </div>
                        <div className="flex-1 pl-1 mr-16">
                          <div className="font-medium dark:text-white">
                            Insights
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="flex flex-row">
                      <div className="select-none cursor-pointer flex flex-1 items-center p-4">
                        <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                        </div>
                        <div className="flex-1 pl-1 mr-16">
                          <div className="font-medium dark:text-white">
                            Transactions
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="flex flex-row">
                      <div className="select-none cursor-pointer flex flex-1 items-center p-4">
                        <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                        </div>
                        <div className="flex-1 pl-1 mr-16">
                          <div className="font-medium dark:text-white">
                            Activity Logs
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">Build Your New <span className="text-indigo-600 dark:text-indigo-400">Idea</span></h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem modi reprehenderit vitae exercitationem aliquid dolores ullam temporibus enim expedita aperiam mollitia iure consectetur dicta tenetur, porro consequuntur saepe accusantium consequatur.</p>

              <div className="mt-8">
                <span className="px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-700">Start Now</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;

