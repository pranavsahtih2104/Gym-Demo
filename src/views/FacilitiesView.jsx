import React, { useState } from 'react';
import { Check, ShieldCheck, Sparkles, Flame, Droplets, Wind, ArrowRight } from 'lucide-react';
import { facilitiesData } from '../data/facilitiesData';

export default function FacilitiesView({ openBookingModal }) {
  const [activeTab, setActiveTab] = useState('zones');

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
          <span className="eyebrow">Facility Architecture</span>
          <h1 style={{ marginBottom: '1.25rem' }}>
            Built for Better Training<span style={{ color: 'var(--accent-primary)' }}>.</span>
          </h1>
          <p className="lead-text" style={{ margin: '0 auto' }}>
            18,000 square feet of curated athletic space in Toronto. Engineered with Olympic-grade platforms, custom indoor turf, and contrast therapy suites.
          </p>
        </div>
      </section>

      {/* 8 Dedicated Zones Showcase */}
      <section className="section">
        <div className="container">
          
          <div className="section-header text-center">
            <span className="eyebrow">Training Zones</span>
            <h2>Eight Specialized Environments<span style={{ color: 'var(--accent-primary)' }}>.</span></h2>
          </div>

          <div className="grid-2" style={{ gap: '3rem', marginBottom: '5rem' }}>
            {facilitiesData.zones.map((zone) => (
              <div 
                key={zone.id}
                className="forge-card"
                style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
              >
                <div className="img-zoom-wrap" style={{ height: '280px' }}>
                  <img src={zone.image} alt={zone.name} />
                </div>

                <div style={{ padding: '1.75rem', flex: '1 1 auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '1.35rem', marginBottom: '0.35rem' }}>{zone.name}</h3>
                    <p style={{ color: 'var(--accent-primary)', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.75rem' }}>
                      {zone.tagline}
                    </p>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                      {zone.description}
                    </p>
                  </div>

                  <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                    <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', display: 'block', marginBottom: '0.5rem' }}>
                      Zone Highlights:
                    </span>
                    <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.4rem' }}>
                      {zone.highlights.map((item, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                          <Check size={14} color="var(--accent-primary)" style={{ flexShrink: 0 }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* =========================================================================
              EQUIPMENT INVENTORY DIRECTORY
              ========================================================================= */}
          <div style={{
            background: 'var(--bg-card-elevated)',
            border: '1px solid var(--border-medium)',
            borderRadius: 'var(--radius-lg)',
            padding: 'clamp(1.5rem, 3vw, 3rem)'
          }}>
            <div className="section-header text-center" style={{ marginBottom: '2.5rem' }}>
              <span className="eyebrow">Hardware Standards</span>
              <h2>Equipment Inventory Directory<span style={{ color: 'var(--accent-primary)' }}>.</span></h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '600px', margin: '0 auto' }}>
                We do not cut corners with residential-grade machines. Everything at FORGE is built to withstand high-volume athletic abuse.
              </p>
            </div>

            <div className="grid-2" style={{ gap: '2rem' }}>
              {facilitiesData.equipmentCategories.map((category, idx) => (
                <div 
                  key={idx}
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1.5rem'
                  }}
                >
                  <h4 style={{ fontSize: '1.15rem', color: 'var(--accent-primary)', marginBottom: '1rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.5rem' }}>
                    {category.category}
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    {category.items.map((item, i) => (
                      <div key={i}>
                        <strong style={{ color: 'var(--text-primary)', fontSize: '0.9rem', display: 'block' }}>
                          {item.name}
                        </strong>
                        <span style={{ color: 'var(--text-muted)', fontSize: '0.8125rem' }}>
                          {item.detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <button onClick={() => openBookingModal()} className="btn btn-primary btn-lg">
                <span>Book a Guided Tour</span>
                <ArrowRight size={18} />
              </button>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
