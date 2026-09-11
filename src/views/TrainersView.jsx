import React, { useState } from 'react';
import { Award, Clock, ArrowRight, Star, ChevronRight, Check } from 'lucide-react';
import { trainersData } from '../data/trainersData';

export default function TrainersView({ openTrainerModal, openBookingModal }) {
  const [filter, setFilter] = useState('All');

  const specialties = ['All', 'Barbell Strength & Powerlifting', 'High-Density Conditioning & Kettlebells', 'Body Recomposition & Habit Coaching', 'Female Biomechanics & Lifelong Strength', 'Speed, Agility & Explosive Power', 'Joint Longevity & Active Recovery'];

  const filteredTrainers = filter === 'All'
    ? trainersData
    : trainersData.filter(t => t.specialty === filter);

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
          <span className="eyebrow">Head Coaching Faculty</span>
          <h1 style={{ marginBottom: '1.25rem' }}>
            Meet the FORGE Coaches<span style={{ color: 'var(--accent-primary)' }}>.</span>
          </h1>
          <p className="lead-text" style={{ margin: '0 auto' }}>
            Every coach at FORGE is a full-time career practitioner holding top-tier certifications. We do not invent unrealistic claims — our coaches are committed to sound biomechanics and lifelong health.
          </p>
        </div>
      </section>

      {/* Main Trainers Grid */}
      <section className="section">
        <div className="container">
          
          {/* Filter Pills */}
          <div style={{
            display: 'flex',
            gap: '0.6rem',
            overflowX: 'auto',
            paddingBottom: '1rem',
            marginBottom: '3rem'
          }}>
            {['All', 'Strength', 'Conditioning', 'Personal Training', 'Women’s Strength', 'Athletics', 'Mobility'].map((tab) => {
              const isSelected = filter === tab || (filter === 'All' && tab === 'All');
              return (
                <button
                  key={tab}
                  onClick={() => {
                    if (tab === 'All') setFilter('All');
                    else if (tab === 'Strength') setFilter('Barbell Strength & Powerlifting');
                    else if (tab === 'Conditioning') setFilter('High-Density Conditioning & Kettlebells');
                    else if (tab === 'Personal Training') setFilter('Body Recomposition & Habit Coaching');
                    else if (tab === 'Women’s Strength') setFilter('Female Biomechanics & Lifelong Strength');
                    else if (tab === 'Athletics') setFilter('Speed, Agility & Explosive Power');
                    else if (tab === 'Mobility') setFilter('Joint Longevity & Active Recovery');
                  }}
                  style={{
                    padding: '0.55rem 1.25rem',
                    borderRadius: 'var(--radius-full)',
                    background: isSelected ? 'var(--accent-primary)' : 'var(--bg-card)',
                    color: isSelected ? '#0E0F12' : 'var(--text-secondary)',
                    fontWeight: isSelected ? 700 : 500,
                    fontSize: '0.85rem',
                    border: `1px solid ${isSelected ? 'var(--accent-primary)' : 'var(--border-subtle)'}`,
                    whiteSpace: 'nowrap',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* 6 Coaches Grid */}
          <div className="grid-3" style={{ gap: '2.5rem' }}>
            {filteredTrainers.map((trainer) => (
              <div 
                key={trainer.id}
                className="forge-card forge-card-glow"
                style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div>
                  <div className="img-zoom-wrap" style={{ height: '300px', marginBottom: '1.25rem' }}>
                    <img src={trainer.image} alt={trainer.name} />
                  </div>

                  <span className="badge badge-accent" style={{ marginBottom: '0.5rem' }}>
                    {trainer.specialty}
                  </span>

                  <h3 style={{ fontSize: '1.4rem', marginBottom: '0.2rem' }}>{trainer.name}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1rem' }}>
                    {trainer.role} • {trainer.experience}
                  </p>

                  {/* Philosophy Quote */}
                  <div style={{
                    background: 'var(--bg-card-elevated)',
                    borderLeft: '2px solid var(--accent-primary)',
                    padding: '0.85rem 1rem',
                    borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
                    marginBottom: '1.25rem'
                  }}>
                    <p style={{ fontStyle: 'italic', fontSize: '0.85rem', color: 'var(--text-primary)', margin: 0, lineHeight: 1.5 }}>
                      "{trainer.philosophy}"
                    </p>
                  </div>

                  {/* Top Credentials */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', display: 'block', marginBottom: '0.4rem' }}>
                      Key Certification:
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      <Award size={15} color="var(--accent-primary)" style={{ flexShrink: 0 }} />
                      <span>{trainer.certifications[0]}</span>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.6rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
                  <button 
                    onClick={() => openTrainerModal(trainer)}
                    className="btn btn-secondary btn-sm"
                    style={{ flex: 1 }}
                  >
                    View Profile
                  </button>
                  <button 
                    onClick={() => openBookingModal(null, trainer.name)}
                    className="btn btn-primary btn-sm"
                    style={{ flex: 1 }}
                  >
                    Book Consultation
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
