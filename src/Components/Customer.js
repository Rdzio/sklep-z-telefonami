import React from "react";

class Customer extends React.Component {
  render() {
    return (
      <div className="customer-space">
        <h2 className="customer-header">Co mówią o nas klienci?</h2>
        <div className="customer">
          <figure className="customer-figure">
            <img
              className="customer-image"
              src={require("./assets/customer.png")}
              alt="Klient"
            />
          </figure>
          <p className="customer-name">Ania z Gdańska</p>
          <p className="customer-rating">★★★★★</p>
          <p className="customer-comment">„Zajebisty sklep”</p>
        </div>
      </div>
    );
  }
}

export default Customer;
