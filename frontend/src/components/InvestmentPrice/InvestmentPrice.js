import React, { useState, useEffect } from "react";

const InvestmentPrice = (props) => {
  const { shares, ticker, socket } = props;
  const [price, setPrice] = useState(0.00);

  useEffect(() => {
    let mounted = true;
    socket.on(ticker, data => {
      if (mounted) {
        setPrice(data);
      }
    });
    return () => {
      mounted = false
    }
  }, [socket, ticker]);


  return (
    price === 0.00 ? <div>Loading investment</div> :
      <div>
        Total Value: {price * shares}
        Stock Price: {price} 
      </div>
  );
}

export default InvestmentPrice;