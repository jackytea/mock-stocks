import { AUTH, LOGOUT } from '../constants/actions';

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
      return { ...state, authData: action.data, errors: null };
    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null, errors: null };
    default:
      return state;
  }
};

export default authReducer;
