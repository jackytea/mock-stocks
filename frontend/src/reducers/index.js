import { combineReducers } from 'redux';
import stocksReducer from './stocks';
import authReducer from './auth';
import purchasedReducer from './purchased';
import { authErrorsReducer, marketErrorsReducer } from './error';
import { LOGOUT } from '../constants/actions';

const appReducer = combineReducers({ 
  stocksReducer, 
  authReducer, 
  purchasedReducer, 
  authErrorsReducer, 
  marketErrorsReducer 
});

export const reducer = (state, action) => {
  if (action.type === LOGOUT) {
    return appReducer(undefined, action)
  }
  return appReducer(state, action)
}