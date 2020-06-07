import React, { Component } from "react";
import Brand from "./Brand";
import { brandList } from "../../data";

export default class ProductList extends Component {
  render() {
    return (
      <div className="brand">
        <h2 className="brand-header">Przeglądaj według marki</h2>
        <div className="brand-list">
          {brandList.map((brand) => {
            return <Brand key={brand.id} brand={brand} />;
          })}
        </div>
      </div>
    );
  }
}
