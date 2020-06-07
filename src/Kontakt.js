import React, { Component } from "react";
import "../src/scss/partials/kontakt.scss";

import Header from "./components/Header/Header";

import Footer from "./components/Footer";

class Kontakt extends Component {
  render() {
    return (
      <div>
          <Header />
          <main>
              <h1>Zapraszamy do kontaktu</h1>
              <h4>Pracujemy od Poniedziałku do Piątku w godzinach 8:00 - 16:00</h4>
              <a href="callto: 563 736 832" class="d-flex info-box">
                <img src={require('./components/assets/phone.svg')} alt="phone" />
                573 823 738
              </a>
              <a href="mailto: gorkasklep@gmail.com" class="d-flex info-box">
                <img src={require('./components/assets/mail.svg')} alt="mail" />
                gorkasklep@gmail.com
              </a>
          </main>
          <Footer />
      </div>
    );
  }
}

export default Kontakt;
