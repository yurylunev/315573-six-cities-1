import React from "react";
import PropTypes from "prop-types";
import PlaceCard from "./place-card.jsx";

class PlacesList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: {}
    };
  }

  render() {
    return <div className="cities__places-list places__list tabs__content">
      {this.props.placesList.map((place, i) => {
        const offer = {
          mark: place.mark,
          imageURL: place.imageURL,
          price: place.price,
          currency: place.currency,
          rate: place.rate,
          name: place.name,
          type: place.type
        };
        return <PlaceCard
          key={i}
          offer={offer}
          clickHandler={(clickOffer) => {
            this.setState({activeCard: clickOffer});
          }}
        />;
      })}
    </div>;
  }
}

PlacesList.propTypes = {
  placesList: PropTypes.array.isRequired
};

export default PlacesList;
