import axios from "axios";

const SET_LOADING = "SET_LOADING";
const SUCCESS_REQUEST = "SUCCESS_REQUEST";
const ERROR_REQUEST = "ERROR_REQUEST";

const setLoadingAction = () => ({
  type: SET_LOADING,
  payload: { loading: true }
});

const successPeoplesRequestAction = payload => ({
  type: SUCCESS_REQUEST,
  payload: { peoples: payload, loading: false }
});

const errorRequestAction = payload => ({
  type: ERROR_REQUEST,
  payload: { error: payload, loading: false }
});

const sendRequestAction = payload => async (dispatch, getState) => {
  dispatch(setLoadingAction());
  try {
    const response = await axios(payload);
    setTimeout(() => {
      dispatch(successPeoplesRequestAction(response.data.results));
    }, 1500);
  } catch (e) {
    errorRequestAction("Request faild");
  }
};

export { sendRequestAction, SET_LOADING, SUCCESS_REQUEST, ERROR_REQUEST };
