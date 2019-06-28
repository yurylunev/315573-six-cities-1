import React from "react";
import renderer from "react-test-renderer";
import {CitiesList} from "./cities-list.jsx";
import configureMockStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureMockStore();
const store = mockStore({});


const cities = [
  {id: 0, cityName: `Citie 1`},
  {id: 1, cityName: `Citie 2`},
  {id: 2, cityName: `Citie 3`},
  {id: 3, cityName: `Citie 4`}
];

it(`CitiesList correctly renders`, () => {
  const tree = renderer
    .create(<Provider store={store}>
      <CitiesList
        cities={cities}
        currentId={0}
      />
    </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
