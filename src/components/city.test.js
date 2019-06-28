import React from "react";
import renderer from "react-test-renderer";
import {City} from "./city.jsx";

jest.mock();

it(`CitiesList correctly renders`, () => {
  const tree = renderer
    .create(<City
      city={{cityName: `City`, id: 0}}
      clickHandler={jest.fn()}
      onCityChange={jest.fn()}
      activeClassName={`activeClassName`}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
