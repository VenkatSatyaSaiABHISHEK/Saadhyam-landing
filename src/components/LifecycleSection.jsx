import React from 'react';
import { motion } from 'framer-motion';
import { 
  PlusCircle, UserCheck, FileText, GitBranch, Plug, 
  Rocket, Activity, Sparkles, TrendingUp, ArrowRight 
} from 'lucide-react';

const lifecycleSteps = [
  { num: '01', title: 'Create AI Human', desc: 'Initialize identity, name, and personality profile.', icon: PlusCircle },
  { num: '02', title: 'Define Role', desc: 'Assign business title and operational department.', icon: UserCheck },
  { num: '03', title: 'Give Instructions', desc: 'Provide company SOPs, goals, and tone guidelines.', icon: FileText },
  { num: '04', title: 'Build Workflow', desc: 'Connect step triggers, actions, and condition gates.', icon: GitBranch },
  { num: '05', title: 'Connect Tools', desc: 'Authenticate CRM, ERP, Slack, and database keys.', icon: Plug },
  { num: '06', title: 'Deploy', desc: 'Push to live environment with sandbox test run.', icon: Rocket },
  { num: '07', title: 'Monitor', desc: 'Audit live execution logs and milestone completions.', icon: Activity },
  { num: '08', title: 'Improve', desc: 'Refine workflow instructions based on edge cases.', icon: Sparkles },
  { num: '09', title: 'Scale', desc: 'Spin up parallel workers to handle 100x volume.', icon: TrendingUp }
];

export default function LifecycleSection({ onOpenModal }) {
  return (
    <section id="lifecycle" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 56px' }}>
          <div className="badge-tag" style={{ marginBottom: '16px' }}>
            <TrendingUp size={13} />
            <span>CONTINUOUS WORKFORCE EVOLUTION</span>
          </div>

          <h2 style={{ fontSize: '46px', lineHeight: 1.15, marginBottom: '18px', color: '#09090b' }}>
            Create. Train. Deploy.{' '}
            <span className="text-gradient">Improve.</span>
          </h2>

          <p style={{ fontSize: '18px', color: '#475569', lineHeight: 1.6 }}>
            Saadhyam turns AI from a tool you occasionally use into a workforce you continuously manage, calibrate, and scale.
          </p>
        </div>

        {/* 9-Step Lifecycle Visual Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '16px',
            maxWidth: '1100px',
            margin: '0 auto 40px'
          }}
        >
          {lifecycleSteps.map((step) => {
            const StepIcon = step.icon;
            return (
              <div
                key={step.num}
                className="cyber-card"
                style={{
                  padding: '22px 20px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '14px',
                  background: '#ffffff',
                  border: '1px solid rgba(236, 72, 153, 0.16)',
                  boxShadow: '0 4px 14px rgba(236, 72, 153, 0.05)'
                }}
              >
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: 'rgba(236, 72, 153, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#db2777',
                    flexShrink: 0
                  }}
                >
                  <StepIcon size={18} />
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '3px' }}>
                    <span style={{ fontSize: '10px', fontFamily: 'monospace', color: '#ec4899', fontWeight: 800 }}>
                      PHASE {step.num}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#09090b', marginBottom: '4px' }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.5, fontWeight: 500 }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: 'center' }}>
          <button
            onClick={onOpenModal}
            className="btn-primary"
            style={{ borderRadius: '9999px', padding: '14px 32px' }}
          >
            <span>Launch Your Workforce Lifecycle</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
