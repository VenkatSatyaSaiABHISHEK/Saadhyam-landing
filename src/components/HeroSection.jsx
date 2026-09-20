import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, ArrowRight, Play, CheckCircle2, TrendingUp, Cpu, 
  Activity, Shield, Zap, RefreshCw, Layers, Users, PhoneCall, Check, UserCheck
} from 'lucide-react';

const aiHumansRoster = [
  {
    id: 'sales',
    name: 'Alex Rivera',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    initials: 'AR',
    role: 'AI Sales Executive',
    department: 'Revenue & Growth',
    currentTask: 'Qualifying 42 inbound enterprise leads & drafting proposals',
    status: 'Executing',
    statusType: 'working',
    activity: 'Dispatched 14 tailored pitch decks with CRM auto-logging',
    performance: '98.4% qualification accuracy • 1.2m avg response',
    tools: ['HubSpot', 'Apollo', 'Gmail', 'Salesforce']
  },
  {
    id: 'support',
    name: 'Maya Chen',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    initials: 'MC',
    role: 'AI Customer Support',
    department: 'Customer Experience',
    currentTask: 'Resolving Tier-2 ticketing queue & SLA monitoring',
    status: 'Active',
    statusType: 'active',
    activity: 'Auto-resolved 38 complex inquiries, escalated 1 edge case',
    performance: '99.2% CSAT rating • 42s first reply resolution',
    tools: ['Zendesk', 'Intercom', 'Linear', 'Slack']
  },
  {
    id: 'ops',
    name: 'Marcus Vance',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    initials: 'MV',
    role: 'AI Operations Manager',
    department: 'Operations & Logistics',
    currentTask: 'Syncing ERP inventory thresholds with supplier webhooks',
    status: 'Monitoring',
    statusType: 'active',
    activity: 'Triggered 3 batch reorders across regional fulfillment hubs',
    performance: '100% SLA compliance • 0 pipeline bottlenecks',
    tools: ['SAP', 'NetSuite', 'PostgreSQL', 'Webhooks']
  },
  {
    id: 'research',
    name: 'Elena Rostova',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    initials: 'ER',
    role: 'AI Research Analyst',
    department: 'Market Intelligence',
    currentTask: 'Scraping patent filings & competitor pricing matrix',
    status: 'Synthesizing',
    statusType: 'working',
    activity: 'Generated 18-page strategic summary on Q3 competitor shift',
    performance: '14 markets tracked • 94% forecast precision',
    tools: ['Perplexity', 'Notion', 'Google Docs', 'Python API']
  },
  {
    id: 'hr',
    name: 'Jordan Taylor',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    initials: 'JT',
    role: 'AI HR Assistant',
    department: 'People Operations',
    currentTask: 'Screening 120 senior developer applicants & scheduling',
    status: 'Interviewing',
    statusType: 'working',
    activity: 'Calibrated top 8 candidates and sent calendar invites',
    performance: '96% hiring manager calibration score',
    tools: ['Greenhouse', 'Workday', 'Google Calendar', 'LinkedIn']
  },
  {
    id: 'finance',
    name: 'David Sterling',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
    initials: 'DS',
    role: 'AI Finance Assistant',
    department: 'Accounting & Audit',
    currentTask: 'Auditing $420k supplier invoices against PO authorizations',
    status: 'Reconciling',
    statusType: 'active',
    activity: 'Flagged 2 duplicate billing charges; updated Quickbooks ledger',
    performance: '0 mismatch variance • 100% audit log auditability',
    tools: ['QuickBooks', 'Stripe', 'Excel', 'Plaid']
  }
];

export default function HeroSection({ onOpenModal }) {
  const [activeEmployeeId, setActiveEmployeeId] = useState('sales');
  const [pulseCount, setPulseCount] = useState(142);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseCount((prev) => prev + Math.floor(Math.random() * 2));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const activeEmployee = aiHumansRoster.find((emp) => emp.id === activeEmployeeId) || aiHumansRoster[0];

  return (
    <section 
      style={{
        position: 'relative',
        minHeight: '100vh',
        paddingTop: '140px',
        paddingBottom: '80px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      {/* Background Radial Lights */}
      <div 
        style={{
          position: 'absolute',
          top: '5%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '400px',
          background: 'radial-gradient(ellipse at center, rgba(168, 85, 247, 0.22) 0%, rgba(236, 72, 153, 0.08) 45%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '24px', display: 'inline-block' }}
        >
          <div className="badge-tag">
            <span className="status-indicator-dot active" />
            <span>THE AI WORKFORCE PLATFORM</span>
            <span style={{ opacity: 0.5 }}>|</span>
            <span style={{ color: '#ec4899', fontWeight: 700 }}>PERSISTENT DIGITAL EMPLOYEES</span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="hero-heading"
          style={{
            fontSize: '68px',
            lineHeight: 1.08,
            letterSpacing: '-0.04em',
            maxWidth: '1080px',
            margin: '0 auto 16px',
            color: '#ffffff'
          }}
        >
          Build Your AI Workforce.{' '}
          <span className="text-gradient" style={{ display: 'inline-block' }}>
            AI Humans that work like employees.
          </span>
        </motion.h1>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            fontSize: '20px',
            lineHeight: 1.6,
            color: '#a1a1aa',
            maxWidth: '780px',
            margin: '0 auto 36px',
            fontWeight: 400
          }}
        >
          Create AI employees for sales, customer support, operations, research, finance, HR, and other business functions.
          <span style={{ color: '#f4f4f5', fontWeight: 500, display: 'block', marginTop: '6px' }}>
            Give them a role. Define their workflow. Connect their tools. Let Saadhyam execute.
          </span>
        </motion.p>

        {/* Dual CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="hero-buttons"
          style={{ display: 'flex', gap: '16px', justifyContent: 'center', alignItems: 'center', marginBottom: '60px' }}
        >
          <button
            onClick={onOpenModal}
            className="btn-primary"
            style={{ fontSize: '17px', padding: '18px 36px', borderRadius: '9999px' }}
          >
            <span>Create Your AI Human</span>
            <ArrowRight size={18} />
          </button>
          
          <a
            href="#how-it-works"
            className="btn-secondary"
            style={{ textDecoration: 'none', fontSize: '17px', padding: '18px 32px', borderRadius: '9999px' }}
          >
            <Play size={16} fill="white" />
            <span>See How It Works</span>
          </a>
        </motion.div>

        {/* HERO VISUAL: FUTURISTIC SAADHYAM WORKSPACE DASHBOARD */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          style={{
            maxWidth: '1160px',
            margin: '0 auto',
            position: 'relative'
          }}
        >
          {/* Glowing frame boundary */}
          <div
            className="cyber-card"
            style={{
              padding: '0',
              overflow: 'hidden',
              boxShadow: '0 40px 100px -20px rgba(0, 0, 0, 0.9), 0 0 50px rgba(168, 85, 247, 0.15)',
              border: '1px solid rgba(255, 255, 255, 0.12)'
            }}
          >
            {/* Window Top Bar / Command HUD */}
            <div
              style={{
                background: 'rgba(10, 10, 15, 0.95)',
                padding: '16px 24px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#eab308' }} />
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#22c55e' }} />
                </div>
                <div style={{ height: '16px', width: '1px', background: 'rgba(255,255,255,0.15)' }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#e4e4e7', fontFamily: 'monospace' }}>
                  <span style={{ color: '#a855f7' }}>saadhyam://</span>workspace/active-workforce
                </div>
              </div>

              {/* Status Header Pills */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#10b981' }}>
                  <span className="status-indicator-dot active" />
                  <span style={{ fontWeight: 600 }}>6 AI Humans Online</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#d8b4fe' }}>
                  <Zap size={14} />
                  <span>{pulseCount} Workflows Executed Today</span>
                </div>
                <div style={{
                  background: 'rgba(168, 85, 247, 0.15)',
                  border: '1px solid rgba(168, 85, 247, 0.3)',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  color: '#e4e4e7',
                  fontSize: '11px',
                  fontWeight: 600
                }}>
                  Zero Manual Prompts Required
                </div>
              </div>
            </div>

            {/* Dashboard Inner Layout */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                background: 'rgba(5, 5, 8, 0.95)',
                gap: '1px'
              }}
            >
              {/* Left Column: AI Humans Roster Selection */}
              <div style={{ padding: '24px', borderRight: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                  <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', color: '#a1a1aa', textTransform: 'uppercase' }}>
                    Active Digital Employees ({aiHumansRoster.length})
                  </div>
                  <div style={{ fontSize: '11px', color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Activity size={12} /> Real-time sync
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {aiHumansRoster.map((emp) => {
                    const isSelected = emp.id === activeEmployeeId;
                    return (
                      <div
                        key={emp.id}
                        onClick={() => setActiveEmployeeId(emp.id)}
                        style={{
                          padding: '12px 14px',
                          borderRadius: '12px',
                          cursor: 'pointer',
                          background: isSelected ? 'rgba(168, 85, 247, 0.15)' : 'rgba(255, 255, 255, 0.02)',
                          border: isSelected ? '1px solid rgba(168, 85, 247, 0.5)' : '1px solid rgba(255, 255, 255, 0.04)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          transition: 'all 0.2s ease',
                          textAlign: 'left'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <div style={{ position: 'relative' }}>
                            <img
                              src={emp.avatar}
                              alt={emp.name}
                              style={{
                                width: '38px',
                                height: '38px',
                                borderRadius: '10px',
                                objectFit: 'cover',
                                border: '1px solid rgba(255, 255, 255, 0.15)'
                              }}
                            />
                            <div
                              style={{
                                position: 'absolute',
                                bottom: -2,
                                right: -2,
                                width: '10px',
                                height: '10px',
                                borderRadius: '50%',
                                background: emp.statusType === 'active' ? '#10b981' : '#3b82f6',
                                border: '2px solid #0a0a0f'
                              }}
                            />
                          </div>
                          <div>
                            <div style={{ fontSize: '14px', fontWeight: 600, color: isSelected ? '#ffffff' : '#e4e4e7' }}>
                              {emp.name}
                            </div>
                            <div style={{ fontSize: '12px', color: '#a1a1aa' }}>
                              {emp.role}
                            </div>
                          </div>
                        </div>

                        <div style={{ textAlign: 'right' }}>
                          <span
                            style={{
                              padding: '2px 8px',
                              borderRadius: '9999px',
                              fontSize: '11px',
                              fontWeight: 600,
                              background: emp.statusType === 'active' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(59, 130, 246, 0.15)',
                              color: emp.statusType === 'active' ? '#34d399' : '#60a5fa',
                              border: emp.statusType === 'active' ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid rgba(59, 130, 246, 0.3)'
                            }}
                          >
                            {emp.status}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Active AI Human Detailed Dossier */}
              <div style={{ padding: '28px', textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  {/* Top Employee Header */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '22px' }}>
                    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                      <img
                        src={activeEmployee.avatar}
                        alt={activeEmployee.name}
                        style={{
                          width: '64px',
                          height: '64px',
                          borderRadius: '16px',
                          objectFit: 'cover',
                          border: '2px solid rgba(168, 85, 247, 0.5)',
                          boxShadow: '0 0 25px rgba(168, 85, 247, 0.3)'
                        }}
                      />
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#ffffff', margin: 0 }}>
                            {activeEmployee.name}
                          </h3>
                          <span style={{
                            background: 'rgba(16, 185, 129, 0.15)',
                            border: '1px solid rgba(16, 185, 129, 0.3)',
                            padding: '2px 8px',
                            borderRadius: '6px',
                            fontSize: '11px',
                            color: '#34d399',
                            fontWeight: 600
                          }}>
                            VERIFIED AI HUMAN
                          </span>
                        </div>
                        <div style={{ fontSize: '14px', color: '#c084fc', marginTop: '3px', fontWeight: 500 }}>
                          {activeEmployee.role} • <span style={{ color: '#a1a1aa' }}>{activeEmployee.department}</span>
                        </div>
                      </div>
                    </div>

                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      background: 'rgba(255,255,255,0.04)',
                      padding: '8px 14px',
                      borderRadius: '10px',
                      border: '1px solid rgba(255,255,255,0.08)'
                    }}>
                      <span className={`status-indicator-dot ${activeEmployee.statusType}`} />
                      <span style={{ fontSize: '13px', fontWeight: 600, color: '#ffffff' }}>
                        {activeEmployee.status}
                      </span>
                    </div>
                  </div>

                  {/* Current Task Box */}
                  <div
                    style={{
                      background: 'rgba(168, 85, 247, 0.06)',
                      border: '1px solid rgba(168, 85, 247, 0.2)',
                      borderRadius: '14px',
                      padding: '16px 20px',
                      marginBottom: '18px'
                    }}
                  >
                    <div style={{ fontSize: '11px', color: '#c084fc', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700, marginBottom: '6px' }}>
                      Current Live Task
                    </div>
                    <div style={{ fontSize: '15px', color: '#ffffff', fontWeight: 500 }}>
                      {activeEmployee.currentTask}
                    </div>
                  </div>

                  {/* Latest Activity Stream */}
                  <div
                    style={{
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      borderRadius: '14px',
                      padding: '16px 20px',
                      marginBottom: '18px'
                    }}
                  >
                    <div style={{ fontSize: '11px', color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700, marginBottom: '6px' }}>
                      Autonomous Activity Log
                    </div>
                    <div style={{ fontSize: '14px', color: '#e4e4e7', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <CheckCircle2 size={16} color="#10b981" />
                      <span>{activeEmployee.activity}</span>
                    </div>
                  </div>

                  {/* Metrics & Connected Tools */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '20px' }}>
                    <div style={{ background: 'rgba(255,255,255,0.02)', padding: '12px 16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <div style={{ fontSize: '11px', color: '#a1a1aa', marginBottom: '4px' }}>Performance SLA</div>
                      <div style={{ fontSize: '13px', color: '#f4f4f5', fontWeight: 600 }}>
                        {activeEmployee.performance}
                      </div>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.02)', padding: '12px 16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <div style={{ fontSize: '11px', color: '#a1a1aa', marginBottom: '4px' }}>Integrated Tools</div>
                      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                        {activeEmployee.tools.map((tool) => (
                          <span key={tool} style={{
                            fontSize: '11px',
                            background: 'rgba(255,255,255,0.06)',
                            padding: '2px 7px',
                            borderRadius: '4px',
                            color: '#d4d4d8',
                            fontFamily: 'monospace'
                          }}>
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Action Bar */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ fontSize: '12px', color: '#71717a' }}>
                    Operates 24/7 • Enterprise SOC-2 audited • Role-restricted access
                  </div>
                  <button
                    onClick={onOpenModal}
                    style={{
                      background: 'rgba(168, 85, 247, 0.2)',
                      border: '1px solid rgba(168, 85, 247, 0.5)',
                      color: '#ffffff',
                      padding: '8px 18px',
                      borderRadius: '8px',
                      fontSize: '13px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <span>Configure Workflow</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
