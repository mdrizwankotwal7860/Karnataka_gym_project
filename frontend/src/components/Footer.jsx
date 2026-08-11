import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--color-bg-secondary)', borderTop: '1px solid var(--color-bg-tertiary)', paddingTop: 'var(--spacing-xl)', paddingBottom: 'calc(var(--spacing-xl) + 60px)' /* Added padding for mobile bottom bar */ }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-lg)' }}>
        
        {/* Brand */}
        <div>
          <div style={{ fontSize: '1.5rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '-0.5px', marginBottom: '1rem' }}>
            Karnataka <span className="text-accent">Gym</span>
          </div>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>
            Premium fitness center in Hubballi. Train strong, train consistently with expert guidance and quality equipment.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ marginBottom: '1.5rem', fontSize: '1.25rem' }}>Quick Links</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><Link to="/about" style={{ color: 'var(--color-text-secondary)' }}>About Us</Link></li>
            <li><Link to="/services" style={{ color: 'var(--color-text-secondary)' }}>Services</Link></li>
            <li><Link to="/membership" style={{ color: 'var(--color-text-secondary)' }}>Membership</Link></li>
            <li><Link to="/contact" style={{ color: 'var(--color-text-secondary)' }}>Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 style={{ marginBottom: '1.5rem', fontSize: '1.25rem' }}>Contact Us</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', color: 'var(--color-text-secondary)' }}>
              <MapPin size={20} className="text-accent" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span>Kalidas Nagar, Hubballi, Karnataka</span>
            </li>
            <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', color: 'var(--color-text-secondary)' }}>
              <Phone size={20} className="text-accent" style={{ flexShrink: 0 }} />
              <a href="tel:+919902667407">+91 99026 67407</a>
            </li>
            <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', color: 'var(--color-text-secondary)' }}>
              <Clock size={20} className="text-accent" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span>Mon - Sat: 6:00 AM – 9:00 PM<br/>Sun: Check with gym</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="container" style={{ marginTop: 'var(--spacing-xl)', paddingTop: 'var(--spacing-md)', borderTop: '1px solid var(--color-bg-tertiary)', textAlign: 'center', color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>
        &copy; {new Date().getFullYear()} Karnataka Gym || Hubballi. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
