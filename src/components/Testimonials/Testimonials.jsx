import React from 'react';
import TestimonialCard from '../TestimonialCard/TestimonialCard.jsx';
import './Testimonials.css';

// Testimonials — receives the testimonials array as a prop from App
// and drills a single review object down into each TestimonialCard.
function Testimonials({ testimonials }) {
  return (
    <section className="testimonials">
      <div className="container">
        <p className="eyebrow">Trusted by travelers</p>
        <h2 className="section-heading">Stories from the road</h2>

        <div className="testimonials__grid">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
