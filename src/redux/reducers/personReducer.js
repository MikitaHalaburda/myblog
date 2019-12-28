import {
  SUCCESS_PERSON_REQUEST,
  SET_PERSON_LOADING,
  ERROR_PERSON_REQUEST
} from "../actions";
import { updateState } from "./utils";

const singlePersonInitialState = {
  person: {},
  loading: false,
  error: null
};

const starWarsSinglePersonReducer = (
  state = singlePersonInitialState,
  action
) => {
  switch (action.type) {
    case SET_PERSON_LOADING:
      return updateState(state, action.payload);
    case SUCCESS_PERSON_REQUEST:
      return updateState(state, action.payload);
    case ERROR_PERSON_REQUEST:
      return updateState(state, action.payload);

    default:
      return state;
  }
};

export { singlePersonInitialState, starWarsSinglePersonReducer };
