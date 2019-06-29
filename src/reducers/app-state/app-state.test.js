import {reducer} from "./app-state";


it(`Should return initial state`, () => {
  expect(reducer(undefined, {}))
    .toEqual(Object.assign({}, {currentCityId: 17, currentPlaceId: 0}));
});

it(`Should change city`, () => {
  expect(reducer({currentCityId: 0}, {
    type: `CHANGE_CITY`,
    payload: 3
  }))
    .toEqual({
      currentCityId: 3
    });
});
