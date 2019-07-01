import React from "react";
import renderer from "react-test-renderer";
import {SignIn} from "./sign-in";

it(`SignIn correctly renders`, () => {
  const tree = renderer
    .create(<SignIn
      authorizationError={`error`}
      loginAsync={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
