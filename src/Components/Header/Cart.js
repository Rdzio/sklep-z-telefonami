import React from "react";

class Cart extends React.Component {
  render() {
    return (
      <section className="navbar-cart">
        <img src={require("../assets/cart.svg")} alt="Logo"></img>
      </section>
    );
  }
}

export default Cart;
