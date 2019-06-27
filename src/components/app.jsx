import React from "react";
import PropTypes from "prop-types";
import PlacesList from "./places-list.jsx";
import CitiesMap from "./map.jsx";
import CitiesList from "./cities-list.jsx";
import {connect} from "react-redux";
import {Operation as DataOperation} from "../reducers/data/data";
import {ActionCreator as AppActionCreator} from "../reducers/app/app";

export class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    this.props.loadOffersAsync();
  }

  render() {
    if (typeof this.props.DATA.loaded === `undefined`) {
      return <h1>Loading ... </h1>;
    }
    const currentCity = this.props.DATA.data.filter((city) => city.id === this.props.APP.currentId)[0];
    return <React.Fragment>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="cities tabs">
          <CitiesList cities={this.props.cities} clickHandler={this.props.onCityChange}
            currentId={this.props.APP.currentId}/>
        </div>
        <div className="cities__places-wrapper">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{currentCity.offers.length} places to stay
                in {currentCity.cityName}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"/>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex="0">Popular</li>
                  <li className="places__option" tabIndex="0">Price: low to high</li>
                  <li className="places__option" tabIndex="0">Price: high to low</li>
                  <li className="places__option" tabIndex="0">Top rated first</li>
                </ul>
              </form>
              <PlacesList offers={currentCity.offers} clickHandler={this.props.onPlaceChange}
                currentPlaceId={this.props.APP.currentPlaceId}/>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <CitiesMap
                  key={this.props.APP.currentId}
                  currentId={this.props.APP.currentId}
                  currentCityGPS={currentCity.gps}
                  offers={currentCity.offers}/>
              </section>
            </div>
          </div>
        </div>

      </main>
    </React.Fragment>;
  }
}

App.propTypes = {
  APP: PropTypes.shape({
    currentId: PropTypes.number,
    currentPlaceId: PropTypes.number,
  }),
  DATA: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({
      cityName: PropTypes.string.isRequired,
      offers: PropTypes.array.isRequired
    })),
    loaded: PropTypes.bool
  }),
  cities: PropTypes.array.isRequired,
  onCityChange: PropTypes.func.isRequired,
  onPlaceChange: PropTypes.func.isRequired,
  loadOffersAsync: PropTypes.func.isRequired
};

const mapStateToProps = (state) => Object.assign({}, state, {
  cities: state.DATA.data.map((city) => ({
    id: city.id,
    cityName: city.cityName
  }))
});
const mapDispatchToProps = (dispatch) => ({
  onCityChange: (props) => {
    dispatch(AppActionCreator[`CHANGE_CITY`](props));
  },
  onPlaceChange: (props) => {
    dispatch(AppActionCreator[`CHANGE_PLACE`](props));
  },
  loadOffersAsync: (props) => dispatch(DataOperation.loadOffersAsync(props))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
