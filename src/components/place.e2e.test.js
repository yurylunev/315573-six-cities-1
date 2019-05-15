import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Place from "./place.jsx";

Enzyme.configure({adapter: new Adapter()});

it(`Place onClick handler work`, () => {
  const clickHandler = jest.fn();
  const place = shallow(<Place
    name={`Beautiful place name`}
    onClick={() => clickHandler()}
  />);

  const headerText = place.find(`h2`);
  headerText.find(`a`).simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
