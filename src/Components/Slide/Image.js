import React from "react";

class Image extends React.Component {
  render() {
    return (
      <img
        className="slick-image"
        src={this.props.img}
        alt=""
      />
    );
  }
}

export default Image;
