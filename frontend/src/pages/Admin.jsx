import React, { useState, useEffect } from 'react';
import { User, Phone, CheckCircle, Clock } from 'lucide-react';

const Admin = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would be an authenticated fetch
    // For now, we simulate fetching from our backend
    fetch('http://localhost:5000/api/enquiries')
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => {
        setEnquiries(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching enquiries:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="section-padding">
      <div className="container">
        
        <div style={{ marginBottom: 'var(--spacing-xl)' }}>
          <h1 className="h1-title">Admin <span className="text-accent">Dashboard</span></h1>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.125rem' }}>
            Manage your latest enquiries and leads.
          </p>
        </div>

        <div className="card">
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--color-bg-tertiary)', paddingBottom: '1rem' }}>
            Recent Enquiries
          </h3>

          {loading ? (
            <p>Loading enquiries...</p>
          ) : enquiries.length === 0 ? (
            <p style={{ color: 'var(--color-text-secondary)' }}>No enquiries found. Check back later.</p>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--color-bg-tertiary)', color: 'var(--color-text-secondary)' }}>
                    <th style={{ padding: '1rem', fontWeight: 600 }}>Name</th>
                    <th style={{ padding: '1rem', fontWeight: 600 }}>Contact</th>
                    <th style={{ padding: '1rem', fontWeight: 600 }}>Goal</th>
                    <th style={{ padding: '1rem', fontWeight: 600 }}>Date</th>
                    <th style={{ padding: '1rem', fontWeight: 600 }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {enquiries.map((enq) => (
                    <tr key={enq.id} style={{ borderBottom: '1px solid var(--color-bg-tertiary)' }}>
                      <td style={{ padding: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{ backgroundColor: 'var(--color-bg-tertiary)', padding: '0.5rem', borderRadius: '50%' }}>
                          <User size={16} className="text-accent" />
                        </div>
                        <span style={{ fontWeight: 600 }}>{enq.name}</span>
                      </td>
                      <td style={{ padding: '1rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-secondary)' }}>
                          <Phone size={14} /> {enq.phone}
                        </div>
                      </td>
                      <td style={{ padding: '1rem' }}>{enq.goal}</td>
                      <td style={{ padding: '1rem', color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>
                        {new Date(enq.created_at).toLocaleDateString()}
                      </td>
                      <td style={{ padding: '1rem' }}>
                        <span style={{ 
                          display: 'inline-flex', alignItems: 'center', gap: '0.25rem', padding: '0.25rem 0.5rem', 
                          borderRadius: '12px', fontSize: '0.75rem', fontWeight: 600,
                          backgroundColor: enq.status === 'Pending' ? 'rgba(251, 191, 36, 0.1)' : 'rgba(37, 211, 102, 0.1)',
                          color: enq.status === 'Pending' ? '#fbbf24' : '#25D366'
                        }}>
                          {enq.status === 'Pending' ? <Clock size={12} /> : <CheckCircle size={12} />}
                          {enq.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
