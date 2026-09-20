import React from 'react';
import { Shield, Sparkles, Heart, ArrowRight } from 'lucide-react';

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
        borderTop: '1px solid rgba(236, 72, 153, 0.18)',
        background: '#ffffff',
        padding: '70px 0 36px'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '36px',
            marginBottom: '50px'
          }}
        >
          {/* Col 1: Brand */}
          <div style={{ maxWidth: '300px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <Logo />
              <span style={{ fontSize: '20px', fontWeight: 900, color: '#09090b' }}>Saadhyam</span>
            </div>
            <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6, marginBottom: '20px', fontWeight: 500 }}>
              The AI Workforce Platform by Mentneo. Create, deploy, and manage persistent AI Humans with roles, workflows, voice, and continuous autonomous execution.
            </p>
            <div style={{ fontSize: '13px', color: '#db2777', fontWeight: 700 }}>
              Don’t just use AI. Build your AI workforce.
            </div>
          </div>

          {/* Col 2: Industries */}
          <div>
            <div style={{ fontSize: '13px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#09090b', marginBottom: '18px' }}>
              Industries
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '9px', fontSize: '14px' }}>
              <li>
                <button onClick={() => onNavigate('/industries/real-estate')} style={{ background: 'none', border: 'none', color: '#475569', cursor: 'pointer', padding: 0, fontSize: '14px', fontWeight: 500 }}>
                  Real Estate
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/industries/hospitals')} style={{ background: 'none', border: 'none', color: '#475569', cursor: 'pointer', padding: 0, fontSize: '14px', fontWeight: 500 }}>
                  Hospitals
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/industries/education')} style={{ background: 'none', border: 'none', color: '#475569', cursor: 'pointer', padding: 0, fontSize: '14px', fontWeight: 500 }}>
                  Education
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/industries/manufacturing')} style={{ background: 'none', border: 'none', color: '#475569', cursor: 'pointer', padding: 0, fontSize: '14px', fontWeight: 500 }}>
                  Manufacturing
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/industries/finance')} style={{ background: 'none', border: 'none', color: '#475569', cursor: 'pointer', padding: 0, fontSize: '14px', fontWeight: 500 }}>
                  Finance & Banking
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/industries/retail')} style={{ background: 'none', border: 'none', color: '#475569', cursor: 'pointer', padding: 0, fontSize: '14px', fontWeight: 500 }}>
                  Retail & Chains
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/industries/logistics')} style={{ background: 'none', border: 'none', color: '#475569', cursor: 'pointer', padding: 0, fontSize: '14px', fontWeight: 500 }}>
                  Logistics & Fleet
                </button>
              </li>
              <li style={{ marginTop: '4px' }}>
                <button 
                  onClick={() => onNavigate('/industries')} 
                  style={{ 
                    background: 'none', 
                    border: 'none', 
                    color: '#db2777', 
                    cursor: 'pointer', 
                    padding: 0, 
                    fontSize: '13.5px', 
                    fontWeight: 750,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <span>All 20+ Industries</span>
                  <ArrowRight size={13} />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Platform */}
          <div>
            <div style={{ fontSize: '13px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#09090b', marginBottom: '18px' }}>
              AI Workforce
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '9px', fontSize: '14px' }}>
              <li><a href="#what-is-ai-human" style={{ color: '#475569', textDecoration: 'none', fontWeight: 500 }}>What is an AI Human?</a></li>
              <li><a href="#create-wizard" style={{ color: '#475569', textDecoration: 'none', fontWeight: 500 }}>Create in Minutes</a></li>
              <li><a href="#workflow" style={{ color: '#475569', textDecoration: 'none', fontWeight: 500 }}>Execution Engine</a></li>
              <li><a href="#roles" style={{ color: '#475569', textDecoration: 'none', fontWeight: 500 }}>Roles & Responsibilities</a></li>
              <li><a href="#voice" style={{ color: '#475569', textDecoration: 'none', fontWeight: 500 }}>Voice AI Humans</a></li>
              <li><a href="#control-center" style={{ color: '#475569', textDecoration: 'none', fontWeight: 500 }}>Command Control Center</a></li>
            </ul>
          </div>

          {/* Col 4: Integrations & Trust */}
          <div>
            <div style={{ fontSize: '13px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#09090b', marginBottom: '18px' }}>
              Governance
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '9px', fontSize: '14px' }}>
              <li><a href="#security" style={{ color: '#475569', textDecoration: 'none', fontWeight: 500 }}>Enterprise Guardrails</a></li>
              <li><a href="#security" style={{ color: '#475569', textDecoration: 'none', fontWeight: 500 }}>Role-Based Access (RBAC)</a></li>
              <li><a href="#security" style={{ color: '#475569', textDecoration: 'none', fontWeight: 500 }}>Human-in-the-Loop Approvals</a></li>
              <li><a href="#security" style={{ color: '#475569', textDecoration: 'none', fontWeight: 500 }}>Audit Logs & Compliance</a></li>
              <li><a href="#integrations" style={{ color: '#475569', textDecoration: 'none', fontWeight: 500 }}>API & Webhook Connectors</a></li>
            </ul>
          </div>

          {/* Col 5: Legal & Portals */}
          <div>
            <div style={{ fontSize: '13px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#09090b', marginBottom: '18px' }}>
              Company & Legal
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '9px', fontSize: '14px' }}>
              <li>
                <button onClick={() => onNavigate('/about')} style={{ background: 'none', border: 'none', color: '#475569', cursor: 'pointer', padding: 0, fontSize: '14px', fontWeight: 500 }}>
                  About Saadhyam
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/contact')} style={{ background: 'none', border: 'none', color: '#475569', cursor: 'pointer', padding: 0, fontSize: '14px', fontWeight: 500 }}>
                  Contact Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/privacy')} style={{ background: 'none', border: 'none', color: '#475569', cursor: 'pointer', padding: 0, fontSize: '14px', fontWeight: 500 }}>
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/terms')} style={{ background: 'none', border: 'none', color: '#475569', cursor: 'pointer', padding: 0, fontSize: '14px', fontWeight: 500 }}>
                  Terms of Service
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/refund')} style={{ background: 'none', border: 'none', color: '#475569', cursor: 'pointer', padding: 0, fontSize: '14px', fontWeight: 500 }}>
                  Refund Policy
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div
          style={{
            borderTop: '1px solid rgba(236, 72, 153, 0.12)',
            paddingTop: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            fontSize: '13px',
            color: '#64748b'
          }}
        >
          <div>
            © {new Date().getFullYear()} Saadhyam Inc. All rights reserved. Saadhyam AI Humans Platform by Mentneo.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>Build your autonomous AI workforce</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
