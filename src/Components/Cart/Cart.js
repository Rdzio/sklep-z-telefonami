import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeItem, addQuantity, subtractQuantity } from "./CartActions";

import "../../scss/partials/kontakt.scss";
import Header from "../Header/Header";
import Footer from "../Footer";

class Cart extends Component {
  //to remove the item completely
  handleRemove = (id) => {
    this.props.removeItem(id);
  };
  //to add the quantity
  handleAddQuantity = (id) => {
    this.props.addQuantity(id);
  };
  //to substruct from the quantity
  handleSubtractQuantity = (id) => {
    this.props.subtractQuantity(id);
  };

  render() {
    let addedItems = this.props.items.length ? (
      this.props.items.map((item) => {
        return (
          <div className="border border-dark cart-item-space">
            <img src={item.img} alt="" />
            <h2 className="cart-item-name">{item.title}</h2>
            <p className="cart-item-quantity">{item.quantity} szt.</p>
            <Link to="/koszyk">
              <i
                onClick={() => {
                  this.handleSubtractQuantity(item.id);
                }}
              >
                <button className="btn btn-outline-secondary cart-button-minus">
                  -
                </button>
              </i>
            </Link>
            <Link to="/koszyk">
              <i
                onClick={() => {
                  this.handleAddQuantity(item.id);
                }}
              >
                <button className="btn btn-danger cart-button-plus">+</button>
              </i>
            </Link>
            <button
              className="btn btn-danger btn-block cart-button-remove"
              onClick={() => {
                this.handleRemove(item.id);
              }}
            >
              X
            </button>
            <h3 className="cart-item-pirce">{item.price}zł</h3>
          </div>
        );
      })
    ) : (
      <p className="cart-item-quantity">Pusto</p>
    );
    return (
      <div>
        <Header />
        <div className="cart-space">
          <h1 className="cart-header">Twoje produkty</h1>
          {addedItems}
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.addedItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (id) => {
      dispatch(removeItem(id));
    },
    addQuantity: (id) => {
      dispatch(addQuantity(id));
    },
    subtractQuantity: (id) => {
      dispatch(subtractQuantity(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
