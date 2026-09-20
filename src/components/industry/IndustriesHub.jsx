import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  ArrowRight, 
  Sparkles, 
  Building2, 
  Hospital, 
  GraduationCap, 
  Factory, 
  HardHat, 
  Landmark, 
  ShoppingBag, 
  Activity, 
  BedDouble, 
  Truck, 
  Car, 
  Scale, 
  ShoppingCart, 
  Rocket, 
  Briefcase, 
  Plane, 
  Utensils, 
  Dumbbell, 
  CalendarDays, 
  ShieldCheck, 
  Users,
  CheckCircle2,
  Bot
} from 'lucide-react';
import { Blobatar } from '@blobatar/react';
import 'blobatar/motion.css';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { getAllIndustries } from '../../data/industries';

const iconMap = {
  Building2,
  Hospital,
  GraduationCap,
  Factory,
  HardHat,
  Landmark,
  ShoppingBag,
  Activity,
  BedDouble,
  Truck,
  Car,
  Scale,
  ShoppingCart,
  Rocket,
  Briefcase,
  Plane,
  Utensils,
  Dumbbell,
  CalendarDays,
  ShieldCheck
};

const CYCLING_KEYWORDS = [
  'Workforce.',
  'Sales Team.',
  'Hospital Staff.',
  'Legal Team.',
  'E-Commerce Engine.',
  'Operations Staff.',
  'Financial Advisory.'
];

export default function IndustriesHub({ onNavigate, onOpenModal }) {
  const allIndustries = getAllIndustries();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cyclingIndex, setCyclingIndex] = useState(0);
  const [showAlainNote, setShowAlainNote] = useState(false);

  useEffect(() => {
    document.title = 'AI Workforce by Industry | Saadhyam AI';
  }, []);

  // Cycle keywords smoothly every 2.8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCyclingIndex((prev) => (prev + 1) % CYCLING_KEYWORDS.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const categories = ['All', ...new Set(allIndustries.map((ind) => ind.category))];

  const filtered = allIndustries.filter((ind) => {
    const matchesSearch =
      ind.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ind.headline.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ind.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || ind.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const line1Words = ['Your', 'Business', 'Deserves', 'More', 'Than', 'Software.'];

  return (
    <div style={{ position: 'relative', overflowX: 'hidden', minHeight: '100vh', background: 'var(--base-bg)' }}>
      <Navbar onOpenModal={onOpenModal} onNavigate={onNavigate} />

      {/* Hero Header */}
      <section style={{ padding: '145px 0 60px', textAlign: 'center', position: 'relative' }}>
        <div className="container">
          
          {/* Alain AI Workforce Coordinator Badge */}
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <motion.div 
              initial={{ opacity: 0, y: -12, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              onClick={() => setShowAlainNote((prev) => !prev)}
              onMouseEnter={() => setShowAlainNote(true)}
              onMouseLeave={() => setShowAlainNote(false)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                padding: '6px 18px 6px 8px',
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.96), rgba(253, 242, 248, 0.92))',
                border: '1.5px solid rgba(236, 72, 153, 0.35)',
                boxShadow: '0 12px 35px -5px rgba(236, 72, 153, 0.2), 0 0 0 1px rgba(255,255,255,0.8)',
                marginBottom: '26px',
                cursor: 'pointer',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                transition: 'all 0.25s'
              }}
              whileHover={{ scale: 1.03, borderColor: '#ec4899', boxShadow: '0 16px 45px -5px rgba(236, 72, 153, 0.3)' }}
            >
              {/* Animated Alain Blobatar */}
              <div 
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  background: 'linear-gradient(135deg, #fdf2f8, #fce7f3)',
                  border: '2px solid #ec4899',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 14px rgba(236, 72, 153, 0.3)',
                  flexShrink: 0
                }}
              >
                <Blobatar name="alain00" animate="hover" />
              </div>

              <div style={{ textAlign: 'left' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ 
                    width: '7px', 
                    height: '7px', 
                    borderRadius: '50%', 
                    background: '#10b981', 
                    display: 'inline-block',
                    boxShadow: '0 0 8px #10b981'
                  }} />
                  <span style={{ fontSize: '11px', fontWeight: 800, color: '#db2777', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    AI Workforce Active
                  </span>
                </div>
                <div style={{ fontSize: '13.5px', fontWeight: 850, color: '#09090b', letterSpacing: '-0.01em' }}>
                  Meet Alain &amp; 20+ Domain AI Employees
                </div>
              </div>

              <div style={{
                marginLeft: '6px',
                padding: '4px 10px',
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, #ec4899, #db2777)',
                fontSize: '11px',
                fontWeight: 800,
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                boxShadow: '0 2px 8px rgba(236, 72, 153, 0.35)'
              }}>
                <span>Live Roster</span>
                <ArrowRight size={11} />
              </div>
            </motion.div>

            {/* Interactive Alain Speech Bubble */}
            <AnimatePresence>
              {showAlainNote && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.18 }}
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 40,
                    width: '320px',
                    background: '#ffffff',
                    border: '1.5px solid rgba(236, 72, 153, 0.3)',
                    borderRadius: '16px',
                    padding: '14px 16px',
                    boxShadow: '0 20px 50px -10px rgba(236, 72, 153, 0.25)',
                    textAlign: 'left'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', overflow: 'hidden', border: '1.5px solid #ec4899', flexShrink: 0 }}>
                      <Blobatar name="alain00" animate="hover" />
                    </div>
                    <div>
                      <div style={{ fontSize: '12px', fontWeight: 800, color: '#09090b' }}>Alain — AI Workforce Lead</div>
                      <div style={{ fontSize: '10px', color: '#db2777', fontWeight: 700 }}>Mentneo Platform</div>
                    </div>
                  </div>
                  <p style={{ fontSize: '12px', color: '#475569', margin: 0, lineHeight: 1.45 }}>
                    "Our AI employees don’t just answer questions—they execute workflows, qualify leads, update CRMs, and run operations 24/7."
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Premium Animated H1 Headline */}
          <h1 
            style={{ 
              fontSize: 'clamp(2.5rem, 5.2vw, 4.3rem)', 
              fontWeight: 850, 
              color: '#09090b', 
              lineHeight: 1.12,
              letterSpacing: '-0.035em',
              marginBottom: '22px',
              maxWidth: '1050px',
              margin: '0 auto 22px'
            }}
          >
            {/* Line 1: Kinetic Staggered Word Unblur Reveal */}
            <div style={{ display: 'block', marginBottom: '6px' }}>
              {line1Words.map((word, idx) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 22, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{
                    duration: 0.55,
                    delay: idx * 0.08,
                    ease: [0.2, 0.65, 0.3, 0.9]
                  }}
                  style={{ display: 'inline-block', marginRight: '0.28em' }}
                >
                  {word}
                </motion.span>
              ))}
            </div>

            {/* Line 2: "Give It an AI" + Animated Cycling Shimmer Keyword */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '0.28em' }}>
              <motion.span
                initial={{ opacity: 0, y: 24, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.55, delay: 0.55, ease: [0.2, 0.65, 0.3, 0.9] }}
                style={{ display: 'inline-block' }}
              >
                Give It an AI
              </motion.span>

              {/* Dynamic Cycling Word with Shimmer Gradient */}
              <span style={{ display: 'inline-block', minWidth: '320px', textAlign: 'left' }}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={CYCLING_KEYWORDS[cyclingIndex]}
                    initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -18, filter: 'blur(8px)' }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="text-gradient-shimmer"
                    style={{ display: 'inline-block', position: 'relative' }}
                  >
                    {CYCLING_KEYWORDS[cyclingIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </div>
          </h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            style={{ 
              fontSize: '18px', 
              color: '#475569', 
              maxWidth: '780px', 
              margin: '0 auto 40px', 
              lineHeight: 1.6 
            }}
          >
            Select your industry to explore purpose-built AI agents, automated operational workflows, and verified deployment benchmarks tailored to your business sector.
          </motion.p>

          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            style={{ maxWidth: '560px', margin: '0 auto 36px', position: 'relative' }}
          >
            <Search size={18} style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
            <input
              type="text"
              placeholder="Search by industry name, keyword, or problem..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '16px 20px 16px 52px',
                borderRadius: '9999px',
                border: '1.5px solid rgba(236, 72, 153, 0.3)',
                fontSize: '15px',
                outline: 'none',
                background: '#ffffff',
                boxShadow: '0 8px 30px -5px rgba(236, 72, 153, 0.15)',
                color: '#09090b',
                transition: 'border-color 0.2s, box-shadow 0.2s'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#ec4899';
                e.target.style.boxShadow = '0 12px 35px -5px rgba(236, 72, 153, 0.25)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(236, 72, 153, 0.3)';
                e.target.style.boxShadow = '0 8px 30px -5px rgba(236, 72, 153, 0.15)';
              }}
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                style={{
                  position: 'absolute',
                  right: '18px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  fontSize: '13px',
                  color: '#94a3b8',
                  cursor: 'pointer'
                }}
              >
                ✕
              </button>
            )}
          </motion.div>

          {/* Category Filter Pills */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '9999px',
                  fontSize: '13px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  border: selectedCategory === cat ? '1.5px solid #ec4899' : '1px solid rgba(236, 72, 153, 0.2)',
                  background: selectedCategory === cat ? 'linear-gradient(135deg, #ec4899, #db2777)' : '#ffffff',
                  color: selectedCategory === cat ? '#ffffff' : '#475569',
                  transition: 'all 0.2s',
                  boxShadow: selectedCategory === cat ? '0 4px 14px rgba(236, 72, 153, 0.25)' : 'none'
                }}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industry Cards Grid */}
      <section style={{ padding: '40px 0 120px' }}>
        <div className="container">
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
              gap: '28px' 
            }}
          >
            {filtered.map((ind, idx) => {
              const Icon = iconMap[ind.icon] || Sparkles;
              return (
                <motion.div
                  key={ind.slug}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.04 }}
                  style={{
                    borderRadius: '24px',
                    background: '#ffffff',
                    border: '1.5px solid rgba(236, 72, 153, 0.2)',
                    boxShadow: '0 8px 25px -6px rgba(236, 72, 153, 0.1)',
                    padding: '30px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    transition: 'all 0.25s'
                  }}
                  onClick={() => onNavigate(`/industries/${ind.slug}`)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(236, 72, 153, 0.5)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 20px 45px -10px rgba(236, 72, 153, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(236, 72, 153, 0.2)';
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = '0 8px 25px -6px rgba(236, 72, 153, 0.1)';
                  }}
                >
                  <div>
                    {/* Top Row: Icon & Category */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                      <div 
                        style={{
                          width: '52px',
                          height: '52px',
                          borderRadius: '16px',
                          background: 'linear-gradient(135deg, #fdf2f8, #fce7f3)',
                          border: '1.5px solid rgba(236, 72, 153, 0.25)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#db2777'
                        }}
                      >
                        <Icon size={26} />
                      </div>

                      <span 
                        style={{
                          fontSize: '11px',
                          fontWeight: 800,
                          color: '#db2777',
                          background: 'rgba(236, 72, 153, 0.08)',
                          padding: '4px 10px',
                          borderRadius: '9999px',
                          border: '1px solid rgba(236, 72, 153, 0.15)',
                          letterSpacing: '0.04em',
                          textTransform: 'uppercase'
                        }}
                      >
                        {ind.category}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '20px', fontWeight: 850, color: '#09090b', marginBottom: '10px' }}>
                      {ind.name}
                    </h3>

                    <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.5, marginBottom: '20px' }}>
                      {ind.subheadline || ind.headline}
                    </p>

                    {/* Agent count badge */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px', fontWeight: 700, color: '#db2777' }}>
                        <Users size={14} />
                        <span>{ind.agents ? ind.agents.length : 4} Specialized AI Agents</span>
                      </div>
                      <span style={{ color: '#cbd5e1' }}>•</span>
                      <div style={{ fontSize: '12px', color: '#64748b' }}>
                        {ind.useCases ? ind.useCases.length : 4} Workflows
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderTop: '1px solid rgba(236, 72, 153, 0.12)',
                      paddingTop: '16px'
                    }}
                  >
                    <span style={{ fontSize: '13px', fontWeight: 750, color: '#09090b' }}>
                      Explore AI Workforce
                    </span>
                    <div 
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #ec4899, #db2777)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ffffff'
                      }}
                    >
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 0', color: '#64748b' }}>
              <Bot size={48} style={{ margin: '0 auto 16px', color: '#db2777', opacity: 0.6 }} />
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#09090b', marginBottom: '8px' }}>No Industries Found</h3>
              <p style={{ fontSize: '15px', color: '#64748b', maxWidth: '400px', margin: '0 auto 20px' }}>
                We couldn't find any sector matching "{searchTerm}". Try a different search term or category.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                style={{
                  padding: '10px 20px',
                  borderRadius: '9999px',
                  background: 'linear-gradient(135deg, #ec4899, #db2777)',
                  color: '#ffffff',
                  border: 'none',
                  fontWeight: 700,
                  fontSize: '13px',
                  cursor: 'pointer'
                }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
