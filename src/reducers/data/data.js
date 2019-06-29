const initialState = Object.assign({}, {
  data: []
});

const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`
};

const ActionCreator = {
  'loadOffers': (offers) => {
    return {
      type: ActionType.LOAD_OFFERS,
      payload: offers
    };
  },
  'requireAuthorization': (auth) => {
    return auth;
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
            if (i + 1 !== sortedOffers.length - 1) {
              const offer = sortedOffers[i];
              cityOffers.push(mapOffer(offer));
              if (offer.city.name !== sortedOffers[i + 1].city.name) {
                cities.push(mapCity(offer, cityOffers, cities.length));
                cityOffers = [];
              }
            } else {
              const offer = sortedOffers[i + 1];
              cityOffers.push(mapOffer(offer));
              cities.push(mapCity(offer, cityOffers, cities.length));
              cityOffers = [];
            }
          }
        }
        dispatch(ActionCreator.loadOffers(cities));
      });
  }
};

const reducer = (state = initialState, action) => {
  if (action.type === ActionType.LOAD_OFFERS) {
    return Object.assign({}, state, {data: action.payload, loaded: true});
  }
  return state;
};

export {reducer, ActionCreator, Operation};
