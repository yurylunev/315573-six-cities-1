import allCityOffers from './mocks/offers';

const initialState = Object.assign({}, {data: allCityOffers}, {currentId: 0});

const ActionCreators = {
  'CHANGE_CITY': (id) => ({
    type: `CHANGE_CITY`,
    payload: id
  }),
  'GET_OFFERS': (cityId) => {
    const offers = allCityOffers[cityId];
    return {
      type: `GET_OFFERS`,
      payload: offers
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_CITY`:
      return Object.assign({}, state, {currentId: action.payload});
    case `GET_OFFERS`:
      return Object.assign({}, action.payload);
  }
  return state;
};

export {reducer, ActionCreators};
