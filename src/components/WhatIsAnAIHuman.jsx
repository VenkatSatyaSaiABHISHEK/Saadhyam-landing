import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, UserCheck, Check, X, Sparkles, Layers, Cpu, Zap, ArrowRight } from 'lucide-react';

const comparisonData = [
  {
    feature: 'Primary Capability',
    traditional: 'Answers questions & generates text',
    saadhyam: 'Performs actual end-to-end work across tools',
    whyItMatters: 'Digital employees finish tickets, books meetings, and updates databases.'
  },
  {
    feature: 'Initiative & Execution',
    traditional: 'Waits passively for human prompts',
    saadhyam: 'Autonomous triggers & executes workflows 24/7',
    whyItMatters: 'Acts immediately when a lead arrives, a server alerts, or a ticket is created.'
  },
  {
    feature: 'Focus & Context',
    traditional: 'General purpose & easily hallucinates scope',
    saadhyam: 'Role-specific intelligence & domain rules',
    whyItMatters: 'Trained to follow your company SOPs and specific role guidelines.'
  },
  {
    feature: 'Identity & Persistence',
    traditional: 'Single stateless chat session',
    saadhyam: 'Persistent digital employee with memory',
    whyItMatters: 'Remembers historical client relationships, open issues, and team preferences.'
  },
  {
    feature: 'Interface & Tooling',
    traditional: 'Chat-based box only',
    saadhyam: 'Multi-tool execution & API orchestrations',
    whyItMatters: 'Interacts with Salesforce, Jira, Slack, Stripe, and custom internal APIs.'
  },
  {
    feature: 'Business Accountability',
    traditional: 'No corporate identity or responsibility',
    saadhyam: 'Has clear role, KPIs, and audit trails',
    whyItMatters: 'Every action is auditable with strict permission barriers and error fallbacks.'
  },
  {
    feature: 'Operational Driver',
    traditional: 'Requires continuous manual prompt engineering',
    saadhyam: 'Workflow-driven, milestone reporting',
    whyItMatters: 'Reports clean summaries to human managers only when milestones are hit.'
  }
];

export default function WhatIsAnAIHuman({ onOpenModal }) {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section id="what-is-ai-human" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 56px' }}>
          <div className="badge-tag" style={{ marginBottom: '18px' }}>
            <UserCheck size={14} />
            <span>DEFINING THE NEXT FRONTIER</span>
          </div>

          <h2 style={{ fontSize: '46px', lineHeight: 1.15, marginBottom: '20px', color: '#ffffff' }}>
            An AI Human is more than an{' '}
            <span className="text-gradient">AI assistant.</span>
          </h2>

          <p style={{ fontSize: '18px', color: '#a1a1aa', lineHeight: 1.7, marginBottom: '16px' }}>
            An AI Human is a <strong>persistent digital worker built around a specific role</strong>.
          </p>
          <p style={{ fontSize: '17px', color: '#d4d4d8', lineHeight: 1.7 }}>
            It understands its responsibilities, follows organizational workflows, interacts with business systems,
            communicates with people via text and voice, performs tasks autonomously, and reports measurable outcomes.
          </p>
        </div>

        {/* Comparison Table / Matrix */}
        <div
          className="cyber-card"
          style={{
            maxWidth: '1080px',
            margin: '0 auto',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 30px 80px -20px rgba(0, 0, 0, 0.8)'
          }}
        >
          {/* Table Header */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '2fr 3fr 4fr',
              background: 'rgba(10, 10, 18, 0.95)',
              padding: '20px 28px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              fontWeight: 700,
              fontSize: '14px',
              letterSpacing: '0.04em'
            }}
          >
            <div style={{ color: '#a1a1aa' }}>DIMENSION</div>
            <div style={{ color: '#ef4444', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Bot size={16} /> Traditional AI (Chatbots)
            </div>
            <div style={{ color: '#a855f7', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Sparkles size={16} color="#ec4899" /> Saadhyam AI Human (Employees)
            </div>
          </div>

          {/* Rows */}
          <div style={{ background: 'rgba(5, 5, 10, 0.8)' }}>
            {comparisonData.map((row, idx) => (
              <div
                key={row.feature}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '2fr 3fr 4fr',
                  padding: '18px 28px',
                  borderBottom: idx === comparisonData.length - 1 ? 'none' : '1px solid rgba(255, 255, 255, 0.04)',
                  background: hoveredIdx === idx ? 'rgba(168, 85, 247, 0.05)' : 'transparent',
                  transition: 'background 0.2s ease',
                  alignItems: 'center'
                }}
              >
                <div style={{ fontWeight: 600, fontSize: '14px', color: '#f4f4f5' }}>
                  {row.feature}
                </div>

                <div style={{ fontSize: '14px', color: '#71717a', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#ef4444', fontWeight: 800, fontSize: '12px' }}>✕</span>
                  <span>{row.traditional}</span>
                </div>

                <div>
                  <div style={{ fontSize: '14px', color: '#ffffff', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '3px' }}>
                    <span style={{
                      background: 'rgba(16, 185, 129, 0.15)',
                      color: '#34d399',
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '11px',
                      flexShrink: 0
                    }}>✓</span>
                    <span style={{ color: '#f3e8ff' }}>{row.saadhyam}</span>
                  </div>
                  <div style={{ fontSize: '12px', color: '#a1a1aa', paddingLeft: '26px' }}>
                    {row.whyItMatters}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action callout */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <button
            onClick={onOpenModal}
            className="btn-primary"
            style={{ borderRadius: '9999px', padding: '14px 30px' }}
          >
            <span>Experience an AI Human in Action</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
