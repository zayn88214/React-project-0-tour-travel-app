import React from 'react';
import { FaStar, FaArrowRight } from 'react-icons/fa';

/**
 * DestinationDetail — content rendered inside the Modal when the user
 * clicks "Explore" on a DestinationCard.
 *
 * Props:
 *   destination – the full destination object
 *   onBookNow   – callback to switch modal to booking mode
 */
function DestinationDetail({ destination, onBookNow }) {
  if (!destination) return null;
  const { image, city, country, description, rating, price } = destination;

  return (
    <div className="dest-detail">
      <div className="dest-detail__hero">
        <img src={image} alt={`${city}, ${country}`} />
      </div>

      <div className="dest-detail__meta">
        <span className="dest-detail__country">{country}</span>
        <span className="dest-detail__rating">
          <FaStar /> {rating}
        </span>
      </div>

      <h2 className="dest-detail__city">{city}</h2>
      <p className="dest-detail__desc">{description}</p>

      <div className="dest-detail__price-row">
        <div>
          <p className="dest-detail__price-label">Starting from</p>
          <p className="dest-detail__price-value">{price}<span style={{ fontSize: '0.85rem', fontWeight: 400, color: '#7a8e9a' }}> / person</span></p>
        </div>
        <button className="btn btn-primary" onClick={onBookNow}>
          Book This Trip <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default DestinationDetail;
