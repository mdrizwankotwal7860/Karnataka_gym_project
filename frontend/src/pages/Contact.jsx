import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    goal: 'General Fitness',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call for now
    setStatus('Submitting...');
    setTimeout(() => {
      setStatus('Success! We will contact you shortly.');
      setFormData({ name: '', phone: '', goal: 'General Fitness', message: '' });
    }, 1000);
  };

  const whatsappMessage = `Hello Karnataka Gym, I would like to know about your membership options.`;
  const whatsappUrl = `https://wa.me/919902667407?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="section-padding">
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
          <h1 className="h1-title">Contact <span className="text-accent">Us</span></h1>
          <p style={{ color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1.125rem' }}>
            Ready to start your fitness journey? Reach out to us or visit the gym directly.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--spacing-xl)' }}>
          
          {/* Contact Form */}
          <div className="card">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Send an Enquiry</h3>
            
            {status === 'Success! We will contact you shortly.' ? (
              <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-accent-light)', color: 'var(--color-accent-primary)', borderRadius: 'var(--border-radius-md)', border: '1px solid var(--color-accent-primary)', textAlign: 'center' }}>
                {status}
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--border-radius-md)', border: '1px solid var(--color-bg-tertiary)', backgroundColor: 'var(--color-bg-primary)', color: 'var(--color-text-primary)', fontFamily: 'inherit' }}
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    required 
                    style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--border-radius-md)', border: '1px solid var(--color-bg-tertiary)', backgroundColor: 'var(--color-bg-primary)', color: 'var(--color-text-primary)', fontFamily: 'inherit' }}
                  />
                </div>

                <div>
                  <label htmlFor="goal" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Fitness Goal</label>
                  <select 
                    id="goal" 
                    name="goal" 
                    value={formData.goal} 
                    onChange={handleChange} 
                    style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--border-radius-md)', border: '1px solid var(--color-bg-tertiary)', backgroundColor: 'var(--color-bg-primary)', color: 'var(--color-text-primary)', fontFamily: 'inherit' }}
                  >
                    <option>Weight Loss</option>
                    <option>Muscle Building</option>
                    <option>Strength</option>
                    <option>General Fitness</option>
                    <option>Personal Training</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Message (Optional)</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="4" 
                    value={formData.message} 
                    onChange={handleChange} 
                    style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--border-radius-md)', border: '1px solid var(--color-bg-tertiary)', backgroundColor: 'var(--color-bg-primary)', color: 'var(--color-text-primary)', fontFamily: 'inherit', resize: 'vertical' }}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }} disabled={status === 'Submitting...'}>
                  {status === 'Submitting...' ? 'Sending...' : <><Send size={18} /> Submit Enquiry</>}
                </button>
              </form>
            )}
          </div>

          {/* Contact Details */}
          <div>
            <div className="card" style={{ marginBottom: '1.5rem', backgroundColor: 'var(--color-bg-primary)' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Get in Touch</h3>
              
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <MapPin size={24} className="text-accent" style={{ flexShrink: 0 }} />
                  <div>
                    <strong style={{ display: 'block', marginBottom: '0.25rem' }}>Location</strong>
                    <span style={{ color: 'var(--color-text-secondary)' }}>Kalidas Nagar, Hubballi, Karnataka</span>
                  </div>
                </li>
                
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <Phone size={24} className="text-accent" style={{ flexShrink: 0 }} />
                  <div>
                    <strong style={{ display: 'block', marginBottom: '0.25rem' }}>Phone</strong>
                    <a href="tel:+919902667407" style={{ color: 'var(--color-text-secondary)' }}>+91 99026 67407</a>
                  </div>
                </li>

                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <Clock size={24} className="text-accent" style={{ flexShrink: 0 }} />
                  <div>
                    <strong style={{ display: 'block', marginBottom: '0.25rem' }}>Hours</strong>
                    <span style={{ color: 'var(--color-text-secondary)' }}>Mon - Sat: 6:00 AM – 9:00 PM</span>
                  </div>
                </li>
              </ul>
            </div>

            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn" 
              style={{ width: '100%', backgroundColor: '#25D366', color: '#fff', gap: '0.5rem', padding: '1rem' }}
            >
              <MessageCircle size={20} /> Connect on WhatsApp
            </a>
          </div>

        </div>

        {/* Map Embed */}
        <div style={{ marginTop: 'var(--spacing-xl)', borderRadius: 'var(--border-radius-lg)', overflow: 'hidden', border: '1px solid var(--color-bg-tertiary)', height: '400px' }}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15383.332616805047!2d75.10325516977538!3d15.36442839999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d708f117617d%3A0x2a22fa11378087fa!2sKarnataka%20Gym%20%7C%7C%20Hubballi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Karnataka Gym Hubballi Location"
          ></iframe>
        </div>

      </div>
    </div>
  );
};

export default Contact;
