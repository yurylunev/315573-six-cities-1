import offers from './mocks/offers';

const initialState = {
  city: `Amsterdam`,
  offersCount: 312,
  offers
};

const ActionCreators = {
  'CHANGE_CITY': () => {
  },
  'GET_OFFERS': () => {
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_CITY`:
      return Object.assign({}, state, {});
    case `GET_OFFERS`:
      return Object.assign({}, state, {});
  }
  return state;
};

export {reducer, ActionCreators};
