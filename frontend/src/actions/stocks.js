import { GET_ALL_STOCKS, GET_ONE_STOCK } from '../constants/actions';

import * as api from '../api/index.js';

export const getStocks = () => async (dispatch) => {
  try {
    const { data } = await api.fetchStocks();
    dispatch({ type: GET_ALL_STOCKS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
