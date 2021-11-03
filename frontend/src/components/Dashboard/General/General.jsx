import React, { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext/ThemeContext";

const General = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-4 mx-auto">
        <h2 className="text-left text-lg font-semibold text-gray-700 capitalize dark:text-gray-200 mb-2">Appearance</h2>
        <div className="flex flex-col w-full">
          <button className="w-full mb-2" onClick={() => { setTheme("light"); document.body.style.background = "#E5E7EB" }}>
            <div className="border border-yellow-300 dark:border-gray-500 rounded p-4 w-full mx-auto">
              <div className="flex space-x-4">
                <div className="rounded-full bg-yellow-300 dark:bg-gray-200 h-12 w-12"></div>
                <div className="flex-1 space-y-4 py-1">
                  <div className="h-4 text-yellow-500 dark:text-gray-200 rounded w-full">Light Theme</div>
                  <div className="space-y-2">
                    <div className="h-4 bg-yellow-300 dark:bg-gray-200 rounded"></div>
                    <div className="h-4 bg-yellow-300 dark:bg-gray-200 rounded w-5/6"></div>
                  </div>
                </div>
              </div>
              {theme === "light" && <span className="mt-4 relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                <span aria-hidden="true" className="absolute inset-0 bg-green-200 dark:bg-green-700 opacity-50 rounded-full">
                </span>
                <span className="text-sm relative text-green-600 dark:text-green-400">
                  Active Theme
                </span>
              </span>}
            </div>
          </button>
          <button className="w-full" onClick={() => { setTheme("dark"); document.body.style.background = "#111827" }}>
            <div className="border border-gray-900 dark:border-gray-600 rounded p-4 w-full mx-auto">
              <div className="flex space-x-4">
                <div className="rounded-full bg-gray-900 dark:bg-gray-600 h-12 w-12"></div>
                <div className="flex-1 space-y-4 py-1">
                  <div className="h-4 text-gray-900 dark:text-gray-600 rounded w-full">Dark Theme</div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-900 dark:bg-gray-600 rounded"></div>
                    <div className="h-4 bg-gray-900 dark:bg-gray-600 rounded w-5/6"></div>
                  </div>
                </div>
              </div>
              {theme === "dark" && <span className="mt-4 relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                <span aria-hidden="true" className="absolute inset-0 bg-green-200 dark:bg-green-700 opacity-50 rounded-full">
                </span>
                <span className="text-sm relative text-green-600 dark:text-green-400">
                  Active Theme
                </span>
              </span>}
            </div>
          </button>
        </div>
        <h2 className="text-left text-lg font-semibold text-gray-700 capitalize dark:text-gray-200 mt-4 mb-2">Language</h2>
        <div className="relative inline-block w-full text-gray-700 dark:text-gray-200">
          <select disabled className="disabled:opacity-50 cursor-not-allowed w-full bg-white dark:bg-gray-800 h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none" placeholder="Language Select">
            <option>English - EN</option>
            <option>Français - FR</option>
            <option>Español - ES</option>
            <option>中文 - ZH</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default General;
