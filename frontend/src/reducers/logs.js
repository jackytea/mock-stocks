import { GET_ALL_LOGS } from '../constants/actions';

const logsReducer = (transactions = [], action) => {
  switch (action.type) {
    case GET_ALL_LOGS:
      return action.payload;
    default:
      return transactions;
  }
};

export default logsReducer;
