import React from "react";

class Advertisement extends React.Component {
  render() {
    return (
     <div className="bg-black advertisement">
         <img className="advertisement-image" src={require('./assets/package.svg')} alt="Paczka"></img>
         <h4 className="advertisement-header">Pamiętaj!</h4>
         <p className="advertisement-p">Kupując u nas za łączną kwotę przekraczającą 999zł, wysyłkę kurierem masz za Free!</p>
     </div>
    );
  }
}

export default Advertisement;
