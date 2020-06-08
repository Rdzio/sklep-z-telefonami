import React, {Component} from "react";

class Brand extends Component {
  render() {
    const { name } = this.props.brand;
    return (
      <button className="btn btn-outline-secondary btn-lg btn-block brand-bt">{name}</button>
    );  
  }
}
export default Brand;
