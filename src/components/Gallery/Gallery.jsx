import React from 'react';
import './Gallery.css';

// Gallery — receives the gallery images array as a prop from App.
function Gallery({ images }) {
  return (
    <section className="gallery">
      <div className="container">
        <p className="eyebrow">Snapshots</p>
        <h2 className="section-heading">From the Safarnama lens</h2>

        <div className="gallery__grid">
          {images.map((item) => (
            <div className="gallery__item" key={item.id}>
              <img src={item.image} alt={item.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
