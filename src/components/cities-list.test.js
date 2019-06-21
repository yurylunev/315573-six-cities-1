import React from "react";
import renderer from "react-test-renderer";
import CitiesList from "./cities-list.jsx";

const cities = [
  `Citie 1`,
  `Citie 2`,
  `Citie 3`,
  `Citie 4`
];

it(`CitiesList correctly renders`, () => {
  const tree = renderer
    .create(<CitiesList cities={cities} clickHandler={jest.fn()} currentId={0}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
