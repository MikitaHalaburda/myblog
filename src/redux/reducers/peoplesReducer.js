import { SUCCESS_REQUEST, SET_LOADING, ERROR_REQUEST } from "../actions";
import { updateState } from "./utils";

const peoplesInitialState = {
  peoples: [],
  loading: false,
  error: null
};

const starWarsPeoplesReducer = (state = peoplesInitialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return updateState(state, action.payload);
    case SUCCESS_REQUEST:
      return updateState(state, action.payload);
    case ERROR_REQUEST:
      return updateState(state, action.payload);

    default:
      return state;
  }
};

export { starWarsPeoplesReducer, peoplesInitialState };
