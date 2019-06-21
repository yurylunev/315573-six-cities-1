import React from "react";
import PropTypes from "prop-types";
import withActiveCard from "../hocs/with-active-card/with-active-card";

const City = ({city, clickHandler, activeClassName}) => {
  return <li key={city.id} className={`locations__item`}
    onClick={() => clickHandler(city.id)}>
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
  clickHandler: PropTypes.func.isRequired,
  activeClassName: PropTypes.string.isRequired
};

export default withActiveCard(City);
