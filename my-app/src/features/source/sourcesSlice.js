/* eslint-disable no-param-reassign */
/*
  I am not mutating the state!
  The createSlice function uses a library called Immer internally
  that keep tracks of changes and allows to create new structures even if the changes
  are written in a 'mutating' fashion.
*/
import { createSlice } from "@reduxjs/toolkit";
import { fetchSources } from "./sourceApiCalls";
import {
  createFetchListReducers,
  fetchListInitialState,
} from "../helpers/createFetchReducers";

const sourcesSlice = createSlice({
  name: "sources",
  initialState: fetchListInitialState,
  reducers: {},
  extraReducers: {
    ...createFetchListReducers(fetchSources),
  },
});

export { sourcesSlice };
