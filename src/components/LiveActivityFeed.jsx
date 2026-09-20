import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, CheckCircle2, AlertTriangle, Calendar, Search, 
  TrendingUp, Headphones, Cpu, Sparkles, Clock, ShieldCheck 
} from 'lucide-react';
import { Blobatar } from '@blobatar/react';

const initialFeed = [
  {
    id: 1,
    time: '10:21 AM',
    role: 'AI Scheduling Human',
    employee: 'Sophia',
    avatarSeed: 'SophiaVoice',
    action: 'Booked 3 executive product demonstrations with Fortune 500 prospects.',
    system: 'Google Calendar API',
    type: 'success',
    color: '#ec4899',
    icon: Calendar
  },
  {
    id: 2,
    time: '10:15 AM',
    role: 'AI Operations Human',
    employee: 'Marcus',
    avatarSeed: 'MarcusOps',
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
    avatarSeed: 'MayaSupport',
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
    avatarSeed: 'ElenaResearch',
    action: 'Completed in-depth competitor pricing analysis across 14 global SaaS competitors.',
    system: 'Perplexity API',
    type: 'success',
    color: '#06b6d4',
    icon: Search
  },
  {
    id: 5,
    time: '09:42 AM',
    role: 'AI Sales Executive',
    employee: 'Alex',
    avatarSeed: 'AlexSales',
    action: 'Contacted 14 qualified enterprise prospects with hyper-personalized value briefs.',
    system: 'Apollo + Salesforce',
    type: 'success',
    color: '#a855f7',
    icon: TrendingUp
  }
];

const incomingEventsPool = [
  {
    role: 'AI Sales Executive',
    employee: 'Alex',
    avatarSeed: 'AlexSales',
    action: 'Received reply from CTO of ScaleTech; triggered automated calendar link.',
    system: 'Gmail API',
    type: 'success',
    color: '#ec4899',
    icon: TrendingUp
  },
  {
    role: 'AI Finance Assistant',
    employee: 'David',
    avatarSeed: 'DavidFinance',
    action: 'Audited monthly Stripe payouts ($218k) against Quickbooks balance ledger.',
    system: 'QuickBooks API',
    type: 'success',
    color: '#10b981',
    icon: CheckCircle2
  },
  {
    role: 'AI HR Assistant',
    employee: 'Jordan',
    avatarSeed: 'JordanHR',
    action: 'Screened 18 candidate applications for Senior Backend role; 4 invited to interview.',
    system: 'Greenhouse API',
    type: 'success',
    color: '#f59e0b',
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

          <h2 style={{ fontSize: '46px', lineHeight: 1.15, marginBottom: '18px', color: '#09090b' }}>
            Your AI workforce is{' '}
            <span className="text-gradient">always working.</span>
          </h2>

          <p style={{ fontSize: '18px', color: '#475569', lineHeight: 1.6 }}>
            Live enterprise activity stream showing autonomous decisions, system updates, and milestone completions happening right now.
          </p>
        </div>

        {/* Live Feed Container */}
        <div
          className="cyber-card"
          style={{
            maxWidth: '960px',
            margin: '0 auto',
            background: '#ffffff',
            border: '1.5px solid rgba(236, 72, 153, 0.22)',
            overflow: 'hidden',
            boxShadow: '0 25px 60px -15px rgba(236, 72, 153, 0.15)'
          }}
        >
          {/* Feed Header */}
          <div
            style={{
              background: 'linear-gradient(135deg, #fdf2f8, #fce7f3)',
              padding: '18px 24px',
              borderBottom: '1px solid rgba(236, 72, 153, 0.18)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span className="status-indicator-dot active" />
              <span style={{ fontSize: '13px', fontWeight: 800, color: '#09090b', fontFamily: 'monospace' }}>
                LIVE_EVENT_FEED // STREAM_STATUS: ACTIVE
              </span>
            </div>
            <div style={{ fontSize: '12px', color: '#059669', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>
              <ShieldCheck size={15} /> 100% Audit Logged
            </div>
          </div>

          {/* Feed Items */}
          <div style={{ padding: '24px', background: '#faf8f9', display: 'flex', flexDirection: 'column', gap: '12px' }}>
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
                      borderRadius: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '14px',
                      borderLeftColor: item.color,
                      borderLeftWidth: '4px',
                      background: '#ffffff',
                      boxShadow: '0 2px 8px rgba(236, 72, 153, 0.05)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                      {/* Timestamp */}
                      <div style={{
                        fontFamily: 'monospace',
                        fontSize: '12px',
                        color: '#64748b',
                        background: '#f1f5f9',
                        padding: '4px 8px',
                        borderRadius: '6px',
                        fontWeight: 600,
                        flexShrink: 0
                      }}>
                        {item.time}
                      </div>

                      {/* Blobatar Avatar */}
                      <div className="blobatar-frame" style={{ width: '40px', height: '40px', borderRadius: '10px', flexShrink: 0 }}>
                        <Blobatar name={item.avatarSeed || item.employee} animate="hover" size={34} />
                      </div>

                      {/* Description */}
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ fontSize: '14px', fontWeight: 800, color: '#09090b' }}>
                            {item.role}
                          </span>
                          <span style={{ fontSize: '11px', color: '#db2777', fontWeight: 700 }}>
                            ({item.employee})
                          </span>
                        </div>
                        <div style={{ fontSize: '13px', color: '#475569', marginTop: '2px', fontWeight: 500 }}>
                          {item.action}
                        </div>
                      </div>
                    </div>

                    {/* System Tag */}
                    <div style={{
                      fontSize: '11px',
                      fontFamily: 'monospace',
                      color: '#09090b',
                      background: '#fdf2f8',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      border: '1px solid rgba(236, 72, 153, 0.18)',
                      fontWeight: 600
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
