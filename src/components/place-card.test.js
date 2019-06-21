import React from "react";
import renderer from "react-test-renderer";
import PlaceCard from "./place-card";

const testOffer = {
  mark: `offerMark1`,
  imageURL: `imageURL`,
  price: 1000,
  currency: `€`,
  rate: 100,
  name: `Name of offer 1`,
  type: `Apartment type 1`
};

it(`PlaceCard correctly renders`, () => {
  const tree = renderer
    .create(<PlaceCard offer={testOffer} clickHandler={jest.fn()}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
