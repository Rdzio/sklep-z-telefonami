import React, { Component } from "react";
import "../src/scss/partials/kontakt.scss";

import Header from "./components/Header/Header";

import Footer from "./components/Footer";

class Regulamin extends Component {
  render() {
    return (
      <div>
          <Header />
          <main>
              <h1>Jeszcze nie ma regulaminu</h1>
          </main>
          <Footer />
      </div>
    );
  }
}

export default Regulamin;
