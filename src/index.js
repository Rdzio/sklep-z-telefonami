import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./ConfigureStore";

import "./scss/style.scss";
import App from "./App";

ReactDOM.render(
  // make store avabile to any nested components
  // delay loading app, until persisted state is loaded/saved
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,

  document.getElementById("root")
);
