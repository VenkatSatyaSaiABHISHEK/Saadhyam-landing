import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, ArrowDown, Search, CheckCircle2, Mail, Database, 
  Calendar, ListTodo, Award, Sparkles, RefreshCw, Terminal, Play, Pause
} from 'lucide-react';

const workflowSteps = [
  {
    id: 1,
    label: 'Autonomous Trigger',
    action: 'New lead arrives',
    detail: 'Stripe Webhook + HubSpot API form capture',
    tool: 'Inbound Webhook',
    color: '#3b82f6',
    icon: Zap
  },
  {
    id: 2,
    label: 'Role Analysis',
    action: 'AI Human understands the lead',
    detail: 'Parses intent, company size, budget, urgency',
    tool: 'Saadhyam Reasoning',
    color: '#8b5cf6',
    icon: Sparkles
  },
  {
    id: 3,
    label: 'Deep Intelligence',
    action: 'Researches company & prospect',
    detail: 'Pulls revenue, tech stack, funding, LinkedIn profile',
    tool: 'Clearbit + Apollo API',
    color: '#a855f7',
    icon: Search
  },
  {
    id: 4,
    label: 'Strategic Evaluation',
    action: 'Qualifies prospect',
    detail: 'Scores against ICP using BANT framework (Score: 94/100)',
    tool: 'Qualification Engine',
    color: '#ec4899',
    icon: CheckCircle2
  },
  {
    id: 5,
    label: 'High-Touch Outreach',
    action: 'Sends personalized message',
    detail: 'Tailored value proposition referencing tech stack gaps',
    tool: 'Gmail / Outlook API',
    color: '#f43f5e',
    icon: Mail
  },
  {
    id: 6,
    label: 'System of Record',
    action: 'Updates CRM',
    detail: 'Syncs lead status to "Qualified Opportunity"',
    tool: 'Salesforce CRM',
    color: '#10b981',
    icon: Database
  },
  {
    id: 7,
    label: 'Time Coordination',
    action: 'Schedules meeting',
    detail: 'Sends executive calendar availability with auto-reschedule rules',
    tool: 'Google Calendar API',
    color: '#06b6d4',
    icon: Calendar
  },
  {
    id: 8,
    label: 'Operational Continuity',
    action: 'Creates follow-up task',
    detail: 'Dispatches task to human Account Exec with call briefing dossier',
    tool: 'Linear / Jira',
    color: '#eab308',
    icon: ListTodo
  },
  {
    id: 9,
    label: 'Milestone Reporting',
    action: 'Reports outcome',
    detail: 'Posts win card to company Slack #sales-wins channel',
    tool: 'Slack Bot API',
    color: '#22c55e',
    icon: Award
  }
];

export default function ExecutionWorkflow({ onOpenModal }) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % workflowSteps.length);
    }, 2400);
    return () => clearInterval(interval);
  }, [isRunning]);

  const currentActiveStep = workflowSteps[activeStepIndex];

  return (
    <section id="workflow" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 56px' }}>
          <div className="badge-tag" style={{ marginBottom: '16px' }}>
            <Zap size={13} />
            <span>AUTONOMOUS EXECUTION ENGINE</span>
          </div>

          <h2 style={{ fontSize: '46px', lineHeight: 1.15, marginBottom: '20px', color: '#09090b' }}>
            From instructions to{' '}
            <span className="text-gradient">execution.</span>
          </h2>

          <p style={{ fontSize: '18px', color: '#475569', lineHeight: 1.6 }}>
            Watch an AI Human autonomously carry a live enterprise task through every stage of execution without waiting for human intervention.
          </p>
        </div>

        {/* Execution Runner Console */}
        <div
          className="cyber-card"
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            background: '#ffffff',
            border: '1.5px solid rgba(236, 72, 153, 0.22)',
            overflow: 'hidden',
            boxShadow: '0 25px 60px -15px rgba(236, 72, 153, 0.15)'
          }}
        >
          {/* Top Engine Control Bar */}
          <div
            style={{
              background: 'linear-gradient(135deg, #fdf2f8, #fce7f3)',
              padding: '16px 24px',
              borderBottom: '1px solid rgba(236, 72, 153, 0.18)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#09090b', fontFamily: 'monospace', fontWeight: 700 }}>
                <Terminal size={16} color="#ec4899" />
                <span>ENGINE_RUNNER // EXEC_ID: #WF-9941</span>
              </div>
              <span style={{
                background: 'rgba(16, 185, 129, 0.12)',
                color: '#059669',
                padding: '3px 9px',
                borderRadius: '6px',
                fontSize: '11px',
                fontFamily: 'monospace',
                fontWeight: 700
              }}>
                STATE: RUNNING
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <button
                onClick={() => setIsRunning(!isRunning)}
                style={{
                  background: '#ffffff',
                  border: '1px solid rgba(236, 72, 153, 0.22)',
                  color: '#09090b',
                  padding: '7px 16px',
                  borderRadius: '8px',
                  fontSize: '12px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.04)'
                }}
              >
                {isRunning ? <><Pause size={12} color="#ec4899" /> Pause Simulation</> : <><Play size={12} color="#10b981" /> Resume</>}
              </button>
              <div style={{ fontSize: '12px', color: '#64748b', fontWeight: 600 }}>
                Step {activeStepIndex + 1} of {workflowSteps.length}
              </div>
            </div>
          </div>

          {/* Flow Grid */}
          <div style={{ padding: '32px', background: '#faf8f9' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '16px',
                marginBottom: '28px'
              }}
            >
              {workflowSteps.map((step, idx) => {
                const isActive = idx === activeStepIndex;
                const isPast = idx < activeStepIndex;
                const StepIcon = step.icon;

                return (
                  <div
                    key={step.id}
                    onClick={() => setActiveStepIndex(idx)}
                    style={{
                      padding: '16px 18px',
                      borderRadius: '14px',
                      cursor: 'pointer',
                      background: isActive 
                        ? '#fdf2f8' 
                        : '#ffffff',
                      border: isActive 
                        ? `1.5px solid ${step.color}` 
                        : isPast 
                          ? '1px solid rgba(16, 185, 129, 0.35)' 
                          : '1px solid rgba(236, 72, 153, 0.16)',
                      boxShadow: isActive ? '0 6px 20px rgba(236, 72, 153, 0.18)' : '0 2px 8px rgba(0,0,0,0.03)',
                      transition: 'all 0.25s ease',
                      position: 'relative'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div
                          style={{
                            width: '30px',
                            height: '30px',
                            borderRadius: '8px',
                            background: isActive ? step.color : 'rgba(236, 72, 153, 0.12)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: isActive ? '#ffffff' : step.color
                          }}
                        >
                          <StepIcon size={15} />
                        </div>
                        <span style={{ fontSize: '11px', color: '#db2777', fontFamily: 'monospace', fontWeight: 700 }}>
                          STEP 0{step.id}
                        </span>
                      </div>

                      <span style={{
                        fontSize: '11px',
                        padding: '3px 8px',
                        borderRadius: '6px',
                        background: '#f8fafc',
                        border: '1px solid rgba(0,0,0,0.06)',
                        color: '#475569',
                        fontFamily: 'monospace',
                        fontWeight: 600
                      }}>
                        {step.tool}
                      </span>
                    </div>

                    <div style={{ fontSize: '14px', fontWeight: 800, color: '#09090b', marginBottom: '4px' }}>
                      {step.action}
                    </div>

                    <div style={{ fontSize: '12px', color: '#475569', lineHeight: 1.4, fontWeight: 500 }}>
                      {step.detail}
                    </div>

                    {isActive && (
                      <div
                        style={{
                          position: 'absolute',
                          top: -4,
                          right: -4,
                          width: '12px',
                          height: '12px',
                          borderRadius: '50%',
                          background: step.color,
                          boxShadow: `0 0 12px ${step.color}`
                        }}
                      />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Active Execution Live Terminal Output */}
            <div
              style={{
                background: '#ffffff',
                border: '1.5px solid rgba(236, 72, 153, 0.2)',
                borderRadius: '14px',
                padding: '18px 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '14px',
                boxShadow: '0 4px 15px rgba(236, 72, 153, 0.08)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <span className="status-indicator-dot active" />
                <div style={{ fontFamily: 'monospace', fontSize: '13px', color: '#09090b' }}>
                  <span style={{ color: '#db2777', fontWeight: 800 }}>[STEP 0{currentActiveStep.id}]</span>{' '}
                  <span style={{ color: '#09090b', fontWeight: 700 }}>{currentActiveStep.action}</span>{' '}
                  <span style={{ color: '#64748b' }}>via {currentActiveStep.tool}</span>
                </div>
              </div>

              <button
                onClick={onOpenModal}
                className="btn-primary"
                style={{ padding: '9px 20px', fontSize: '13px', borderRadius: '8px' }}
              >
                Configure This Workflow
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
