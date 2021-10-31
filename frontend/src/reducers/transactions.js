import { GET_ALL_TRANSACTIONS} from '../constants/actions';

// handle fetching transactions logs
const transactionsReducer = (transactions = [], action) => {
  switch (action.type) {
    case GET_ALL_TRANSACTIONS:
      return action.payload;
    default:
      return transactions;
  }
};

export default transactionsReducer;
