import React from "react";

class Product extends React.Component {
  render() {
    const {
      /*id,*/
      title,
      /*img,*/
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
          className="product-center"
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
        <button className="btn btn-outline-secondary btn-lg btn-block product-button">
          Czytaj więcej...
        </button>
        <h3 className="product-h3">{price} zł</h3>
        <button className="btn btn-danger btn-lg btn-block product-button">
          Dodaj do koszyka
        </button>
      </div>
    );
  }
}
export default Product;
