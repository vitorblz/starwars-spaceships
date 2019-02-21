import React, { Component } from 'react';

class Starship extends Component {

  calcHoras(consumables,MGLT,distance){
    const [total, medida] = consumables.split(' ');

    if(medida == 'years' || medida == 'year')
      return 365 * 24 * total;
    if(medida == 'months' || medida == 'month')
      return 30 * 24 * total;
    if(medida == 'weeks' || medida == 'week')
      return 7 * 24 * total;
    if(medida == 'days' || medida == 'day')
      return 24 * total;  

    return 0;
  }

  calcParadas(consumables,MGLT,distance){
    const horas = this.calcHoras(consumables);
    const paradas  = Math.round(distance / (horas * MGLT));
    return(paradas > 1 || paradas==0) ? `${paradas} paradas` : `${paradas} parada`;
  }

  render() {
    const paradas = this.calcParadas(this.props.starship.consumables, this.props.starship.MGLT, this.props.distancia);
    return (
      <li key={this.props.index} className="list-group-item col-xs-12 col-sm-5">
        {this.props.starship.name}  <span className="float-right" >{paradas}</span>
      </li>
    );
  }
}

export default Starship;