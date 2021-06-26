import { GET_ALL_PURCHASED } from '../constants/actions';
import { purchasedStocks } from '../api/index.js';

export const getPurchases = () => async (dispatch) => {
  try {
    const { data } = await purchasedStocks();
    dispatch({ type: GET_ALL_PURCHASED, payload: data });
  } catch (error) {
    console.log(error);
  }
};
