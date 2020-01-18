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
      state.peoples = state.peoples.concat(action.payload);
    },
    setPeoplesError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    resetPeoples(state) {
      state.peoples = [];
    }
  }
});

const {
  setPeoplesLoading,
  setPeoplesSuccess,
  setPeoplesError,
  resetPeoples
} = peoplesSlice.actions;

const fetchPeoples = payload => async (dispatch, getState) => {
  dispatch(setPeoplesLoading());
  try {
    const response = await axios(payload);
    dispatch(setPeoplesSuccess(response.data.results));
    if (response.data.next) {
      fetchPeoples(response.data.next)(dispatch, getState);
    }
  } catch (e) {
    setPeoplesError("Person request faild");
  }
};

export default peoplesSlice.reducer;
export { fetchPeoples, resetPeoples };
