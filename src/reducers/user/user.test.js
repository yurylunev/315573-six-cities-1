import {reducer} from "./user";

it(`Should return initial state`, () => {
  expect(reducer(undefined, {}))
    .toEqual(Object.assign({}, {isAuthorizationRequired: false}));
});

it(`Should update authorization`, () => {
  expect(reducer({isAuthorizationRequired: true}, {
    type: `UPDATE_AUTHORIZATION`,
    payload: true
  }))
    .toEqual({
      isAuthorizationRequired: true
    });
});

it(`Should to show authorization error`, () => {
  expect(reducer({}, {
    type: `AUTHORIZATION_ERROR`,
    payload: `error`
  }))
    .toEqual({
      authorizationError: `error`
    });
});

it(`Should update user info`, () => {
  expect(reducer({}, {
    type: `UPDATE_USER_INFO`,
    payload: {
      id: 0,
      email: `email`,
      name: `userName`,
      avatar_url: `url`,
      is_pro: true
    }
  }))
    .toEqual({
      id: 0,
      email: `email`,
      name: `userName`,
      avatarUrl: `url`,
      isPro: true
    });
});
