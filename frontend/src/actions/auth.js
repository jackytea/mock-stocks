import { login, register, userInfo } from '../api/index.js';
import { AUTH, AUTH_ERROR_OCCURRED, USER_INFO } from '../constants/actions';

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

// GET /user/userinfo
export const getUserInfo = () => async (dispatch) => {
  try {
    const { data } = await userInfo();
    dispatch({ type: USER_INFO, data });
  } catch (error) {
    console.log(error);
  }
};
