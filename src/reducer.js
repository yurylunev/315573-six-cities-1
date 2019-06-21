const initialState = Object.assign({}, {data: allCityOffers, currentId: 0, currentPlaceId: 0});

const ActionCreators = {
  'CHANGE_CITY': (id) => ({
    type: `CHANGE_CITY`,
    payload: id
  }),
  'CHANGE_PLACE': (id) => ({
    type: `CHANGE_PLACE`,
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
    case `CHANGE_PLACE`:
      return Object.assign({}, state, {currentPlaceId: action.payload});
  }
  return state;
};

export {reducer, ActionCreators};
