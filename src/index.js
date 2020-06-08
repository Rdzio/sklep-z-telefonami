import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import "./scss/style.scss";
import App from "./App";
import CartCore from "./components/Cart/CartCore";

const store = createStore(CartCore);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
