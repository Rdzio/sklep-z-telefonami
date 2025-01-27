import React, { Component } from "react";
import LazyLoad from "react-lazyload";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Image from "./Image";
import Banner from "./Banner";

// render slider
class Slide extends Component {
  render() {
    // slider configuration
    const settings = {
      infinite: true,
      dots: true,
      arrows: false,
      centerMode: true,
      speed: 1500,
      centerPadding: 0,
      autoplay: true,
      autoplaySpeed: 3000,
    };
    return (
      <div className="slick-container">
        <Slider {...settings}>
          <div className="slick-img-container">
            <LazyLoad
              once={true}
              placeholder={
                <img src={require("../../img/low_featured1.png")} alt="..." />
              }
            >
              <Image
                img={require("../../img/featured1.png")}
                imgMobile={require("../../img/mi10-mob.jpg")}
              />
            </LazyLoad>

            <div className="container">
              <Banner
                label="Światła. Kamera. Akcja"
                sublabel="Seria Mi 10 już w sprzedaży"
                li1="Aparat  108MP"
                li2="Nagrywanie w 8K"
                li3="Snapdragon 865 + 8GB RAM"
                li4="Głośniki stereo"
                li5="24 miesiące gwarancji na ekran"
                id="5"
              />
            </div>
          </div>
          <div className="slick-img-container">
            <LazyLoad
              once={true}
              placeholder={
                <img src={require("../../img/low_galaxys20f.jpg")} alt="..." />
              }
            >
              <Image
                img={require("../../img/galaxys20f.jpg")}
                imgMobile={require("../../img/sam-mob.png")}
              />
            </LazyLoad>
            <div className="container">
              <Banner
                label="Nowy. Szybszy. Lepszy"
                sublabel="Samsung Galaxy S20 już w sprzedaży!"
                li1="Aparat  108MP"
                li2="Zaawansowany Zoom"
                li3="Snapdragon 865 + 8GB RAM"
                li4="Sieć 5G"
                li5="24 miesiące gwarancji na ekran"
                id="1"
              />
            </div>
          </div>
          <div className="slick-img-container">
            <LazyLoad
              once={true}
              placeholder={
                <img src={require("../../img/low_iphone.jpg")} alt="..." />
              }
            >
              <Image
                img={require("../../img/iphone.jpg")}
                imgMobile={require("../../img/iphone-mob.png")}
              />
            </LazyLoad>

            <div className="container">
              <Banner
                label="Najpopularniejszy telefon 2019"
                sublabel="iPhone 11 nadal w sprzedaży!"
                li1="Ultra szeroka kamera"
                li2="Nagrywanie w 8K"
                li3="Tryb portretowy"
                li4="FaceID"
                li5="24 miesiące gwarancji na ekran"
                id="17"
              />
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Slide;
