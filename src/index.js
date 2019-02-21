import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/container/App.jsx'
import SWAPI from './services/SWAPI';

const rootElement = document.getElementById('root');

SWAPI.getStarships()
  .then(starships => {
    ReactDOM.render(<App starships={starships.results} />, rootElement);
  })
  .catch(error => {
    ReactDOM.render(error, rootElement);
  });

