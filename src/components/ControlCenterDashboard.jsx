import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, Users, Activity, CheckCircle2, AlertCircle, 
  TrendingUp, ArrowRight, Search, Filter, ShieldCheck, Zap 
} from 'lucide-react';
import { Blobatar } from '@blobatar/react';

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
    blobatarName: 'AlexSales',
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
    blobatarName: 'MayaSupport',
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
    blobatarName: 'MarcusOps',
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
    blobatarName: 'ElenaResearch',
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
    blobatarName: 'DavidFinance',
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
    blobatarName: 'JordanHR',
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

          <h2 style={{ fontSize: '46px', lineHeight: 1.15, marginBottom: '18px', color: '#09090b' }}>
            One command center for your{' '}
            <span className="text-gradient">entire AI workforce.</span>
          </h2>

          <p style={{ fontSize: '18px', color: '#475569', lineHeight: 1.6 }}>
            Total executive visibility. Monitor workloads, audit decisions, set strict role permissions, and maintain oversight across all digital employees from one unified dashboard.
          </p>
        </div>

        {/* Dashboard Shell */}
        <div
          className="cyber-card"
          style={{
            maxWidth: '1140px',
            margin: '0 auto',
            background: '#ffffff',
            border: '1.5px solid rgba(236, 72, 153, 0.22)',
            overflow: 'hidden',
            boxShadow: '0 25px 60px -15px rgba(236, 72, 153, 0.15)'
          }}
        >
          {/* Top KPI Metrics Row */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              background: 'linear-gradient(135deg, #fdf2f8, #fce7f3)',
              borderBottom: '1px solid rgba(236, 72, 153, 0.18)'
            }}
          >
            <div style={{ padding: '24px', borderRight: '1px solid rgba(236, 72, 153, 0.12)' }}>
              <div style={{ fontSize: '12px', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px', fontWeight: 600 }}>
                Total Workforce
              </div>
              <div style={{ fontSize: '32px', fontWeight: 900, color: '#09090b' }}>
                {workforceSummary.totalHumans}{' '}
                <span style={{ fontSize: '14px', color: '#db2777', fontWeight: 600 }}>AI Humans</span>
              </div>
            </div>

            <div style={{ padding: '24px', borderRight: '1px solid rgba(236, 72, 153, 0.12)' }}>
              <div style={{ fontSize: '12px', color: '#059669', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>
                <span className="status-indicator-dot active" /> Active Now
              </div>
              <div style={{ fontSize: '32px', fontWeight: 900, color: '#059669' }}>
                {workforceSummary.activeWorking}{' '}
                <span style={{ fontSize: '14px', color: '#64748b', fontWeight: 500 }}>working</span>
              </div>
            </div>

            <div style={{ padding: '24px', borderRight: '1px solid rgba(236, 72, 153, 0.12)' }}>
              <div style={{ fontSize: '12px', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px', fontWeight: 600 }}>
                Tasks Completed Today
              </div>
              <div style={{ fontSize: '32px', fontWeight: 900, color: '#09090b' }}>
                {workforceSummary.tasksCompleted}
              </div>
            </div>

            <div style={{ padding: '24px', borderRight: '1px solid rgba(236, 72, 153, 0.12)' }}>
              <div style={{ fontSize: '12px', color: '#d97706', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px', fontWeight: 700 }}>
                Needs Attention
              </div>
              <div style={{ fontSize: '32px', fontWeight: 900, color: '#d97706' }}>
                {workforceSummary.needsAttention}{' '}
                <span style={{ fontSize: '14px', color: '#64748b', fontWeight: 500 }}>items</span>
              </div>
            </div>

            <div style={{ padding: '24px' }}>
              <div style={{ fontSize: '12px', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px', fontWeight: 600 }}>
                Workflow Success Rate
              </div>
              <div style={{ fontSize: '32px', fontWeight: 900, color: '#9333ea' }}>
                {workforceSummary.successRate}
              </div>
            </div>
          </div>

          {/* Controls Bar: Search & Filter */}
          <div
            style={{
              padding: '16px 24px',
              background: '#ffffff',
              borderBottom: '1px solid rgba(236, 72, 153, 0.14)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '14px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#fdf2f8', border: '1px solid rgba(236, 72, 153, 0.2)', borderRadius: '10px', padding: '8px 14px', width: '280px' }}>
              <Search size={15} color="#db2777" />
              <input
                type="text"
                placeholder="Search AI Human or role..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ background: 'transparent', border: 'none', color: '#09090b', fontSize: '13px', outline: 'none', width: '100%', fontWeight: 500 }}
              />
            </div>

            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              {['All', 'Sales', 'Support', 'Ops', 'Research', 'Finance', 'HR'].map((dept) => {
                const isSelected = filterDepartment === dept;
                return (
                  <button
                    key={dept}
                    onClick={() => setFilterDepartment(dept)}
                    style={{
                      padding: '7px 14px',
                      borderRadius: '8px',
                      fontSize: '12px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      background: isSelected ? 'linear-gradient(135deg, #ec4899, #a855f7)' : '#ffffff',
                      border: isSelected ? '1px solid transparent' : '1px solid rgba(236, 72, 153, 0.2)',
                      color: isSelected ? '#ffffff' : '#475569',
                      boxShadow: isSelected ? '0 2px 10px rgba(236, 72, 153, 0.3)' : 'none'
                    }}
                  >
                    {dept}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Employees Cards Grid */}
          <div
            style={{
              padding: '24px',
              background: '#faf8f9',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '16px'
            }}
          >
            {filteredEmployees.map((emp) => (
              <div
                key={emp.name}
                style={{
                  background: '#ffffff',
                  border: '1px solid rgba(236, 72, 153, 0.16)',
                  borderRadius: '16px',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 14px rgba(236, 72, 153, 0.06)',
                  transition: 'all 0.2s ease'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div className="blobatar-frame" style={{ width: '44px', height: '44px', borderRadius: '12px', flexShrink: 0 }}>
                        <Blobatar name={emp.blobatarName} animate="hover" size={38} />
                      </div>
                      <div>
                        <div style={{ fontSize: '15px', fontWeight: 800, color: '#09090b' }}>
                          {emp.name}
                        </div>
                        <div style={{ fontSize: '12px', color: '#db2777', fontWeight: 600 }}>
                          {emp.role}
                        </div>
                      </div>
                    </div>

                    <span style={{
                      padding: '3px 9px',
                      borderRadius: '9999px',
                      fontSize: '11px',
                      fontWeight: 700,
                      background: 'rgba(16, 185, 129, 0.1)',
                      color: '#059669',
                      border: '1px solid rgba(16, 185, 129, 0.25)'
                    }}>
                      {emp.status}
                    </span>
                  </div>

                  <div style={{
                    background: '#fdf2f8',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    fontSize: '12px',
                    color: '#09090b',
                    marginBottom: '14px',
                    border: '1px solid rgba(236, 72, 153, 0.16)'
                  }}>
                    <strong style={{ color: '#db2777' }}>Current Task:</strong> {emp.currentTask}
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginBottom: '14px', textAlign: 'center' }}>
                    <div style={{ background: '#f8fafc', padding: '8px 6px', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.04)' }}>
                      <div style={{ fontSize: '10px', color: '#64748b', fontWeight: 600 }}>COMPLETED</div>
                      <div style={{ fontSize: '14px', fontWeight: 800, color: '#09090b' }}>{emp.tasksCompleted}</div>
                    </div>
                    <div style={{ background: '#f8fafc', padding: '8px 6px', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.04)' }}>
                      <div style={{ fontSize: '10px', color: '#64748b', fontWeight: 600 }}>SUCCESS</div>
                      <div style={{ fontSize: '14px', fontWeight: 800, color: '#059669' }}>{emp.successRate}</div>
                    </div>
                    <div style={{ background: '#f8fafc', padding: '8px 6px', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.04)' }}>
                      <div style={{ fontSize: '10px', color: '#64748b', fontWeight: 600 }}>LAST ACTIVE</div>
                      <div style={{ fontSize: '11px', color: '#475569', fontWeight: 600, paddingTop: '2px' }}>{emp.lastActivity}</div>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '10px', borderTop: '1px solid rgba(236, 72, 153, 0.12)' }}>
                  <button
                    onClick={onOpenModal}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: '#db2777',
                      fontSize: '12px',
                      fontWeight: 700,
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
