import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export default function IndustryIntegrations({ industry }) {
  const integrations = industry.integrations || [];

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
              background: 'rgba(236, 72, 153, 0.1)',
              border: '1px solid rgba(236, 72, 153, 0.25)',
              fontSize: '12px',
              fontWeight: 700,
              color: '#db2777',
              marginBottom: '14px'
            }}
          >
            <Cpu size={13} />
            <span>Ecosystem Connectors</span>
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
            Connects With Your {industry.name} Stack
          </h2>

          <p style={{ fontSize: '16px', color: '#475569', lineHeight: 1.65 }}>
            Saadhyam integrates natively into the CRMs, communications tools, scheduling platforms, and databases your business already relies on.
          </p>
        </div>

        {/* Integrations Grid */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
            gap: '20px',
            maxWidth: '1020px',
            margin: '0 auto 40px'
          }}
        >
          {integrations.map((tool, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              style={{
                padding: '20px 24px',
                borderRadius: '16px',
                background: '#faf8f9',
                border: '1px solid rgba(236, 72, 153, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(236, 72, 153, 0.45)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(236, 72, 153, 0.2)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div>
                <div style={{ fontSize: '15px', fontWeight: 800, color: '#09090b' }}>
                  {tool.name}
                </div>
                <div style={{ fontSize: '12px', color: '#64748b', marginTop: '2px' }}>
                  {tool.category}
                </div>
              </div>

              <div 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '4px', 
                  fontSize: '11px', 
                  fontWeight: 700, 
                  color: '#059669',
                  background: 'rgba(16, 185, 129, 0.1)',
                  padding: '3px 8px',
                  borderRadius: '6px'
                }}
              >
                <CheckCircle2 size={12} />
                <span>Verified</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom API Callout Card */}
        <div 
          style={{
            maxWidth: '840px',
            margin: '0 auto',
            padding: '20px 28px',
            borderRadius: '16px',
            background: 'linear-gradient(135deg, #fdf2f8, #faf5ff)',
            border: '1.5px solid rgba(236, 72, 153, 0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px'
          }}
        >
          <div>
            <div style={{ fontSize: '14.5px', fontWeight: 800, color: '#09090b' }}>
              Have custom proprietary ERP or legacy software?
            </div>
            <div style={{ fontSize: '13px', color: '#64748b', marginTop: '2px' }}>
              Saadhyam supports custom REST APIs, Webhooks, SQL connectors, and secure on-premise gateways.
            </div>
          </div>
          <span style={{ fontSize: '13px', fontWeight: 700, color: '#db2777' }}>
            Custom Connectors Ready →
          </span>
        </div>

      </div>
    </section>
  );
}
