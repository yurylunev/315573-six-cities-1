import React from 'react';
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {reducer} from "./reducer";

import App from './components/app.jsx';
import offers from './mocks/offers.js';

const store = createStore(reducer);

const init = (currentOffers) => {
  ReactDOM.render(
      <App offers={currentOffers}/>,
      document.getElementById(`root`)
  );
};

init(offers);
