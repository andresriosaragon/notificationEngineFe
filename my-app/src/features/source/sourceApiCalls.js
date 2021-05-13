import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchSource = createAsyncThunk("fetchSource", async () => {
  const response = await fetch("http://localhost:3007/sources", {
    method: "GET",
    headers: {},
  });
  const json = await response.json();
  return json;
});

export { fetchSource };
