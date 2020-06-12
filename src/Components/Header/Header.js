import React from "react";
import SideBar from "./Sidebar";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

export class Header extends React.Component {
  componentDidUpdate() {
    if (this.props.itemsAdded > 0)
      document.querySelector(".navbar-item-counter").classList.remove("navbar-item-counter-inactive");
    else
      document.querySelector(".navbar-item-counter").classList.add("navbar-item-counter-inactive");
  }

  componentDidMount() {
    if (this.props.itemsAdded > 0)
      document.querySelector(".navbar-item-counter").classList.remove("navbar-item-counter-inactive");
    else
      document.querySelector(".navbar-item-counter").classList.add("navbar-item-counter-inactive");
  }

  render() {
    return (
      <header className="navbar navbar-expand-lg bg-black">
        <SideBar />
        <div className="navbar-elements">
          <NavLink to="/">
            <picture>
              <source
                media="(min-width: 1300px)"
                srcSet={require("../../img/logo-pc.png")}
              />
              <img
                src={require("../../img/logo-mob.png")}
                className="logo-img"
                alt="logo"
                style={{ height: "100%" }}
              />
            </picture>
          </NavLink>

          <div className="links">
            <NavLink to="/telefony" className="navbar-buttons">
              Przeglądaj telefony
            </NavLink>
            <NavLink to="/" className="navbar-buttons">
              Strona Główna
            </NavLink>
            <NavLink to="/kontakt" className="navbar-buttons">
              Kontakt
            </NavLink>
            <NavLink to="/regulamin" className="navbar-buttons">
              Regulamin
            </NavLink>
            <NavLink to="/koszyk" className="navbar-buttons">
              Koszyk
              <img
                src={require("../../img/cart.svg")}
                alt="Logo"
                style={{
                  filter: "invert(1)",
                  transform: "translate(10px, -2px)",
                }}
              ></img>
              <p className="navbar-item-counter navbar-item-counter-inactive">
                {this.props.itemsAdded}
              </p>
            </NavLink>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    itemsAdded: state.itemsAdded,
  };
};

export default connect(mapStateToProps)(Header);
