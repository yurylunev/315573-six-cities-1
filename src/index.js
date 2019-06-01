import React from 'react';
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {reducer} from "./reducer";
import {Provider} from "react-redux";

import App from './components/app.jsx';
import allOffers from './mocks/offers.js';

const store = createStore(reducer);

const init = (offers) => {
  ReactDOM.render(<Provider store={store}>
    <App offers={offers[0]} cities={offers.map((city) => city.cityName)}/>
  </Provider>, document.getElementById(`root`));
};

init(allOffers);
