import {
  singlePersonInitialState,
  starWarsSinglePersonReducer
} from "./personReducer";
import { starWarsPeoplesReducer, peoplesInitialState } from "./peoplesReducer";

const initialState = {
  starWarsPeoples: peoplesInitialState,
  singlePerson: singlePersonInitialState
};

const rootReducer = (state = initialState, action) => {
  return {
    starWarsPeoples: starWarsPeoplesReducer(state.starWarsPeoples, action),
    singlePerson: starWarsSinglePersonReducer(state.singlePerson, action)
  };
};

export default rootReducer;
