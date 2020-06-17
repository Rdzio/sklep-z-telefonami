import React from "react";
import { connect } from "react-redux";
import LazyLoad from "react-lazyload";

import Product from "./Product";

// render all recomended products
class RecommendedList extends React.Component {
  // update component
  updateComponent = () => {
    this.forceUpdate();
  };

  // check for rendered products
  componentDidMount() {
    if (document.querySelector(".product-item-space") === null)
      setTimeout(this.updateComponent, 1000);
  }

  render() {
    return (
      <div className="product-space">
        <h1 className="product-h1">Polecamy w tym miesiącu</h1>
        {this.props.items
          .filter((prop) => this.props.recommended.includes(prop.id))
          .map((product) => {
            return (
              <LazyLoad placeholder={"Ładowanie..."}>
                <Product
                  key={product.id}
                  product={product}
                  img={`${product.title.toLowerCase().split(" ").join("")}.jpg`}
                />
              </LazyLoad>
            );
          })}
      </div>
    );
  }
}

// set redux data to props
const mapStateToProps = (state) => {
  return {
    items: state.items,
    recommended: state.recommended,
  };
};

// connect to redux
export default connect(mapStateToProps)(RecommendedList);
