import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, ArrowRight, Share2, Layers, Cpu, Sparkles, CheckCircle2, Zap 
} from 'lucide-react';

const collaborativeNodes = [
  {
    step: 1,
    name: 'AI Sales Human',
    identity: 'Alex',
    action: 'Discovers high-intent enterprise lead from product signup',
    output: 'Lead payload: Acme Corp, 500+ employees, high ARR potential',
    color: '#a855f7'
  },
  {
    step: 2,
    name: 'AI Research Human',
    identity: 'Elena',
    action: 'Performs automated background & competitor audit',
    output: 'Intelligence dossier: Tech stack includes Legacy CRM, $14M series B',
    color: '#3b82f6'
  },
  {
    step: 3,
    name: 'AI Proposal Human',
    identity: 'Christian',
    action: 'Generates custom ROI proposal and migration timeline',
    output: 'Dynamic 12-page PDF deck customized with Acme Corp branding',
    color: '#ec4899'
  },
  {
    step: 4,
    name: 'AI Scheduling Human',
    identity: 'Sophia',
    action: 'Coordinates VP of Sales calendar with buyer timezones',
    output: 'Confirmed 45-min Zoom demo scheduled on Thursday 2 PM EST',
    color: '#06b6d4'
  },
  {
    step: 5,
    name: 'AI CRM Human',
    identity: 'Marcus',
    action: 'Logs deal stage, touches, and syncs account pipeline',
    output: 'Salesforce Stage: Opportunity Created ($85,000 Expected ARR)',
    color: '#10b981'
  }
];

export default function MultiAgentWorkforce({ onOpenModal }) {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % collaborativeNodes.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="multi-agent" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '860px', margin: '0 auto 60px' }}>
          <div className="badge-tag" style={{ marginBottom: '16px' }}>
            <Share2 size={13} />
            <span>COLLECTIVE WORKFORCE INTELLIGENCE</span>
          </div>

          <h2 style={{ fontSize: '48px', lineHeight: 1.15, marginBottom: '20px', color: '#ffffff' }}>
            One AI Human is useful.{' '}
            <span className="text-gradient">An AI workforce is powerful.</span>
          </h2>

          <p style={{ fontSize: '19px', color: '#a1a1aa', lineHeight: 1.7, maxWidth: '780px', margin: '0 auto' }}>
            Instead of building one giant, fragile AI system, create specialized AI Humans that hand off context and collaborate seamlessly as a coordinated digital workforce.
          </p>
        </div>

        {/* Multi-Agent Collaboration Interactive Pipeline */}
        <div
          className="cyber-card"
          style={{
            maxWidth: '1080px',
            margin: '0 auto',
            padding: '36px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 30px 80px -20px rgba(0, 0, 0, 0.8)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px', flexWrap: 'wrap', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div className="status-indicator-dot working" />
              <span style={{ fontSize: '13px', fontWeight: 600, color: '#e4e4e7', fontFamily: 'monospace' }}>
                AUTONOMOUS MULTI-AGENT HANDOFF PIPELINE
              </span>
            </div>
            <div style={{ fontSize: '12px', color: '#a1a1aa' }}>
              Zero manual copying • Zero lost context • Sub-second data handoffs
            </div>
          </div>

          {/* Node Cards Chain */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', position: 'relative' }}>
            {collaborativeNodes.map((node, idx) => {
              const isActive = activeStep === idx;
              const isPast = activeStep > idx;

              return (
                <div
                  key={node.step}
                  onClick={() => setActiveStep(idx)}
                  style={{
                    padding: '20px 24px',
                    borderRadius: '16px',
                    cursor: 'pointer',
                    background: isActive ? 'rgba(168, 85, 247, 0.14)' : 'rgba(255, 255, 255, 0.02)',
                    border: isActive ? `1.5px solid ${node.color}` : '1px solid rgba(255, 255, 255, 0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '16px',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {/* Left info */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '10px',
                        background: isActive ? node.color : 'rgba(255, 255, 255, 0.06)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        fontSize: '13px',
                        color: '#ffffff'
                      }}
                    >
                      0{node.step}
                    </div>

                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff' }}>
                          {node.name}
                        </span>
                        <span style={{
                          fontSize: '11px',
                          color: node.color,
                          background: 'rgba(255,255,255,0.06)',
                          padding: '1px 7px',
                          borderRadius: '4px',
                          fontFamily: 'monospace'
                        }}>
                          Identity: {node.identity}
                        </span>
                      </div>
                      <div style={{ fontSize: '13px', color: '#a1a1aa', marginTop: '3px' }}>
                        {node.action}
                      </div>
                    </div>
                  </div>

                  {/* Right handoff payload */}
                  <div style={{
                    background: 'rgba(0, 0, 0, 0.4)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    padding: '8px 14px',
                    borderRadius: '8px',
                    maxWidth: '460px',
                    fontSize: '12px',
                    color: isActive ? '#f3e8ff' : '#71717a',
                    fontFamily: 'monospace'
                  }}>
                    ↳ {node.output}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Statement */}
          <div style={{ marginTop: '32px', textAlign: 'center' }}>
            <button
              onClick={onOpenModal}
              className="btn-primary"
              style={{ borderRadius: '9999px', padding: '14px 32px' }}
            >
              <span>Build Your Multi-Agent Team</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
