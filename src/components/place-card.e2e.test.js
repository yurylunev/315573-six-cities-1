import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PlaceCard from "./place-card.jsx";

Enzyme.configure({adapter: new Adapter()});

const testOffer = {
  id: 0,
  mark: `offerMark1`,
  imageURL: `imageURL`,
  price: 1000,
  currency: `€`,
  rate: 100,
  name: `Name of offer 1`,
  type: `Apartment type 1`,
  currentPlaceId: 1
};

let placeCardId = {};

it(`PlaceCard image click handler work`, () => {
  const placeCard = mount(<PlaceCard
    offer={testOffer}
    clickHandler={(res) => {
      placeCardId = res;
    }}
    currentPlaceId={0}
  />);

  const imageWrapper = placeCard.find(`.place-card__image-wrapper`);
  imageWrapper.find(`a`).simulate(`click`);

  expect(testOffer.id).toEqual(placeCardId);
});
