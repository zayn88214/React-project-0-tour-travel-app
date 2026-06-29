import React from 'react';
import { FaCompass, FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import './Footer.css';

// Footer — receives destinations as a prop from App to render
// the "Popular Destinations" quick-link list dynamically.
function Footer({ destinations }) {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a href="#home" className="footer__logo">
            <FaCompass /> WanderWorld
          </a>
          <p>
            Slow, well-planned trips across Pakistan&rsquo;s north and beyond — designed by
            people who have actually driven these roads.
          </p>
          <div className="footer__socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#destinations">Destinations</a></li>
            <li><a href="#packages">Packages</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4>Popular Destinations</h4>
          <ul>
            {destinations.slice(0, 5).map((d) => (
              <li key={d.id}>{d.city}, {d.country}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Company</h4>
          <ul>
            <li>Bosan Road,Gulghast, Multan</li>
            <li>hello@safarnama.pk</li>
            <li>+92 326 7287001</li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom container">
        <p>&copy; {new Date().getFullYear()} WanderWorld. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
