import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const peoplesInitialState = {
  peoples: [],
  loading: false,
  error: null
};

const peoplesSlice = createSlice({
  name: "peoplesSlice",
  initialState: peoplesInitialState,
  reducers: {
    setPeoplesLoading(state) {
      state.loading = true;
    },
    setPeoplesSuccess(state, action) {
      state.loading = false;
      state.peoples = action.payload;
    },
    setPeoplesError(state, action) {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

const {
  setPeoplesLoading,
  setPeoplesSuccess,
  setPeoplesError
} = peoplesSlice.actions;

const fetchPeoples = payload => async (dispatch, getState) => {
  dispatch(setPeoplesLoading());
  try {
    const response = await axios(payload);
    dispatch(setPeoplesSuccess(response.data.results));
  } catch (e) {
    setPeoplesError("Person request faild");
  }
};

export default peoplesSlice.reducer;
export { fetchPeoples };
