import React from "react";
import Product from "./Product";
import { storeProducts } from "../../data";

export default class ProductList extends React.Component {
  render() {
    return (
      <div className="product-space">
        <h1 className="product-h1">Popularne w tym miesiącu</h1>
        {storeProducts.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    );
  }
}
