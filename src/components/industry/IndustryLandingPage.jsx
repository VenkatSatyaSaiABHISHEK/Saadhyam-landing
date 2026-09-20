import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, MessageSquare } from 'lucide-react';

import Navbar from '../Navbar';
import Footer from '../Footer';
import CreateAIHumanModal from '../CreateAIHumanModal';

import SEOHead from './SEOHead';
import IndustryHero from './IndustryHero';
import IndustryProblems from './IndustryProblems';
import IndustryWorkforce from './IndustryWorkforce';
import IndustryWorkflow from './IndustryWorkflow';
import IndustryUseCases from './IndustryUseCases';
import IndustryInteractiveDemo from './IndustryInteractiveDemo';
import IndustryDashboardPreview from './IndustryDashboardPreview';
import IndustryIntegrations from './IndustryIntegrations';
import IndustryROIMetrics from './IndustryROIMetrics';
import IndustryCaseStudy from './IndustryCaseStudy';
import IndustryComparison from './IndustryComparison';
import IndustrySecurity from './IndustrySecurity';
import IndustryFAQ from './IndustryFAQ';
import IndustryFinalCTA from './IndustryFinalCTA';

export default function IndustryLandingPage({ industry, onNavigate }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAgentForDemo, setSelectedAgentForDemo] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [industry.slug]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ position: 'relative', overflowX: 'hidden', minHeight: '100vh', background: 'var(--base-bg)' }}>
      {/* 1. Dynamic SEO Metadata */}
      <SEOHead industry={industry} />

      {/* Ambient background glows */}
      <div 
        style={{
          position: 'fixed',
          top: '-200px',
          left: '-200px',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.12) 0%, transparent 70%)',
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
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%)',
          filter: 'blur(90px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      {/* Navigation */}
      <Navbar onOpenModal={() => setIsModalOpen(true)} onNavigate={onNavigate} />

      {/* Section 1: Hero */}
      <IndustryHero 
        industry={industry} 
        onOpenModal={() => setIsModalOpen(true)} 
      />

      {/* Section 2: Problems Your Industry Faces */}
      <IndustryProblems 
        industry={industry} 
      />

      {/* Section 3: Meet Your AI Workforce */}
      <IndustryWorkforce 
        industry={industry} 
        onOpenModal={() => setIsModalOpen(true)} 
        onSelectAgentForDemo={(id) => setSelectedAgentForDemo(id)}
      />

      {/* Section 4: Interactive Industry Workflow */}
      <IndustryWorkflow 
        industry={industry} 
      />

      {/* Section 5: Industry Use Cases */}
      <IndustryUseCases 
        industry={industry} 
        onOpenModal={() => setIsModalOpen(true)} 
      />

      {/* Section 6: Ask Your AI Workforce (Interactive Demo) */}
      <IndustryInteractiveDemo 
        industry={industry} 
        selectedAgentId={selectedAgentForDemo} 
      />

      {/* Section 7: Live Control Center Dashboard Preview */}
      <IndustryDashboardPreview 
        industry={industry} 
      />

      {/* Section 8: Stack Integrations */}
      <IndustryIntegrations 
        industry={industry} 
      />

      {/* Section 9: ROI / Business Impact */}
      <IndustryROIMetrics 
        industry={industry} 
      />

      {/* Section 10: Verified Case Study */}
      <IndustryCaseStudy 
        industry={industry} 
        onOpenModal={() => setIsModalOpen(true)} 
      />

      {/* Section 11: More Than Software (Comparison Matrix) */}
      <IndustryComparison 
        industry={industry} 
      />

      {/* Section 12: Security & Governance */}
      <IndustrySecurity 
        industry={industry} 
      />

      {/* Section 13: FAQs */}
      <IndustryFAQ 
        industry={industry} 
      />

      {/* Section 14: Final CTA */}
      <IndustryFinalCTA 
        industry={industry} 
        onOpenModal={() => setIsModalOpen(true)} 
      />

      {/* Footer */}
      <Footer onNavigate={onNavigate} />

      {/* Interactive Creation / Lead Modal */}
      <CreateAIHumanModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={() => {}}
      />

      {/* Floating Action Buttons */}
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
              background: 'rgba(255, 255, 255, 0.9)',
              border: '1.5px solid rgba(236, 72, 153, 0.3)',
              color: '#09090b',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(0,0,0,0.08)'
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
            background: 'linear-gradient(135deg, #ec4899, #db2777)',
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
            boxShadow: '0 0 25px rgba(236, 72, 153, 0.45)'
          }}
        >
          <MessageSquare size={16} />
          <span>Hire {industry.shortName} Agent</span>
        </motion.button>
      </div>
    </div>
  );
}
