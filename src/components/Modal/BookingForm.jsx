import React, { useState } from 'react';
import { FaCheckCircle, FaTag } from 'react-icons/fa';
import destinationsData from '../../data/destinations.js';

/**
 * BookingForm — an inline booking form rendered inside the Modal.
 *
 * Props:
 *   preselectedPackage – name of the package to pre-fill (optional)
 *   preselectedDest    – destination city to pre-fill (optional)
 *   onClose            – callback to close the whole modal
 */
function BookingForm({ preselectedPackage, preselectedDest, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    destination: preselectedDest || '',
    date: '',
    travelers: '1',
    message: '',
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="book-form__success">
        <div className="book-form__success-icon">
          <FaCheckCircle />
        </div>
        <h3>Booking Request Sent!</h3>
        <p>
          Thanks, <strong>{form.name || 'traveler'}</strong>! Our team will get back
          to you within one business day to confirm your trip.
        </p>
        <button
          className="btn btn-primary"
          style={{ marginTop: '1.5rem' }}
          onClick={onClose}
        >
          Done
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="book-form__subtitle">
        Fill in your details and we'll get back to you within 24 hours.
      </p>

      {preselectedPackage && (
        <div className="book-form__pkg-badge">
          <FaTag /> {preselectedPackage}
        </div>
      )}

      <div className="book-form__row">
        <div className="book-form__field">
          <label htmlFor="book-name">Full Name</label>
          <input
            id="book-name"
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="book-form__field">
          <label htmlFor="book-email">Email</label>
          <input
            id="book-email"
            type="email"
            name="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="book-form__row">
        <div className="book-form__field">
          <label htmlFor="book-phone">Phone</label>
          <input
            id="book-phone"
            type="tel"
            name="phone"
            placeholder="+92 300 0000000"
            value={form.phone}
            onChange={handleChange}
          />
        </div>
        <div className="book-form__field">
          <label htmlFor="book-travelers">Number of Travelers</label>
          <select
            id="book-travelers"
            name="travelers"
            value={form.travelers}
            onChange={handleChange}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
              <option key={n} value={n}>{n} {n === 1 ? 'person' : 'people'}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="book-form__field">
        <label htmlFor="book-destination">Destination</label>
        <select
          id="book-destination"
          name="destination"
          value={form.destination}
          onChange={handleChange}
          required
        >
          <option value="">Select a destination…</option>
          {destinationsData.map((d) => (
            <option key={d.id} value={d.city}>{d.city}</option>
          ))}
        </select>
      </div>

      <div className="book-form__field">
        <label htmlFor="book-date">Preferred Travel Date</label>
        <input
          id="book-date"
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          min={new Date().toISOString().split('T')[0]}
        />
      </div>

      <div className="book-form__field">
        <label htmlFor="book-message">Additional Notes</label>
        <textarea
          id="book-message"
          name="message"
          rows="3"
          placeholder="Any special requirements or questions?"
          value={form.message}
          onChange={handleChange}
        />
      </div>

      <div className="book-form__actions">
        <button type="submit" className="btn btn-primary">
          Confirm Booking
        </button>
        <button type="button" className="book-form__cancel" onClick={onClose}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default BookingForm;
