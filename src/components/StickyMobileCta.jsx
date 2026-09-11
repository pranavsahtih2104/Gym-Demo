import React from 'react';
import { Calendar, Phone } from 'lucide-react';

export default function StickyMobileCta({ openBookingModal }) {
  return (
    <aside 
      aria-label="Quick Actions"
      className="mobile-sticky-cta-wrap"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 850,
        backgroundColor: 'rgba(11, 12, 14, 0.94)',
        backdropFilter: 'blur(16px)',
        borderTop: '1px solid var(--border-medium)',
        padding: '0.75rem 1rem calc(0.75rem + env(safe-area-inset-bottom, 0px))',
        display: 'none',
        alignItems: 'center',
        gap: '0.75rem',
        boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.5)'
      }}
    >
      <a
        href="tel:+10000000000"
        className="btn btn-secondary"
        style={{
          flex: '0 0 auto',
          padding: '0.75rem 1rem',
          borderRadius: 'var(--radius-sm)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          fontSize: '0.85rem'
        }}
        aria-label="Call Forge Athletics"
      >
        <Phone size={16} color="var(--accent-primary)" />
        <span>Call</span>
      </a>

      <button
        onClick={() => openBookingModal()}
        className="btn btn-primary"
        style={{
          flex: '1 1 auto',
          padding: '0.75rem 1.25rem',
          borderRadius: 'var(--radius-sm)',
          fontSize: '0.9rem',
          fontWeight: 700
        }}
      >
        <Calendar size={16} />
        <span>Join / Book a Visit</span>
      </button>

      <style>{`
        @media (max-width: 768px) {
          .mobile-sticky-cta-wrap {
            display: flex !important;
          }
          body {
            padding-bottom: 70px;
          }
        }
      `}</style>
    </aside>
  );
}
