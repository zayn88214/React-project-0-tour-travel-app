import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import './TestimonialCard.css';

// TestimonialCard — receives a single review object via props
// (props-drilled from App -> Testimonials -> TestimonialCard).
function TestimonialCard({ testimonial }) {
  const { avatar, name, country, review, stars } = testimonial;

  return (
    <article className="testimonial-card">
      <FaQuoteLeft className="testimonial-card__quote-icon" />
      <p className="testimonial-card__review">{review}</p>

      <div className="testimonial-card__stars">
        {Array.from({ length: stars }).map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>

      <div className="testimonial-card__person">
        <img src={avatar} alt={name} />
        <div>
          <p className="testimonial-card__name">{name}</p>
          <p className="testimonial-card__country">{country}</p>
        </div>
      </div>
    </article>
  );
}

export default TestimonialCard;
