import { SET_MESSAGE, HIDE_EVERYTHING } from "../actions";

const initialState = { message: "", hideEverything: false };

const messageReducer = (state = "", action) => {
  switch (action.type) {
    case SET_MESSAGE:
      return action.payload;
    default:
      return state;
  }
};

const hideMessageReducer = (state = false, action) => {
  switch (action.type) {
    case HIDE_EVERYTHING:
      return true;
    default:
      return state;
  }
};

const rootReducer = (state = initialState, action) => {
  return {
    message: messageReducer(state.message, action),
    hideEverything: hideMessageReducer(state.hide, action)
  };
};

export default rootReducer;
