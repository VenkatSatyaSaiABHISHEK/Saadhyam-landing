import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, RotateCcw, Terminal, CheckCircle, Clock, Zap, Bot, Sparkles } from 'lucide-react';
import { Blobatar } from '@blobatar/react';

export default function IndustryInteractiveDemo({ industry, selectedAgentId }) {
  const demoData = industry.interactiveDemo || {};
  const presets = demoData.presets || [];

  const [activePresetIndex, setActivePresetIndex] = useState(0);
  const [running, setRunning] = useState(false);
  const [displayedLogs, setDisplayedLogs] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);

  // Sync if an agent was selected from Workforce section
  useEffect(() => {
    if (!selectedAgentId) return;
    const matchIdx = presets.findIndex((p) => p.agentId === selectedAgentId);
    if (matchIdx !== -1) {
      setActivePresetIndex(matchIdx);
      startSimulation(matchIdx);
    }
  }, [selectedAgentId]);

  const currentPreset = presets[activePresetIndex] || presets[0] || {
    agentName: 'AI Specialist',
    task: 'Execute industry standard workflow',
    terminalLogs: [
      { time: '09:00:01', text: 'Initializing autonomous task...', status: 'success' },
      { time: '09:00:05', text: '✓ Task execution complete', status: 'done' }
    ],
    summary: 'Autonomous workflow executed successfully.'
  };

  const startSimulation = (presetIdx = activePresetIndex) => {
    const preset = presets[presetIdx] || currentPreset;
    setRunning(true);
    setDisplayedLogs([]);
    setIsCompleted(false);

    const logs = preset.terminalLogs || [];
    logs.forEach((log, index) => {
      setTimeout(() => {
        setDisplayedLogs((prev) => [...prev, log]);
        if (index === logs.length - 1) {
          setRunning(false);
          setIsCompleted(true);
        }
      }, (index + 1) * 750);
    });
  };

  // Run automatically on first mount
  useEffect(() => {
    startSimulation(0);
  }, []);

  return (
    <section 
      id="interactive-demo"
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
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 56px' }}>
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
            <Terminal size={13} />
            <span>Interactive Simulator</span>
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
            {demoData.title || 'Ask Your AI Workforce'}
          </h2>

          <p style={{ fontSize: '16px', color: '#475569', lineHeight: 1.65 }}>
            {demoData.subtitle || `Select an agent and trigger a live autonomous task to witness the Saadhyam execution engine in action.`}
          </p>
        </div>

        {/* Simulator Terminal Container */}
        <div 
          style={{ 
            maxWidth: '960px', 
            margin: '0 auto', 
            borderRadius: '24px', 
            background: '#faf8f9', 
            border: '2px solid rgba(236, 72, 153, 0.3)',
            boxShadow: '0 25px 60px -15px rgba(236, 72, 153, 0.15)',
            overflow: 'hidden'
          }}
        >
          {/* Top Control Bar: Select Agent & Task */}
          <div 
            style={{ 
              padding: '20px 24px', 
              background: '#ffffff', 
              borderBottom: '1.5px solid rgba(236, 72, 153, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '13px', fontWeight: 750, color: '#09090b' }}>Choose Scenario:</span>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {presets.map((preset, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setActivePresetIndex(idx);
                      startSimulation(idx);
                    }}
                    style={{
                      padding: '8px 14px',
                      borderRadius: '10px',
                      fontSize: '12.5px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      border: activePresetIndex === idx ? '1.5px solid #ec4899' : '1px solid #cbd5e1',
                      background: activePresetIndex === idx ? '#fdf2f8' : '#ffffff',
                      color: activePresetIndex === idx ? '#db2777' : '#475569',
                      transition: 'all 0.2s'
                    }}
                  >
                    {preset.agentName.split('(')[0]}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => startSimulation(activePresetIndex)}
              disabled={running}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, #ec4899, #db2777)',
                color: '#ffffff',
                border: 'none',
                fontSize: '13px',
                fontWeight: 700,
                cursor: running ? 'not-allowed' : 'pointer',
                opacity: running ? 0.7 : 1,
                boxShadow: '0 4px 14px rgba(236, 72, 153, 0.3)'
              }}
            >
              {running ? <Clock size={15} className="animate-spin" /> : <RotateCcw size={15} />}
              <span>{running ? 'Executing...' : 'Re-Run Simulation'}</span>
            </button>
          </div>

          {/* Active Task Prompt Bar */}
          <div 
            style={{ 
              padding: '16px 24px', 
              background: 'linear-gradient(90deg, #fdf2f8, #ffffff)', 
              borderBottom: '1px solid rgba(236, 72, 153, 0.15)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}
          >
            <div 
              style={{ 
                width: '32px', 
                height: '32px', 
                borderRadius: '8px', 
                background: '#ffffff', 
                border: '1px solid rgba(236, 72, 153, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#db2777'
              }}
            >
              <Zap size={16} />
            </div>
            <div>
              <div style={{ fontSize: '11px', fontWeight: 800, color: '#db2777', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Instruction Given to {currentPreset.agentName}
              </div>
              <div style={{ fontSize: '14.5px', fontWeight: 750, color: '#09090b', marginTop: '2px' }}>
                "{currentPreset.task}"
              </div>
            </div>
          </div>

          {/* Live Execution Console Window */}
          <div 
            style={{ 
              padding: '24px', 
              background: '#09090b', 
              color: '#f8fafc',
              minHeight: '260px',
              fontFamily: 'Consolas, Monaco, "Courier New", monospace',
              fontSize: '13px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              overflowX: 'auto'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#94a3b8', borderBottom: '1px solid #27272a', paddingBottom: '8px', marginBottom: '4px' }}>
              <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Saadhyam Autonomous Execution Kernel v4.8 — Telemetry Log
              </span>
              <span style={{ fontSize: '11px', color: running ? '#f59e0b' : '#10b981' }}>
                {running ? '● PROCESSING' : '● IDLE / SYNCED'}
              </span>
            </div>

            {displayedLogs.map((log, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  color: log.status === 'warning' ? '#fbbf24' : log.status === 'done' ? '#34d399' : '#f1f5f9'
                }}
              >
                <span style={{ color: '#64748b', fontSize: '12px', flexShrink: 0 }}>[{log.time}]</span>
                <span style={{ lineHeight: 1.5 }}>{log.text}</span>
              </motion.div>
            ))}

            {running && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#db2777', marginTop: '8px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ec4899' }} className="animate-ping" />
                <span>Executing API handoffs & multi-channel verification...</span>
              </div>
            )}
          </div>

          {/* Bottom Execution Summary Bar */}
          {isCompleted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              style={{
                padding: '18px 24px',
                background: '#ffffff',
                borderTop: '1.5px solid rgba(236, 72, 153, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle size={20} className="text-emerald-500 flex-shrink-0" />
                <span style={{ fontSize: '14px', fontWeight: 700, color: '#09090b' }}>
                  Execution Result: <span style={{ color: '#475569', fontWeight: 500 }}>{currentPreset.summary}</span>
                </span>
              </div>

              <div 
                style={{ 
                  fontSize: '12px', 
                  fontWeight: 700, 
                  color: '#db2777', 
                  padding: '4px 12px', 
                  borderRadius: '9999px', 
                  background: 'rgba(236, 72, 153, 0.1)' 
                }}
              >
                Execution Time: 2.8 sec
              </div>
            </motion.div>
          )}
        </div>

      </div>
    </section>
  );
}
