import React from 'react';
import { Shield, Sparkles, Heart } from 'lucide-react';

const Logo = ({ width = '30px', height = '30px' }) => (
  <div className="logo-container glow-bg" style={{ width, height }}>
    <img 
      src="https://i.ibb.co/rRhY66tN/Whats-App-Image-2026-05-11-at-8-22-35-PM-removebg-preview.png" 
      alt="Saadhyam Logo" 
      className="logo-img"
    />
  </div>
);

export default function Footer({ onNavigate }) {
  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        background: 'rgba(5, 5, 8, 0.98)',
        padding: '70px 0 36px'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '40px',
            marginBottom: '50px'
          }}
        >
          {/* Col 1: Brand */}
          <div style={{ maxWidth: '320px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <Logo />
              <span style={{ fontSize: '20px', fontWeight: 800, color: '#ffffff' }}>Saadhyam</span>
            </div>
            <p style={{ fontSize: '14px', color: '#a1a1aa', lineHeight: 1.6, marginBottom: '20px' }}>
              The AI Workforce Platform. Create, deploy, and manage persistent AI Humans with roles, workflows, voice, and continuous autonomous execution.
            </p>
            <div style={{ fontSize: '12px', color: '#71717a' }}>
              Don’t just use AI. Build your AI workforce.
            </div>
          </div>

          {/* Col 2: Platform */}
          <div>
            <div style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#ffffff', marginBottom: '18px' }}>
              AI Workforce
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
              <li><a href="#what-is-ai-human" style={{ color: '#a1a1aa', textDecoration: 'none' }}>What is an AI Human?</a></li>
              <li><a href="#create-wizard" style={{ color: '#a1a1aa', textDecoration: 'none' }}>Create in Minutes</a></li>
              <li><a href="#workflow" style={{ color: '#a1a1aa', textDecoration: 'none' }}>Execution Engine</a></li>
              <li><a href="#roles" style={{ color: '#a1a1aa', textDecoration: 'none' }}>Roles & Responsibilities</a></li>
              <li><a href="#voice" style={{ color: '#a1a1aa', textDecoration: 'none' }}>Voice AI Humans</a></li>
              <li><a href="#control-center" style={{ color: '#a1a1aa', textDecoration: 'none' }}>Command Control Center</a></li>
            </ul>
          </div>

          {/* Col 3: Integrations & Trust */}
          <div>
            <div style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#ffffff', marginBottom: '18px' }}>
              Governance & Security
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
              <li><a href="#security" style={{ color: '#a1a1aa', textDecoration: 'none' }}>Enterprise Guardrails</a></li>
              <li><a href="#security" style={{ color: '#a1a1aa', textDecoration: 'none' }}>Role-Based Access (RBAC)</a></li>
              <li><a href="#security" style={{ color: '#a1a1aa', textDecoration: 'none' }}>Human-in-the-Loop Approvals</a></li>
              <li><a href="#security" style={{ color: '#a1a1aa', textDecoration: 'none' }}>Audit Logs & Compliance</a></li>
              <li><a href="#integrations" style={{ color: '#a1a1aa', textDecoration: 'none' }}>API & Webhook Integrations</a></li>
            </ul>
          </div>

          {/* Col 4: Legal & Portals */}
          <div>
            <div style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#ffffff', marginBottom: '18px' }}>
              Company & Legal
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
              <li>
                <button onClick={() => onNavigate('/about')} style={{ background: 'none', border: 'none', color: '#a1a1aa', cursor: 'pointer', padding: 0, fontSize: '14px' }}>
                  About Saadhyam
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/contact')} style={{ background: 'none', border: 'none', color: '#a1a1aa', cursor: 'pointer', padding: 0, fontSize: '14px' }}>
                  Contact Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/privacy')} style={{ background: 'none', border: 'none', color: '#a1a1aa', cursor: 'pointer', padding: 0, fontSize: '14px' }}>
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/terms')} style={{ background: 'none', border: 'none', color: '#a1a1aa', cursor: 'pointer', padding: 0, fontSize: '14px' }}>
                  Terms of Service
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/refund')} style={{ background: 'none', border: 'none', color: '#a1a1aa', cursor: 'pointer', padding: 0, fontSize: '14px' }}>
                  Refund Policy
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            paddingTop: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            fontSize: '13px',
            color: '#71717a'
          }}
        >
          <div>
            © {new Date().getFullYear()} Saadhyam Inc. All rights reserved. Saadhyam AI Humans Platform.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>Built for the future of business workforce</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
