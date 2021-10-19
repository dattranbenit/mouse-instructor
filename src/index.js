import React from "react";
import ReactDOM from "react-dom";
import "./views/assets/styles/scss/index.scss";
import Drawing from "./views/pages/user/games/Drawing";
import * as serviceWorker from "./serviceWorker";
import { CanvasProvider } from "./views/pages/components/Drawing/CanvasContext";
import App from "./views/pages/app";

ReactDOM.render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
