import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyle } from "./GlobalStyle";
import { App } from "./components/App";

ReactDOM.render(
  <React.Fragment>
    <App />
    <GlobalStyle />
  </React.Fragment>,
  document.getElementById("root")
);
