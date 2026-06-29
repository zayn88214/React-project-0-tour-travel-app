import React from 'react';
import DestinationCard from '../DestinationCard/DestinationCard.jsx';
import './Destinations.css';

function Destinations({ destinations, onExplore }) {
  return (
    <section id="destinations" className="destinations">
      <div className="container">
        <p className="eyebrow">Where to next</p>
        <h2 className="section-heading">Popular Destinations</h2>
        <p className="section-sub">
          Hand-picked places our travelers return to year after year.
        </p>

        <div className="destinations__grid">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
              onExplore={onExplore}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Destinations;
