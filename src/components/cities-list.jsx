import React from "react";
import PropTypes from "prop-types";

const CitiesList = (props) => {
  const {cities, currentId, clickHandler} = props;
  return <section className="locations container">
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li key={city.id} className="locations__item" onClick={() => clickHandler(city.id)}>
          <a className={
            `locations__item-link tabs__item${city.id === currentId ? ` tabs__item--active` : ``}`
          } href="#">
            <span>{city.cityName}</span>
          </a>
        </li>))}
    </ul>
  </section>;
};

CitiesList.propTypes = {
  cities: PropTypes.array.isRequired,
  currentId: PropTypes.number.isRequired,
  clickHandler: PropTypes.func.isRequired
};

export default CitiesList;
