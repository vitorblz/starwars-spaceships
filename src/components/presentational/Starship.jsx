import React, { Component } from 'react';
import SW from '../../util/SW.js'

class Starship extends Component {

  render() {
    const paradas = SW.calcParadas(this.props.starship.consumables, this.props.starship.MGLT, this.props.distancia);
    return (
      <li key={this.props.index} className="list-group-item col-xs-12 col-sm-5">
        {this.props.starship.name}  <span className="float-right" >{paradas}</span>
      </li>
    );
  }
}

export default Starship;