import React from "react";
import * as SC from "./App.styled";
import { Exchange } from "../Exchange";

function App() {
  return (
    <SC.App>
      <SC.Header>
        <span>Homebrew</span> <span>Exchange</span> <span>Currency</span>
      </SC.Header>
      <SC.Main>
        <Exchange />
      </SC.Main>
      <SC.Footer>
        Powered by <SC.A href="https://www.frankfurter.app/">www.frankfurter.app</SC.A>
      </SC.Footer>
    </SC.App>
  );
}

export default App;
