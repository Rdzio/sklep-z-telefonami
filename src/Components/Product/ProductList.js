import React from "react";
import { connect } from "react-redux";

import Header from "../Header/Header";
import Footer from "../Footer";

import Product from "./Product";

class ProductList extends React.Component {
  updateComponent = () => {
    this.forceUpdate();
  };

  componentDidMount() {
    if (document.querySelector(".product-item-space") === null)
      setTimeout(this.updateComponent, 1000);
  }
  render() {
    const { items } = this.props;

    // const Test = () => {
    //   if (this.props.match.params.vendor === undefined) {
    //     console.log("undefined");
    //     items.map((product) => {
    //       return (
    //         <Product
    //           key={product.id}
    //           product={product}
    //           img={`${product.title.toLowerCase().split(" ").join("")}.jpg`}
    //         />
    //       );
    //     });
    //   } else {
    //     console.log(this.props.match.params.vendor);
    //     items
    //       .filter((item) => this.props.match.params.vendor === item.vendor)
    //       .map((product) => {
    //         return (
    //           <Product
    //             key={product.id}
    //             product={product}
    //             img={`${product.title.toLowerCase().split(" ").join("")}.jpg`}
    //           />
    //         );
    //       });
    //   }
    // };

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
                      <Product
                        key={product.id}
                        product={product}
                        img={`${product.title
                          .toLowerCase()
                          .split(" ")
                          .join("")}.jpg`}
                      />
                    );
                  })
              : items.map((product) => {
                  return (
                    <Product
                      key={product.id}
                      product={product}
                      img={`${product.title
                        .toLowerCase()
                        .split(" ")
                        .join("")}.jpg`}
                    />
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

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

export default connect(mapStateToProps)(ProductList);
