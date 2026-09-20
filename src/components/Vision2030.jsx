import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle2, Sparkles, ArrowRight, Sun } from 'lucide-react';

const mondaySchedule = [
  { time: '09:00 AM', task: '10 human leaders walk into the office with their morning coffee.', role: 'Human Team', status: 'Arriving' },
  { time: 'Behind the Scenes', task: '100+ AI Humans have already been operating autonomously since midnight.', role: 'AI Workforce', status: 'Continuous' },
  { time: '09:01 AM', task: 'AI Customer Support is already resolving overseas inquiries with zero queue backlog.', role: 'Maya', status: 'Resolved' },
  { time: '09:02 AM', task: 'AI Sales Executive has followed up with 48 high-intent enterprise inbound signups.', role: 'Alex', status: 'Outreach Sent' },
  { time: '09:03 AM', task: 'AI Proposal Human has generated 6 customized pricing decks ready for review.', role: 'Christian', status: 'Prepared' },
  { time: '09:04 AM', task: 'AI Operations Manager has verified inventory sync across 4 regional 3PL hubs.', role: 'Marcus', status: 'Synced' },
  { time: '09:05 AM', task: 'AI Finance Assistant has audited yesterday’s merchant settlements down to the cent.', role: 'David', status: 'Audited' },
  { time: '09:06 AM', task: 'AI Research Analyst has flagged 3 competitor feature releases with executive digests.', role: 'Elena', status: 'Flagged' },
  { time: '09:07 AM', task: 'AI Scheduling Human has booked 8 demos directly on the Sales VP calendar.', role: 'Sophia', status: 'Confirmed' }
];

export default function Vision2030({ onOpenModal }) {
  return (
    <section id="vision-2030" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 56px' }}>
          <div className="badge-tag" style={{ marginBottom: '16px' }}>
            <Sun size={13} color="#f59e0b" />
            <span>VISION 2030</span>
          </div>

          <h2 style={{ fontSize: '46px', lineHeight: 1.15, marginBottom: '20px', color: '#09090b' }}>
            Imagine Monday morning, <span className="text-gradient">9:00 AM.</span>
          </h2>

          <p style={{ fontSize: '18px', color: '#475569', lineHeight: 1.6 }}>
            No one is manually assigning every single task. No unread backlogs. The AI workforce is already executing work with precision before the morning standup even starts.
          </p>
        </div>

        {/* Timeline Story Card */}
        <div
          className="cyber-card"
          style={{
            maxWidth: '920px',
            margin: '0 auto 40px',
            padding: '36px',
            background: '#ffffff',
            border: '1.5px solid rgba(236, 72, 153, 0.22)',
            boxShadow: '0 25px 60px -15px rgba(236, 72, 153, 0.15)'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {mondaySchedule.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px 18px',
                  borderRadius: '12px',
                  background: idx <= 1 ? '#fdf2f8' : '#ffffff',
                  border: idx <= 1 ? '1.5px solid rgba(236, 72, 153, 0.3)' : '1px solid rgba(236, 72, 153, 0.14)',
                  boxShadow: idx <= 1 ? '0 4px 14px rgba(236, 72, 153, 0.1)' : '0 2px 6px rgba(0,0,0,0.02)',
                  flexWrap: 'wrap',
                  gap: '12px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <span style={{
                    fontSize: '12px',
                    fontFamily: 'monospace',
                    color: idx <= 1 ? '#db2777' : '#64748b',
                    background: idx <= 1 ? 'rgba(236, 72, 153, 0.12)' : '#f1f5f9',
                    padding: '4px 8px',
                    borderRadius: '6px',
                    fontWeight: 700
                  }}>
                    {item.time}
                  </span>
                  <span style={{ fontSize: '14px', color: '#09090b', fontWeight: idx <= 1 ? 700 : 500 }}>
                    {item.task}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '12px', color: '#db2777', fontFamily: 'monospace', fontWeight: 700 }}>
                    {item.role}
                  </span>
                  <span style={{
                    fontSize: '11px',
                    color: '#059669',
                    background: 'rgba(16, 185, 129, 0.1)',
                    padding: '3px 8px',
                    borderRadius: '6px',
                    fontWeight: 700,
                    border: '1px solid rgba(16, 185, 129, 0.25)'
                  }}>
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: '32px',
            textAlign: 'center',
            paddingTop: '24px',
            borderTop: '1px solid rgba(236, 72, 153, 0.14)'
          }}>
            <div style={{ fontSize: '24px', fontWeight: 900, color: '#09090b', letterSpacing: '-0.02em', marginBottom: '8px' }}>
              This is the future Saadhyam is building.
            </div>
            <p style={{ fontSize: '15px', color: '#475569', fontWeight: 500 }}>
              Transform your business from a reactive task-chasing team to an empowered human leadership core backed by dozens of digital employees.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
