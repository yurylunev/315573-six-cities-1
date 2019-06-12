import React from "react";
import PropTypes from "prop-types";
import withActiveCard from "../hocs/with-active-card/with-active-card";

const CitiesList = (props) => {
  const {cities, currentId, clickHandler} = props;
  return <section className="locations container">
    <ul className="locations__list tabs__list">
      {cities.map((city, i) => (
        <li key={i} className="locations__item" onClick={() => clickHandler({currentId: city.id})}>
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

export default withActiveCard(CitiesList);
