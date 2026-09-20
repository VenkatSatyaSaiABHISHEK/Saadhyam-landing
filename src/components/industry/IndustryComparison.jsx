import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Sparkles, Bot, Layers } from 'lucide-react';

export default function IndustryComparison({ industry }) {
  const comparisonRows = [
    {
      capability: 'Stores information',
      traditional: 'Passive database (requires humans to type data into CRM/ERP)',
      saadhyam: 'Active intelligence (extracts, logs, and indexes data autonomously)'
    },
    {
      capability: 'Executes workflows',
      traditional: 'Static rules (if-this-then-that triggers that easily break)',
      saadhyam: 'Adaptive reasoning (navigates edge cases and multi-agent handoffs)'
    },
    {
      capability: 'Responds to customers',
      traditional: 'Rigid scripted chatbots with repetitive button menus',
      saadhyam: 'Contextual, natural dialogue across WhatsApp, voice, and web'
    },
    {
      capability: 'Follows up',
      traditional: 'Automated generic email blasts that get marked as spam',
      saadhyam: 'Persistent, hyper-personalized multi-channel nurture cadences'
    },
    {
      capability: 'Generates reports',
      traditional: 'Manual CSV exports, pivot tables, and delayed weekend spreadsheets',
      saadhyam: 'Real-time telemetry, automated briefs, and audio summaries'
    },
    {
      capability: 'Assigns tasks',
      traditional: 'Managers manually assign tickets and chase employees',
      saadhyam: 'Intelligent routing based on workload, role, and priority'
    },
    {
      capability: 'Coordinates work',
      traditional: 'Siloed departments relying on disjointed Slack channels and emails',
      saadhyam: 'Multi-agent orchestration with seamless data and context handoffs'
    },
    {
      capability: 'Learns from business context',
      traditional: 'Static software that never learns from company documents or past deals',
      saadhyam: 'Continuous learning from company SOPs, brochures, and feedback'
    }
  ];

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
            <Bot size={13} />
            <span>The Paradigm Shift</span>
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
            More Than Software. An AI Workforce.
          </h2>

          <p style={{ fontSize: '16px', color: '#475569', lineHeight: 1.65 }}>
            Traditional software only records what humans do. Saadhyam digital employees actually perform the work, coordinate tasks, and drive your business forward.
          </p>
        </div>

        {/* Comparison Table */}
        <div 
          style={{
            maxWidth: '960px',
            margin: '0 auto',
            borderRadius: '24px',
            background: '#ffffff',
            border: '1.5px solid rgba(236, 72, 153, 0.25)',
            boxShadow: '0 20px 50px -15px rgba(236, 72, 153, 0.12)',
            overflow: 'hidden'
          }}
        >
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
              <thead>
                <tr style={{ background: 'linear-gradient(90deg, #fdf2f8, #faf5ff)', borderBottom: '1.5px solid rgba(236, 72, 153, 0.2)' }}>
                  <th style={{ padding: '20px 24px', fontWeight: 850, color: '#09090b', width: '28%' }}>
                    OPERATIONAL CAPABILITY
                  </th>
                  <th style={{ padding: '20px 24px', fontWeight: 750, color: '#64748b', width: '36%' }}>
                    TRADITIONAL SOFTWARE
                  </th>
                  <th style={{ padding: '20px 24px', fontWeight: 850, color: '#db2777', width: '36%' }}>
                    SAADHYAM AI WORKFORCE
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, idx) => (
                  <tr 
                    key={idx}
                    style={{ 
                      borderBottom: idx === comparisonRows.length - 1 ? 'none' : '1px solid rgba(236, 72, 153, 0.1)',
                      background: idx % 2 === 0 ? '#ffffff' : '#faf8f9'
                    }}
                  >
                    <td style={{ padding: '18px 24px', fontWeight: 750, color: '#09090b' }}>
                      {row.capability}
                    </td>
                    <td style={{ padding: '18px 24px', color: '#64748b', lineHeight: 1.5 }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        <X size={15} className="text-slate-400 flex-shrink-0" style={{ marginTop: '3px' }} />
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                    <td style={{ padding: '18px 24px', color: '#1e293b', fontWeight: 600, lineHeight: 1.5 }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        <Check size={16} className="text-pink-600 flex-shrink-0" style={{ marginTop: '2px' }} />
                        <span>{row.saadhyam}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
