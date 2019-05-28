import React from 'react';
import ReactDOM from "react-dom";
import App from './components/app.jsx';
import offers from './mocks/offers.js';

const init = (currentOffers) => {
  ReactDOM.render(
      <App placesList={currentOffers}/>,
      document.getElementById(`root`)
  );
};

init(offers);
