import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mic, MicOff, PhoneCall, PhoneOff, Volume2, Sparkles, CheckCircle2, 
  Calendar, Clock, Check, ArrowRight, Play, Pause, Zap 
} from 'lucide-react';
import { Blobatar } from '@blobatar/react';

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

          <h2 style={{ fontSize: '46px', lineHeight: 1.15, marginBottom: '18px', color: '#09090b' }}>
            Give your AI Humans a{' '}
            <span className="text-gradient">voice.</span>
          </h2>

          <p style={{ fontSize: '18px', color: '#475569', lineHeight: 1.6, marginBottom: '24px' }}>
            AI Humans can communicate through natural voice, enabling businesses to deploy digital employees capable of handling real spoken conversations with zero robotic awkwardness.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
            {useCases.map((uc) => (
              <span
                key={uc}
                style={{
                  background: '#ffffff',
                  border: '1px solid rgba(236, 72, 153, 0.2)',
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  fontSize: '12px',
                  color: '#09090b',
                  fontWeight: 600,
                  boxShadow: '0 2px 8px rgba(236, 72, 153, 0.08)'
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
            background: '#ffffff',
            border: '1.5px solid rgba(236, 72, 153, 0.22)',
            overflow: 'hidden',
            boxShadow: '0 25px 60px -15px rgba(236, 72, 153, 0.15)'
          }}
        >
          {/* Top Call Status Bar */}
          <div
            style={{
              background: 'linear-gradient(135deg, #fdf2f8, #fce7f3)',
              padding: '18px 24px',
              borderBottom: '1px solid rgba(236, 72, 153, 0.18)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ position: 'relative' }}>
                <div className="blobatar-frame" style={{ width: '48px', height: '48px', borderRadius: '14px' }}>
                  <Blobatar name="SophiaVoice" animate="hover" size={42} />
                </div>
                <div style={{
                  position: 'absolute',
                  bottom: -2,
                  right: -2,
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: isCalling ? '#10b981' : '#a1a1aa',
                  border: '2px solid #ffffff'
                }} />
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '16px', fontWeight: 800, color: '#09090b' }}>Sophia</span>
                  <span style={{ fontSize: '11px', color: '#db2777', background: 'rgba(236, 72, 153, 0.12)', padding: '2px 8px', borderRadius: '6px', fontWeight: 700 }}>
                    Senior Voice Qualifier
                  </span>
                </div>
                <div style={{ fontSize: '12px', color: '#64748b', marginTop: '2px' }}>
                  Latency: 280ms • Full Duplex Audio • Context-aware
                </div>
              </div>
            </div>

            {/* Right: Call state */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '11px', color: '#64748b', textTransform: 'uppercase', fontFamily: 'monospace', fontWeight: 600 }}>
                  Call Duration
                </div>
                <div style={{ fontSize: '15px', fontWeight: 800, color: '#09090b', fontFamily: 'monospace' }}>
                  {formatDuration(callDuration)}
                </div>
              </div>

              <button
                onClick={() => setIsCalling(!isCalling)}
                style={{
                  background: isCalling ? 'linear-gradient(135deg, #ef4444, #dc2626)' : 'linear-gradient(135deg, #ec4899, #a855f7)',
                  color: '#ffffff',
                  border: 'none',
                  padding: '10px 22px',
                  borderRadius: '9999px',
                  fontSize: '13px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: isCalling ? '0 4px 15px rgba(239, 68, 68, 0.4)' : '0 4px 15px rgba(236, 72, 153, 0.4)'
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
          <div style={{ padding: '32px', background: '#ffffff' }}>
            {/* Waveform Visualizer */}
            <div
              style={{
                background: '#faf8f9',
                border: '1px solid rgba(236, 72, 153, 0.16)',
                borderRadius: '16px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '28px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', height: '42px', marginBottom: '14px' }}>
                {Array.from({ length: 32 }).map((_, i) => (
                  <div
                    key={i}
                    className="wave-bar"
                    style={{
                      height: isCalling ? `${Math.sin(i * 0.4) * 20 + 20}px` : '6px',
                      opacity: isCalling ? 1 : 0.25,
                      animationDuration: `${0.8 + (i % 5) * 0.2}s`
                    }}
                  />
                ))}
              </div>

              <div style={{ fontSize: '13px', color: isCalling ? '#059669' : '#64748b', fontFamily: 'monospace', fontWeight: 600 }}>
                {isCalling ? '● LIVE VOICE TRANSMISSION // STEREO PCM 48kHz' : 'Click "Talk to Sophia" above to simulate a live voice conversation'}
              </div>
            </div>

            {/* Conversation Transcript Stream */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontSize: '11px', color: '#db2777', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 800, marginBottom: '12px' }}>
                Real-Time Voice Transcript
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {transcriptScript.slice(0, isCalling ? activeLineIndex + 1 : 3).map((line, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '12px 16px',
                      borderRadius: '12px',
                      background: line.speaker === 'AI' ? '#fdf2f8' : '#f8fafc',
                      border: line.speaker === 'AI' ? '1px solid rgba(236, 72, 153, 0.22)' : '1px solid rgba(0, 0, 0, 0.08)',
                      display: 'flex',
                      gap: '12px',
                      alignItems: 'flex-start'
                    }}
                  >
                    <span style={{
                      fontSize: '11px',
                      fontWeight: 800,
                      color: line.speaker === 'AI' ? '#db2777' : '#2563eb',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      background: line.speaker === 'AI' ? 'rgba(236, 72, 153, 0.1)' : 'rgba(37, 99, 235, 0.1)',
                      fontFamily: 'monospace',
                      flexShrink: 0
                    }}>
                      {line.speaker}
                    </span>
                    <span style={{ fontSize: '14px', color: '#09090b', lineHeight: 1.5, fontWeight: 500 }}>
                      {line.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions Performed & Outcome */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
              <div style={{ background: '#faf8f9', padding: '18px', borderRadius: '12px', border: '1px solid rgba(236, 72, 153, 0.16)' }}>
                <div style={{ fontSize: '11px', color: '#db2777', fontWeight: 800, textTransform: 'uppercase', marginBottom: '10px', letterSpacing: '0.06em' }}>
                  Actions Performed in Call
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: '#09090b', fontWeight: 500 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Check size={15} color="#10b981" />
                    <span>Matched ICP Criteria: Enterprise B2B SaaS</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Check size={15} color="#10b981" />
                    <span>Dispatched Google Calendar Invite (Thu 2 PM)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Check size={15} color="#10b981" />
                    <span>Logged recording & transcript to Salesforce CRM</span>
                  </div>
                </div>
              </div>

              <div style={{ background: 'rgba(16, 185, 129, 0.08)', padding: '18px', borderRadius: '12px', border: '1px solid rgba(16, 185, 129, 0.25)' }}>
                <div style={{ fontSize: '11px', color: '#065f46', fontWeight: 800, textTransform: 'uppercase', marginBottom: '10px', letterSpacing: '0.06em' }}>
                  Call Outcome Summary
                </div>
                <div style={{ fontSize: '13px', color: '#065f46', lineHeight: 1.6, fontWeight: 500 }}>
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
