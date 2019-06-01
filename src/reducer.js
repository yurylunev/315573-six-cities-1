import allCityOffers from './mocks/offers';

const initialState = {
  cityName: ``,
  offersCount: 0,
  offers: []
};

const ActionCreators = {
  'CHANGE_CITY': () => {
  },
  'GET_OFFERS': (cityName) => {
    const offers = allCityOffers[cityName];
    return {
      type: `GET_OFFERS`,
      payload: offers
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_CITY`:
      return Object.assign({}, state, {});
    case `GET_OFFERS`:
      return Object.assign({}, action.payload);
  }
  return state;
};

export {reducer, ActionCreators};
