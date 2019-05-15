import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

it(`App correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<App placesList={[
      {name: `PlaceName1`, onClick: jest.fn()},
      {name: `PlaceName2`, onClick: jest.fn()},
      {name: `PlaceName3`, onClick: jest.fn()}
    ]}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

