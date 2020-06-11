import React from "react";
import { connect } from "react-redux";

import Product from "./Product";

class RecommendedList extends React.Component {
  render() {
    return (
      <div className="product-space">
        <h1 className="product-h1">Polecamy w tym miesiącu</h1>
        {this.props.items.filter(prop => this.props.recommended.includes(prop.id)).map(product => {
          return <Product key={product.id} product={product} img={`${product.title.toLowerCase().split(' ').join('')}.jpg`} />;
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

export default connect(mapStateToProps)(RecommendedList);
