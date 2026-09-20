import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Plug, Database, Mail, Calendar, MessageSquare, FileText, 
  Code, Wrench, ArrowRight, CheckCircle2, Layers 
} from 'lucide-react';

const integrationCategories = [
  {
    id: 'crm',
    title: 'CRM & Revenue',
    icon: Database,
    tools: ['Salesforce', 'HubSpot', 'Pipedrive', 'Attio', 'Close CRM']
  },
  {
    id: 'email',
    title: 'Email & Outreach',
    icon: Mail,
    tools: ['Gmail Workspace', 'Microsoft Outlook', 'SendGrid', 'Apollo.io', 'Instantly']
  },
  {
    id: 'calendar',
    title: 'Calendar & Scheduling',
    icon: Calendar,
    tools: ['Google Calendar', 'Outlook Calendar', 'Calendly', 'Cal.com']
  },
  {
    id: 'communication',
    title: 'Team Communication',
    icon: MessageSquare,
    tools: ['Slack', 'Microsoft Teams', 'Discord', 'WhatsApp Business', 'Twilio SMS']
  },
  {
    id: 'databases',
    title: 'Databases & Warehouses',
    icon: Layers,
    tools: ['PostgreSQL', 'Snowflake', 'BigQuery', 'MongoDB', 'Supabase', 'Redis']
  },
  {
    id: 'documents',
    title: 'Documents & Knowledge',
    icon: FileText,
    tools: ['Notion', 'Google Docs & Sheets', 'Confluence', 'Airtable', 'Coda']
  },
  {
    id: 'apis',
    title: 'APIs & Developer Tools',
    icon: Code,
    tools: ['Custom REST APIs', 'Webhooks', 'GraphQL', 'Stripe Billing', 'GitHub', 'Linear']
  },
  {
    id: 'internal',
    title: 'ERP & Internal Systems',
    icon: Wrench,
    tools: ['SAP', 'Oracle NetSuite', 'Workday HR', 'QuickBooks', 'Jira Software']
  }
];

export default function IntegrationsSection({ onOpenModal }) {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <section id="integrations" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 56px' }}>
          <div className="badge-tag" style={{ marginBottom: '16px' }}>
            <Plug size={13} />
            <span>UNIVERSAL SYSTEM CONNECTIVITY</span>
          </div>

          <h2 style={{ fontSize: '46px', lineHeight: 1.15, marginBottom: '18px', color: '#ffffff' }}>
            Your AI Humans work where{' '}
            <span className="text-gradient">your business works.</span>
          </h2>

          <p style={{ fontSize: '18px', color: '#a1a1aa', lineHeight: 1.6 }}>
            Connect the systems your business already uses and give each AI Human the precise tools, credentials, and permissions required to perform its role safely.
          </p>
        </div>

        {/* Integration Categories Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
            maxWidth: '1120px',
            margin: '0 auto 40px'
          }}
        >
          {integrationCategories.map((cat) => {
            const CatIcon = cat.icon;
            return (
              <div
                key={cat.id}
                className="cyber-card"
                style={{
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      background: 'rgba(168, 85, 247, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#c084fc'
                    }}>
                      <CatIcon size={18} />
                    </div>
                    <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff' }}>
                      {cat.title}
                    </h3>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {cat.tools.map((tool) => (
                      <span
                        key={tool}
                        style={{
                          fontSize: '12px',
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          padding: '4px 10px',
                          borderRadius: '6px',
                          color: '#e4e4e7'
                        }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ marginTop: '18px', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.05)', fontSize: '11px', color: '#10b981', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={12} /> Real-time bi-directional sync
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom API callout */}
        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            background: 'rgba(168, 85, 247, 0.08)',
            border: '1px solid rgba(168, 85, 247, 0.25)',
            borderRadius: '16px',
            padding: '20px 28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px'
          }}
        >
          <div>
            <div style={{ fontSize: '15px', fontWeight: 700, color: '#ffffff' }}>
              Have proprietary internal software or bespoke database tables?
            </div>
            <div style={{ fontSize: '13px', color: '#a1a1aa', marginTop: '2px' }}>
              AI Humans can connect to any REST, GraphQL, or webhook endpoint with OAuth 2.0 and API keys.
            </div>
          </div>

          <button
            onClick={onOpenModal}
            className="btn-primary"
            style={{ padding: '10px 20px', fontSize: '13px', borderRadius: '8px' }}
          >
            Request Custom Integration
          </button>
        </div>
      </div>
    </section>
  );
}
