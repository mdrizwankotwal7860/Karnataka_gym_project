import React from 'react';
import { Link } from 'react-router-dom';
import strengthImg from '../assets/images/strength.png';
import cardioImg from '../assets/images/cardio.png';
import aboutImg from '../assets/images/about-gym.png';

const Facilities = () => {
  const facilitiesData = [
    {
      title: "Strength & Free Weights Zone",
      desc: "Equipped with heavy dumbbells, squat racks, and premium weightlifting platforms.",
      img: strengthImg
    },
    {
      title: "Cardio Deck",
      desc: "Modern treadmills, ellipticals, and bikes to keep your heart rate up and burn calories.",
      img: cardioImg
    },
    {
      title: "Spacious Training Floor",
      desc: "A wide, ventilated environment ensuring you have enough personal space for functional training.",
      img: aboutImg
    }
  ];

  return (
    <div className="section-padding">
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
          <h1 className="h1-title">Our <span className="text-accent">Facilities</span></h1>
          <p style={{ color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1.125rem' }}>
            Train in an environment built for performance. Our gym floor features everything you need from intense cardio to heavy lifting.
          </p>
        </div>

        <div style={{ display: 'grid', gap: 'var(--spacing-xl)' }}>
          {facilitiesData.map((facility, index) => (
            <div key={index} style={{ 
              display: 'flex', 
              flexDirection: index % 2 !== 0 ? 'row-reverse' : 'row', 
              flexWrap: 'wrap',
              gap: '2rem',
              alignItems: 'center',
              backgroundColor: 'var(--color-bg-secondary)',
              borderRadius: 'var(--border-radius-lg)',
              overflow: 'hidden',
              border: '1px solid var(--color-bg-tertiary)'
            }}>
              
              <div style={{ flex: '1 1 400px' }}>
                <img 
                  src={facility.img} 
                  alt={facility.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: '300px' }}
                />
              </div>
              
              <div style={{ flex: '1 1 300px', padding: '2rem' }}>
                <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{facility.title}</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.125rem', marginBottom: '1.5rem' }}>
                  {facility.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 'var(--spacing-2xl)' }}>
          <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Come See For Yourself</h3>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 2.5rem' }}>
            Book a Gym Tour
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Facilities;
