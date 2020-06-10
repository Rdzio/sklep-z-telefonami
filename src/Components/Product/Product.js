import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// import { NavLink } from "react-router-dom";

import { addToCart } from "../Cart/CartActions";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: {},
      id: props.product.id
    }
  }

  handleClick = (id) => {
    this.props.addToCart(id);
    this.setState({id: id});
    alert("Dodano do koszyka!");
  };

  // componentDidMount() {
  //   document.querySelector(`#add-to-basket--${this.state.id}`)
  //           .addEventListener('click', (prop) => {this.spawnAnimatedWord(prop)});
  // }

  // spawnAnimatedWord = (prop) => {
  //   let infoBox = document.querySelector(`#add-to-basket--${this.state.id}-info`);
  //   this.setState({position: {x: prop.pageX, y: prop.pageY}});
  //   infoBox.style.top = `${this.state.position.y - infoBox.clientHeight / 2}px`;
  //   infoBox.style.left = `${this.state.position.x - infoBox.clientWidth / 2}px`;
  // }

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
          id={`add-to-basket--${id}`}
          onClick={() => {
            this.handleClick(id);
          }}
        >
          Dodaj do koszyka
        </button>
        {/* <p className="added-to-basket--info" id={`add-to-basket--${id}-info`}>
          Dodano do koszyka!
        </p> */}
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
