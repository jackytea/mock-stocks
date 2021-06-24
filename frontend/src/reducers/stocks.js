import { GET_ALL_STOCKS, GET_ONE_STOCK } from '../constants/actions';

const stocksReducer = (stocks = [], action) => {
  switch (action.type) {
    case GET_ALL_STOCKS:
      return action.payload;
    case GET_ONE_STOCK:
      return action.payload;
    default:
      return stocks;
  }
};

export default stocksReducer;
