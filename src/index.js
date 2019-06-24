import React from 'react';
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {reducer} from "./reducer";
import {Provider} from "react-redux";
import App from './components/app.jsx';
import thunk from 'redux-thunk';
import {compose} from 'recompose';
import {applyMiddleware} from 'redux';
import createAPI from "./api";

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


const init = () => {
  ReactDOM.render(<Provider store={store}>
    <App/>
  </Provider>, document.getElementById(`root`));
};

init();
