import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app.jsx";
import configureMockStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureMockStore();
const store = mockStore({});

const testOffers = [
  {
    id: 0,
    cityName: `Name1`,
    gps: [0, 0],
    offersCount: 0,
    offers: [
      {
        id: 0,
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
        id: 1,
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
        id: 2,
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
        id: 3,
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
        id: 4,
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
        id: 5,
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
        id: 6,
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
        id: 7,
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

it(`App correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<Provider store={store}>
      <App
        DATA={{loaded: false, data: testOffers}}
        APP={{currentCityId: 0, currentPlaceId: 0, currentCityGPS: [0, 0]}}
        currentCity={{id: 0, cityName: ``, offersCount: 0, offers: []}}
        onCityChange={jest.fn()}
        loadOffersAsync={jest.fn()}
        onPlaceChange={jest.fn()}
        isAuthorizationRequired={false}
        requireAuthorization={jest.fn()}
        cities={testOffers.map((city) => ({id: 0, cityName: city.cityName}))}/>
    </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

