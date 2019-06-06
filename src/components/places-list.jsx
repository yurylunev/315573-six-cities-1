import React from "react";
import PropTypes from "prop-types";
import PlaceCard from "./place-card.jsx";

class PlacesList extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="cities__places-list places__list tabs__content">
      {this.props.offers.map((offer, i) => {
        return <PlaceCard
          key={i}
          offer={offer}
          clickHandler={() => this.props.clickHandler()}
        />;
      })}
    </div>;
  }
}

PlacesList.propTypes = {
  offers: PropTypes.array.isRequired,
  clickHandler: PropTypes.func.isRequired
};

export default PlacesList;
