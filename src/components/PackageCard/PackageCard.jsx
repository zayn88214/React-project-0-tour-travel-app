import React from 'react';
import { FaClock, FaHotel, FaBus, FaUtensils } from 'react-icons/fa';
import './PackageCard.css';

// PackageCard — receives a single package object via props
// (props-drilled from App -> Packages -> PackageCard).
function PackageCard({ pkg }) {
  const { image, title, duration, hotel, transport, meals, price } = pkg;

  return (
    <article className="package-card">
      <div className="package-card__image-wrap">
        <img src={image} alt={title} loading="lazy" />
      </div>

      <div className="package-card__body">
        <h3 className="package-card__title">{title}</h3>

        <ul className="package-card__meta">
          <li><FaClock /> {duration}</li>
          <li><FaHotel /> {hotel}</li>
          <li><FaBus /> {transport}</li>
          <li><FaUtensils /> {meals}</li>
        </ul>

        <div className="package-card__footer">
          <span className="package-card__price">{price}</span>
          <button className="btn btn-outline">Book Now</button>
        </div>
      </div>
    </article>
  );
}

export default PackageCard;
