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

  updateTotalValue() {
    let value = 0;

    if (document.querySelector('.cart-item-space')) {
      Array.from(document.querySelectorAll('.cart-item-space')).forEach(props => {
        value += Number(props.querySelector('.item-quantity').textContent) * Number(props.querySelector('.item-price').textContent);
      });

      document.querySelector('.total-cost').innerHTML = value;
    }
  }

  componentDidMount() {
    this.updateTotalValue();
  }

  componentDidUpdate() {
    this.updateTotalValue();
  }

  render() {
    let addedItems = this.props.items.length ? (
      this.props.items.map((item) => {
        return (
          <div className="border border-dark cart-item-space" key={item.title}>
            <img src={item.img} alt="" />
            <h2 className="cart-item-name">{item.title}</h2>
            <p className="cart-item-quantity"><span className="item-quantity">{item.quantity}</span> szt.</p>
            <div className="item-count-box">
            <Link to="/koszyk" className="btn-content--minus-parent">
              <i
                onClick={() => {
                  this.handleSubtractQuantity(item.id);
                }}
              >
                <button className="btn btn-outline-secondary cart-button-minus">
                  <p className="btn-content btn-content--minus">-</p>
                </button>
              </i>
            </Link>
            <Link to="/koszyk">
              <i
                onClick={() => {
                  this.handleAddQuantity(item.id);
                }}
              >
                <button className="btn btn-danger cart-button-plus">
                  <p className="btn-content">+</p>
                </button>
              </i>
            </Link>
            </div>
            <button
              className="btn btn-danger btn-block cart-button-remove"
              onClick={() => {
                this.handleRemove(item.id);
                this.updateTotalValue();
              }}
            >
              <p>X</p>
            </button>
            <h3 className="cart-item-pirce"><span className="item-price">{item.price}</span>zł</h3>
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
          <h4 className="to-pay">Do zapłaty: <strong><span className="total-cost">0</span>zł</strong></h4>
          <button className="btn btn-danger basket-proceed">
            <p>Przejdź dalej</p>
          </button>
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
