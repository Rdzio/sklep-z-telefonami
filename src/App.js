import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "./HomePage";
import Kontakt from "./Kontakt";
import Regulamin from "./Regulamin";
import Cart from "./components/Cart/Cart";
import Details from "./components/Product/Details";
import NotFound from "./components/NotFound";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/szczegoly/:id/" component={Details} />
          <Route path="/koszyk" component={Cart} />
          <Route path="/regulamin" component={Regulamin} />
          <Route path="/kontakt" component={Kontakt} />
          <Route path="/" component={HomePage} exact />
          <Route path="*" component={NotFound} exact/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
