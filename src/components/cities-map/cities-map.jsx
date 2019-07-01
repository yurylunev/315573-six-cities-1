import React from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import {connect} from "react-redux";
import {getCurrentCity} from "../../reducers/selectors";

export class CitiesMap extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentCityGPS: props.currentCityGPS,
      offers: props.offers,
      currentCityId: props.currentCityId,
      layers: []
    };
  }

  componentDidMount() {
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    const zoom = 12;
    const map = leaflet.map(`map`, {
      center: this.state.currentCityGPS,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(this.state.currentCityGPS, this.zoom);
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    const offerCords = this.state.currentCityGPS || [52.3709553943508, 4.89309666406198];

    leaflet
      .marker(offerCords, {icon})
      .addTo(map);
    if (this.state.offers) {
      this.state.offers.forEach((offer) => {
        leaflet
          .marker(offer.gps)
          .addTo(map);
      });
    }
  }

  render() {
    return <div id="map"/>;
  }
}

CitiesMap.propTypes = {
  currentCityGPS: PropTypes.array.isRequired,
  offers: PropTypes.array.isRequired,
  currentCityId: PropTypes.number.isRequired
};

const mapStateToProps = (state) => ({
  currentCityId: state.APP.currentCityId,
  offers: getCurrentCity(state).offers,
  currentCityGPS: getCurrentCity(state).gps
});

export default connect(mapStateToProps)(CitiesMap);
