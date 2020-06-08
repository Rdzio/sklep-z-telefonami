import React from "react";
import { connect } from "react-redux";

import Product from "./Product";

class ProductList extends React.Component {
  render() {
    return (
      <div className="product-space">
        <h1 className="product-h1">Popularne w tym miesiącu</h1>
        {this.props.items.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

export default connect(mapStateToProps)(ProductList);
