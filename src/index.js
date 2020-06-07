import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import "./scss/style.scss"

import HomePage from "./HomePage";
import Kontakt from "./Kontakt";
import Regulamin from "./Regulamin";
import Koszyk from "./Koszyk";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/koszyk" component={Koszyk} />
      <Route path="/regulamin" component={Regulamin} />
      <Route path="/kontakt" component={Kontakt} />
      <Route path="/" component={HomePage} exact />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
