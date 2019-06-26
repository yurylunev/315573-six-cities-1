import React from "react";
import renderer from "react-test-renderer";
import PlacesList from "./places-list.jsx";

const testOffers = [
  {
    id: 0,
    mark: `offerMark1`,
    imageURL: `imageURL`,
    price: 1000,
    currency: `€`,
    rate: 100,
    name: `Name of offer 1`,
    type: `Apartment type 1`,
    gps: [52.369553943508, 4.85309666406198]
  },
  {
    id: 1,
    mark: `offerMark2`,
    imageURL: `imageURL`,
    price: 2000,
    currency: `€`,
    rate: 200,
    name: `Name of offer 2`,
    type: `Apartment type 2`,
    gps: [52.369553943508, 4.85309666406198]
  }
];

it(`PlacesList correctly renders`, () => {
  const tree = renderer
    .create(<PlacesList offers={testOffers} clickHandler={jest.fn()} currentPlaceId={0}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

