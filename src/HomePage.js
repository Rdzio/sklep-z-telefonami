import React, { Component } from "react";

import Header from "./components/Header/Header";
import Slide from "./components/Slide/Slide";
import ProductList from "./components/Product/ProductList";
import BrandList from "./components/Brand/BrandList";
import Advertisement from "./components/Advertisement";
import CustomerList from "./components/Customer/CustomerList";
import Footer from "./components/Footer";

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
          <div className="container">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
