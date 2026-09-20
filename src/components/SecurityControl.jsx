import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Lock, UserCheck, Eye, FileText, CheckCircle2, 
  KeyRound, AlertOctagon, ArrowRight 
} from 'lucide-react';

const securityFeatures = [
  {
    title: 'Permission Management',
    desc: 'Fine-grained credential scoping. Give AI Humans read-only or scoped write access to business APIs.',
    icon: KeyRound
  },
  {
    title: 'Human-in-the-Loop Approvals',
    desc: 'Gate sensitive actions (e.g. wire transfers >$5k, bulk email sends) with mandatory human manager sign-off.',
    icon: UserCheck
  },
  {
    title: 'Immutable Activity Logs',
    desc: 'Every single API request, database query, and outbound message is timestamped and cryptographically logged.',
    icon: FileText
  },
  {
    title: 'Dynamic Workflow Controls',
    desc: 'Set execution rate limits, retry backoffs, and automated circuit breakers to protect system integrity.',
    icon: AlertOctagon
  },
  {
    title: 'Role-Based Access Control (RBAC)',
    desc: 'Segment digital workforce access based on company department, confidentiality tier, and compliance level.',
    icon: Lock
  },
  {
    title: 'Live Execution Monitoring & Killswitch',
    desc: 'Pause or terminate any running AI Human instantly from the executive command console in real time.',
    icon: Eye
  }
];

export default function SecurityControl({ onOpenModal }) {
  return (
    <section id="security" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 56px' }}>
          <div className="badge-tag" style={{ marginBottom: '16px' }}>
            <ShieldCheck size={13} color="#10b981" />
            <span>ENTERPRISE GOVERNANCE & COMPLIANCE</span>
          </div>

          <h2 style={{ fontSize: '46px', lineHeight: 1.15, marginBottom: '18px', color: '#ffffff' }}>
            Powerful AI.{' '}
            <span className="text-gradient">Controlled by you.</span>
          </h2>

          <p style={{ fontSize: '19px', color: '#d4d4d8', lineHeight: 1.6, maxWidth: '680px', margin: '0 auto' }}>
            Your AI workforce should be powerful — <strong style={{ color: '#ffffff' }}>but always accountable.</strong> Saadhyam provides enterprise-grade guardrails so you stay in total control.
          </p>
        </div>

        {/* Security Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '20px',
            maxWidth: '1080px',
            margin: '0 auto 40px'
          }}
        >
          {securityFeatures.map((feat) => {
            const FeatIcon = feat.icon;
            return (
              <div
                key={feat.title}
                className="cyber-card"
                style={{
                  padding: '24px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px'
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'rgba(16, 185, 129, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#34d399',
                    flexShrink: 0
                  }}
                >
                  <FeatIcon size={20} />
                </div>

                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff', marginBottom: '6px' }}>
                    {feat.title}
                  </h3>
                  <p style={{ fontSize: '13px', color: '#a1a1aa', lineHeight: 1.5 }}>
                    {feat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compliance Badges Bar */}
        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '28px',
            flexWrap: 'wrap',
            padding: '18px 24px',
            background: 'rgba(255, 255, 255, 0.02)',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.06)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#e4e4e7', fontWeight: 600 }}>
            <CheckCircle2 size={16} color="#10b981" /> SOC-2 Type II Compliance Ready
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#e4e4e7', fontWeight: 600 }}>
            <CheckCircle2 size={16} color="#10b981" /> GDPR & CCPA Data Privacy
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#e4e4e7', fontWeight: 600 }}>
            <CheckCircle2 size={16} color="#10b981" /> 256-bit TLS / AES Vault Encryption
          </div>
        </div>
      </div>
    </section>
  );
}
