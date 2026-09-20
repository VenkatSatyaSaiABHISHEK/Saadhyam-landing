import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, ArrowDown, ArrowRight, CheckCircle2, Zap, Layers, Sparkles } from 'lucide-react';

export default function IndustryWorkflow({ industry }) {
  const steps = industry.workflow || [];
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying || steps.length === 0) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [isPlaying, steps.length]);

  return (
    <section 
      id="workflow"
      style={{ 
        padding: '100px 0', 
        background: '#ffffff',
        borderTop: '1px solid rgba(236, 72, 153, 0.12)',
        borderBottom: '1px solid rgba(236, 72, 153, 0.12)',
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
            <Zap size={13} />
            <span>End-to-End Orchestration</span>
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
            How Saadhyam Executes {industry.name} Work
          </h2>

          <p style={{ fontSize: '16px', color: '#475569', lineHeight: 1.65 }}>
            Saadhyam doesn’t just answer isolated questions — it takes your business processes through an unbroken, multi-agent chain from initial trigger to executive dashboard.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '20px' }}>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 18px',
                borderRadius: '9999px',
                background: isPlaying ? 'rgba(236, 72, 153, 0.12)' : '#f1f5f9',
                border: '1px solid rgba(236, 72, 153, 0.3)',
                color: '#db2777',
                fontSize: '13px',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              {isPlaying ? <Pause size={14} /> : <Play size={14} />}
              <span>{isPlaying ? 'Auto-Advancing Pipeline' : 'Resume Pipeline'}</span>
            </button>
          </div>
        </div>

        {/* Interactive Step Navigator Bar */}
        <div 
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '8px', 
            flexWrap: 'wrap', 
            marginBottom: '40px' 
          }}
        >
          {steps.map((step, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveStep(idx);
                setIsPlaying(false);
              }}
              style={{
                padding: '8px 16px',
                borderRadius: '9999px',
                fontSize: '13px',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s',
                border: activeStep === idx ? '1.5px solid #ec4899' : '1px solid rgba(236, 72, 153, 0.2)',
                background: activeStep === idx ? 'linear-gradient(135deg, #ec4899, #db2777)' : '#ffffff',
                color: activeStep === idx ? '#ffffff' : '#475569',
                boxShadow: activeStep === idx ? '0 4px 14px rgba(236, 72, 153, 0.3)' : 'none'
              }}
            >
              Step {step.step}: {step.title}
            </button>
          ))}
        </div>

        {/* Active Step Showcase Card */}
        {steps[activeStep] && (
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              maxWidth: '920px',
              margin: '0 auto 60px',
              padding: '36px',
              borderRadius: '24px',
              background: '#faf8f9',
              border: '2px solid rgba(236, 72, 153, 0.35)',
              boxShadow: '0 20px 50px -15px rgba(236, 72, 153, 0.15)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div 
                  style={{ 
                    width: '42px', 
                    height: '42px', 
                    borderRadius: '12px', 
                    background: 'linear-gradient(135deg, #ec4899, #db2777)', 
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 850,
                    fontSize: '18px'
                  }}
                >
                  {steps[activeStep].step}
                </div>
                <div>
                  <h3 style={{ fontSize: '22px', fontWeight: 850, color: '#09090b', margin: 0 }}>
                    {steps[activeStep].title}
                  </h3>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#db2777', marginTop: '2px' }}>
                    Assigned Agent: {steps[activeStep].agent}
                  </div>
                </div>
              </div>

              <div 
                style={{ 
                  padding: '6px 14px', 
                  borderRadius: '9999px', 
                  background: 'rgba(16, 185, 129, 0.1)', 
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  color: '#059669',
                  fontSize: '12px',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <CheckCircle2 size={14} />
                <span>Autonomous Execution Node</span>
              </div>
            </div>

            <p style={{ fontSize: '16px', color: '#334155', lineHeight: 1.6, marginBottom: '24px' }}>
              {steps[activeStep].description}
            </p>

            <div 
              style={{ 
                padding: '16px 20px', 
                borderRadius: '14px', 
                background: '#ffffff', 
                border: '1px solid rgba(236, 72, 153, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Zap size={16} className="text-pink-600 flex-shrink-0" />
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#09090b' }}>Verified Operational Output:</span>
              </div>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#db2777' }}>
                {steps[activeStep].output}
              </div>
            </div>
          </motion.div>
        )}

        {/* Step Progression Timeline Nodes */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
            gap: '16px' 
          }}
        >
          {steps.map((step, idx) => (
            <div
              key={idx}
              onClick={() => {
                setActiveStep(idx);
                setIsPlaying(false);
              }}
              style={{
                padding: '18px 20px',
                borderRadius: '16px',
                background: activeStep === idx ? '#fdf2f8' : '#faf8f9',
                border: activeStep === idx ? '1.5px solid #ec4899' : '1px solid rgba(236, 72, 153, 0.15)',
                cursor: 'pointer',
                transition: 'all 0.2s',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#db2777' }}>PHASE {step.step}</span>
                {activeStep === idx && (
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ec4899' }} />
                )}
              </div>
              <div style={{ fontSize: '14px', fontWeight: 800, color: '#09090b' }}>
                {step.title}
              </div>
              <div style={{ fontSize: '12px', color: '#64748b' }}>
                {step.agent.split('(')[0]}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
