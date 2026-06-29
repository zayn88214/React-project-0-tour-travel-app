import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container contact__grid">
        <div className="contact__info">
          <p className="eyebrow">Get in touch</p>
          <h2 className="section-heading">Let&rsquo;s plan your next trip</h2>
          <p className="section-sub">
            Tell us where you want to go and what kind of trip you&rsquo;re after —
            a planner will reply within one business day.
          </p>

          <ul className="contact__list">
            <li>
              <FaMapMarkerAlt /> Bosan Road, Gulghast, Multan
            </li>
            <li>
              <FaPhoneAlt /> +92 326 7287001
            </li>
            <li>
              <FaEnvelope /> hello@wanderworld.pk
            </li>
          </ul>
        </div>

        <form className="contact__form" onSubmit={(e) => e.preventDefault()}>
          <div className="contact__row">
            <div className="contact__field">
              <label>Full Name</label>
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="contact__field">
              <label>Email</label>
              <input type="email" placeholder="you@example.com" required />
            </div>
          </div>

          <div className="contact__field">
            <label>Destination</label>
            <input type="text" placeholder="Where would you like to go?" />
          </div>

          <div className="contact__field">
            <label>Message</label>
            <textarea rows="4" placeholder="Tell us about your ideal trip..." />
          </div>

          <button className="btn btn-primary" type="submit">
            Send Message <FaPaperPlane />
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
