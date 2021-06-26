import { fetchStocks, fetchStock } from '../api/index.js';
import { GET_ALL_STOCKS, GET_ONE_STOCK, MARKET_ERROR_OCCURRED } from '../constants/actions';

// GET /stocks
export const getStocks = () => async (dispatch) => {
  try {
    const { data } = await fetchStocks();
    dispatch({ type: GET_ALL_STOCKS, payload: data });
  } catch (error) {
    if (error.response) {
      dispatch({ type: MARKET_ERROR_OCCURRED, payload: error.response.data.message });
    } else {
      dispatch({ type: MARKET_ERROR_OCCURRED, payload: "Markets are down!" });
    }
  }
};

// GET /stocks/:id
export const getStock = (id) => async (dispatch) => {
  try {
    const { data } = await fetchStock(id);
    dispatch({ type: GET_ONE_STOCK, payload: data });
  } catch (error) {
    if (error.response) {
      dispatch({ type: MARKET_ERROR_OCCURRED, payload: error.response.data.message });
    } else {
      dispatch({ type: MARKET_ERROR_OCCURRED, payload: "Markets are down!" });
    }
  }
};
