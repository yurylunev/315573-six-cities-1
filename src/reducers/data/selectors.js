import NameSpace from "../name-space";

const NAME_SPACE = NameSpace.DATA;

export const getCurrentCityOffers = (state, id) => {
  return state[NAME_SPACE].data.filter((offer) => offer.id === id);
};

export const getCityOffers = (state) => {
  return state[NAME_SPACE].data[state.data.currentId];
};
