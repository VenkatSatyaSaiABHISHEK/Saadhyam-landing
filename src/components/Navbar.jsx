import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Menu, X, Bot, Shield, Layers, Mic, Activity } from 'lucide-react';

const Logo = ({ width = '34px', height = '34px' }) => (
  <div className="logo-container glow-bg" style={{ width, height }}>
    <img 
      src="https://i.ibb.co/rRhY66tN/Whats-App-Image-2026-05-11-at-8-22-35-PM-removebg-preview.png" 
      alt="Saadhyam Logo" 
      className="logo-img"
    />
  </div>
);

export default function Navbar({ onOpenModal, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Platform', href: '#the-big-idea' },
    { label: 'AI Humans', href: '#roles' },
    { label: 'Workflows', href: '#workflow' },
    { label: 'Voice AI', href: '#voice' },
    { label: 'Control Center', href: '#control-center' },
    { label: 'Security', href: '#security' }
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 900,
        padding: scrolled ? '14px 24px' : '22px 24px',
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(5, 5, 8, 0.82)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', color: 'white' }}>
          <Logo />
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '21px', fontWeight: 800, letterSpacing: '-0.02em' }}>Saadhyam</span>
              <span style={{
                background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2))',
                border: '1px solid rgba(168, 85, 247, 0.4)',
                borderRadius: '6px',
                padding: '2px 7px',
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '0.06em',
                color: '#d8b4fe'
              }}>AI HUMANS</span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                color: '#a1a1aa',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 500,
                transition: 'color 0.2s',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#a1a1aa')}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Header Right Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <button
            onClick={onOpenModal}
            className="btn-primary"
            style={{ padding: '10px 22px', fontSize: '14px', borderRadius: '9999px' }}
          >
            <span>Create AI Human</span>
            <ArrowRight size={15} />
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              display: 'none'
            }}
            className="mobile-menu-toggle"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: 'rgba(10, 10, 15, 0.98)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '24px',
              overflow: 'hidden'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ color: '#e4e4e7', textDecoration: 'none', fontSize: '16px', fontWeight: 500 }}
                >
                  {link.label}
                </a>
              ))}
              <div style={{ paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenModal();
                  }}
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Create AI Human <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
