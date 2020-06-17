import React, { Component } from "react";
import { Link } from "react-router-dom";

// single button with containing brand name
class Brand extends Component {
  render() {
    const { name } = this.props.brand;
    return (
      // create route to item list with filter applied
      <Link
        className=""
        to={{
          pathname: `/telefony/` + name.toLowerCase().split(" ").join("-"),
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
