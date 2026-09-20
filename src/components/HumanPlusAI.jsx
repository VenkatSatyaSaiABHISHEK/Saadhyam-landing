import React from 'react';
import { motion } from 'framer-motion';
import { 
  HeartHandshake, Sparkles, Brain, Cpu, Lightbulb, Users, Compass, 
  Workflow, Clock, CheckCircle2, ArrowRight 
} from 'lucide-react';

const humanStrengths = [
  { title: 'Strategic Vision', desc: 'Setting company direction, market bets, and defining organizational goals.' },
  { title: 'Creative Innovation', desc: 'Inventing new product models, breakthrough narratives, and brand soul.' },
  { title: 'Empathetic Leadership', desc: 'Inspiring people, mentoring talent, and building high-trust culture.' },
  { title: 'High-Stakes Relationships', desc: 'Negotiating marquee contracts, founder deals, and trusted partnerships.' },
  { title: 'Complex Judgment', desc: 'Navigating ethical dilemmas, ambiguous trade-offs, and critical decisions.' }
];

const aiHumanStrengths = [
  { title: 'Autonomous Execution', desc: 'Carrying multi-step business SOPs from trigger to verified completion.' },
  { title: '24/7 Monitoring & Vigilance', desc: 'Constantly scanning webhooks, server metrics, leads, and customer tickets.' },
  { title: 'Flawless Follow-Ups', desc: 'Ensuring zero leads, unanswered emails, or overdue client SLAs fall through cracks.' },
  { title: 'High-Volume Data Processing', desc: 'Auditing hundreds of invoices and analyzing thousands of market sources in minutes.' },
  { title: 'Cross-Tool Workflow Automation', desc: 'Synchronizing CRM, ERP, Slack, databases, and billing APIs without friction.' }
];

export default function HumanPlusAI({ onOpenModal }) {
  return (
    <section id="human-plus-ai" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 60px' }}>
          <div className="badge-tag" style={{ marginBottom: '16px' }}>
            <HeartHandshake size={14} />
            <span>THE SYMBIOTIC ADVANTAGE</span>
          </div>

          <h2 style={{ fontSize: '32px', color: '#a1a1aa', fontWeight: 600, marginBottom: '12px' }}>
            The future isn't humans vs AI.
          </h2>

          <div style={{ fontSize: '54px', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: '20px', color: '#ffffff' }}>
            It’s <span className="text-gradient">Humans + AI Humans.</span>
          </div>

          <p style={{ fontSize: '19px', color: '#d4d4d8', lineHeight: 1.6, maxWidth: '720px', margin: '0 auto' }}>
            Saadhyam is engineered to augment and elevate human teams. Humans define the mission and purpose; AI Humans handle continuous execution.
          </p>
        </div>

        {/* Side-by-side Dual Column Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
            maxWidth: '1060px',
            margin: '0 auto 48px'
          }}
        >
          {/* Humans Focus Column */}
          <div
            className="cyber-card"
            style={{
              padding: '36px',
              border: '1px solid rgba(236, 72, 153, 0.3)',
              background: 'linear-gradient(180deg, rgba(236, 72, 153, 0.08) 0%, rgba(10, 10, 15, 0.8) 100%)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: 'rgba(236, 72, 153, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ec4899'
              }}>
                <Brain size={22} />
              </div>
              <div>
                <span style={{ fontSize: '11px', color: '#ec4899', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  Human Team
                </span>
                <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#ffffff' }}>
                  Humans Focus On
                </h3>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {humanStrengths.map((item) => (
                <div key={item.title} style={{ display: 'flex', gap: '12px' }}>
                  <div style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: 'rgba(236, 72, 153, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ec4899',
                    fontSize: '11px',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}>
                    ✦
                  </div>
                  <div>
                    <div style={{ fontSize: '15px', fontWeight: 600, color: '#ffffff', marginBottom: '2px' }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: '13px', color: '#a1a1aa', lineHeight: 1.4 }}>
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Humans Focus Column */}
          <div
            className="cyber-card"
            style={{
              padding: '36px',
              border: '1px solid rgba(168, 85, 247, 0.35)',
              background: 'linear-gradient(180deg, rgba(168, 85, 247, 0.1) 0%, rgba(10, 10, 15, 0.8) 100%)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: 'rgba(168, 85, 247, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#a855f7'
              }}>
                <Cpu size={22} />
              </div>
              <div>
                <span style={{ fontSize: '11px', color: '#a855f7', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  Digital Workforce
                </span>
                <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#ffffff' }}>
                  AI Humans Focus On
                </h3>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {aiHumanStrengths.map((item) => (
                <div key={item.title} style={{ display: 'flex', gap: '12px' }}>
                  <div style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: 'rgba(168, 85, 247, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#c084fc',
                    fontSize: '11px',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}>
                    ✓
                  </div>
                  <div>
                    <div style={{ fontSize: '15px', fontWeight: 600, color: '#ffffff', marginBottom: '2px' }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: '13px', color: '#a1a1aa', lineHeight: 1.4 }}>
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <button
            onClick={onOpenModal}
            className="btn-primary"
            style={{ borderRadius: '9999px', padding: '14px 32px' }}
          >
            <span>Augment Your Team with AI Humans</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
