import React, { useState } from 'react';
import { ChevronDown, Search, HelpCircle, MessageCircle, Phone, ArrowRight } from 'lucide-react';
import { faqsData } from '../data/faqsData';

export default function FaqView({ navigateTo, openBookingModal }) {
  const [openId, setOpenId] = useState('faq-1');
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Getting Started', 'Coaching', 'Classes', 'Amenities', 'Memberships', 'General'];

  const filteredFaqs = faqsData.filter((faq) => {
    const matchesCat = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
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
          <span className="eyebrow">Direct Answers</span>
          <h1 style={{ marginBottom: '1.25rem' }}>
            Frequently Asked Questions<span style={{ color: 'var(--accent-primary)' }}>.</span>
          </h1>
          <p className="lead-text" style={{ margin: '0 auto' }}>
            Find answers to common questions about starting at FORGE, class registrations, trainer credentials, and membership policies.
          </p>
        </div>
      </section>

      {/* Main FAQ Content */}
      <section className="section">
        <div className="container" style={{ maxWidth: '840px' }}>
          
          {/* Controls: Search & Category Filter */}
          <div style={{ marginBottom: '3rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            
            <div style={{ position: 'relative' }}>
              <Search size={18} color="var(--text-muted)" style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)' }} />
              <input 
                type="text"
                placeholder="Search questions (e.g. beginner, locker rooms, cancel)..."
                className="form-control"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ paddingLeft: '3rem', height: '52px', fontSize: '1rem' }}
              />
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.4rem' }}>
              {categories.map((cat) => {
                const isSelected = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
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
                    {cat}
                  </button>
                );
              })}
            </div>

          </div>

          {/* FAQ Accordion List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '4rem' }}>
            {filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  style={{
                    background: 'var(--bg-card)',
                    border: `1px solid ${isOpen ? 'var(--accent-border)' : 'var(--border-subtle)'}`,
                    borderRadius: 'var(--radius-sm)',
                    overflow: 'hidden',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    style={{
                      width: '100%',
                      padding: '1.35rem 1.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textAlign: 'left',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-display)',
                      fontWeight: 600,
                      fontSize: '1.05rem',
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
                      padding: '0 1.75rem 1.5rem',
                      color: 'var(--text-secondary)',
                      fontSize: '0.95rem',
                      lineHeight: 1.7,
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

          {/* Contact Us Help Box */}
          <div style={{
            background: 'var(--bg-card-elevated)',
            border: '1px solid var(--border-medium)',
            borderRadius: 'var(--radius-lg)',
            padding: '2.5rem',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Still have a question?</h3>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '480px', margin: '0 auto 1.5rem', fontSize: '0.95rem' }}>
              Our concierge team and head coaches are happy to assist. Give us a call or drop by the front desk.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <button onClick={() => navigateTo('contact')} className="btn btn-secondary">
                <MessageCircle size={16} />
                <span>Contact Concierge</span>
              </button>
              <button onClick={() => openBookingModal()} className="btn btn-primary">
                <span>Book a Consultation</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
