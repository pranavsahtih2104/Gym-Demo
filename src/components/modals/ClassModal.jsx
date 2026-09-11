import React, { useState } from 'react';
import { X, Clock, MapPin, User, CheckCircle2, ArrowRight, Shield, AlertCircle } from 'lucide-react';

export default function ClassModal({ classItem, isOpen, onClose, showToast }) {
  if (!isOpen || !classItem) return null;

  const [reserved, setReserved] = useState(false);

  const handleReserveSpot = () => {
    setReserved(true);
    showToast(`Spot reserved for ${classItem.title} (${classItem.day} ${classItem.time})!`, 'success');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-container" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '640px' }}
      >
        {/* Header */}
        <div className="modal-header">
          <div>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.3rem' }}>
              <span className="badge badge-accent">{classItem.category}</span>
              <span className="badge badge-neutral">{classItem.difficulty}</span>
            </div>
            <h3 style={{ fontSize: '1.4rem' }}>{classItem.title}</h3>
          </div>
          <button onClick={onClose} className="modal-close-btn" aria-label="Close modal">
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="modal-body" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* Top banner info */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
            gap: '0.75rem',
            background: 'var(--bg-card-elevated)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: '1rem'
          }}>
            <div>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem', display: 'block' }}>Day & Time</span>
              <strong style={{ color: 'var(--text-primary)', fontSize: '0.875rem' }}>{classItem.day}, {classItem.time}</strong>
            </div>
            <div>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem', display: 'block' }}>Duration</span>
              <strong style={{ color: 'var(--text-primary)', fontSize: '0.875rem' }}>{classItem.duration}</strong>
            </div>
            <div>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem', display: 'block' }}>Coach</span>
              <strong style={{ color: 'var(--accent-primary)', fontSize: '0.875rem' }}>{classItem.trainer}</strong>
            </div>
            <div>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem', display: 'block' }}>Studio Room</span>
              <strong style={{ color: 'var(--text-primary)', fontSize: '0.875rem' }}>{classItem.room}</strong>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 style={{ fontSize: '1.05rem', marginBottom: '0.4rem' }}>Class Overview</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
              {classItem.description}
            </p>
          </div>

          {/* What to Expect */}
          <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-subtle)', padding: '1rem', borderRadius: 'var(--radius-sm)' }}>
            <h4 style={{ fontSize: '0.95rem', marginBottom: '0.35rem', color: 'var(--text-primary)' }}>What to Expect</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', margin: 0, lineHeight: 1.5 }}>
              {classItem.whatToExpect}
            </p>
          </div>

          {/* What to Bring */}
          <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-subtle)', padding: '1rem', borderRadius: 'var(--radius-sm)' }}>
            <h4 style={{ fontSize: '0.95rem', marginBottom: '0.35rem', color: 'var(--text-primary)' }}>What to Bring</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', margin: 0, lineHeight: 1.5 }}>
              {classItem.whatToBring}
            </p>
          </div>

          {/* Booking Action */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '1.25rem',
            borderTop: '1px solid var(--border-subtle)',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            <div>
              <span style={{ fontSize: '0.8125rem', color: reserved ? '#22C55E' : 'var(--text-secondary)', fontWeight: 600 }}>
                {reserved ? 'Spot Confirmed!' : `${classItem.spotsLeft} spots currently available`}
              </span>
            </div>

            {reserved ? (
              <button 
                onClick={onClose}
                className="btn btn-secondary"
              >
                <CheckCircle2 size={16} color="#22C55E" />
                <span>Close Window</span>
              </button>
            ) : (
              <button
                onClick={handleReserveSpot}
                className="btn btn-primary"
              >
                <span>Reserve Demo Spot</span>
                <ArrowRight size={16} />
              </button>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
