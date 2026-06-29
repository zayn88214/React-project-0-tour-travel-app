import React from 'react';
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

import destinationsData from './data/destinations.js';
import packagesData from './data/packages.js';
import testimonialsData from './data/testimonials.js';
import featuresData from './data/features.js';
import galleryData from './data/gallery.js';

import './App.css';


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      
      <Destinations destinations={destinationsData} />
      <Packages packages={packagesData} />
      <About />
      <WhyChooseUs features={featuresData} />
      <Testimonials testimonials={testimonialsData} />
      <Gallery images={galleryData} />
      <Newsletter />
      <Contact />
      <Footer destinations={destinationsData} />
    </>
  );
}

export default App;
