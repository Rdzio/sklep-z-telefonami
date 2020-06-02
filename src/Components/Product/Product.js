import React from "react";

class Product extends React.Component {
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
        <img className="product-center" src={require("../assets/phone.png")} alt="photo"></img>
        <h2 className="product-center">{title}</h2>
        <list>
          <ul className="product-list">
            <li>
              <p>
                Aparat główny:{" "}
                <b>
                  {mainCamera}MP + {secondCamera}MP
                </b>
              </p>
            </li>
            <li>
              <p>
                Pamięć podręczna: <b>{ram}GB</b>
              </p>
            </li>
            <li>
              <p>
                Pamięć wbudowana: <b>{storage}GB</b>
              </p>
            </li>
            <li>
              <p>
                Przekątna ekranu: <b>{diagonal} cala</b>
              </p>
            </li>
          </ul>
        </list>
        <button className="btn btn-outline-secondary btn-lg btn-block">Czytaj więcej...</button>
        <h2 className="product-h3">{price} zł</h2>
        <button className="btn btn-danger btn-lg btn-block">Dodaj do koszyka</button>
      </div>
    );
  }
}
export default Product;
