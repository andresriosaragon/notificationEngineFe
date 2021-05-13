import { createAsyncThunk } from "@reduxjs/toolkit";

const createFetchThunk = ({ callName, url, method = "GET" }) => {
  return createAsyncThunk(callName, async () => {
    const response = await fetch(url, {
      method,
      headers: {},
    });
    const json = await response.json();
    return json;
  });
};

export { createFetchThunk };
