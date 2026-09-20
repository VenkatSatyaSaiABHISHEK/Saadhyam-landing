import React from 'react';
import { motion } from 'framer-motion';
import { Clock, TrendingUp, CheckCircle, Zap } from 'lucide-react';

export default function IndustryROIMetrics({ industry }) {
  const metrics = industry.roiMetrics || [];

  return (
    <section 
      style={{ 
        padding: '100px 0', 
        background: 'var(--base-bg)',
        position: 'relative' 
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px' }}>
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
            <TrendingUp size={13} />
            <span>Workflow Automation Benchmarks</span>
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
            What Saadhyam Can Automate in {industry.name}
          </h2>

          <p style={{ fontSize: '16px', color: '#475569', lineHeight: 1.65 }}>
            Verified operational benchmarks achieved by digital employee deployments across {industry.name} operations.
          </p>
        </div>

        {/* 4 Core Pillars */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
            gap: '24px',
            maxWidth: '1040px',
            margin: '0 auto' 
          }}
        >
          {metrics.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              style={{
                padding: '32px 24px',
                borderRadius: '20px',
                background: '#ffffff',
                border: '1.5px solid rgba(236, 72, 153, 0.2)',
                boxShadow: '0 8px 25px -6px rgba(236, 72, 153, 0.1)',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div 
                  style={{ 
                    fontSize: 'clamp(2.4rem, 3.5vw, 3.2rem)', 
                    fontWeight: 850, 
                    color: '#db2777',
                    letterSpacing: '-0.03em',
                    lineHeight: 1.05,
                    marginBottom: '8px'
                  }}
                >
                  {item.metric}
                </div>
                <div style={{ fontSize: '16px', fontWeight: 800, color: '#09090b', marginBottom: '8px' }}>
                  {item.label}
                </div>
              </div>

              <div 
                style={{ 
                  fontSize: '12.5px', 
                  color: '#64748b', 
                  lineHeight: 1.5,
                  padding: '8px 12px',
                  borderRadius: '10px',
                  background: '#faf8f9',
                  border: '1px solid rgba(236, 72, 153, 0.12)',
                  marginTop: '16px'
                }}
              >
                {item.subtext}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
