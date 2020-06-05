import React from "react";
import { NavLink } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

export default (props) => {
  return (
    <Menu className="sidebar">
      <NavLink
        className="menu-item"
        to="/"
        onClick={window.scrollTo(0, 0)}
        activestyle={{ color: "#f8c917ff" }}
      >
        <span className="text-decoration-none text-white bm-link" >Strona Główna</span>
      </NavLink>

      <br />
    </Menu>
  );
};
