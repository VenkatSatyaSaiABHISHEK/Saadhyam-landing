import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mic, Zap } from 'lucide-react';
import { Mascot } from 'page-mascot';

/**
 * URL for Sara's page.
 * Defaults to the production URL: https://sara.saadhyam.com/
 */
export const SARA_DEFAULT_URL = "https://sara.saadhyam.com/";

export default function SarahAnnouncementCard({
  url = SARA_DEFAULT_URL,
  onOpenModal,
  className = "",
  style = {},
}) {
  const handleNavigate = (e) => {
    if (e) e.preventDefault();
    if (url) {
      if (url.startsWith('http://') || url.startsWith('https://')) {
        window.open(url, '_blank', 'noopener,noreferrer');
      } else if (url.startsWith('#')) {
        const el = document.querySelector(url);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = url;
      }
    } else if (onOpenModal) {
      onOpenModal();
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      aria-label="Sara is Live Announcement"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '960px',
        margin: '0 auto 28px auto',
        padding: 'clamp(20px, 3vw, 32px) clamp(22px, 3.5vw, 42px)',
        borderRadius: '26px',
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(250, 248, 255, 0.95) 55%, rgba(255, 250, 252, 0.98) 100%)',
        border: '1px solid rgba(226, 232, 240, 0.85)',
        boxShadow:
          '0 15px 35px -12px rgba(124, 58, 237, 0.05), 0 3px 12px -2px rgba(0, 0, 0, 0.02), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
        overflow: 'hidden',
        textAlign: 'left',
        ...style,
      }}
      className={`sara-announcement-hero ${className}`}
    >
      {/* Subtle Ambient Lavender & Peach Gradients around edges */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          right: '-5%',
          width: '320px',
          height: '320px',
          background: 'radial-gradient(circle, rgba(192, 132, 252, 0.12) 0%, rgba(236, 72, 153, 0.05) 45%, transparent 70%)',
          filter: 'blur(45px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-20%',
          left: '-5%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(254, 215, 215, 0.16) 0%, rgba(243, 232, 255, 0.1) 45%, transparent 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          alignItems: 'center',
          gap: 'clamp(20px, 3vw, 36px)',
        }}
      >
        {/* LEFT SIDE: ANNOUNCEMENT COPY & ACTIONS */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          {/* Announcement Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '4px 12px',
              borderRadius: '9999px',
              background: 'rgba(147, 51, 234, 0.08)',
              border: '1px solid rgba(147, 51, 234, 0.16)',
              color: '#7e22ce',
              fontSize: '10.5px',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}
          >
            <span>NEW ANNOUNCEMENT</span>
          </div>

          {/* Headline */}
          <h1
            style={{
              margin: '0 0 10px 0',
              fontSize: 'clamp(26px, 3vw, 36px)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              color: '#09090b',
            }}
          >
            Finally,{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #7c3aed 0%, #9333ea 50%, #c084fc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block',
              }}
            >
              Sara is Live.
            </span>
          </h1>

          {/* Short Description */}
          <p
            style={{
              margin: '0 0 18px 0',
              fontSize: '14px',
              lineHeight: 1.55,
              color: '#475569',
              maxWidth: '480px',
              fontWeight: 400,
            }}
          >
            Create your own AI agent. Sara is waiting for you — fully conversational, voice-native, and equipped to qualify inbound enterprise leads, answer queries, and execute business actions 24/7.
          </p>

          {/* Exact Feature Pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              marginBottom: '22px',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '5px 13px',
                borderRadius: '9999px',
                background: '#ffffff',
                border: '1px solid rgba(226, 232, 240, 0.95)',
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.02)',
                color: '#1e293b',
                fontSize: '12px',
                fontWeight: 500,
              }}
            >
              <Mic size={13} color="#7c3aed" />
              <span>Real-Time Voice AI</span>
            </div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '5px 13px',
                borderRadius: '9999px',
                background: '#ffffff',
                border: '1px solid rgba(226, 232, 240, 0.95)',
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.02)',
                color: '#1e293b',
                fontSize: '12px',
                fontWeight: 500,
              }}
            >
              <Zap size={13} color="#7c3aed" />
              <span>Instant 1-Click Launch</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleNavigate}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
                padding: '11px 22px',
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, #7c3aed 0%, #9333ea 50%, #a855f7 100%)',
                color: '#ffffff',
                fontSize: '14px',
                fontWeight: 600,
                border: 'none',
                boxShadow: '0 6px 16px -3px rgba(124, 58, 237, 0.35)',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
            >
              <span>Create Your AI Agent</span>
              <ArrowUpRight size={15} color="#ffffff" />
            </motion.button>

            {onOpenModal && (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenModal}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '11px 20px',
                  borderRadius: '9999px',
                  background: '#ffffff',
                  color: '#0f172a',
                  fontSize: '14px',
                  fontWeight: 600,
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.03)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                <span>Quick Preview</span>
              </motion.button>
            )}
          </div>
        </div>

        {/* RIGHT SIDE: SARA MASCOT, FREE-STANDING, NO CARD OR BOX */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          {/* Subtle Ambient Radial Gradient behind Mascot - Blends Naturally */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '310px',
              height: '310px',
              background: 'radial-gradient(circle, rgba(168, 85, 247, 0.16) 0%, rgba(236, 72, 153, 0.07) 45%, transparent 70%)',
              filter: 'blur(40px)',
              pointerEvents: 'none',
              zIndex: 0,
            }}
          />

          {/* Floating Free-Standing Sara (Preserves cursor-follow and boop reactions) */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
            style={{
              position: 'relative',
              zIndex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Mascot
              directions="/mascots/glasses-directions.webp"
              reactions="/mascots/glasses-reactions.webp"
              size={245}
              label="Sara AI Agent"
            />

            {/* Live Indicator: Subtle Glowing Pulse Green Dot with Sara · Online */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
                marginTop: '10px',
                padding: '4px 13px',
                borderRadius: '9999px',
                background: 'rgba(255, 255, 255, 0.85)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(226, 232, 240, 0.85)',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.02)',
              }}
            >
              <span
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  backgroundColor: '#10b981',
                  boxShadow: '0 0 8px #10b981',
                  display: 'inline-block',
                  animation: 'sara-dot-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                }}
              />
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  color: '#0f172a',
                  letterSpacing: '-0.01em',
                }}
              >
                Sara · Online
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes sara-dot-pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.6);
          }
          50% {
            transform: scale(1.1);
            opacity: 0.85;
            box-shadow: 0 0 0 5px rgba(16, 185, 129, 0);
          }
        }
      `}</style>
    </motion.section>
  );
}
