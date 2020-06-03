import React from "react";

class Customer extends React.Component {
  render() {
    return (
        <div>
            <h4>Co mówią o nas klienci?</h4>
            <img src={require('./assets/customer.png')} alt="Customer"></img>
        </div>
    );
  }
}

export default Customer;