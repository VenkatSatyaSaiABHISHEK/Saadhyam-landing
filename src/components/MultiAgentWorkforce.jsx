import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, ArrowRight, Share2, Layers, Cpu, Sparkles, CheckCircle2, Zap 
} from 'lucide-react';
import { Blobatar } from '@blobatar/react';

const collaborativeNodes = [
  {
    step: 1,
    name: 'AI Sales Human',
    identity: 'AlexSales',
    displayName: 'Alex',
    action: 'Discovers high-intent enterprise lead from product signup',
    output: 'Lead payload: Acme Corp, 500+ employees, high ARR potential',
    color: '#ec4899'
  },
  {
    step: 2,
    name: 'AI Research Human',
    identity: 'ElenaResearch',
    displayName: 'Elena',
    action: 'Performs automated background & competitor audit',
    output: 'Intelligence dossier: Tech stack includes Legacy CRM, $14M series B',
    color: '#06b6d4'
  },
  {
    step: 3,
    name: 'AI Proposal Human',
    identity: 'ChristianProposal',
    displayName: 'Christian',
    action: 'Generates custom ROI proposal and migration timeline',
    output: 'Dynamic 12-page PDF deck customized with Acme Corp branding',
    color: '#a855f7'
  },
  {
    step: 4,
    name: 'AI Scheduling Human',
    identity: 'SophiaVoice',
    displayName: 'Sophia',
    action: 'Coordinates VP of Sales calendar with buyer timezones',
    output: 'Confirmed 45-min Zoom demo scheduled on Thursday 2 PM EST',
    color: '#ec4899'
  },
  {
    step: 5,
    name: 'AI CRM Human',
    identity: 'MarcusOps',
    displayName: 'Marcus',
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

          <h2 style={{ fontSize: '48px', lineHeight: 1.15, marginBottom: '20px', color: '#09090b' }}>
            One AI Human is useful.{' '}
            <span className="text-gradient">An AI workforce is powerful.</span>
          </h2>

          <p style={{ fontSize: '19px', color: '#475569', lineHeight: 1.7, maxWidth: '780px', margin: '0 auto' }}>
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
            background: '#ffffff',
            border: '1.5px solid rgba(236, 72, 153, 0.22)',
            boxShadow: '0 25px 60px -15px rgba(236, 72, 153, 0.15)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px', flexWrap: 'wrap', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div className="status-indicator-dot working" />
              <span style={{ fontSize: '13px', fontWeight: 800, color: '#09090b', fontFamily: 'monospace' }}>
                AUTONOMOUS MULTI-AGENT HANDOFF PIPELINE
              </span>
            </div>
            <div style={{ fontSize: '12px', color: '#64748b', fontWeight: 500 }}>
              Zero manual copying • Zero lost context • Sub-second data handoffs
            </div>
          </div>

          {/* Node Cards Chain */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', position: 'relative' }}>
            {collaborativeNodes.map((node, idx) => {
              const isActive = activeStep === idx;

              return (
                <div
                  key={node.step}
                  onClick={() => setActiveStep(idx)}
                  style={{
                    padding: '20px 24px',
                    borderRadius: '16px',
                    cursor: 'pointer',
                    background: isActive ? '#fdf2f8' : '#ffffff',
                    border: isActive ? `1.5px solid ${node.color}` : '1px solid rgba(236, 72, 153, 0.16)',
                    boxShadow: isActive ? '0 8px 24px rgba(236, 72, 153, 0.16)' : '0 2px 8px rgba(0,0,0,0.02)',
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
                    <div className="blobatar-frame" style={{ width: '46px', height: '46px', borderRadius: '12px', flexShrink: 0 }}>
                      <Blobatar name={node.identity} animate="hover" size={40} />
                    </div>

                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        background: isActive ? node.color : '#f3e8ff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 800,
                        fontSize: '12px',
                        color: isActive ? '#ffffff' : '#9333ea'
                      }}
                    >
                      0{node.step}
                    </div>

                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '16px', fontWeight: 800, color: '#09090b' }}>
                          {node.name}
                        </span>
                        <span style={{
                          fontSize: '11px',
                          color: '#db2777',
                          background: 'rgba(236, 72, 153, 0.1)',
                          padding: '2px 8px',
                          borderRadius: '6px',
                          fontFamily: 'monospace',
                          fontWeight: 700
                        }}>
                          Identity: {node.displayName}
                        </span>
                      </div>
                      <div style={{ fontSize: '13px', color: '#475569', marginTop: '3px', fontWeight: 500 }}>
                        {node.action}
                      </div>
                    </div>
                  </div>

                  {/* Right handoff payload */}
                  <div style={{
                    background: isActive ? '#ffffff' : '#faf8f9',
                    border: '1px solid rgba(236, 72, 153, 0.18)',
                    padding: '10px 16px',
                    borderRadius: '10px',
                    maxWidth: '460px',
                    fontSize: '12px',
                    color: '#09090b',
                    fontFamily: 'monospace',
                    fontWeight: 500
                  }}>
                    <strong style={{ color: '#db2777' }}>↳</strong> {node.output}
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
