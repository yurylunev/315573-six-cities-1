const initialState = Object.assign({}, {
  data: [],
  currentPlaceId: 0
});

const ActionCreators = {
  'CHANGE_CITY': (id) => ({
    type: `CHANGE_CITY`,
    payload: id
  }),
  'CHANGE_PLACE': (id) => ({
    type: `CHANGE_PLACE`,
    payload: id
  }),
  'GET_CITY_OFFERS': (cityId) => {
    return {
      type: `GET_CITY_OFFERS`,
      payload: cityId
    };
  },
  'loadOffers': (offers) => {
    return {
      type: `LOAD_OFFERS`,
      payload: offers
    };
  }
};

const mapOffer = (offer) => ({
  id: offer.id,
  isPremium: offer.is_premium,
  isFavorite: offer.is_favorite,
  imageURL: offer.preview_image,
  price: offer.price,
  currency: `€`,
  rate: +((offer.rating / 5) * 100).toFixed(0),
  name: offer.title,
  type: offer.type,
  gps: [offer.location.latitude, offer.location.longitude],
  zoom: offer.location.zoom,
  bedrooms: offer.bedrooms,
  description: offer.description,
  goods: offer.goods,
  host: offer.host,
  images: offer.images,
  maxAdults: offer.max_adults
});

const mapCity = (offer, cityOffers, i) => ({
  id: i,
  cityName: offer.city.name,
  gps: [offer.city.location.latitude, offer.city.location.longitude],
  zoom: offer.city.location.zoom,
  offersCount: cityOffers.length,
  offers: cityOffers
});

const Operation = {
  loadOffersAsync: () => (dispatch) => {
    return fetch(`https://es31-server.appspot.com/six-cities/hotels`)
      .then((response) => response.json())
      .then((offers) => {
        const sortedOffers = (offers.sort((a, b) => (a.city.name > b.city.name) ? -1 : 1));
        let cities = [];
        let cityOffers = [];
        for (let i = 0; i < sortedOffers.length - 1; i++) {
          if (sortedOffers.hasOwnProperty(i)) {
            if (i !== sortedOffers.length - 1) {
              const offer = sortedOffers[i];
              cityOffers.push(mapOffer(offer));
              if (offer.city.name !== sortedOffers[i + 1].city.name) {
                cities.push(mapCity(offer, cityOffers, i));
                cityOffers = [];
              }
            } else {
              const offer = sortedOffers[i + 1];
              cityOffers.push(mapOffer(offer));
              cities.push(mapCity(offer, cityOffers, i));
              cityOffers = [];
            }
          }
        }
        dispatch(ActionCreators.loadOffers(cities));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_CITY`:
      return Object.assign({}, state, {currentId: action.payload});
    case `GET_CITY_OFFERS`:
      return Object.assign({}, state.data[action.payload]);
    case `CHANGE_PLACE`:
      return Object.assign({}, state, {currentPlaceId: action.payload});
    case `LOAD_OFFERS`:
      return Object.assign({}, state, {data: action.payload, currentId: action.payload[0].id});
  }
  return state;
};

export {reducer, ActionCreators, Operation};
