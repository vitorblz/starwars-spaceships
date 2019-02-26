const uri = 'https://swapi.co/api/';

export default class SWAPI{

  static getStarships(page=1)
  {
    const arrayStarships = []
    
    return fetch(`${uri}starships/?format=json&page=${page}`)
      .then(response => { console.log(response); return response.json(); })
      .then(starships => starships)
      .catch(error => {
        console.log(error);
        return "API error"
    });
  }
}