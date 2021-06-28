import { GET_ALL_PURCHASED, GET_ONE_PURCHASED, ADD_PURCHASED } from '../constants/actions';
import { purchasedStocks, purchasedStock, addPurchasedStock } from '../api/index.js';

// GET /purchased
export const getPurchases = () => async (dispatch) => {
  try {
    const { data } = await purchasedStocks();
    dispatch({ type: GET_ALL_PURCHASED, payload: data });
  } catch (error) {
    console.log(error);
  }
};

// GET /purchased/:id
export const getPurchase = (id) => async (dispatch) => {
  try {
    const { data } = await purchasedStock(id);
    dispatch({ type: GET_ONE_PURCHASED, payload: data });
  } catch (error) {
    console.log(error);
  }
};

// POST /purchased/
export const addPurchase = (formInput, router) => async (dispatch) => {
  try {
    const { data } = await addPurchasedStock(formInput);
    dispatch({ type: ADD_PURCHASED, payload: data });
  } catch (error) {
    console.log(error);
  }
};
