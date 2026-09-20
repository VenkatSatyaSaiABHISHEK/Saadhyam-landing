import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, Headphones, Cpu, Search, DollarSign, UserCheck, 
  ArrowRight, CheckCircle2, Sparkles, Zap, Shield 
} from 'lucide-react';
import { Blobatar } from '@blobatar/react';

const rolesData = [
  {
    category: 'Sales',
    title: 'AI Sales Executive',
    blobatarName: 'AlexSales',
    icon: TrendingUp,
    accent: '#ec4899',
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
    blobatarName: 'MayaSupport',
    icon: Headphones,
    accent: '#ec4899',
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
    blobatarName: 'MarcusOps',
    icon: Cpu,
    accent: '#a855f7',
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
    blobatarName: 'ElenaResearch',
    icon: Search,
    accent: '#06b6d4',
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
    blobatarName: 'DavidFinance',
    icon: DollarSign,
    accent: '#10b981',
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
    blobatarName: 'JordanHR',
    icon: UserCheck,
    accent: '#f59e0b',
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

          <h2 style={{ fontSize: '46px', lineHeight: 1.15, marginBottom: '18px', color: '#09090b' }}>
            Build an AI Human for{' '}
            <span className="text-gradient">almost any digital role.</span>
          </h2>

          <p style={{ fontSize: '18px', color: '#475569', lineHeight: 1.6 }}>
            Every role in your company has repeatable workflows. Saadhyam allows you to create digital employees designed specifically for those functions.
          </p>
        </div>

        {/* Category Filters */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '40px' }}>
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '9px 20px',
                  borderRadius: '9999px',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  background: isSelected ? 'linear-gradient(135deg, #ec4899, #a855f7)' : '#ffffff',
                  border: isSelected ? '1px solid transparent' : '1px solid rgba(236, 72, 153, 0.2)',
                  color: isSelected ? '#ffffff' : '#475569',
                  boxShadow: isSelected ? '0 4px 15px rgba(236, 72, 153, 0.3)' : '0 2px 8px rgba(0,0,0,0.03)',
                  transition: 'all 0.2s'
                }}
              >
                {cat}
              </button>
            );
          })}
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
                  justifyContent: 'space-between',
                  background: '#ffffff'
                }}
              >
                <div>
                  {/* Top Bar */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div className="blobatar-frame" style={{ width: '50px', height: '50px', borderRadius: '14px', flexShrink: 0 }}>
                        <Blobatar name={role.blobatarName} animate="hover" size={44} />
                      </div>
                      <div>
                        <div style={{ fontSize: '11px', color: '#db2777', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                          {role.category}
                        </div>
                        <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#09090b' }}>
                          {role.title}
                        </h3>
                      </div>
                    </div>

                    <div style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      background: 'rgba(236, 72, 153, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: role.accent
                    }}>
                      <RoleIcon size={18} />
                    </div>
                  </div>

                  <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.5, marginBottom: '20px' }}>
                    {role.description}
                  </p>

                  {/* Execution Pipeline Steps */}
                  <div style={{ marginBottom: '20px' }}>
                    <div style={{ fontSize: '11px', color: '#db2777', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700, marginBottom: '8px' }}>
                      Operational Pipeline
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', alignItems: 'center' }}>
                      {role.pipeline.map((step, idx) => (
                        <React.Fragment key={step}>
                          <span style={{
                            fontSize: '11px',
                            background: '#fdf2f8',
                            border: '1px solid rgba(236, 72, 153, 0.18)',
                            padding: '4px 9px',
                            borderRadius: '6px',
                            color: '#09090b',
                            fontWeight: 600
                          }}>
                            {step}
                          </span>
                          {idx < role.pipeline.length - 1 && (
                            <span style={{ color: '#ec4899', fontSize: '11px', fontWeight: 700 }}>→</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* KPI Bar */}
                  <div style={{
                    background: 'rgba(16, 185, 129, 0.08)',
                    border: '1px solid rgba(16, 185, 129, 0.25)',
                    borderRadius: '10px',
                    padding: '10px 14px',
                    fontSize: '12px',
                    color: '#065f46',
                    fontWeight: 600,
                    marginBottom: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <CheckCircle2 size={15} color="#10b981" />
                    <span>{role.kpis}</span>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '16px', borderTop: '1px solid rgba(236, 72, 153, 0.14)' }}>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    {role.tools.slice(0, 3).map((tool) => (
                      <span key={tool} style={{ fontSize: '10px', color: '#64748b', background: '#f8fafc', padding: '2px 7px', borderRadius: '4px', border: '1px solid rgba(0,0,0,0.06)', fontFamily: 'monospace' }}>
                        {tool}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={onOpenModal}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: '#db2777',
                      fontSize: '13px',
                      fontWeight: 700,
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
