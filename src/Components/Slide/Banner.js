import React from "react";

class Banner extends React.Component {
  render() {
    return (
      <div className="banner-container">
        <p className="banner-label">{this.props.label}</p>
        <p className="banner-sublabel">{this.props.sublabel}</p>
        <ul className="banner-list">
          <li className="banner-list-li"><p className="banner-list-element">{this.props.li1}</p></li>
          <li className="banner-list-li"><p className="banner-list-element">{this.props.li2}</p></li>
          <li className="banner-list-li"><p className="banner-list-element">{this.props.li3}</p></li>
          <li className="banner-list-li"><p className="banner-list-element">{this.props.li4}</p></li>
          <li className="banner-list-li"><p className="banner-list-element">{this.props.li5}</p></li>
        </ul>
        <button onClick={this.props} className="btn btn-outline-secondary btn-lg btn-block banner-button">Czytaj więcej</button>
      </div>
    );
  }
}

export default Banner;
