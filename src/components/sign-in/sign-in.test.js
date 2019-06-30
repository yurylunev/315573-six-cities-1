import React from "react";
import renderer from "react-test-renderer";
import {SignIn} from "./sign-in";

it(`SignIn correctly renders`, () => {
  const tree = renderer
    .create(<SignIn
      loginAsync={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

