import React from 'react';
import { X, Clock, Calendar, User, Share2, CheckCircle, ArrowRight } from 'lucide-react';

export default function ArticleModal({ article, isOpen, onClose, showToast }) {
  if (!isOpen || !article) return null;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Article link copied to clipboard!', 'success');
    } else {
      showToast('Article ready to share.', 'info');
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-container" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '800px' }}
      >
        {/* Header */}
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <span className="badge badge-accent">{article.category}</span>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{article.readTime}</span>
          </div>
          <button onClick={onClose} className="modal-close-btn" aria-label="Close modal">
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* Title & Author Meta */}
          <div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.1rem)', lineHeight: 1.2, marginBottom: '1rem' }}>
              {article.title}
            </h2>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'var(--accent-subtle)',
                  border: '1px solid var(--accent-border)',
                  color: 'var(--accent-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '0.9rem'
                }}>
                  {article.author.charAt(0)}
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.875rem', color: 'var(--text-primary)' }}>
                    {article.author}
                  </strong>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    {article.authorRole} • {article.date}
                  </span>
                </div>
              </div>

              <button
                onClick={handleShare}
                className="btn btn-secondary btn-sm"
                style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}
              >
                <Share2 size={14} />
                <span>Share Article</span>
              </button>
            </div>
          </div>

          {/* Featured Image */}
          <div style={{ height: '320px', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
            <img 
              src={article.image} 
              alt={article.title} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* Article Text Content */}
          <div style={{ 
            color: 'var(--text-secondary)', 
            fontSize: '1rem', 
            lineHeight: 1.8,
            whiteSpace: 'pre-line'
          }}>
            {article.content}
          </div>

          {/* Key Takeaways Box */}
          {article.takeaways && article.takeaways.length > 0 && (
            <div style={{
              background: 'var(--bg-card-elevated)',
              border: '1px solid var(--border-medium)',
              borderLeft: '4px solid var(--accent-primary)',
              borderRadius: 'var(--radius-sm)',
              padding: '1.5rem'
            }}>
              <h4 style={{ fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
                Key Takeaways
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {article.takeaways.map((point, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    <CheckCircle size={17} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Footer Navigation */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '1.5rem',
            borderTop: '1px solid var(--border-subtle)'
          }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Published in FORGE Editorial Journal
            </span>
            <button onClick={onClose} className="btn btn-secondary btn-sm">
              Close Reader
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
