import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Users, Cpu, ArrowRight } from 'lucide-react';

export default function FutureOfWork({ onOpenModal }) {
  return (
    <section 
      id="future-of-work" 
      className="section" 
      style={{ 
        position: 'relative',
        background: 'radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.14) 0%, rgba(250, 248, 249, 0.98) 75%)',
        borderTop: '1px solid rgba(236, 72, 153, 0.16)',
        borderBottom: '1px solid rgba(236, 72, 153, 0.16)'
      }}
    >
      <div className="container" style={{ textAlign: 'center', maxWidth: '960px', margin: '0 auto' }}>
        <div className="badge-tag" style={{ marginBottom: '24px' }}>
          <Sparkles size={13} />
          <span>THE EXPONENTIAL ENTERPRISE</span>
        </div>

        <h3 style={{ fontSize: '28px', color: '#64748b', fontWeight: 600, marginBottom: '14px', letterSpacing: '-0.01em' }}>
          The company of the future won’t have only employees.
        </h3>

        <div style={{
          fontSize: '64px',
          fontWeight: 900,
          letterSpacing: '-0.04em',
          color: '#09090b',
          lineHeight: 1.1,
          marginBottom: '28px'
        }}>
          It will have an <span className="text-gradient">AI workforce.</span>
        </div>

        <p style={{ fontSize: '20px', color: '#475569', lineHeight: 1.6, maxWidth: '760px', margin: '0 auto 48px' }}>
          A new generation of high-leverage companies will operate with human leaders and autonomous AI Humans working side by side in lockstep.
        </p>

        {/* 4 Pillars Stat Banner */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '16px',
            maxWidth: '860px',
            margin: '0 auto 50px'
          }}
        >
          <div className="cyber-card" style={{ padding: '24px', textAlign: 'center', background: '#ffffff', border: '1px solid rgba(236, 72, 153, 0.16)', boxShadow: '0 4px 15px rgba(236, 72, 153, 0.05)' }}>
            <div style={{ fontSize: '40px', fontWeight: 900, color: '#09090b', letterSpacing: '-0.03em' }}>10</div>
            <div style={{ fontSize: '13px', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '4px', fontWeight: 600 }}>
              Humans
            </div>
          </div>

          <div className="cyber-card" style={{ padding: '24px', textAlign: 'center', background: '#fdf2f8', border: '1.5px solid rgba(236, 72, 153, 0.35)', boxShadow: '0 8px 24px rgba(236, 72, 153, 0.12)' }}>
            <div style={{ fontSize: '40px', fontWeight: 900, color: '#db2777', letterSpacing: '-0.03em' }}>100</div>
            <div style={{ fontSize: '13px', color: '#db2777', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '4px', fontWeight: 700 }}>
              AI Humans
            </div>
          </div>

          <div className="cyber-card" style={{ padding: '24px', textAlign: 'center', background: '#ffffff', border: '1px solid rgba(236, 72, 153, 0.16)', boxShadow: '0 4px 15px rgba(236, 72, 153, 0.05)' }}>
            <div style={{ fontSize: '40px', fontWeight: 900, color: '#09090b', letterSpacing: '-0.03em' }}>One</div>
            <div style={{ fontSize: '13px', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '4px', fontWeight: 600 }}>
              Company
            </div>
          </div>

          <div className="cyber-card" style={{ padding: '24px', textAlign: 'center', background: 'rgba(16, 185, 129, 0.08)', border: '1.5px solid rgba(16, 185, 129, 0.3)', boxShadow: '0 8px 24px rgba(16, 185, 129, 0.08)' }}>
            <div style={{ fontSize: '40px', fontWeight: 900, color: '#059669', letterSpacing: '-0.03em' }}>One</div>
            <div style={{ fontSize: '13px', color: '#059669', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '4px', fontWeight: 700 }}>
              Intelligent Workforce
            </div>
          </div>
        </div>

        <button
          onClick={onOpenModal}
          className="btn-primary"
          style={{ padding: '16px 36px', fontSize: '16px', borderRadius: '9999px' }}
        >
          <span>Build Your Future Workforce Today</span>
          <ArrowRight size={17} />
        </button>
      </div>
    </section>
  );
}
