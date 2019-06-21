import React from "react";
import PropTypes from "prop-types";
import withActiveCard from "../hocs/with-active-card/with-active-card";

const PlaceCard = (props) => {
  const {offer, clickHandler, activeClassName} = props;
  return <article className={`cities__place-card place-card${activeClassName ? ` place-card--${activeClassName}` : ``}`}>
    {(offer.mark)
      ? <div className="place-card__mark">
        <span>{offer.mark}</span>
      </div>
      : null
    }
    <div className="cities__image-wrapper place-card__image-wrapper">
      <a onClick={() => clickHandler(offer.id)}>
        <img className="place-card__image" src={offer.imageURL} width="260" height="200" alt="Place image"/>
      </a>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">{offer.currency}{offer.price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button className="place-card__bookmark-button button" type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"/>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: offer.rate + `%`}}/>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <a onClick={() => clickHandler(offer.id)}>{offer.name}</a>
      </h2>
      <p className="place-card__type">{offer.type}</p>
    </div>
  </article>;
};

PlaceCard.propTypes = {
  offer: PropTypes.shape({
    mark: PropTypes.string,
    imageURL: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  }),
  activeClassName: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  currentPlaceId: PropTypes.number.isRequired
};

export default withActiveCard(PlaceCard);
