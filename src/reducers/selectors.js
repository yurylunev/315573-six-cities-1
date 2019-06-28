import {createSelector} from "reselect";
import NameSpace from "./name-space";

const {DATA, APP} = NameSpace;

const allOffers = (state) => ({offers: state[DATA].data, currentCityId: state[APP].currentId});

const getCurrentCity = createSelector(
  allOffers,
  ({offers, currentCityId}) => offers.filter((city) => city.id === currentCityId)
);
const getCitiesList = createSelector(
  allOffers,
  ({offers}) => offers.map((city) => ({id: city.id, cityName: city.cityName}))
);

export {getCurrentCity, getCitiesList};
