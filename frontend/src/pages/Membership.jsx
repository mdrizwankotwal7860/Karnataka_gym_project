import React from 'react';
import { Check, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const Membership = () => {
  return (
    <div className="section-padding">
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
          <h1 className="h1-title">Membership <span className="text-accent">Plans</span></h1>
          <p style={{ color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1.125rem' }}>
            Choose a plan that fits your goals. We offer flexible options for individuals looking for general gym access or specialized personal training.
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'var(--spacing-xl)' }}>
          <div style={{ padding: '1rem', backgroundColor: 'var(--color-bg-secondary)', border: '1px solid var(--color-bg-tertiary)', borderRadius: 'var(--border-radius-md)', display: 'inline-flex', alignItems: 'center', gap: '0.75rem', color: '#fbbf24' }}>
            <Info size={20} />
            <span style={{ color: 'var(--color-text-primary)' }}>Please contact the gym directly for the most up-to-date pricing.</span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-lg)', maxWidth: '900px', margin: '0 auto' }}>
          
          {/* General Membership Card */}
          <div className="card" style={{ borderTop: '4px solid var(--color-bg-tertiary)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>General Access</h3>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>For experienced individuals who want access to our premium facilities.</p>
            
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              {['Access to Strength Area', 'Access to Cardio Deck', 'Basic floor guidance', 'Locker facilities'].map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                  <Check size={18} className="text-accent" /> {item}
                </li>
              ))}
            </ul>
            
            <Link to="/contact" className="btn btn-outline" style={{ width: '100%' }}>
              Enquire Pricing
            </Link>
          </div>

          {/* Personal Training Card */}
          <div className="card" style={{ borderTop: '4px solid var(--color-accent-primary)', position: 'relative', transform: 'scale(1.02)' }}>
            <div style={{ position: 'absolute', top: '-12px', right: '20px', backgroundColor: 'var(--color-accent-primary)', color: '#000', padding: '2px 10px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 800 }}>RECOMMENDED</div>
            
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Personal Training</h3>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>Get 1-on-1 expert coaching and diet guidance for maximum results.</p>
            
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              {['Everything in General Access', '1-on-1 dedicated trainer', 'Customized workout plan', 'Customized diet plan', 'Weekly progress tracking'].map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                  <Check size={18} className="text-accent" /> {item}
                </li>
              ))}
            </ul>
            
            <Link to="/contact" className="btn btn-primary" style={{ width: '100%' }}>
              Enquire Pricing
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Membership;
