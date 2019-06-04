import React from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";

class CitiesMap extends React.PureComponent {
  constructor(props) {
    super(props);
    this.mapContainer = React.createRef();
    this.icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    this.zoom = 12;

    this.state = {
      currentCityGPS: props.currentCityGPS,
      offers: props.offers,
      currentId: props.currentId,
      layers: []
    };
  }

  componentWillReceiveProps(nextProps) {
    this.state.layers.forEach((layer) => this.map.removeLayer(layer));
    this.setState(() => ({layers: []}));
    this.map.setView(nextProps.currentCityGPS, this.zoom);
    this.addLayer(nextProps.currentCityGPS).addTo(this.map);

    if (nextProps.offers) {
      nextProps.offers.forEach((offer) => {
        this.addLayer(offer.gps).addTo(this.map);
      });
    }
  }

  componentDidMount() {
    this.map = leaflet.map(this.mapContainer.current.id, {
      center: this.state.currentCityGPS,
      zoom: this.zoom,
      zoomControl: false,
      marker: true
    });
    this.map.setView(this.state.currentCityGPS, this.zoom);
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);
    const offerCords = this.state.currentCityGPS || [52.3709553943508, 4.89309666406198];

    this.addLayer(offerCords).addTo(this.map);
    if (this.state.offers) {
      this.state.offers.forEach((offer) => {
        this.addLayer(offer.gps).addTo(this.map);
      });
    }
  }

  addLayer(coords) {
    const layer = leaflet
      .marker(coords, {icon: this.icon});
    this.setState((prevState) => ({layers: [...prevState.layers, layer]}));
    return layer;
  }

  render() {
    return <div id="map" ref={this.mapContainer}/>;
  }
}

CitiesMap.propTypes = {
  currentCityGPS: PropTypes.array.isRequired,
  offers: PropTypes.array.isRequired,
  currentId: PropTypes.number.isRequired
};

export default CitiesMap;
