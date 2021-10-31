import { GET_ALL_LOGS } from '../constants/actions';

// handle fetching action logs
const logsReducer = (transactions = [], action) => {
  switch (action.type) {
    case GET_ALL_LOGS:
      return action.payload;
    default:
      return transactions;
  }
};

export default logsReducer;
