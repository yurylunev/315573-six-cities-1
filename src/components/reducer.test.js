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
  expect(reducer({}, {
    type: `GET_OFFERS`,
    payload: {id: 0, cityName: `cityName`, gps: [1, 2]}
  }))
    .toEqual({id: 0, cityName: `cityName`, gps: [1, 2]});
});
