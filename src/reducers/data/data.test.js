import {reducer} from "./data";

it(`Should get offers`, () => {
  expect(reducer({}, {
    type: `LOAD_OFFERS`,
    payload: [{fake: true}]
  }))
    .toMatchObject({"data": [{"fake": true}]});
});
