import { combineReducers } from 'redux';
import stocksReducer from './stocks';
import authReducer from './auth';
import purchasedReducer from './purchased';
import transactionsReducer from './transactions';
import logsReducer from './logs';
import { authErrorsReducer, marketErrorsReducer, purchasedErrorsReducer, userErrorsReducer, transactionErrorsReducer, logsErrorsReducer } from './error';
import { LOGOUT } from '../constants/actions';

const appReducer = combineReducers({ 
  stocksReducer, 
  authReducer, 
  purchasedReducer,
  transactionsReducer,
  logsReducer, 
  authErrorsReducer, 
  marketErrorsReducer,
  purchasedErrorsReducer,
  userErrorsReducer,
  transactionErrorsReducer,
  logsErrorsReducer
});

export const reducer = (state, action) => {
  if (action.type === LOGOUT) {
    return appReducer(undefined, action)
  }
  return appReducer(state, action)
}
