import React, { useState, useEffect } from "react";

const InvestmentPrice = (props) => {
  const { socket, shares, ticker, initialInvestment } = props;
  const [price, setPrice] = useState(initialInvestment.toFixed(2));

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


  return (
    <>
      ${price * shares}
    </>
  );
}

export default InvestmentPrice;