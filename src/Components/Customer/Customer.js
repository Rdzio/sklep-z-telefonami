import React from "react";

class Customer extends React.Component {

  render() {
    return (
      <div className={"customer " + this.props.mobile}>
        <figure className="customer-figure">
          <img
            className="customer-image"
            src={require("../assets/customer.png")}
            alt="Klient"
          />
        </figure>
        <p className="customer-name">{this.props.name}</p>
        <p className="customer-rating">{this.props.rating}</p>
        <p className="customer-comment">{this.props.comment}</p>
      </div>
    );
  }
}

export default Customer;
