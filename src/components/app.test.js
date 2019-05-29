import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const testOffers = [
  {
    mark: `offerMark1`,
    imageURL: `imageURL1`,
    price: 1000,
    currency: `€`,
    rate: 100,
    name: `Name of offer 1`,
    type: `Apartment type 1`
  },
  {
    mark: `offerMark2`,
    imageURL: `imageURL2`,
    price: 2000,
    currency: `€`,
    rate: 200,
    name: `Name of offer 2`,
    type: `Apartment type 2`
  }
];
it(`App correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<App offers={testOffers}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

