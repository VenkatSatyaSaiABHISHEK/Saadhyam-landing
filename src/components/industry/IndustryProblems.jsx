import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, TrendingDown, Clock, ShieldAlert, ZapOff } from 'lucide-react';

export default function IndustryProblems({ industry }) {
  const problems = industry.problems || [];

  return (
    <section 
      style={{ 
        padding: '90px 0', 
        background: '#ffffff',
        borderTop: '1px solid rgba(236, 72, 153, 0.12)',
        borderBottom: '1px solid rgba(236, 72, 153, 0.12)',
        position: 'relative' 
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 56px' }}>
          <div 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 14px',
              borderRadius: '9999px',
              background: 'rgba(239, 68, 68, 0.08)',
              border: '1px solid rgba(239, 68, 68, 0.25)',
              fontSize: '12px',
              fontWeight: 700,
              color: '#dc2626',
              marginBottom: '14px'
            }}
          >
            <AlertCircle size={13} />
            <span>The Traditional Bottleneck</span>
          </div>

          <h2 
            style={{ 
              fontSize: 'clamp(2rem, 3.8vw, 2.8rem)', 
              fontWeight: 850, 
              color: '#09090b', 
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              marginBottom: '16px'
            }}
          >
            Built Around the Problems Your Industry Faces
          </h2>

          <p style={{ fontSize: '16px', color: '#475569', lineHeight: 1.6 }}>
            Every industry has specific failure points where traditional software and manual human teams get overwhelmed. Saadhyam AI workforce replaces friction with autonomous execution.
          </p>
        </div>

        {/* Problems Grid */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '24px' 
          }}
        >
          {problems.map((prob, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              style={{
                padding: '28px',
                borderRadius: '20px',
                background: '#faf8f9',
                border: '1px solid rgba(236, 72, 153, 0.18)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.02)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(236, 72, 153, 0.4)';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 12px 24px -6px rgba(236, 72, 153, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(236, 72, 153, 0.18)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.02)';
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <div 
                    style={{ 
                      width: '36px', 
                      height: '36px', 
                      borderRadius: '10px', 
                      background: 'rgba(239, 68, 68, 0.1)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      color: '#dc2626',
                      fontWeight: 800,
                      fontSize: '14px'
                    }}
                  >
                    0{idx + 1}
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#09090b', lineHeight: 1.3 }}>
                    {prob.title}
                  </h3>
                </div>

                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.65, marginBottom: '20px' }}>
                  {prob.description}
                </p>
              </div>

              <div 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  padding: '10px 14px', 
                  borderRadius: '10px', 
                  background: 'rgba(239, 68, 68, 0.06)',
                  border: '1px solid rgba(239, 68, 68, 0.15)',
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#b91c1c'
                }}
              >
                <TrendingDown size={14} className="flex-shrink-0" />
                <span>Impact: {prob.impact}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
