import React from 'react';
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import reducer from "./reducers";
import {Provider} from "react-redux";
import App from './components/app.jsx';
import thunk from 'redux-thunk';
import {compose} from 'recompose';
import createAPI from "./api";

const init = () => {
  const api = createAPI((...args) => store.dispatch(...args));
  const store = createStore(
      reducer, compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )
  );

  ReactDOM.render(<Provider store={store}>
    <App/>
  </Provider>, document.getElementById(`root`));
};

init();
