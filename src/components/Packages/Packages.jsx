import React from 'react';
import PackageCard from '../PackageCard/PackageCard.jsx';
import './Packages.css';

// Packages — receives the packages array as a prop from App
// and drills a single package object down into each PackageCard.
function Packages({ packages }) {
  return (
    <section id="packages" className="packages">
      <div className="container">
        <p className="eyebrow">All-inclusive</p>
        <h2 className="section-heading">Tour Packages</h2>
        <p className="section-sub">
          Fixed itineraries with the planning already done — just choose your dates.
        </p>

        <div className="packages__grid">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Packages;
