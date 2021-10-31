import React from 'react';
import GridViewSkeleton from './GridViewSkeleton';
import StockCard from '../../../StockCard/StockCard';

const GridView = (props) => {
  const { socket, filteredStocks } = props;

  return (
    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {!filteredStocks?.length ?
          <GridViewSkeleton />
          :
          <>
            {filteredStocks.map((stock) => (
              <StockCard key={stock._id} stock={stock} socket={socket} />
            ))}
          </>
        }
      </div>
    </div>
  );
}

export default GridView;