import React from "react";
import renderer from "react-test-renderer";
import CitiesList from "./cities-list.jsx";

const cities = [
  {id: 0, cityName: `Citie 1`},
  {id: 1, cityName: `Citie 2`},
  {id: 2, cityName: `Citie 3`},
  {id: 3, cityName: `Citie 4`}
];

it(`CitiesList correctly renders`, () => {
  const tree = renderer
    .create(<CitiesList cities={cities} clickHandler={jest.fn()} currentId={0}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
