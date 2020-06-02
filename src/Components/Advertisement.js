import React from "react";

class Advertisement extends React.Component {
  render() {
    return (
     <div className="bg-black advertisement">
         <img className="advertisement-image" src={require('./assets/package.png')} alt="Paczka"></img>
         <h1 className="advertisement-h1">Pamiętaj!</h1>
         <p className="advertisement-p">Kupując u nas za łączną kwotę przekraczającą 999zł, wysyłkę kurierem masz za Free!</p>
     </div>
    );
  }
}

export default Advertisement;
