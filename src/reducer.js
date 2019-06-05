import allCityOffers from './mocks/offers';

const initialState = Object.assign({}, {data: allCityOffers}, {currentId: 0});

const ActionCreators = {
  'CHANGE_CITY': (id) => ({
    type: `CHANGE_CITY`,
    payload: id
  }),
  'GET_CITY_OFFERS': (cityId) => {
    return {
      type: `GET_CITY_OFFERS`,
      payload: cityId
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_CITY`:
      return Object.assign({}, state, {currentId: action.payload});
    case `GET_CITY_OFFERS`:
      return Object.assign({}, state.data[action.payload]);
  }
  return state;
};

export {reducer, ActionCreators};
