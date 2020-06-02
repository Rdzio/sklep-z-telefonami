import React, { Component } from "react";

class Logo extends Component {
  render() {
    return (
      <section className="navbar-brand">
        <img src={require('../assets/logo.png')} alt="Logo"></img>
      </section>
    );
  }
}

export default Logo;
