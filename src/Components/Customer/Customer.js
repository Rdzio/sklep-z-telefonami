import React from "react";

// single comment
class Customer extends React.Component {
  render() {
    return (
      <div className={"customer "}>
        <div className="d-flex">
          <img src={require('../../img/no-icon.svg')} alt="" />
          <p className="customer-name">{this.props.name}</p>
        </div>
        <p className="customer-rating">{this.props.rating}</p>
        <p className="customer-comment">{this.props.comment}</p>
      </div>
    );
  }
}

export default Customer;
