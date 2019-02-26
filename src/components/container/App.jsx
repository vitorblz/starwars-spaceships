import React, { Component } from "react";

import Starship from '../presentational/Starship.jsx';
import SWAPI from '../../services/SWAPI';

class App extends Component {

  state = {
    pages: [...Array(this.props.pages)],
    page: 1,
    distancia: "1000000",
    starships: this.props.starships,
  };

  handlerDistancia = (event) => {
    this.setState({distancia: event.target.value});
  }

  updateStarships(event, page){

    event.preventDefault();
    
    SWAPI.getStarships(page)
    .then(starships => {
      this.setState({starships: starships.results, page});
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {


    return (
      <div className="container">
        <div className="jumbotron mt-3">
          <h1>Calculadora de distância de naves Star Wars</h1>
        </div>

        <div className="input-group row">
          <div className="pb-4 col-xs-12 col-sm-5">
            <label>Distância a ser percorrida, em mega lights (MGLT): </label>
            <input type="number" className="form-control" min="1" value={this.state.distancia} name="distancia" onChange={this.handlerDistancia} /> 
          </div>
        </div>

        <p>
          Páginas: 
          {this.state.pages.map((v,i) => 
            <a className={this.state.page === i+1 ? 'font-weight-bold' : ''} key={i} href="#" onClick={()=>this.updateStarships(event,i+1)}>{i+1} </a>
          )}    
        </p>

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