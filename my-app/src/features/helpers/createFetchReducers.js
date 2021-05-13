/* eslint-disable no-param-reassign */

const createFetchListReducers = (fetchThunk) => {
  return {
    [fetchThunk.pending]: (state) => {
      state.status = "loading";
    },
    [fetchThunk.fulfilled]: (state, { payload }) => {
      state.results = payload;
      state.status = "succeeded";
    },
    [fetchThunk.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  };
};

const fetchListInitialState = {
  results: [],
  status: "idle",
  error: null,
};

export { createFetchListReducers, fetchListInitialState };
