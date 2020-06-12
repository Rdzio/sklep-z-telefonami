import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../Cart/CartActions";
import { Redirect } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer";

class Details extends React.Component {
  handleClick = (id) => {
    this.props.addToCart(id);
  };

  render() {
    let itemDetails = this.props.items.find(
      (item) => item.id === parseInt(this.props.match.params.id)
    );
    if (itemDetails == null) {
      return <Redirect to="/nie-odnaleziono-storny" />;
    }
    return (
      <div>
        <Header />
        <div className="container">
          <div className="details-space">
            <div className="details-flex-container">
              <div className="details-flex-img">
                <img
                  className="details-center details-img"
                  src={require(`../../img/phones/${itemDetails.title.toLowerCase().split(' ').join('')}.jpg`)}
                  alt=""
                ></img>
              </div>
              <div className="details-flex-info">
                <h2 className="details-center details-header">
                  {itemDetails.title}
                </h2>
                <ul className="details-list">
                  <li>
                    <p className="details-p20">
                      Kolor: <strong></strong>
                    </p>
                  </li>
                  <li>
                    <p className="details-p20">
                      Pamięć: <strong>{itemDetails.storage}GB</strong>
                    </p>
                  </li>
                  <li>
                    <p className="details-p20">
                      RAM: <strong>{itemDetails.ram}GB</strong>
                    </p>
                  </li>
                </ul>
                <h2 className="details-center details-header details-price">
                  {itemDetails.price}zł
                </h2>
              </div>
              <div className="details-flex-button">
                <button
                  className="btn btn-danger btn-lg btn-block details-button"
                  onClick={() => {
                    this.handleClick(itemDetails.id);
                  }}
                >
                  Dodaj do koszyka
                </button>
              </div>
            </div>
            <h2 className="details-header details-header-description">
              Opis telefonu
            </h2>
            <p className="details-p22 details-p-description">
              {itemDetails.description}
            </p>

            <h2 className="details-header details-header-description">
              Specyfikacja telefonu
            </h2>
            <ul className="details-list details-specifications">
              <li>
                <p className="details-p22">
                  System operacyjny: <strong>{itemDetails.os}</strong>
                </p>
              </li>
              <li>
                <p className="details-p22">
                  Kolor: <strong>{itemDetails.color}</strong>
                </p>
              </li>
              <li>
                <p className="details-p22">
                  Bateria: <strong>{itemDetails.battery}mAh</strong>
                </p>
              </li>
              <li>
                <p className="details-p22">
                  Wyświetlacz: <strong>{itemDetails.diagonal}"</strong>
                </p>
              </li>
              <li>
                <p className="details-p22">
                  Aparat główny: <strong>{itemDetails.mainCamera}MP</strong>
                </p>
              </li>
              <li>
                <p className="details-p22">
                  Aparat przedni: <strong>{itemDetails.secondCamera}MP</strong>
                </p>
              </li>
              <li>
                <p className="details-p22">
                  Pamięć wbudowana: <strong>{itemDetails.storage}GB</strong>
                </p>
              </li>
              <li>
                <p className="details-p22">
                  Pamięć operacyjna: <strong>{itemDetails.ram}GB</strong>
                </p>
              </li>
            </ul>
          </div>
          <Footer />
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

export default connect(mapStateToProps, mapDispatchToProps)(Details);
