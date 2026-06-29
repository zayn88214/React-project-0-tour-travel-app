// Dummy data for the Why Choose Us section.
// Each object represents one feature card rendered via FeatureCard.

import { FaTags, FaShieldAlt, FaHeadset, FaMapMarkedAlt } from 'react-icons/fa';

const features = [
  {
    id: 1,
    icon: FaTags,
    title: 'Best Price Guarantee',
    description: 'Transparent pricing with no hidden fees, matched against the market weekly.',
  },
  {
    id: 2,
    icon: FaShieldAlt,
    title: 'Safe & Insured Travel',
    description: 'Every trip includes coverage and a vetted network of local partners.',
  },
  {
    id: 3,
    icon: FaHeadset,
    title: '24/7 Support',
    description: 'A real person is reachable around the clock, wherever your trip takes you.',
  },
  {
    id: 4,
    icon: FaMapMarkedAlt,
    title: 'Experienced Guides',
    description: 'Local experts who shape each itinerary around what they know best.',
  },
];

export default features;
