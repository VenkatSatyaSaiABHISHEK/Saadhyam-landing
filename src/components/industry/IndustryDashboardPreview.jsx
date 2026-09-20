import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, CheckCircle, ShieldCheck, Clock, Activity, Sparkles } from 'lucide-react';

export default function IndustryDashboardPreview({ industry }) {
  const metrics = industry.dashboardMetrics || [];

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
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 60px' }}>
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
            <BarChart3 size={13} />
            <span>Executive Visibility</span>
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
            Live {industry.name} Control Center
          </h2>

          <p style={{ fontSize: '16px', color: '#475569', lineHeight: 1.65 }}>
            Monitor your entire digital workforce from a unified command deck. Track active tasks, throughput velocity, agent precision, and revenue impact in real time.
          </p>
        </div>

        {/* Dashboard Grid Card */}
        <div 
          style={{
            maxWidth: '1080px',
            margin: '0 auto',
            borderRadius: '24px',
            background: '#ffffff',
            border: '1.5px solid rgba(236, 72, 153, 0.25)',
            boxShadow: '0 20px 60px -15px rgba(236, 72, 153, 0.15)',
            padding: '36px',
            overflow: 'hidden'
          }}
        >
          {/* KPI Metrics Tiles */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
              gap: '20px', 
              marginBottom: '36px' 
            }}
          >
            {metrics.map((m, idx) => (
              <div 
                key={idx}
                style={{
                  padding: '20px',
                  borderRadius: '16px',
                  background: '#faf8f9',
                  border: '1px solid rgba(236, 72, 153, 0.18)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px'
                }}
              >
                <div style={{ fontSize: '12.5px', fontWeight: 600, color: '#64748b' }}>
                  {m.label}
                </div>
                <div style={{ fontSize: '28px', fontWeight: 850, color: '#09090b', letterSpacing: '-0.02em' }}>
                  {m.value}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11.5px', fontWeight: 700, color: '#059669' }}>
                  <TrendingUp size={13} />
                  <span>{m.change}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Live Agent Operational Telemetry Table */}
          <div style={{ borderTop: '1px solid rgba(236, 72, 153, 0.15)', paddingTop: '28px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px', flexWrap: 'wrap', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Activity size={18} className="text-pink-500" />
                <span style={{ fontSize: '15px', fontWeight: 800, color: '#09090b' }}>
                  Recent Autonomous Agent Executions
                </span>
              </div>
              <span 
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '6px', 
                  fontSize: '12px', 
                  fontWeight: 700, 
                  color: '#059669',
                  background: 'rgba(16, 185, 129, 0.1)',
                  padding: '3px 10px',
                  borderRadius: '9999px'
                }}
              >
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }} />
                Real-Time Data Feed
              </span>
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', textAlign: 'left' }}>
                <thead>
                  <tr style={{ borderBottom: '1.5px solid rgba(236, 72, 153, 0.15)', color: '#64748b' }}>
                    <th style={{ padding: '12px 14px', fontWeight: 700 }}>TIMESTAMP</th>
                    <th style={{ padding: '12px 14px', fontWeight: 700 }}>ASSIGNED AGENT</th>
                    <th style={{ padding: '12px 14px', fontWeight: 700 }}>TASK EXECUTED</th>
                    <th style={{ padding: '12px 14px', fontWeight: 700 }}>STATUS</th>
                    <th style={{ padding: '12px 14px', fontWeight: 700, textAlign: 'right' }}>ACCURACY</th>
                  </tr>
                </thead>
                <tbody>
                  {industry.agents?.slice(0, 4).map((agent, aIdx) => (
                    <tr key={aIdx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                      <td style={{ padding: '14px', color: '#64748b', fontFamily: 'monospace' }}>
                        Just now
                      </td>
                      <td style={{ padding: '14px', fontWeight: 750, color: '#09090b' }}>
                        {agent.name}
                      </td>
                      <td style={{ padding: '14px', color: '#334155' }}>
                        {agent.exampleTasks?.[0] || 'Autonomous workflow sync'}
                      </td>
                      <td style={{ padding: '14px' }}>
                        <span 
                          style={{ 
                            display: 'inline-flex', 
                            alignItems: 'center', 
                            gap: '4px', 
                            fontSize: '11px', 
                            fontWeight: 700, 
                            color: '#059669',
                            background: 'rgba(16, 185, 129, 0.12)',
                            padding: '2px 8px',
                            borderRadius: '6px'
                          }}
                        >
                          <CheckCircle size={12} />
                          COMPLETED
                        </span>
                      </td>
                      <td style={{ padding: '14px', textAlign: 'right', fontWeight: 750, color: '#db2777' }}>
                        100%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
