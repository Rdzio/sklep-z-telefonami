import React from "react";

// prepare slider image
class Image extends React.Component {
  render() {
    return (
      <picture className="slick-image">
        <source media="(min-width: 600px)" srcSet={this.props.img} />
        <img
          src={this.props.imgMobile}
          alt="mi10"
          className="slick-img--mob"
        ></img>
      </picture>
    );
  }
}

export default Image;
