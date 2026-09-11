import React, { useState } from 'react';
import { 
  Dumbbell, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck 
} from 'lucide-react';

export default function Footer({ navigateTo, openBookingModal, showToast }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address.', 'warning');
      return;
    }
    setSubscribed(true);
    showToast('Subscribed to the FORGE Editorial Journal.', 'success');
  };

  const handleLink = (viewId) => {
    navigateTo(viewId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ 
      backgroundColor: '#07080A', 
      borderTop: '1px solid var(--border-subtle)',
      paddingTop: '5rem',
      paddingBottom: '3rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container">
        
        {/* Top Newsletter & Brand Banner */}
        <div style={{
          background: 'linear-gradient(180deg, rgba(22, 24, 30, 0.9), rgba(14, 16, 20, 0.95))',
          border: '1px solid var(--border-medium)',
          borderRadius: 'var(--radius-lg)',
          padding: 'clamp(2rem, 4vw, 3.5rem)',
          marginBottom: '4.5rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2.5rem',
          alignItems: 'center',
          boxShadow: 'var(--shadow-md)'
        }}>
          <div>
            <span className="eyebrow">
              The Forge Journal
            </span>
            <h3 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', marginBottom: '0.75rem' }}>
              Evidence-based training insights.
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '480px' }}>
              Receive our bi-weekly editorial dispatch on biomechanics, nutrition principles, and program design. Zero spam.
            </p>
          </div>

          <div>
            {subscribed ? (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                background: 'rgba(34, 197, 94, 0.1)',
                border: '1px solid rgba(34, 197, 94, 0.3)',
                padding: '1rem 1.25rem',
                borderRadius: 'var(--radius-sm)',
                color: '#22C55E'
              }}>
                <CheckCircle2 size={20} />
                <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>
                  You are subscribed! Welcome to the FORGE Journal.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <input 
                  type="email"
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  style={{ flex: '1 1 240px' }}
                />
                <button type="submit" className="btn btn-primary" style={{ flexShrink: 0 }}>
                  <span>Subscribe</span>
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
            <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.6rem' }}>
              By subscribing, you agree to our demo newsletter dispatch terms.
            </span>
          </div>
        </div>

        {/* Main Footer Directory Columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '3rem',
          marginBottom: '4rem'
        }}>
          
          {/* Column 1: Brand Info */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{
                width: '36px',
                height: '36px',
                background: 'var(--accent-primary)',
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#0E0F12'
              }}>
                <Dumbbell size={20} strokeWidth={2.5} />
              </div>
              <span style={{ 
                fontFamily: 'var(--font-display)', 
                fontWeight: 800, 
                fontSize: '1.25rem', 
                letterSpacing: '0.04em'
              }}>
                FORGE<span style={{ color: 'var(--accent-primary)' }}>.</span>
              </span>
            </div>
            
            <p style={{ 
              fontSize: '0.9rem', 
              color: 'var(--text-secondary)', 
              lineHeight: 1.6,
              marginBottom: '1.5rem' 
            }}>
              "Build strength. Build yourself."
              <br /><br />
              A modern athletic club engineered for purposeful training, expert coaching, and enduring community.
            </p>

            <button 
              onClick={() => openBookingModal()}
              className="btn btn-secondary btn-sm"
              style={{ width: '100%' }}
            >
              Request a Free Consultation
            </button>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-primary)', marginBottom: '1.25rem' }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem', fontSize: '0.9rem' }}>
              {['About', 'Programs', 'Trainers', 'Classes', 'Membership', 'Facilities', 'Journal', 'FAQ', 'Contact'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => handleLink(item.toLowerCase())}
                    style={{ color: 'var(--text-secondary)', transition: 'color var(--transition-fast)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-primary)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Training Disciplines */}
          <div>
            <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-primary)', marginBottom: '1.25rem' }}>
              Training Disciplines
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem', fontSize: '0.9rem' }}>
              <li>
                <button 
                  onClick={() => handleLink('programs')}
                  style={{ color: 'var(--text-secondary)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-primary)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  Strength Foundations
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLink('programs')}
                  style={{ color: 'var(--text-secondary)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-primary)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  1-on-1 Personal Training
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLink('programs')}
                  style={{ color: 'var(--text-secondary)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-primary)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  Functional Fitness
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLink('programs')}
                  style={{ color: 'var(--text-secondary)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-primary)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  Fat Loss & Conditioning
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLink('programs')}
                  style={{ color: 'var(--text-secondary)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-primary)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  8-Week Beginner Blueprint
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLink('programs')}
                  style={{ color: 'var(--text-secondary)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-primary)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  Athletic Performance
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Hours */}
          <div>
            <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-primary)', marginBottom: '1.25rem' }}>
              Club Location & Hours
            </h4>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '0.6rem' }}>
                <MapPin size={17} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>123 Athletic Avenue<br />Toronto, ON, Canada</span>
              </div>
              <div style={{ display: 'flex', gap: '0.6rem' }}>
                <Phone size={16} color="var(--accent-primary)" style={{ flexShrink: 0 }} />
                <span>+1 (000) 000-0000</span>
              </div>
              <div style={{ display: 'flex', gap: '0.6rem' }}>
                <Mail size={16} color="var(--accent-primary)" style={{ flexShrink: 0 }} />
                <span>hello@forgeathletics.example</span>
              </div>
            </div>

            <div style={{ 
              background: 'rgba(255, 255, 255, 0.03)', 
              border: '1px solid var(--border-subtle)', 
              borderRadius: 'var(--radius-sm)',
              padding: '0.85rem',
              fontSize: '0.8125rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-primary)', fontWeight: 600, marginBottom: '0.35rem' }}>
                <Clock size={14} color="var(--accent-primary)" />
                <span>Opening Hours</span>
              </div>
              <p style={{ color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
                Mon–Fri: 5:30 AM – 10:00 PM<br />
                Saturday: 7:00 AM – 8:00 PM<br />
                Sunday: 8:00 AM – 6:00 PM
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Demo Disclaimer */}
        <div style={{
          paddingTop: '2rem',
          borderTop: '1px solid var(--border-subtle)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.25rem',
          fontSize: '0.8125rem',
          color: 'var(--text-muted)'
        }}>
          <div>
            <p style={{ margin: 0 }}>
              © {new Date().getFullYear()} FORGE ATHLETICS INC. All rights reserved. Fictional portfolio demonstration.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <button onClick={() => showToast('Demo Notice: Privacy Policy terms simulated.', 'neutral')} style={{ color: 'var(--text-muted)' }}>
              Privacy Policy
            </button>
            <button onClick={() => showToast('Demo Notice: Terms of Service simulated.', 'neutral')} style={{ color: 'var(--text-muted)' }}>
              Terms of Service
            </button>
            <button onClick={() => showToast('Demo Notice: Accessible design conforming to WCAG 2.1 AA.', 'neutral')} style={{ color: 'var(--text-muted)' }}>
              Accessibility
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
