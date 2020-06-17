import React from "react";
import { NavLink } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

// mobile menu buttons
export default (props) => {
  return (
    <Menu className="sidebar">
      <NavLink to="/telefony" className="menu-item">Przeglądaj telefony</NavLink>
      <NavLink to="/" className="menu-item">Strona główna</NavLink>
      <NavLink to="/kontakt" className="menu-item">Kontakt</NavLink>
      <NavLink to="/regulamin" className="menu-item">Regulamin</NavLink>
      <NavLink to="/koszyk" className="menu-item">Koszyk</NavLink>
    </Menu>
  );
};
