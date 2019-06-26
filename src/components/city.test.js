import React from "react";
import renderer from "react-test-renderer";
import City from "./city.jsx";

it(`CitiesList correctly renders`, () => {
  const tree = renderer
    .create(<City city={{cityName: `City`, id: 0}} clickHandler={jest.fn()} activeClassName={`activeClassName`}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
