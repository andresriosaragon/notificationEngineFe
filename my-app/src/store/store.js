import { configureStore } from "@reduxjs/toolkit";
import { sourceReducer } from "../features/source/sourceFeature";

const store = configureStore({
  reducer: {
    source: sourceReducer,
  },
});

export { store };
