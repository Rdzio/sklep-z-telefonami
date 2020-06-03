import React, { Component } from "react";

import Header from "./Components/Header/Header";
import Slide from "./Components/Slide";
import ProductList from "./Components/Product/ProductList";
import BrandList from "./Components/Brand/BrandList";
import Advertisement from "./Components/Advertisement";
import Customer from "./Components/Customer";
import Footer from "./Components/Footer"

class HomePage extends Component {
  render() {
    return (
      <div className="glowna">
        <Header />
        <Slide />
        <ProductList />
        <BrandList />
        <Advertisement />
        <Customer />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
