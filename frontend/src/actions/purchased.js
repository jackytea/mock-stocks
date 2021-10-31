import { purchasedStocks, purchasedStock, addPurchasedStock, updatePurchasedStock, removePurchasedStock } from '../api/index.js';
import { GET_ALL_PURCHASED, GET_ONE_PURCHASED, ADD_PURCHASED, UPDATE_PURCHASED, REMOVE_PURCHASED, PURCHASED_ERROR_OCCURRED } from '../constants/actions';

// GET /purchased
export const getPurchases = () => async (dispatch) => {
  try {
    const { data } = await purchasedStocks();
    dispatch({ type: GET_ALL_PURCHASED, payload: data });
  } catch (error) {
    if (error.response) {
      dispatch({ type: PURCHASED_ERROR_OCCURRED, payload: error.response.data.message });
    } else {
      dispatch({ type: PURCHASED_ERROR_OCCURRED, payload: "Investment server is down!" });
    }
  }
};

// GET /purchased/:id
export const getPurchase = (id) => async (dispatch) => {
  try {
    const { data } = await purchasedStock(id);
    dispatch({ type: GET_ONE_PURCHASED, payload: data });
  } catch (error) {
    if (error.response) {
      dispatch({ type: PURCHASED_ERROR_OCCURRED, payload: error.response.data.message });
    } else {
      dispatch({ type: PURCHASED_ERROR_OCCURRED, payload: "Investment server is down!" });
    }
  }
};

// POST /purchased
export const addPurchase = (formInput, router) => async (dispatch) => {
  try {
    const { data } = await addPurchasedStock(formInput);
    dispatch({ type: ADD_PURCHASED, payload: data });
    router.push({ pathname: `/purchased/${data.stock}`, state: { updated: true } });
  } catch (error) {
    if (error.response) {
      dispatch({ type: PURCHASED_ERROR_OCCURRED, payload: error.response.data.message });
    } else {
      dispatch({ type: PURCHASED_ERROR_OCCURRED, payload: "Investment server is down!" });
    }
  }
};

// PATCH /purchased/:id
export const updatePurchase = (id, formInput, router, sharesBought, sharesHeld) => async (dispatch) => {
  try {
    const { data } = await updatePurchasedStock(id, formInput);
    dispatch({ type: UPDATE_PURCHASED, payload: data });
    if (sharesBought < 0 && (Math.abs(sharesBought) >= sharesHeld)) {
      router.push({ pathname: '/purchased/', state: { updated: true } });
      return;
    }
    router.push({ pathname: `/purchased/${id}`, state: { updated: true } });
  } catch (error) {
    if (error.response) {
      dispatch({ type: PURCHASED_ERROR_OCCURRED, payload: error.response.data.message });
    } else {
      dispatch({ type: PURCHASED_ERROR_OCCURRED, payload: "Investment server is down!" });
    }
  }
};

// DELETE /purchased/:id
export const removePurchase = (id, router) => async (dispatch) => {
  try {
    await removePurchasedStock(id);
    dispatch({ type: REMOVE_PURCHASED, payload: null });
    router.push({ pathname: '/purchased/', state: { updated: true } });
  } catch (error) {
    if (error.response) {
      dispatch({ type: PURCHASED_ERROR_OCCURRED, payload: error.response.data.message });
    } else {
      dispatch({ type: PURCHASED_ERROR_OCCURRED, payload: "Investment server is down!" });
    }
  }
};
