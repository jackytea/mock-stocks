import { GET_ALL_PURCHASED, GET_ONE_PURCHASED, ADD_PURCHASED, UPDATE_PURCHASED, REMOVE_PURCHASED } from '../constants/actions';
import { purchasedStocks, purchasedStock, addPurchasedStock, updatePurchasedStock, removePurchasedStock } from '../api/index.js';

// GET /purchased
export const getPurchases = () => async (dispatch) => {
  try {
    const { data } = await purchasedStocks();
    dispatch({ type: GET_ALL_PURCHASED, payload: data });
  } catch (error) {
    console.log(error?.message);
  }
};

// GET /purchased/:id
export const getPurchase = (id) => async (dispatch) => {
  try {
    const { data } = await purchasedStock(id);
    dispatch({ type: GET_ONE_PURCHASED, payload: data });
  } catch (error) {
    console.log(error?.message);
  }
};

// POST /purchased/
export const addPurchase = (formInput, router) => async (dispatch) => {
  try {
    const { data } = await addPurchasedStock(formInput);
    dispatch({ type: ADD_PURCHASED, payload: data });
    router.push(`/purchased/${data.stock}`);
  } catch (error) {
    console.log(error?.message);
  }
};

// PATCH /purchased/:id
export const updatePurchase = (id, formInput, router) => async (dispatch) => {
  try {
    const { data } = await updatePurchasedStock(id, formInput);
    dispatch({ type: UPDATE_PURCHASED, payload: data });
    router.push(`/purchased/${id}`);
  } catch (error) {
    console.log(error?.message);
  }
};

// DELETE /purchased/:id
export const removePurchase = (id, router) => async (dispatch) => {
  try {
    await removePurchasedStock(id);
    dispatch({ type: REMOVE_PURCHASED, payload: null });
    router.push('/purchased/');
  } catch (error) {
    console.log(error?.message);
  }
};
