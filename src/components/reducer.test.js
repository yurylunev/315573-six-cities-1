import {reducer} from "../reducer";


it(`Should return initial state`, () => {
  expect(reducer(undefined, {}))
    .toEqual(Object.assign({}, {data: [], currentPlaceId: 0}));
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

it(`Should get offers`, () => {
  expect(reducer({}, {
    type: `LOAD_OFFERS`,
    payload: [{fake: true}]
  }))
    .toMatchObject({"data": [{"fake": true}]});
});
