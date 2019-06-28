import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import City from "../city/city.jsx";
import {ActionCreator as AppActionCreator} from "../../reducers/app-state/app-state";
import {getCitiesList} from "../../reducers/selectors";

export const CitiesList = (props) => {
  const {cities, currentId} = props;
  return <section className="locations container">
    <ul className="locations__list tabs__list">
      {cities.map((city, i) => <City city={city} currentId={currentId} key={i}/>)}
    </ul>
  </section>;
};

CitiesList.propTypes = {
  cities: PropTypes.array.isRequired,
  currentId: PropTypes.number.isRequired,
};
const mapStateToProps = (state) => ({
  currentId: state.APP.currentId,
  cities: getCitiesList(state)
});

const mapDispatchToProps = (dispatch) => ({
  onPlaceChange: (placeId) => {
    dispatch(AppActionCreator[`CHANGE_PLACE`](placeId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
