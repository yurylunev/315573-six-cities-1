import React from "react";
import PropTypes from "prop-types";
import withActiveCard from "../hocs/with-active-card/with-active-card";
import {ActionCreator as AppActionCreator} from "../reducers/app-state/app-state";
import {connect} from "react-redux";

export const City = ({city, onCityChange, activeClassName}) => {
  return <li key={city.id} className={`locations__item`}
    onClick={() => onCityChange(city.id)}>
    <a className={
      `locations__item-link tabs__item${activeClassName ? ` tabs__item--${activeClassName}` : ``}`
    }>
      <span>{city.cityName}</span>
    </a>
  </li>;
};

City.propTypes = {
  city: PropTypes.shape({
    id: PropTypes.number.isRequired,
    cityName: PropTypes.string.isRequired
  }),
  onCityChange: PropTypes.func.isRequired,
  activeClassName: PropTypes.string.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onCityChange: (cityId) => {
    dispatch(AppActionCreator[`CHANGE_CITY`](cityId));
  }
});

export default connect(null, mapDispatchToProps)(withActiveCard(City));
