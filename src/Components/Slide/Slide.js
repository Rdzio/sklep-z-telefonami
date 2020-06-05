import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Image from "./Image";
import Banner from "./Banner";

class Slide extends Component {
  render() {
    const settings = {
      infinite: true,
      dots: true,
      arrows: false,
      centerMode: true,
      speed: 1500,
      centerPadding: 0,
      // autoplay: true,
      autoplaySpeed: 6000,
    };
    return (
      <div className="slick-container">
        <Slider {...settings}>
          <div className="slick-img-container">
            <Image img={require("../assets/featured1.png")} />
            <Banner
              label="Światła. Kamera. Akcja"
              sublabel="Seria Mi 10 już w sprzedaży"
              li1="Aparat  108MP"
              li2="Nagrywanie w 8K"
              li3="Snapdragon 865 + 8GB RAM"
              li4="Głośniki stereo"
              li5="24 miesiące gwarancji na ekran"
            />
          </div>
          <div className="slick-img-container">
            <Image img={require("../assets/featured1.png")} />
            <Banner
              label="Światła. Kamera. Akcja"
              sublabel="Seria Mi 10 już w sprzedaży"
              li1="Aparat  108MP"
              li2="Nagrywanie w 8K"
              li3="Snapdragon 865 + 8GB RAM"
              li4="Głośniki stereo"
              li5="24 miesiące gwarancji na ekran"
            />
          </div>
          <div className="slick-img-container">
            <Image img={require("../assets/featured1.png")} />
            <Banner
              label="Światła. Kamera. Akcja"
              sublabel="Seria Mi 10 już w sprzedaży"
              li1="Aparat  108MP"
              li2="Nagrywanie w 8K"
              li3="Snapdragon 865 + 8GB RAM"
              li4="Głośniki stereo"
              li5="24 miesiące gwarancji na ekran"
            />
          </div>
          <div className="slick-img-container">
            <Image img={require("../assets/featured1.png")} />
            <Banner
              label="Światła. Kamera. Akcja"
              sublabel="Seria Mi 10 już w sprzedaży"
              li1="Aparat  108MP"
              li2="Nagrywanie w 8K"
              li3="Snapdragon 865 + 8GB RAM"
              li4="Głośniki stereo"
              li5="24 miesiące gwarancji na ekran"
            />
          </div>
        </Slider>
      </div>
    );
  }
}

export default Slide;
