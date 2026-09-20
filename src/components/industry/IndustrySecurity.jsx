import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Key, FileCheck, Database, EyeOff } from 'lucide-react';

export default function IndustrySecurity({ industry }) {
  const securityPillars = [
    {
      icon: Lock,
      title: 'Enterprise Data Protection',
      description: 'All business data is encrypted using AES-256 in transit and at rest. Your proprietary data is never used to train public models.'
    },
    {
      icon: Key,
      title: 'Role-Based Access Control',
      description: 'Define granular permissions for each digital employee. Limit file access, API execution capabilities, and financial transaction thresholds.'
    },
    {
      icon: FileCheck,
      title: 'Immutable Audit Logging',
      description: 'Every action, decision, customer message, and system modification is permanently recorded in a searchable audit trail.'
    },
    {
      icon: Database,
      title: 'Business Data Isolation',
      description: 'Dedicated single-tenant environments ensure your customer records, CRM data, and contracts remain strictly isolated.'
    },
    {
      icon: Shield,
      title: 'Secure Integrations',
      description: 'OAuth 2.0 authentication, encrypted webhook endpoints, and least-privilege API tokens ensure zero unauthorized exposure.'
    },
    {
      icon: EyeOff,
      title: 'Human-in-the-Loop Safeguards',
      description: 'Set mandatory human approvals for high-value contracts, refunds, VIP escalations, or anomalous task requests.'
    }
  ];

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
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px' }}>
          <div 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 14px',
              borderRadius: '9999px',
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.25)',
              fontSize: '12px',
              fontWeight: 700,
              color: '#059669',
              marginBottom: '14px'
            }}
          >
            <Shield size={13} />
            <span>Governance & Trust</span>
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
            Enterprise Security & Governance
          </h2>

          <p style={{ fontSize: '16px', color: '#475569', lineHeight: 1.65 }}>
            Built for mission-critical {industry.name} operations. Deploy autonomous agents with enterprise-grade data protection, role-based controls, and complete oversight.
          </p>
        </div>

        {/* Security Pillars Grid */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '24px',
            maxWidth: '1040px',
            margin: '0 auto' 
          }}
        >
          {securityPillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.06 }}
                style={{
                  padding: '28px',
                  borderRadius: '20px',
                  background: '#faf8f9',
                  border: '1px solid rgba(236, 72, 153, 0.18)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(236, 72, 153, 0.4)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(236, 72, 153, 0.18)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div 
                  style={{ 
                    width: '44px', 
                    height: '44px', 
                    borderRadius: '12px', 
                    background: '#ffffff', 
                    border: '1px solid rgba(236, 72, 153, 0.25)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    color: '#db2777'
                  }}
                >
                  <Icon size={20} />
                </div>
                <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#09090b', margin: 0 }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: '13.5px', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                  {p.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
