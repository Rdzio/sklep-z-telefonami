import React from "react";
import { NavLink } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-spacing">
        <h2 className="footer-header">Górka - Sklep z telefonami</h2>
        <NavLink to="/" className="footer-link">Strona główna</NavLink>
        <NavLink to="/kontakt" className="footer-link">Kontakt</NavLink>
        <NavLink to="/regulamin" className="footer-link">Regulamin</NavLink>
        <NavLink to="/koszyk" className="footer-link">Koszyk</NavLink>
        <p className="footer-copyright">Wszelkie prawa zastrzeżone © Górka 2020</p>
      </div>
    );
  }
}

export default Footer;
