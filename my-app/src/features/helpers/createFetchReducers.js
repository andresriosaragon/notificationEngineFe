/* eslint-disable no-param-reassign */

const createFetchListReducers = (fetchThunk) => {
  return {
    [fetchThunk.pending]: (state) => {
      state.status = "loading";
      state.loading = true;
    },
    [fetchThunk.fulfilled]: (state, { payload }) => {
      state.results = payload;
      state.status = "succeeded";
      state.loading = false;
    },
    [fetchThunk.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
      state.loading = false;
    },
  };
};

const fetchListInitialState = {
  results: [],
  status: "idle",
  loading: false,
  error: null,
};

export { createFetchListReducers, fetchListInitialState };
