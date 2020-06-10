import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// import { NavLink } from "react-router-dom";

import { addToCart } from "../Cart/CartActions";

class Product extends React.Component {
  handleClick = (id) => {
    this.props.addToCart(id);
  };

  handleClickDetails = (id) => {
    this.props.addToCart(id);
  };

  render() {
    const {
      id,
      title,
      img,
      price,
      mainCamera,
      secondCamera,
      storage,
      ram,
      diagonal,
    } = this.props.product;
    return (
      <div className="border border-dark product-item-space">
        <img
          className="product-center product-image"
          src={require("../assets/phone.png")}
          alt="telefon"
        ></img>
        <h2 className="product-center product-h2">{title}</h2>
        <ul className="product-list">
          <li>
            <p className="product-p">
              Aparat główny:{" "}
              <strong className="product-p">
                {mainCamera}MP + {secondCamera}MP
              </strong>
            </p>
          </li>
          <li>
            <p className="product-p">
              Pamięć podręczna: <strong className="product-p">{ram}GB</strong>
            </p>
          </li>
          <li>
            <p className="product-p">
              Pamięć wbudowana:{" "}
              <strong className="product-p">{storage}GB</strong>
            </p>
          </li>
          <li>
            <p className="product-p">
              Przekątna ekranu:{" "}
              <strong className="product-p">{diagonal} cala</strong>
            </p>
          </li>
        </ul>
        <Link
        className="product-more"
          to={{
            pathname: `/szczegoly/`+id+`-`+title.toLowerCase().split(" ").join("-"),
          }}
        >
          <button className="btn btn-outline-secondary btn-lg btn-block product-button product-more">
            Czytaj więcej...
          </button>
        </Link>
        <div className="product-line"></div>
        <h3 className="product-h3">{price} zł</h3>
        <button
          className="btn btn-danger btn-lg btn-block product-button product-add"
          onClick={() => {
            this.handleClick(id);
          }}
        >
          Dodaj do koszyka
        </button>

        <div id="myModal" className="modal">
          <div className="modal-content">
            <span className="close">&times;</span>
            <p>Co dalej?</p>
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
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
