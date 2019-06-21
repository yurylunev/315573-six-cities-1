import React from "react";
import PropTypes from "prop-types";
import City from "./city.jsx";

const CitiesList = (props) => {
  const {cities, currentId, clickHandler} = props;
  return <section className="locations container">
    <ul className="locations__list tabs__list">
      {cities.map((city, i) => <City city={city} currentId={currentId} key={i}
        clickHandler={clickHandler}/>)}
    </ul>
  </section>;
};

CitiesList.propTypes = {
  cities: PropTypes.array.isRequired,
  currentId: PropTypes.number.isRequired,
  clickHandler: PropTypes.func.isRequired
};

export default CitiesList;
