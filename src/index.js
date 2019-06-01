import React from 'react';
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {reducer} from "./reducer";
import {Provider} from "react-redux";

import App from './components/app.jsx';
import offers from './mocks/offers.js';

const store = createStore(reducer);

const init = (currentOffers) => {
  ReactDOM.render(<Provider store={store}>
    <App offers={currentOffers}/>
  </Provider>, document.getElementById(`root`));
};

init(offers[0]);
