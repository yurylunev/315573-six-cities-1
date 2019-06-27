import NameSpace from "../name-space";

const NAME_SPACE = NameSpace.DATA;

export const getCurrentId = (state) => {
  return state[NAME_SPACE].currentId;
};

export const getCityOffers = (state) => {
  return state[NAME_SPACE].data[state.data.currentId];
};
