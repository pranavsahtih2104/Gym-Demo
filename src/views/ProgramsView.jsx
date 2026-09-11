import React, { useState } from 'react';
import { Check, ArrowRight, ChevronRight, Filter, Clock, Calendar } from 'lucide-react';
import { programsData } from '../data/programsData';

export default function ProgramsView({ openProgramModal, openBookingModal }) {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Resistance Training', 'Private Coaching', 'Movement & Capacity', 'Metabolic Conditioning', 'Starter Program', 'Sports & Power'];

  const filteredPrograms = filter === 'All' 
    ? programsData 
    : programsData.filter(p => p.category === filter);

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
          <span className="eyebrow">Training Pathways</span>
          <h1 style={{ marginBottom: '1.25rem' }}>
            Structured Programs for Measurable Progress<span style={{ color: 'var(--accent-primary)' }}>.</span>
          </h1>
          <p className="lead-text" style={{ margin: '0 auto' }}>
            Every program at FORGE is grounded in exercise science, structured progressive overload, and attentive coaching. Select a pathway below to view the detailed 8-week curriculum.
          </p>
        </div>
      </section>

      {/* Main Filter & Programs Grid */}
      <section className="section">
        <div className="container">
          
          {/* Category Filter Pills */}
          <div style={{
            display: 'flex',
            gap: '0.6rem',
            overflowX: 'auto',
            paddingBottom: '1rem',
            marginBottom: '3rem',
            justifyContent: 'flex-start'
          }}>
            {categories.map((cat) => {
              const isSelected = filter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
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
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Programs Grid */}
          <div className="grid-2" style={{ gap: '2.5rem' }}>
            {filteredPrograms.map((prog) => (
              <div 
                key={prog.id}
                className="forge-card forge-card-glow"
                style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div>
                  <div className="img-zoom-wrap" style={{ height: '240px', marginBottom: '1.5rem' }}>
                    <img src={prog.image} alt={prog.title} />
                    <span 
                      className="badge badge-accent"
                      style={{ position: 'absolute', top: '14px', left: '14px' }}
                    >
                      {prog.category}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{prog.title}</h3>
                  <p style={{ color: 'var(--accent-primary)', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.75rem' }}>
                    {prog.tagline}
                  </p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {prog.shortDescription}
                  </p>

                  {/* Highlights Bar */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '0.5rem',
                    background: 'var(--bg-card-elevated)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '0.75rem 1rem',
                    marginBottom: '1.5rem',
                    fontSize: '0.8125rem'
                  }}>
                    <div>
                      <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.7rem' }}>Session</span>
                      <strong style={{ color: 'var(--text-primary)' }}>{prog.duration}</strong>
                    </div>
                    <div>
                      <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.7rem' }}>Frequency</span>
                      <strong style={{ color: 'var(--text-primary)' }}>{prog.frequency}</strong>
                    </div>
                    <div>
                      <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.7rem' }}>Intensity</span>
                      <strong style={{ color: 'var(--accent-primary)' }}>{prog.intensity.split('/')[0]}</strong>
                    </div>
                  </div>

                  {/* Target Audience Pill */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>
                      Who It's For:
                    </span>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: 0 }}>
                      {prog.targetAudience}
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)', flexWrap: 'wrap' }}>
                  <button 
                    onClick={() => openProgramModal(prog)}
                    className="btn btn-secondary"
                    style={{ flex: '1 1 180px' }}
                  >
                    <span>View Curriculum Syllabus</span>
                    <ChevronRight size={16} />
                  </button>
                  <button 
                    onClick={() => openBookingModal(prog.title)}
                    className="btn btn-primary"
                    style={{ flex: '1 1 180px' }}
                  >
                    <span>Book Consultation</span>
                    <ArrowRight size={16} />
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
