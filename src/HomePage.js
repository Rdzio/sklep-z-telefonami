import React, { Component } from "react";

import Header from "./Components/Header/Header";
import Slide from "./Components/Slide";
import ProductList from "./Components/Product/ProductList";
import BrandList from "./Components/Brand/BrandList";
import Advertisement from "./Components/Advertisement";
import CustomerList from "./Components/Customer/CustomerList";
import Footer from "./Components/Footer";

class HomePage extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
          <Slide />
        </div>
        <div className="glowna">
          <ProductList />
          <BrandList />
          <Advertisement />
          <CustomerList />
          <Footer />
        </div>
      </div>
    );
  }
}

export default HomePage;
