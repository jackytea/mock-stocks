import React from "react";
import StockCard from "../../StockCard/StockCard";
import ShowcaseCardSkeleton from "./ShowcaseCardSkeleton";

const ShowcaseCard = (props) => {
  const { socket, stocks } = props;

  const randomStockIndex = (stocksInput) => {
    const indices = new Set();
    while (indices.size !== 3) {
      indices.add(Math.floor(Math.random() * (stocks.length - 1)) + 1);
    }
    const arrIndices = Array.from(indices);
    return [stocksInput[arrIndices[0]], stocksInput[arrIndices[1]], stocksInput[arrIndices[2]]];
  }

  const randomizedStocks = stocks?.length ? randomStockIndex(stocks) : [];

  return (
    !randomizedStocks?.length ?
      <>
        <ShowcaseCardSkeleton />
      </>
      :
      <>
        {randomizedStocks.map((stock) => (
          <StockCard key={stock._id} stock={stock} socket={socket} />
        ))}
      </>
  );
}

export default ShowcaseCard;
