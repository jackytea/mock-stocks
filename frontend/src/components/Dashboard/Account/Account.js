import React from "react";

const Account = (props) => {
  const { user } = props;
  return (
    <div className="bg-white dark:bg-gray-900 pt-6">
      <div className="container flex flex-col justify-center">
        <section class="max-w-4xl p-6 mx-auto bg-white dark:bg-gray-900 divide divide-y">
          <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-gray-200">Change Name</h2>
          <form>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label class="text-gray-700 dark:text-gray-200" for="firstName">First Name</label>
                <input id="firstName" type="text" name="firstName" placeholder={String(user?.result.name).split(" ")[0]} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
              </div>

              <div>
                <label class="text-gray-700 dark:text-gray-200" for="lastName">Last Name</label>
                <input id="lastName" type="text" name="lastName" placeholder={String(user?.result.name).split(" ")[1]} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
              </div>
            </div>

            <div class="flex  mt-6">
              <button class="w-full px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Update Name</button>
            </div>
          </form>
        </section>
        <section class="p-6 mx-auto bg-white dark:bg-gray-900 divide divide-y w-full">
          <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-gray-200">Account Management</h2>
          <form>
            <div class="flex flex-col mt-6">
              <button class="w-full px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-red-700 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">Delete Account</button>
              <button disabled class="cursor-not-allowed disabled:opacity-50 mt-2 w-full px-6 py-2 leading-5 text-gray-200 transition-colors duration-200 transform bg-red-900 rounded-md hover:bg-red-900 focus:outline-none focus:bg-red-600">Archive Account</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Account;

