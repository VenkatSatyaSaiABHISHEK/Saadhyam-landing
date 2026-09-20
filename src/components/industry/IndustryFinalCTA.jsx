import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle2, Shield } from 'lucide-react';

export default function IndustryFinalCTA({ industry, onOpenModal }) {
  return (
    <section 
      style={{ 
        padding: '120px 0', 
        background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(244, 114, 182, 0.18), transparent 70%), #ffffff',
        borderTop: '1px solid rgba(236, 72, 153, 0.15)',
        position: 'relative',
        overflow: 'hidden' 
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div 
          style={{
            maxWidth: '920px',
            margin: '0 auto',
            textAlign: 'center',
            padding: '56px 40px',
            borderRadius: '32px',
            background: 'linear-gradient(135deg, rgba(253, 242, 248, 0.9) 0%, rgba(255, 255, 255, 0.95) 100%)',
            border: '2px solid rgba(236, 72, 153, 0.3)',
            boxShadow: '0 25px 70px -15px rgba(236, 72, 153, 0.2)'
          }}
        >
          <div 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 14px',
              borderRadius: '9999px',
              background: '#ffffff',
              border: '1px solid rgba(236, 72, 153, 0.3)',
              fontSize: '12px',
              fontWeight: 700,
              color: '#db2777',
              marginBottom: '20px'
            }}
          >
            <Sparkles size={13} />
            <span>Scale With Saadhyam</span>
          </div>

          <h2 
            style={{ 
              fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', 
              fontWeight: 850, 
              color: '#09090b', 
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: '20px'
            }}
          >
            Build Your {industry.name} AI Workforce
          </h2>

          <p 
            style={{ 
              fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)', 
              color: '#475569', 
              lineHeight: 1.6, 
              maxWidth: '680px', 
              margin: '0 auto 36px' 
            }}
          >
            Tell Saadhyam what your business does. We’ll show you where AI can automate your workflows and deploy your first digital employees in under 24 hours.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '28px' }}>
            <button
              onClick={onOpenModal}
              className="btn-primary"
              style={{
                padding: '16px 36px',
                fontSize: '16px',
                fontWeight: 700,
                borderRadius: '9999px',
                boxShadow: '0 10px 25px -5px rgba(236, 72, 153, 0.4)'
              }}
            >
              <span>Start Free</span>
              <ArrowRight size={18} />
            </button>

            <button
              onClick={onOpenModal}
              style={{
                padding: '16px 32px',
                fontSize: '16px',
                fontWeight: 700,
                borderRadius: '9999px',
                background: '#ffffff',
                border: '1.5px solid rgba(236, 72, 153, 0.3)',
                color: '#09090b',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#ec4899';
                e.currentTarget.style.background = '#fdf2f8';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(236, 72, 153, 0.3)';
                e.currentTarget.style.background = '#ffffff';
              }}
            >
              Book a Demo
            </button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', fontSize: '13px', color: '#64748b' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={15} className="text-pink-500" />
              <span>Deploy in 24 Hours</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={15} className="text-pink-500" />
              <span>No Credit Card Required</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Shield size={15} className="text-pink-500" />
              <span>SOC 2 & GDPR Ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
