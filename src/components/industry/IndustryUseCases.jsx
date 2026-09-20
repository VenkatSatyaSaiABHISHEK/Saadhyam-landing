import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, ArrowRight, CheckCircle2, Sparkles, X, ChevronRight } from 'lucide-react';

export default function IndustryUseCases({ industry, onOpenModal }) {
  const useCases = industry.useCases || [];
  const [selectedUseCase, setSelectedUseCase] = useState(null);

  return (
    <section 
      style={{ 
        padding: '100px 0', 
        background: 'var(--base-bg)',
        position: 'relative' 
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 60px' }}>
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
            <Layers size={13} />
            <span>Field-Tested Playbooks</span>
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
            {industry.name} Use Cases
          </h2>

          <p style={{ fontSize: '16px', color: '#475569', lineHeight: 1.65 }}>
            Explore {useCases.length} specific workflows where Saadhyam digital employees autonomously take over repetitive operational friction and drive revenue for your organization.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', 
            gap: '26px' 
          }}
        >
          {useCases.map((uc, idx) => (
            <motion.div
              key={uc.id || idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              style={{
                padding: '28px',
                borderRadius: '22px',
                background: '#ffffff',
                border: '1.5px solid rgba(236, 72, 153, 0.2)',
                boxShadow: '0 8px 24px -6px rgba(236, 72, 153, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(236, 72, 153, 0.45)';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 16px 36px -8px rgba(236, 72, 153, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(236, 72, 153, 0.2)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 24px -6px rgba(236, 72, 153, 0.08)';
              }}
            >
              <div>
                {/* Agent Tag */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <span 
                    style={{ 
                      fontSize: '11px', 
                      fontWeight: 750, 
                      padding: '3px 10px', 
                      borderRadius: '6px', 
                      background: '#fdf2f8', 
                      border: '1px solid rgba(236, 72, 153, 0.3)',
                      color: '#db2777' 
                    }}
                  >
                    {uc.agent}
                  </span>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#94a3b8' }}>
                    #{idx + 1}
                  </span>
                </div>

                <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#09090b', lineHeight: 1.35, marginBottom: '12px' }}>
                  {uc.title}
                </h3>

                {/* Problem snippet */}
                <div style={{ marginBottom: '12px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: '#dc2626', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    The Problem:
                  </span>
                  <p style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.5, margin: '2px 0 0' }}>
                    {uc.problem}
                  </p>
                </div>

                {/* Solution snippet */}
                <div style={{ marginBottom: '18px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: '#059669', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Saadhyam Solution:
                  </span>
                  <p style={{ fontSize: '13.5px', color: '#1e293b', fontWeight: 600, lineHeight: 1.5, margin: '2px 0 0' }}>
                    {uc.solution}
                  </p>
                </div>

                {/* Expected Workflow micro steps */}
                <div style={{ borderTop: '1px solid rgba(236, 72, 153, 0.12)', paddingTop: '14px', marginBottom: '20px' }}>
                  <div style={{ fontSize: '11.5px', fontWeight: 700, color: '#09090b', marginBottom: '8px' }}>
                    Execution Sequence:
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {uc.workflow?.map((step, sIdx) => (
                      <div key={sIdx} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#475569' }}>
                        <ChevronRight size={13} className="text-pink-500 flex-shrink-0" />
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Impact & Action */}
              <div>
                <div 
                  style={{ 
                    padding: '8px 12px', 
                    borderRadius: '8px', 
                    background: '#f8fafc', 
                    border: '1px solid #e2e8f0',
                    fontSize: '12px', 
                    fontWeight: 700, 
                    color: '#0f172a',
                    marginBottom: '14px'
                  }}
                >
                  ⚡ Impact: {uc.impact}
                </div>

                <button
                  onClick={() => setSelectedUseCase(uc)}
                  style={{
                    width: '100%',
                    padding: '10px 16px',
                    borderRadius: '10px',
                    background: '#ffffff',
                    border: '1.5px solid rgba(236, 72, 153, 0.3)',
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
                    e.currentTarget.style.background = '#fdf2f8';
                    e.currentTarget.style.borderColor = '#ec4899';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#ffffff';
                    e.currentTarget.style.borderColor = 'rgba(236, 72, 153, 0.3)';
                  }}
                >
                  <span>See How It Works</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Use Case Deep-Dive Modal */}
      <AnimatePresence>
        {selectedUseCase && (
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
            onClick={() => setSelectedUseCase(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: '100%',
                maxWidth: '620px',
                background: '#ffffff',
                borderRadius: '24px',
                border: '1.5px solid rgba(236, 72, 153, 0.3)',
                boxShadow: '0 25px 60px -15px rgba(0,0,0,0.25)',
                padding: '32px',
                position: 'relative'
              }}
            >
              <button
                onClick={() => setSelectedUseCase(null)}
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

              <span 
                style={{ 
                  display: 'inline-block',
                  fontSize: '11px', 
                  fontWeight: 750, 
                  padding: '3px 10px', 
                  borderRadius: '6px', 
                  background: '#fdf2f8', 
                  border: '1px solid rgba(236, 72, 153, 0.3)',
                  color: '#db2777',
                  marginBottom: '12px'
                }}
              >
                {selectedUseCase.agent}
              </span>

              <h3 style={{ fontSize: '22px', fontWeight: 850, color: '#09090b', margin: '0 0 16px' }}>
                {selectedUseCase.title}
              </h3>

              <div style={{ marginBottom: '16px' }}>
                <div style={{ fontSize: '12px', fontWeight: 800, color: '#dc2626', marginBottom: '4px' }}>INDUSTRY CHALLENGE</div>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                  {selectedUseCase.problem}
                </p>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <div style={{ fontSize: '12px', fontWeight: 800, color: '#059669', marginBottom: '4px' }}>SAADHYAM AUTONOMOUS RESOLUTION</div>
                <p style={{ fontSize: '14.5px', color: '#1e293b', fontWeight: 600, lineHeight: 1.6, margin: 0 }}>
                  {selectedUseCase.solution}
                </p>
              </div>

              <div style={{ borderTop: '1px solid rgba(236, 72, 153, 0.15)', paddingTop: '16px', marginBottom: '24px' }}>
                <div style={{ fontSize: '12px', fontWeight: 800, color: '#09090b', marginBottom: '10px' }}>COMPLETE STEP-BY-STEP WORKFLOW</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {selectedUseCase.workflow?.map((step, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#334155' }}>
                      <CheckCircle2 size={16} className="text-pink-500 flex-shrink-0" />
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div 
                style={{ 
                  padding: '12px 16px', 
                  borderRadius: '12px', 
                  background: 'rgba(236, 72, 153, 0.08)',
                  border: '1px solid rgba(236, 72, 153, 0.2)',
                  fontSize: '13px',
                  fontWeight: 700,
                  color: '#db2777',
                  marginBottom: '24px'
                }}
              >
                Verified Business Impact: {selectedUseCase.impact}
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <button
                  onClick={() => {
                    setSelectedUseCase(null);
                    onOpenModal();
                  }}
                  className="btn-primary"
                  style={{ flex: 1, padding: '12px', borderRadius: '12px', justifyContent: 'center' }}
                >
                  Deploy This Use Case <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
