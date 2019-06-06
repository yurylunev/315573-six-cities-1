import React from "react";
import PropTypes from "prop-types";

const withActiveCard = (Component) => {
  class WithActiveCard extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        activeCard: {
          currency: ``,
          gps: [],
          imageURL: ``,
          mark: ``,
          name: ``,
          price: 0,
          rate: 0,
          type: ``
        }
      };
    }

    render() {
      return <Component
        {...this.props}
        clickHandler={(clickOffer) => {
          this.setState({activeCard: clickOffer});
        }}
      />;
    }
  }

  WithActiveCard.propTypes = {
    clickHandler: PropTypes.func.isRequired
  };
};

export default withActiveCard;
