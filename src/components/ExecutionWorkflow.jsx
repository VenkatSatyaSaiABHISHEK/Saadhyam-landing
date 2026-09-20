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

          <h2 style={{ fontSize: '46px', lineHeight: 1.15, marginBottom: '20px', color: '#ffffff' }}>
            From instructions to{' '}
            <span className="text-gradient">execution.</span>
          </h2>

          <p style={{ fontSize: '18px', color: '#a1a1aa', lineHeight: 1.6 }}>
            Watch an AI Human autonomously carry a live enterprise task through every stage of execution without waiting for human intervention.
          </p>
        </div>

        {/* Execution Runner Console */}
        <div
          className="cyber-card"
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            overflow: 'hidden',
            boxShadow: '0 30px 80px -20px rgba(0, 0, 0, 0.8)'
          }}
        >
          {/* Top Engine Control Bar */}
          <div
            style={{
              background: 'rgba(10, 10, 16, 0.95)',
              padding: '14px 24px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#ffffff', fontFamily: 'monospace' }}>
                <Terminal size={16} color="#a855f7" />
                <span>ENGINE_RUNNER // EXEC_ID: #WF-9941</span>
              </div>
              <span style={{
                background: 'rgba(16, 185, 129, 0.15)',
                color: '#34d399',
                padding: '2px 8px',
                borderRadius: '4px',
                fontSize: '11px',
                fontFamily: 'monospace'
              }}>
                STATE: RUNNING
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <button
                onClick={() => setIsRunning(!isRunning)}
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: '#ffffff',
                  padding: '6px 14px',
                  borderRadius: '6px',
                  fontSize: '12px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                {isRunning ? <><Pause size={12} /> Pause Simulation</> : <><Play size={12} /> Resume</>}
              </button>
              <div style={{ fontSize: '12px', color: '#a1a1aa' }}>
                Step {activeStepIndex + 1} of {workflowSteps.length}
              </div>
            </div>
          </div>

          {/* Flow Grid */}
          <div style={{ padding: '32px', background: 'rgba(5, 5, 8, 0.95)' }}>
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
                        ? 'rgba(168, 85, 247, 0.16)' 
                        : isPast 
                          ? 'rgba(16, 185, 129, 0.05)' 
                          : 'rgba(255, 255, 255, 0.02)',
                      border: isActive 
                        ? `1.5px solid ${step.color}` 
                        : isPast 
                          ? '1px solid rgba(16, 185, 129, 0.3)' 
                          : '1px solid rgba(255, 255, 255, 0.06)',
                      transition: 'all 0.25s ease',
                      position: 'relative'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div
                          style={{
                            width: '28px',
                            height: '28px',
                            borderRadius: '8px',
                            background: isActive ? step.color : 'rgba(255,255,255,0.06)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#ffffff'
                          }}
                        >
                          <StepIcon size={14} />
                        </div>
                        <span style={{ fontSize: '11px', color: '#a1a1aa', fontFamily: 'monospace' }}>
                          STEP 0{step.id}
                        </span>
                      </div>

                      <span style={{
                        fontSize: '11px',
                        padding: '2px 6px',
                        borderRadius: '4px',
                        background: 'rgba(255,255,255,0.06)',
                        color: '#d4d4d8',
                        fontFamily: 'monospace'
                      }}>
                        {step.tool}
                      </span>
                    </div>

                    <div style={{ fontSize: '14px', fontWeight: 700, color: isActive ? '#ffffff' : '#e4e4e7', marginBottom: '4px' }}>
                      {step.action}
                    </div>

                    <div style={{ fontSize: '12px', color: '#a1a1aa', lineHeight: 1.4 }}>
                      {step.detail}
                    </div>

                    {isActive && (
                      <div
                        style={{
                          position: 'absolute',
                          top: -4,
                          right: -4,
                          width: '10px',
                          height: '10px',
                          borderRadius: '50%',
                          background: step.color,
                          boxShadow: `0 0 10px ${step.color}`
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
                background: 'rgba(0, 0, 0, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '12px',
                padding: '18px 22px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '14px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <span className="status-indicator-dot active" />
                <div style={{ fontFamily: 'monospace', fontSize: '13px', color: '#e4e4e7' }}>
                  <span style={{ color: '#c084fc' }}>[STEP 0{currentActiveStep.id}]</span>{' '}
                  <span style={{ color: '#ffffff', fontWeight: 600 }}>{currentActiveStep.action}</span>{' '}
                  <span style={{ color: '#71717a' }}>via {currentActiveStep.tool}</span>
                </div>
              </div>

              <button
                onClick={onOpenModal}
                className="btn-primary"
                style={{ padding: '8px 18px', fontSize: '13px', borderRadius: '8px' }}
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
