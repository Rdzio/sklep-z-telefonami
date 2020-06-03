import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-spacing">
        <h2 className="footer-header">Nazwa sklepu</h2>
        <Link className="footer-link">Strona główna</Link>
        <Link className="footer-link">Kontakt</Link>
        <Link className="footer-link">Opinie</Link>
        <Link className="footer-link">Regulamin</Link>
        <p className="footer-copyright">Wszelkie prawa zastrzeżone © nazwa sklepu 2020</p>
      </div>
    );
  }
}

export default Footer;
