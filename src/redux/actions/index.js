import { httpRequest } from "../../utils/httpRequest";

const SET_MESSAGE = "SET_MESSAGE";
const HIDE_EVERYTHING = "HIDE_EVERYTHING";

const showMessageAction = payload => ({
  type: SET_MESSAGE,
  payload
});

const hideEverythingAction = () => ({
  type: HIDE_EVERYTHING
});

const startAction = payload => async dispatch => {
  dispatch(showMessageAction(payload));
  try {
    await httpRequest();
    dispatch(hideEverythingAction());
  } catch (e) {
    console.log("err");
  }
};

export {
  SET_MESSAGE,
  HIDE_EVERYTHING,
  showMessageAction,
  hideEverythingAction,
  startAction
};
