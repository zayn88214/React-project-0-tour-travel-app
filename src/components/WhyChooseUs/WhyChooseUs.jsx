import React from 'react';
import FeatureCard from '../FeatureCard/FeatureCard.jsx';
import './WhyChooseUs.css';

// WhyChooseUs — receives the features array as a prop from App
// and drills a single feature object down into each FeatureCard.
function WhyChooseUs({ features }) {
  return (
    <section className="why-choose-us">
      <div className="container">
        <p className="eyebrow">Why travel with us</p>
        <h2 className="section-heading">Built around how you actually travel</h2>

        <div className="why-choose-us__grid">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
