import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Check, ArrowRight, Sparkles, X } from 'lucide-react';
import { Blobatar } from '@blobatar/react';

export default function IndustryWorkforce({ industry, onOpenModal, onSelectAgentForDemo }) {
  const agents = industry.agents || [];
  const [activeModalAgent, setActiveModalAgent] = useState(null);

  return (
    <section 
      id="ai-workforce"
      style={{ 
        padding: '100px 0', 
        background: 'var(--base-bg)',
        position: 'relative' 
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px' }}>
          <div 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 14px',
              borderRadius: '9999px',
              background: 'rgba(236, 72, 153, 0.1)',
              border: '1px solid rgba(236, 72, 153, 0.25)',
              fontSize: '12px',
              fontWeight: 700,
              color: '#db2777',
              marginBottom: '14px'
            }}
          >
            <Sparkles size={13} />
            <span>Digital Employees</span>
          </div>

          <h2 
            style={{ 
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', 
              fontWeight: 850, 
              color: '#09090b', 
              lineHeight: 1.12,
              letterSpacing: '-0.02em',
              marginBottom: '16px'
            }}
          >
            Meet Your AI Workforce
          </h2>

          <p style={{ fontSize: '16px', color: '#475569', lineHeight: 1.65 }}>
            Purpose-built digital employees engineered specifically for {industry.name}. Each AI Human has dedicated operational workflows, industry tools, and 24/7 autonomous execution.
          </p>
        </div>

        {/* Agents Grid */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '28px' 
          }}
        >
          {agents.map((agent, idx) => (
            <motion.div
              key={agent.id || idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              style={{
                borderRadius: '24px',
                background: '#ffffff',
                border: '1.5px solid rgba(236, 72, 153, 0.2)',
                boxShadow: '0 10px 30px -10px rgba(236, 72, 153, 0.12)',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(236, 72, 153, 0.5)';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(236, 72, 153, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(236, 72, 153, 0.2)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(236, 72, 153, 0.12)';
              }}
            >
              <div>
                {/* Agent Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                  <div className="blobatar-frame" style={{ width: '64px', height: '64px', flexShrink: 0 }}>
                    <Blobatar name={agent.blobatarName || agent.name} animate="hover" size={60} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '18px', fontWeight: 850, color: '#09090b', margin: 0 }}>
                      {agent.name}
                    </h3>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#db2777', marginTop: '2px' }}>
                      {agent.role}
                    </div>
                    <span 
                      style={{
                        display: 'inline-block',
                        fontSize: '11px',
                        fontWeight: 600,
                        color: '#64748b',
                        background: '#f1f5f9',
                        padding: '2px 8px',
                        borderRadius: '6px',
                        marginTop: '4px'
                      }}
                    >
                      {agent.badge}
                    </span>
                  </div>
                </div>

                {/* Purpose & What It Does */}
                <p style={{ fontSize: '14px', color: '#1e293b', fontWeight: 600, lineHeight: 1.5, marginBottom: '8px' }}>
                  {agent.purpose}
                </p>
                <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.6, marginBottom: '20px' }}>
                  {agent.whatItDoes}
                </p>

                {/* Example Tasks List */}
                <div style={{ borderTop: '1px solid rgba(236, 72, 153, 0.12)', paddingTop: '16px', marginBottom: '24px' }}>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: '#09090b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>
                    Example Autonomous Tasks:
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {agent.exampleTasks?.map((task, tIdx) => (
                      <li key={tIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '12.5px', color: '#334155', lineHeight: 1.4 }}>
                        <Check size={14} className="text-pink-500" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  onClick={() => setActiveModalAgent(agent)}
                  style={{
                    flex: 1,
                    padding: '11px 16px',
                    borderRadius: '12px',
                    background: '#fdf2f8',
                    border: '1px solid rgba(236, 72, 153, 0.3)',
                    color: '#db2777',
                    fontSize: '13px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#ec4899';
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#fdf2f8';
                    e.currentTarget.style.color = '#db2777';
                  }}
                >
                  <span>Explore Agent</span>
                  <ArrowRight size={14} />
                </button>

                <button
                  onClick={() => {
                    if (onSelectAgentForDemo) {
                      onSelectAgentForDemo(agent.id);
                      const el = document.getElementById('interactive-demo');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      onOpenModal();
                    }
                  }}
                  style={{
                    padding: '11px 16px',
                    borderRadius: '12px',
                    background: '#ffffff',
                    border: '1px solid #cbd5e1',
                    color: '#09090b',
                    fontSize: '13px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                  title="Simulate this agent in live demo"
                >
                  Simulate
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Agent Deep-Dive Modal */}
      <AnimatePresence>
        {activeModalAgent && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
              background: 'rgba(9, 9, 11, 0.65)',
              backdropFilter: 'blur(8px)'
            }}
            onClick={() => setActiveModalAgent(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: '100%',
                maxWidth: '600px',
                background: '#ffffff',
                borderRadius: '24px',
                border: '1.5px solid rgba(236, 72, 153, 0.3)',
                boxShadow: '0 25px 60px -15px rgba(0,0,0,0.25)',
                padding: '32px',
                position: 'relative'
              }}
            >
              <button
                onClick={() => setActiveModalAgent(null)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'none',
                  border: 'none',
                  color: '#64748b',
                  cursor: 'pointer'
                }}
              >
                <X size={20} />
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '24px' }}>
                <div className="blobatar-frame" style={{ width: '80px', height: '80px', flexShrink: 0 }}>
                  <Blobatar name={activeModalAgent.blobatarName} animate="hover" size={76} />
                </div>
                <div>
                  <h3 style={{ fontSize: '22px', fontWeight: 850, color: '#09090b', margin: 0 }}>
                    {activeModalAgent.name}
                  </h3>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: '#db2777', marginTop: '3px' }}>
                    {activeModalAgent.role}
                  </div>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: '#64748b', marginTop: '4px' }}>
                    Domain: {industry.name} | Status: Autonomous 24/7
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <div style={{ fontSize: '13px', fontWeight: 750, color: '#09090b', marginBottom: '6px' }}>Core Mission & Purpose</div>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                  {activeModalAgent.purpose}
                </p>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <div style={{ fontSize: '13px', fontWeight: 750, color: '#09090b', marginBottom: '6px' }}>Operational Responsibilities</div>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                  {activeModalAgent.whatItDoes}
                </p>
              </div>

              <div style={{ borderTop: '1px solid rgba(236, 72, 153, 0.15)', paddingTop: '18px', marginBottom: '28px' }}>
                <div style={{ fontSize: '13px', fontWeight: 750, color: '#09090b', marginBottom: '10px' }}>Autonomous Task Playbooks</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {activeModalAgent.exampleTasks?.map((task, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#334155' }}>
                      <Check size={16} className="text-pink-500" />
                      <span>{task}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <button
                  onClick={() => {
                    setActiveModalAgent(null);
                    onOpenModal();
                  }}
                  className="btn-primary"
                  style={{ flex: 1, padding: '12px', borderRadius: '12px', justifyContent: 'center' }}
                >
                  Deploy {activeModalAgent.name} <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
