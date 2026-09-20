import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export default function FinalCTA({ onOpenModal }) {
  return (
    <section 
      className="section" 
      style={{ 
        position: 'relative',
        padding: '120px 0',
        overflow: 'hidden'
      }}
    >
      {/* Background radial glow */}
      <div 
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '750px',
          height: '380px',
          background: 'radial-gradient(ellipse at center, rgba(236, 72, 153, 0.22) 0%, rgba(168, 85, 247, 0.12) 50%, transparent 75%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '860px', margin: '0 auto' }}>
        <div className="badge-tag" style={{ marginBottom: '24px' }}>
          <Zap size={13} />
          <span>START TODAY</span>
        </div>

        <h2 style={{
          fontSize: '56px',
          fontWeight: 900,
          letterSpacing: '-0.03em',
          lineHeight: 1.1,
          color: '#09090b',
          marginBottom: '20px'
        }}>
          Your next employee{' '}
          <span className="text-gradient">could be AI.</span>
        </h2>

        <p style={{
          fontSize: '20px',
          color: '#475569',
          lineHeight: 1.6,
          maxWidth: '680px',
          margin: '0 auto 36px'
        }}>
          Build your first AI Human and see what your business can automate, execute, and scale with zero manual prompt fatigue.
        </p>

        {/* Action Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '28px' }}>
          <button
            onClick={onOpenModal}
            className="btn-primary"
            style={{ padding: '18px 40px', fontSize: '17px', borderRadius: '9999px' }}
          >
            <span>Create Your First AI Human</span>
            <ArrowRight size={18} />
          </button>

          <a
            href="#the-big-idea"
            className="btn-secondary"
            style={{ textDecoration: 'none', padding: '18px 32px', fontSize: '17px', borderRadius: '9999px' }}
          >
            Explore Saadhyam
          </a>
        </div>

        <div style={{ fontSize: '14px', color: '#64748b', fontWeight: 600, letterSpacing: '0.04em' }}>
          Build the workforce of tomorrow. Today.
        </div>

        <div style={{
          marginTop: '36px',
          paddingTop: '28px',
          borderTop: '1px solid rgba(236, 72, 153, 0.18)',
          fontSize: '15px',
          fontWeight: 800,
          color: '#db2777',
          letterSpacing: '0.05em'
        }}>
          Saadhyam — Build Your AI Workforce.
        </div>
      </div>
    </section>
  );
}
