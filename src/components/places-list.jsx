import React from "react";
import PropTypes from "prop-types";
import PlaceCard from "./place-card.jsx";

class PlacesList extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {offers, clickHandler, currentPlaceId} = this.props;
    return <div className="cities__places-list places__list tabs__content">
      {offers.map((offer, i) => {
        return <PlaceCard
          key={i}
          offer={offer}
          clickHandler={clickHandler}
          currentPlaceId={currentPlaceId}
        />;
      })}
    </div>;
  }
}

PlacesList.propTypes = {
  offers: PropTypes.array.isRequired,
  clickHandler: PropTypes.func.isRequired,
  currentPlaceId: PropTypes.number.isRequired
};

export default PlacesList;
