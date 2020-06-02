import React from "react";
import Brand from "./Brand";
import { brandList } from "../../data";

export default class ProductList extends React.Component {
  render() {
    return (
      <div className="brand">
        {brandList.map((brand) => {
          return <Brand key={brand.id} brand={brand} />;
        })}
      </div>
    );
  }
}
