import React from "react";

class Advertisement extends React.Component {
  render() {
    return (
     <div className="bg-black reminder">
        <img className="reminder-image" src={require('./assets/package.svg')} alt="Paczka"></img>
        <div>
          <h4 className="reminder-header">Pamiętaj!</h4>
          <p className="reminder-p">Kupując u nas za łączną kwotę przekraczającą 999zł, wysyłkę kurierem masz za <strong>FREE!</strong></p>
        </div>
     </div>
    );
  }
}

export default Advertisement;
