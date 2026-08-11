import React, { useState } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Membership', path: '/membership' },
  ];

  return (
    <header className="header" style={{
      position: 'sticky', top: 0, zIndex: 50, backgroundColor: 'rgba(10, 10, 10, 0.95)',
      backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--color-bg-tertiary)'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
        
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
            Karnataka <span className="text-accent">Gym</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav style={{ display: 'none' }} className="desktop-nav">
          <ul style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.path} style={{ fontWeight: 500, transition: 'color var(--transition-fast)' }}
                      onMouseEnter={(e) => e.target.style.color = 'var(--color-accent-primary)'}
                      onMouseLeave={(e) => e.target.style.color = 'var(--color-text-primary)'}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTAs */}
        <div style={{ display: 'none', gap: '1rem', alignItems: 'center' }} className="desktop-nav">
          <a href="tel:+919902667407" className="btn btn-outline" style={{ padding: '0.5rem 1rem' }}>
            <Phone size={18} /> Call
          </a>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>
            Join Now
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} style={{ display: 'block' }} className="mobile-toggle text-accent">
          {isMobileMenuOpen ? <X size={28} color="var(--color-text-primary)"/> : <Menu size={28} color="var(--color-text-primary)" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div style={{ position: 'absolute', top: '80px', left: 0, width: '100%', backgroundColor: 'var(--color-bg-secondary)', borderBottom: '1px solid var(--color-bg-tertiary)', padding: '1rem 0' }}>
          <ul style={{ display: 'flex', flexDirection: 'column', padding: '0 var(--spacing-sm)' }}>
            {navLinks.map((link) => (
              <li key={link.name} style={{ borderBottom: '1px solid var(--color-bg-tertiary)' }}>
                <Link to={link.path} onClick={toggleMenu} style={{ display: 'block', padding: '1rem 0', fontWeight: 600 }}>
                  {link.name}
                </Link>
              </li>
            ))}
            <li style={{ paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a href="tel:+919902667407" className="btn btn-outline" style={{ width: '100%' }}>
                <Phone size={18} /> Call Now
              </a>
              <Link to="/contact" onClick={toggleMenu} className="btn btn-primary" style={{ width: '100%' }}>
                Join Now
              </Link>
            </li>
          </ul>
        </div>
      )}
      
      {/* Required CSS injected for media queries - typically goes in index.css but keeping simple here */}
      <style>{`
        @media (min-width: 992px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
};

export default Header;
