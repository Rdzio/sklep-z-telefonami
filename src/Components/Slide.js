import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

class Slide extends Component {
  render() {
    const settings = {
      infinite: true,
      dots: true,
      arrows: false,
      centerMode: true,
      speed: 1000,
      centerPadding: 0,
      // autoplay: true,
      autoplaySpeed: 5000,
    };
    return (
      <div className="slick-container">
        <Slider {...settings}>
          <div className="slick-img-container">
            <img
              className="slick-image"
              src={require("./assets/featured1mobile.png")}
              alt=""
            />
          </div>
          <div className="slick-img-container">
            <img
              className="slick-image"
              src={require("./assets/featured1mobile.png")}
              alt=""
            />
          </div>
          <div className="slick-img-container">
            <img
              className="slick-image"
              src={require("./assets/featured1mobile.png")}
              alt=""
            />
          </div>
          <div className="slick-img-container">
            <img
              className="slick-image"
              src={require("./assets/featured1mobile.png")}
              alt=""
            />
          </div>
        </Slider>
      </div>
    );
  }
}

export default Slide;
