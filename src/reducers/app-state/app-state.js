const initialState = Object.assign({}, {
  currentCityId: 0,
  currentPlaceId: 0
});

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_PLACE: `CHANGE_PLACE`
};

const ActionCreator = {
  'CHANGE_CITY': (id) => ({
    type: ActionType.CHANGE_CITY,
    payload: id
  }),
  'CHANGE_PLACE': (id) => ({
    type: ActionType.CHANGE_PLACE,
    payload: id
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {currentCityId: action.payload});
    case ActionType.CHANGE_PLACE:
      return Object.assign({}, state, {currentPlaceId: action.payload});
  }
  return state;
};

export {reducer, ActionCreator};
