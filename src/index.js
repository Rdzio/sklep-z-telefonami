import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import "./scss/style.scss"

import HomePage from "./HomePage";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={HomePage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
