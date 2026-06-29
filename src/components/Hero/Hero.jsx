import React from 'react';
import { FaArrowRight, FaPlay } from 'react-icons/fa';
import './Hero.css';

// Hero — static content section, no props needed.
function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__overlay" />
      <div className="container hero__content">
        <p className="eyebrow hero__eyebrow">Pakistan, curated since 2014</p>
        <h1 className="hero__heading">
          Discover Pakistan.
          <br />
          One valley at a time.
        </h1>
        <p className="hero__text">
          Safarnama designs slow, well-paced trips across the north and beyond —
          planned by people who have actually driven these roads.
        </p>
        <div className="hero__actions">
          <button className="btn btn-primary">
            Book Trip <FaArrowRight />
          </button>
          <button className="btn btn-ghost">
            <FaPlay /> Explore Destinations
          </button>
        </div>
      </div>
      <div className="hero__horizon" />
    </section>
  );
}

export default Hero;
