
import { ERROR_OCCURRED } from '../constants/actions';

const errorsReducer = (state = [], action) => {
  switch (action.type) {
    case ERROR_OCCURRED:
      return action.payload;
    default:
      return state;
  }
};

export default errorsReducer;
