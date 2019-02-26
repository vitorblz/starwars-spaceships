export default class SW{
  static calcHoras(consumables,MGLT,distance){
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

  static calcParadas(consumables,MGLT,distance){

    if(consumables==='unknown' || MGLT==='unknown')
      return "Faltando informações.";

    const horas = this.calcHoras(consumables);
    const paradas  = Math.floor(distance / (horas * MGLT));
    return(paradas > 1 || paradas==0) ? `${paradas} paradas` : `${paradas} parada`;
  }
}