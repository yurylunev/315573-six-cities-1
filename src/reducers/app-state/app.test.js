import {reducer} from "./app-state";


it(`Should return initial state`, () => {
  expect(reducer(undefined, {}))
    .toEqual(Object.assign({}, {currentId: 17, currentPlaceId: 0}));
});

it(`Should change city`, () => {
  expect(reducer({currentId: 0}, {
    type: `CHANGE_CITY`,
    payload: 3
  }))
    .toEqual({
      currentId: 3
    });
});
