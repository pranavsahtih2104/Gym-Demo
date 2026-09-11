import React, { useState } from 'react';
import { Clock, Calendar, User, MapPin, ChevronRight, CheckCircle2, Filter } from 'lucide-react';
import { classesData } from '../data/classesData';
import { trainersData } from '../data/trainersData';

export default function ClassesView({ openClassModal, openBookingModal }) {
  const [selectedDay, setSelectedDay] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTrainer, setSelectedTrainer] = useState('All');

  const days = ['All', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const categories = ['All', 'Strength', 'Functional', 'Conditioning', 'Mobility', 'Athletic'];

  const filteredClasses = classesData.filter((item) => {
    const matchesDay = selectedDay === 'All' || item.day === selectedDay;
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesTrainer = selectedTrainer === 'All' || item.trainer === selectedTrainer;
    return matchesDay && matchesCategory && matchesTrainer;
  });

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
          <span className="eyebrow">Weekly Group Schedule</span>
          <h1 style={{ marginBottom: '1.25rem' }}>
            Class Schedule & Booking<span style={{ color: 'var(--accent-primary)' }}>.</span>
          </h1>
          <p className="lead-text" style={{ margin: '0 auto' }}>
            Filter by day, training modality, or your preferred coach. All classes are capped at 12 participants to ensure attentive coaching and proper lifting technique.
          </p>
        </div>
      </section>

      {/* Main Schedule Container */}
      <section className="section">
        <div className="container">
          
          {/* Controls & Filter Bar */}
          <div style={{
            background: 'var(--bg-card-elevated)',
            border: '1px solid var(--border-medium)',
            borderRadius: 'var(--radius-md)',
            padding: '1.5rem',
            marginBottom: '3rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem'
          }}>
            
            {/* Day Selector */}
            <div>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', display: 'block', marginBottom: '0.6rem', fontWeight: 700 }}>
                Select Day
              </span>
              <div style={{ display: 'flex', gap: '0.4rem', overflowX: 'auto', paddingBottom: '0.4rem' }}>
                {days.map((day) => {
                  const isSelected = selectedDay === day;
                  return (
                    <button
                      key={day}
                      onClick={() => setSelectedDay(day)}
                      style={{
                        padding: '0.45rem 1rem',
                        borderRadius: 'var(--radius-full)',
                        background: isSelected ? 'var(--accent-primary)' : 'var(--bg-card)',
                        color: isSelected ? '#0E0F12' : 'var(--text-secondary)',
                        fontWeight: isSelected ? 700 : 500,
                        fontSize: '0.8125rem',
                        border: `1px solid ${isSelected ? 'var(--accent-primary)' : 'var(--border-subtle)'}`,
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Sub-Filters: Category & Trainer Dropdowns */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
              
              <div>
                <label className="form-label" style={{ fontSize: '0.8125rem' }}>Class Modality</label>
                <select 
                  className="form-control"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  style={{ padding: '0.6rem 0.85rem', fontSize: '0.875rem' }}
                >
                  {categories.map(c => <option key={c} value={c}>{c === 'All' ? 'All Modalities' : c}</option>)}
                </select>
              </div>

              <div>
                <label className="form-label" style={{ fontSize: '0.8125rem' }}>Coach</label>
                <select 
                  className="form-control"
                  value={selectedTrainer}
                  onChange={(e) => setSelectedTrainer(e.target.value)}
                  style={{ padding: '0.6rem 0.85rem', fontSize: '0.875rem' }}
                >
                  <option value="All">All Coaches</option>
                  {trainersData.map(t => <option key={t.id} value={t.name}>{t.name}</option>)}
                </select>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                <button
                  onClick={() => {
                    setSelectedDay('All');
                    setSelectedCategory('All');
                    setSelectedTrainer('All');
                  }}
                  className="btn btn-secondary btn-sm"
                  style={{ width: '100%', height: '42px' }}
                >
                  Reset All Filters
                </button>
              </div>

            </div>

          </div>

          {/* Results Counter */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
              Showing <strong>{filteredClasses.length}</strong> scheduled sessions
            </span>
            <div className="demo-disclaimer-pill">
              <span>* Demo schedule for portfolio preview</span>
            </div>
          </div>

          {/* Classes Schedule List */}
          {filteredClasses.length === 0 ? (
            <div style={{
              background: 'var(--bg-card)',
              border: '1px dashed var(--border-medium)',
              borderRadius: 'var(--radius-md)',
              padding: '3rem 2rem',
              textAlign: 'center'
            }}>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                No sessions match your selected filters.
              </p>
              <button 
                onClick={() => { setSelectedDay('All'); setSelectedCategory('All'); setSelectedTrainer('All'); }}
                className="btn btn-secondary btn-sm"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {filteredClasses.map((item) => (
                <div 
                  key={item.id}
                  className="forge-card"
                  style={{
                    padding: '1.25rem 1.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '1.25rem'
                  }}
                >
                  {/* Left block: Day, Time, Title, Tags */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                    
                    <div style={{ minWidth: '110px' }}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--accent-primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block' }}>
                        {item.day}
                      </span>
                      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.25rem', color: 'var(--text-primary)' }}>
                        {item.time}
                      </div>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{item.duration}</span>
                    </div>

                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
                        <span className="badge badge-accent" style={{ fontSize: '0.7rem' }}>{item.category}</span>
                        <span className="badge badge-neutral" style={{ fontSize: '0.7rem' }}>{item.difficulty}</span>
                      </div>
                      <h4 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', margin: 0 }}>
                        {item.title}
                      </h4>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '4px' }}>
                        <MapPin size={13} color="var(--accent-primary)" />
                        <span>{item.room}</span>
                      </div>
                    </div>

                  </div>

                  {/* Right block: Coach, Spots, Action */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>Coach</span>
                      <strong style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>{item.trainer}</strong>
                      <span style={{ display: 'block', fontSize: '0.75rem', color: '#22C55E' }}>{item.spotsLeft} spots available</span>
                    </div>

                    <button 
                      onClick={() => openClassModal(item)}
                      className="btn btn-secondary btn-sm"
                      style={{ minWidth: '130px', justifyContent: 'space-between' }}
                    >
                      <span>Class Info</span>
                      <ChevronRight size={15} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
