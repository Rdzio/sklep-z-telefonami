import React from "react";
import { connect } from "react-redux";

import Product from "./Product";

class ProductList extends React.Component {
  render() {
    {
      for (let key of this.props.items) {
        console.log(key);
      }
    }
    return (
      <div className="product-space">
        <h1 className="product-h1">Polecamy w tym miesiącu</h1>
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
