import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mic, MicOff, PhoneCall, PhoneOff, Volume2, Sparkles, CheckCircle2, 
  Calendar, Clock, Check, ArrowRight, Play, Pause, Zap 
} from 'lucide-react';

const transcriptScript = [
  { speaker: 'AI', text: "Hello! This is Sophia from Saadhyam. Am I speaking with Alex regarding the AI workforce rollout for your sales team?", time: '0:03' },
  { speaker: 'Prospect', text: "Yes, hi Sophia! We’re evaluating whether AI Humans can handle our high volume inbound lead qualification.", time: '0:09' },
  { speaker: 'AI', text: "Absolutely. I can qualify inbound prospects using your ICP criteria, answer technical questions, and book calendar meetings with your account executives in real time.", time: '0:18' },
  { speaker: 'Prospect', text: "That sounds ideal. Can we set up a team demonstration this Thursday at 2 PM?", time: '0:24' },
  { speaker: 'AI', text: "Done! I've reserved Thursday at 2 PM EST and dispatched calendar invites with prep notes to your team.", time: '0:31' }
];

export default function VoiceAIHuman({ onOpenModal }) {
  const [isCalling, setIsCalling] = useState(false);
  const [callDuration, setCallDuration] = useState(0);
  const [activeLineIndex, setActiveLineIndex] = useState(0);

  useEffect(() => {
    let interval = null;
    if (isCalling) {
      interval = setInterval(() => {
        setCallDuration((prev) => prev + 1);
      }, 1000);
    } else {
      setCallDuration(0);
      setActiveLineIndex(0);
    }
    return () => clearInterval(interval);
  }, [isCalling]);

  useEffect(() => {
    if (!isCalling) return;
    if (callDuration > 2 && activeLineIndex === 0) setActiveLineIndex(1);
    if (callDuration > 7 && activeLineIndex === 1) setActiveLineIndex(2);
    if (callDuration > 14 && activeLineIndex === 2) setActiveLineIndex(3);
    if (callDuration > 20 && activeLineIndex === 3) setActiveLineIndex(4);
  }, [callDuration, isCalling, activeLineIndex]);

  const formatDuration = (sec) => {
    const mins = Math.floor(sec / 60);
    const remaining = sec % 60;
    return `${mins}:${remaining < 10 ? '0' : ''}${remaining}`;
  };

  const useCases = [
    'Enterprise Sales Calls',
    'Customer Support Queues',
    'Lead Qualification (BANT)',
    'Appointment Scheduling',
    'Post-Demo Follow-ups',
    'General Business Inquiries'
  ];

  return (
    <section id="voice" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 56px' }}>
          <div className="badge-tag" style={{ marginBottom: '16px' }}>
            <Mic size={13} />
            <span>NATURAL CONVERSATIONAL VOICE</span>
          </div>

          <h2 style={{ fontSize: '46px', lineHeight: 1.15, marginBottom: '18px', color: '#ffffff' }}>
            Give your AI Humans a{' '}
            <span className="text-gradient">voice.</span>
          </h2>

          <p style={{ fontSize: '18px', color: '#a1a1aa', lineHeight: 1.6, marginBottom: '24px' }}>
            AI Humans can communicate through natural voice, enabling businesses to deploy digital employees capable of handling real spoken conversations with zero robotic awkwardness.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
            {useCases.map((uc) => (
              <span
                key={uc}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  fontSize: '12px',
                  color: '#d4d4d8',
                  fontWeight: 500
                }}
              >
                ✦ {uc}
              </span>
            ))}
          </div>
        </div>

        {/* Realistic Voice Agent Interface */}
        <div
          className="cyber-card"
          style={{
            maxWidth: '960px',
            margin: '0 auto',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            overflow: 'hidden',
            boxShadow: '0 30px 80px -20px rgba(0, 0, 0, 0.8)'
          }}
        >
          {/* Top Call Status Bar */}
          <div
            style={{
              background: 'rgba(10, 10, 16, 0.95)',
              padding: '16px 24px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ position: 'relative' }}>
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80"
                  alt="Sophia Voice AI"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    objectFit: 'cover',
                    border: '1.5px solid #a855f7'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: -2,
                  right: -2,
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: isCalling ? '#10b981' : '#71717a',
                  border: '2px solid #050508'
                }} />
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '15px', fontWeight: 700, color: '#ffffff' }}>Sophia</span>
                  <span style={{ fontSize: '11px', color: '#c084fc', background: 'rgba(168,85,247,0.15)', padding: '2px 6px', borderRadius: '4px' }}>
                    Senior Voice Qualifier
                  </span>
                </div>
                <div style={{ fontSize: '12px', color: '#a1a1aa' }}>
                  Latency: 280ms • Full Duplex Audio • Context-aware
                </div>
              </div>
            </div>

            {/* Right: Call state */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '11px', color: '#71717a', textTransform: 'uppercase', fontFamily: 'monospace' }}>
                  Call Duration
                </div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#ffffff', fontFamily: 'monospace' }}>
                  {formatDuration(callDuration)}
                </div>
              </div>

              <button
                onClick={() => setIsCalling(!isCalling)}
                style={{
                  background: isCalling ? '#ef4444' : 'linear-gradient(135deg, #10b981, #059669)',
                  color: '#ffffff',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '8px',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: isCalling ? '0 0 20px rgba(239, 68, 68, 0.4)' : '0 0 20px rgba(16, 185, 129, 0.4)'
                }}
              >
                {isCalling ? (
                  <>
                    <PhoneOff size={16} /> End Demo Call
                  </>
                ) : (
                  <>
                    <PhoneCall size={16} /> Talk to Sophia
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Voice Interface Inner Body */}
          <div style={{ padding: '32px', background: 'rgba(5, 5, 8, 0.95)' }}>
            {/* Waveform Visualizer */}
            <div
              style={{
                background: 'rgba(0, 0, 0, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '16px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '28px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', height: '40px', marginBottom: '14px' }}>
                {Array.from({ length: 32 }).map((_, i) => (
                  <div
                    key={i}
                    className="wave-bar"
                    style={{
                      height: isCalling ? `${Math.sin(i * 0.4) * 20 + 20}px` : '4px',
                      opacity: isCalling ? 0.9 : 0.2,
                      animationDuration: `${0.8 + (i % 5) * 0.2}s`
                    }}
                  />
                ))}
              </div>

              <div style={{ fontSize: '13px', color: isCalling ? '#34d399' : '#71717a', fontFamily: 'monospace' }}>
                {isCalling ? '● LIVE VOICE TRANSMISSION // STEREO PCM 48kHz' : 'Click "Talk to Sophia" above to simulate a live voice conversation'}
              </div>
            </div>

            {/* Conversation Transcript Stream */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontSize: '11px', color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700, marginBottom: '12px' }}>
                Real-Time Voice Transcript
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {transcriptScript.slice(0, isCalling ? activeLineIndex + 1 : 3).map((line, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '12px 16px',
                      borderRadius: '12px',
                      background: line.speaker === 'AI' ? 'rgba(168, 85, 247, 0.08)' : 'rgba(255, 255, 255, 0.03)',
                      border: line.speaker === 'AI' ? '1px solid rgba(168, 85, 247, 0.2)' : '1px solid rgba(255, 255, 255, 0.06)',
                      display: 'flex',
                      gap: '12px',
                      alignItems: 'flex-start'
                    }}
                  >
                    <span style={{
                      fontSize: '11px',
                      fontWeight: 800,
                      color: line.speaker === 'AI' ? '#c084fc' : '#60a5fa',
                      padding: '2px 6px',
                      borderRadius: '4px',
                      background: 'rgba(255,255,255,0.06)',
                      fontFamily: 'monospace',
                      flexShrink: 0
                    }}>
                      {line.speaker}
                    </span>
                    <span style={{ fontSize: '14px', color: '#e4e4e7', lineHeight: 1.5 }}>
                      {line.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions Performed & Outcome */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
              <div style={{ background: 'rgba(255,255,255,0.02)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ fontSize: '11px', color: '#a855f7', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>
                  Actions Performed in Call
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '13px', color: '#d4d4d8' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Check size={14} color="#10b981" />
                    <span>Matched ICP Criteria: Enterprise B2B SaaS</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Check size={14} color="#10b981" />
                    <span>Dispatched Google Calendar Invite (Thu 2 PM)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Check size={14} color="#10b981" />
                    <span>Logged recording & transcript to Salesforce CRM</span>
                  </div>
                </div>
              </div>

              <div style={{ background: 'rgba(16, 185, 129, 0.05)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                <div style={{ fontSize: '11px', color: '#34d399', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>
                  Call Outcome Summary
                </div>
                <div style={{ fontSize: '13px', color: '#e4e4e7', lineHeight: 1.5 }}>
                  <strong>Status:</strong> Qualified Enterprise Opportunity<br />
                  <strong>Next Step:</strong> AE demo confirmed with team<br />
                  <strong>Sentiment:</strong> Highly Enthusiastic (+0.92)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
