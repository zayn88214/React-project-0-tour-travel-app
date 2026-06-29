import React, { useState, useCallback } from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Destinations from './components/Destinations/Destinations.jsx';
import Packages from './components/Packages/Packages.jsx';
import About from './components/About/About.jsx';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs.jsx';
import Testimonials from './components/Testimonials/Testimonials.jsx';
import Gallery from './components/Gallery/Gallery.jsx';
import Newsletter from './components/Newsletter/Newsletter.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';
import Modal from './components/Modal/Modal.jsx';
import DestinationDetail from './components/Modal/DestinationDetail.jsx';
import BookingForm from './components/Modal/BookingForm.jsx';

import destinationsData from './data/destinations.js';
import packagesData from './data/packages.js';
import testimonialsData from './data/testimonials.js';
import featuresData from './data/features.js';
import galleryData from './data/gallery.js';

import './App.css';

/**
 * Modal state shape:
 *   { type: null }                              — closed
 *   { type: 'destination', destination }        — show destination detail
 *   { type: 'booking', pkg?, destCity? }        — show booking form
 */
function App() {
  const [modal, setModal] = useState({ type: null });

  const closeModal = useCallback(() => setModal({ type: null }), []);

  /** Open destination-detail modal */
  const openDestination = useCallback((destination) => {
    setModal({ type: 'destination', destination });
  }, []);

  /** Open booking-form modal (optionally with a pre-filled package or destination) */
  const openBooking = useCallback(({ pkg, destCity } = {}) => {
    setModal({ type: 'booking', pkg, destCity });
  }, []);

  /* Scroll helpers used by Hero & Navbar */
  const scrollToPackages = useCallback(() => {
    document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const scrollToDestinations = useCallback(() => {
    document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  /* ---- Derived modal content ---- */
  const modalTitle =
    modal.type === 'destination'
      ? modal.destination?.city
      : modal.type === 'booking'
      ? 'Book Your Trip'
      : '';

  return (
    <>
      <Navbar onBookNow={scrollToPackages} />

      <Hero
        onBookTrip={scrollToPackages}
        onExplore={scrollToDestinations}
      />

      <Destinations
        destinations={destinationsData}
        onExplore={openDestination}
      />

      <Packages
        packages={packagesData}
        onBookNow={(pkg) => openBooking({ pkg: pkg.title })}
      />

      <About />
      <WhyChooseUs features={featuresData} />
      <Testimonials testimonials={testimonialsData} />
      <Gallery images={galleryData} />
      <Newsletter />
      <Contact />
      <Footer destinations={destinationsData} />

      {/* ---- Global Modal ---- */}
      <Modal isOpen={modal.type !== null} onClose={closeModal} title={modalTitle}>
        {modal.type === 'destination' && (
          <DestinationDetail
            destination={modal.destination}
            onBookNow={() =>
              openBooking({ destCity: modal.destination?.city })
            }
          />
        )}
        {modal.type === 'booking' && (
          <BookingForm
            preselectedPackage={modal.pkg}
            preselectedDest={modal.destCity}
            onClose={closeModal}
          />
        )}
      </Modal>
    </>
  );
}

export default App;
