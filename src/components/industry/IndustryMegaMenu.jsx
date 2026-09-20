import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  ArrowRight, 
  Search, 
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
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { industries, getAllIndustries } from '../../data/industries';

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

// 8 Clean Sectors grouping all 20 industries
const SECTORS = [
  {
    id: 'property',
    name: 'Property & Construction',
    icon: Building2,
    slugs: ['real-estate', 'construction'],
    description: 'Lead qualification, site milestone tracking & investor reporting'
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Medical',
    icon: Hospital,
    slugs: ['hospitals', 'healthcare'],
    description: 'Patient triage, appointment scheduling & HIPAA-aligned care'
  },
  {
    id: 'finance',
    name: 'Finance & Insurance',
    icon: Landmark,
    slugs: ['finance', 'insurance'],
    description: 'KYC onboarding, portfolio reports & automated COI / claims'
  },
  {
    id: 'professional',
    name: 'Legal & Consulting',
    icon: Scale,
    slugs: ['legal', 'professional-services'],
    description: 'Contract redlining, conflict clearance & RFP proposal assembly'
  },
  {
    id: 'commerce',
    name: 'Retail & Commerce',
    icon: ShoppingBag,
    slugs: ['retail', 'ecommerce', 'automotive'],
    description: 'WISMO deflection, abandoned cart recovery & dealership test drives'
  },
  {
    id: 'industrial',
    name: 'Manufacturing & Supply',
    icon: Factory,
    slugs: ['manufacturing', 'logistics'],
    description: 'Supplier PO tracking, machine maintenance & freight dispatch'
  },
  {
    id: 'hospitality',
    name: 'Hospitality & Leisure',
    icon: Utensils,
    slugs: ['hospitality', 'restaurants', 'gyms', 'travel'],
    description: 'Table reservations, member retention & multi-city itineraries'
  },
  {
    id: 'tech',
    name: 'Tech, Events & Education',
    icon: Rocket,
    slugs: ['startups', 'events', 'education'],
    description: 'Autonomous SDR pipeline, conference badges & student admissions'
  }
];

export default function IndustryMegaMenu({ onNavigate, isScrolled }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSectorId, setActiveSectorId] = useState('property');
  const [searchTerm, setSearchTerm] = useState('');
  const timeoutRef = useRef(null);
  const allIndustries = getAllIndustries();

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 240);
  };

  const handleOpenHub = (e) => {
    e.preventDefault();
    setIsOpen(false);
    onNavigate('/industries');
  };

  const activeSector = SECTORS.find((s) => s.id === activeSectorId) || SECTORS[0];
  const sectorIndustries = activeSector.slugs
    .map((slug) => industries[slug])
    .filter(Boolean);

  const filteredIndustries = searchTerm.trim()
    ? allIndustries.filter((ind) =>
        ind.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (ind.shortName && ind.shortName.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (ind.category && ind.category.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : null;

  return (
    <div 
      style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <a
          href="/industries"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('/industries');
          }}
          style={{
            color: isOpen ? '#ec4899' : '#475569',
            fontSize: '14px',
            fontWeight: 600,
            textDecoration: 'none',
            padding: '6px 2px 6px 0',
            transition: 'color 0.2s',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#ec4899')}
          onMouseLeave={(e) => (e.currentTarget.style.color = isOpen ? '#ec4899' : '#475569')}
        >
          Industries
        </a>
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          style={{
            background: 'none',
            border: 'none',
            color: isOpen ? '#ec4899' : '#475569',
            cursor: 'pointer',
            padding: '6px 4px',
            display: 'flex',
            alignItems: 'center',
            transition: 'color 0.2s'
          }}
          aria-label="Toggle industries menu"
        >
          <ChevronDown 
            size={14} 
            style={{ 
              transform: isOpen ? 'rotate(180deg)' : 'none', 
              transition: 'transform 0.2s ease',
              color: isOpen ? '#ec4899' : 'currentColor'
            }} 
          />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Background Backdrop Blur Overlay */}
            <motion.div
              key="mega-menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: '100vw',
                height: '100vh',
                background: 'rgba(9, 9, 11, 0.32)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                zIndex: 998
              }}
            />

            {/* The Expanded, Spacious Mega Menu Box */}
            <motion.div
              key="mega-menu-card"
              initial={{ opacity: 0, y: -6, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.98 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{
                position: 'fixed',
                top: isScrolled ? '66px' : '76px',
                left: 0,
                right: 0,
                margin: '0 auto',
                width: 'min(920px, calc(100vw - 40px))',
                maxWidth: '920px',
                background: '#ffffff',
                borderRadius: '24px',
                border: '1.5px solid rgba(236, 72, 153, 0.28)',
                boxShadow: '0 30px 90px -15px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(236, 72, 153, 0.15)',
                overflow: 'hidden',
                zIndex: 1000
              }}
            >
              {/* Header: Title + Search + Directory Link */}
              <div 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between', 
                  padding: '18px 24px',
                  background: '#faf8f9',
                  borderBottom: '1px solid rgba(236, 72, 153, 0.14)',
                  gap: '14px',
                  flexWrap: 'wrap'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ 
                    background: 'linear-gradient(135deg, #ec4899, #db2777)', 
                    color: '#ffffff', 
                    borderRadius: '8px', 
                    padding: '4px 9px', 
                    fontSize: '11px', 
                    fontWeight: 800,
                    letterSpacing: '0.04em'
                  }}>
                    20 SECTORS
                  </span>
                  <div>
                    <h3 style={{ fontSize: '15.5px', fontWeight: 850, color: '#09090b', margin: 0, letterSpacing: '-0.01em' }}>
                      AI Workforce Solutions by Industry
                    </h3>
                    <div style={{ fontSize: '11.5px', color: '#64748b' }}>
                      Deploy pre-trained autonomous digital employees built for your domain
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1, maxWidth: '380px' }}>
                  <div style={{ position: 'relative', width: '100%' }}>
                    <Search size={14} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                    <input
                      type="text"
                      placeholder="Search 20+ industries (e.g. real estate, clinic)..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '8px 12px 8px 34px',
                        borderRadius: '10px',
                        border: '1px solid rgba(236, 72, 153, 0.28)',
                        fontSize: '12.5px',
                        outline: 'none',
                        background: '#ffffff',
                        color: '#09090b',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.03)'
                      }}
                    />
                    {searchTerm && (
                      <button
                        type="button"
                        onClick={() => setSearchTerm('')}
                        style={{
                          position: 'absolute',
                          right: '10px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          background: 'none',
                          border: 'none',
                          fontSize: '12px',
                          color: '#94a3b8',
                          cursor: 'pointer'
                        }}
                      >
                        ✕
                      </button>
                    )}
                  </div>

                  <a
                    href="/industries"
                    onClick={handleOpenHub}
                    style={{
                      fontSize: '12px',
                      fontWeight: 750,
                      color: '#db2777',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      whiteSpace: 'nowrap',
                      padding: '7px 11px',
                      borderRadius: '8px',
                      background: 'rgba(236, 72, 153, 0.08)',
                      transition: 'background 0.15s'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(236, 72, 153, 0.16)')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(236, 72, 153, 0.08)')}
                  >
                    <span>Full Hub</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>

              {/* Content Area: Filtered Search or 2-Pane Sector Layout */}
              {filteredIndustries ? (
                /* Search Results View */
                <div style={{ padding: '20px 24px', maxHeight: '420px', overflowY: 'auto' }}>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: '#64748b', marginBottom: '12px' }}>
                    {filteredIndustries.length} matching {filteredIndustries.length === 1 ? 'industry' : 'industries'}:
                  </div>
                  {filteredIndustries.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '40px 20px', color: '#64748b', fontSize: '13.5px' }}>
                      No matching industry found for "{searchTerm}".
                      <div style={{ marginTop: '10px' }}>
                        <a 
                          href="/industries" 
                          onClick={handleOpenHub}
                          style={{ color: '#db2777', fontWeight: 750, textDecoration: 'none' }}
                        >
                          View all 20 industries in the Directory →
                        </a>
                      </div>
                    </div>
                  ) : (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                      {filteredIndustries.map((ind) => {
                        const Icon = iconMap[ind.icon] || Sparkles;
                        return (
                          <a
                            key={ind.slug}
                            href={`/industries/${ind.slug}`}
                            onClick={(e) => {
                              e.preventDefault();
                              setIsOpen(false);
                              setSearchTerm('');
                              onNavigate(`/industries/${ind.slug}`);
                            }}
                            style={{
                              padding: '12px 14px',
                              borderRadius: '12px',
                              background: '#faf8f9',
                              border: '1px solid rgba(236, 72, 153, 0.15)',
                              textDecoration: 'none',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '12px',
                              transition: 'all 0.15s'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = '#fdf2f8';
                              e.currentTarget.style.borderColor = '#ec4899';
                              e.currentTarget.style.transform = 'translateY(-1px)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = '#faf8f9';
                              e.currentTarget.style.borderColor = 'rgba(236, 72, 153, 0.15)';
                              e.currentTarget.style.transform = 'none';
                            }}
                          >
                            <div style={{ 
                              width: '34px', 
                              height: '34px', 
                              borderRadius: '9px', 
                              background: '#ffffff', 
                              display: 'flex', 
                              alignItems: 'center', 
                              justifyContent: 'center', 
                              color: '#db2777', 
                              flexShrink: 0,
                              boxShadow: '0 2px 4px rgba(0,0,0,0.04)'
                            }}>
                              <Icon size={16} />
                            </div>
                            <div style={{ overflow: 'hidden', flex: 1 }}>
                              <div style={{ fontSize: '13.5px', fontWeight: 800, color: '#09090b', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                {ind.name}
                              </div>
                              <div style={{ fontSize: '11.5px', color: '#64748b' }}>
                                {ind.category}
                              </div>
                            </div>
                            <ArrowRight size={13} style={{ color: '#db2777', flexShrink: 0 }} />
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>
              ) : (
                /* 2-Pane Clean, Spacious Layout */
                <div style={{ display: 'flex', minHeight: '390px' }}>
                  {/* Left Pane: Sectors Navigation */}
                  <div 
                    style={{ 
                      width: '270px', 
                      background: '#faf8f9', 
                      borderRight: '1px solid rgba(236, 72, 153, 0.12)', 
                      padding: '12px 10px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '3px'
                    }}
                  >
                    <div style={{ fontSize: '10.5px', fontWeight: 800, color: '#94a3b8', letterSpacing: '0.06em', textTransform: 'uppercase', padding: '4px 10px 8px' }}>
                      Industry Sectors
                    </div>
                    {SECTORS.map((sector) => {
                      const SectorIcon = sector.icon;
                      const isActive = sector.id === activeSectorId;
                      return (
                        <button
                          key={sector.id}
                          type="button"
                          onMouseEnter={() => setActiveSectorId(sector.id)}
                          onClick={() => setActiveSectorId(sector.id)}
                          style={{
                            width: '100%',
                            textAlign: 'left',
                            padding: '9.5px 12px',
                            borderRadius: '10px',
                            border: isActive ? '1.5px solid rgba(236, 72, 153, 0.35)' : '1.5px solid transparent',
                            background: isActive ? '#ffffff' : 'transparent',
                            color: isActive ? '#db2777' : '#334155',
                            fontWeight: isActive ? 800 : 600,
                            fontSize: '13px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            cursor: 'pointer',
                            transition: 'all 0.15s',
                            boxShadow: isActive ? '0 4px 12px -2px rgba(236, 72, 153, 0.16)' : 'none'
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <SectorIcon size={15} style={{ color: isActive ? '#db2777' : '#94a3b8', flexShrink: 0 }} />
                            <span>{sector.name}</span>
                          </div>
                          <ChevronRight size={13} style={{ opacity: isActive ? 1 : 0.4, color: isActive ? '#db2777' : 'currentColor' }} />
                        </button>
                      );
                    })}
                  </div>

                  {/* Right Pane: Active Sector Details & Industries */}
                  <div style={{ flex: 1, padding: '20px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      {/* Active Sector Summary */}
                      <div style={{ marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid rgba(236, 72, 153, 0.12)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <span style={{ fontSize: '11px', fontWeight: 800, color: '#db2777', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            Selected Sector
                          </span>
                          <span style={{ fontSize: '11.5px', color: '#64748b', fontWeight: 700, background: '#fdf2f8', padding: '2px 8px', borderRadius: '9999px', border: '1px solid rgba(236, 72, 153, 0.2)' }}>
                            {sectorIndustries.length} {sectorIndustries.length === 1 ? 'Specialized Industry' : 'Specialized Industries'}
                          </span>
                        </div>
                        <h4 style={{ fontSize: '16.5px', fontWeight: 850, color: '#09090b', margin: '3px 0 4px', letterSpacing: '-0.01em' }}>
                          {activeSector.name}
                        </h4>
                        <p style={{ fontSize: '12.5px', color: '#64748b', margin: 0, lineHeight: 1.45 }}>
                          {activeSector.description}
                        </p>
                      </div>

                      {/* Sector Industries Cards */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {sectorIndustries.map((ind) => {
                          const Icon = iconMap[ind.icon] || Sparkles;
                          return (
                            <a
                              key={ind.slug}
                              href={`/industries/${ind.slug}`}
                              onClick={(e) => {
                                e.preventDefault();
                                setIsOpen(false);
                                onNavigate(`/industries/${ind.slug}`);
                              }}
                              style={{
                                padding: '12px 16px',
                                borderRadius: '12px',
                                background: '#faf8f9',
                                border: '1px solid rgba(236, 72, 153, 0.16)',
                                textDecoration: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                transition: 'all 0.15s'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.background = '#fdf2f8';
                                e.currentTarget.style.borderColor = '#ec4899';
                                e.currentTarget.style.transform = 'translateX(4px)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = '#faf8f9';
                                e.currentTarget.style.borderColor = 'rgba(236, 72, 153, 0.16)';
                                e.currentTarget.style.transform = 'none';
                              }}
                            >
                              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                                <div style={{ 
                                  width: '36px', 
                                  height: '36px', 
                                  borderRadius: '10px', 
                                  background: '#ffffff', 
                                  display: 'flex', 
                                  alignItems: 'center', 
                                  justifyContent: 'center', 
                                  color: '#db2777', 
                                  flexShrink: 0,
                                  boxShadow: '0 2px 5px rgba(0,0,0,0.04)',
                                  border: '1px solid rgba(236, 72, 153, 0.15)'
                                }}>
                                  <Icon size={18} />
                                </div>
                                <div>
                                  <div style={{ fontSize: '14px', fontWeight: 800, color: '#09090b' }}>
                                    {ind.name}
                                  </div>
                                  <div style={{ fontSize: '11.5px', color: '#64748b', marginTop: '2px' }}>
                                    {ind.badge || `${ind.agents?.length || 4} Autonomous AI Agents`}
                                  </div>
                                </div>
                              </div>

                              <div style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: '6px', 
                                color: '#db2777', 
                                fontSize: '12px', 
                                fontWeight: 800,
                                background: '#ffffff',
                                padding: '6px 12px',
                                borderRadius: '8px',
                                border: '1px solid rgba(236, 72, 153, 0.25)',
                                boxShadow: '0 1px 2px rgba(0,0,0,0.02)'
                              }}>
                                <span>Explore</span>
                                <ArrowRight size={13} />
                              </div>
                            </a>
                          );
                        })}
                      </div>
                    </div>

                    {/* Micro Hint */}
                    <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px solid rgba(236, 72, 153, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '12px', color: '#94a3b8' }}>
                        Select any sector on the left to inspect domain agents
                      </span>
                      <a
                        href={`/industries/${sectorIndustries[0]?.slug || 'real-estate'}`}
                        onClick={(e) => {
                          e.preventDefault();
                          setIsOpen(false);
                          onNavigate(`/industries/${sectorIndustries[0]?.slug || 'real-estate'}`);
                        }}
                        style={{ fontSize: '12px', fontWeight: 800, color: '#db2777', textDecoration: 'none' }}
                      >
                        View {activeSector.name} System →
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Footer Strip */}
              <div 
                style={{ 
                  borderTop: '1px solid rgba(236, 72, 153, 0.14)', 
                  padding: '12px 24px', 
                  background: '#faf8f9',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between', 
                  flexWrap: 'wrap', 
                  gap: '10px' 
                }}
              >
                <div style={{ fontSize: '12.5px', color: '#64748b' }}>
                  Can’t find your sector? Saadhyam’s workforce engine adapts to custom business workflows.
                </div>

                <a
                  href="/industries"
                  onClick={handleOpenHub}
                  style={{
                    fontSize: '12.5px',
                    fontWeight: 800,
                    color: '#db2777',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    padding: '5px 12px',
                    borderRadius: '8px',
                    background: 'rgba(236, 72, 153, 0.08)',
                    transition: 'background 0.15s'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(236, 72, 153, 0.16)')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(236, 72, 153, 0.08)')}
                >
                  <span>Browse Full 20-Industry Directory</span>
                  <ArrowRight size={13} />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
