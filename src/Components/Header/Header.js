import React from "react";
import Logo from "./Logo";
import SideBar from "./Sidebar";
import Brand from "./Brand";
import Cart from "./Cart";
import { Link } from "react-router-dom";

export class Header extends React.Component {
  render() {
    return (
      <header className="navbar navbar-expand-lg py-md-3 bg-black">
        <div className="navbar-elements">
          <Logo />
          <SideBar />
          <Brand />
          <Cart />
          <Link className="navbar-buttons">Koszyk</Link>
          <Link className="navbar-buttons">Logowanie</Link>
          <Link className="navbar-buttons">Rejestracja</Link>
        </div>
        >
      </header>
    );
  }
}

export default Header;
