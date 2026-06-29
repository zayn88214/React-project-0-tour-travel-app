import React from 'react';
import { FaStar, FaArrowRight } from 'react-icons/fa';
import './DestinationCard.css';

// DestinationCard — receives a single destination object via props
// (props-drilled from App -> Destinations -> DestinationCard).
// onExplore callback opens the destination-detail modal in App.
function DestinationCard({ destination, onExplore }) {
  const { image, city, country, description, rating, price } = destination;

  return (
    <article className="destination-card">
      <div className="destination-card__image-wrap">
        <img src={image} alt={`${city}, ${country}`} loading="lazy" />
        <span className="destination-card__rating">
          <FaStar /> {rating}
        </span>
      </div>

      <div className="destination-card__body">
        <h3 className="destination-card__city">{city}</h3>
        <p className="destination-card__country">{country}</p>
        <p className="destination-card__desc">{description}</p>

        <div className="destination-card__footer">
          <span className="destination-card__price">{price}</span>
          <button
            className="destination-card__btn"
            onClick={() => onExplore && onExplore(destination)}
          >
            Explore <FaArrowRight />
          </button>
        </div>
      </div>
    </article>
  );
}

export default DestinationCard;
