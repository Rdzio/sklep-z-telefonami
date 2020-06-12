import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "./HomePage";
import Kontakt from "./Kontakt";
import Regulamin from "./Regulamin";
import Cart from "./components/Cart/Cart";
import ThankYou from "./ThankYou";
import Details from "./components/Product/Details";
import ProductList from "./components/Product/ProductList";
import NotFound from "./components/NotFound";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/telefony/:vendor" component={ProductList} />
          <Route path="/telefony/" component={ProductList} />
          <Route path="/szczegoly/:id/" component={Details} />
          <Route path="/koszyk" component={Cart} />
          <Route path="/dziekujemy" component={ThankYou} />
          <Route path="/regulamin" component={Regulamin} />
          <Route path="/kontakt" component={Kontakt} />
          <Route path="/" component={HomePage} exact />
          <Route path="*" component={NotFound}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
