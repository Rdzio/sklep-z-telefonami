import React from "react";
import SideBar from "./Sidebar";
import { NavLink } from "react-router-dom";

export class Header extends React.Component {
  render() {
    return (
      <header className="navbar navbar-expand-lg py-md-3 bg-black">
        <SideBar />
        <div className="navbar-elements">

          <NavLink to="/">
            <picture>
              <source media="(min-width: 1300px)" srcSet={require("../assets/logo-pc.png")} />
              <img src={require('../assets/logo-mob.png')} className="logo-img" alt="logo" style={{height: "100%"}} />
            </picture>
          </NavLink>
       
          <div className="links">
            <NavLink to="/" className="navbar-buttons">Strona Główna</NavLink>
            <NavLink to="/kontakt" className="navbar-buttons">Kontakt</NavLink>
            <NavLink to="/regulamin" className="navbar-buttons">Regulamin</NavLink>
            <NavLink to="/koszyk" className="navbar-buttons">
              Koszyk
              <img src={require("../assets/cart.svg")} alt="Logo" style={{filter: "invert(1)", transform: "translate(10px, 4px)"}}></img>
            </NavLink>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
