import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const singlePersonInitialState = {
  person: {},
  loading: false,
  error: null
};

const singlePersonSlice = createSlice({
  name: "signlePersonSlice",
  initialState: singlePersonInitialState,
  reducers: {
    setPersonLoading(state) {
      state.loading = true;
    },
    setPersonSuccess(state, action) {
      state.loading = false;
      state.person = action.payload;
    },
    setPersonError(state, action) {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

const fetchPerson = payload => async (dispatch, getState) => {
  dispatch(setPersonLoading());
  try {
    const response = await axios(payload);
    dispatch(setPersonSuccess(response.data));
  } catch (e) {
    setPersonError("Person request faild");
  }
};

const {
  setPersonLoading,
  setPersonSuccess,
  setPersonError
} = singlePersonSlice.actions;

export default singlePersonSlice.reducer;

export { fetchPerson };
