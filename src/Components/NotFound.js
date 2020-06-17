import React from "react";
import { Link } from "react-router-dom";

import Header from "./Header/Header";
import Footer from "./Footer";

// error page
class NotFound extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="notfound-space">
            <h2 className="notfound-header">Przepraszamy</h2>
            <h3 className="notfound-subheader">
              Strona o podanym adresie nie istnieje
            </h3>
            <p className="notfound-p">
              Prawdopodobnie kliknąłeś w błędny lub stary link. Jeżeli widzisz
              ten komunikat po kliknięciu łącza na naszej witrynie poinformuj
              nas o tym.
            </p>
            <Link
              to={{
                pathname: `/`,
              }}
            >
              <button className="btn btn-outline-secondary btn-lg btn-block notfound-button">
                Powrót na stronę główną
              </button>
            </Link>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default NotFound;
