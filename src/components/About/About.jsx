import React from 'react';
import { FaMountain, FaUsers, FaSuitcaseRolling } from 'react-icons/fa';
import './About.css';

// About — static section, no props needed.
// Gives the Navbar's "About" link a real target (#about) to scroll to.
const stats = [
  { id: 1, icon: FaMountain, value: '24', label: 'Regions Covered Across Pakistan' },
  { id: 2, icon: FaUsers, value: '9k+', label: 'Travelers Hosted' },
  { id: 3, icon: FaSuitcaseRolling, value: '8', label: 'Years Planning Trips' },
];

function About() {
  return (
    <section id="about" className="about">
      <div className="container about__grid">
        <div className="about__image-wrap">
          <img
            src="https://picsum.photos/seed/safarnama-about-team/700/560"
            alt="Safarnama trip planners reviewing a northern Pakistan route"
            loading="lazy"
          />
        </div>

        <div className="about__content">
          <p className="eyebrow">About WanderWorld</p>
          <h2 className="section-heading">Planned by people who have actually driven these roads</h2>
          <p className="section-sub" style={{ maxWidth: '480px' }}>
            WanderWorld started with a simple complaint: most northern-area itineraries are
            written by people who have never crossed the Karakoram Highway themselves.
            We do the opposite — every route on this site is shaped by a guide or
            planner from Gilgit-Baltistan, Swat, or Lahore who has lived it.
          </p>

          <div className="about__stats">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div className="about__stat" key={stat.id}>
                  <Icon className="about__stat-icon" />
                  <div>
                    <p className="about__stat-value">{stat.value}</p>
                    <p className="about__stat-label">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

