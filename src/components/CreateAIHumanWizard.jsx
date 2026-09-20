import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, Briefcase, FileCode2, GitBranch, Rocket, Check, ArrowRight, 
  Sparkles, RefreshCw, CheckCircle2, Shield, Play 
} from 'lucide-react';
import { Blobatar } from "@blobatar/react";

const presetTemplates = [
  {
    name: 'Alex',
    role: 'AI Sales Executive',
    department: 'Sales & Revenue',
    instructions: 'Find qualified leads, contact prospects, understand their requirements, update the CRM, schedule meetings, and follow up automatically.',
    tools: ['Salesforce', 'Apollo', 'Gmail', 'Google Calendar', 'Slack'],
    trigger: 'Webhook: New lead form submitted on landing page'
  },
  {
    name: 'Maya',
    role: 'AI Support Executive',
    department: 'Customer Success',
    instructions: 'Monitor incoming customer tickets, diagnose technical bugs, resolve FAQs, escalate critical outages, and log post-mortems in Jira.',
    tools: ['Zendesk', 'Linear', 'Intercom', 'Slack', 'PostgreSQL'],
    trigger: 'Event: New support ticket created'
  },
  {
    name: 'Ethan',
    role: 'AI Operations Manager',
    department: 'Logistics & Infrastructure',
    instructions: 'Track supplier supply chain APIs, detect stock anomalies below safety stock thresholds, trigger purchase orders, and alert management.',
    tools: ['SAP', 'NetSuite', 'Stripe', 'Email API', 'Slack'],
    trigger: 'Cron: Hourly inventory threshold audit'
  }
];

export default function CreateAIHumanWizard({ onOpenModal }) {
  const [activeStep, setActiveStep] = useState(1);
  const [selectedTemplate, setSelectedTemplate] = useState(0);
  const [customName, setCustomName] = useState(presetTemplates[0].name);
  const [customRole, setCustomRole] = useState(presetTemplates[0].role);
  const [customInstructions, setCustomInstructions] = useState(presetTemplates[0].instructions);
  const [isDeploying, setIsDeploying] = useState(false);
  const [deploySuccess, setDeploySuccess] = useState(false);

  const handleSelectTemplate = (idx) => {
    setSelectedTemplate(idx);
    setCustomName(presetTemplates[idx].name);
    setCustomRole(presetTemplates[idx].role);
    setCustomInstructions(presetTemplates[idx].instructions);
    setDeploySuccess(false);
  };

  const handleDeploy = () => {
    setIsDeploying(true);
    setTimeout(() => {
      setIsDeploying(false);
      setDeploySuccess(true);
    }, 1800);
  };

  const currentTpl = presetTemplates[selectedTemplate];

  return (
    <section id="create-wizard" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 50px' }}>
          <div className="badge-tag" style={{ marginBottom: '16px' }}>
            <Rocket size={13} />
            <span>RAPID DEPLOYMENT ENGINE</span>
          </div>

          <h2 style={{ fontSize: '46px', lineHeight: 1.15, marginBottom: '18px', color: '#09090b' }}>
            Create an AI Human in <span className="text-gradient">minutes.</span>
          </h2>

          <p style={{ fontSize: '18px', color: '#475569', lineHeight: 1.6 }}>
            Hire and configure a dedicated digital employee in 4 simple steps. Watch its Blobatar avatar adapt live as you configure identity.
          </p>
        </div>

        {/* Template Quick Selectors */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '36px', flexWrap: 'wrap' }}>
          {presetTemplates.map((tpl, idx) => (
            <button
              key={tpl.role}
              onClick={() => handleSelectTemplate(idx)}
              style={{
                background: selectedTemplate === idx ? 'linear-gradient(135deg, #fdf2f8, #fce7f3)' : '#ffffff',
                border: selectedTemplate === idx ? '1.5px solid #ec4899' : '1px solid rgba(236, 72, 153, 0.2)',
                color: selectedTemplate === idx ? '#db2777' : '#475569',
                padding: '10px 18px',
                borderRadius: '9999px',
                fontSize: '13px',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: selectedTemplate === idx ? '0 4px 14px rgba(236, 72, 153, 0.15)' : '0 2px 8px rgba(0,0,0,0.02)',
                transition: 'all 0.2s'
              }}
            >
              <Sparkles size={14} color={selectedTemplate === idx ? '#ec4899' : '#94a3b8'} />
              <span>Preset: {tpl.role} ({tpl.name})</span>
            </button>
          ))}
        </div>

        {/* 4-Step Interactive Interactive Card */}
        <div
          className="cyber-card"
          style={{
            maxWidth: '1060px',
            margin: '0 auto',
            overflow: 'hidden',
            border: '1.5px solid rgba(236, 72, 153, 0.25)',
            boxShadow: '0 25px 60px -15px rgba(236, 72, 153, 0.18)',
            background: '#ffffff'
          }}
        >
          {/* Step Navigation Tabs */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              background: '#fdf2f8',
              borderBottom: '1px solid rgba(236, 72, 153, 0.15)'
            }}
          >
            {[
              { num: '01', title: 'Name', sub: 'Give an identity', icon: User },
              { num: '02', title: 'Role', sub: 'Define responsibility', icon: Briefcase },
              { num: '03', title: 'Instructions', sub: 'Describe how it works', icon: FileCode2 },
              { num: '04', title: 'Workflow', sub: 'Connect tools & triggers', icon: GitBranch }
            ].map((step, idx) => {
              const stepNumber = idx + 1;
              const isActive = activeStep === stepNumber;
              const isPast = activeStep > stepNumber;
              const StepIcon = step.icon;

              return (
                <div
                  key={step.title}
                  onClick={() => setActiveStep(stepNumber)}
                  style={{
                    padding: '18px 20px',
                    borderRight: idx < 3 ? '1px solid rgba(236, 72, 153, 0.12)' : 'none',
                    cursor: 'pointer',
                    background: isActive ? '#ffffff' : 'transparent',
                    borderBottom: isActive ? '3px solid #ec4899' : '3px solid transparent',
                    transition: 'all 0.2s',
                    textAlign: 'left'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <span style={{
                      fontSize: '11px',
                      fontWeight: 800,
                      color: isActive ? '#ec4899' : isPast ? '#059669' : '#94a3b8',
                      fontFamily: 'monospace'
                    }}>
                      STEP {step.num}
                    </span>
                    {isPast && <Check size={12} color="#059669" />}
                  </div>
                  <div style={{ fontSize: '15px', fontWeight: 800, color: isActive ? '#09090b' : '#64748b', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <StepIcon size={15} color={isActive ? '#ec4899' : '#94a3b8'} />
                    <span>{step.title}</span>
                  </div>
                  <div style={{ fontSize: '12px', color: '#64748b' }}>{step.sub}</div>
                </div>
              );
            })}
          </div>

          {/* Interactive Step Content Area */}
          <div style={{ padding: '36px 40px', background: '#ffffff' }}>
            <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              {/* Left Form Panel */}
              <div style={{ flex: 1, minWidth: '300px' }}>
                <AnimatePresence mode="wait">
                  {activeStep === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <div style={{ marginBottom: '24px' }}>
                        <span style={{ fontSize: '12px', color: '#db2777', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 800 }}>
                          Step 01 — Identity
                        </span>
                        <h3 style={{ fontSize: '26px', color: '#09090b', marginTop: '6px', marginBottom: '8px', fontWeight: 800 }}>
                          Give your AI Human an identity.
                        </h3>
                        <p style={{ color: '#475569', fontSize: '15px' }}>
                          Give your digital employee a recognizable human name. Its unique geometric Blobatar generates instantly.
                        </p>
                      </div>

                      <div style={{ maxWidth: '520px' }}>
                        <label style={{ display: 'block', fontSize: '13px', color: '#09090b', marginBottom: '8px', fontWeight: 700 }}>
                          Digital Employee Name
                        </label>
                        <input
                          type="text"
                          className="input-field"
                          value={customName}
                          onChange={(e) => setCustomName(e.target.value)}
                          placeholder="e.g. Alex"
                          style={{ fontSize: '16px', fontWeight: 600 }}
                        />
                        <div style={{ display: 'flex', gap: '10px', marginTop: '6px', flexWrap: 'wrap' }}>
                          {['Alex', 'Maya', 'Elena', 'Ethan', 'David', 'Jordan', 'Sophia', 'Christian'].map((preset) => (
                            <button
                              key={preset}
                              type="button"
                              onClick={() => setCustomName(preset)}
                              style={{
                                background: customName === preset ? '#fdf2f8' : '#faf8f9',
                                border: customName === preset ? '1px solid #ec4899' : '1px solid rgba(236, 72, 153, 0.2)',
                                borderRadius: '8px',
                                color: customName === preset ? '#db2777' : '#475569',
                                padding: '5px 12px',
                                fontSize: '12px',
                                fontWeight: 600,
                                cursor: 'pointer'
                              }}
                            >
                              {preset}
                            </button>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeStep === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <div style={{ marginBottom: '24px' }}>
                        <span style={{ fontSize: '12px', color: '#db2777', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 800 }}>
                          Step 02 — Role & Responsibilities
                        </span>
                        <h3 style={{ fontSize: '26px', color: '#09090b', marginTop: '6px', marginBottom: '8px', fontWeight: 800 }}>
                          Define what the AI Human is responsible for.
                        </h3>
                        <p style={{ color: '#475569', fontSize: '15px' }}>
                          Specify the operational role title and department objectives.
                        </p>
                      </div>

                      <div style={{ maxWidth: '520px' }}>
                        <label style={{ display: 'block', fontSize: '13px', color: '#09090b', marginBottom: '8px', fontWeight: 700 }}>
                          Operational Role Title
                        </label>
                        <input
                          type="text"
                          className="input-field"
                          value={customRole}
                          onChange={(e) => setCustomRole(e.target.value)}
                          placeholder="e.g. AI Sales Executive"
                          style={{ fontSize: '16px', fontWeight: 600 }}
                        />
                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '6px' }}>
                          {[
                            'AI Sales Executive',
                            'AI Support Executive',
                            'AI Operations Manager',
                            'AI Research Analyst',
                            'AI Finance Assistant',
                            'AI HR Specialist'
                          ].map((role) => (
                            <button
                              key={role}
                              type="button"
                              onClick={() => setCustomRole(role)}
                              style={{
                                background: customRole === role ? '#fdf2f8' : '#faf8f9',
                                border: customRole === role ? '1px solid #ec4899' : '1px solid rgba(236, 72, 153, 0.2)',
                                borderRadius: '8px',
                                color: customRole === role ? '#db2777' : '#475569',
                                padding: '5px 12px',
                                fontSize: '12px',
                                fontWeight: 600,
                                cursor: 'pointer'
                              }}
                            >
                              {role}
                            </button>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeStep === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <div style={{ marginBottom: '24px' }}>
                        <span style={{ fontSize: '12px', color: '#db2777', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 800 }}>
                          Step 03 — Operational Instructions
                        </span>
                        <h3 style={{ fontSize: '26px', color: '#09090b', marginTop: '6px', marginBottom: '8px', fontWeight: 800 }}>
                          Describe how it should work.
                        </h3>
                        <p style={{ color: '#475569', fontSize: '15px' }}>
                          Define your company SOPs, execution guidelines, and fallback escalation gates.
                        </p>
                      </div>

                      <div style={{ maxWidth: '680px' }}>
                        <label style={{ display: 'block', fontSize: '13px', color: '#09090b', marginBottom: '8px', fontWeight: 700 }}>
                          Business Rules & Execution Directives
                        </label>
                        <textarea
                          rows={4}
                          className="input-field"
                          value={customInstructions}
                          onChange={(e) => setCustomInstructions(e.target.value)}
                          style={{ fontSize: '14px', lineHeight: 1.6, resize: 'vertical' }}
                        />
                      </div>
                    </motion.div>
                  )}

                  {activeStep === 4 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <div style={{ marginBottom: '24px' }}>
                        <span style={{ fontSize: '12px', color: '#db2777', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 800 }}>
                          Step 04 — Workflow & Integrations
                        </span>
                        <h3 style={{ fontSize: '26px', color: '#09090b', marginTop: '6px', marginBottom: '8px', fontWeight: 800 }}>
                          Connect the steps, tools, triggers, and actions.
                        </h3>
                        <p style={{ color: '#475569', fontSize: '15px' }}>
                          Bind live enterprise APIs so your AI Human can read data, take actions, and post results.
                        </p>
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
                        <div style={{ background: '#faf8f9', padding: '18px', borderRadius: '14px', border: '1px solid rgba(236, 72, 153, 0.15)' }}>
                          <div style={{ fontSize: '11px', color: '#db2777', fontWeight: 800, textTransform: 'uppercase', marginBottom: '6px' }}>
                            Autonomous Trigger
                          </div>
                          <div style={{ fontSize: '13px', color: '#09090b', fontFamily: 'monospace', fontWeight: 600 }}>
                            {currentTpl.trigger}
                          </div>
                        </div>

                        <div style={{ background: '#faf8f9', padding: '18px', borderRadius: '14px', border: '1px solid rgba(236, 72, 153, 0.15)' }}>
                          <div style={{ fontSize: '11px', color: '#9333ea', fontWeight: 800, textTransform: 'uppercase', marginBottom: '6px' }}>
                            Authorized Enterprise Tools
                          </div>
                          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                            {currentTpl.tools.map((tool) => (
                              <span key={tool} style={{
                                fontSize: '11px',
                                background: '#ffffff',
                                border: '1px solid rgba(236, 72, 153, 0.25)',
                                padding: '3px 8px',
                                borderRadius: '6px',
                                color: '#09090b',
                                fontWeight: 600
                              }}>
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Right Live Avatar Badge Card */}
              <div
                style={{
                  width: '260px',
                  background: 'linear-gradient(135deg, #fdf2f8, #faf5ff)',
                  border: '1.5px solid rgba(236, 72, 153, 0.25)',
                  borderRadius: '18px',
                  padding: '24px 20px',
                  textAlign: 'center',
                  boxShadow: '0 8px 25px rgba(236, 72, 153, 0.1)'
                }}
              >
                <div style={{ fontSize: '11px', color: '#db2777', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '14px' }}>
                  Live Blobatar Preview
                </div>

                <div className="blobatar-frame" style={{ width: '84px', height: '84px', margin: '0 auto 14px', padding: '6px' }}>
                  <Blobatar name={customName || 'Alex'} animate="hover" size={74} />
                </div>

                <div style={{ fontSize: '17px', fontWeight: 800, color: '#09090b' }}>
                  {customName || 'Alex'}
                </div>
                <div style={{ fontSize: '12px', color: '#ec4899', fontWeight: 600, marginTop: '2px' }}>
                  {customRole}
                </div>

                <div style={{
                  marginTop: '16px',
                  paddingTop: '12px',
                  borderTop: '1px solid rgba(236, 72, 153, 0.18)',
                  fontSize: '11px',
                  color: '#64748b'
                }}>
                  Hover avatar to see interactive motion & breathing
                </div>
              </div>
            </div>

            {/* Bottom Actions: Next Step / Deploy */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '36px', paddingTop: '24px', borderTop: '1px solid rgba(236, 72, 153, 0.15)' }}>
              <div>
                {activeStep > 1 && (
                  <button
                    onClick={() => setActiveStep(activeStep - 1)}
                    style={{
                      background: '#ffffff',
                      border: '1px solid rgba(236, 72, 153, 0.25)',
                      color: '#475569',
                      padding: '10px 20px',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontSize: '14px',
                      fontWeight: 600
                    }}
                  >
                    Back
                  </button>
                )}
              </div>

              <div style={{ display: 'flex', gap: '14px' }}>
                {activeStep < 4 ? (
                  <button
                    onClick={() => setActiveStep(activeStep + 1)}
                    className="btn-primary"
                    style={{ borderRadius: '8px', padding: '12px 24px', fontSize: '14px' }}
                  >
                    <span>Proceed to Step 0{activeStep + 1}</span>
                    <ArrowRight size={15} />
                  </button>
                ) : (
                  <button
                    onClick={handleDeploy}
                    disabled={isDeploying}
                    className="btn-primary"
                    style={{
                      borderRadius: '8px',
                      padding: '12px 28px',
                      fontSize: '15px',
                      background: 'linear-gradient(135deg, #10b981, #059669)',
                      boxShadow: '0 0 25px rgba(16, 185, 129, 0.35)'
                    }}
                  >
                    {isDeploying ? (
                      <>
                        <RefreshCw size={16} className="animate-spin" />
                        <span>Provisioning AI Employee...</span>
                      </>
                    ) : deploySuccess ? (
                      <>
                        <CheckCircle2 size={16} />
                        <span>AI Human Deployed!</span>
                      </>
                    ) : (
                      <>
                        <Rocket size={16} />
                        <span>Deploy AI Human</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>

            {/* Deployment Success Feedback Box */}
            {deploySuccess && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  marginTop: '20px',
                  background: '#f0fdf4',
                  border: '1.5px solid rgba(16, 185, 129, 0.35)',
                  borderRadius: '14px',
                  padding: '16px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '12px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 10px #10b981' }} />
                  <div>
                    <span style={{ color: '#09090b', fontWeight: 800, fontSize: '14px' }}>
                      {customName} ({customRole}) is now active!
                    </span>
                    <div style={{ fontSize: '12px', color: '#475569' }}>
                      Connected to 5 tools. Ready to execute live production workflows.
                    </div>
                  </div>
                </div>

                <button
                  onClick={onOpenModal}
                  className="btn-primary"
                  style={{ padding: '8px 18px', fontSize: '13px', borderRadius: '6px' }}
                >
                  Save to Your Company Workforce <ArrowRight size={14} />
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
