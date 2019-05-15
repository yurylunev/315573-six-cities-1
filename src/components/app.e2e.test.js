import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./app";

Enzyme.configure({adapter: new Adapter()});

it(`App onClick handler work`, () => {
  const clickHandler = jest.fn();
  const app = shallow(<App placesList={[
    {name: `PlaceName1`, onClick: clickHandler},
    {name: `PlaceName2`, onClick: clickHandler},
    {name: `PlaceName3`, onClick: clickHandler}
  ]}/>);

  app.find({name: `PlaceName1`}).simulate(`click`);
  app.find({name: `PlaceName2`}).simulate(`click`);
  app.find({name: `PlaceName3`}).simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(3);
});
