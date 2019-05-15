import React from "react";
import renderer from "react-test-renderer";
import Place from "./place.jsx";

it(`App correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<Place name={`TestPlaceName`} onClick={jest.fn()}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

