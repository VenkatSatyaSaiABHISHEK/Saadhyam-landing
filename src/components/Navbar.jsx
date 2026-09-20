import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Menu, X, Bot, Shield, Layers, Mic, Activity, ChevronRight } from 'lucide-react';
import IndustryMegaMenu from './industry/IndustryMegaMenu';

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
    { label: 'Product', href: '#the-big-idea' },
    { label: 'AI Workforce', href: '#roles' },
    { label: 'Solutions', href: '#workflow' },
    // 'Industries' is rendered via IndustryMegaMenu
    { label: 'Resources', href: '#control-center' },
    { label: 'Pricing', href: '#create' },
    { label: 'Company', href: '#security' }
  ];

  const handleLinkClick = (e, href) => {
    if (href.startsWith('#')) {
      // Check if we are currently on an industry subpage or hub page
      if (window.location.pathname !== '/' && window.location.pathname !== '') {
        e.preventDefault();
        onNavigate('/' + href);
        return;
      }
      // If already on homepage, default hash anchor behavior works smoothly
      return;
    }
    e.preventDefault();
    onNavigate(href);
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 900,
        padding: scrolled ? '12px 24px' : '20px 24px',
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(255, 255, 255, 0.94)' : 'rgba(255, 255, 255, 0.75)',
        backdropFilter: 'blur(20px)',
        borderBottom: scrolled ? '1px solid rgba(236, 72, 153, 0.18)' : '1px solid rgba(236, 72, 153, 0.08)',
        boxShadow: scrolled ? '0 10px 30px -10px rgba(236, 72, 153, 0.12)' : 'none'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand */}
        <a 
          href="/" 
          onClick={(e) => {
            e.preventDefault();
            onNavigate('/');
          }}
          style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', color: '#09090b' }}
        >
          <Logo />
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '21px', fontWeight: 850, letterSpacing: '-0.02em', color: '#09090b' }}>Saadhyam</span>
              <span style={{
                background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.14), rgba(168, 85, 247, 0.14))',
                border: '1px solid rgba(236, 72, 153, 0.35)',
                borderRadius: '6px',
                padding: '2px 7px',
                fontSize: '10px',
                fontWeight: 750,
                letterSpacing: '0.06em',
                color: '#db2777'
              }}>AI WORKFORCE</span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '26px' }}>
          <a
            href="#the-big-idea"
            onClick={(e) => handleLinkClick(e, '#the-big-idea')}
            style={{ color: '#475569', textDecoration: 'none', fontSize: '14px', fontWeight: 600, transition: 'color 0.2s' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#ec4899')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#475569')}
          >
            Product
          </a>

          <a
            href="#roles"
            onClick={(e) => handleLinkClick(e, '#roles')}
            style={{ color: '#475569', textDecoration: 'none', fontSize: '14px', fontWeight: 600, transition: 'color 0.2s' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#ec4899')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#475569')}
          >
            AI Workforce
          </a>

          <a
            href="#workflow"
            onClick={(e) => handleLinkClick(e, '#workflow')}
            style={{ color: '#475569', textDecoration: 'none', fontSize: '14px', fontWeight: 600, transition: 'color 0.2s' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#ec4899')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#475569')}
          >
            Solutions
          </a>

          {/* Mega Menu Dropdown */}
          <IndustryMegaMenu onNavigate={onNavigate} isScrolled={scrolled} />

          <a
            href="#control-center"
            onClick={(e) => handleLinkClick(e, '#control-center')}
            style={{ color: '#475569', textDecoration: 'none', fontSize: '14px', fontWeight: 600, transition: 'color 0.2s' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#ec4899')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#475569')}
          >
            Resources
          </a>

          <a
            href="#create"
            onClick={(e) => handleLinkClick(e, '#create')}
            style={{ color: '#475569', textDecoration: 'none', fontSize: '14px', fontWeight: 600, transition: 'color 0.2s' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#ec4899')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#475569')}
          >
            Pricing
          </a>

          <a
            href="/about"
            onClick={(e) => handleLinkClick(e, '/about')}
            style={{ color: '#475569', textDecoration: 'none', fontSize: '14px', fontWeight: 600, transition: 'color 0.2s' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#ec4899')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#475569')}
          >
            Company
          </a>
        </div>

        {/* Header Right Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <button
            onClick={onOpenModal}
            className="btn-primary"
            style={{ padding: '10px 22px', fontSize: '14px', borderRadius: '9999px' }}
          >
            <span>Book a Demo</span>
            <ArrowRight size={15} />
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#09090b',
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
              background: 'rgba(255, 255, 255, 0.98)',
              borderBottom: '1px solid rgba(236, 72, 153, 0.2)',
              padding: '24px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.08)'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <a
                href="#the-big-idea"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleLinkClick(e, '#the-big-idea');
                }}
                style={{ color: '#09090b', textDecoration: 'none', fontSize: '16px', fontWeight: 700 }}
              >
                Product
              </a>
              <a
                href="#roles"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleLinkClick(e, '#roles');
                }}
                style={{ color: '#09090b', textDecoration: 'none', fontSize: '16px', fontWeight: 700 }}
              >
                AI Workforce
              </a>
              <a
                href="#workflow"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleLinkClick(e, '#workflow');
                }}
                style={{ color: '#09090b', textDecoration: 'none', fontSize: '16px', fontWeight: 700 }}
              >
                Solutions
              </a>
              <a
                href="/industries"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  e.preventDefault();
                  onNavigate('/industries');
                }}
                style={{ color: '#db2777', textDecoration: 'none', fontSize: '16px', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
              >
                <span>Browse All 20+ Industries</span>
                <ChevronRight size={18} />
              </a>
              <a
                href="#control-center"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleLinkClick(e, '#control-center');
                }}
                style={{ color: '#09090b', textDecoration: 'none', fontSize: '16px', fontWeight: 700 }}
              >
                Resources
              </a>
              <a
                href="#create"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleLinkClick(e, '#create');
                }}
                style={{ color: '#09090b', textDecoration: 'none', fontSize: '16px', fontWeight: 700 }}
              >
                Pricing
              </a>
              <a
                href="/about"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleLinkClick(e, '/about');
                }}
                style={{ color: '#09090b', textDecoration: 'none', fontSize: '16px', fontWeight: 700 }}
              >
                Company
              </a>

              <div style={{ paddingTop: '12px', borderTop: '1px solid rgba(236, 72, 153, 0.15)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenModal();
                  }}
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Book a Demo <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
