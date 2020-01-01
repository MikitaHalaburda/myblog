import { configureStore } from "@reduxjs/toolkit";
import singlePersonSliceReducer from "./reducers/personReducer";
import peoplesSlice from "./reducers/peoplesReducer";
import { combineReducers } from "redux";

const root = combineReducers({
  singlePerson: singlePersonSliceReducer,
  starWarsPeoples: peoplesSlice
});

const store = configureStore({ reducer: root });

export default store;
