import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  Calendar, 
  Clock, 
  User, 
  Mail, 
  Phone, 
  Target, 
  Award, 
  ArrowRight, 
  ArrowLeft,
  Sparkles,
  Info
} from 'lucide-react';

export default function BookingModal({ isOpen, onClose, preselectedProgram, preselectedTrainer, showToast }) {
  if (!isOpen) return null;

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    goal: preselectedProgram || 'Build Strength',
    experience: 'Beginner / Returning',
    name: '',
    email: '',
    phone: '',
    preferredDate: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
    preferredTime: 'Morning (7:00 AM – 9:00 AM)',
    contactMethod: 'Phone Call',
    preferredTrainer: preselectedTrainer || 'Any Available Head Coach',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const goalOptions = [
    { label: 'Build Strength', desc: 'Barbell, progressive overload & muscle' },
    { label: 'Improve Fitness & Stamina', desc: 'Conditioning, energy & mobility' },
    { label: 'Fat Loss & Conditioning', desc: 'Metabolic training & body composition' },
    { label: 'Athletic Performance', desc: 'Speed, power, jumping & agility' },
    { label: 'General Health & Longevity', desc: 'Joint mobility, posture & health' },
    { label: 'Not Sure Yet', desc: 'Guidance from an expert coach' }
  ];

  const experienceLevels = [
    { label: 'Complete Beginner', desc: 'New to resistance training' },
    { label: 'Returning to Fitness', desc: 'Taken 6+ months off' },
    { label: 'Intermediate Lifter', desc: 'Consistent for 1–3 years' },
    { label: 'Advanced / Athlete', desc: 'Competitive or 4+ years training' }
  ];

  const handleNextStep = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      showToast('Please complete all required contact fields.', 'warning');
      return;
    }

    setIsSubmitted(true);
    showToast('Visit request received! Confirmation generated.', 'success');

    // Trigger subtle celebratory confetti
    try {
      import('canvas-confetti').then((module) => {
        const fire = module.default || module;
        if (typeof fire === 'function') {
          fire({
            particleCount: 60,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#E58A2B', '#F59E0B', '#F4F4F2']
          });
        }
      }).catch(() => {});
    } catch (err) {
      // safe fallback
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setStep(1);
    onClose();
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
            <div className="eyebrow" style={{ marginBottom: '0.2rem' }}>
              <Sparkles size={14} />
              <span>Complimentary Consultation</span>
            </div>
            <h3 style={{ fontSize: '1.4rem' }}>
              {isSubmitted ? 'Visit Request Confirmed' : 'Book Your Studio Visit'}
            </h3>
          </div>
          <button 
            onClick={onClose} 
            className="modal-close-btn"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="modal-body">
          
          {isSubmitted ? (
            /* Confirmation Screen */
            <div style={{ textAlign: 'center', padding: '1rem 0' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'rgba(34, 197, 94, 0.15)',
                border: '2px solid rgba(34, 197, 94, 0.5)',
                color: '#22C55E',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem'
              }}>
                <CheckCircle2 size={36} />
              </div>

              <h3 style={{ fontSize: '1.6rem', marginBottom: '0.5rem' }}>
                We Look Forward to Meeting You, {formData.name.split(' ')[0]}!
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '460px', margin: '0 auto 1.75rem' }}>
                Your private consultation request has been logged. Our concierge team will reach out via {formData.contactMethod} to confirm your appointment.
              </p>

              {/* Appointment Recap Card */}
              <div style={{
                background: 'var(--bg-card-elevated)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '1.25rem',
                textAlign: 'left',
                marginBottom: '1.75rem',
                fontSize: '0.875rem'
              }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
                  <div>
                    <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.75rem' }}>Primary Goal</span>
                    <strong style={{ color: 'var(--accent-primary)' }}>{formData.goal}</strong>
                  </div>
                  <div>
                    <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.75rem' }}>Requested Date</span>
                    <strong style={{ color: 'var(--text-primary)' }}>{formData.preferredDate}</strong>
                  </div>
                  <div>
                    <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.75rem' }}>Time Window</span>
                    <strong style={{ color: 'var(--text-primary)' }}>{formData.preferredTime}</strong>
                  </div>
                  <div>
                    <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.75rem' }}>Coach Assignment</span>
                    <strong style={{ color: 'var(--text-primary)' }}>{formData.preferredTrainer}</strong>
                  </div>
                </div>
              </div>

              {/* Demo Disclaimer */}
              <div className="demo-disclaimer-pill" style={{ margin: '0 auto 1.75rem', maxWidth: '460px' }}>
                <Info size={14} color="var(--accent-primary)" style={{ flexShrink: 0 }} />
                <span>Demo Notice: This is a frontend portfolio demonstration. No real booking was placed.</span>
              </div>

              <button 
                onClick={handleReset}
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                Return to Website
              </button>
            </div>
          ) : (
            /* Multi-step Form */
            <form onSubmit={step === 1 ? handleNextStep : handleSubmit}>
              
              {/* Step indicator */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: step === 1 ? 'var(--accent-primary)' : 'rgba(34, 197, 94, 0.2)',
                    color: step === 1 ? '#0E0F12' : '#22C55E',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {step === 1 ? '1' : '✓'}
                  </span>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: step === 1 ? 'var(--text-primary)' : 'var(--text-muted)' }}>
                    Goals & Experience
                  </span>
                </div>

                <div style={{ height: '1px', flex: '1 1 auto', background: 'var(--border-subtle)', margin: '0 0.75rem' }} />

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: step === 2 ? 'var(--accent-primary)' : 'var(--bg-card-elevated)',
                    color: step === 2 ? '#0E0F12' : 'var(--text-muted)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    2
                  </span>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: step === 2 ? 'var(--text-primary)' : 'var(--text-muted)' }}>
                    Details & Time
                  </span>
                </div>
              </div>

              {step === 1 ? (
                <div>
                  <div className="form-group">
                    <label className="form-label">
                      <span>What is your primary fitness goal?</span>
                    </label>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem' }}>
                      {goalOptions.map((opt) => {
                        const isSelected = formData.goal === opt.label;
                        return (
                          <div
                            key={opt.label}
                            onClick={() => setFormData({ ...formData, goal: opt.label })}
                            style={{
                              padding: '0.85rem 1rem',
                              borderRadius: 'var(--radius-sm)',
                              border: `1px solid ${isSelected ? 'var(--accent-primary)' : 'var(--border-medium)'}`,
                              background: isSelected ? 'var(--accent-subtle)' : 'var(--bg-card-elevated)',
                              cursor: 'pointer',
                              transition: 'all var(--transition-fast)'
                            }}
                          >
                            <div style={{ fontWeight: 600, fontSize: '0.9rem', color: isSelected ? 'var(--accent-primary)' : 'var(--text-primary)', marginBottom: '2px' }}>
                              {opt.label}
                            </div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                              {opt.desc}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="form-group" style={{ marginTop: '1.5rem' }}>
                    <label className="form-label">
                      <span>Your current training experience:</span>
                    </label>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem' }}>
                      {experienceLevels.map((lvl) => {
                        const isSelected = formData.experience === lvl.label;
                        return (
                          <div
                            key={lvl.label}
                            onClick={() => setFormData({ ...formData, experience: lvl.label })}
                            style={{
                              padding: '0.85rem 1rem',
                              borderRadius: 'var(--radius-sm)',
                              border: `1px solid ${isSelected ? 'var(--accent-primary)' : 'var(--border-medium)'}`,
                              background: isSelected ? 'var(--accent-subtle)' : 'var(--bg-card-elevated)',
                              cursor: 'pointer',
                              transition: 'all var(--transition-fast)'
                            }}
                          >
                            <div style={{ fontWeight: 600, fontSize: '0.9rem', color: isSelected ? 'var(--accent-primary)' : 'var(--text-primary)', marginBottom: '2px' }}>
                              {lvl.label}
                            </div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                              {lvl.desc}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'flex-end' }}>
                    <button type="submit" className="btn btn-primary" style={{ minWidth: '160px' }}>
                      <span>Next: Contact Details</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="e.g. Alex Morgan"
                        className="form-control"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Phone Number *</label>
                      <input 
                        type="tel" 
                        required 
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

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">Preferred Date</label>
                      <input 
                        type="date" 
                        className="form-control"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Preferred Time Window</label>
                      <select 
                        className="form-control"
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      >
                        <option value="Early Morning (6:00 AM – 8:00 AM)">Early Morning (6:00 AM – 8:00 AM)</option>
                        <option value="Morning (8:00 AM – 11:00 AM)">Morning (8:00 AM – 11:00 AM)</option>
                        <option value="Midday (11:00 AM – 2:00 PM)">Midday (11:00 AM – 2:00 PM)</option>
                        <option value="Afternoon (2:00 PM – 5:00 PM)">Afternoon (2:00 PM – 5:00 PM)</option>
                        <option value="Evening (5:00 PM – 8:00 PM)">Evening (5:00 PM – 8:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Preferred Contact Method</label>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                      {['Phone Call', 'WhatsApp / SMS', 'Email'].map((method) => (
                        <label 
                          key={method}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                            fontSize: '0.85rem',
                            color: formData.contactMethod === method ? 'var(--text-primary)' : 'var(--text-secondary)',
                            cursor: 'pointer'
                          }}
                        >
                          <input 
                            type="radio" 
                            name="contactMethod"
                            checked={formData.contactMethod === method}
                            onChange={() => setFormData({ ...formData, contactMethod: method })}
                            style={{ accentColor: 'var(--accent-primary)' }}
                          />
                          <span>{method}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Any specific questions or injuries? (Optional)</label>
                    <textarea 
                      placeholder="e.g. Previous shoulder impingement, interested in strength coaching..."
                      className="form-control"
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    />
                  </div>

                  <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <button 
                      type="button" 
                      onClick={() => setStep(1)}
                      className="btn btn-secondary"
                      style={{ padding: '0.75rem 1.25rem' }}
                    >
                      <ArrowLeft size={16} />
                      <span>Back</span>
                    </button>

                    <button 
                      type="submit" 
                      className="btn btn-primary"
                      style={{ padding: '0.75rem 1.75rem' }}
                    >
                      <span>Request a Visit</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              )}

            </form>
          )}

        </div>
      </div>
    </div>
  );
}
