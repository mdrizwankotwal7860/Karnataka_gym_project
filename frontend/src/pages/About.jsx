import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <section className="section-padding">
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-xl)', alignItems: 'center' }}>
          
          <div style={{ flex: '1 1 500px' }}>
            <h1 className="h1-title" style={{ marginBottom: '1.5rem' }}>About <span className="text-accent">Karnataka Gym</span></h1>
            <p style={{ fontSize: '1.125rem', color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>
              Welcome to Hubballi’s premier fitness destination located in Kalidas Nagar. We believe that true strength is built through consistency, expert guidance, and an environment that demands your best.
            </p>
            <p style={{ fontSize: '1.125rem', color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>
              Our facility is designed to support everyone—from absolute beginners to advanced athletes. Whether you are looking for general fitness, weight loss, or intense muscle building, we have the right equipment and the right trainers to support your journey.
            </p>
            
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              {[
                'Spacious and highly hygienic training environment',
                'Expert trainers offering personalized workout and diet guidance',
                'High-quality, well-maintained strength and cardio equipment',
                'Dedicated support for men and women'
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 500 }}>
                  <CheckCircle size={24} className="text-accent" style={{ flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </ul>

            <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 2rem' }}>
              Join Our Community
            </Link>
          </div>

          <div style={{ flex: '1 1 400px' }}>
            <img 
              src="/images/about-gym.png" 
              alt="Karnataka Gym Training Floor" 
              style={{ width: '100%', borderRadius: 'var(--border-radius-lg)', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', border: '1px solid var(--color-bg-tertiary)' }}
            />
          </div>

        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
        <div className="container text-center" style={{ maxWidth: '800px' }}>
          <h2 className="h2-title">Our Fitness <span className="text-accent">Philosophy</span></h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-text-secondary)' }}>
            Fitness is not a destination; it is a way of life. We focus on teaching the fundamentals of movement, proper nutrition, and building a disciplined mindset that extends beyond the gym walls. When you train with us, you are training for life.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
