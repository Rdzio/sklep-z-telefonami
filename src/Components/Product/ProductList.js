import React from "react";
import { connect } from "react-redux";
import LazyLoad from "react-lazyload";

import Header from "../Header/Header";
import Footer from "../Footer";

import Product from "./Product";

// render all products
class ProductList extends React.Component {
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
    const { items } = this.props;
    return (
      <div>
        <div>
          <Header />
        </div>
        <div className="glowna">
          <div className="product-space">
            <h1 className="product-h1">
              Nasze telefony {this.props.match.params.vendor}
            </h1>
            {this.props.match.params.vendor
              ? items
                  .filter(
                    (item) => this.props.match.params.vendor === item.vendor
                  )
                  .map((product) => {
                    return (
                      <LazyLoad placeholder={"Ładowanie..."}>
                        <Product
                          key={product.id}
                          product={product}
                          img={`${product.title
                            .toLowerCase()
                            .split(" ")
                            .join("")}.jpg`}
                        />
                      </LazyLoad>
                    );
                  })
              : items.map((product) => {
                  return (
                    <LazyLoad placeholder={"Ładowanie..."}>
                      <Product
                        key={product.id}
                        product={product}
                        img={`${product.title
                          .toLowerCase()
                          .split(" ")
                          .join("")}.jpg`}
                      />
                    </LazyLoad>
                  );
                })}
            <div className="container">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// set redux data to props
const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

// connect to redux
export default connect(mapStateToProps)(ProductList);
