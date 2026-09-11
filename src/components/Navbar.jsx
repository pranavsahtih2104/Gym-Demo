import React, { useState, useEffect } from 'react';
import { 
  Dumbbell, 
  Menu, 
  X, 
  Phone, 
  MapPin, 
  ArrowRight,
  Calendar
} from 'lucide-react';

export default function Navbar({ currentView, navigateTo, openBookingModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'programs', label: 'Programs' },
    { id: 'trainers', label: 'Trainers' },
    { id: 'classes', label: 'Classes' },
    { id: 'membership', label: 'Membership' },
    { id: 'facilities', label: 'Facilities' },
    { id: 'journal', label: 'Journal' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id) => {
    navigateTo(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header 
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 900,
          transition: 'all 0.3s ease',
          backgroundColor: scrolled ? 'rgba(11, 12, 14, 0.95)' : 'rgba(11, 12, 14, 0.75)',
          backdropFilter: 'blur(16px)',
          borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
          height: 'var(--nav-height)',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Brand Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.75rem',
              textAlign: 'left'
            }}
            aria-label="FORGE ATHLETICS Home"
          >
            <div style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #E58A2B, #C26A18)',
              borderRadius: 'var(--radius-sm)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#0E0F12',
              boxShadow: '0 0 16px rgba(229, 138, 43, 0.35)'
            }}>
              <Dumbbell size={22} strokeWidth={2.5} />
            </div>
            <div>
              <span style={{ 
                fontFamily: 'var(--font-display)', 
                fontWeight: 800, 
                fontSize: '1.25rem', 
                letterSpacing: '0.04em',
                color: 'var(--text-primary)',
                display: 'block',
                lineHeight: 1
              }}>
                FORGE<span style={{ color: 'var(--accent-primary)' }}>.</span>
              </span>
              <span style={{ 
                fontSize: '0.6875rem', 
                letterSpacing: '0.18em', 
                textTransform: 'uppercase', 
                color: 'var(--text-muted)',
                fontWeight: 600,
                display: 'block',
                marginTop: '2px'
              }}>
                ATHLETICS
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav 
            style={{ display: 'none' }}
            className="desktop-nav-wrap"
          >
            <ul style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1.75rem', 
              listStyle: 'none' 
            }}>
              {navItems.map((item) => {
                const isActive = currentView === item.id;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavClick(item.id)}
                      style={{
                        fontSize: '0.9rem',
                        fontWeight: isActive ? 700 : 500,
                        color: isActive ? 'var(--accent-primary)' : 'var(--text-secondary)',
                        transition: 'color var(--transition-fast)',
                        position: 'relative',
                        padding: '0.5rem 0'
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) e.currentTarget.style.color = 'var(--text-primary)';
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) e.currentTarget.style.color = 'var(--text-secondary)';
                      }}
                    >
                      {item.label}
                      {isActive && (
                        <span style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: '2px',
                          backgroundColor: 'var(--accent-primary)',
                          borderRadius: '1px'
                        }} />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right Action Area */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            
            {/* Location indicator (Desktop) */}
            <div 
              className="location-pill"
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.8125rem',
                color: 'var(--text-muted)',
                padding: '0.35rem 0.75rem',
                borderRadius: 'var(--radius-full)',
                border: '1px solid var(--border-subtle)',
                background: 'rgba(255, 255, 255, 0.03)'
              }}
            >
              <MapPin size={13} color="var(--accent-primary)" />
              <span>Toronto, ON</span>
            </div>

            {/* Primary Action Button */}
            <button
              onClick={() => openBookingModal()}
              className="btn btn-primary"
              style={{
                padding: '0.65rem 1.35rem',
                fontSize: '0.875rem'
              }}
            >
              <span>Book a Visit</span>
              <ArrowRight size={15} />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="mobile-menu-btn"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '42px',
                height: '42px',
                borderRadius: 'var(--radius-sm)',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-primary)'
              }}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 'var(--nav-height)',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(11, 12, 14, 0.98)',
            backdropFilter: 'blur(20px)',
            zIndex: 890,
            padding: '2rem 1.5rem',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            animation: 'fadeIn 0.2s ease-out'
          }}
        >
          <div>
            <p style={{
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: 'var(--text-muted)',
              marginBottom: '1rem',
              fontWeight: 700
            }}>
              Navigation
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {navItems.map((item) => {
                const isActive = currentView === item.id;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavClick(item.id)}
                      style={{
                        width: '100%',
                        textAlign: 'left',
                        padding: '0.85rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: isActive ? 'var(--accent-subtle)' : 'transparent',
                        color: isActive ? 'var(--accent-primary)' : 'var(--text-primary)',
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.2rem',
                        fontWeight: isActive ? 700 : 600,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                    >
                      <span>{item.label}</span>
                      {isActive && <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-primary)' }} />}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                <MapPin size={16} color="var(--accent-primary)" />
                <span>123 Athletic Avenue, Toronto, ON</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                <Phone size={16} color="var(--accent-primary)" />
                <span>+1 (000) 000-0000</span>
              </div>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openBookingModal();
              }}
              className="btn btn-primary"
              style={{ width: '100%', padding: '1rem' }}
            >
              <Calendar size={18} />
              <span>Book a Free Consultation</span>
            </button>
          </div>
        </div>
      )}

      {/* Embedded CSS for Desktop Nav Display */}
      <style>{`
        @media (min-width: 1024px) {
          .desktop-nav-wrap {
            display: block !important;
          }
          .location-pill {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
