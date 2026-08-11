import React from 'react';
import { Dumbbell, HeartPulse, Apple, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const servicesList = [
    {
      title: "Strength & Conditioning",
      icon: Dumbbell,
      desc: "Comprehensive weight training focused on building muscle mass, improving bone density, and increasing overall strength. Access to free weights, squat racks, and specialized machines.",
      audience: "Great for muscle building and strength goals."
    },
    {
      title: "Cardio & Endurance",
      icon: HeartPulse,
      desc: "Boost your heart health and stamina. Our cardio deck includes modern treadmills, ellipticals, and stationary bikes perfect for warmups or intense endurance sessions.",
      audience: "Great for weight loss and general fitness."
    },
    {
      title: "Personal Training",
      icon: Star,
      desc: "One-on-one expert guidance from our certified trainers. We create personalized workout plans tailored exactly to your body type, fitness level, and specific goals.",
      audience: "Great for beginners and specific athletic goals."
    },
    {
      title: "Diet & Nutrition Guidance",
      icon: Apple,
      desc: "Training is only half the battle. Our trainers provide customized dietary advice to ensure your nutrition aligns perfectly with your training efforts.",
      audience: "Essential for sustainable transformations."
    }
  ];

  return (
    <div className="section-padding">
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
          <h1 className="h1-title">Expert <span className="text-accent">Services</span></h1>
          <p style={{ color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1.125rem' }}>
            We provide everything you need to reach your fitness goals. Our services are designed for maximum results in a supportive environment.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-lg)' }}>
          {servicesList.map((service, index) => (
            <div key={index} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '1rem', backgroundColor: 'var(--color-bg-tertiary)', display: 'inline-block', borderRadius: '50%', marginBottom: '1.5rem', alignSelf: 'flex-start' }}>
                <service.icon size={32} className="text-accent" />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{service.title}</h3>
              <p style={{ color: 'var(--color-text-secondary)', flex: 1, marginBottom: '1.5rem' }}>
                {service.desc}
              </p>
              <div style={{ padding: '0.75rem', backgroundColor: 'var(--color-bg-primary)', borderRadius: 'var(--border-radius-sm)', marginBottom: '1.5rem', borderLeft: '3px solid var(--color-accent-primary)', fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
                <strong>Best For:</strong> {service.audience}
              </div>
              <Link to="/contact" style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-primary)' }}>
                Enquire Now <ArrowRight size={18} className="text-accent" />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Services;
