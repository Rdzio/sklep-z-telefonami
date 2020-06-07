import React, { Component } from "react";
import "../src/scss/partials/kontakt.scss";

import Header from "./components/Header/Header";

import Footer from "./components/Footer";

class Koszyk extends Component {
  render() {
    return (
      <div>
          <Header />
          <main>
              <h1>W budowie</h1>
          </main>
          <Footer />
      </div>
    );
  }
}

export default Koszyk;
