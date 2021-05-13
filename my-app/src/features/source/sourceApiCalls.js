import { createFetchThunk } from "../helpers/createFetchThunk";

const fetchSources = createFetchThunk({
  callName: "fetchSource",
  url: "http://localhost:3007/sources",
});

const fetchIndustries = createFetchThunk({
  callName: "fetchIndustries",
  url: "http://localhost:3007/industries",
});

export { fetchSources, fetchIndustries };
