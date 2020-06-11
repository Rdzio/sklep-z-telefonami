import React, { Component } from "react";
import "../src/scss/partials/kontakt.scss";
import { NavLink } from "react-router-dom";

import Header from "./components/Header/Header";

import Footer from "./components/Footer";

class Kontakt extends Component {
  render() {
    return (
      <div>
          <Header />
          <div className="container">
            <main>
                <h1>Dziękujemy za udane zakupy!</h1>
                <h4>Pracujemy od Poniedziałku do Piątku w godzinach 8:00 - 16:00</h4>
                <NavLink to="/">
                  Strona główna
                </NavLink>
            </main>
            <Footer />
          </div>
      </div>
    );
  }
}

export default Kontakt;
