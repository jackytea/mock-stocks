import React, { useState, useEffect } from "react";

const CurrentPrice = (props) => {
  const { currentPrice, ticker, socket } = props;
  const [price, setPrice] = useState(currentPrice.toFixed(2));

  useEffect(() => {
    socket.on(ticker, data => {
      setPrice(data);
    });
  });

  return (
    <div>
      Current Price: {price}
    </div>
  );
}

export default CurrentPrice;