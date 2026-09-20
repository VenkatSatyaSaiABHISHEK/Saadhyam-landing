import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, CheckCircle2, AlertTriangle, Calendar, Search, 
  TrendingUp, Headphones, Cpu, Sparkles, Clock, ShieldCheck 
} from 'lucide-react';

const initialFeed = [
  {
    id: 1,
    time: '10:21 AM',
    role: 'AI Scheduling Human',
    employee: 'Sophia',
    action: 'Booked 3 executive product demonstrations with Fortune 500 prospects.',
    system: 'Google Calendar API',
    type: 'success',
    color: '#06b6d4',
    icon: Calendar
  },
  {
    id: 2,
    time: '10:15 AM',
    role: 'AI Operations Human',
    employee: 'Marcus',
    action: 'Detected a workflow inventory anomaly on AWS S3 pipeline & initiated failover.',
    system: 'CloudWatch + Webhook',
    type: 'warning',
    color: '#f59e0b',
    icon: AlertTriangle
  },
  {
    id: 3,
    time: '10:03 AM',
    role: 'AI Support Human',
    employee: 'Maya',
    action: 'Resolved 8 customer tickets in Zendesk; updated internal documentation.',
    system: 'Zendesk CRM',
    type: 'success',
    color: '#ec4899',
    icon: Headphones
  },
  {
    id: 4,
    time: '09:47 AM',
    role: 'AI Research Analyst',
    employee: 'Elena',
    action: 'Completed in-depth competitor pricing analysis across 14 global SaaS competitors.',
    system: 'Perplexity API',
    type: 'success',
    color: '#a855f7',
    icon: Search
  },
  {
    id: 5,
    time: '09:42 AM',
    role: 'AI Sales Executive',
    employee: 'Alex',
    action: 'Contacted 14 qualified enterprise prospects with hyper-personalized value briefs.',
    system: 'Apollo + Salesforce',
    type: 'success',
    color: '#3b82f6',
    icon: TrendingUp
  }
];

const incomingEventsPool = [
  {
    role: 'AI Sales Executive',
    employee: 'Alex',
    action: 'Received reply from CTO of ScaleTech; triggered automated calendar link.',
    system: 'Gmail API',
    type: 'success',
    color: '#3b82f6',
    icon: TrendingUp
  },
  {
    role: 'AI Finance Assistant',
    employee: 'David',
    action: 'Audited monthly Stripe payouts ($218k) against Quickbooks balance ledger.',
    system: 'QuickBooks API',
    type: 'success',
    color: '#10b981',
    icon: CheckCircle2
  },
  {
    role: 'AI HR Assistant',
    employee: 'Jordan',
    action: 'Screened 18 candidate applications for Senior Backend role; 4 invited to interview.',
    system: 'Greenhouse API',
    type: 'success',
    color: '#ec4899',
    icon: Sparkles
  }
];

export default function LiveActivityFeed({ onOpenModal }) {
  const [feed, setFeed] = useState(initialFeed);

  useEffect(() => {
    let poolIndex = 0;
    const interval = setInterval(() => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const nextEvent = incomingEventsPool[poolIndex % incomingEventsPool.length];

      setFeed((prev) => [
        {
          id: Date.now(),
          time: timeStr,
          ...nextEvent
        },
        ...prev.slice(0, 5)
      ]);
      poolIndex++;
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="activity" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 50px' }}>
          <div className="badge-tag" style={{ marginBottom: '16px' }}>
            <Activity size={13} />
            <span>REAL-TIME TELEMETRY</span>
          </div>

          <h2 style={{ fontSize: '46px', lineHeight: 1.15, marginBottom: '18px', color: '#ffffff' }}>
            Your AI workforce is{' '}
            <span className="text-gradient">always working.</span>
          </h2>

          <p style={{ fontSize: '18px', color: '#a1a1aa', lineHeight: 1.6 }}>
            Live enterprise activity stream showing autonomous decisions, system updates, and milestone completions happening right now.
          </p>
        </div>

        {/* Live Feed Container */}
        <div
          className="cyber-card"
          style={{
            maxWidth: '960px',
            margin: '0 auto',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            overflow: 'hidden',
            boxShadow: '0 30px 80px -20px rgba(0, 0, 0, 0.8)'
          }}
        >
          {/* Feed Header */}
          <div
            style={{
              background: 'rgba(10, 10, 16, 0.95)',
              padding: '16px 24px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span className="status-indicator-dot active" />
              <span style={{ fontSize: '13px', fontWeight: 700, color: '#ffffff', fontFamily: 'monospace' }}>
                LIVE_EVENT_FEED // STREAM_STATUS: ACTIVE
              </span>
            </div>
            <div style={{ fontSize: '12px', color: '#34d399', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ShieldCheck size={14} /> 100% Audit Logged
            </div>
          </div>

          {/* Feed Items */}
          <div style={{ padding: '24px', background: 'rgba(5, 5, 8, 0.95)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <AnimatePresence initial={false}>
              {feed.map((item) => {
                const ItemIcon = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: -15, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35 }}
                    className="activity-card"
                    style={{
                      padding: '16px 20px',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '14px',
                      borderLeftColor: item.color
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      {/* Timestamp */}
                      <div style={{
                        fontFamily: 'monospace',
                        fontSize: '13px',
                        color: '#a1a1aa',
                        background: 'rgba(255,255,255,0.04)',
                        padding: '4px 8px',
                        borderRadius: '6px',
                        flexShrink: 0
                      }}>
                        {item.time}
                      </div>

                      {/* Icon */}
                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '8px',
                          background: 'rgba(255,255,255,0.05)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: item.color,
                          flexShrink: 0
                        }}
                      >
                        <ItemIcon size={16} />
                      </div>

                      {/* Description */}
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ fontSize: '13px', fontWeight: 700, color: '#ffffff' }}>
                            {item.role}
                          </span>
                          <span style={{ fontSize: '11px', color: '#71717a' }}>
                            ({item.employee})
                          </span>
                        </div>
                        <div style={{ fontSize: '14px', color: '#d4d4d8', marginTop: '2px' }}>
                          {item.action}
                        </div>
                      </div>
                    </div>

                    {/* System Tag */}
                    <div style={{
                      fontSize: '11px',
                      fontFamily: 'monospace',
                      color: '#a1a1aa',
                      background: 'rgba(255,255,255,0.03)',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      border: '1px solid rgba(255,255,255,0.06)'
                    }}>
                      {item.system}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
