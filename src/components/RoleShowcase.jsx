import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, Headphones, Cpu, Search, DollarSign, UserCheck, 
  ArrowRight, CheckCircle2, Sparkles, Zap, Shield 
} from 'lucide-react';

const rolesData = [
  {
    category: 'Sales',
    title: 'AI Sales Executive',
    icon: TrendingUp,
    accent: '#a855f7',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    description: 'Autonomous outbound & inbound pipeline driver that never leaves a lead cold.',
    pipeline: [
      'Find leads',
      'Qualify',
      'Contact',
      'Follow up',
      'Schedule meetings',
      'Update CRM'
    ],
    kpis: '3.4x faster pipeline velocity • 98% lead qualification precision',
    tools: ['HubSpot', 'Apollo', 'Salesforce', 'Gmail', 'Calendar']
  },
  {
    category: 'Customer Support',
    title: 'AI Support Executive',
    icon: Headphones,
    accent: '#ec4899',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    description: 'Instant multi-channel customer resolution with intelligent escalation rules.',
    pipeline: [
      'Receive request',
      'Understand issue',
      'Resolve',
      'Escalate when needed',
      'Update ticket'
    ],
    kpis: '45s average resolution time • 99.1% CSAT satisfaction',
    tools: ['Zendesk', 'Intercom', 'Linear', 'Slack', 'Email']
  },
  {
    category: 'Operations',
    title: 'AI Operations Executive',
    icon: Cpu,
    accent: '#3b82f6',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    description: 'Continuous monitoring of internal pipelines, webhooks, and team syncs.',
    pipeline: [
      'Monitor workflows',
      'Identify issues',
      'Execute tasks',
      'Coordinate teams',
      'Report status'
    ],
    kpis: '100% SLA adherence • 0 unmonitored system anomalies',
    tools: ['SAP', 'PostgreSQL', 'Webhooks', 'PagerDuty', 'Jira']
  },
  {
    category: 'Research',
    title: 'AI Research Analyst',
    icon: Search,
    accent: '#06b6d4',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    description: 'Deep market intelligence, competitor pricing synthesis, and trend forecasting.',
    pipeline: [
      'Collect information',
      'Analyze',
      'Summarize',
      'Identify insights',
      'Generate reports'
    ],
    kpis: 'Over 200+ sources synthesized weekly • Strategic executive briefings',
    tools: ['Perplexity', 'Notion', 'Google Docs', 'Python API']
  },
  {
    category: 'Finance',
    title: 'AI Finance Assistant',
    icon: DollarSign,
    accent: '#10b981',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
    description: 'Automated invoice reconciliation, fraud detection, and expense audits.',
    pipeline: [
      'Track transactions',
      'Reconcile data',
      'Monitor metrics',
      'Generate reports',
      'Flag anomalies'
    ],
    kpis: '100% audit precision • Zero invoice reconciliation mismatch',
    tools: ['QuickBooks', 'Stripe', 'Excel', 'Plaid', 'Slack']
  },
  {
    category: 'HR',
    title: 'AI HR Assistant',
    icon: UserCheck,
    accent: '#f59e0b',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    description: 'Candidate screening, interview coordination, and seamless team onboarding.',
    pipeline: [
      'Screen applications',
      'Coordinate interviews',
      'Answer questions',
      'Maintain records'
    ],
    kpis: '80% reduction in time-to-screen • 96% candidate calibration',
    tools: ['Greenhouse', 'Workday', 'Google Calendar', 'Notion']
  }
];

export default function RoleShowcase({ onOpenModal }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Sales', 'Customer Support', 'Operations', 'Research', 'Finance', 'HR'];

  const filteredRoles = selectedCategory === 'All' 
    ? rolesData 
    : rolesData.filter(r => r.category === selectedCategory);

  return (
    <section id="roles" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 48px' }}>
          <div className="badge-tag" style={{ marginBottom: '16px' }}>
            <Sparkles size={13} />
            <span>SPECIALIZED DIGITAL EMPLOYEES</span>
          </div>

          <h2 style={{ fontSize: '46px', lineHeight: 1.15, marginBottom: '18px', color: '#ffffff' }}>
            Build an AI Human for{' '}
            <span className="text-gradient">almost any digital role.</span>
          </h2>

          <p style={{ fontSize: '18px', color: '#a1a1aa', lineHeight: 1.6 }}>
            Every role in your company has repeatable workflows. Saadhyam allows you to create digital employees designed specifically for those functions.
          </p>
        </div>

        {/* Category Filters */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '40px' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '8px 18px',
                borderRadius: '9999px',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                background: selectedCategory === cat ? 'rgba(168, 85, 247, 0.25)' : 'rgba(255, 255, 255, 0.03)',
                border: selectedCategory === cat ? '1px solid #a855f7' : '1px solid rgba(255, 255, 255, 0.08)',
                color: selectedCategory === cat ? '#ffffff' : '#a1a1aa',
                transition: 'all 0.2s'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Roles Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '24px'
          }}
        >
          {filteredRoles.map((role) => {
            const RoleIcon = role.icon;
            return (
              <div
                key={role.title}
                className="cyber-card"
                style={{
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  {/* Top Bar */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <img
                        src={role.avatar}
                        alt={role.title}
                        style={{
                          width: '46px',
                          height: '46px',
                          borderRadius: '12px',
                          objectFit: 'cover',
                          border: `1.5px solid ${role.accent}`
                        }}
                      />
                      <div>
                        <div style={{ fontSize: '12px', color: role.accent, fontWeight: 700, textTransform: 'uppercase' }}>
                          {role.category}
                        </div>
                        <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#ffffff' }}>
                          {role.title}
                        </h3>
                      </div>
                    </div>

                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      background: 'rgba(255,255,255,0.04)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: role.accent
                    }}>
                      <RoleIcon size={18} />
                    </div>
                  </div>

                  <p style={{ fontSize: '14px', color: '#a1a1aa', lineHeight: 1.5, marginBottom: '20px' }}>
                    {role.description}
                  </p>

                  {/* Execution Pipeline Steps */}
                  <div style={{ marginBottom: '20px' }}>
                    <div style={{ fontSize: '11px', color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700, marginBottom: '8px' }}>
                      Operational Pipeline
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', alignItems: 'center' }}>
                      {role.pipeline.map((step, idx) => (
                        <React.Fragment key={step}>
                          <span style={{
                            fontSize: '11px',
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            padding: '3px 8px',
                            borderRadius: '6px',
                            color: '#d4d4d8',
                            fontWeight: 500
                          }}>
                            {step}
                          </span>
                          {idx < role.pipeline.length - 1 && (
                            <span style={{ color: '#71717a', fontSize: '11px' }}>→</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* KPI Bar */}
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    borderRadius: '10px',
                    padding: '10px 14px',
                    fontSize: '12px',
                    color: '#e4e4e7',
                    marginBottom: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <CheckCircle2 size={14} color="#10b981" />
                    <span>{role.kpis}</span>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    {role.tools.slice(0, 3).map((tool) => (
                      <span key={tool} style={{ fontSize: '10px', color: '#71717a', fontFamily: 'monospace' }}>
                        {tool}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={onOpenModal}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: role.accent,
                      fontSize: '13px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <span>Hire This AI Human</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
