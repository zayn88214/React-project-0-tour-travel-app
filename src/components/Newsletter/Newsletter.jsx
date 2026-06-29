import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import './Newsletter.css';

function Newsletter() {
  return (
    <section className="newsletter">
      <div className="container newsletter__inner">
        <div>
          <h2 className="newsletter__heading">Get trip ideas in your inbox</h2>
          <p className="newsletter__text">
            One email a month — new destinations, fare drops, and seasonal routes.
          </p>
        </div>

        <form className="newsletter__form" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="you@example.com" required />
          <button className="btn btn-primary" type="submit">
            Subscribe <FaPaperPlane />
          </button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
