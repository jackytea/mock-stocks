import { AUTH, DELETE_USER, LOGOUT, USER_INFO, USER_UPDATE_NAME } from '../constants/actions';

// handle user actions
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
    case USER_UPDATE_NAME:
      const userObjectNewName = JSON.parse(localStorage.getItem("profile"));
      userObjectNewName.result.name = action?.data.name;
      localStorage.setItem('profile', JSON.stringify(userObjectNewName));
      return { ...state, authData: action.data, errors: null };
    case DELETE_USER:
      localStorage.removeItem('profile');
      return { ...state, authData: null, errors: null };
    default:
      return state;
  }
};

export default authReducer;
