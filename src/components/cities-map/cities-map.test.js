import React from "react";
import renderer from "react-test-renderer";
import {CitiesMap} from "./cities-map.jsx";

jest.mock(`leaflet`, () => ({
  map: () => ({
    setView: () => jest.fn()
  }),
  tileLayer: () => ({
    addTo: () => jest.fn()
  }),
  icon: () => jest.fn(),
  marker: () => ({
    addTo: () => jest.fn()
  })
}));

const testOffers = [
  {
    id: 0,
    cityName: `Name1`,
    gps: [0, 0],
    offersCount: 0,
    offers: [
      {
        mark: `mark`,
        imageURL: `imageURL`,
        price: 9,
        currency: `€`,
        rate: 1,
        name: `mockName1`,
        type: `typeApartment`,
        gps: [0, 0]
      },
      {
        mark: `mark`,
        imageURL: `imageURL`,
        price: 9,
        currency: `€`,
        rate: 1,
        name: `mockName2`,
        type: `typeApartment2`,
        gps: [0, 0]
      },
      {
        mark: ``,
        imageURL: `imageURL`,
        price: 9,
        currency: `€`,
        rate: 1,
        name: `mockName3`,
        type: `typeApartment3`,
        gps: [0, 0]
      },
      {
        mark: `mark`,
        imageURL: `imageURL`,
        price: -9,
        currency: `€`,
        rate: 0,
        name: `mockName4`,
        type: `typeApartment4`,
        gps: [0, 0]
      }
    ]
  },
  {
    id: 1,
    cityName: `Name2`,
    gps: [999, 999],
    offersCount: 999,
    offers: [
      {
        mark: `mark`,
        imageURL: `imageURL`,
        price: 9,
        currency: `€`,
        rate: 1,
        name: `mockName1`,
        type: `typeApartment`,
        gps: [999, 999]
      },
      {
        mark: `mark`,
        imageURL: `imageURL`,
        price: 9,
        currency: `€`,
        rate: 1,
        name: `mockName2`,
        type: `typeApartment2`,
        gps: [0, 0]
      },
      {
        mark: ``,
        imageURL: `imageURL`,
        price: 9,
        currency: `€`,
        rate: 1,
        name: `mockName3`,
        type: `typeApartment3`,
        gps: [0, 0]
      },
      {
        mark: `mark`,
        imageURL: `imageURL`,
        price: -9,
        currency: `€`,
        rate: 0,
        name: `mockName4`,
        type: `typeApartment4`,
        gps: [0, 0]
      }
    ]
  }
];

it(`Map correctly renders`, () => {
  const tree = renderer
    .create(<CitiesMap offers={testOffers} currentCityGPS={[52.369553943508, 4.85309666406198]} currentCityId={0}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
