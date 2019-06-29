import {createSelector} from "reselect";
import NameSpace from "./name-space";

const {DATA, APP} = NameSpace;

const allOffers = (state) => ({
  offers: state[DATA].data,
  currentCityId: state[APP].currentCityId
});

const getCurrentCity = createSelector(
    allOffers,
    ({offers, currentCityId}) => offers[currentCityId]
);
const getCitiesList = createSelector(
    allOffers,
    ({offers}) => offers.map((city) => ({id: city.id, cityName: city.cityName}))
);

export {getCurrentCity, getCitiesList};
