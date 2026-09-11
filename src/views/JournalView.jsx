import React, { useState } from 'react';
import { Search, ArrowRight, Clock, User, Filter, BookOpen } from 'lucide-react';
import { journalData } from '../data/journalData';

export default function JournalView({ openArticleModal }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Beginner Training', 'Programming & Recovery', 'Fitness Science', 'Habits & Mindset', 'Practical Guide', 'Mindset & Psychology'];

  const filteredArticles = journalData.filter((article) => {
    const matchesCat = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      article.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
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
          <span className="eyebrow">The Editorial Magazine</span>
          <h1 style={{ marginBottom: '1.25rem' }}>
            The FORGE Journal<span style={{ color: 'var(--accent-primary)' }}>.</span>
          </h1>
          <p className="lead-text" style={{ margin: '0 auto' }}>
            Deep dives into strength biomechanics, training frequency, recovery physiology, and sustainable fitness psychology from our head coaching staff.
          </p>
        </div>
      </section>

      {/* Main Journal Section */}
      <section className="section">
        <div className="container">
          
          {/* Search & Category Controls */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
            marginBottom: '3rem'
          }}>
            {/* Category Pills */}
            <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.5rem', maxWidth: '100%' }}>
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    style={{
                      padding: '0.45rem 1.15rem',
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

            {/* Search Input */}
            <div style={{ position: 'relative', width: '100%', maxWidth: '300px' }}>
              <Search size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
              <input 
                type="text"
                placeholder="Search training articles..."
                className="form-control"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ paddingLeft: '2.5rem', fontSize: '0.875rem' }}
              />
            </div>
          </div>

          {/* Articles Grid */}
          {filteredArticles.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 2rem', background: 'var(--bg-card)', borderRadius: 'var(--radius-md)' }}>
              <p style={{ color: 'var(--text-secondary)' }}>No articles found matching "{searchQuery}".</p>
              <button onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }} className="btn btn-secondary btn-sm" style={{ marginTop: '1rem' }}>
                Reset Search
              </button>
            </div>
          ) : (
            <div className="grid-3" style={{ gap: '2.5rem' }}>
              {filteredArticles.map((article) => (
                <div 
                  key={article.id}
                  className="forge-card forge-card-glow"
                  style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                >
                  <div>
                    <div className="img-zoom-wrap" style={{ height: '220px', marginBottom: '1.25rem' }}>
                      <img src={article.image} alt={article.title} />
                      <span className="badge badge-accent" style={{ position: 'absolute', top: '12px', left: '12px' }}>
                        {article.category}
                      </span>
                    </div>

                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                      {article.readTime} • by {article.author}
                    </div>

                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', lineHeight: 1.3 }}>
                      {article.title}
                    </h3>

                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                      {article.shortDescription}
                    </p>
                  </div>

                  <button 
                    onClick={() => openArticleModal(article)}
                    className="editorial-link"
                    style={{ alignSelf: 'flex-start' }}
                  >
                    <span>Read Article</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
