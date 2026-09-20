import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Users, Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function TheBigIdea({ onOpenModal }) {
  return (
    <section id="the-big-idea" className="section" style={{ position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 64px' }}>
          <div className="badge-tag" style={{ marginBottom: '20px' }}>
            <Sparkles size={13} />
            <span>THE PARADIGM SHIFT</span>
          </div>

          <h2 style={{ fontSize: '48px', lineHeight: 1.15, marginBottom: '24px', color: '#ffffff' }}>
            What if your company could{' '}
            <span className="text-gradient">hire AI employees?</span>
          </h2>

          <p style={{ fontSize: '19px', color: '#a1a1aa', lineHeight: 1.7, marginBottom: '16px' }}>
            Today, companies hire humans to perform repetitive digital work.
          </p>
          <p style={{ fontSize: '19px', color: '#e4e4e7', lineHeight: 1.7, marginBottom: '28px' }}>
            Tomorrow, companies will build teams where humans and AI Humans work together.
            <br />
            <strong style={{ color: '#d8b4fe' }}>
              Saadhyam gives businesses the infrastructure to create those AI employees today.
            </strong>
          </p>

          {/* High-impact highlight banner */}
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(236, 72, 153, 0.15))',
              border: '1px solid rgba(168, 85, 247, 0.4)',
              borderRadius: '20px',
              padding: '24px 36px',
              display: 'inline-flex',
              flexDirection: 'column',
              gap: '6px',
              boxShadow: '0 0 40px rgba(168, 85, 247, 0.2)'
            }}
          >
            <div style={{ fontSize: '24px', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>
              Humans define the goals.
            </div>
            <div style={{ fontSize: '24px', fontWeight: 800, color: '#ec4899', letterSpacing: '-0.02em' }}>
              AI Humans execute the work.
            </div>
          </div>
        </div>

        {/* Side-by-Side Architectural Transformation Card */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
            maxWidth: '1040px',
            margin: '0 auto'
          }}
        >
          {/* Legacy Workplace */}
          <div
            className="cyber-card"
            style={{
              padding: '36px',
              background: 'rgba(20, 10, 15, 0.5)',
              border: '1px solid rgba(239, 68, 68, 0.2)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
              <span style={{
                background: 'rgba(239, 68, 68, 0.15)',
                color: '#f87171',
                padding: '4px 10px',
                borderRadius: '6px',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.06em'
              }}>
                THE OLD PARADIGM
              </span>
              <span style={{ fontSize: '13px', color: '#71717a' }}>Traditional Software</span>
            </div>

            <h3 style={{ fontSize: '22px', color: '#f4f4f5', marginBottom: '16px' }}>
              Manual Human Friction
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '15px', color: '#a1a1aa' }}>
              <div style={{ display: 'flex', gap: '10px' }}>
                <span style={{ color: '#ef4444' }}>✕</span>
                <span>Employees spend 60% of their workday copy-pasting data across SaaS apps.</span>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <span style={{ color: '#ef4444' }}>✕</span>
                <span>Work stops when humans log off at 6 PM or go on vacation.</span>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <span style={{ color: '#ef4444' }}>✕</span>
                <span>AI chatbots sit idle waiting for manual questions and prompts.</span>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <span style={{ color: '#ef4444' }}>✕</span>
                <span>Scaling operations requires months of hiring, training, and overhead.</span>
              </div>
            </div>
          </div>

          {/* Saadhyam AI Workforce */}
          <div
            className="cyber-card"
            style={{
              padding: '36px',
              background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(59, 130, 246, 0.08))',
              border: '1px solid rgba(168, 85, 247, 0.4)',
              boxShadow: '0 20px 50px rgba(168, 85, 247, 0.15)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
              <span style={{
                background: 'rgba(16, 185, 129, 0.15)',
                color: '#34d399',
                padding: '4px 10px',
                borderRadius: '6px',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.06em'
              }}>
                THE SAADHYAM PARADIGM
              </span>
              <span style={{ fontSize: '13px', color: '#d8b4fe' }}>AI Workforce Platform</span>
            </div>

            <h3 style={{ fontSize: '22px', color: '#ffffff', marginBottom: '16px' }}>
              Autonomous AI Employee Synergy
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '15px', color: '#e4e4e7' }}>
              <div style={{ display: 'flex', gap: '10px' }}>
                <CheckCircle2 size={18} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>AI Humans execute cross-system workflows 24/7 without manual babysitting.</span>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <CheckCircle2 size={18} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Humans orchestrate high-level strategy, relationships, and creative vision.</span>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <CheckCircle2 size={18} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Instant scale: Deploy 5, 20, or 100 specialized digital workers in minutes.</span>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <CheckCircle2 size={18} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Continuous organizational memory and instant multi-tool coordination.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
