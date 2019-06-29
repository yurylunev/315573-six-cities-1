import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import City from "../city/city.jsx";
import {ActionCreator as AppActionCreator} from "../../reducers/app-state/app-state";
import {getCitiesList} from "../../reducers/selectors";

export const CitiesList = (props) => {
  const {cities, currentCityId} = props;
  return <section className="locations container">
    <ul className="locations__list tabs__list">
      {cities.map((city, i) => <City city={city} currentCityId={currentCityId} key={i}/>)}
    </ul>
  </section>;
};

CitiesList.propTypes = {
  cities: PropTypes.array.isRequired,
  currentCityId: PropTypes.number.isRequired,
};
const mapStateToProps = (state) => ({
  currentCityId: state.APP.currentCityId,
  cities: getCitiesList(state)
});

const mapDispatchToProps = (dispatch) => ({
  onPlaceChange: (placeId) => {
    dispatch(AppActionCreator[`CHANGE_PLACE`](placeId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
