/* eslint-disable no-param-reassign */

import { createSlice } from "@reduxjs/toolkit";
import { fetchIndustries } from "./sourceApiCalls";
import {
  createFetchListReducers,
  fetchListInitialState,
} from "../helpers/createFetchReducers";

const industriesSlice = createSlice({
  name: "industries",
  initialState: fetchListInitialState,
  reducers: {},
  extraReducers: {
    ...createFetchListReducers(fetchIndustries),
  },
});

export { industriesSlice };
