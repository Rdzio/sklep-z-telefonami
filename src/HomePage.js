import React, { Component } from "react";

import Header from "./Components/Header/Header";
import SideBar from "./Components/Sidebar";
import Slide from "./Components/Slide";
import ProductList from "./Components/Product/ProductList";
import BrandList from "./Components/Brand/BrandList";
import Advertisement from "./Components/Advertisement";
import Customer from "./Components/Customer";

class HomePage extends Component {
  render() {
    return (
      <div className="glowna">
        <Header />
        <SideBar />
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
