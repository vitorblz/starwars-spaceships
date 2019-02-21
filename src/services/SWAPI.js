
const uri = 'https://swapi.co/api/';


export default class SWAPI{

  static getStarships()
  {
    return fetch(`${uri}starships/?format=json`)
      .then(response => response.json())
      .then(starships => starships)
      .catch(error => {
        console.log(error);
        return "API error"
    });
  }
}