import { login, register } from '../api/index.js';
import { AUTH, AUTH_ERROR_OCCURRED } from '../constants/actions';

// POST /user/login
export const loginUser = (formInput, router, state) => async (dispatch) => {
  try {
    const { data } = await login(formInput);
    dispatch({ type: AUTH, data });
    router.push(state?.from || '/');
  } catch (error) {
    if (error.response) {
      dispatch({ type: AUTH_ERROR_OCCURRED, payload: error.response.data.message });
    } else {
      dispatch({ type: AUTH_ERROR_OCCURRED, payload: "Auth server is down!" });
    }
  }
};

// POST /user/register
export const registerUser = (formInput, router, state) => async (dispatch) => {
  try {
    const { data } = await register(formInput);
    dispatch({ type: AUTH, data });
    router.push(state?.from || '/');
  } catch (error) {
    if (error.response) {
      dispatch({ type: AUTH_ERROR_OCCURRED, payload: error.response.data.message });
    } else {
      dispatch({ type: AUTH_ERROR_OCCURRED, payload: "Auth server is down!" });
    }
  }
};
