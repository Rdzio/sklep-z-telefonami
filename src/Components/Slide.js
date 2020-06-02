import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

class Slide extends React.Component {
  render() {
    const settings = {
      infinite: true,
      dots: true,
      arrows: false,
      centerMode: true,
      speed: 500,
      slidesToShow: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img
              className="test"
              src={require("./assets/featured1.png")}
              alt=""
            ></img>
          </div>
          <div>
            <img
              className="test"
              src={require("./assets/featured1.png")}
              alt=""
            ></img>
          </div>
          <div>
            <img
              className="test"
              src={require("./assets/featured1.png")}
              alt=""
            ></img>
          </div>
          <div>
            <img
              className="test"
              src={require("./assets/featured1.png")}
              alt=""
            ></img>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Slide;
