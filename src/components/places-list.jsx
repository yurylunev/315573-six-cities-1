import React from "react";
import PropTypes from "prop-types";
import PlaceCard from "./place-card.jsx";
import {connect} from "react-redux";
import {getCurrentCity} from "../reducers/selectors";

class PlacesList extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {offers, currentPlaceId} = this.props;
    return <div className="cities__places-list places__list tabs__content">
      {offers.map((offer, i) => {
        return <PlaceCard
          key={i}
          offer={offer}
          currentPlaceId={currentPlaceId}
        />;
      })}
    </div>;
  }
}


PlacesList.propTypes = {
  offers: PropTypes.array.isRequired,
  currentPlaceId: PropTypes.number.isRequired
};

const mapStateToProps = (state) => ({
  offers: getCurrentCity(state)[0].offers,
  currentPlaceId: state.APP.currentPlaceId
});

export default connect(mapStateToProps)(PlacesList);
