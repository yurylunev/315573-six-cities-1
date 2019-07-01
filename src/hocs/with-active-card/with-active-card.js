import React from "react";
import PropTypes from "prop-types";

const withActiveCard = (Component) => {
  class WithActiveCard extends React.PureComponent {
    constructor(props) {
      super(props);
    }

    render() {
      const {city, currentCityId, currentPlaceId, offer} = this.props;
      let activeClassName = ``;
      if (((typeof city !== `undefined`) && currentCityId === city.id)
        || ((typeof offer !== `undefined`) && currentPlaceId === offer.id)) {
        activeClassName = `active`;
      }
      return <Component
        {...this.props}
        activeClassName={activeClassName}
      />;
    }
  }

  WithActiveCard.propTypes = {
    city: PropTypes.shape({
      id: PropTypes.number
    }),
    offer: PropTypes.shape({
      id: PropTypes.number.isRequired
    }),
    currentCityId: PropTypes.number,
    currentPlaceId: PropTypes.number
  };
  return WithActiveCard;
};

export default withActiveCard;
