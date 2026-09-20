import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle, Play, Shield, Users, Activity, Bot } from 'lucide-react';
import { Blobatar } from '@blobatar/react';

export default function IndustryHero({ industry, onOpenModal }) {
  const primaryAgent = industry.agents?.[0] || {
    name: 'AI Lead Agent',
    role: 'Autonomous Operations',
    blobatarName: 'AlexRealty'
  };

  return (
    <section 
      style={{ 
        position: 'relative', 
        padding: '140px 0 80px', 
        background: 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(244, 114, 182, 0.18), transparent 70%), var(--base-bg)',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Top Eyebrow */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '9999px',
              background: 'rgba(255, 255, 255, 0.9)',
              border: '1px solid rgba(236, 72, 153, 0.3)',
              boxShadow: '0 4px 14px rgba(236, 72, 153, 0.1)',
              fontSize: '13px',
              fontWeight: 700,
              color: '#db2777'
            }}
          >
            <Sparkles size={14} className="text-pink-500" />
            <span>{industry.eyebrow}</span>
          </motion.div>
        </div>

        {/* H1 Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)',
            fontWeight: 850,
            lineHeight: 1.08,
            letterSpacing: '-0.03em',
            textAlign: 'center',
            maxWidth: '960px',
            margin: '0 auto 24px',
            color: '#09090b'
          }}
        >
          {industry.headline}
        </motion.h1>

        {/* Subheadline Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
            lineHeight: 1.6,
            color: '#475569',
            textAlign: 'center',
            maxWidth: '780px',
            margin: '0 auto 36px'
          }}
        >
          {industry.subheadline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap',
            marginBottom: '48px'
          }}
        >
          <button
            onClick={onOpenModal}
            className="btn-primary"
            style={{
              padding: '16px 32px',
              fontSize: '16px',
              fontWeight: 700,
              borderRadius: '9999px',
              boxShadow: '0 10px 25px -5px rgba(236, 72, 153, 0.4)'
            }}
          >
            <span>Start Free</span>
            <ArrowRight size={18} />
          </button>

          <a
            href="#interactive-demo"
            style={{
              padding: '16px 28px',
              fontSize: '15px',
              fontWeight: 700,
              borderRadius: '9999px',
              background: '#ffffff',
              border: '1.5px solid rgba(236, 72, 153, 0.3)',
              color: '#09090b',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 4px 14px rgba(0,0,0,0.04)',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#ec4899';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(236, 72, 153, 0.3)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <Play size={16} className="text-pink-600" />
            <span>Simulate AI Workforce</span>
          </a>
        </motion.div>

        {/* Hero Quick Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '16px',
            maxWidth: '900px',
            margin: '0 auto 56px',
            padding: '18px 24px',
            borderRadius: '16px',
            background: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(236, 72, 153, 0.2)',
            boxShadow: '0 10px 30px -10px rgba(236, 72, 153, 0.1)'
          }}
        >
          {industry.heroStats?.map((stat, idx) => (
            <div key={idx} style={{ textAlign: 'center', padding: '6px 12px' }}>
              <div style={{ fontSize: '24px', fontWeight: 850, color: '#db2777', letterSpacing: '-0.02em' }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '12px', fontWeight: 600, color: '#64748b', marginTop: '2px' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Interactive Mock Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          style={{
            maxWidth: '1060px',
            margin: '0 auto',
            borderRadius: '24px',
            background: '#ffffff',
            border: '1.5px solid rgba(236, 72, 153, 0.25)',
            boxShadow: '0 25px 60px -15px rgba(236, 72, 153, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.8) inset',
            overflow: 'hidden'
          }}
        >
          {/* Dashboard Header Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '16px 24px',
              borderBottom: '1px solid rgba(236, 72, 153, 0.15)',
              background: 'linear-gradient(90deg, #fdf2f8, #faf5ff)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
              <span style={{ fontSize: '13px', fontWeight: 700, color: '#09090b', marginLeft: '8px' }}>
                {industry.heroDashboard?.title || `${industry.name} AI Control Deck`}
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '3px 10px',
                  borderRadius: '9999px',
                  background: 'rgba(16, 185, 129, 0.12)',
                  color: '#059669',
                  fontSize: '11px',
                  fontWeight: 700
                }}
              >
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }} />
                {industry.heroDashboard?.status || 'All AI Agents Online'}
              </span>

              <span style={{ fontSize: '12px', fontWeight: 600, color: '#64748b' }}>
                {industry.heroDashboard?.activeDeal || 'Active Autonomous Telemetry'}
              </span>
            </div>
          </div>

          {/* Dashboard Body Grid */}
          <div style={{ padding: '24px', background: '#faf8f9' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '24px' }}>
              {industry.heroDashboard?.metrics?.map((metric, i) => (
                <div
                  key={i}
                  style={{
                    padding: '16px 20px',
                    borderRadius: '14px',
                    background: '#ffffff',
                    border: '1px solid rgba(236, 72, 153, 0.18)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.02)'
                  }}
                >
                  <div style={{ fontSize: '12px', fontWeight: 600, color: '#64748b' }}>{metric.label}</div>
                  <div style={{ fontSize: '26px', fontWeight: 850, color: '#09090b', marginTop: '4px' }}>{metric.value}</div>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: '#db2777', marginTop: '4px' }}>{metric.change}</div>
                </div>
              ))}
            </div>

            {/* Featured Active AI Human Execution Card */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '20px 24px',
                borderRadius: '16px',
                background: '#ffffff',
                border: '1.5px solid rgba(236, 72, 153, 0.25)',
                flexWrap: 'wrap',
                gap: '16px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div className="blobatar-frame" style={{ width: '60px', height: '60px', flexShrink: 0 }}>
                  <Blobatar name={primaryAgent.blobatarName || 'AlexRealty'} animate="hover" size={56} />
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '16px', fontWeight: 800, color: '#09090b' }}>{primaryAgent.name}</span>
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        padding: '2px 8px',
                        borderRadius: '6px',
                        background: 'rgba(236, 72, 153, 0.12)',
                        color: '#db2777'
                      }}
                    >
                      {primaryAgent.role}
                    </span>
                  </div>
                  <p style={{ fontSize: '13px', color: '#475569', margin: '4px 0 0', maxWidth: '540px' }}>
                    {primaryAgent.purpose}
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <a
                  href="#ai-workforce"
                  style={{
                    padding: '8px 18px',
                    fontSize: '13px',
                    fontWeight: 700,
                    borderRadius: '9999px',
                    background: 'linear-gradient(135deg, #ec4899, #db2777)',
                    color: '#ffffff',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <Bot size={14} />
                  <span>View All {industry.agents?.length || 6} Agents</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
