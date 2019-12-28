import axios from "axios";

const SUCCESS_PERSON_REQUEST = "SUCCESS_PERSON_REQUEST";
const SET_PERSON_LOADING = "SET_PERSON_LOADING";
const ERROR_PERSON_REQUEST = "ERROR_PERSON_REQUEST";

const setPersonLoadingAction = () => ({
  type: SET_PERSON_LOADING,
  payload: { loading: true }
});

const errorPersonRequestAction = payload => ({
  type: ERROR_PERSON_REQUEST,
  payload: { error: payload, loading: false }
});

const successPersonRequestAction = payload => ({
  type: SUCCESS_PERSON_REQUEST,
  payload: { person: payload, loading: false }
});

const getPerson = payload => async (dispatch, getState) => {
  dispatch(setPersonLoadingAction());
  try {
    const response = await axios(payload);
    dispatch(successPersonRequestAction(response.data));
  } catch (e) {
    errorPersonRequestAction("Person request faild");
  }
};

export {
  SET_PERSON_LOADING,
  SUCCESS_PERSON_REQUEST,
  ERROR_PERSON_REQUEST,
  getPerson
};
