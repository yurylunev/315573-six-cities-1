import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./app";

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

Enzyme.configure({adapter: new Adapter()});

it(`App onClick handler work`, () => {
  const clickHandler = jest.fn();
  const app = mount(<App placesList={testOffers}/>);

  app.find(`a`).at(1).simulate(`click`);
  app.find(`a`).at(3).simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(2);
});
