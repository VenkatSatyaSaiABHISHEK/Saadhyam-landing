import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, ArrowRight, Sparkles, BarChart3, PenTool, MessageSquare, Globe, 
  Search, Cpu, TrendingUp, Users, 
  X, CheckCircle, Zap, LayoutDashboard, Camera, Smartphone, Mail, FileText,
  Activity, Target, Lock, Headphones, RefreshCw, Database, Settings, Layers, Check
} from 'lucide-react';
import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';
import AdminPanel from './AdminPanel';
import MandatoryPages from './MandatoryPages';
import './index.css';

const translations = {
  en: {
    navPlatform: "Platform", navSolutions: "Solutions", navFeatures: "Features", navPricing: "Pricing", startButton: "Let's Start",
    heroTag: "AI-Powered Business Growth Platform",
    heroTitlePart1: "AI That Powers Your Business Growth ",
    heroTitleGradient: "Automatically",
    heroSub: "Saadhyam AI helps businesses analyze, automate, optimize, and scale using AI-powered insights, intelligent workflows, and growth automation systems.",
    freeTrial: "Start Free Trial", watchDemo: "Watch AI Demo"
  },
  hi: {
    navPlatform: "मंच", navSolutions: "समाधान", navFeatures: "विशेषताएं", navPricing: "मूल्य निर्धारण", startButton: "शुरू करें",
    heroTag: "एआई-पावर्ड बिजनेस ग्रोथ प्लेटफॉर्म",
    heroTitlePart1: "एआई जो आपके व्यापार के विकास को संचालित करता है ",
    heroTitleGradient: "स्वचालित रूप से",
    heroSub: "साध्यम एआई व्यवसायों को एआई-संचालित अंतर्दृष्टि, बुद्धिमान वर्कफ़्लो और विकास स्वचालन प्रणालियों का उपयोग करके विश्लेषण, स्वचालन, अनुकूलन और स्केल करने में मदद करता है।",
    freeTrial: "निःशुल्क परीक्षण शुरू करें", watchDemo: "एआई डेमो देखें"
  },
  te: {
    navPlatform: "ప్లాట్‌ఫారమ్", navSolutions: "పరిష్కారాలు", navFeatures: "ఫీచర్లు", navPricing: "ధరలు", startButton: "ప్రారంభించండి",
    heroTag: "AI-ఆధారిత వ్యాపార వృద్ధి వేదిక",
    heroTitlePart1: "మీ వ్యాపార వృద్ధిని నడిపించే AI ",
    heroTitleGradient: "స్వయంచాలకంగా",
    heroSub: "AI-ఆధారిత అంతర్దృష్టులు, ఇంటెలిజెంట్ వర్క్‌ఫ్లోలు మరియు వృద్ధి ఆటోమేషన్ సిస్టమ్‌లను ఉపయోగించి వ్యాపారాలను విశ్లేషించడానికి, ఆటోమేట్ చేయడానికి, ఆప్టిమైజ్ చేయడానికి మరియు స్కేల్ చేయడానికి Saadhyam AI సహాయపడుతుంది.",
    freeTrial: "ఉచిత ట్రయల్ ప్రారంభించండి", watchDemo: "AI డెమో చూడండి"
  }
};

const chartData = [
  { day: 'Mon', value: 12 }, { day: 'Tue', value: 18 }, { day: 'Wed', value: 35 },
  { day: 'Thu', value: 42 }, { day: 'Fri', value: 68 }, { day: 'Sat', value: 85 },
  { day: 'Sun', value: 100 }
];

const Particles = () => {
  const [particles, setParticles] = useState([]);
  useEffect(() => {
    const newParticles = Array.from({ length: 40 }).map((_, i) => ({
      id: i, x: Math.random() * 100, y: Math.random() * 100,
      size: Math.random() * 4 + 1, duration: Math.random() * 20 + 10, delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="particles-container">
      {particles.map((p) => (
        <div key={p.id} className="particle"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: `${p.size}px`, height: `${p.size}px`, animationDuration: `${p.duration}s`, animationDelay: `${p.delay}s` }}
        />
      ))}
    </div>
  );
};

const Logo = ({ width = '32px', height = '32px', style = {}, withGlow = true }) => (
  <div className={`logo-container ${withGlow ? 'glow-bg' : ''}`} style={{ width, height, ...style }}>
    <motion.img 
      src="https://i.ibb.co/rRhY66tN/Whats-App-Image-2026-05-11-at-8-22-35-PM-removebg-preview.png" 
      alt="Saadhyam Logo" className="logo-img"
      initial={{ rotateY: 0 }} animate={{ rotateY: 360 }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
    />
  </div>
);

const TypingText = ({ texts }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setBlink((prev) => !prev), 500);
    return () => clearTimeout(timeout);
  }, [blink]);

  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 2000);
      return () => clearTimeout(timeout);
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 30 : 80, Math.random() * 100));
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, texts]);

  return (
    <span className="text-gradient">
      {texts[index].substring(0, subIndex)}
      <span style={{ opacity: blink ? 1 : 0, color: 'var(--accent-purple)', marginLeft: '2px', transition: 'opacity 0.1s' }}>|</span>
    </span>
  );
};

const AnimatedNumber = ({ value }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) { setCount(value); clearInterval(timer); } 
      else { setCount(Math.floor(start)); }
    }, 16);
    return () => clearInterval(timer);
  }, [value]);
  return <span>{count}</span>;
};

const LeadCaptureModal = ({ isOpen, onClose, onSuccess }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', businessType: '', goals: '' });
  const [submitted, setSubmitted] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields are filled
    if (!formData.name || !formData.email || !formData.phone || !formData.businessType || !formData.goals) {
      alert("Please fill in all fields.");
      return;
    }
    
    setIsSubmitting(true);
    try {
      const docRef = await addDoc(collection(db, "leads"), {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        businessType: formData.businessType,
        goals: formData.goals,
        timestamp: serverTimestamp()
      });
      console.log("Document written with ID: ", docRef.id);
      setSubmitted(true);
      setTimeout(() => { 
        setSubmitted(false); 
        onSuccess();
        onClose(); 
      }, 3000);
    } catch (error) {
      console.error("Error adding document: ", error);
      console.error("Error code:", error.code);
      console.error("Error message:", error.message);
      alert(`Failed to save data: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="modal-overlay" onClick={onClose}>
          <motion.div initial={{ opacity: 0, y: 50, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.95 }} className="modal-content" onClick={e => e.stopPropagation()}>
            <button onClick={onClose} style={{ position: 'absolute', top: 20, right: 20, background: 'none', border: 'none', cursor: 'pointer' }}>
              <X size={24} color="var(--text-secondary)" />
            </button>
            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: 'center', padding: '40px 0' }}>
                <CheckCircle size={64} color="#10b981" style={{ margin: '0 auto 20px' }} />
                <h3 style={{ fontSize: '24px', marginBottom: '10px', color: 'white' }}>You're on the list! 🎉</h3>
                <p style={{ color: 'var(--text-secondary)' }}>We've received your interest. You'll be one of our very first founding customers!</p>
              </motion.div>
            ) : (
              <>
                <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                  <h3 style={{ fontSize: '28px', marginBottom: '8px', color: 'white' }}>Join the Early Beta</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>Register your interest today to secure early access and become one of our first customers.</p>
                </div>
                <form onSubmit={handleSubmit}>
                  <input required className="input-field" placeholder="Full Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                  <input required type="email" className="input-field" placeholder="Email Address" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                  <input required type="tel" className="input-field" placeholder="Phone Number" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                  <input required type="text" className="input-field" placeholder="Business/Organization Name" value={formData.businessType} onChange={e => setFormData({...formData, businessType: e.target.value})} />
                  <textarea className="input-field" placeholder="What are your main goals?" value={formData.goals} onChange={e => setFormData({...formData, goals: e.target.value})} style={{ minHeight: '80px', resize: 'vertical' }} />
                  <button type="submit" className="btn-primary" disabled={isSubmitting} style={{ width: '100%', justifyContent: 'center', marginTop: '10px', padding: '16px', opacity: isSubmitting ? 0.7 : 1 }}>
                    {isSubmitting ? 'Registering...' : 'Register Interest'} <Zap size={18} />
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const FloatingContact = () => {
  return (
    <motion.a 
      href="mailto:info@saadhyam.com"
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6, type: 'spring' }}
      whileHover={{ y: -5, scale: 1.05 }}
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        background: 'rgba(20, 20, 20, 0.75)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '100px',
        padding: '10px 18px',
        textDecoration: 'none',
        boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.5), 0 0 20px rgba(168, 85, 247, 0.15)',
        transition: 'border-color 0.3s, box-shadow 0.3s'
      }}
      className="floating-contact-btn"
    >
      <div style={{
        background: 'linear-gradient(135deg, #9333ea, #ec4899)',
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 0 10px rgba(168, 85, 247, 0.4)',
        flexShrink: 0
      }}>
        <Mail size={16} color="white" />
      </div>
      <div className="floating-contact-text" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: '1.2' }}>
        <span style={{ fontSize: '9px', color: 'var(--text-secondary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Contact Us</span>
        <span style={{ fontSize: '13px', color: 'white', fontWeight: 600 }}>info@saadhyam.com</span>
      </div>
    </motion.a>
  );
};

const Navbar = ({ onOpenModal, lang, setLang }) => {
  const t = translations[lang];
  return (
    <motion.nav initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ position: 'fixed', top: 0, left: 0, right: 0, padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 100, background: 'rgba(0, 0, 0, 0.5)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Logo width="32px" height="32px" />
        <span style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: '22px', color: 'var(--text-primary)', letterSpacing: '-0.5px' }}>Saadhyam <span className="text-gradient">AI</span></span>
      </div>
      <div className="nav-links" style={{ display: 'flex', gap: '32px', alignItems: 'center', position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
        {[
          { label: t.navPlatform, link: '#platform' },
          { label: t.navSolutions, link: '#solutions' },
          { label: t.navFeatures, link: '#features' },
          { label: t.navPricing, link: '#pricing' }
        ].map((item, idx) => (
          <a key={idx} href={item.link} style={{ textDecoration: 'none', color: 'var(--text-secondary)', fontWeight: 500, fontSize: '15px', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>{item.label}</a>
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <a href="mailto:info@saadhyam.com" className="nav-email" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '14px', fontWeight: 500, marginRight: '8px', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>
          <Mail size={14} color="var(--accent-purple)" />
          <span>info@saadhyam.com</span>
        </a>
        <select className="language-selector" value={lang} onChange={(e) => setLang(e.target.value)}>
          <option value="en">English</option><option value="hi">हिंदी</option><option value="te">తెలుగు</option>
        </select>
        <button className="btn-primary" onClick={onOpenModal} style={{ padding: '10px 24px', fontSize: '14px' }}>
          {t.startButton} <ArrowRight size={16} />
        </button>
      </div>
    </motion.nav>
  );
};

const Hero = ({ onOpenModal, lang }) => {
  const t = translations[lang];
  return (
    <section className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '120px' }}>
      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(168, 85, 247, 0.1)', padding: '8px 16px', borderRadius: '100px', marginBottom: '30px', border: '1px solid rgba(168, 85, 247, 0.2)' }}
        >
          <Sparkles size={16} color="var(--accent-purple)" />
          <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--accent-purple)' }}>{t.heroTag}</span>
        </motion.div>
        <motion.h1 className="hero-heading" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          style={{ fontSize: '72px', lineHeight: '1.1', marginBottom: '24px', maxWidth: '1000px', margin: '0 auto 24px' }}
        >
          {t.heroTitlePart1} <span className="text-gradient">{t.heroTitleGradient}</span>
        </motion.h1>
        <motion.div className="hero-typing-wrapper" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
          style={{ fontSize: '32px', fontWeight: 600, marginBottom: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px' }}
        >
          <span style={{ color: 'var(--text-secondary)' }}>Saadhyam AI for</span>
          <div className="hero-typing-container" style={{ position: 'relative', height: '40px', width: '100%', maxWidth: '380px', textAlign: 'left', display: 'flex', alignItems: 'center' }}>
             <TypingText texts={['Restaurants', 'Salons', 'Startups', 'Agencies', 'E-commerce Brands', 'Coaches', 'Healthcare Clinics', 'Real Estate Companies']} />
          </div>
        </motion.div>
        <motion.p initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          style={{ fontSize: '20px', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 40px', lineHeight: '1.6' }}
        >
          {t.heroSub}
        </motion.p>
        <motion.div className="hero-buttons" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }}
          style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}
        >
          <button className="btn-primary" onClick={onOpenModal} style={{ padding: '16px 32px', fontSize: '18px' }}>
            {t.freeTrial} <ArrowRight size={20} />
          </button>
          <button className="btn-secondary" style={{ padding: '16px 32px', fontSize: '18px' }}>
            <Play size={20} color="var(--accent-purple)" /> {t.watchDemo}
          </button>
        </motion.div>
      </div>
      <Particles />
    </section>
  );
};

const AnimatedDashboardFlow = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    let isMounted = true;
    const runSequence = async () => {
      while (isMounted) {
        setStep(0); // Connecting Data
        await new Promise(r => setTimeout(r, 2500));
        if (!isMounted) break;
        setStep(1); // Analyzing Data
        await new Promise(r => setTimeout(r, 2500));
        if (!isMounted) break;
        setStep(2); // Dashboard Zoom
        await new Promise(r => setTimeout(r, 6000));
      }
    };
    runSequence();
    return () => { isMounted = false; };
  }, []);

  return (
    <section id="platform" className="section" style={{ background: 'transparent', paddingBottom: '60px', paddingTop: '0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
           <h2 style={{ fontSize: '40px', color: 'white' }}>How Saadhyam AI <span className="text-gradient">Transforms Your Data</span></h2>
        </div>
        
        <div style={{ position: 'relative', minHeight: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center', perspective: '1000px' }}>
          <AnimatePresence mode="wait">
            
            {/* STATE 0: Data Ingestion */}
            {step === 0 && (
              <motion.div key="step0" initial={{ opacity: 0, y: 30, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }} transition={{ duration: 0.5 }}
                className="bento-card" style={{ width: '100%', maxWidth: '400px', padding: '40px', textAlign: 'center', background: 'rgba(20,20,20,0.9)' }}
              >
                <div style={{ background: 'rgba(59,130,246,0.1)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', border: '1px solid rgba(59,130,246,0.2)' }}>
                   <Activity size={32} color="var(--accent-blue)" />
                </div>
                <h3 style={{ color: 'white', fontSize: '24px', marginBottom: '10px' }}>Connecting Data Sources</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>Syncing with your business platforms automatically...</p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                   {['Google Analytics', 'Meta Ads', 'Sales CRM'].map((src, i) => (
                      <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.4 }}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}
                      >
                         <span style={{ color: 'white', fontSize: '14px' }}>{src}</span>
                         <CheckCircle size={16} color="#10b981" />
                      </motion.div>
                   ))}
                </div>
              </motion.div>
            )}

            {/* STATE 1: AI Processing */}
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }} transition={{ duration: 0.5 }}
                className="bento-card" style={{ width: '100%', maxWidth: '400px', padding: '40px', textAlign: 'center', background: 'rgba(20,20,20,0.9)', overflow: 'hidden', position: 'relative' }}
              >
                <motion.div animate={{ top: ['-20%', '120%'] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                  style={{ position: 'absolute', left: 0, right: 0, height: '4px', background: 'var(--accent-purple)', boxShadow: '0 0 20px 10px rgba(168, 85, 247, 0.4)', zIndex: 0 }}
                />
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{ background: 'rgba(168,85,247,0.1)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', border: '1px solid rgba(168,85,247,0.2)' }}>
                     <Cpu size={32} color="var(--accent-purple)" />
                  </div>
                  <h3 style={{ color: 'white', fontSize: '24px', marginBottom: '10px' }}>AI Engine Processing</h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>Analyzing patterns and spotting growth opportunities...</p>
                  
                  <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    {Array.from({length: 12}).map((_, i) => (
                       <motion.div key={i} animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1, delay: i * 0.1, repeat: Infinity }}
                         style={{ width: '30px', height: '8px', background: 'rgba(168,85,247,0.5)', borderRadius: '4px' }}
                       />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* STATE 2: The Dashboard */}
            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, scale: 0.8, rotateX: 10 }} animate={{ opacity: 1, scale: 1, rotateX: 0 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.8, type: 'spring' }}
                className="glass-panel" style={{ width: '100%', padding: '30px', borderRadius: '30px', transformStyle: 'preserve-3d' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                     <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(168, 85, 247, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(168, 85, 247, 0.2)' }}>
                       <LayoutDashboard size={20} color="var(--accent-purple)" />
                     </div>
                     <div>
                       <h4 style={{ fontSize: '18px', margin: 0, color: 'white' }}>Live Dashboard Generated! 🚀</h4>
                       <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-secondary)' }}>AI has mapped out your complete growth trajectory.</p>
                     </div>
                  </div>
                </div>

                <div className="dashboard-metrics" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '30px' }}>
                   {[
                     { label: 'Business Health', val: 78, sub: 'Good', icon: Activity, color: '#a855f7' },
                     { label: 'AI Visibility', val: 42, sub: 'Needs Improvement', icon: Search, color: '#f59e0b' },
                     { label: 'Lead Conversion', val: 61, sub: 'Average', icon: Users, color: '#ec4899' },
                     { label: 'Content Activity', val: 35, sub: 'Low', icon: FileText, color: '#3b82f6' }
                   ].map((m, i) => (
                     <div key={i} className="bento-card">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                          <m.icon size={18} color={m.color} />
                          <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-secondary)' }}>{m.label}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '5px' }}>
                          <span style={{ fontSize: '32px', fontWeight: 800, color: 'white' }}><AnimatedNumber value={m.val} /></span>
                          <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>/100</span>
                        </div>
                        <span style={{ fontSize: '12px', color: m.color, fontWeight: 500 }}>{m.sub}</span>
                     </div>
                   ))}
                </div>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginBottom: '20px' }}>
                  <div style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div className="bento-card" style={{ height: '100%' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                         <div>
                           <h4 style={{ fontSize: '16px', margin: 0, color: 'white' }}>Growth Trajectory</h4>
                           <p style={{ margin: 0, fontSize: '12px', color: 'var(--text-secondary)' }}>AI Visibility Score (Last 7 Days)</p>
                         </div>
                         <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(168, 85, 247, 0.1)', padding: '4px 10px', borderRadius: '100px', border: '1px solid rgba(168, 85, 247, 0.2)' }}>
                           <TrendingUp size={14} color="var(--accent-purple)" />
                           <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--accent-purple)' }}>+142%</span>
                         </div>
                      </div>
                      <div style={{ height: '240px', width: '100%' }}>
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart data={chartData}>
                            <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: 'var(--text-secondary)' }} />
                            <Tooltip cursor={{ stroke: 'rgba(168, 85, 247, 0.1)', strokeWidth: 2 }} contentStyle={{ backgroundColor: '#111', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', color: 'white', boxShadow: '0 10px 25px rgba(0,0,0,0.5)' }} />
                            <Line type="monotone" dataKey="value" stroke="var(--accent-purple)" strokeWidth={3} dot={{ r: 4, fill: '#111', strokeWidth: 2, stroke: 'var(--accent-purple)' }} activeDot={{ r: 6, fill: 'var(--accent-pink)', stroke: '#111', strokeWidth: 2 }} />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>

                  <div style={{ flex: '1 1 350px' }}>
                    <h4 style={{ fontSize: '16px', marginBottom: '16px', color: 'var(--text-secondary)' }}>Recommended Actions for You</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                       {[
                         { title: 'Ask 5 customers for Google reviews', impact: 'High Impact', icon: Globe },
                         { title: 'Post 1 offer on Instagram', impact: 'High Impact', icon: Camera },
                         { title: 'Send WhatsApp message to 10 leads', impact: 'Medium Impact', icon: Smartphone }
                       ].map((act, i) => (
                         <div key={i} className="bento-card" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px' }}>
                            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '10px', borderRadius: '12px' }}><act.icon size={20} color="white" /></div>
                            <div style={{ flex: 1 }}>
                              <p style={{ fontSize: '14px', fontWeight: 600, marginBottom: '6px', lineHeight: '1.3', color: 'white' }}>{act.title}</p>
                              <span style={{ fontSize: '11px', background: 'rgba(236,72,153,0.1)', color: '#ec4899', padding: '4px 8px', borderRadius: '100px', fontWeight: 600, border: '1px solid rgba(236,72,153,0.2)' }}>{act.impact}</span>
                            </div>
                         </div>
                       ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const AIAnalysis = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    let isMounted = true;
    const runSequence = async () => {
      while (isMounted) {
        setStep(0); // Scanning Market
        await new Promise(r => setTimeout(r, 3000));
        if (!isMounted) break;
        setStep(1); // Competitor Match
        await new Promise(r => setTimeout(r, 3000));
        if (!isMounted) break;
        setStep(2); // Final Insight
        await new Promise(r => setTimeout(r, 4500));
      }
    };
    runSequence();
    return () => { isMounted = false; };
  }, []);

  return (
    <section className="section" style={{ background: 'transparent' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '48px', marginBottom: '20px' }}>AI analyzes your business <span className="text-gradient">automatically</span></h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '18px', maxWidth: '800px', margin: '0 auto' }}>
            Saadhyam AI scans your business data, customer engagement, competitors, and growth performance to generate actionable recommendations.
          </p>
        </div>

        <div style={{ position: 'relative', height: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center', perspective: '1000px' }}>
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div key="scan" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 30 }} transition={{ duration: 0.5 }}
                className="bento-card" style={{ width: '100%', maxWidth: '800px', padding: '40px', background: 'rgba(20,20,20,0.9)', display: 'flex', gap: '40px', alignItems: 'center' }}
              >
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '28px', color: 'white', marginBottom: '10px', display: 'flex', alignItems: 'center' }}><Search color="var(--accent-blue)" style={{ marginRight: '10px' }} /> Scanning Market Data...</h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>Real-time analysis of audience engagement and market trends.</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                     {['Audience Sentiment', 'Local Search Volume', 'Engagement Rates'].map((item, i) => (
                       <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.05)', padding: '12px 20px', borderRadius: '8px' }}>
                         <span style={{ color: 'white', fontWeight: 500 }}>{item}</span>
                         <div style={{ background: 'rgba(255,255,255,0.1)', height: '6px', width: '150px', borderRadius: '3px', overflow: 'hidden' }}>
                            <motion.div animate={{ width: ['0%', '100%'] }} transition={{ duration: 2.5, ease: "easeInOut" }} style={{ height: '100%', background: 'var(--accent-blue)', borderRadius: '3px' }} />
                         </div>
                       </div>
                     ))}
                  </div>
                </div>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div key="compete" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 30 }} transition={{ duration: 0.5 }}
                className="bento-card" style={{ width: '100%', maxWidth: '800px', padding: '40px', background: 'rgba(20,20,20,0.9)', display: 'flex', gap: '40px', alignItems: 'center' }}
              >
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '28px', color: 'white', marginBottom: '10px', display: 'flex', alignItems: 'center' }}><Target color="var(--accent-pink)" style={{ marginRight: '10px' }} /> Competitor Intelligence</h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>Benchmarking your performance against top competitors in real-time.</p>
                  <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'flex-end', height: '180px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>
                     <motion.div initial={{ height: 0 }} animate={{ height: '60%' }} style={{ width: '60px', background: 'rgba(255,255,255,0.1)', borderRadius: '6px 6px 0 0', position: 'relative' }}><span style={{ position: 'absolute', bottom: '-25px', left: '50%', transform: 'translateX(-50%)', color: 'var(--text-secondary)', fontSize: '12px', fontWeight: 600 }}>Comp A</span></motion.div>
                     <motion.div initial={{ height: 0 }} animate={{ height: '100%' }} style={{ width: '60px', background: 'var(--accent-pink)', borderRadius: '6px 6px 0 0', position: 'relative', boxShadow: '0 0 20px rgba(236,72,153,0.5)' }}><span style={{ position: 'absolute', bottom: '-25px', left: '50%', transform: 'translateX(-50%)', color: 'white', fontSize: '14px', fontWeight: 'bold' }}>You</span></motion.div>
                     <motion.div initial={{ height: 0 }} animate={{ height: '80%' }} style={{ width: '60px', background: 'rgba(255,255,255,0.1)', borderRadius: '6px 6px 0 0', position: 'relative' }}><span style={{ position: 'absolute', bottom: '-25px', left: '50%', transform: 'translateX(-50%)', color: 'var(--text-secondary)', fontSize: '12px', fontWeight: 600 }}>Comp B</span></motion.div>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="insight" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.5, type: 'spring' }}
                className="bento-card" style={{ width: '100%', maxWidth: '800px', padding: '40px', background: 'rgba(20,20,20,0.9)', border: '1px solid var(--accent-purple)' }}
              >
                <div style={{ textAlign: 'center' }}>
                  <div style={{ background: 'rgba(168,85,247,0.1)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', border: '1px solid rgba(168,85,247,0.3)' }}>
                     <Sparkles size={32} color="var(--accent-purple)" />
                  </div>
                  <h3 style={{ fontSize: '32px', color: 'white', marginBottom: '10px' }}>Actionable Insights Found</h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>AI has identified 3 critical growth levers for this week.</p>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                   {[
                     { title: 'Launch Ad Campaign', desc: 'High demand detected in your area.', impact: 'High Return', color: '#10b981' },
                     { title: 'Content Update', desc: 'Competitor B dropped in rankings.', impact: 'Medium Effort', color: '#3b82f6' },
                     { title: 'Customer Retention', desc: 'Send 10% discount to past clients.', impact: 'Quick Win', color: '#f59e0b' }
                   ].map((item, i) => (
                     <div key={i} style={{ background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '12px', borderTop: `2px solid ${item.color}` }}>
                        <h4 style={{ color: 'white', marginBottom: '8px', fontSize: '15px' }}>{item.title}</h4>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '13px', marginBottom: '12px', lineHeight: '1.4' }}>{item.desc}</p>
                        <span style={{ fontSize: '11px', color: item.color, background: `${item.color}20`, padding: '4px 8px', borderRadius: '100px', fontWeight: 600 }}>{item.impact}</span>
                     </div>
                   ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const Workflow = () => {
  return (
    <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '48px', marginBottom: '20px' }}>From insight to execution <span className="text-gradient">automatically</span></h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '18px', maxWidth: '800px', margin: '0 auto' }}>
             See exactly how Saadhyam AI connects your tools, processes your data, and drives automated growth.
          </p>
        </div>

        {/* Unified Pipeline Card */}
        <div className="glass-panel" style={{ padding: '0', overflow: 'hidden', borderRadius: '30px', position: 'relative' }}>
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
              
              {/* Step 1: Connect Column */}
              <div style={{ padding: '50px', borderRight: '1px solid rgba(255,255,255,0.05)', position: 'relative', background: 'rgba(59, 130, 246, 0.02)' }}>
                 <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--accent-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px' }}>
                    <Database size={20} color="white" />
                 </div>
                 <h3 style={{ fontSize: '24px', color: 'white', marginBottom: '15px' }}>1. Connect</h3>
                 <p style={{ color: 'var(--text-secondary)', marginBottom: '30px', fontSize: '15px' }}>Secure, real-time connection to your business platforms.</p>
                 
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <div style={{ padding: '12px 16px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', color: 'white', fontSize: '14px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                       <Smartphone size={16} color="var(--text-secondary)" /> Instagram API
                    </div>
                    <div style={{ padding: '12px 16px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', color: 'white', fontSize: '14px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                       <Globe size={16} color="var(--text-secondary)" /> Website Analytics
                    </div>
                    <div style={{ padding: '12px 16px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', color: 'white', fontSize: '14px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                       <LayoutDashboard size={16} color="var(--text-secondary)" /> Sales CRM
                    </div>
                 </div>
              </div>

              {/* Step 2: Processing Column */}
              <div style={{ padding: '50px', borderRight: '1px solid rgba(255,255,255,0.05)', position: 'relative', background: 'rgba(168, 85, 247, 0.03)' }}>
                 <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--accent-purple)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px', boxShadow: '0 0 20px rgba(168,85,247,0.5)' }}>
                    <Cpu size={20} color="white" />
                 </div>
                 <h3 style={{ fontSize: '24px', color: 'white', marginBottom: '15px' }}>2. Process</h3>
                 <p style={{ color: 'var(--text-secondary)', marginBottom: '30px', fontSize: '15px' }}>The AI Engine detects patterns and formulates strategies.</p>

                 {/* Animated Processing Visual */}
                 <div style={{ height: '180px', border: '1px solid rgba(168,85,247,0.3)', borderRadius: '12px', background: 'rgba(0,0,0,0.4)', position: 'relative', overflow: 'hidden' }}>
                    <motion.div animate={{ top: ['-20%', '120%'] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }} style={{ position: 'absolute', left: 0, right: 0, height: '3px', background: 'var(--accent-purple)', boxShadow: '0 0 15px 5px rgba(168,85,247,0.5)' }} />
                    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px', opacity: 0.5 }}>
                       <div style={{ width: '80%', height: '8px', background: 'rgba(255,255,255,0.2)', borderRadius: '4px' }} />
                       <div style={{ width: '60%', height: '8px', background: 'rgba(255,255,255,0.2)', borderRadius: '4px' }} />
                       <div style={{ width: '90%', height: '8px', background: 'rgba(255,255,255,0.2)', borderRadius: '4px' }} />
                       <div style={{ width: '40%', height: '8px', background: 'rgba(255,255,255,0.2)', borderRadius: '4px' }} />
                       <div style={{ width: '70%', height: '8px', background: 'rgba(255,255,255,0.2)', borderRadius: '4px' }} />
                    </div>
                 </div>
              </div>

              {/* Step 3: Execution Column */}
              <div style={{ padding: '50px', position: 'relative', background: 'rgba(236, 72, 153, 0.02)' }}>
                 <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--accent-pink)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px' }}>
                    <Zap size={20} color="white" />
                 </div>
                 <h3 style={{ fontSize: '24px', color: 'white', marginBottom: '15px' }}>3. Execute</h3>
                 <p style={{ color: 'var(--text-secondary)', marginBottom: '30px', fontSize: '15px' }}>Automated actions deployed directly to your platforms.</p>

                 <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <div style={{ padding: '16px', background: 'rgba(236,72,153,0.05)', borderRadius: '12px', borderLeft: '3px solid var(--accent-pink)', display: 'flex', alignItems: 'center', gap: '15px' }}>
                       <Camera size={18} color="white" />
                       <span style={{ color: 'white', fontSize: '14px', fontWeight: 500 }}>Publish IG Reel</span>
                    </div>
                    <div style={{ padding: '16px', background: 'rgba(236,72,153,0.05)', borderRadius: '12px', borderLeft: '3px solid var(--accent-pink)', display: 'flex', alignItems: 'center', gap: '15px' }}>
                       <MessageSquare size={18} color="white" />
                       <span style={{ color: 'white', fontSize: '14px', fontWeight: 500 }}>Reply to Review</span>
                    </div>
                    <div style={{ padding: '16px', background: 'rgba(236,72,153,0.05)', borderRadius: '12px', borderLeft: '3px solid var(--accent-pink)', display: 'flex', alignItems: 'center', gap: '15px' }}>
                       <Mail size={18} color="white" />
                       <span style={{ color: 'white', fontSize: '14px', fontWeight: 500 }}>Send Promo Email</span>
                    </div>
                 </div>
              </div>

           </div>
        </div>
      </div>
    </section>
  );
};

const AnimatedGenerator = ({ title, subtitle, inputAction, generatedOutput, icon: Icon, color }) => {
  const [step, setStep] = useState(0); 
  
  useEffect(() => {
    const runSequence = async () => {
      setStep(0);
      await new Promise(r => setTimeout(r, 1000));
      setStep(1); 
      await new Promise(r => setTimeout(r, 2000));
      setStep(2); 
      await new Promise(r => setTimeout(r, 1500));
      setStep(3); 
      await new Promise(r => setTimeout(r, 4000));
      runSequence();
    };
    runSequence();
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center', marginBottom: '120px' }}>
      <div style={{ flex: '1 1 400px' }}>
        <h2 style={{ fontSize: '40px', marginBottom: '16px', color: 'white' }}>{title}</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '18px', marginBottom: '30px' }}>{subtitle}</p>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <span style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.05)', borderRadius: '100px', color: 'var(--text-secondary)', fontSize: '14px' }}>Fast</span>
          <span style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.05)', borderRadius: '100px', color: 'var(--text-secondary)', fontSize: '14px' }}>Automated</span>
          <span style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.05)', borderRadius: '100px', color: 'var(--text-secondary)', fontSize: '14px' }}>Scalable</span>
        </div>
      </div>

      <div className="bento-card" style={{ flex: '1 1 400px', minHeight: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '16px', marginBottom: '20px' }}>
           <p style={{ margin: 0, color: 'white', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
             <Icon size={16} color={color} /> 
             {step === 0 ? <span style={{ opacity: 0.5 }}>Waiting for input...</span> : inputAction}
           </p>
        </div>

        <div style={{ height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {step === 1 && (
            <div style={{ display: 'flex', gap: '8px' }}>
              <div className="typing-dot" /><div className="typing-dot" /><div className="typing-dot" />
            </div>
          )}
          {step === 2 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: color, fontWeight: 600, display: 'flex', alignItems: 'center', gap: '10px' }}>
              <RefreshCw size={18} className="logo-img" style={{ animation: 'logoFloat 1s infinite' }} /> Generating AI Output...
            </motion.div>
          )}
          {step === 3 && (
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} 
              style={{ background: `rgba(${color === 'var(--accent-pink)' ? '236,72,153' : '59,130,246'}, 0.1)`, border: `1px solid ${color}`, padding: '20px', borderRadius: '16px', width: '100%' }}
            >
               <h4 style={{ color: 'white', margin: '0 0 8px 0' }}>Success</h4>
               <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '14px' }}>{generatedOutput}</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}

const ContentStudioAndAutomation = () => {
  return (
    <section id="solutions" className="section" style={{ background: 'transparent' }}>
      <div className="container">
        
        <AnimatedGenerator 
          title="AI creates content that drives results"
          subtitle="Generate highly converting social posts, ad copies, and emails in seconds."
          inputAction="Create an Instagram post for weekend sale..."
          generatedOutput="🎉 Weekend Flash Sale! Get 20% OFF all services. Limited slots available, book now! #Sale"
          icon={PenTool}
          color="var(--accent-pink)"
        />

        <AnimatedGenerator 
          title="Smart automation for modern businesses"
          subtitle="Let AI handle customer replies, scheduling, and workflow triggers automatically."
          inputAction="New Google Review received: 5 Stars!"
          generatedOutput="AI Auto-Reply Sent: 'Thank you so much for the 5 stars! We look forward to seeing you again soon!'"
          icon={Cpu}
          color="var(--accent-blue)"
        />

      </div>
    </section>
  );
};

const AEOSection = () => {
  return (
    <section className="section" style={{ background: 'transparent' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '48px', marginBottom: '20px' }}>Optimized for <span className="text-gradient">AI-powered search</span> systems</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '18px', maxWidth: '800px', margin: '0 auto' }}>
            Saadhyam AI structures business content for Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) to improve visibility.
          </p>
        </div>
        <div className="aeo-geo-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
          <div className="bento-card" style={{ padding: '40px' }}>
             <h3 style={{ fontSize: '24px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px', color: 'white' }}>
               <Search color="var(--accent-purple)" /> AEO Features
             </h3>
             <ul style={{ listStyle: 'none', padding: 0 }}>
               {['FAQ-based structured content', 'Voice-search optimization', 'AI answer formatting', 'Search visibility enhancement'].map((f, i) => (
                 <li key={i} style={{ padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)' }}>
                   <CheckCircle size={16} color="var(--accent-purple)" /> {f}
                 </li>
               ))}
             </ul>
          </div>
          <div className="bento-card" style={{ padding: '40px' }}>
             <h3 style={{ fontSize: '24px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px', color: 'white' }}>
               <Globe color="var(--accent-pink)" /> GEO Features
             </h3>
             <ul style={{ listStyle: 'none', padding: 0 }}>
               {['Context-rich content generation', 'Brand trust signals', 'AI recommendation optimization', 'Intelligent content structuring'].map((f, i) => (
                 <li key={i} style={{ padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)' }}>
                   <CheckCircle size={16} color="var(--accent-pink)" /> {f}
                 </li>
               ))}
             </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

const AIAssistant = () => {
  const capabilities = ['Generate growth strategies', 'Analyze competitors', 'Create campaigns', 'Generate marketing content', 'Suggest business improvements', 'Optimize customer engagement'];
  return (
    <section className="section" style={{ background: 'linear-gradient(180deg, rgba(168, 85, 247, 0.05), transparent)' }}>
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '60px' }}>
        <div style={{ flex: '1 1 400px' }}>
          <h2 style={{ fontSize: '48px', marginBottom: '24px' }}>Meet your AI Growth <span className="text-gradient">Assistant</span></h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0' }}>
             {capabilities.map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', fontSize: '16px', fontWeight: 500, color: 'var(--text-secondary)' }}>
                  <div style={{ background: 'rgba(168, 85, 247, 0.1)', borderRadius: '50%', padding: '4px', border: '1px solid rgba(168, 85, 247, 0.2)' }}>
                    <Zap size={16} color="var(--accent-purple)" />
                  </div>
                  {item}
                </li>
             ))}
          </ul>
        </div>
        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="bento-card" style={{ flex: '1 1 400px', height: '400px', padding: '30px', display: 'flex', flexDirection: 'column' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '16px' }}>
            <Logo width="24px" height="24px" withGlow={false} />
            <span style={{ fontWeight: 600, color: 'white' }}>Saadhyam Assistant</span>
          </div>
          <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ alignSelf: 'flex-end', background: 'rgba(255,255,255,0.05)', padding: '16px', borderRadius: '16px 16px 0 16px', maxWidth: '80%', border: '1px solid rgba(255,255,255,0.05)' }}>
              <p style={{ margin: 0, fontSize: '14px', color: 'white' }}>How can we improve Q3 conversion rates for our local business?</p>
            </div>
            <div style={{ alignSelf: 'flex-start', background: 'rgba(168, 85, 247, 0.1)', padding: '16px', borderRadius: '16px 16px 16px 0', maxWidth: '80%', border: '1px solid rgba(168, 85, 247, 0.2)' }}>
              <div style={{ display: 'flex', gap: '4px', marginBottom: '12px' }}>
                 <div className="typing-dot" /><div className="typing-dot" /><div className="typing-dot" />
              </div>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.5, duration: 0.5 }}>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.6', color: 'white' }}>
                  Based on your current traffic and competitor analysis, I recommend deploying a hyper-personalized WhatsApp sequence and a new Weekend Offer. <br/><br/>
                  I have automatically drafted the content. Shall I schedule the campaign?
                </p>
                <div style={{ marginTop: '16px', display: 'flex', gap: '10px' }}>
                   <button style={{ background: 'linear-gradient(135deg, #9333ea, #ec4899)', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', fontSize: '12px', fontWeight: 600 }}>Schedule Campaign</button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const TrustAndBenefits = () => {
  const businesses = ['Restaurants', 'Salons', 'Startups', 'Agencies', 'E-commerce Brands', 'Coaches', 'Healthcare Clinics', 'Real Estate Companies', 'Local Businesses'];
  return (
    <section className="section" style={{ textAlign: 'center' }}>
      <div className="container">
        <h3 style={{ fontSize: '32px', marginBottom: '24px', color: 'white' }}>Built for scale. Designed for trust.</h3>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap', marginBottom: '80px' }}>
           {[
             { title: 'Secure Authentication', icon: Lock }, { title: 'AI-Powered Insights', icon: BarChart3 },
             { title: 'Real-Time Analytics', icon: Activity }, { title: 'Scalable Infrastructure', icon: Cpu },
             { title: '24/7 Support', icon: Headphones }
           ].map((t, i) => (
             <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontWeight: 500 }}>
                <t.icon size={18} color="var(--accent-purple)" /> {t.title}
             </div>
           ))}
        </div>
        <h3 style={{ fontSize: '24px', marginBottom: '24px', color: 'var(--text-secondary)' }}>Empowering Businesses Everywhere</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px' }}>
          {businesses.map((b, i) => (
            <span key={i} style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '14px', fontWeight: 600, color: 'var(--text-secondary)' }}>{b}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

const CTA = ({ onOpenModal }) => {
  return (
    <section className="section" style={{ position: 'relative', overflow: 'hidden', padding: '120px 0' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', height: '80%', background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 60%)', zIndex: 0 }} />
      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <Logo width="80px" height="80px" style={{ marginBottom: '30px' }} />
          <h2 style={{ fontSize: '56px', marginBottom: '20px', maxWidth: '800px', margin: '0 auto 20px', lineHeight: '1.1' }}>
            Start building your AI-powered <br/><span className="text-gradient">business growth system today.</span>
          </h2>
          <button className="btn-primary" onClick={onOpenModal} style={{ padding: '20px 48px', fontSize: '20px', boxShadow: '0 20px 40px -10px rgba(168, 85, 247, 0.5)' }}>
            Launch Your AI Business System <ArrowRight size={24} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = ({ onNavigate }) => {
  const handleClick = (path) => (e) => {
    e.preventDefault();
    onNavigate(path);
  };
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '60px 0', background: 'rgba(0,0,0,0.4)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Logo width="28px" height="28px" withGlow={false} />
          <span style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: '20px', letterSpacing: '-0.5px' }}>Saadhyam AI</span>
        </div>
        <div style={{ display: 'flex', gap: '24px', fontSize: '14px', color: 'var(--text-secondary)' }}>
          <p style={{ margin: 0, fontWeight: 600 }}>Powered by MentNeo</p>
        </div>
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          <a href="/about" onClick={handleClick('/about')} style={{ textDecoration: 'none', color: 'var(--text-secondary)', fontSize: '14px', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>About Us</a>
          <a href="/contact" onClick={handleClick('/contact')} style={{ textDecoration: 'none', color: 'var(--text-secondary)', fontSize: '14px', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>Contact Us</a>
          <a href="/privacy" onClick={handleClick('/privacy')} style={{ textDecoration: 'none', color: 'var(--text-secondary)', fontSize: '14px', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>Privacy Policy</a>
          <a href="/terms" onClick={handleClick('/terms')} style={{ textDecoration: 'none', color: 'var(--text-secondary)', fontSize: '14px', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>Terms & Conditions</a>
          <a href="/refund" onClick={handleClick('/refund')} style={{ textDecoration: 'none', color: 'var(--text-secondary)', fontSize: '14px', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>Refund Policy</a>
        </div>
      </div>
    </footer>
  );
};

const AnalyticsVisual = () => {
  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Radar AI Scanner</span>
        <span style={{ fontSize: '11px', background: 'rgba(168,85,247,0.1)', color: 'var(--accent-purple)', padding: '2px 8px', borderRadius: '100px' }}>Scanning...</span>
      </div>
      <div style={{ height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <motion.div 
          animate={{ scale: [1, 2], opacity: [0.5, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
          style={{ position: 'absolute', width: '50px', height: '50px', borderRadius: '50%', border: '1px solid var(--accent-purple)' }}
        />
        <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'var(--accent-purple)', boxShadow: '0 0 10px var(--accent-purple)' }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', padding: '6px', background: 'rgba(255,255,255,0.03)', borderRadius: '6px' }}>
          <span>Search trends detected</span>
          <span style={{ color: '#10b981' }}>+124%</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', padding: '6px', background: 'rgba(255,255,255,0.03)', borderRadius: '6px' }}>
          <span>Competitor rank dropped</span>
          <span style={{ color: '#10b981' }}>Comp B</span>
        </div>
      </div>
    </div>
  );
};

const GrowthVisual = () => {
  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>AEO / GEO Optimizer</span>
        <span style={{ fontSize: '11px', background: 'rgba(59,130,246,0.1)', color: 'var(--accent-blue)', padding: '2px 8px', borderRadius: '100px' }}>Optimized</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {[
          { name: 'Schema Structured Data', checked: true },
          { name: 'Google Maps Sync', checked: true },
          { name: 'AI Search Recommendation Rank', checked: false }
        ].map((item, idx) => (
          <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px' }}>
            <div style={{ width: '16px', height: '16px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: item.checked ? 'var(--accent-blue)' : 'transparent' }}>
              {item.checked && <Check size={10} color="white" />}
            </div>
            <span style={{ color: item.checked ? 'white' : 'var(--text-secondary)' }}>{item.name}</span>
          </div>
        ))}
      </div>
      <div style={{ height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
        <motion.div animate={{ width: '66%' }} transition={{ duration: 1 }} style={{ height: '100%', background: 'var(--accent-blue)' }} />
      </div>
    </div>
  );
};

const MarketingVisual = () => {
  const [subTab, setSubTab] = useState('instagram'); // 'instagram' or 'whatsapp'
  const [likes, setLikes] = useState(124);
  const [whatsappStep, setWhatsappStep] = useState(0);

  // Auto cycle sub-tabs inside MarketingVisual
  useEffect(() => {
    const interval = setInterval(() => {
      setSubTab(prev => (prev === 'instagram' ? 'whatsapp' : 'instagram'));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Increment likes for Instagram
  useEffect(() => {
    if (subTab !== 'instagram') return;
    const interval = setInterval(() => {
      setLikes(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 1500);
    return () => clearInterval(interval);
  }, [subTab]);

  // Animate WhatsApp messages step by step
  useEffect(() => {
    if (subTab !== 'whatsapp') return;
    setWhatsappStep(0);
    const timers = [
      setTimeout(() => setWhatsappStep(1), 1000),
      setTimeout(() => setWhatsappStep(2), 2500),
      setTimeout(() => setWhatsappStep(3), 4500)
    ];
    return () => timers.forEach(clearTimeout);
  }, [subTab]);

  return (
    <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {/* Switcher Header */}
      <div style={{ display: 'flex', gap: '6px', background: 'rgba(255,255,255,0.03)', padding: '4px', borderRadius: '8px' }}>
        <button 
          onClick={(e) => { e.stopPropagation(); setSubTab('instagram'); }} 
          style={{ 
            flex: 1, padding: '6px', fontSize: '11px', border: 'none', borderRadius: '6px', cursor: 'pointer',
            background: subTab === 'instagram' ? 'rgba(236,72,153,0.15)' : 'transparent',
            color: subTab === 'instagram' ? 'var(--accent-pink)' : 'var(--text-secondary)',
            fontWeight: 600, transition: 'all 0.3s'
          }}
        >
          Instagram Ad
        </button>
        <button 
          onClick={(e) => { e.stopPropagation(); setSubTab('whatsapp'); }} 
          style={{ 
            flex: 1, padding: '6px', fontSize: '11px', border: 'none', borderRadius: '6px', cursor: 'pointer',
            background: subTab === 'whatsapp' ? 'rgba(16,185,129,0.15)' : 'transparent',
            color: subTab === 'whatsapp' ? '#10b981' : 'var(--text-secondary)',
            fontWeight: 600, transition: 'all 0.3s'
          }}
        >
          WhatsApp CRM
        </button>
      </div>

      {subTab === 'instagram' ? (
        /* Instagram Mockup UI */
        <div style={{ background: '#121212', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', overflow: 'hidden' }}>
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 12px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'linear-gradient(135deg, #a855f7, #ec4899)', padding: '1px' }}>
              <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <img src="https://i.ibb.co/rRhY66tN/Whats-App-Image-2026-05-11-at-8-22-35-PM-removebg-preview.png" style={{ width: '80%', height: '80%', objectFit: 'contain' }} />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
              <span style={{ fontSize: '11px', color: 'white', fontWeight: 600 }}>saadhyam.ai</span>
              <span style={{ fontSize: '9px', color: 'var(--text-secondary)' }}>Sponsored</span>
            </div>
          </div>

          {/* Post Image Container */}
          <div style={{ height: '120px', background: 'linear-gradient(135deg, #1e1b4b, #311042)', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px' }}>
            <div style={{ textAlign: 'center', zIndex: 1 }}>
              <span style={{ fontSize: '10px', background: 'rgba(255,255,255,0.1)', color: 'white', padding: '4px 8px', borderRadius: '100px' }}>AI GROWTH ENGINE</span>
              <h4 style={{ fontSize: '16px', margin: '6px 0 0', color: 'white', fontWeight: 800 }}>Scale 10X Automatically</h4>
            </div>
            <div style={{ position: 'absolute', bottom: '8px', right: '8px', background: 'rgba(0,0,0,0.6)', padding: '4px 8px', borderRadius: '4px', fontSize: '9px', color: 'white' }}>
              Learn More
            </div>
          </div>

          {/* Interaction Bar */}
          <div style={{ padding: '8px 12px' }}>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '4px' }}>
              <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} style={{ color: 'var(--accent-pink)', fontSize: '14px', cursor: 'pointer' }}>❤️</motion.span>
              <span style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>💬</span>
              <span style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>✈️</span>
            </div>
            <div style={{ fontSize: '11px', color: 'white', fontWeight: 600, marginBottom: '2px' }}>
              {likes} likes
            </div>
            <div style={{ fontSize: '11px', lineHeight: '1.3', color: 'white' }}>
              <span style={{ fontWeight: 600, marginRight: '4px' }}>saadhyam.ai</span>
              <span style={{ color: 'var(--text-secondary)' }}>Automate customer acquisition, reviews, maps ranks, and socials. Launch campaigns in 1 click! 🚀</span>
            </div>
          </div>
        </div>
      ) : (
        /* WhatsApp Mockup UI */
        <div style={{ background: '#0b141a', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', overflow: 'hidden' }}>
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 12px', background: '#202c33' }}>
            <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '11px', color: 'white' }}>💬</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
              <span style={{ fontSize: '11px', color: 'white', fontWeight: 600 }}>Saadhyam Growth Agent</span>
              <span style={{ fontSize: '9px', color: '#10b981' }}>online</span>
            </div>
          </div>

          {/* Chat Workspace */}
          <div style={{ padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px', minHeight: '140px', background: '#0b141a', backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '16px 16px' }}>
            {whatsappStep >= 1 && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} style={{ alignSelf: 'flex-start', background: '#202c33', color: 'white', padding: '6px 10px', borderRadius: '0 10px 10px 10px', fontSize: '11px', maxWidth: '85%' }}>
                Hi, I'm interested in automating my salon's local search rank.
              </motion.div>
            )}
            
            {whatsappStep >= 2 && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} style={{ alignSelf: 'flex-end', background: '#005c4b', color: 'white', padding: '6px 10px', borderRadius: '10px 0 10px 10px', fontSize: '11px', maxWidth: '85%' }}>
                Hello! We can set up auto-review campaigns and GEO optimization. Would you like to confirm a free trial setup?
              </motion.div>
            )}

            {whatsappStep >= 3 && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} style={{ alignSelf: 'flex-end', background: '#005c4b', color: 'white', padding: '10px', borderRadius: '10px', fontSize: '11px', width: '90%', border: '1px solid rgba(16,185,129,0.3)' }}>
                <div style={{ fontWeight: 600, borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '4px', marginBottom: '6px' }}>Saadhyam AI Automation</div>
                <span>Click below to claim your setup slot:</span>
                <div style={{ background: '#202c33', color: '#10b981', textAlign: 'center', padding: '6px', borderRadius: '6px', marginTop: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
                  🎯 Confirm Free Setup
                </div>
              </motion.div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const CommunicationVisual = () => {
  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px', height: '100%', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>AI Agents Interaction</span>
        <span style={{ fontSize: '11px', background: 'rgba(168,85,247,0.1)', color: 'var(--accent-purple)', padding: '2px 8px', borderRadius: '100px' }}>Active</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '11px' }}>
        <div style={{ alignSelf: 'flex-start', background: 'rgba(255,255,255,0.05)', padding: '8px 12px', borderRadius: '12px 12px 12px 0', maxWidth: '85%', color: 'white' }}>
          "Are you open on Sunday evening for bookings?"
        </div>
        <div style={{ alignSelf: 'flex-end', background: 'rgba(168,85,247,0.1)', padding: '8px 12px', borderRadius: '12px 12px 0 12px', maxWidth: '85%', color: 'white', border: '1px solid rgba(168,85,247,0.2)' }}>
          "Yes, we are open until 9 PM. Would you like to schedule?"
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent-purple)', fontSize: '11px', fontWeight: 600 }}>
        <RefreshCw size={12} className="logo-img" /> AI Voice agent speaking...
      </div>
    </div>
  );
};

const EcosystemVisual = () => {
  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Workspace Plugins</span>
        <span style={{ fontSize: '11px', background: 'rgba(236,72,153,0.1)', color: 'var(--accent-pink)', padding: '2px 8px', borderRadius: '100px' }}>Connected</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {[
          { name: 'Firebase Database', active: true },
          { name: 'Meta Ads Manager', active: true },
          { name: 'WhatsApp API', active: false }
        ].map((item, idx) => (
          <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px' }}>
            <span style={{ fontSize: '12px', color: 'white' }}>{item.name}</span>
            <div style={{ width: '32px', height: '18px', borderRadius: '100px', background: item.active ? 'var(--accent-pink)' : 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', padding: '2px', cursor: 'pointer', transition: 'all 0.3s' }}>
              <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: 'white', transform: item.active ? 'translateX(14px)' : 'translateX(0)', transition: 'all 0.3s' }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const featuresTranslations = {
  en: {
    title: "All-in-One AI Business Suite",
    subtitle: "Discover all the features built to automate, optimize, and scale your operations effortlessly.",
    categories: [
      {
        name: "Strategy & Analytics",
        desc: "Track, analyze, and forecast your performance.",
        features: [
          { name: "Dashboard", desc: "Real-time console mapping conversions and analytics." },
          { name: "Business Analysis", desc: "Automated analysis uncovering leaks and opportunities." },
          { name: "Radar AI", desc: "24/7 scanning of local market trends and audience demand." },
          { name: "Competitor Analysis", desc: "Real-time benchmarking against top regional competitors." },
          { name: "Daily Suggestions", desc: "Tailored AI action plans refreshed every morning." }
        ]
      },
      {
        name: "Growth & Optimization",
        desc: "Rank higher in answer engines and sync maps.",
        features: [
          { name: "AEO & GEO", desc: "Optimizing structured content for AI search queries." },
          { name: "Google Hub", desc: "Sync Google Reviews, business status, and local rankings." },
          { name: "Website AI", desc: "Autonomous SEO enhancements and intelligent search widget." },
          { name: "Plugins Store", desc: "Expand operations with modular plugins from our catalog." },
          { name: "Pricing", desc: "Optimizing margins and tiers dynamically based on demand." }
        ]
      },
      {
        name: "Marketing & Content",
        desc: "Create campaigns and schedule socials instantly.",
        features: [
          { name: "Content Creator", desc: "Generative copywriter for social posts, ads, and letters." },
          { name: "Social Media", desc: "Scheduling calendars and auto-posting for major platforms." },
          { name: "Meta Ads", desc: "Build, deploy, and target local ads on autopilot." },
          { name: "WhatsApp Sales", desc: "Broadcasting and interactive WhatsApp drip campaigns." }
        ]
      },
      {
        name: "AI Communication",
        desc: "Autopilot customer calls, chat, and reviews.",
        features: [
          { name: "AI Agents", desc: "Virtual employees handling workflows and scheduled actions." },
          { name: "AI Voice Agent", desc: "24/7 customer service calls and booking manager." },
          { name: "Review Reply", desc: "Autopilot replies responding to public reviews." },
          { name: "B2B Chat", desc: "Instant messaging connecting you to vendors and partners." }
        ]
      },
      {
        name: "Workspace Control",
        desc: "Manage permissions, keys, and sync databases.",
        features: [
          { name: "B2B Network", desc: "Directory linking with supplier chains and business leads." },
          { name: "Settings", desc: "Centralized configurations for credentials and model weights." },
          { name: "Support", desc: "24/7 live assistance and AI-powered ticket troubleshooter." }
        ]
      }
    ]
  },
  te: {
    title: "ఆల్-ఇన్-వన్ AI బిజినెస్ సూట్",
    subtitle: "మీ వ్యాపారాన్ని ఆటోమేట్ చేయడానికి, ఆప్టిమైజ్ చేయడానికి మరియు స్కేల్ చేయడానికి అవసరమైన అన్ని ఫీచర్లు.",
    categories: [
      {
        name: "వ్యూహం & విశ్లేషణ",
        desc: "మీ వ్యాపార ప్రగతిని ట్రాక్ చేయండి మరియు విశ్లేషించండి.",
        features: [
          { name: "డ్యాష్‌బోర్డ్", desc: "రియల్ టైమ్ కన్వర్షన్స్ మరియు అనలిటిక్స్ మ్యాపింగ్." },
          { name: "బిజినెస్ అనాలిసిస్", desc: "వ్యాపార సమస్యలను గుర్తించే స్వయంచాలక విశ్లేషణ." },
          { name: "రాడార్ AI", desc: "స్థానిక మార్కెట్ ట్రెండ్స్ సేకరించే 24/7 స్కానర్." },
          { name: "పోటీదారుల విశ్లేషణ", desc: "టాప్ పోటీదారులతో మీ ప్రగతిని సరిపోల్చండి." },
          { name: "రోజువారీ సూచనలు", desc: "ప్రతి ఉదయం అందించబడే AI కార్యాచరణ ప్రణాళికలు." }
        ]
      },
      {
        name: "వృద్ధి & ఆప్టిమైజేషన్",
        desc: "సెర్చ్ ఇంజిన్లలో ర్యాంక్ పెంచండి మరియు మ్యాప్స్ సింక్ చేయండి.",
        features: [
          { name: "AEO & GEO", desc: "AI సెర్చ్ క్వెరీల కోసం కంటెంట్ ఆప్టిమైజ్ చేయడం." },
          { name: "గూగుల్ హబ్", desc: "గూగుల్ రివ్యూలు, లోకల్ ర్యాంకింగ్స్ సింక్ చేయడం." },
          { name: "వెబ్‌సైట్ AI", desc: "స్వయంప్రతిపత్త SEO మెరుగుదలలు మరియు చాట్ విడ్జెట్." },
          { name: "ప్లగిన్ల స్టోర్", desc: "మా కాటలాగ్ నుండి అదనపు ఫీచర్లు జోడించండి." },
          { name: "ధరలు", desc: "డిమాండ్ ఆధారంగా ధరల ప్యాకేజీల ఆప్టిమైజేషన్." }
        ]
      },
      {
        name: "మార్కెటింగ్ & కంటెంట్",
        desc: "సోషల్ మీడియా కంటెంట్ సృష్టించండి మరియు షెడ్యూల్ చేయండి.",
        features: [
          { name: "కంటెంట్ క్రియేటర్", desc: "పోస్ట్‌లు, ప్రకటనల కోసం జనరేటివ్ రైటర్." },
          { name: "సోషల్ మీడియా", desc: "షెడ్యూలింగ్ క్యాలెండర్లు మరియు ఆటో-పోస్టింగ్." },
          { name: "మెటా యాడ్స్", desc: "ఫేస్‌బుక్ మరియు ఇన్‌స్టాగ్రామ్ యాడ్స్ ఆటోపైలట్ బిల్డర్." },
          { name: "వాట్సాప్ సేల్స్", desc: "వాట్సాప్ బ్రాడ్‌కాస్టింగ్ మరియు డ్రిప్ క్యాంపెయిన్లు." }
        ]
      },
      {
        name: "AI కమ్యూనికేషన్",
        desc: "కస్టమర్ కాల్స్, చాట్ మరియు రివ్యూలు ఆటోపైలట్ చేయండి.",
        features: [
          { name: "AI ఏజెంట్లు", desc: "వర్క్‌ఫ్లోలను నిర్వహించే వర్చువల్ ఉద్యోగులు." },
          { name: "AI వాయిస్ ఏజెంట్", desc: "కస్టమర్ కాల్స్ మరియు అపాయింట్‌మెంట్ మేనేజర్." },
          { name: "రివ్యూ రిప్లై", desc: "రివ్యూలకు తక్షణమే ఆటోమేటిక్ సమాధానాలు." },
          { name: "B2B చాట్", desc: "సరఫరాదారులు మరియు భాగస్వాములతో చాట్ చేయడం." }
        ]
      },
      {
        name: "వర్క్‌స్పేస్ నియంత్రణ",
        desc: "అనుమతులు, కీలు మరియు డేటాబేస్ నిర్వహించండి.",
        features: [
          { name: "B2B నెట్‌వర్క్", desc: "సరఫరాదారులు మరియు లీడ్స్‌తో అనుసంధానించే డైరెక్టరీ." },
          { name: "సెట్టింగులు", desc: "API క్రెడెన్షియల్స్ మరియు కంట్రోల్ కాన్ఫిగరేషన్లు." },
          { name: "సపోర్ట్", desc: "24/7 లైవ్ అసిస్టెన్స్ మరియు AI టికెట్ సిస్టమ్." }
        ]
      }
    ]
  },
  hi: {
    title: "ऑल-इन-वन एआई बिजनेस सूट",
    subtitle: "संचालन को स्वचालित, अनुकूलित और आसानी से स्केल करने के लिए निर्मित विशेषताएं।",
    categories: [
      {
        name: "रणनीति और विश्लेषण",
        desc: "अपने प्रदर्शन को ट्रैक, विश्लेषण और पूर्वानुमान करें।",
        features: [
          { name: "डैशबोर्ड", desc: "वास्तविक समय के रूपांतरण और विश्लेषण को प्रदर्शित करने वाला कंसोल।" },
          { name: "व्यावसायिक विश्लेषण", desc: "राजस्व लीक और अवसरों को उजागर करने वाला स्वचालित विश्लेषण।" },
          { name: "रडार एआई", desc: "स्थानीय बाजार के रुझान और दर्शक मांग की 24/7 स्कैनिंग।" },
          { name: "प्रतिस्पर्धी विश्लेषण", desc: "क्षेत्रीय प्रतिस्पर्धियों के खिलाफ वास्तविक समय बेंचमार्किंग।" },
          { name: "दैनिक सुझाव", desc: "हर सुबह अपडेट होने वाली अनुरूपित एआई कार्य योजनाएं।" }
        ]
      },
      {
        name: "विकास और अनुकूलन",
        desc: "खोज इंजनों में उच्च रैंक प्राप्त करें और मैप्स सिंक करें।",
        features: [
          { name: "AEO और GEO", desc: "एआई खोज प्रश्नों के लिए सामग्री का अनुकूलन।" },
          { name: "गूगल हब", desc: "गूगल समीक्षाएं, व्यावसायिक स्थिति और स्थानीय रैंकिंग सिंक करें।" },
          { name: "वेबसाइट एआई", desc: "स्वायत्त SEO संवर्द्धन और बुद्धिमान खोज विजेट।" },
          { name: "प्लगइन्स स्टोर", desc: "हमारे कैटलॉग से मॉड्यूलर प्लगइन्स जोड़ें।" },
          { name: "मूल्य निर्धारण", desc: "मांग के आधार पर मूल्य निर्धारण का अनुकूलन।" }
        ]
      },
      {
        name: "विपणन और सामग्री",
        desc: "अभियान बनाएं और सामाजिक पोस्ट तुरंत शेड्यूल करें।",
        features: [
          { name: "सामग्री निर्माता", desc: "सोशल पोस्ट, विज्ञापनों और पत्रों के लिए जनरेटिव कॉपीराइटर।" },
          { name: "सोशल मीडिया", desc: "प्रमुख प्लेटफार्मों के लिए शेड्यूलिंग कैलेंडर और ऑटो-पोस्टिंग।" },
          { name: "मेटा विज्ञापन", desc: "ऑटोपायलट विज्ञापन बिल्डर और स्थानीय दर्शकों के लिए लक्ष्यीकरण।" },
          { name: "व्हाट्सएप बिक्री", desc: "ब्रॉडकास्टिंग और इंटरैक्टिव व्हाट्सएप ड्रिप अभियान।" }
        ]
      },
      {
        name: "एआई संचार",
        desc: "ग्राहक कॉल, चैट और समीक्षाओं को ऑटोपायलट करें।",
        features: [
          { name: "एआई एजेंट", desc: "जटिल कार्यों और वर्कफ़्लो को संभालने वाले आभासी कर्मचारी।" },
          { name: "एआई वॉयस एजेंट", desc: "24/7 ग्राहक सेवा कॉल और अपॉइंटमेंट मैनेजर।" },
          { name: "समीक्षा उत्तर", desc: "सार्वजनिक समीक्षाओं के लिए तत्काल ऑटोपायलट उत्तर।" },
          { name: "B2B चैट", desc: "विक्रेताओं और भागीदारों से जुड़ने वाला त्वरित संदेश।" }
        ]
      },
      {
        name: "कार्यस्थान नियंत्रण",
        desc: "अनुमतियों, कुंजियों और डेटाबेस को प्रबंधित करें।",
        features: [
          { name: "B2B नेटवर्क", desc: "आपूर्तिकर्ताओं और व्यावसायिक लीड्स से जोड़ने वाली निर्देशिका।" },
          { name: "सेटिंग्स", desc: "क्रेडेंशियल्स और मॉडल कॉन्फ़िगरेशन के लिए केंद्रीय नियंत्रण।" },
          { name: "समर्थन", desc: "24/7 लाइव सहायता और एआई-संचालित टिकट प्रणाली।" }
        ]
      }
    ]
  }
};

const FeaturesConsole = ({ lang }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % 5);
    }, 7000);
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const ft = featuresTranslations[lang] || featuresTranslations.en;
  const currentCategory = ft.categories[activeTab] || ft.categories[0];

  const categoryIcons = [BarChart3, TrendingUp, PenTool, MessageSquare, Settings];

  const renderVisual = () => {
    switch (activeTab) {
      case 0:
        return <AnalyticsVisual />;
      case 1:
        return <GrowthVisual />;
      case 2:
        return <MarketingVisual />;
      case 3:
        return <CommunicationVisual />;
      case 4:
        return <EcosystemVisual />;
      default:
        return null;
    }
  };

  return (
    <section id="features" className="section" style={{ background: 'transparent' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '48px', marginBottom: '20px', color: 'white' }}>
            {ft.title.split(' ')[0]} <span className="text-gradient">{ft.title.split(' ').slice(1).join(' ')}</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '18px', maxWidth: '800px', margin: '0 auto' }}>
            {ft.subtitle}
          </p>
        </div>

        <div className="features-console-grid glass-panel" style={{ padding: '0', minHeight: '520px', overflow: 'hidden' }}>
          {/* Sidebar Tabs */}
          <div style={{ borderRight: '1px solid rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.2)', padding: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {ft.categories.map((cat, idx) => {
                const Icon = categoryIcons[idx];
                const isActive = activeTab === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => { setActiveTab(idx); setIsAutoPlay(false); }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '16px',
                      background: isActive ? 'rgba(255, 255, 255, 0.04)' : 'transparent',
                      border: 'none',
                      borderRadius: '12px',
                      cursor: 'pointer',
                      textAlign: 'left',
                      width: '100%',
                      transition: 'all 0.3s'
                    }}
                  >
                    <div style={{
                      background: isActive ? 'linear-gradient(135deg, #9333ea, #ec4899)' : 'rgba(255,255,255,0.05)',
                      padding: '10px',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s'
                    }}>
                      <Icon size={18} color="white" />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '14px', color: isActive ? 'white' : 'var(--text-secondary)', margin: 0, fontWeight: 600 }}>{cat.name}</h4>
                      <span style={{ fontSize: '10px', color: 'var(--text-secondary)' }}>{cat.features.length} Features</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Details Content */}
          <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRight: '1px solid rgba(255,255,255,0.05)' }}>
            <div>
              <motion.h3 
                key={`title-${activeTab}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                style={{ fontSize: '24px', color: 'white', marginBottom: '8px' }}
              >
                {currentCategory.name}
              </motion.h3>
              <motion.p 
                key={`desc-${activeTab}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                style={{ color: 'var(--text-secondary)', fontSize: '15px', marginBottom: '30px' }}
              >
                {currentCategory.desc}
              </motion.p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px' }}>
                <AnimatePresence mode="wait">
                  {currentCategory.features.map((feature, idx) => (
                    <motion.div
                      key={`${activeTab}-feature-${idx}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="bento-card"
                      style={{ padding: '16px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', padding: '6px', flexShrink: 0 }}>
                        <Check size={14} color="var(--accent-purple)" />
                      </div>
                      <div>
                        <h4 style={{ fontSize: '14px', color: 'white', marginBottom: '4px', fontWeight: 600 }}>{feature.name}</h4>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '12px', lineHeight: '1.4', margin: 0 }}>{feature.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Interactive Screen Simulator */}
          <div style={{ background: 'rgba(0,0,0,0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ margin: '20px', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', background: 'rgba(20,20,20,0.8)', overflow: 'hidden' }}>
              <div style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '10px 16px', background: 'rgba(255,255,255,0.02)', display: 'flex', gap: '6px' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff5f56' }} />
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffbd2e' }} />
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#27c93f' }} />
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={`sim-${activeTab}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  {renderVisual()}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const pricingTranslations = {
  en: {
    title: "Simple, transparent pricing",
    subtitle: "Choose the perfect plan to scale your business growth automatically.",
    mo: "/ mo",
    popular: "Most Popular",
    special: "Enterprise Choice",
    getStarted: "Get Started",
    starter: {
      name: "Starter Pack",
      desc: "Ideal for startups and local shops looking to begin their AI growth journey."
    },
    premium: {
      name: "Premium Pack",
      desc: "Perfect for growing local businesses wanting automated operations."
    },
    exclusive: {
      name: "Exclusive Pack",
      desc: "Best for established brands requiring advanced strategy and scale."
    },
    specialPlan: {
      name: "Saadhyam Special Plan",
      desc: "The ultimate business growth operating system with tailored AI models."
    },
    features: {
      starter: ["Core AI Growth Engine", "50 review auto-replies / mo", "Basic GEO/AEO reports", "1 connected data source", "Email support"],
      premium: ["Advanced AI Engine", "Unlimited review replies", "Full AEO/GEO strategy", "3 connected data sources", "Social media automation", "Priority email & chat"],
      exclusive: ["Premium AI model access", "Custom workflow triggers", "AEO/GEO campaigns", "7 connected data sources", "1-on-1 consulting / mo", "24/7 dedicated support"],
      special: ["Custom AI model tuning", "Enterprise DB synchronizer", "Dedicated analyst team", "Unlimited data sources", "API & Webhook integrations", "Dedicated account manager"]
    }
  },
  te: {
    title: "సులువైన, పారదర్శక ధరలు",
    subtitle: "మీ వ్యాపార వృద్ధిని ఆటోమేటిక్గా పెంచడానికి సరైన ప్లాన్ ఎంచుకోండి.",
    mo: "/ నెలకు",
    popular: "అత్యంత ప్రజాదరణ పొందినది",
    special: "ఎంటర్‌ప్రైజ్ ఛాయిస్",
    getStarted: "ప్రారంభించండి",
    starter: {
      name: "స్టార్టర్ ప్యాక్",
      desc: "తమ AI ప్రయాణాన్ని ప్రారంభించాలనుకునే స్టార్టప్‌లు మరియు చిన్న దుకాణాలకు అనువైనది."
    },
    premium: {
      name: "ప్రీమియం ప్యాక్",
      desc: "ఆటోమేటిక్ సేవల ద్వారా వృద్ధి చెందాలనుకునే స్థానిక వ్యాపారాలకు సరిగ్గా సరిపోతుంది."
    },
    exclusive: {
      name: "ఎక్స్‌క్లూజివ్ ప్యాక్",
      desc: "అధునాతన వ్యూహం మరియు స్కేల్ అవసరమయ్యే స్థిరపడిన బ్రాండ్‌లకు ఉత్తమమైనది."
    },
    specialPlan: {
      name: "సాధ్యం స్పెషల్ ప్లాన్",
      desc: "అనుకూలీకరించిన AI మోడల్స్ మరియు నిరంతర మద్దతుతో కూడిన అంతిమ వ్యాపార వేదిక."
    },
    features: {
      starter: ["కోర్ AI గ్రోత్ ఇంజిన్", "నెలకు 50 రివ్యూ ఆటో-రిప్లైలు", "ప్రాథమిక GEO/AEO రిపోర్టులు", "1 డేటా సోర్స్ కనెక్షన్", "ఇమెయిల్ మద్దతు"],
      premium: ["అడ్వాన్స్డ్ AI ఇంజిన్", "అపరిమిత రివ్యూ రిప్లైలు", "పూర్తి AEO/GEO వ్యూహం", "3 డేటా సోర్స్ కనెక్షన్లు", "సోషల్ మీడియా ఆటోమేషన్", "ప్రాధాన్యత ఇమెయిల్ & చాట్"],
      exclusive: ["ప్రీమియం AI మోడల్స్ యాక్సెస్", "కస్టమ్ వర్క్‌ఫ్లో ట్రిగ్గర్స్", "AEO/GEO క్యాంపెయిన్లు", "7 డేటా సోర్స్ కనెక్షన్లు", "నెలకు 1-on-1 కన్సల్టింగ్", "24/7 ప్రత్యేక మద్దతు"],
      special: ["కస్టమ్ AI మోడల్ ట్యూనింగ్", "ఎంటర్‌ప్రైజ్ DB సింక్రనైజర్", "ప్రత్యేక అనలిస్ట్ బృందం", "అపరిమిత డేటా సోర్సులు", "API & వెబ్‌హుక్ ఇంటిగ్రేషన్లు", "ప్రత్యేక ఖాతా మేనేజర్"]
    }
  },
  hi: {
    title: "सरल और पारदर्शी मूल्य निर्धारण",
    subtitle: "अपने व्यवसाय के विकास को स्वचालित रूप से बढ़ाने के लिए सही प्लान चुनें।",
    mo: "/ माह",
    popular: "सबसे लोकप्रिय",
    special: "एंटरप्राइज पसंद",
    getStarted: "शुरू करें",
    starter: {
      name: "स्टार्टर पैक",
      desc: "एआई विकास यात्रा शुरू करने वाले स्टार्टअप और स्थानीय दुकानों के लिए आदर्श।",
    },
    premium: {
      name: "प्रीमियम पैक",
      desc: "स्वचालित संचालन चाहने वाले बढ़ते स्थानीय व्यवसायों के लिए बिल्कुल सही।",
    },
    exclusive: {
      name: "एक्सक्लूसिव पैक",
      desc: "उन्नत रणनीति और पैमाने की आवश्यकता वाले स्थापित ब्रांडों के लिए सर्वोत्तम।",
    },
    specialPlan: {
      name: "साध्यम स्पेशल प्लान",
      desc: "दर्जी से बने एआई मॉडल और निरंतर समर्थन के साथ परम व्यावसायिक विकास प्रणाली।",
    },
    features: {
      starter: ["कोर एआई ग्रोथ इंजन", "50 समीक्षा ऑटो-उत्तर / माह", "बुनियादी GEO/AEO रिपोर्ट", "1 कनेक्टेड डेटा स्रोत", "ईमेल सहायता"],
      premium: ["उन्नत एआई इंजन", "असीमित समीक्षा उत्तर", "पूर्ण AEO/GEO रणनीति", "3 कनेक्टेड डेटा स्रोत", "सोशल मीडिया स्वचालन", "प्राथमिकता ईमेल और चैट"],
      exclusive: ["प्रीमियम एआई मॉडल पहुंच", "कस्टम वर्कफ़्लो ट्रिगर्स", "AEO/GEO अभियान", "7 कनेक्टेड डेटा स्रोत", "1-on-1 परामर्श / माह", "24/7 समर्पित सहायता"],
      special: ["कस्टम एआई मॉडल ट्यूनिंग", "एंटरप्राइज डीबी सिंक्रोनाइज़र", "समर्पित विश्लेषक टीम", "असीमित डेटा स्रोत", "API और वेबहुक एकीकरण", "समर्पित खाता प्रबंधक"]
    }
  }
};

const Pricing = ({ onOpenModal, lang }) => {
  const pt = pricingTranslations[lang] || pricingTranslations.en;
  
  const plans = [
    {
      id: 'starter',
      name: pt.starter.name,
      price: '₹2,999',
      desc: pt.starter.desc,
      features: pt.features.starter,
      accent: 'var(--accent-blue)',
      popular: false
    },
    {
      id: 'premium',
      name: pt.premium.name,
      price: '₹9,999',
      desc: pt.premium.desc,
      features: pt.features.premium,
      accent: 'var(--accent-purple)',
      popular: true
    },
    {
      id: 'exclusive',
      name: pt.exclusive.name,
      price: '₹14,999',
      desc: pt.exclusive.desc,
      features: pt.features.exclusive,
      accent: 'var(--accent-pink)',
      popular: false
    },
    {
      id: 'special',
      name: pt.specialPlan.name,
      price: '₹24,999',
      desc: pt.specialPlan.desc,
      features: pt.features.special,
      accent: 'var(--accent-lavender)',
      popular: false,
      isSpecial: true
    }
  ];

  return (
    <section id="pricing" className="section" style={{ background: 'transparent', position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '48px', marginBottom: '20px', color: 'white' }}>
            {pt.title.split(',')[0]}, <span className="text-gradient">{pt.title.split(',')[1] || pt.title}</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '18px', maxWidth: '800px', margin: '0 auto' }}>
            {pt.subtitle}
          </p>
        </div>

        <div className="pricing-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', alignItems: 'stretch' }}>
          {plans.map((plan) => (
            <div 
              key={plan.id} 
              className="glass-panel glass-card-hover" 
              style={{ 
                padding: '32px 24px', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between', 
                border: plan.popular ? '2px solid var(--accent-purple)' : plan.isSpecial ? '2px solid var(--accent-pink)' : '1px solid var(--glass-border)',
                background: plan.popular ? 'rgba(168, 85, 247, 0.04)' : plan.isSpecial ? 'rgba(236, 72, 153, 0.04)' : 'var(--glass-bg)',
                borderRadius: 'var(--card-radius)'
              }}
            >
              <div>
                {plan.popular && (
                  <div style={{ alignSelf: 'flex-start', display: 'inline-block', background: 'var(--accent-purple)', color: 'white', fontSize: '11px', fontWeight: 700, padding: '4px 12px', borderRadius: '100px', textTransform: 'uppercase', marginBottom: '16px', letterSpacing: '0.5px' }}>
                    {pt.popular}
                  </div>
                )}
                {plan.isSpecial && (
                  <div style={{ alignSelf: 'flex-start', display: 'inline-block', background: 'var(--accent-pink)', color: 'white', fontSize: '11px', fontWeight: 700, padding: '4px 12px', borderRadius: '100px', textTransform: 'uppercase', marginBottom: '16px', letterSpacing: '0.5px' }}>
                    {pt.special}
                  </div>
                )}
                {!plan.popular && !plan.isSpecial && (
                  <div style={{ height: '33px' }} />
                )}
                
                <h3 style={{ fontSize: '20px', color: 'white', marginBottom: '8px' }}>{plan.name}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '13px', minHeight: '40px', marginBottom: '24px', lineHeight: '1.4' }}>{plan.desc}</p>
                
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '24px' }}>
                  <span style={{ fontSize: '36px', fontWeight: 900, color: 'white' }}>{plan.price}</span>
                  <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{pt.mo}</span>
                </div>
                
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0' }}>
                  {plan.features.map((feature, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', fontSize: '14px', color: 'var(--text-secondary)' }}>
                      <CheckCircle size={16} color={plan.accent} style={{ flexShrink: 0 }} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <button 
                className="btn-primary" 
                onClick={onOpenModal} 
                style={{ 
                  width: '100%', 
                  justifyContent: 'center', 
                  padding: '12px', 
                  fontSize: '14px',
                  background: plan.popular ? 'linear-gradient(135deg, #9333ea, #ec4899)' : plan.isSpecial ? 'linear-gradient(135deg, #ec4899, #f43f5e)' : 'rgba(255,255,255,0.05)',
                  border: plan.popular || plan.isSpecial ? 'none' : '1px solid rgba(255,255,255,0.1)',
                  boxShadow: plan.popular || plan.isSpecial ? '0 10px 20px -5px rgba(168, 85, 247, 0.4)' : 'none'
                }}
              >
                {pt.getStarted}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lang, setLang] = useState('en');
  const [currentRoute, setCurrentRoute] = useState(window.location.pathname);
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentRoute(window.location.pathname);
      setHash(window.location.hash);
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    // Periodically sync route in case of manual address bar entries
    const interval = setInterval(handleLocationChange, 1000);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
      clearInterval(interval);
    };
  }, []);

  const isAdmin = currentRoute === '/admin' || hash === '#admin' || hash === '#/admin' || window.location.search.includes('admin');
  const isTerms = currentRoute === '/terms' || hash === '#terms' || hash === '#/terms';
  const isPrivacy = currentRoute === '/privacy' || hash === '#privacy' || hash === '#/privacy';
  const isRefund = currentRoute === '/refund' || hash === '#refund' || hash === '#/refund';
  const isContact = currentRoute === '/contact' || hash === '#contact' || hash === '#/contact';
  const isAbout = currentRoute === '/about' || hash === '#about' || hash === '#/about';

  const handleNavigate = (path) => {
    window.history.pushState(null, '', path);
    window.dispatchEvent(new Event('popstate'));
  };

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
    <>
      <Navbar onOpenModal={() => setIsModalOpen(true)} lang={lang} setLang={setLang} />
      <LeadCaptureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSuccess={() => {}} />
      <Hero onOpenModal={() => setIsModalOpen(true)} lang={lang} />
      <AnimatedDashboardFlow />
      <AIAnalysis />
      <Workflow />
      <FeaturesConsole lang={lang} />
      <ContentStudioAndAutomation />
      <AEOSection />
      <AIAssistant />
      <TrustAndBenefits />
      <Pricing onOpenModal={() => setIsModalOpen(true)} lang={lang} />
      <CTA onOpenModal={() => setIsModalOpen(true)} />
      <Footer onNavigate={handleNavigate} />
      <FloatingContact />
    </>
  );
}

export default App;
