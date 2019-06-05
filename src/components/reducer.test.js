import {reducer} from "../reducer";
import allCityOffers from '../mocks/offers';

it(`Should return initial state`, () => {
  expect(reducer(undefined, {}))
    .toEqual(Object.assign({}, {data: allCityOffers}, {currentId: 0}));
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
  expect(reducer({data: allCityOffers}, {
    type: `GET_CITY_OFFERS`,
    payload: 0
  }))
    .toEqual(allCityOffers[0]);
});
