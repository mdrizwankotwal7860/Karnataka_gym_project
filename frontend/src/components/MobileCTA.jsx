import React from 'react';
import { Phone, MessageCircle, Map } from 'lucide-react';
import { Link } from 'react-router-dom';

const MobileCTA = () => {
  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      backgroundColor: 'var(--color-bg-primary)',
      borderTop: '1px solid var(--color-bg-tertiary)',
      display: 'flex',
      zIndex: 100,
      padding: '0.5rem 0',
      boxShadow: '0 -4px 10px rgba(0,0,0,0.5)'
    }} className="mobile-cta-bar">
      
      <a href="tel:+919902667407" style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.25rem',
        borderRight: '1px solid var(--color-bg-tertiary)',
        color: 'var(--color-text-primary)'
      }}>
        <Phone size={20} className="text-accent" />
        <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>CALL</span>
      </a>

      <Link to="/contact" style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.25rem',
        borderRight: '1px solid var(--color-bg-tertiary)',
        color: 'var(--color-text-primary)'
      }}>
        <MessageCircle size={20} className="text-accent" />
        <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>ENQUIRE</span>
      </Link>

      <a href="https://maps.google.com/?q=Karnataka+Gym+Kalidas+Nagar+Hubballi" target="_blank" rel="noopener noreferrer" style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.25rem',
        color: 'var(--color-text-primary)'
      }}>
        <Map size={20} className="text-accent" />
        <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>DIRECTIONS</span>
      </a>

      <style>{`
        @media (min-width: 992px) {
          .mobile-cta-bar { display: none !important; }
        }
      `}</style>
    </div>
  );
};

export default MobileCTA;
