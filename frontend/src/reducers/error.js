import { AUTH_ERROR_OCCURRED, MARKET_ERROR_OCCURRED, PURCHASED_ERROR_OCCURRED, USER_ERROR_OCCURRED, TRANSACTION_ERROR_OCCURRED, LOG_ERROR_OCCURRED } from '../constants/actions';

// errors for authentication
const authErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case AUTH_ERROR_OCCURRED:
      return action.payload;
    default:
      return state;
  }
};

// errors for stock market
const marketErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case MARKET_ERROR_OCCURRED:
      return action.payload;
    default:
      return state;
  }
};

// errors for purchase details
const purchasedErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case PURCHASED_ERROR_OCCURRED:
      return action.payload;
    default:
      return state;
  }
};

// errors for updating profile
const userErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case USER_ERROR_OCCURRED:
      return action.payload;
    default:
      return state;
  }
};

// errors for transactions
const transactionErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case TRANSACTION_ERROR_OCCURRED:
      return action.payload;
    default:
      return state;
  }
};

// errors for action logs
const logsErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case LOG_ERROR_OCCURRED:
      return action.payload;
    default:
      return state;
  }
};

export { authErrorsReducer, marketErrorsReducer, purchasedErrorsReducer, userErrorsReducer, transactionErrorsReducer, logsErrorsReducer };
