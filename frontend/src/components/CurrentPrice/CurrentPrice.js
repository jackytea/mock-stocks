import React, { useState, useEffect } from "react";

const CurrentPrice = (props) => {
  const { currentPrice, ticker, socket } = props;
  const [price, setPrice] = useState(parseFloat(currentPrice).toFixed(2));
  const [change, setChange] = useState(0.00);
  const [gain, setGain] = useState(true);

  useEffect(() => {
    let mounted = true;
    socket.on(ticker, data => {
      if (mounted) {
        let newPrice = parseFloat(data).toFixed(2);
        setPrice(newPrice);
        setChange(parseFloat(price / newPrice).toFixed(2));
        if (price < newPrice) {
          setGain(false);
        } else {
          setGain(true);
        }
      }
    });
    return () => {
      mounted = false
    }
  }, [socket, ticker, price]);


  return (
    <>
      {gain ?
        <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
          <span aria-hidden="true" className="absolute inset-0 bg-red-200 dark:bg-red-700 opacity-50 rounded-full">
          </span>
          <span className="relative text-red-500 dark:text-red-400">
            ${price} <span className="ml-2 text-xs hidden xl:inline">-{change}% down</span>
          </span>
        </span>
        :
        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
          <span aria-hidden="true" className="absolute inset-0 bg-green-200 dark:bg-green-700 opacity-50 rounded-full">
          </span>
          <span className="relative text-green-500 dark:text-green-40">
            ${price} <span className="ml-2 text-xs hidden xl:inline">+{change}% up</span>
          </span>
        </span>
      }
    </>
  );
}

export default CurrentPrice;