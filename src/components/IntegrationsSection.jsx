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

          <h2 style={{ fontSize: '46px', lineHeight: 1.15, marginBottom: '18px', color: '#09090b' }}>
            Your AI Humans work where{' '}
            <span className="text-gradient">your business works.</span>
          </h2>

          <p style={{ fontSize: '18px', color: '#475569', lineHeight: 1.6 }}>
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
                  justifyContent: 'space-between',
                  background: '#ffffff',
                  border: '1px solid rgba(236, 72, 153, 0.16)',
                  boxShadow: '0 4px 15px rgba(236, 72, 153, 0.05)'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                    <div style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      background: 'rgba(236, 72, 153, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#db2777'
                    }}>
                      <CatIcon size={18} />
                    </div>
                    <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#09090b' }}>
                      {cat.title}
                    </h3>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {cat.tools.map((tool) => (
                      <span
                        key={tool}
                        style={{
                          fontSize: '12px',
                          background: '#fdf2f8',
                          border: '1px solid rgba(236, 72, 153, 0.16)',
                          padding: '4px 10px',
                          borderRadius: '6px',
                          color: '#09090b',
                          fontWeight: 500
                        }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ marginTop: '18px', paddingTop: '12px', borderTop: '1px solid rgba(236, 72, 153, 0.12)', fontSize: '12px', color: '#059669', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600 }}>
                  <CheckCircle2 size={13} /> Real-time bi-directional sync
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
            background: 'linear-gradient(135deg, #fdf2f8, #fce7f3)',
            border: '1.5px solid rgba(236, 72, 153, 0.25)',
            borderRadius: '16px',
            padding: '24px 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            boxShadow: '0 8px 24px rgba(236, 72, 153, 0.12)'
          }}
        >
          <div>
            <div style={{ fontSize: '16px', fontWeight: 800, color: '#09090b' }}>
              Have proprietary internal software or bespoke database tables?
            </div>
            <div style={{ fontSize: '13px', color: '#475569', marginTop: '4px', fontWeight: 500 }}>
              AI Humans can connect to any REST, GraphQL, or webhook endpoint with OAuth 2.0 and API keys.
            </div>
          </div>

          <button
            onClick={onOpenModal}
            className="btn-primary"
            style={{ padding: '10px 22px', fontSize: '13px', borderRadius: '8px' }}
          >
            Request Custom Integration
          </button>
        </div>
      </div>
    </section>
  );
}
