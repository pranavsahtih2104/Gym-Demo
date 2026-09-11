import React from 'react';
import { 
  ShieldCheck, 
  Dumbbell, 
  Award, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  HeartHandshake,
  Activity
} from 'lucide-react';
import { trainersData } from '../data/trainersData';

export default function AboutView({ navigateTo, openBookingModal, openTrainerModal }) {
  return (
    <div>
      {/* Page Header */}
      <section style={{
        paddingTop: '5rem',
        paddingBottom: '4rem',
        backgroundColor: '#090A0D',
        borderBottom: '1px solid var(--border-subtle)',
        position: 'relative'
      }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <span className="eyebrow">Our Philosophy</span>
          <h1 style={{ marginBottom: '1.25rem' }}>
            Built on Standards, Driven by Purpose<span style={{ color: 'var(--accent-primary)' }}>.</span>
          </h1>
          <p className="lead-text" style={{ margin: '0 auto' }}>
            FORGE ATHLETICS was founded to eliminate the noise of modern commercial fitness. We replace gimmicks and hyperbole with evidence-based programming, serious equipment, and genuine human coaching.
          </p>
        </div>
      </section>

      {/* Story & Manifesto Section */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            
            <div className="img-zoom-wrap" style={{ height: '480px', boxShadow: 'var(--shadow-lg)' }}>
              <img 
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80" 
                alt="Forge Athletics weight room" 
              />
            </div>

            <div>
              <span className="eyebrow">The Origin</span>
              <h2 style={{ marginBottom: '1.25rem' }}>
                Why FORGE Was Created<span style={{ color: 'var(--accent-primary)' }}>.</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                In an era where fitness facilities either resemble overcrowded low-cost warehouses or intimidating bodybuilding dungeons, FORGE was designed as a sanctuary for purposeful training.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                We believe that every human being deserves access to pristine barbell equipment, knowledgeable coaches who actually correct technique, and a community that welcomes people of all fitness levels.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                <div style={{ padding: '1rem', background: 'var(--bg-card-elevated)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                  <strong style={{ color: 'var(--accent-primary)', fontSize: '1.5rem', fontFamily: 'var(--font-display)', display: 'block' }}>
                    18,000
                  </strong>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>Square feet of purpose-built athletic space</span>
                </div>
                <div style={{ padding: '1rem', background: 'var(--bg-card-elevated)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                  <strong style={{ color: 'var(--accent-primary)', fontSize: '1.5rem', fontFamily: 'var(--font-display)', display: 'block' }}>
                    1:8 Max
                  </strong>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>Coach-to-member ratio in group classes</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5 Core Pillars Breakdown */}
      <section className="section" style={{ backgroundColor: '#090A0D' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="eyebrow">Guiding Standards</span>
            <h2>The Five FORGE Pillars<span style={{ color: 'var(--accent-primary)' }}>.</span></h2>
          </div>

          <div className="grid-3">
            {[
              {
                icon: Award,
                title: 'Career Coaching',
                desc: 'We do not hire temporary floor monitors. Every coach holds internationally recognized credentials, CSCS certifications, or master kinesiology degrees.'
              },
              {
                icon: ShieldCheck,
                title: 'Competition Equipment',
                desc: 'From Eleiko IPF competition power bars to Woodway curved treadmills and calibrated plates, we never compromise on hardware.'
              },
              {
                icon: Activity,
                title: 'Thoughtful Programming',
                desc: 'Workouts are periodized in 4-to-8 week blocks. Every exercise has a clear biomechanical intent and scalable progression.'
              },
              {
                icon: Users,
                title: 'Inclusive Community',
                desc: 'A supportive, ego-free atmosphere where collegiate athletes train alongside 60-year-old beginners with mutual respect.'
              },
              {
                icon: Sparkles,
                title: 'Hospitality Cleanliness',
                desc: 'Continuous hourly sanitation, medical-grade HEPA air filtration systems, and executive locker suites stocked with Aesop amenities.'
              },
              {
                icon: HeartHandshake,
                title: 'Lifelong Durability',
                desc: 'We train for the long game. Our goal is to keep your joints healthy, posture upright, and strength resilient for decades.'
              }
            ].map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div key={idx} className="forge-card forge-card-glow">
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'var(--accent-subtle)',
                    border: '1px solid var(--accent-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-primary)',
                    marginBottom: '1.25rem'
                  }}>
                    <Icon size={24} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.65rem' }}>{pillar.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Meet Leadership / Coaching Staff */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <span className="eyebrow">Our Team</span>
            <h2>Led by Passionate Coaches<span style={{ color: 'var(--accent-primary)' }}>.</span></h2>
            <p className="lead-text" style={{ margin: '0 auto' }}>
              Meet the certified coaches who oversee our program architecture and guide your day-to-day training.
            </p>
          </div>

          <div className="grid-3" style={{ marginBottom: '3rem' }}>
            {trainersData.slice(0, 3).map((trainer) => (
              <div key={trainer.id} className="forge-card">
                <div className="img-zoom-wrap" style={{ height: '260px', marginBottom: '1.25rem' }}>
                  <img src={trainer.image} alt={trainer.name} />
                </div>
                <div className="badge badge-accent" style={{ marginBottom: '0.5rem' }}>{trainer.specialty}</div>
                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.2rem' }}>{trainer.name}</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>{trainer.role}</p>
                <button 
                  onClick={() => openTrainerModal(trainer)}
                  className="btn btn-secondary btn-sm"
                  style={{ width: '100%' }}
                >
                  View Coach Profile
                </button>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <button onClick={() => navigateTo('trainers')} className="btn btn-outline btn-lg">
              <span>View All 6 Coaching Profiles</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Bottom Visit Callout */}
      <section className="section" style={{ backgroundColor: '#0E1013', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '640px' }}>
          <h2 style={{ marginBottom: '1rem' }}>See the space in person.</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            Book a complimentary 30-minute facility walk-through and consultation with our team.
          </p>
          <button onClick={() => openBookingModal()} className="btn btn-primary btn-lg">
            <span>Book a Studio Visit</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}
