import React from 'react';
import { Star, MapPin, Clock, CheckCircle, Dumbbell, Shield, HeartPulse } from 'lucide-react';
import { Link } from 'react-router-dom';

import heroImage from '../assets/images/about-gym.png';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        padding: 'var(--spacing-2xl) 0',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ maxWidth: '800px' }}>
            <div style={{ display: 'inline-block', padding: '0.25rem 0.75rem', backgroundColor: 'var(--color-accent-light)', color: 'var(--color-accent-primary)', borderRadius: '20px', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1.5rem', border: '1px solid var(--color-accent-primary)' }}>
              Karnataka Gym || Hubballi
            </div>
            <h1 className="h1-title" style={{ marginBottom: '1.5rem' }}>
              Train <span className="text-accent">Strong</span>.<br/>Train <span className="text-accent">Consistently</span>.
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-text-secondary)', marginBottom: '2.5rem', maxWidth: '600px' }}>
              Experience professional fitness training in Kalidas Nagar, Hubballi. With expert guidance and premium equipment, we help you achieve your fitness goals.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
                Start Your Fitness Journey
              </Link>
              <a href="https://maps.google.com/?q=Karnataka+Gym+Kalidas+Nagar+Hubballi" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
                <MapPin size={20}/> Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section style={{ padding: 'var(--spacing-lg) 0', borderBottom: '1px solid var(--color-bg-tertiary)', backgroundColor: 'var(--color-bg-secondary)' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '2rem' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ display: 'flex', color: '#fbbf24' }}>
              {[1,2,3,4,5].map(i => <Star key={i} size={24} fill="currentColor" />)}
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1.25rem' }}>4.9★ Google Rating</div>
              <div style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>Loved by the Hubballi fitness community</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <MapPin size={32} className="text-accent" />
            <div>
              <div style={{ fontWeight: 700 }}>Kalidas Nagar, Hubballi</div>
              <div style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>Premium Fitness Facility</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Clock size={32} className="text-accent" />
            <div>
              <div style={{ fontWeight: 700 }}>Mon - Sat: 6:00 AM – 9:00 PM</div>
              <div style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>Open early, open late</div>
            </div>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
            <h2 className="h2-title">Why Choose <span className="text-accent">Karnataka Gym</span></h2>
            <p style={{ color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
              We provide the perfect environment, equipment, and guidance to help you transform your body and mind.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-lg)' }}>
            
            <div className="card">
              <Shield size={40} className="text-accent" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Experienced Guidance</h3>
              <p style={{ color: 'var(--color-text-secondary)' }}>Our professional trainers provide personalized workout and diet guidance to ensure you reach your goals safely and effectively.</p>
            </div>

            <div className="card">
              <Dumbbell size={40} className="text-accent" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Quality Equipment</h3>
              <p style={{ color: 'var(--color-text-secondary)' }}>Train with top-tier strength and cardio equipment maintained to the highest standards for an optimal workout experience.</p>
            </div>

            <div className="card">
              <CheckCircle size={40} className="text-accent" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Clean & Spacious</h3>
              <p style={{ color: 'var(--color-text-secondary)' }}>Enjoy a highly hygienic, well-ventilated, and spacious training environment that prioritizes your comfort and focus.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'var(--spacing-xl)', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h2 className="h2-title" style={{ marginBottom: '0.5rem' }}>Our <span className="text-accent">Services</span></h2>
              <p style={{ color: 'var(--color-text-secondary)' }}>Comprehensive fitness solutions tailored for everyone.</p>
            </div>
            <Link to="/services" className="btn btn-outline">View All Services</Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--spacing-md)' }}>
            {[
              { title: 'Strength Training', icon: Dumbbell, desc: 'Build muscle and power with our extensive free weights and machines.' },
              { title: 'Cardio Fitness', icon: HeartPulse, desc: 'Improve endurance and cardiovascular health with modern cardio equipment.' },
              { title: 'Personal Training', icon: Star, desc: 'Get 1-on-1 coaching, customized workout plans, and diet guidance.' }
            ].map((service, idx) => (
              <div key={idx} style={{ 
                padding: 'var(--spacing-lg)', 
                backgroundColor: 'var(--color-bg-primary)', 
                borderRadius: 'var(--border-radius-md)',
                border: '1px solid var(--color-bg-tertiary)'
              }}>
                <service.icon size={32} className="text-accent" style={{ marginBottom: '1rem' }} />
                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{service.title}</h4>
                <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>{service.desc}</p>
                <Link to="/contact" className="text-accent" style={{ fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  Enquire Now &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding">
        <div className="container text-center" style={{ maxWidth: '800px' }}>
          <h2 className="h2-title">Ready To Get Started?</h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>
            Visit Karnataka Gym and experience the training environment for yourself. Take the first step towards a healthier you today.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.125rem' }}>
              Enquire About Membership
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
