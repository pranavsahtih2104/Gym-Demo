import React, { useState } from 'react';
import { 
  ArrowRight, 
  Dumbbell, 
  ShieldCheck, 
  Users, 
  Calendar, 
  Clock, 
  Award, 
  Check, 
  ChevronRight, 
  Activity, 
  Sparkles, 
  TrendingUp, 
  Flame, 
  Target,
  Layers,
  MapPin,
  ChevronDown,
  CheckCircle2
} from 'lucide-react';
import { programsData } from '../data/programsData';
import { trainersData } from '../data/trainersData';
import { classesData } from '../data/classesData';
import { facilitiesData } from '../data/facilitiesData';
import { journalData } from '../data/journalData';
import { testimonialsData } from '../data/testimonialsData';
import { faqsData } from '../data/faqsData';

export default function HomeView({ 
  navigateTo, 
  openBookingModal, 
  openProgramModal, 
  openTrainerModal, 
  openClassModal, 
  openArticleModal,
  showToast 
}) {
  // Active state for preview schedule tabs
  const [activeDay, setActiveDay] = useState('Monday');
  
  // Active state for interactive Progress Tracking demo
  const [trackingWeek, setTrackingWeek] = useState(6);
  const [activeMetricTab, setActiveMetricTab] = useState('strength');

  // FAQ accordion state
  const [openFaqId, setOpenFaqId] = useState('faq-1');

  // Filter schedule for the selected day in preview
  const dayClasses = classesData.filter(c => c.day === activeDay).slice(0, 4);

  return (
    <div>
      
      {/* =========================================================================
          1. HERO SECTION
          ========================================================================= */}
      <section style={{
        position: 'relative',
        minHeight: 'calc(100vh - var(--nav-height))',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '3rem',
        paddingBottom: '5rem',
        overflow: 'hidden'
      }}>
        {/* Background Image with Cinematic Gradient Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0
        }}>
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=85" 
            alt="Forge Athletics Modern Training Facility" 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'brightness(0.38) contrast(1.15)'
            }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(11, 12, 14, 0.95) 0%, rgba(11, 12, 14, 0.75) 50%, rgba(11, 12, 14, 0.88) 100%)'
          }} />
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '180px',
            background: 'linear-gradient(to top, var(--bg-main) 0%, transparent 100%)'
          }} />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '820px' }}>
            
            {/* Editorial Badge */}
            <div className="eyebrow eyebrow-pill" style={{ marginBottom: '1.5rem', animation: 'fadeIn 0.6s ease' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent-primary)', display: 'inline-block' }} />
              <span>Premium Fitness Club & Training Studio • Toronto, ON</span>
            </div>

            {/* Headline */}
            <h1 style={{
              fontSize: 'clamp(2.8rem, 6.5vw, 5.2rem)',
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              marginBottom: '1.5rem',
              color: 'var(--text-primary)'
            }}>
              Train with purpose<span style={{ color: 'var(--accent-primary)' }}>.</span>
            </h1>

            {/* Supporting Text */}
            <p style={{
              fontSize: 'clamp(1.1rem, 1.6vw, 1.35rem)',
              lineHeight: 1.6,
              color: 'var(--text-secondary)',
              maxWidth: '680px',
              marginBottom: '2.5rem'
            }}>
              Expert coaching, serious equipment, and a training environment designed to help you become stronger, fitter, and more confident.
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <button 
                onClick={() => openBookingModal()}
                className="btn btn-primary btn-lg"
              >
                <span>Start Your Journey</span>
                <ArrowRight size={18} />
              </button>

              <button 
                onClick={() => navigateTo('programs')}
                className="btn btn-secondary btn-lg"
              >
                <span>Explore Programs</span>
              </button>
            </div>

            {/* Hero Quick Highlights Bar */}
            <div style={{
              display: 'flex',
              gap: '2.5rem',
              marginTop: '4rem',
              paddingTop: '2rem',
              borderTop: '1px solid var(--border-subtle)',
              flexWrap: 'wrap'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <ShieldCheck size={20} color="var(--accent-primary)" />
                <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  Eleiko & Rogue Certified Bay
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Users size={20} color="var(--accent-primary)" />
                <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  Capped 1:8 Coaching Cohorts
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Activity size={20} color="var(--accent-primary)" />
                <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  Comprehensive Movement Assessment
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          2. TRUST & KEY STATS SECTION
          ========================================================================= */}
      <section style={{
        backgroundColor: '#0E1013',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
        padding: '3rem 0'
      }}>
        <div className="container">
          
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-display)', letterSpacing: '0.02em', color: 'var(--text-primary)' }}>
              "Different goals. One community."
            </h3>
            <div className="demo-disclaimer-pill">
              <span>* Fictional demo metrics for portfolio illustration</span>
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem'
          }}>
            {[
              { stat: '8+', label: 'Years of Training', desc: 'Continuous coaching evolution' },
              { stat: '25+', label: 'Expert Coaches', desc: 'Certified full-time mentors' },
              { stat: '1,500+', label: 'Active Members', desc: 'From beginners to athletes' },
              { stat: '20+', label: 'Weekly Classes', desc: 'Strength, mobility & HIIT' }
            ].map((item, idx) => (
              <div 
                key={idx}
                style={{
                  padding: '1.5rem',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)'
                }}
              >
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.5rem, 4vw, 3.2rem)',
                  fontWeight: 800,
                  color: 'var(--accent-primary)',
                  lineHeight: 1,
                  marginBottom: '0.5rem'
                }}>
                  {item.stat}
                </div>
                <div style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                  {item.label}
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          3. ABOUT THE GYM (EDITORIAL INTRO)
          ========================================================================= */}
      <section className="section">
        <div className="container">
          
          <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            
            {/* Visual Column */}
            <div style={{ position: 'relative' }}>
              <div className="img-zoom-wrap" style={{ height: '520px', boxShadow: 'var(--shadow-lg)' }}>
                <img 
                  src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80" 
                  alt="Training environment at Forge Athletics" 
                />
              </div>

              {/* Floating Quote Badge */}
              <div style={{
                position: 'absolute',
                bottom: '-1.5rem',
                right: '-1.5rem',
                background: 'var(--bg-card-elevated)',
                border: '1px solid var(--border-medium)',
                borderRadius: 'var(--radius-md)',
                padding: '1.25rem 1.5rem',
                maxWidth: '280px',
                boxShadow: 'var(--shadow-md)',
                display: 'none'
              }} className="quote-floating-badge">
                <span className="eyebrow" style={{ fontSize: '0.75rem', marginBottom: '0.3rem' }}>Core Ethos</span>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-primary)', margin: 0, fontStyle: 'italic' }}>
                  "Master the movement. The numbers will follow."
                </p>
              </div>
            </div>

            {/* Editorial Content */}
            <div>
              <span className="eyebrow">About FORGE</span>
              <h2 style={{ marginBottom: '1.5rem' }}>
                More than a place to train<span style={{ color: 'var(--accent-primary)' }}>.</span>
              </h2>
              <p className="lead-text" style={{ marginBottom: '2rem' }}>
                FORGE ATHLETICS brings together expert coaching, thoughtful programming, quality equipment, and a community that makes showing up easier.
              </p>

              {/* 5 Core Pillars */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', marginBottom: '2.5rem' }}>
                {[
                  { title: 'Expert Coaching', desc: 'No unqualified floor monitors. Every coach is career-dedicated and rigorously certified.' },
                  { title: 'Modern Equipment', desc: 'Eleiko competition barbells, calibrated steel, curved treadmills, and dedicated turf.' },
                  { title: 'Personalized Programming', desc: 'Structured progressions tailored to your biological baseline and personal history.' },
                  { title: 'Welcoming Community', desc: 'Zero ego. Trainees celebrate each other’s personal benchmarks, regardless of experience.' },
                  { title: 'Spotless Facilities', desc: 'Pristine locker suites, continuous floor sanitation, and luxury recovery amenities.' }
                ].map((pillar, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: 'var(--accent-subtle)',
                      border: '1px solid var(--accent-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-primary)',
                      flexShrink: 0,
                      marginTop: '3px'
                    }}>
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <div>
                      <strong style={{ color: 'var(--text-primary)', fontSize: '0.95rem', display: 'block' }}>
                        {pillar.title}
                      </strong>
                      <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                        {pillar.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <button 
                  onClick={() => navigateTo('about')}
                  className="btn btn-primary"
                >
                  <span>Why FORGE</span>
                  <ArrowRight size={16} />
                </button>
                <button 
                  onClick={() => navigateTo('facilities')}
                  className="btn btn-outline"
                >
                  <span>Explore Facilities</span>
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          4. PROGRAMS SECTION (PREVIEW)
          ========================================================================= */}
      <section className="section" style={{ backgroundColor: '#090A0D' }}>
        <div className="container">
          
          <div className="section-header text-center">
            <span className="eyebrow">Training Disciplines</span>
            <h2>Structured for real progression<span style={{ color: 'var(--accent-primary)' }}>.</span></h2>
            <p className="lead-text" style={{ margin: '0 auto' }}>
              Whether you are stepping into a weight room for the first time or training for competitive sport, our curriculum provides clear direction and measurable growth.
            </p>
          </div>

          {/* 6 Programs Grid */}
          <div className="grid-3">
            {programsData.map((prog) => (
              <div 
                key={prog.id}
                className="forge-card forge-card-glow"
                style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div>
                  <div className="img-zoom-wrap" style={{ height: '200px', marginBottom: '1.25rem' }}>
                    <img src={prog.image} alt={prog.title} />
                    <span 
                      className="badge badge-accent"
                      style={{ position: 'absolute', top: '12px', left: '12px' }}
                    >
                      {prog.category}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>
                    {prog.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.5 }}>
                    {prog.shortDescription}
                  </p>
                </div>

                <div>
                  <div style={{
                    paddingTop: '1rem',
                    borderTop: '1px solid var(--border-subtle)',
                    marginBottom: '1.25rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '0.8125rem',
                    color: 'var(--text-muted)'
                  }}>
                    <span>{prog.duration}</span>
                    <span>{prog.frequency}</span>
                  </div>

                  <button 
                    onClick={() => openProgramModal(prog)}
                    className="btn btn-secondary"
                    style={{ width: '100%', justifyContent: 'space-between' }}
                  >
                    <span>View Curriculum</span>
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <button 
              onClick={() => navigateTo('programs')}
              className="btn btn-outline btn-lg"
            >
              <span>View All Program Details & Syllabi</span>
              <ArrowRight size={18} />
            </button>
          </div>

        </div>
      </section>

      {/* =========================================================================
          5. FEATURED PROGRAM (8-WEEK BEGINNER BLUEPRINT)
          ========================================================================= */}
      <section className="section" style={{
        background: 'linear-gradient(180deg, #0E1014 0%, #15181F 100%)',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)'
      }}>
        <div className="container">
          
          <div className="grid-2" style={{ alignItems: 'center', gap: '3.5rem' }}>
            
            <div>
              <span className="eyebrow">Featured Beginner Pathway</span>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginBottom: '1rem' }}>
                Your first 8 weeks start here<span style={{ color: 'var(--accent-primary)' }}>.</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                Designed specifically for individuals new or returning to structured training. Master barbell form, establish an unshakable weekly routine, and gain gym independence without intimidation or extreme claims.
              </p>

              {/* 4 Stage Timeline */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
                {[
                  { phase: 'Weeks 1–2', title: 'Learn the fundamentals', desc: 'Master warmups, movement mechanics, and proper breathing.' },
                  { phase: 'Weeks 3–4', title: 'Build consistency', desc: 'Establish your 3-day routine with light loads and core stability.' },
                  { phase: 'Weeks 5–6', title: 'Increase capacity', desc: 'Gradually add weight and introduce conditioning intervals.' },
                  { phase: 'Weeks 7–8', title: 'Track your progress', desc: 'Review measurable strength gains and chart your continuing path.' }
                ].map((item, idx) => (
                  <div 
                    key={idx}
                    style={{
                      display: 'flex',
                      gap: '1.25rem',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '1rem 1.25rem'
                    }}
                  >
                    <div style={{
                      minWidth: '85px',
                      color: 'var(--accent-primary)',
                      fontFamily: 'var(--font-display)',
                      fontWeight: 800,
                      fontSize: '0.9rem'
                    }}>
                      {item.phase}
                    </div>
                    <div>
                      <div style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '0.95rem', marginBottom: '2px' }}>
                        {item.title}
                      </div>
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button 
                  onClick={() => openProgramModal(programsData.find(p => p.id === 'beginner-program'))}
                  className="btn btn-primary"
                >
                  <span>Explore the Program</span>
                  <ArrowRight size={16} />
                </button>
                <button 
                  onClick={() => openBookingModal('8-Week Beginner Blueprint')}
                  className="btn btn-secondary"
                >
                  <span>Request Cohort Info</span>
                </button>
              </div>
            </div>

            <div className="img-zoom-wrap" style={{ height: '480px', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }}>
              <img 
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80" 
                alt="Beginner training cohort coaching at Forge Athletics" 
              />
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          6. PERSONAL TRAINING SPOTLIGHT
          ========================================================================= */}
      <section className="section">
        <div className="container">
          
          <div className="section-header text-center">
            <span className="eyebrow">1-on-1 Mentorship</span>
            <h2>Coaching that meets you where you are<span style={{ color: 'var(--accent-primary)' }}>.</span></h2>
            <p className="lead-text" style={{ margin: '0 auto' }}>
              No cookie-cutter templates. Our private coaching is an adaptive partnership built around your biomechanics, schedule, and recovery profile.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3.5rem'
          }}>
            {[
              { num: '01', title: 'Goal Assessment', desc: 'In-depth movement screen, injury history, lifestyle baseline, and goal mapping.' },
              { num: '02', title: 'Custom Training Plan', desc: 'Periodized lifting cycles engineered for your unique anatomical levers and recovery.' },
              { num: '03', title: 'Technique Coaching', desc: 'Every repetition scrutinized with real-time video feedback and neurological cueing.' },
              { num: '04', title: 'Progress Tracking', desc: 'Bi-weekly InBody scans, strength velocity data, and nutritional synchronizations.' },
              { num: '05', title: 'Ongoing Adjustments', desc: 'Continuous weekly adjustments to keep you progressing without injury or burnout.' }
            ].map((step, idx) => (
              <div 
                key={idx}
                className="forge-card"
                style={{ background: 'var(--bg-card-elevated)' }}
              >
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.75rem',
                  fontWeight: 800,
                  color: 'var(--accent-primary)',
                  marginBottom: '1rem',
                  opacity: 0.85
                }}>
                  {step.num}
                </div>
                <h4 style={{ fontSize: '1.15rem', marginBottom: '0.5rem' }}>{step.title}</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <button 
              onClick={() => navigateTo('trainers')}
              className="btn btn-primary btn-lg"
            >
              <span>Meet Our Coaches</span>
              <ArrowRight size={18} />
            </button>
          </div>

        </div>
      </section>

      {/* =========================================================================
          7. TRAINERS SECTION (MEET THE COACHES PREVIEW)
          ========================================================================= */}
      <section className="section" style={{ backgroundColor: '#090A0D' }}>
        <div className="container">
          
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '3rem',
            flexWrap: 'wrap',
            gap: '1.5rem'
          }}>
            <div>
              <span className="eyebrow">Head Coaching Staff</span>
              <h2>Meet the Coaches<span style={{ color: 'var(--accent-primary)' }}>.</span></h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '560px', margin: 0 }}>
                Career-dedicated strength professionals who prioritize technique, longevity, and genuine human connection.
              </p>
            </div>

            <button 
              onClick={() => navigateTo('trainers')}
              className="btn btn-outline"
            >
              <span>View All 6 Trainer Profiles</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Trainers Grid */}
          <div className="grid-3">
            {trainersData.slice(0, 3).map((trainer) => (
              <div key={trainer.id} className="forge-card forge-card-glow">
                <div className="img-zoom-wrap" style={{ height: '280px', marginBottom: '1.25rem' }}>
                  <img src={trainer.image} alt={trainer.name} />
                </div>

                <div className="badge badge-accent" style={{ marginBottom: '0.5rem' }}>
                  {trainer.specialty}
                </div>

                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.2rem' }}>{trainer.name}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                  {trainer.role} • {trainer.experience}
                </p>

                <p style={{ 
                  fontStyle: 'italic', 
                  fontSize: '0.875rem', 
                  color: 'var(--text-secondary)', 
                  marginBottom: '1.5rem',
                  lineHeight: 1.5,
                  borderLeft: '2px solid var(--accent-primary)',
                  paddingLeft: '0.75rem'
                }}>
                  "{trainer.philosophy.slice(0, 95)}..."
                </p>

                <div style={{ display: 'flex', gap: '0.75rem' }}>
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

      {/* =========================================================================
          8. CLASS SCHEDULE (INTERACTIVE PREVIEW)
          ========================================================================= */}
      <section className="section">
        <div className="container">
          
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '2.5rem',
            flexWrap: 'wrap',
            gap: '1.5rem'
          }}>
            <div>
              <span className="eyebrow">Weekly Cohorts</span>
              <h2>Weekly Class Schedule<span style={{ color: 'var(--accent-primary)' }}>.</span></h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '540px' }}>
                All classes are led by head coaches and capped at 12 members for attentive guidance.
              </p>
            </div>

            <button 
              onClick={() => navigateTo('classes')}
              className="btn btn-outline"
            >
              <span>Full Weekly Matrix</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Day Selector Pills */}
          <div style={{
            display: 'flex',
            gap: '0.5rem',
            overflowX: 'auto',
            paddingBottom: '0.75rem',
            marginBottom: '2rem'
          }}>
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => {
              const isSelected = activeDay === day;
              return (
                <button
                  key={day}
                  onClick={() => setActiveDay(day)}
                  style={{
                    padding: '0.65rem 1.4rem',
                    borderRadius: 'var(--radius-full)',
                    background: isSelected ? 'var(--accent-primary)' : 'var(--bg-card-elevated)',
                    color: isSelected ? '#0E0F12' : 'var(--text-secondary)',
                    fontWeight: isSelected ? 700 : 500,
                    fontSize: '0.875rem',
                    border: `1px solid ${isSelected ? 'var(--accent-primary)' : 'var(--border-subtle)'}`,
                    whiteSpace: 'nowrap',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  {day}
                </button>
              );
            })}
          </div>

          {/* Filtered Classes List for Selected Day */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {dayClasses.map((item) => (
              <div 
                key={item.id}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem 1.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '1.25rem',
                  transition: 'all var(--transition-fast)'
                }}
                className="class-row-item"
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                  <div style={{ minWidth: '100px' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.15rem', color: 'var(--text-primary)' }}>
                      {item.time}
                    </div>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                      {item.duration}
                    </div>
                  </div>

                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.2rem' }}>
                      <span className="badge badge-accent" style={{ fontSize: '0.7rem' }}>{item.category}</span>
                      <span className="badge badge-neutral" style={{ fontSize: '0.7rem' }}>{item.difficulty}</span>
                    </div>
                    <h4 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', margin: 0 }}>
                      {item.title}
                    </h4>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>Coach</span>
                    <strong style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>{item.trainer}</strong>
                  </div>

                  <button 
                    onClick={() => openClassModal(item)}
                    className="btn btn-secondary btn-sm"
                  >
                    <span>View / Reserve</span>
                    <ChevronRight size={15} />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          9. FACILITIES & EQUIPMENT PREVIEW
          ========================================================================= */}
      <section className="section" style={{ backgroundColor: '#090A0D' }}>
        <div className="container">
          
          <div className="section-header text-center">
            <span className="eyebrow">Training Environment</span>
            <h2>Built for better training<span style={{ color: 'var(--accent-primary)' }}>.</span></h2>
            <p className="lead-text" style={{ margin: '0 auto' }}>
              Over 18,000 sq ft of purposeful spaces engineered with world-class resistance equipment, indoor turf, and contrast therapy recovery suites.
            </p>
          </div>

          <div className="grid-4" style={{ marginBottom: '3rem' }}>
            {facilitiesData.zones.slice(0, 4).map((zone) => (
              <div key={zone.id} className="forge-card" style={{ padding: 0, overflow: 'hidden' }}>
                <div className="img-zoom-wrap" style={{ height: '220px' }}>
                  <img src={zone.image} alt={zone.name} />
                </div>
                <div style={{ padding: '1.25rem' }}>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.35rem' }}>{zone.name}</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
                    {zone.tagline}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <button 
              onClick={() => navigateTo('facilities')}
              className="btn btn-outline btn-lg"
            >
              <span>Explore All 8 Zones & Equipment Specs</span>
              <ArrowRight size={18} />
            </button>
          </div>

        </div>
      </section>

      {/* =========================================================================
          10. MEMBER JOURNEY TIMELINE
          ========================================================================= */}
      <section className="section">
        <div className="container">
          
          <div className="section-header text-center">
            <span className="eyebrow">The Member Experience</span>
            <h2>Everything you need to keep showing up<span style={{ color: 'var(--accent-primary)' }}>.</span></h2>
            <p className="lead-text" style={{ margin: '0 auto' }}>
              From day one, our structured onboarding ensures you never feel lost, overwhelmed, or left to figure out workouts alone.
            </p>
          </div>

          {/* 6 Step Journey */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1.5rem',
            position: 'relative'
          }}>
            {[
              { step: '01', title: 'Join', desc: 'Select the membership plan that aligns with your schedule and goals.' },
              { step: '02', title: 'Get Your Assessment', desc: 'Complete your 60-min movement screen and InBody baseline testing.' },
              { step: '03', title: 'Choose Your Training', desc: 'Select your program pathway: Barbell Strength, Functional, or Classes.' },
              { step: '04', title: 'Meet Your Coach', desc: 'Get paired with your assigned mentor for ongoing form guidance.' },
              { step: '05', title: 'Track Your Progress', desc: 'Log weights, attend classes, and review bi-weekly capacity improvements.' },
              { step: '06', title: 'Keep Building', desc: 'Advance into new periodized training cycles with your community.' }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="forge-card"
                style={{ background: 'var(--bg-card-elevated)', borderTop: '3px solid var(--accent-primary)' }}
              >
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2rem',
                  fontWeight: 800,
                  color: 'var(--accent-primary)',
                  marginBottom: '0.75rem',
                  opacity: 0.9
                }}>
                  {item.step}
                </div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.4rem' }}>{item.title}</h4>
                <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          11. COMMUNITY & MEMBER STORIES
          ========================================================================= */}
      <section className="section" style={{ backgroundColor: '#090A0D' }}>
        <div className="container">
          
          <div className="section-header text-center">
            <span className="eyebrow">Real Experiences</span>
            <h2>Train together. Get stronger together<span style={{ color: 'var(--accent-primary)' }}>.</span></h2>
            <p className="lead-text" style={{ margin: '0 auto' }}>
              Believable stories from members who found consistency, learned proper barbell mechanics, and eliminated joint pain.
            </p>
          </div>

          <div className="grid-2">
            {testimonialsData.map((t) => (
              <div 
                key={t.id}
                className="forge-card"
                style={{ background: 'var(--bg-card-elevated)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                    <div style={{ width: '60px', height: '60px', borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--accent-border)' }}>
                      <img src={t.image} alt={t.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', margin: 0 }}>{t.name}</h4>
                      <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>{t.role}</span>
                      <div className="badge badge-neutral" style={{ marginTop: '4px', fontSize: '0.6875rem' }}>
                        {t.memberSince}
                      </div>
                    </div>
                  </div>

                  <p style={{ fontStyle: 'italic', fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    "{t.quote}"
                  </p>
                </div>

                <div style={{
                  padding: '0.75rem 1rem',
                  background: 'rgba(229, 138, 43, 0.08)',
                  border: '1px solid var(--accent-border)',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.8125rem',
                  color: 'var(--text-primary)'
                }}>
                  <strong style={{ color: 'var(--accent-primary)', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Measurable Result:
                  </strong>
                  {t.achievement}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          12. INTERACTIVE PROGRESS TRACKING DEMO
          ========================================================================= */}
      <section className="section">
        <div className="container">
          
          <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            
            <div>
              <span className="eyebrow">Performance Telemetry</span>
              <h2>Measure what matters<span style={{ color: 'var(--accent-primary)' }}>.</span></h2>
              <p className="lead-text" style={{ marginBottom: '1.75rem' }}>
                We track objective training metrics rather than arbitrary scales: barbell load velocity, workout frequency consistency, joint mobility range, and cardiovascular recovery rate.
              </p>

              {/* Metric Category Tabs */}
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                {[
                  { id: 'strength', label: 'Barbell Strength' },
                  { id: 'consistency', label: 'Consistency' },
                  { id: 'mobility', label: 'Joint Mobility' },
                  { id: 'conditioning', label: 'Conditioning' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveMetricTab(tab.id)}
                    style={{
                      padding: '0.5rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      background: activeMetricTab === tab.id ? 'var(--accent-primary)' : 'var(--bg-card-elevated)',
                      color: activeMetricTab === tab.id ? '#0E0F12' : 'var(--text-secondary)',
                      fontWeight: activeMetricTab === tab.id ? 700 : 500,
                      fontSize: '0.8125rem',
                      border: '1px solid var(--border-subtle)'
                    }}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Slider Controller */}
              <div style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '1.5rem',
                marginBottom: '2rem'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>Simulate Training Timeline:</span>
                  <strong style={{ color: 'var(--accent-primary)', fontSize: '0.95rem' }}>Week {trackingWeek} of 8</strong>
                </div>
                <input 
                  type="range"
                  min="1"
                  max="8"
                  value={trackingWeek}
                  onChange={(e) => setTrackingWeek(parseInt(e.target.value))}
                  style={{
                    width: '100%',
                    accentColor: 'var(--accent-primary)',
                    cursor: 'pointer'
                  }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                  <span>Week 1 (Baseline)</span>
                  <span>Week 4 (Work Capacity)</span>
                  <span>Week 8 (Deload & Benchmark)</span>
                </div>
              </div>

              <div className="demo-disclaimer-pill">
                <span>Interactive example dashboard visualization with fictional cohort data.</span>
              </div>
            </div>

            {/* Interactive Telemetry Card Preview */}
            <div style={{
              background: 'var(--bg-card-elevated)',
              border: '1px solid var(--border-medium)',
              borderRadius: 'var(--radius-lg)',
              padding: '2rem',
              boxShadow: 'var(--shadow-lg)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-subtle)' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Member Telemetry</span>
                  <h4 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', margin: 0 }}>Progress Snapshot</h4>
                </div>
                <span className="badge badge-success">On Track</span>
              </div>

              {/* Dynamic Stats based on Slider & Metric */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', marginBottom: '0.4rem' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Compound Squat / Hinge Baseline</span>
                    <strong style={{ color: 'var(--text-primary)' }}>+{Math.round(15 + trackingWeek * 6.5)} lbs</strong>
                  </div>
                  <div style={{ height: '8px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${Math.min(100, 20 + trackingWeek * 10)}%`, background: 'var(--accent-primary)', borderRadius: '4px', transition: 'width 0.3s ease' }} />
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', marginBottom: '0.4rem' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Weekly Training Adherence</span>
                    <strong style={{ color: 'var(--text-primary)' }}>{Math.min(100, Math.round(75 + trackingWeek * 3.1))}% (3.2x / wk)</strong>
                  </div>
                  <div style={{ height: '8px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${Math.min(100, 75 + trackingWeek * 3.1)}%`, background: '#22C55E', borderRadius: '4px', transition: 'width 0.3s ease' }} />
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', marginBottom: '0.4rem' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Thoracic & Hip Mobility Score</span>
                    <strong style={{ color: 'var(--text-primary)' }}>{Math.min(95, Math.round(60 + trackingWeek * 4.4))}/100</strong>
                  </div>
                  <div style={{ height: '8px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${Math.min(100, 60 + trackingWeek * 4.4)}%`, background: '#38BDF8', borderRadius: '4px', transition: 'width 0.3s ease' }} />
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', marginBottom: '0.4rem' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Zone 2 Aerobic Recovery Index</span>
                    <strong style={{ color: 'var(--text-primary)' }}>+{Math.round(8 + trackingWeek * 4.2)}% HR Recovery</strong>
                  </div>
                  <div style={{ height: '8px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${Math.min(100, 30 + trackingWeek * 8.5)}%`, background: '#EAB308', borderRadius: '4px', transition: 'width 0.3s ease' }} />
                  </div>
                </div>

              </div>

              <div style={{ marginTop: '1.75rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Synched with FORGE Member App</span>
                <button 
                  onClick={() => openBookingModal('Progress Assessment')}
                  className="btn btn-primary btn-sm"
                >
                  Book Assessment
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          13. FITNESS JOURNAL (EDITORIAL ARTICLES PREVIEW)
          ========================================================================= */}
      <section className="section" style={{ backgroundColor: '#090A0D' }}>
        <div className="container">
          
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '3rem',
            flexWrap: 'wrap',
            gap: '1.5rem'
          }}>
            <div>
              <span className="eyebrow">Editorial Journal</span>
              <h2>Evidence-Based Knowledge<span style={{ color: 'var(--accent-primary)' }}>.</span></h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '540px' }}>
                Practical training guidance, programming principles, and habit psychology from our coaching staff.
              </p>
            </div>

            <button 
              onClick={() => navigateTo('journal')}
              className="btn btn-outline"
            >
              <span>View All 6 Articles</span>
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid-3">
            {journalData.slice(0, 3).map((article) => (
              <div 
                key={article.id}
                className="forge-card forge-card-glow"
                style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div>
                  <div className="img-zoom-wrap" style={{ height: '200px', marginBottom: '1.25rem' }}>
                    <img src={article.image} alt={article.title} />
                    <span 
                      className="badge badge-accent"
                      style={{ position: 'absolute', top: '12px', left: '12px' }}
                    >
                      {article.category}
                    </span>
                  </div>

                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.4rem' }}>
                    {article.readTime} • by {article.author}
                  </span>

                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.65rem', lineHeight: 1.3 }}>
                    {article.title}
                  </h3>

                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                    {article.shortDescription.slice(0, 110)}...
                  </p>
                </div>

                <button 
                  onClick={() => openArticleModal(article)}
                  className="editorial-link"
                  style={{ alignSelf: 'flex-start' }}
                >
                  <span>Read Full Article</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          14. FAQ ACCORDION PREVIEW
          ========================================================================= */}
      <section className="section">
        <div className="container" style={{ maxWidth: '840px' }}>
          
          <div className="section-header text-center">
            <span className="eyebrow">Common Inquiries</span>
            <h2>Frequently Asked Questions<span style={{ color: 'var(--accent-primary)' }}>.</span></h2>
            <p className="lead-text" style={{ margin: '0 auto' }}>
              Everything you need to know about joining, coaching sessions, class booking, and club standards.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.5rem' }}>
            {faqsData.slice(0, 5).map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div 
                  key={faq.id}
                  style={{
                    background: 'var(--bg-card)',
                    border: `1px solid ${isOpen ? 'var(--accent-border)' : 'var(--border-subtle)'}`,
                    borderRadius: 'var(--radius-sm)',
                    overflow: 'hidden',
                    transition: 'border-color var(--transition-fast)'
                  }}
                >
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    style={{
                      width: '100%',
                      padding: '1.25rem 1.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textAlign: 'left',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-display)',
                      fontWeight: 600,
                      fontSize: '1rem',
                      gap: '1rem'
                    }}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown 
                      size={18} 
                      color="var(--accent-primary)"
                      style={{ 
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform var(--transition-fast)',
                        flexShrink: 0
                      }} 
                    />
                  </button>

                  {isOpen && (
                    <div style={{
                      padding: '0 1.5rem 1.25rem',
                      color: 'var(--text-secondary)',
                      fontSize: '0.9rem',
                      lineHeight: 1.6,
                      borderTop: '1px solid var(--border-subtle)',
                      paddingTop: '1rem'
                    }}>
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div style={{ textAlign: 'center' }}>
            <button 
              onClick={() => navigateTo('faq')}
              className="btn btn-secondary"
            >
              <span>View All 10 FAQs</span>
              <ArrowRight size={16} />
            </button>
          </div>

        </div>
      </section>

      {/* =========================================================================
          15. FREE CONSULTATION / VISIT CONVERSION BANNER
          ========================================================================= */}
      <section className="section" style={{
        background: 'linear-gradient(135deg, #181B21 0%, #0E1013 100%)',
        borderTop: '1px solid var(--border-medium)',
        borderBottom: '1px solid var(--border-medium)',
        position: 'relative'
      }}>
        <div className="container">
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}>
            <div>
              <span className="eyebrow">Zero Obligation</span>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginBottom: '1rem' }}>
                Not sure where to start?<span style={{ color: 'var(--accent-primary)' }}>.</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                Come in, meet the team, see the space, and talk through your goals with a coach. No sales pressure — just straightforward training guidance.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button 
                  onClick={() => openBookingModal()}
                  className="btn btn-primary btn-lg"
                >
                  <Calendar size={18} />
                  <span>Book a Free Consultation</span>
                </button>
                <button 
                  onClick={() => openBookingModal('Request a Gym Visit')}
                  className="btn btn-secondary btn-lg"
                >
                  <span>Request a Gym Visit</span>
                </button>
              </div>
            </div>

            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-medium)',
              borderRadius: 'var(--radius-lg)',
              padding: '2rem',
              boxShadow: 'var(--shadow-md)'
            }}>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                What Happens at Your Visit:
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { title: '1. Private Facility Tour', desc: 'Walk through all 8 training zones, power cages, and recovery suites.' },
                  { title: '2. Goal & Movement Screen', desc: 'Discuss previous injuries, schedule constraints, and desired outcomes.' },
                  { title: '3. Custom Roadmap', desc: 'Receive tailored recommendations on programs, classes, or private coaching.' }
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '0.75rem' }}>
                    <CheckCircle2 size={18} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ color: 'var(--text-primary)', fontSize: '0.9rem', display: 'block' }}>{item.title}</strong>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.8125rem' }}>{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="demo-disclaimer-pill" style={{ marginTop: '1.5rem', width: '100%' }}>
                <span>* Fictional demo consultation offer for portfolio presentation.</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Embedded Styles for Quote Floating Badge */}
      <style>{`
        @media (min-width: 1024px) {
          .quote-floating-badge {
            display: block !important;
          }
        }
      `}</style>

    </div>
  );
}
