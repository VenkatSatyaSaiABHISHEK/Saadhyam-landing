import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, Users, Activity, CheckCircle2, AlertCircle, 
  TrendingUp, ArrowRight, Search, Filter, ShieldCheck, Zap 
} from 'lucide-react';

const workforceSummary = {
  totalHumans: 24,
  activeWorking: 17,
  tasksCompleted: 142,
  needsAttention: 3,
  successRate: '94%'
};

const workforceEmployees = [
  {
    name: 'Alex Rivera',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    role: 'AI Sales Executive',
    department: 'Sales',
    status: 'Executing',
    currentTask: 'Outreach to 42 enterprise leads from Stripe webhook',
    tasksCompleted: 88,
    successRate: '98%',
    lastActivity: '2 mins ago'
  },
  {
    name: 'Maya Chen',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    role: 'AI Customer Support',
    department: 'Support',
    status: 'Active',
    currentTask: 'Auto-resolving Zendesk tier-2 tickets',
    tasksCompleted: 146,
    successRate: '99%',
    lastActivity: 'Just now'
  },
  {
    name: 'Marcus Vance',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    role: 'AI Operations Manager',
    department: 'Ops',
    status: 'Monitoring',
    currentTask: 'Supervising regional stock thresholds in SAP ERP',
    tasksCompleted: 62,
    successRate: '100%',
    lastActivity: '8 mins ago'
  },
  {
    name: 'Elena Rostova',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    role: 'AI Research Analyst',
    department: 'Research',
    status: 'Executing',
    currentTask: 'Synthesizing global SaaS competitor pricing shifts',
    tasksCompleted: 34,
    successRate: '96%',
    lastActivity: '12 mins ago'
  },
  {
    name: 'David Sterling',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
    role: 'AI Finance Assistant',
    department: 'Finance',
    status: 'Active',
    currentTask: 'Reconciling $420k supplier invoices against PO ledger',
    tasksCompleted: 53,
    successRate: '97%',
    lastActivity: '15 mins ago'
  },
  {
    name: 'Jordan Taylor',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    role: 'AI HR Assistant',
    department: 'HR',
    status: 'Interviewing',
    currentTask: 'Screening 120 senior engineer resumes on Greenhouse',
    tasksCompleted: 71,
    successRate: '95%',
    lastActivity: '4 mins ago'
  }
];

export default function ControlCenterDashboard({ onOpenModal }) {
  const [filterDepartment, setFilterDepartment] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEmployees = workforceEmployees.filter((emp) => {
    const matchesDept = filterDepartment === 'All' || emp.department === filterDepartment;
    const matchesSearch = emp.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          emp.role.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDept && matchesSearch;
  });

  return (
    <section id="control-center" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 50px' }}>
          <div className="badge-tag" style={{ marginBottom: '16px' }}>
            <LayoutDashboard size={13} />
            <span>ENTERPRISE GOVERNANCE</span>
          </div>

          <h2 style={{ fontSize: '46px', lineHeight: 1.15, marginBottom: '18px', color: '#ffffff' }}>
            One command center for your{' '}
            <span className="text-gradient">entire AI workforce.</span>
          </h2>

          <p style={{ fontSize: '18px', color: '#a1a1aa', lineHeight: 1.6 }}>
            Total executive visibility. Monitor workloads, audit decisions, set strict role permissions, and maintain oversight across all digital employees from one unified dashboard.
          </p>
        </div>

        {/* Dashboard Shell */}
        <div
          className="cyber-card"
          style={{
            maxWidth: '1140px',
            margin: '0 auto',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            overflow: 'hidden',
            boxShadow: '0 30px 80px -20px rgba(0, 0, 0, 0.8)'
          }}
        >
          {/* Top KPI Metrics Row */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              background: 'rgba(10, 10, 18, 0.95)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
            }}
          >
            <div style={{ padding: '24px', borderRight: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <div style={{ fontSize: '12px', color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>
                Total Workforce
              </div>
              <div style={{ fontSize: '32px', fontWeight: 800, color: '#ffffff' }}>
                {workforceSummary.totalHumans}{' '}
                <span style={{ fontSize: '14px', color: '#a855f7', fontWeight: 500 }}>AI Humans</span>
              </div>
            </div>

            <div style={{ padding: '24px', borderRight: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <div style={{ fontSize: '12px', color: '#10b981', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span className="status-indicator-dot active" /> Active Now
              </div>
              <div style={{ fontSize: '32px', fontWeight: 800, color: '#34d399' }}>
                {workforceSummary.activeWorking}{' '}
                <span style={{ fontSize: '14px', color: '#a1a1aa', fontWeight: 500 }}>working</span>
              </div>
            </div>

            <div style={{ padding: '24px', borderRight: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <div style={{ fontSize: '12px', color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>
                Tasks Completed Today
              </div>
              <div style={{ fontSize: '32px', fontWeight: 800, color: '#ffffff' }}>
                {workforceSummary.tasksCompleted}
              </div>
            </div>

            <div style={{ padding: '24px', borderRight: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <div style={{ fontSize: '12px', color: '#f59e0b', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>
                Needs Attention
              </div>
              <div style={{ fontSize: '32px', fontWeight: 800, color: '#fbbf24' }}>
                {workforceSummary.needsAttention}{' '}
                <span style={{ fontSize: '14px', color: '#a1a1aa', fontWeight: 500 }}>items</span>
              </div>
            </div>

            <div style={{ padding: '24px' }}>
              <div style={{ fontSize: '12px', color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>
                Workflow Success Rate
              </div>
              <div style={{ fontSize: '32px', fontWeight: 800, color: '#d8b4fe' }}>
                {workforceSummary.successRate}
              </div>
            </div>
          </div>

          {/* Controls Bar: Search & Filter */}
          <div
            style={{
              padding: '16px 24px',
              background: 'rgba(8, 8, 12, 0.9)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '14px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '6px 12px', width: '280px' }}>
              <Search size={14} color="#71717a" />
              <input
                type="text"
                placeholder="Search AI Human or role..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ background: 'transparent', border: 'none', color: '#ffffff', fontSize: '13px', outline: 'none', width: '100%' }}
              />
            </div>

            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              {['All', 'Sales', 'Support', 'Ops', 'Research', 'Finance', 'HR'].map((dept) => (
                <button
                  key={dept}
                  onClick={() => setFilterDepartment(dept)}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    background: filterDepartment === dept ? 'rgba(168, 85, 247, 0.25)' : 'rgba(255,255,255,0.03)',
                    border: filterDepartment === dept ? '1px solid #a855f7' : '1px solid rgba(255,255,255,0.06)',
                    color: filterDepartment === dept ? '#ffffff' : '#a1a1aa'
                  }}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Employees Cards Grid */}
          <div
            style={{
              padding: '24px',
              background: 'rgba(5, 5, 8, 0.95)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '16px'
            }}
          >
            {filteredEmployees.map((emp) => (
              <div
                key={emp.name}
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '14px',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.2s ease'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <img
                        src={emp.avatar}
                        alt={emp.name}
                        style={{ width: '40px', height: '40px', borderRadius: '10px', objectFit: 'cover', border: '1px solid rgba(255,255,255,0.1)' }}
                      />
                      <div>
                        <div style={{ fontSize: '15px', fontWeight: 700, color: '#ffffff' }}>
                          {emp.name}
                        </div>
                        <div style={{ fontSize: '12px', color: '#c084fc' }}>
                          {emp.role}
                        </div>
                      </div>
                    </div>

                    <span style={{
                      padding: '3px 8px',
                      borderRadius: '9999px',
                      fontSize: '11px',
                      fontWeight: 600,
                      background: 'rgba(16, 185, 129, 0.15)',
                      color: '#34d399',
                      border: '1px solid rgba(16, 185, 129, 0.3)'
                    }}>
                      {emp.status}
                    </span>
                  </div>

                  <div style={{
                    background: 'rgba(0,0,0,0.3)',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    fontSize: '12px',
                    color: '#d4d4d8',
                    marginBottom: '14px',
                    border: '1px solid rgba(255,255,255,0.04)'
                  }}>
                    <strong style={{ color: '#a1a1aa' }}>Current Task:</strong> {emp.currentTask}
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginBottom: '14px', textAlign: 'center' }}>
                    <div style={{ background: 'rgba(255,255,255,0.02)', padding: '6px', borderRadius: '6px' }}>
                      <div style={{ fontSize: '10px', color: '#71717a' }}>COMPLETED</div>
                      <div style={{ fontSize: '13px', fontWeight: 700, color: '#ffffff' }}>{emp.tasksCompleted}</div>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.02)', padding: '6px', borderRadius: '6px' }}>
                      <div style={{ fontSize: '10px', color: '#71717a' }}>SUCCESS</div>
                      <div style={{ fontSize: '13px', fontWeight: 700, color: '#10b981' }}>{emp.successRate}</div>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.02)', padding: '6px', borderRadius: '6px' }}>
                      <div style={{ fontSize: '10px', color: '#71717a' }}>LAST ACTIVE</div>
                      <div style={{ fontSize: '11px', color: '#d4d4d8', paddingTop: '2px' }}>{emp.lastActivity}</div>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '10px', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                  <button
                    onClick={onOpenModal}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: '#d8b4fe',
                      fontSize: '12px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    Manage Employee <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
