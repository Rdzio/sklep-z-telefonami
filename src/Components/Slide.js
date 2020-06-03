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
            />
          </div>
          <div>
            <img
              className="test"
              src={require("./assets/featured1.png")}
              alt=""
            />
          </div>
          <div>
            <img
              className="test"
              src={require("./assets/featured1.png")}
              alt=""
            />
          </div>
          <div>
            <img
              className="test"
              src={require("./assets/featured1.png")}
              alt=""
            />
          </div>
        </Slider>
      </div>
    );
  }
}

export default Slide;
