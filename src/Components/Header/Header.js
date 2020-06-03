import React from "react";
import Logo from "./Logo";
import SideBar from "../Sidebar";

export class Header extends React.Component {
  render() {
    return (
      <header className="navbar navbar-expand-lg py-md-3 bg-black">
        <Logo />
        <SideBar />
      </header>
    );
  }
}

export default Header;
