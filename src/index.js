import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Grommet } from "grommet";

const theme = {
  global: {
    colors: {
      brand: "#004080",
      "accent-1": "#8080ff",
      focus: "#e0b3ff",
    },
    font: {
      family: "Arial",
      size: "14px",
      height: "20px",
    },
  },
};

ReactDOM.render(
  <React.StrictMode>
    <Grommet theme={theme}>
      <App />
    </Grommet>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
