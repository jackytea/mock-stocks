import { GET_ALL_STOCKS, GET_ONE_STOCK, SORT_STOCKS_BY_FIELD } from '../constants/actions';

// handle getting and filtering stocks
const stocksReducer = (stocks = [], action) => {
  switch (action.type) {
    case GET_ALL_STOCKS:
      return action.payload;
    case GET_ONE_STOCK:
      return action.payload;
    case SORT_STOCKS_BY_FIELD:
      return stocks.slice().sort((a, b) => {
        if (action.payload.reverse) {
          return (a[action.payload.field] > b[action.payload.field]) ? 1 : 
          ((b[action.payload.field] > a[action.payload.field]) ? -1 : 0);
        } else {
          return (a[action.payload.field] < b[action.payload.field]) ? 1 : 
          ((b[action.payload.field] < a[action.payload.field]) ? -1 : 0);
        }
      })
    default:
      return stocks;
  }
};

export default stocksReducer;
