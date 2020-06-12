import React, { Component } from "react";
import { Link } from "react-router-dom";

class Brand extends Component {
  render() {
    const { name, vendor } = this.props.brand;
    return (
      <Link
        className=""
        to={{
          pathname:
            `/telefony/` + name.toLowerCase().split(" ").join("-"),
        }}
      >
        <button
          className="btn btn-outline-secondary btn-lg btn-block brand-bt"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          {name}
        </button>
      </Link>
    );
  }
}
export default Brand;
