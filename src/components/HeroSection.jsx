import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, ArrowRight, Play, CheckCircle2, TrendingUp, Cpu, 
  Activity, Shield, Zap, RefreshCw, Layers, Users, PhoneCall, Check, UserCheck
} from 'lucide-react';
import { Blobatar } from "@blobatar/react";

const aiHumansRoster = [
  {
    id: 'sales',
    name: 'Alex Rivera',
    blobatarName: 'AlexRivera',
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
    blobatarName: 'MayaChen',
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
    blobatarName: 'MarcusVance',
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
    blobatarName: 'ElenaRostova',
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
    blobatarName: 'JordanTaylor',
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
    blobatarName: 'DavidSterling',
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
        paddingTop: '130px',
        paddingBottom: '80px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      {/* Background Radial Ambiance */}
      <div 
        style={{
          position: 'absolute',
          top: '2%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '420px',
          background: 'radial-gradient(ellipse at center, rgba(244, 114, 182, 0.22) 0%, rgba(236, 72, 153, 0.1) 45%, transparent 70%)',
          filter: 'blur(70px)',
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
          style={{ marginBottom: '22px', display: 'inline-block' }}
        >
          <div className="badge-tag">
            <span className="status-indicator-dot active" />
            <span>THE AI WORKFORCE PLATFORM</span>
            <span style={{ opacity: 0.4 }}>|</span>
            <span style={{ color: '#ec4899', fontWeight: 800 }}>PERSISTENT DIGITAL EMPLOYEES</span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="hero-heading"
          style={{
            fontSize: '66px',
            lineHeight: 1.1,
            letterSpacing: '-0.04em',
            maxWidth: '1080px',
            margin: '0 auto 16px',
            color: '#09090b'
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
            color: '#475569',
            maxWidth: '780px',
            margin: '0 auto 36px',
            fontWeight: 400
          }}
        >
          Create AI employees for sales, customer support, operations, research, finance, HR, and other business functions.
          <span style={{ color: '#09090b', fontWeight: 600, display: 'block', marginTop: '6px' }}>
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
            href="#the-big-idea"
            className="btn-secondary"
            style={{ textDecoration: 'none', fontSize: '17px', padding: '18px 32px', borderRadius: '9999px' }}
          >
            <Play size={15} fill="#09090b" />
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
          {/* Luminous frame boundary */}
          <div
            className="cyber-card"
            style={{
              padding: '0',
              overflow: 'hidden',
              boxShadow: '0 30px 80px -15px rgba(236, 72, 153, 0.18), 0 0 0 1px rgba(236, 72, 153, 0.15)',
              border: '1px solid rgba(236, 72, 153, 0.25)',
              background: '#ffffff'
            }}
          >
            {/* Window Top Bar / Command HUD */}
            <div
              style={{
                background: '#ffffff',
                padding: '16px 24px',
                borderBottom: '1px solid rgba(236, 72, 153, 0.14)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#f87171' }} />
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#fbbf24' }} />
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#34d399' }} />
                </div>
                <div style={{ height: '16px', width: '1px', background: 'rgba(236, 72, 153, 0.2)' }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#09090b', fontFamily: 'monospace', fontWeight: 600 }}>
                  <span style={{ color: '#ec4899' }}>saadhyam://</span>workspace/active-workforce
                </div>
              </div>

              {/* Status Header Pills */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#059669' }}>
                  <span className="status-indicator-dot active" />
                  <span style={{ fontWeight: 700 }}>6 AI Humans Online</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#db2777', fontWeight: 600 }}>
                  <Zap size={14} />
                  <span>{pulseCount} Workflows Executed Today</span>
                </div>
                <div style={{
                  background: 'rgba(236, 72, 153, 0.1)',
                  border: '1px solid rgba(236, 72, 153, 0.25)',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  color: '#db2777',
                  fontSize: '11px',
                  fontWeight: 700
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
                background: '#faf8f9',
                gap: '1px'
              }}
            >
              {/* Left Column: AI Humans Roster Selection */}
              <div style={{ padding: '24px', borderRight: '1px solid rgba(236, 72, 153, 0.12)', background: '#ffffff' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                  <div style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '0.08em', color: '#475569', textTransform: 'uppercase' }}>
                    Active Digital Employees ({aiHumansRoster.length})
                  </div>
                  <div style={{ fontSize: '11px', color: '#059669', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}>
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
                          borderRadius: '14px',
                          cursor: 'pointer',
                          background: isSelected ? 'linear-gradient(135deg, #fdf2f8, #fce7f3)' : '#ffffff',
                          border: isSelected ? '1.5px solid #ec4899' : '1px solid rgba(236, 72, 153, 0.12)',
                          boxShadow: isSelected ? '0 4px 14px rgba(236, 72, 153, 0.15)' : 'none',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          transition: 'all 0.2s ease',
                          textAlign: 'left'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <div className="blobatar-frame" style={{ width: '42px', height: '42px', flexShrink: 0 }}>
                            <Blobatar name={emp.blobatarName} animate="hover" size={36} />
                          </div>
                          <div>
                            <div style={{ fontSize: '14px', fontWeight: 700, color: '#09090b' }}>
                              {emp.name}
                            </div>
                            <div style={{ fontSize: '12px', color: '#64748b' }}>
                              {emp.role}
                            </div>
                          </div>
                        </div>

                        <div style={{ textAlign: 'right' }}>
                          <span
                            style={{
                              padding: '3px 9px',
                              borderRadius: '9999px',
                              fontSize: '11px',
                              fontWeight: 700,
                              background: emp.statusType === 'active' ? 'rgba(16, 185, 129, 0.12)' : 'rgba(236, 72, 153, 0.12)',
                              color: emp.statusType === 'active' ? '#059669' : '#db2777',
                              border: emp.statusType === 'active' ? '1px solid rgba(16, 185, 129, 0.25)' : '1px solid rgba(236, 72, 153, 0.25)'
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
              <div style={{ padding: '28px', textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#faf8f9' }}>
                <div>
                  {/* Top Employee Header */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '22px' }}>
                    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                      <div className="blobatar-frame" style={{ width: '68px', height: '68px', flexShrink: 0, padding: '4px' }}>
                        <Blobatar name={activeEmployee.blobatarName} animate="hover" size={60} />
                      </div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#09090b', margin: 0 }}>
                            {activeEmployee.name}
                          </h3>
                          <span style={{
                            background: 'rgba(16, 185, 129, 0.12)',
                            border: '1px solid rgba(16, 185, 129, 0.3)',
                            padding: '2px 8px',
                            borderRadius: '6px',
                            fontSize: '11px',
                            color: '#059669',
                            fontWeight: 700
                          }}>
                            VERIFIED AI HUMAN
                          </span>
                        </div>
                        <div style={{ fontSize: '14px', color: '#db2777', marginTop: '3px', fontWeight: 600 }}>
                          {activeEmployee.role} • <span style={{ color: '#64748b' }}>{activeEmployee.department}</span>
                        </div>
                      </div>
                    </div>

                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      background: '#ffffff',
                      padding: '8px 14px',
                      borderRadius: '10px',
                      border: '1px solid rgba(236, 72, 153, 0.15)',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                    }}>
                      <span className={`status-indicator-dot ${activeEmployee.statusType}`} />
                      <span style={{ fontSize: '13px', fontWeight: 700, color: '#09090b' }}>
                        {activeEmployee.status}
                      </span>
                    </div>
                  </div>

                  {/* Current Task Box */}
                  <div
                    style={{
                      background: '#ffffff',
                      border: '1px solid rgba(236, 72, 153, 0.2)',
                      borderRadius: '14px',
                      padding: '16px 20px',
                      marginBottom: '18px',
                      boxShadow: '0 4px 12px rgba(236, 72, 153, 0.05)'
                    }}
                  >
                    <div style={{ fontSize: '11px', color: '#db2777', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 800, marginBottom: '6px' }}>
                      Current Live Task
                    </div>
                    <div style={{ fontSize: '15px', color: '#09090b', fontWeight: 600 }}>
                      {activeEmployee.currentTask}
                    </div>
                  </div>

                  {/* Latest Activity Stream */}
                  <div
                    style={{
                      background: '#ffffff',
                      border: '1px solid rgba(236, 72, 153, 0.14)',
                      borderRadius: '14px',
                      padding: '16px 20px',
                      marginBottom: '18px',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.02)'
                    }}
                  >
                    <div style={{ fontSize: '11px', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 800, marginBottom: '6px' }}>
                      Autonomous Activity Log
                    </div>
                    <div style={{ fontSize: '14px', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 500 }}>
                      <CheckCircle2 size={16} color="#059669" />
                      <span>{activeEmployee.activity}</span>
                    </div>
                  </div>

                  {/* Metrics & Connected Tools */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '20px' }}>
                    <div style={{ background: '#ffffff', padding: '12px 16px', borderRadius: '12px', border: '1px solid rgba(236, 72, 153, 0.12)' }}>
                      <div style={{ fontSize: '11px', color: '#64748b', marginBottom: '4px', fontWeight: 600 }}>Performance SLA</div>
                      <div style={{ fontSize: '13px', color: '#09090b', fontWeight: 700 }}>
                        {activeEmployee.performance}
                      </div>
                    </div>
                    <div style={{ background: '#ffffff', padding: '12px 16px', borderRadius: '12px', border: '1px solid rgba(236, 72, 153, 0.12)' }}>
                      <div style={{ fontSize: '11px', color: '#64748b', marginBottom: '4px', fontWeight: 600 }}>Integrated Tools</div>
                      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                        {activeEmployee.tools.map((tool) => (
                          <span key={tool} style={{
                            fontSize: '11px',
                            background: '#fdf2f8',
                            border: '1px solid rgba(236, 72, 153, 0.2)',
                            padding: '2px 7px',
                            borderRadius: '4px',
                            color: '#db2777',
                            fontWeight: 600,
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
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '16px', borderTop: '1px solid rgba(236, 72, 153, 0.12)' }}>
                  <div style={{ fontSize: '12px', color: '#64748b' }}>
                    Operates 24/7 • Enterprise SOC-2 audited • Role-restricted access
                  </div>
                  <button
                    onClick={onOpenModal}
                    style={{
                      background: 'linear-gradient(135deg, #ec4899, #a855f7)',
                      color: '#ffffff',
                      border: 'none',
                      padding: '8px 18px',
                      borderRadius: '8px',
                      fontSize: '13px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      boxShadow: '0 4px 12px rgba(236, 72, 153, 0.25)'
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
