import { combineReducers } from 'redux';
import stocksReducer from './stocks';
import authReducer from './auth';
import errorsReducer from './error';

export const reducers = combineReducers({ stocksReducer, authReducer, errorsReducer });
