import React, { useState } from 'react';
import { Check, X, ShieldCheck, Sparkles, ArrowRight, HelpCircle, Info } from 'lucide-react';
import { membershipsData } from '../data/membershipsData';

export default function MembershipView({ openBookingModal, showToast }) {
  const [isAnnual, setIsAnnual] = useState(false);

  const handleSelectPlan = (planName) => {
    openBookingModal(`Membership: ${planName} (${isAnnual ? 'Annual' : 'Monthly'})`);
  };

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
          <span className="eyebrow">Membership Tiers</span>
          <h1 style={{ marginBottom: '1.25rem' }}>
            Straightforward, Honest Memberships<span style={{ color: 'var(--accent-primary)' }}>.</span>
          </h1>
          <p className="lead-text" style={{ margin: '0 auto' }}>
            No hidden maintenance fees, no aggressive sales contracts. Choose the tier that matches your training frequency and coaching needs.
          </p>

          {/* Billing Interval Toggle */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '1rem',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-medium)',
            padding: '0.4rem 0.6rem',
            borderRadius: 'var(--radius-full)',
            marginTop: '2.5rem'
          }}>
            <button
              onClick={() => setIsAnnual(false)}
              style={{
                padding: '0.55rem 1.4rem',
                borderRadius: 'var(--radius-full)',
                background: !isAnnual ? 'var(--accent-primary)' : 'transparent',
                color: !isAnnual ? '#0E0F12' : 'var(--text-secondary)',
                fontWeight: !isAnnual ? 700 : 500,
                fontSize: '0.875rem',
                transition: 'all var(--transition-fast)'
              }}
            >
              Monthly Billing
            </button>

            <button
              onClick={() => setIsAnnual(true)}
              style={{
                padding: '0.55rem 1.4rem',
                borderRadius: 'var(--radius-full)',
                background: isAnnual ? 'var(--accent-primary)' : 'transparent',
                color: isAnnual ? '#0E0F12' : 'var(--text-secondary)',
                fontWeight: isAnnual ? 700 : 500,
                fontSize: '0.875rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                transition: 'all var(--transition-fast)'
              }}
            >
              <span>Annual Commitment</span>
              <span style={{
                background: isAnnual ? '#0E0F12' : 'rgba(34, 197, 94, 0.15)',
                color: isAnnual ? '#E58A2B' : '#22C55E',
                fontSize: '0.7rem',
                padding: '0.15rem 0.45rem',
                borderRadius: 'var(--radius-full)',
                fontWeight: 700
              }}>
                Save 20%
              </span>
            </button>
          </div>

        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="section">
        <div className="container">
          
          <div className="grid-3" style={{ alignItems: 'stretch', gap: '2rem', marginBottom: '5rem' }}>
            {membershipsData.plans.map((plan) => {
              const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
              return (
                <div 
                  key={plan.id}
                  className={`forge-card ${plan.popular ? 'forge-card-glow' : ''}`}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    border: plan.popular ? '2px solid var(--accent-primary)' : '1px solid var(--border-medium)',
                    background: plan.popular ? 'linear-gradient(180deg, #181B22 0%, #111317 100%)' : 'var(--bg-card)'
                  }}
                >
                  <div>
                    {plan.popular && (
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        right: '1.5rem',
                        background: 'var(--accent-primary)',
                        color: '#0E0F12',
                        fontSize: '0.7rem',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        padding: '0.35rem 0.85rem',
                        borderRadius: '0 0 var(--radius-sm) var(--radius-sm)'
                      }}>
                        Most Popular
                      </div>
                    )}

                    <div className="badge badge-accent" style={{ marginBottom: '0.75rem' }}>
                      {plan.badge}
                    </div>

                    <h3 style={{ fontSize: '1.6rem', marginBottom: '0.35rem' }}>{plan.name}</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', minHeight: '40px' }}>
                      {plan.tagline}
                    </p>

                    {/* Price Block */}
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.3rem', marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)' }}>
                      <span style={{ fontSize: '1.25rem', color: 'var(--text-muted)' }}>$</span>
                      <span style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '3.2rem',
                        fontWeight: 800,
                        color: 'var(--text-primary)',
                        lineHeight: 1
                      }}>
                        {price}
                      </span>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                        CAD / month
                      </span>
                    </div>

                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                      {plan.description}
                    </p>

                    {/* Features List */}
                    <div style={{ marginBottom: '2rem' }}>
                      <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', display: 'block', marginBottom: '0.75rem' }}>
                        Included In Plan:
                      </span>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                        {plan.features.map((feat, idx) => (
                          <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.875rem', color: 'var(--text-primary)' }}>
                            <Check size={16} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <button 
                      onClick={() => handleSelectPlan(plan.name)}
                      className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}
                      style={{ width: '100%', padding: '0.9rem' }}
                    >
                      <span>{plan.ctaText}</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* =========================================================================
              MEMBERSHIP COMPARISON TABLE
              ========================================================================= */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-medium)',
            borderRadius: 'var(--radius-lg)',
            padding: 'clamp(1.5rem, 3vw, 2.5rem)',
            boxShadow: 'var(--shadow-md)'
          }}>
            
            <div style={{ marginBottom: '2rem' }}>
              <span className="eyebrow">Feature Breakdown</span>
              <h3 style={{ fontSize: '1.75rem' }}>Comprehensive Tier Comparison</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                Compare exact inclusions across Starter, Plus, and Elite tiers.
              </p>
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                textAlign: 'left',
                minWidth: '600px'
              }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--border-medium)' }}>
                    <th style={{ padding: '1rem 0.75rem', color: 'var(--text-primary)', fontSize: '0.9rem', width: '40%' }}>Feature / Inclusions</th>
                    <th style={{ padding: '1rem 0.75rem', color: 'var(--text-primary)', fontSize: '0.9rem', width: '20%' }}>Starter ($89/mo)</th>
                    <th style={{ padding: '1rem 0.75rem', color: 'var(--accent-primary)', fontSize: '0.9rem', width: '20%' }}>Plus ($149/mo)</th>
                    <th style={{ padding: '1rem 0.75rem', color: 'var(--text-primary)', fontSize: '0.9rem', width: '20%' }}>Elite ($229/mo)</th>
                  </tr>
                </thead>
                <tbody>
                  {membershipsData.comparisonMatrix.map((row, idx) => (
                    <tr 
                      key={idx}
                      style={{ 
                        borderBottom: '1px solid var(--border-subtle)',
                        backgroundColor: idx % 2 === 0 ? 'transparent' : 'rgba(255, 255, 255, 0.015)'
                      }}
                    >
                      <td style={{ padding: '0.9rem 0.75rem', fontSize: '0.875rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                        {row.feature}
                      </td>
                      <td style={{ padding: '0.9rem 0.75rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                        {row.starter}
                      </td>
                      <td style={{ padding: '0.9rem 0.75rem', fontSize: '0.85rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
                        {row.plus}
                      </td>
                      <td style={{ padding: '0.9rem 0.75rem', fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                        {row.elite}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <div className="demo-disclaimer-pill">
                <Info size={14} color="var(--accent-primary)" />
                <span>Demo Notice: Fictional demo pricing for portfolio demonstration.</span>
              </div>

              <button 
                onClick={() => openBookingModal()}
                className="btn btn-outline btn-sm"
              >
                <span>Request a Free Studio Visit First</span>
                <ArrowRight size={14} />
              </button>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
