import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function IndustryFAQ({ industry }) {
  const faqs = industry.faqs || [];
  const [openIdx, setOpenIdx] = useState(0);

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section 
      style={{ 
        padding: '100px 0', 
        background: 'var(--base-bg)',
        position: 'relative' 
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px' }}>
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
            <HelpCircle size={13} />
            <span>Common Questions</span>
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
            Frequently Asked Questions
          </h2>

          <p style={{ fontSize: '16px', color: '#475569', lineHeight: 1.65 }}>
            Everything you need to know about deploying an autonomous AI workforce in {industry.name}.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div style={{ maxWidth: '840px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                style={{
                  borderRadius: '16px',
                  background: '#ffffff',
                  border: isOpen ? '1.5px solid rgba(236, 72, 153, 0.4)' : '1px solid rgba(236, 72, 153, 0.18)',
                  boxShadow: isOpen ? '0 8px 24px -6px rgba(236, 72, 153, 0.1)' : '0 2px 8px rgba(0,0,0,0.02)',
                  overflow: 'hidden',
                  transition: 'all 0.2s'
                }}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  style={{
                    width: '100%',
                    padding: '22px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    gap: '16px'
                  }}
                >
                  <span style={{ fontSize: '16px', fontWeight: 800, color: isOpen ? '#db2777' : '#09090b', lineHeight: 1.4 }}>
                    {faq.q}
                  </span>
                  <div 
                    style={{ 
                      width: '28px', 
                      height: '28px', 
                      borderRadius: '50%', 
                      background: isOpen ? '#fdf2f8' : '#f1f5f9', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      color: isOpen ? '#db2777' : '#64748b',
                      flexShrink: 0
                    }}
                  >
                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div style={{ padding: '0 24px 24px', fontSize: '14.5px', color: '#475569', lineHeight: 1.65, borderTop: '1px solid #f8fafc' }}>
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
