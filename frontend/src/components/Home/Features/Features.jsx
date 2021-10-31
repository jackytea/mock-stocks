import React from 'react';

const Features = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-700">
      <div className="container px-16 sm:px-32 py-16 sm:py-24 mx-auto">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>

            <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">Real Time Quotes</h1>

            <p className="mt-2 text-gray-500 dark:text-gray-400">See the latest price changes in the markets and your investments with the power of websockets.</p>
          </div>

          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>

            <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">Industry Titans</h1>

            <p className="mt-2 text-gray-500 dark:text-gray-400">Choose from a collection of some of the biggest names in the industry.</p>
          </div>

          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>

            <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">Performance Insights</h1>

            <p className="mt-2 text-gray-500 dark:text-gray-400">See how your portfolio is performing in real time with both numerical and visual feedback.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;