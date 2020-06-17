import React, { Component } from "react";
import "../src/scss/partials/kontakt.scss";

import Header from "./components/Header/Header";

import Footer from "./components/Footer";

// contact page
class Kontakt extends Component {
  render() {
    return (
      <div>
          <Header />
          <div className="container">
            <main>
                <h1>Zapraszamy do kontaktu</h1>
                <h4>Pracujemy od Poniedziałku do Piątku w godzinach 8:00 - 16:00</h4>
                <a href="callto: 563 736 832" className="d-flex info-box">
                  <img src={require('./img/phone.svg')} alt="phone" />
                  573 823 738
                </a>
                <a href="mailto: gorkasklep@gmail.com" className="d-flex info-box">
                  <img src={require('./img/mail.svg')} alt="mail" />
                  gorkasklep@gmail.com
                </a>
            </main>
            <Footer />
          </div>
      </div>
    );
  }
}

export default Kontakt;
