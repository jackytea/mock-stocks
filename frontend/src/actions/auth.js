import { AUTH, ERROR_OCCURRED } from '../constants/actions';
import * as api from '../api/index.js';

export const loginUser = (formInput, router, state) => async (dispatch) => {
  try {
    const { data } = await api.login(formInput);
    dispatch({ type: AUTH, data });
    router.push(state?.from || '/');
  } catch (error) {
    if (error.response) {
      dispatch({ type: ERROR_OCCURRED, payload: error.response.data.message });
    } else {
      dispatch({ type: ERROR_OCCURRED, payload: "Auth server is down!" });
    }
  }
};

export const registerUser = (formInput, router, state) => async (dispatch) => {
  try {
    const { data } = await api.register(formInput);
    dispatch({ type: AUTH, data });
    router.push(state?.from || '/');
  } catch (error) {
    if (error.response) {
      dispatch({ type: ERROR_OCCURRED, payload: error.response.data.message });
    } else {
      dispatch({ type: ERROR_OCCURRED, payload: "Auth server is down!" });
    }
  }
};
