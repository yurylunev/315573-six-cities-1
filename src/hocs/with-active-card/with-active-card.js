import React from "react";
import PropTypes from "prop-types";

const withActiveCard = (Component) => {
  class WithActiveCard extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {};
    }

    _handleClick(e) {
      this.setState(e);
    }

    render() {
      return <Component
        {...this.props}
        active={this.state.activated}
        clickHandler={(e) => {
          this._handleClick(e);
          this.props.clickHandler(e);
        }}
      />;
    }
  }

  WithActiveCard.propTypes = {
    clickHandler: PropTypes.func.isRequired
  };
  return WithActiveCard;
};

export default withActiveCard;
