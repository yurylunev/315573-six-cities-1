import React from "react";
import renderer from "react-test-renderer";
import PlacesList from "./places-list.jsx";

const testOffers = [
  {
    mark: `offerMark1`,
    imageURL: `imageURL`,
    price: 1000,
    currency: `€`,
    rate: 100,
    name: `Name of offer 1`,
    type: `Apartment type 1`
  },
  {
    mark: `offerMark2`,
    imageURL: `imageURL`,
    price: 2000,
    currency: `€`,
    rate: 200,
    name: `Name of offer 2`,
    type: `Apartment type 2`
  }
];

it(`App correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<PlacesList placesList={testOffers} clickHandler={jest.fn()}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

