import { configureStore } from "@reduxjs/toolkit";
import { sourceSliceReducer } from "../features/source/sourceSlice";

const store = configureStore({
  reducer: {
    source: sourceSliceReducer,
  },
});

export { store };
