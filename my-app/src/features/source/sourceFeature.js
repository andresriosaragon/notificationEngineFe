import { combineReducers } from "redux";

import { sourcesSlice } from "./sourcesSlice";
import { industriesSlice } from "./industriesSlice";

const sourceReducer = combineReducers({
  sources: sourcesSlice.reducer,
  industries: industriesSlice.reducer,
});

export { sourceReducer };
