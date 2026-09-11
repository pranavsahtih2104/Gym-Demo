import React from 'react';
import { X, Check, Clock, Calendar, Zap, ArrowRight, ShieldCheck } from 'lucide-react';

export default function ProgramModal({ program, isOpen, onClose, onBookConsultation }) {
  if (!isOpen || !program) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-container" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '780px' }}
      >
        {/* Header */}
        <div className="modal-header">
          <div>
            <span className="badge badge-accent" style={{ marginBottom: '0.4rem' }}>
              {program.category}
            </span>
            <h3 style={{ fontSize: '1.5rem' }}>{program.title}</h3>
          </div>
          <button onClick={onClose} className="modal-close-btn" aria-label="Close modal">
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body" style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          
          {/* Hero Media Preview */}
          <div style={{
            position: 'relative',
            height: '240px',
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden'
          }}>
            <img 
              src={program.image} 
              alt={program.title} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(11, 12, 14, 0.9) 0%, rgba(11, 12, 14, 0.2) 60%)',
              display: 'flex',
              alignItems: 'flex-end',
              padding: '1.25rem'
            }}>
              <p style={{ color: '#F4F4F2', fontSize: '1.05rem', fontWeight: 500, margin: 0 }}>
                {program.tagline}
              </p>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '0.75rem',
            background: 'var(--bg-card-elevated)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: '1rem'
          }}>
            <div>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem', display: 'block' }}>Format</span>
              <strong style={{ color: 'var(--text-primary)', fontSize: '0.9rem' }}>{program.duration}</strong>
            </div>
            <div>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem', display: 'block' }}>Frequency</span>
              <strong style={{ color: 'var(--text-primary)', fontSize: '0.9rem' }}>{program.frequency}</strong>
            </div>
            <div>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem', display: 'block' }}>Intensity</span>
              <strong style={{ color: 'var(--accent-primary)', fontSize: '0.9rem' }}>{program.intensity}</strong>
            </div>
          </div>

          {/* Overview & Target Audience */}
          <div>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Program Overview</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1rem' }}>
              {program.shortDescription}
            </p>
            <div style={{ background: 'rgba(229, 138, 43, 0.08)', border: '1px solid var(--accent-border)', padding: '0.85rem 1rem', borderRadius: 'var(--radius-sm)' }}>
              <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-primary)', fontWeight: 700, display: 'block', marginBottom: '2px' }}>
                Ideal Participant Profile:
              </span>
              <p style={{ color: 'var(--text-primary)', fontSize: '0.875rem', margin: 0 }}>
                {program.targetAudience}
              </p>
            </div>
          </div>

          {/* 8-Week / Stage Curriculum Roadmap */}
          {program.curriculum && (
            <div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.85rem' }}>Curriculum & Progression Architecture</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {program.curriculum.map((item, idx) => (
                  <div 
                    key={idx}
                    style={{
                      display: 'flex',
                      gap: '1rem',
                      background: 'var(--bg-card-elevated)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '0.85rem 1rem'
                    }}
                  >
                    <div style={{
                      minWidth: '85px',
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      color: 'var(--accent-primary)',
                      lineHeight: 1.3
                    }}>
                      {item.week}
                    </div>
                    <div>
                      <div style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '2px' }}>
                        {item.focus}
                      </div>
                      <div style={{ color: 'var(--text-secondary)', fontSize: '0.8125rem', lineHeight: 1.4 }}>
                        {item.detail}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Standards / Inclusions */}
          <div>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>Key Inclusions & Equipment</h4>
            <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.6rem' }}>
              {program.features.map((feat, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  <Check size={16} color="var(--accent-primary)" style={{ flexShrink: 0 }} />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Bar */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            paddingTop: '1.25rem',
            borderTop: '1px solid var(--border-subtle)',
            flexWrap: 'wrap'
          }}>
            <div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>Zero obligation consultation</span>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 600 }}>Get customized advice from our coaches</span>
            </div>

            <button 
              onClick={() => {
                onClose();
                onBookConsultation(program.title);
              }}
              className="btn btn-primary"
            >
              <span>Book Consultation for this Program</span>
              <ArrowRight size={16} />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
