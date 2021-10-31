import React, { useState, useEffect } from "react";

const InvestmentPrice = (props) => {
  const { socket, shares, ticker, initialInvestment } = props;
  const [price, setPrice] = useState(initialInvestment);

  useEffect(() => {
    let mounted = true;
    socket.on(ticker, data => {
      if (mounted) {
        setPrice(data);
      }
    });
    return () => {
      mounted = false;
    }
  }, [socket, ticker]);

  const gain = (parseFloat(price * shares).toFixed(2) - parseFloat(initialInvestment).toFixed(2)) > 0;
  const value = parseFloat(shares * price).toFixed(2);
  const diff = ((parseFloat(price * shares).toFixed(2) - parseFloat(initialInvestment).toFixed(2))).toFixed(2);

  return (
    <>
      {gain ?
        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
          <span aria-hidden="true" className="absolute inset-0 bg-green-200 dark:bg-green-700 opacity-50 rounded-full">
          </span>
          <span className="relative text-green-500 dark:text-green-40">
            ${value} <span className="ml-2 text-xs hidden xl:inline">{diff}% up</span>
          </span>
        </span>
        :
        <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
          <span aria-hidden="true" className="absolute inset-0 bg-red-200 dark:bg-red-700 opacity-50 rounded-full">
          </span>
          <span className="relative text-red-500 dark:text-red-400">
            ${value} <span className="ml-2 text-xs hidden xl:inline">{diff}% down</span>
          </span>
        </span>
      }
    </>
  );
}

export default InvestmentPrice;