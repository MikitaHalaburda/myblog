import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const singlePersonInitialState = {
  person: {},
  loading: false,
  error: null,
  personId: null
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
      state.person = action.payload.data;
      state.personId = action.payload.personId;
    },
    setPersonError(state, action) {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

const fetchPerson = ({ url, personId }) => async (dispatch, getState) => {
  dispatch(setPersonLoading());
  try {
    const response = await axios(url);
    dispatch(setPersonSuccess({ data: response.data, personId }));
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
