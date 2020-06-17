import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";

import { addToCart } from "../Cart/CartActions";

// single product component
class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: {},
      id: props.product.id,
    };
  }

  // handle add to cart action
  handleClickDetails = (id) => {
    this.props.addToCart(id);
  };

  handleClick = (id) => {
    this.props.addToCart(id);
  };

  render() {
    const {
      id,
      title,
      price,
      mainCamera,
      secondCamera,
      storage,
      ram,
      diagonal,
    } = this.props.product;
    return (
      <div className="border border-dark product-item-space">
        <LazyLoad
          once={true}
          placeholder={
            <img
              src={require(`../../img/phones/low_${this.props.img}`)}
              alt="..."
            />
          }
        >
          <img
            className="product-center product-image"
            src={require(`../../img/phones/${this.props.img}`)}
            alt="telefon"
          ></img>
        </LazyLoad>
        <h2 className="product-h2">{title}</h2>
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
            pathname:
              `/szczegoly/` +
              id +
              `-` +
              title.toLowerCase().split(" ").join("-"),
          }}
        >
          <button
            className="btn btn-outline-secondary btn-lg btn-block product-button product-more"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            Czytaj więcej...
          </button>
        </Link>
        <div className="product-line"></div>
        <h3 className="product-h3">{price} zł</h3>
        <button
          className="btn btn-danger btn-lg btn-block product-button product-add"
          id={`add-to-basket--${id}`}
          onClick={() => {
            this.handleClick(id);
          }}
        >
          Dodaj do koszyka
        </button>
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

// send data do cart reducer
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
  };
};

// connect to redux
export default connect(mapStateToProps, mapDispatchToProps)(Product);
