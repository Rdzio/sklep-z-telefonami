import React from "react";

import Customer from "./Customer";

class CustomerList extends React.Component {
  render() {
    return (
      <div className="customer-space">
        <h2 className="customer-header">Co mówią o nas klienci?</h2>
        <Customer
          name="Ania z Gdańska"
          rating="★★★★★"
          comment="„Zajebisty sklep”"
          mobile=""
        />
        <Customer
          name="Ania z Gdańska"
          rating="★★★★★"
          comment="„Zajebisty sklep”"
          mobile="customer-mobile"
        />
      </div>
    );
  }
}

export default CustomerList;
