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

          <h2 style={{ fontSize: '46px', lineHeight: 1.15, marginBottom: '20px', color: '#ffffff' }}>
            Imagine Monday morning, <span className="text-gradient">9:00 AM.</span>
          </h2>

          <p style={{ fontSize: '19px', color: '#a1a1aa', lineHeight: 1.6 }}>
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
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 30px 80px -20px rgba(0, 0, 0, 0.8)'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {mondaySchedule.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px 18px',
                  borderRadius: '12px',
                  background: idx <= 1 ? 'rgba(168, 85, 247, 0.12)' : 'rgba(255, 255, 255, 0.02)',
                  border: idx <= 1 ? '1px solid rgba(168, 85, 247, 0.35)' : '1px solid rgba(255, 255, 255, 0.05)',
                  flexWrap: 'wrap',
                  gap: '12px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <span style={{
                    fontSize: '12px',
                    fontFamily: 'monospace',
                    color: idx <= 1 ? '#d8b4fe' : '#a1a1aa',
                    background: 'rgba(255,255,255,0.05)',
                    padding: '3px 8px',
                    borderRadius: '6px',
                    fontWeight: 600
                  }}>
                    {item.time}
                  </span>
                  <span style={{ fontSize: '14px', color: idx <= 1 ? '#ffffff' : '#e4e4e7', fontWeight: idx <= 1 ? 700 : 500 }}>
                    {item.task}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '11px', color: '#c084fc', fontFamily: 'monospace' }}>
                    {item.role}
                  </span>
                  <span style={{
                    fontSize: '11px',
                    color: '#34d399',
                    background: 'rgba(16, 185, 129, 0.15)',
                    padding: '2px 7px',
                    borderRadius: '4px',
                    fontWeight: 600
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
            borderTop: '1px solid rgba(255,255,255,0.08)'
          }}>
            <div style={{ fontSize: '24px', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '8px' }}>
              This is the future Saadhyam is building.
            </div>
            <p style={{ fontSize: '15px', color: '#a1a1aa' }}>
              Transform your business from a reactive task-chasing team to an empowered human leadership core backed by dozens of digital employees.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
