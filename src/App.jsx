import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MessageSquare, ArrowUp } from 'lucide-react';

// Components
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TheBigIdea from './components/TheBigIdea';
import WhatIsAnAIHuman from './components/WhatIsAnAIHuman';
import CreateAIHumanWizard from './components/CreateAIHumanWizard';
import ExecutionWorkflow from './components/ExecutionWorkflow';
import RoleShowcase from './components/RoleShowcase';
import MultiAgentWorkforce from './components/MultiAgentWorkforce';
import HumanPlusAI from './components/HumanPlusAI';
import LiveActivityFeed from './components/LiveActivityFeed';
import VoiceAIHuman from './components/VoiceAIHuman';
import IntegrationsSection from './components/IntegrationsSection';
import ControlCenterDashboard from './components/ControlCenterDashboard';
import LifecycleSection from './components/LifecycleSection';
import FutureOfWork from './components/FutureOfWork';
import Vision2030 from './components/Vision2030';
import WhySaadhyam from './components/WhySaadhyam';
import SecurityControl from './components/SecurityControl';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import CreateAIHumanModal from './components/CreateAIHumanModal';

// Existing Portals
import AdminPanel from './AdminPanel';
import MandatoryPages from './MandatoryPages';

// Global styles
import './index.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lang, setLang] = useState('en');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Routing State
  const [currentRoute, setCurrentRoute] = useState(window.location.pathname);
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentRoute(window.location.pathname);
      setHash(window.location.hash);
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    const interval = setInterval(handleLocationChange, 800);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const handleNavigate = (path) => {
    if (path.startsWith('#')) {
      window.location.hash = path;
      setHash(path);
      return;
    }
    window.history.pushState(null, '', path);
    window.dispatchEvent(new Event('popstate'));
    window.scrollTo(0, 0);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Route conditions
  const isAdmin = currentRoute === '/admin' || hash === '#admin' || hash === '#/admin' || window.location.search.includes('admin');
  const isTerms = currentRoute === '/terms' || hash === '#terms' || hash === '#/terms';
  const isPrivacy = currentRoute === '/privacy' || hash === '#privacy' || hash === '#/privacy';
  const isRefund = currentRoute === '/refund' || hash === '#refund' || hash === '#/refund';
  const isContact = currentRoute === '/contact' || hash === '#contact' || hash === '#/contact';
  const isAbout = currentRoute === '/about' || hash === '#about' || hash === '#/about';

  // Sub-pages rendering
  if (isAdmin) {
    return <AdminPanel />;
  }
  if (isTerms) {
    return <MandatoryPages pageType="terms" lang={lang} setLang={setLang} />;
  }
  if (isPrivacy) {
    return <MandatoryPages pageType="privacy" lang={lang} setLang={setLang} />;
  }
  if (isRefund) {
    return <MandatoryPages pageType="refund" lang={lang} setLang={setLang} />;
  }
  if (isContact) {
    return <MandatoryPages pageType="contact" lang={lang} setLang={setLang} />;
  }
  if (isAbout) {
    return <MandatoryPages pageType="about" lang={lang} setLang={setLang} />;
  }

  return (
    <div style={{ position: 'relative', overflowX: 'hidden', minHeight: '100vh', background: 'var(--base-bg)' }}>
      {/* Background Ambience Elements */}
      <div 
        style={{
          position: 'fixed',
          top: '-200px',
          left: '-200px',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.15) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      <div 
        style={{
          position: 'fixed',
          bottom: '-200px',
          right: '-200px',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 70%)',
          filter: 'blur(90px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      {/* Navigation */}
      <Navbar onOpenModal={() => setIsModalOpen(true)} onNavigate={handleNavigate} />

      {/* Section 1: Hero Section */}
      <HeroSection onOpenModal={() => setIsModalOpen(true)} />

      {/* Section 2: The Big Idea */}
      <TheBigIdea onOpenModal={() => setIsModalOpen(true)} />

      {/* Section 3: What is an AI Human? */}
      <WhatIsAnAIHuman onOpenModal={() => setIsModalOpen(true)} />

      {/* Section 4: Create an AI Human (Wizard) */}
      <CreateAIHumanWizard onOpenModal={() => setIsModalOpen(true)} />

      {/* Section 5: AI Human Workflow (Execution Engine) */}
      <ExecutionWorkflow onOpenModal={() => setIsModalOpen(true)} />

      {/* Section 6: AI Humans for Every Role */}
      <RoleShowcase onOpenModal={() => setIsModalOpen(true)} />

      {/* Section 7: Multi-Agent / AI Workforce */}
      <MultiAgentWorkforce onOpenModal={() => setIsModalOpen(true)} />

      {/* Section 8: Human + AI */}
      <HumanPlusAI onOpenModal={() => setIsModalOpen(true)} />

      {/* Section 9: Real-Time AI Human Activity */}
      <LiveActivityFeed onOpenModal={() => setIsModalOpen(true)} />

      {/* Section 10: Voice AI Humans */}
      <VoiceAIHuman onOpenModal={() => setIsModalOpen(true)} />

      {/* Section 11: Connect Your Business */}
      <IntegrationsSection onOpenModal={() => setIsModalOpen(true)} />

      {/* Section 12: Control Center */}
      <ControlCenterDashboard onOpenModal={() => setIsModalOpen(true)} />

      {/* Section 13: The AI Employee Lifecycle */}
      <LifecycleSection onOpenModal={() => setIsModalOpen(true)} />

      {/* Section 14: The Future of Work */}
      <FutureOfWork onOpenModal={() => setIsModalOpen(true)} />

      {/* Section 15: Vision 2030 */}
      <Vision2030 onOpenModal={() => setIsModalOpen(true)} />

      {/* Section 16: Why Saadhyam */}
      <WhySaadhyam onOpenModal={() => setIsModalOpen(true)} />

      {/* Section 17: Security & Control */}
      <SecurityControl onOpenModal={() => setIsModalOpen(true)} />

      {/* Section 18: Final CTA */}
      <FinalCTA onOpenModal={() => setIsModalOpen(true)} />

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Interactive AI Human Creation / Lead Modal */}
      <CreateAIHumanModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={() => {}}
      />

      {/* Floating Action Button */}
      <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 900, display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              background: 'rgba(20, 20, 30, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 20px rgba(0,0,0,0.5)'
            }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsModalOpen(true)}
          style={{
            background: 'linear-gradient(135deg, #9333ea, #ec4899)',
            border: 'none',
            color: '#ffffff',
            padding: '12px 20px',
            borderRadius: '9999px',
            fontSize: '14px',
            fontWeight: 700,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 0 25px rgba(168, 85, 247, 0.5)'
          }}
        >
          <MessageSquare size={16} />
          <span>Hire AI Human</span>
        </motion.button>
      </div>
    </div>
  );
}

export default App;
