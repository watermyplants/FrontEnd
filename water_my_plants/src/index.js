import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>
    <Router>
      <App />
    </Router>
  </Provider>
  document.getElementById("root")
);
