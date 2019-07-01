import React from "react";
import PropTypes from "prop-types";
import PlacesList from "../places-list/places-list.jsx";
import CitiesMap from "../cities-map/cities-map.jsx";
import CitiesList from "../cities-list/cities-list.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import {connect} from "react-redux";
import {Operation as DataOperation} from "../../reducers/data/data";
import {Operation as UserOperation} from "../../reducers/user/user";
import {getCurrentCity} from "../../reducers/selectors";

export class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    this.props.loadOffersAsync();
  }

  render() {
    if (this.props.isAuthorizationRequired) {
      return <SignIn/>;
    } else {
      if (!this.props.loaded) {
        return <h1>Loading ... </h1>;
      }
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
                    <a className="header__nav-link header__nav-link--profile"
                      onClick={(!this.props.userName) ? () => this.props.requireAuthorization() : null}>
                      <div className="header__avatar-wrapper user__avatar-wrapper"
                        style={(this.props.userName) ? {backgroundImage: `url(../img/avatar-max.jpg)`} : null}>
                      </div>
                      <span
                        className="header__user-name user__name">{(this.props.userName) ? this.props.userName : `Sign In`}</span>
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
            <CitiesList/>
          </div>
          <div className="cities__places-wrapper">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{this.props.currentCity.offersCount} places to stay
                  in {this.props.currentCity.cityName}</b>
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
                <PlacesList/>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <CitiesMap key={this.props.currentCity.id}/>
                </section>
              </div>
            </div>
          </div>

        </main>
      </React.Fragment>;
    }
  }
}

App.propTypes = {
  loaded: PropTypes.bool,
  currentCity: PropTypes.shape({
    id: PropTypes.number.isRequired,
    cityName: PropTypes.string.isRequired,
    offersCount: PropTypes.number.isRequired
  }),
  loadOffersAsync: PropTypes.func.isRequired,
  isAuthorizationRequired: PropTypes.bool.isRequired,
  userName: PropTypes.string,
  requireAuthorization: PropTypes.func.isRequired
};

const mapStateToProps = (state) => Object.assign({}, state, {
  currentCity: state.DATA.loaded ? getCurrentCity(state) : {
    id: 0,
    cityName: ``,
    offersCount: 0
  },
  loaded: state.DATA.loaded,
  isAuthorizationRequired: state.USER.isAuthorizationRequired,
  userName: state.USER.email
});

const mapDispatchToProps = (dispatch) => ({
  loadOffersAsync: (props) => dispatch(DataOperation.loadOffersAsync(props)),
  requireAuthorization: () => dispatch(UserOperation.requireAuthorization()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
