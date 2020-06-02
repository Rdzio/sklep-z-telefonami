import React from "react";

class Customer extends React.Component {
  render() {
    return (
        <div>
            <h1>Co mówią o nas klienci?</h1>
            <img src={require('./assets/customer.png')} alt="Customer"></img>
        </div>
    );
  }
}

export default Customer;