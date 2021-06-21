import { GET_ALL_STOCKS, GET_ONE_STOCK } from '../constants/actions';

import * as api from '../api/index.js';

export const getStocks = () => async (dispatch) => {
  try {
    const { data } = await api.fetchStocks();
    if (!data) {
      window.location.href = "/404";
    }
    dispatch({ type: GET_ALL_STOCKS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getStock = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchStock(id);
    if (!data) {
      window.location.href = "/404";
    }
    dispatch({ type: GET_ONE_STOCK, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
