import React, { useState, useEffect } from "react";

const CurrentPrice = (props) => {
  const { currentPrice, ticker, socket } = props;
  const [price, setPrice] = useState(currentPrice);

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
    <div>
      Current Price: {price}
    </div>
  );
}

export default CurrentPrice;