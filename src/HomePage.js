import React, { Component } from "react";

import Header from "./components/Header/Header";
import Slide from "./components/Slide";
import ProductList from "./components/Product/ProductList";
import BrandList from "./components/Brand/BrandList";
import Advertisement from "./components/Advertisement";
import Customer from "./components/Customer";

class HomePage extends Component {
  render() {
    return (
      <div className="glowna">
        <Header />
        <Slide />
        <br></br>
        <br></br>
        <br></br>
        <ProductList />
        <BrandList />
        <Advertisement />
        <Customer />
      </div>
    );
  }
}

export default HomePage;
