/* eslint-disable no-param-reassign */
/*
  I am not mutating the state!
  The createSlice function uses a library called Immer internally
  that keep tracks of changes and allows to create new structures even if the changes
  are written in a 'mutating' fashion.
*/
import { createSlice } from "@reduxjs/toolkit";
import { fetchSource } from "./sourceApiCalls";
import {
  createFetchListReducers,
  fetchListInitialState,
} from "../helpers/createFetchReducers";

const sourceSlice = createSlice({
  name: "source",
  initialState: fetchListInitialState,
  reducers: {
    newAction: (state) => {
      state.status = "failed";
    },
  },
  extraReducers: {
    ...createFetchListReducers(fetchSource),
  },
});

const { newAction } = sourceSlice.actions;

const sourceSliceReducer = sourceSlice.reducer;
export { newAction, sourceSliceReducer };
