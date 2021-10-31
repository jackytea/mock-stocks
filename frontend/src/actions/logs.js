import { fetchLogs } from '../api/index.js';
import { GET_ALL_LOGS, LOG_ERROR_OCCURRED } from '../constants/actions';

// GET /logs
export const getLogs = () => async (dispatch) => {
  try {
    const { data } = await fetchLogs();
    dispatch({ type: GET_ALL_LOGS, payload: data });
  } catch (error) {
    if (error.response) {
      dispatch({ type: LOG_ERROR_OCCURRED, payload: error.response.data.message });
    } else {
      dispatch({ type: LOG_ERROR_OCCURRED, payload: "Log server is down!" });
    }
  }
};
