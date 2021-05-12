import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";

import { AppRouter } from "./Router";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <AppRouter />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
