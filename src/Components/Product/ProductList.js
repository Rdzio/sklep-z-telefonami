import React from "react";
import { connect } from "react-redux";

import Product from "./Product";

class ProductList extends React.Component {
  render() {
    return (
      <div className="product-space">
        {console.log(this.props.recommended)}
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
    recommended: state.recommended,
  };
};

export default connect(mapStateToProps)(ProductList);
