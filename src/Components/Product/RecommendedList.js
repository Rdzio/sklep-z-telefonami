import React from "react";
import { connect } from "react-redux";

import Product from "./Product";

class RecommendedList extends React.Component {
  render() {
    const recommended = () => {
      const ids = [];
      this.props.recommended.forEach((element) => {
        let product = this.props.items.find((item) => element === item.id);
        ids.push(product);

        for (let prop of ids) {
          return <Product key={prop.id} product={prop} />;
        }
      });
    };

    return (
      <div className="product-space">
        <h1 className="product-h1">Polecamy w tym miesiącu</h1>
        {recommended()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
    recommended: state.recommended,
  };
};

export default connect(mapStateToProps)(RecommendedList);
