import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  Car, 
  Train, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function ContactView({ openBookingModal, showToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Membership Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showToast('Please complete all required fields.', 'warning');
      return;
    }
    setSubmitted(true);
    showToast('Inquiry sent! A FORGE concierge will reply shortly.', 'success');
  };

  return (
    <div>
      {/* Page Header */}
      <section style={{
        paddingTop: '5rem',
        paddingBottom: '4rem',
        backgroundColor: '#090A0D',
        borderBottom: '1px solid var(--border-subtle)'
      }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <span className="eyebrow">Studio Location & Concierge</span>
          <h1 style={{ marginBottom: '1.25rem' }}>
            Get in Touch with FORGE<span style={{ color: 'var(--accent-primary)' }}>.</span>
          </h1>
          <p className="lead-text" style={{ margin: '0 auto' }}>
            Whether you have questions regarding membership tiers, private coaching availability, or want to arrange a facility walkthrough, we are here to assist.
          </p>
        </div>
      </section>

      {/* Main Grid: Contact Form + Location Details */}
      <section className="section">
        <div className="container">
          
          <div className="grid-2" style={{ gap: '3.5rem', alignItems: 'flex-start' }}>
            
            {/* Contact Form Card */}
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-medium)',
              borderRadius: 'var(--radius-lg)',
              padding: 'clamp(1.5rem, 3vw, 2.5rem)',
              boxShadow: 'var(--shadow-md)'
            }}>
              <span className="eyebrow" style={{ marginBottom: '0.4rem' }}>Message Concierge</span>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '1.5rem' }}>Send Us an Inquiry</h3>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'rgba(34, 197, 94, 0.15)',
                    border: '1px solid rgba(34, 197, 94, 0.4)',
                    color: '#22C55E',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.25rem'
                  }}>
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>Thank you, {formData.name.split(' ')[0]}!</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                    Your message has been delivered to our concierge team. We respond to all inquiries within 4 business hours.
                  </p>
                  <button 
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', subject: 'General Membership Inquiry', message: '' });
                    }}
                    className="btn btn-secondary btn-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">Name *</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="Alex Morgan"
                        className="form-control"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Phone</label>
                      <input 
                        type="tel" 
                        placeholder="(416) 000-0000"
                        className="form-control"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="alex@example.com"
                      className="form-control"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Inquiry Topic</label>
                    <select 
                      className="form-control"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    >
                      <option value="General Membership Inquiry">General Membership Inquiry</option>
                      <option value="Private 1-on-1 Coaching">Private 1-on-1 Coaching</option>
                      <option value="8-Week Beginner Blueprint">8-Week Beginner Blueprint</option>
                      <option value="Facility Tour Booking">Facility Tour Booking</option>
                      <option value="Corporate Partnerships">Corporate Partnerships</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message *</label>
                    <textarea 
                      required
                      placeholder="How can our coaching team assist you?"
                      className="form-control"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.9rem', marginTop: '0.5rem' }}>
                    <Send size={16} />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>

            {/* Studio Information & Map Card */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              
              {/* Info Block */}
              <div style={{
                background: 'var(--bg-card-elevated)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-lg)',
                padding: '2rem'
              }}>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1.25rem' }}>Studio Details</h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <MapPin size={20} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ color: 'var(--text-primary)', display: 'block', fontSize: '0.95rem' }}>Studio Address</strong>
                      <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                        FORGE ATHLETICS<br />
                        123 Athletic Avenue<br />
                        Toronto, ON, Canada
                      </span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <Phone size={20} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ color: 'var(--text-primary)', display: 'block', fontSize: '0.95rem' }}>Phone & Concierge</strong>
                      <a href="tel:+10000000000" style={{ color: 'var(--accent-primary)', fontSize: '0.9rem' }}>
                        +1 (000) 000-0000
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <Mail size={20} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ color: 'var(--text-primary)', display: 'block', fontSize: '0.95rem' }}>Direct Email</strong>
                      <a href="mailto:hello@forgeathletics.example" style={{ color: 'var(--accent-primary)', fontSize: '0.9rem' }}>
                        hello@forgeathletics.example
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <Clock size={20} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ color: 'var(--text-primary)', display: 'block', fontSize: '0.95rem' }}>Operating Hours</strong>
                      <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                        Monday–Friday: 5:30 AM – 10:00 PM<br />
                        Saturday: 7:00 AM – 8:00 PM<br />
                        Sunday: 8:00 AM – 6:00 PM
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Transit & Parking Details */}
              <div style={{
                background: 'var(--bg-card-elevated)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.75rem'
              }}>
                <h4 style={{ fontSize: '1.15rem', marginBottom: '1rem' }}>Directions & Parking</h4>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <Car size={18} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                      <strong>Dedicated Member Parking:</strong> Heated underground parking on Level P1 with 2 hours complimentary validation.
                    </span>
                  </div>

                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <Train size={18} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                      <strong>Public Transit:</strong> 3-minute walk from Athletic Avenue Subway Station (Line 1).
                    </span>
                  </div>
                </div>
              </div>

              {/* Styled Interactive Map Card Placeholder */}
              <div style={{
                height: '220px',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                position: 'relative',
                border: '1px solid var(--border-medium)',
                background: '#1A1D24'
              }}>
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1000&q=80" 
                  alt="Toronto Athletic Avenue Map" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.5) contrast(1.2)' }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  background: 'rgba(11, 12, 14, 0.45)'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'var(--accent-primary)',
                    color: '#0E0F12',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 20px rgba(229, 138, 43, 0.6)'
                  }}>
                    <MapPin size={22} strokeWidth={2.5} />
                  </div>
                  <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#FFFFFF', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
                    FORGE ATHLETICS • Toronto, ON
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
