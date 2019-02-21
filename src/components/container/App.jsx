import React, { Component } from "react";

import Starship from '../presentational/Starship.jsx';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  state = {
    distancia: "1000000",
    starships: this.props.starships,
  };

  handlerDistancia = (event) => {
    this.setState({distancia: event.target.value});
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-3">
          <h1>Calculadora de distância de naves Star Wars</h1>
        </div>

        <div className="input-group row">
          <div className="pb-4 col-5">
            <label>Distância a ser percorrida, em mega lights (MGLT): </label>
            <input type="number" className="form-control" min="1" value={this.state.distancia} name="distancia" onChange={this.handlerDistancia} /> 
          </div>
        </div>

        <ul className="list-group" >
          {this.state.starships.map(
            (starship, index) => 
              <Starship distancia={this.state.distancia} index={index} key={index} starship={starship} /> )}
        </ul>
      </div>
    );
  }
}


export default App;