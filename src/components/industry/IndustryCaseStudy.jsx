import React from 'react';
import { motion } from 'framer-motion';
import { Building, Award, CheckCircle2, ArrowRight } from 'lucide-react';

export default function IndustryCaseStudy({ industry, onOpenModal }) {
  const caseStudy = industry.caseStudy;
  if (!caseStudy) return null;

  return (
    <section 
      style={{ 
        padding: '100px 0', 
        background: '#ffffff',
        borderTop: '1px solid rgba(236, 72, 153, 0.12)',
        borderBottom: '1px solid rgba(236, 72, 153, 0.12)',
        position: 'relative' 
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 56px' }}>
          <div 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 14px',
              borderRadius: '9999px',
              background: 'rgba(236, 72, 153, 0.1)',
              border: '1px solid rgba(236, 72, 153, 0.25)',
              fontSize: '12px',
              fontWeight: 700,
              color: '#db2777',
              marginBottom: '14px'
            }}
          >
            <Award size={13} />
            <span>Field Deployment Spotlight</span>
          </div>

          <h2 
            style={{ 
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', 
              fontWeight: 850, 
              color: '#09090b', 
              lineHeight: 1.12,
              letterSpacing: '-0.02em',
              marginBottom: '16px'
            }}
          >
            How Leading {industry.name} Organizations Deploy Saadhyam
          </h2>

          <p style={{ fontSize: '16px', color: '#475569', lineHeight: 1.65 }}>
            Real-world operational transformations delivered through autonomous AI workforce deployment.
          </p>
        </div>

        {/* Case Study Card */}
        <div 
          style={{
            maxWidth: '960px',
            margin: '0 auto',
            borderRadius: '24px',
            background: 'linear-gradient(135deg, #fdf2f8 0%, #faf8f9 100%)',
            border: '2px solid rgba(236, 72, 153, 0.3)',
            boxShadow: '0 20px 50px -15px rgba(236, 72, 153, 0.15)',
            padding: '40px'
          }}
        >
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', borderBottom: '1.5px solid rgba(236, 72, 153, 0.18)', paddingBottom: '20px', marginBottom: '28px' }}>
            <div>
              <span style={{ fontSize: '11px', fontWeight: 800, color: '#db2777', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                CUSTOMER SPOTLIGHT
              </span>
              <h3 style={{ fontSize: '24px', fontWeight: 850, color: '#09090b', margin: '4px 0 2px' }}>
                {caseStudy.company}
              </h3>
              <div style={{ fontSize: '13px', color: '#64748b' }}>
                {caseStudy.type}
              </div>
            </div>

            <span 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                borderRadius: '9999px',
                background: '#ffffff',
                border: '1px solid rgba(236, 72, 153, 0.25)',
                fontSize: '12px',
                fontWeight: 700,
                color: '#db2777'
              }}
            >
              <CheckCircle2 size={14} className="text-emerald-500" />
              <span>Verified Deployment Metrics</span>
            </span>
          </div>

          {/* 3 Pillars: Challenge, Solution, Result */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '28px', marginBottom: '32px' }}>
            <div style={{ padding: '20px', borderRadius: '16px', background: '#ffffff', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#dc2626', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px' }}>
                The Operational Challenge
              </div>
              <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                {caseStudy.challenge}
              </p>
            </div>

            <div style={{ padding: '20px', borderRadius: '16px', background: '#ffffff', border: '1px solid rgba(236, 72, 153, 0.25)' }}>
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#db2777', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px' }}>
                The Saadhyam Solution
              </div>
              <p style={{ fontSize: '14px', color: '#1e293b', fontWeight: 600, lineHeight: 1.6, margin: 0 }}>
                {caseStudy.solution}
              </p>
            </div>

            <div style={{ padding: '20px', borderRadius: '16px', background: '#ffffff', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#059669', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px' }}>
                The Measured Result
              </div>
              <p style={{ fontSize: '14px', color: '#065f46', fontWeight: 600, lineHeight: 1.6, margin: 0 }}>
                {caseStudy.result}
              </p>
            </div>
          </div>

          {/* Bottom Action */}
          <div style={{ textAlign: 'center' }}>
            <button
              onClick={onOpenModal}
              className="btn-primary"
              style={{ padding: '12px 28px', borderRadius: '9999px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <span>Build an AI Workforce for Your Business</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
