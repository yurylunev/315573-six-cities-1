import React from "react";
import PropTypes from "prop-types";

const CitiesList = (props) => {
  const {cities, clickHandler} = props;

  return <section className="locations container">
    <ul className="locations__list tabs__list">
      {cities.map((city, i) => (
        <li key={i} className="locations__item" onClick={() => clickHandler(i)}>
          <a className="locations__item-link tabs__item" href="#">
            <span>{city}</span>
          </a>
        </li>))}
    </ul>
  </section>;
};

CitiesList.propTypes = {
  cities: PropTypes.array.isRequired,
  clickHandler: PropTypes.func.isRequired
};

export default CitiesList;
