import React from "react";

class Brand extends React.Component {
  render() {
    const { id, name } = this.props.brand;
    return (
      <div>
        <button className="btn btn-outline-secondary btn-lg btn-block brand-bt">{name}</button>
      </div>
    );
  }
}
export default Brand;
