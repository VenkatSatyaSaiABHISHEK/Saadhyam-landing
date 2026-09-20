import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Workflow, Clock, ShieldCheck, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';

const pillars = [
  {
    title: 'Role-Based Intelligence',
    icon: UserCheck,
    color: '#a855f7',
    summary: 'Every AI Human is designed around a specific responsibility.',
    description: 'Unlike generic LLM chats, Saadhyam builds digital personas calibrated with specialized domain rules, department KPIs, and precise tool boundaries.'
  },
  {
    title: 'Workflow Execution',
    icon: Workflow,
    color: '#ec4899',
    summary: 'Turn business processes into executable AI workflows.',
    description: 'Connect triggers, condition branches, third-party APIs, and fallback logic so business operations run end-to-end without stopping.'
  },
  {
    title: 'Persistent Workforce',
    icon: Clock,
    color: '#3b82f6',
    summary: 'AI Humans continuously perform tasks instead of waiting for prompts.',
    description: 'Your digital employees run 24 hours a day, 7 days a week. They monitor queues, catch exceptions, and process incoming events immediately.'
  },
  {
    title: 'Human Oversight',
    icon: ShieldCheck,
    color: '#10b981',
    summary: 'Humans stay in control with visibility, approvals, and intervention.',
    description: 'Define human-in-the-loop approval thresholds for high-stakes transactions. Inspect every audit log and intervene with a single click.'
  }
];

export default function WhySaadhyam({ onOpenModal }) {
  return (
    <section id="why-saadhyam" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 56px' }}>
          <div className="badge-tag" style={{ marginBottom: '16px' }}>
            <Zap size={13} />
            <span>THE COMPETITIVE EDGE</span>
          </div>

          <h2 style={{ fontSize: '46px', lineHeight: 1.15, marginBottom: '18px', color: '#ffffff' }}>
            AI isn’t the advantage.{' '}
            <span className="text-gradient">Your AI workforce is.</span>
          </h2>

          <p style={{ fontSize: '18px', color: '#a1a1aa', lineHeight: 1.6 }}>
            Anyone can access raw AI models. The real strategic moat is the coordinated digital workforce you train, deploy, and govern inside your business.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
            maxWidth: '1120px',
            margin: '0 auto 40px'
          }}
        >
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="cyber-card"
                style={{
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: 'rgba(255,255,255,0.04)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: pillar.color,
                      marginBottom: '20px',
                      border: `1px solid ${pillar.color}40`
                    }}
                  >
                    <Icon size={22} />
                  </div>

                  <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#ffffff', marginBottom: '10px' }}>
                    {pillar.title}
                  </h3>

                  <div style={{ fontSize: '14px', fontWeight: 600, color: '#d8b4fe', marginBottom: '12px' }}>
                    {pillar.summary}
                  </div>

                  <p style={{ fontSize: '14px', color: '#a1a1aa', lineHeight: 1.5 }}>
                    {pillar.description}
                  </p>
                </div>

                <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ fontSize: '12px', color: pillar.color, display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <CheckCircle2 size={13} /> Enterprise Standard
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
