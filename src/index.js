import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import SplashAnim from "./SplashAnim";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <SplashAnim>
      <App />
    </SplashAnim>
  </StrictMode>,
  rootElement
);
