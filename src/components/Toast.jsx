import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export default function Toast({ toasts, removeToast }) {
  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="toast-fixed-container">
      {toasts.map((toast) => {
        let Icon = CheckCircle2;
        let borderColor = 'rgba(34, 197, 94, 0.4)';
        let iconColor = '#22C55E';

        if (toast.type === 'warning') {
          Icon = AlertCircle;
          borderColor = 'rgba(234, 179, 8, 0.4)';
          iconColor = '#EAB308';
        } else if (toast.type === 'neutral' || toast.type === 'info') {
          Icon = Info;
          borderColor = 'rgba(229, 138, 43, 0.4)';
          iconColor = '#E58A2B';
        }

        return (
          <div
            key={toast.id}
            style={{
              background: '#16181D',
              border: `1px solid ${borderColor}`,
              borderRadius: 'var(--radius-md)',
              padding: '0.85rem 1.25rem',
              boxShadow: '0 8px 30px rgba(0,0,0,0.6)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              minWidth: '280px',
              maxWidth: '420px',
              animation: 'slideUp 0.25s ease-out',
              color: 'var(--text-primary)',
              fontSize: '0.9rem'
            }}
          >
            <Icon size={18} color={iconColor} style={{ flexShrink: 0 }} />
            <span style={{ flex: '1 1 auto', lineHeight: 1.4 }}>{toast.message}</span>
            <button
              onClick={() => removeToast(toast.id)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                display: 'flex',
                padding: '2px'
              }}
            >
              <X size={14} />
            </button>
          </div>
        );
      })}
    </div>
  );
}
