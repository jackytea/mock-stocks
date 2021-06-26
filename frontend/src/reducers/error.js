
import { AUTH_ERROR_OCCURRED, MARKET_ERROR_OCCURRED } from '../constants/actions';

const authErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case AUTH_ERROR_OCCURRED:
      return action.payload;
    default:
      return state;
  }
};

const marketErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case MARKET_ERROR_OCCURRED:
      return action.payload;
    default:
      return state;
  }
};


export { authErrorsReducer, marketErrorsReducer };
