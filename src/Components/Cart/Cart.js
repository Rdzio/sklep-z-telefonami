import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeItem, addQuantity, subtractQuantity } from "./CartActions";

import "../../scss/partials/kontakt.scss";
import Header from "../Header/Header";
import Footer from "../Footer";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delivery: "20zł",
    }
  }

  handleClick = () => {
    this.props.total > 999 ? this.setState({delivery: "Za darmo!"}) : this.setState({delivery: "20zł"});
  }

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

  componentDidUpdate() {
    if (this.props.total > 0)
      document.querySelector(".basket-proceed").disabled = false;
    else document.querySelector(".basket-proceed").disabled = true;
  }

  componentDidMount() {
    if (this.props.total > 0)
      document.querySelector(".basket-proceed").disabled = false;
    else document.querySelector(".basket-proceed").disabled = true;

    this.props.total > 999 ? this.setState({delivery: "Za darmo!"}) : this.setState({delivery: "20zł"});
  }

  render() {
    let addedItems = this.props.items.length ? (
      this.props.items.map((item) => {
        return (
          <div className="border border-dark cart-item-space" key={item.title}>
            <img src={item.img} alt="" />
            <h2 className="cart-item-name">{item.title}</h2>
            <p className="cart-item-quantity">
              <span className="item-quantity">{item.quantity}</span> szt.
            </p>
            <div className="item-count-box">
              <Link to="/koszyk" className="btn-content--minus-parent">
                <i
                  onClick={() => {
                    this.handleSubtractQuantity(item.id);
                    this.handleClick();
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
                    this.handleClick();
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
                this.handleClick();
              }}
            >
              <p>X</p>
            </button>
            <h3 className="cart-item-pirce">
              <span className="item-price">{item.price}</span>zł
            </h3>
          </div>
        );
      })
    ) : (
      <p className="cart-item-quantity--empty">Koszyk jest pusty!</p>
    );
    return (
      <div>
        <Header />
        <div className="container">
          <div className="cart-space">
            <h1 className="cart-header">Twoje produkty</h1>
            <div className="phones-parent">{addedItems}</div>
            <form>
              <h2>Uzupełnij dane do wysyłki</h2>
              <div className="form--xl-grid">
                <div className="input--parent">
                  <input type="text" id="input--imie" name="imie" className="form__input" required />
                  <label htmlFor="input--imie">Imię i nazwisko</label>
                </div>
                <div className="input--parent">
                  <input type="text" id="input--ulica" name="ulica" className="form__input" required />
                  <label htmlFor="input--ulica">Ulica i numer</label>
                </div>
                <div className="input--parent">
                  <input type="text" id="input--kod" name="kod" className="form__input" required />
                  <label htmlFor="input--kod">Kod pocztowy</label>
                </div>
                <div className="input--parent">
                  <input type="text" id="input--miasto" name="miasto" className="form__input" required />
                  <label htmlFor="input--miasto">Miasto</label>
                </div>
                <div className="input--parent">
                  <input type="text" id="input--email" name="email" className="form__input" required />
                  <label htmlFor="input--email">Adres e-mail</label>
                </div>
                <div className="input--parent">
                  <input type="number" id="input--nrtel" name="nrtel" className="form__input" required />
                  <label htmlFor="input--nrtel">Numer tel.</label>
                </div>
              </div>
              <h2>Sposób dostawy</h2>
              <div className="input--checkbox--parent">
                <input type="checkbox" required name="dostawa" id="input--dostawa" className="form__input form__input--checkbox" />
                <span className="real-checkbox"></span>
                <label htmlFor="input--dostawa">Dostawa kurierem ({this.state.delivery})</label>
              </div>
              <h2>Regulamin</h2>
              <div className="input--checkbox--parent">
                <input type="checkbox" required name="regulamin" id="input--regulamin" className="form__input form__input--checkbox" />
                <span className="real-checkbox"></span>
                <label htmlFor="input--regulamin">Akceptuję regulamin sklepu</label>
              </div>
              <div className="d-flex basket-proceed-parent">
                <h4 className="to-pay">
                  Do zapłaty:{" "}
                  <strong>
                    <span className="total-cost">{this.props.total}</span>zł
                  </strong>
                </h4>
                <input type="submit" className="btn btn-danger basket-proceed" value="Złóż zamówienie"></input>
              </div>
            </form>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.addedItems,
    total: state.total,
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
