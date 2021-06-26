import { GET_ALL_PURCHASED, GET_ONE_PURCHASED, ADD_PURCHASED, UPDATE_PURCHASED, REMOVE_PURCHASED } from '../constants/actions';

const purchasedReducer = (purchased = [], action) => {
  switch (action.type) {
    case GET_ALL_PURCHASED:
      return action.payload;
    case GET_ONE_PURCHASED:
      return action.payload;
    case ADD_PURCHASED:
      return [...purchased, action.payload];
    case UPDATE_PURCHASED:
      return purchased.map((p) => (p._id === action.payload._id ? action.payload : p));
    case REMOVE_PURCHASED:
      return purchased.filter((p) => p._id !== action.payload);
    default:
      return purchased;
  }
};

export default purchasedReducer;
