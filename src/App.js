import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "./HomePage";
import Kontakt from "./Kontakt";
import Regulamin from "./Regulamin";
import Cart from "./components/Cart/Cart";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/koszyk" component={Cart} />
          <Route path="/regulamin" component={Regulamin} />
          <Route path="/kontakt" component={Kontakt} />
          <Route path="/" component={HomePage} exact />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
