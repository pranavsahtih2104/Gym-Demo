import React from 'react';
import { X, Award, CheckCircle2, Calendar, Clock, Star, ArrowRight, Quote } from 'lucide-react';

export default function TrainerModal({ trainer, isOpen, onClose, onBookWithTrainer }) {
  if (!isOpen || !trainer) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-container" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '720px' }}
      >
        {/* Header */}
        <div className="modal-header">
          <div>
            <span className="badge badge-accent" style={{ marginBottom: '0.3rem' }}>
              {trainer.specialty}
            </span>
            <h3 style={{ fontSize: '1.4rem' }}>{trainer.name}</h3>
          </div>
          <button onClick={onClose} className="modal-close-btn" aria-label="Close modal">
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="modal-body" style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          
          {/* Top Profile Summary */}
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{
              width: '120px',
              height: '120px',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              flexShrink: 0,
              border: '2px solid var(--accent-border)'
            }}>
              <img 
                src={trainer.image} 
                alt={trainer.name} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div style={{ flex: '1 1 260px' }}>
              <h4 style={{ fontSize: '1.3rem', marginBottom: '0.25rem' }}>{trainer.name}</h4>
              <p style={{ color: 'var(--accent-primary)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                {trainer.role} • {trainer.experience}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                <Clock size={15} color="var(--accent-primary)" />
                <span>{trainer.availability}</span>
              </div>
            </div>
          </div>

          {/* Coaching Philosophy Pull-Quote */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(229, 138, 43, 0.08), rgba(18, 20, 24, 0.6))',
            borderLeft: '3px solid var(--accent-primary)',
            padding: '1.25rem 1.5rem',
            borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
            position: 'relative'
          }}>
            <p style={{ 
              fontStyle: 'italic', 
              color: 'var(--text-primary)', 
              fontSize: '0.95rem', 
              lineHeight: 1.6,
              margin: 0
            }}>
              "{trainer.philosophy}"
            </p>
          </div>

          {/* Biography */}
          <div>
            <h4 style={{ fontSize: '1.05rem', marginBottom: '0.5rem' }}>Background & Approach</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
              {trainer.bio}
            </p>
          </div>

          {/* Certifications */}
          <div>
            <h4 style={{ fontSize: '1.05rem', marginBottom: '0.65rem' }}>Certifications & Credentials</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {trainer.certifications.map((cert, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.875rem', color: 'var(--text-primary)' }}>
                  <Award size={16} color="var(--accent-primary)" style={{ flexShrink: 0 }} />
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Areas of Expertise */}
          <div>
            <h4 style={{ fontSize: '1.05rem', marginBottom: '0.65rem' }}>Areas of Expertise</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {trainer.expertise.map((exp, idx) => (
                <span 
                  key={idx} 
                  style={{
                    background: 'var(--bg-card-elevated)',
                    border: '1px solid var(--border-subtle)',
                    padding: '0.4rem 0.8rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.8125rem',
                    color: 'var(--text-secondary)'
                  }}
                >
                  {exp}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '1.25rem',
            borderTop: '1px solid var(--border-subtle)',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
              1-on-1 private coaching & assessments available
            </span>

            <button
              onClick={() => {
                onClose();
                onBookWithTrainer(trainer.name);
              }}
              className="btn btn-primary"
            >
              <span>Book Consultation with {trainer.name.split(' ')[0]}</span>
              <ArrowRight size={16} />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
