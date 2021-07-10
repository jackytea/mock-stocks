import { AUTH, LOGOUT, USER_INFO } from '../constants/actions';

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
      return { ...state, authData: action.data, errors: null };
    case LOGOUT:
      localStorage.removeItem('profile');
      return { ...state, authData: null, errors: null };
    case USER_INFO:
      const userObject = JSON.parse(localStorage.getItem("profile"));
      userObject.result.coins = action?.data.coins;
      localStorage.setItem('profile', JSON.stringify(userObject));
      return { ...state, authData: action.data, errors: null };
    default:
      return state;
  }
};

export default authReducer;
