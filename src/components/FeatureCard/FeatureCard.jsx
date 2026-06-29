import React from 'react';
import './FeatureCard.css';

// FeatureCard — receives a single feature object via props
// (props-drilled from App -> WhyChooseUs -> FeatureCard).
function FeatureCard({ feature }) {
  const { icon: Icon, title, description } = feature;

  return (
    <div className="feature-card">
      <div className="feature-card__icon">
        <Icon />
      </div>
      <h3 className="feature-card__title">{title}</h3>
      <p className="feature-card__desc">{description}</p>
    </div>
  );
}

export default FeatureCard;
