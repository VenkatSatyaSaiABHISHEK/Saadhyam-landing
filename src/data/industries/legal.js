export const legalData = {
  "id": "legal",
  "slug": "legal",
  "name": "Legal & Law Firms",
  "shortName": "Legal",
  "category": "Professional & Advisory",
  "icon": "Scale",
  "badge": "Autonomous Legal Practice Operations",
  "eyebrow": "AI Workforce for Law Firms, Attorneys & In-House Counsel",
  "headline": "Turn Your Law Practice Into an AI-Powered Workforce",
  "subheadline": "Saadhyam AI helps legal teams automate client intake, ethical conflict checks, contract playbook redlining, case law research, deposition summaries, and billable time capture with intelligent AI agents.",
  "heroStats": [
    {
      "label": "Contract Redline Turnaround",
      "value": "< 4 mins"
    },
    {
      "label": "Conflict Check Clearance",
      "value": "15 sec"
    },
    {
      "label": "Captured Billable Hours",
      "value": "+18%"
    },
    {
      "label": "Client Intake Speed",
      "value": "Instant"
    }
  ],
  "heroDashboard": {
    "title": "Legal Practice Operations Center",
    "status": "5 Legal Agents Active Across 186 Matters",
    "activeDeal": "Apex Holdings vs. Meridian — Commercial Arbitration",
    "metrics": [
      {
        "label": "Contracts Audited (Month)",
        "value": "412",
        "change": "+28% throughput"
      },
      {
        "label": "Billable Realization Rate",
        "value": "94.8%",
        "change": "+12% captured"
      },
      {
        "label": "Conflict Screenings Passed",
        "value": "78",
        "change": "100% compliant"
      },
      {
        "label": "Active Matter Value",
        "value": "$8.4M",
        "change": "Under management"
      }
    ]
  },
  "problems": [
    {
      "title": "Hours lost to manual contract drafting and redlining",
      "description": "Senior and associate attorneys spend 15+ hours weekly re-reading standard commercial agreements, NDAs, and master service agreements to check indemnification clauses.",
      "impact": "Delayed deal closings and high client billing friction"
    },
    {
      "title": "Slow, multi-day ethical conflict screening",
      "description": "Circulating internal conflict memos across partners takes 48+ hours, during which high-value corporate clients hire competing law firms.",
      "impact": "Lost retainer opportunities and compliance exposure"
    },
    {
      "title": "Billable hour leakage on quick communications",
      "description": "Attorneys frequently answer client emails and phone calls while on the go without logging 0.1h increments, losing thousands of dollars each month.",
      "impact": "15-20% revenue leakage per billing partner"
    },
    {
      "title": "Exhausting deposition and trial discovery review",
      "description": "Litigators wade through hundreds of pages of deposition transcripts and discovery PDFs to extract key witness admissions and timeline facts.",
      "impact": "High associate burnout and non-billable administrative burden"
    }
  ],
  "agents": [
    {
      "id": "leg-contract",
      "name": "Marcus Vance",
      "role": "Contract Playbook Redline Agent",
      "blobatarName": "MarcusLegalOps",
      "badge": "Contract Review & Redline",
      "purpose": "Audits incoming commercial agreements against firm negotiation playbooks, flagging risks and generating track-changes Word documents.",
      "whatItDoes": "Analyzes indemnification caps, liability clauses, governing law, and payment terms; auto-inserts preferred fallback language.",
      "exampleTasks": [
        "Audit 45-page Master Services Agreement against firm risk playbook",
        "Flag unlimited liability and missing mutual indemnification clauses",
        "Generate track-changes .docx with attorney explanatory comments",
        "Produce one-page executive risk matrix for corporate counsel review"
      ]
    },
    {
      "id": "leg-intake",
      "name": "Elena Rostova",
      "role": "Client Intake & Conflict Clearance Agent",
      "blobatarName": "ElenaLegalIntake",
      "badge": "Intake & Ethical Screening",
      "purpose": "Captures prospective client matter briefs, conducts automated conflict of interest searches, and dispatches engagement letters.",
      "whatItDoes": "Screens corporate registry parents/subsidiaries against active and historical matters in Clio/Elite, generating instant conflict memos.",
      "exampleTasks": [
        "Screen prospective adverse parties against firm database in 15 seconds",
        "Generate structured conflict clearance certificate for partner sign-off",
        "Dispatch engagement letter with trust account retainer payment link",
        "Open new matter folder in NetDocuments / iManage"
      ]
    },
    {
      "id": "leg-time",
      "name": "Sophia Chen",
      "role": "Passive Billable Time Capture Agent",
      "blobatarName": "SophiaTimeOps",
      "badge": "Time & LEDES Billing",
      "purpose": "Reconstructs attorney daily work activities from calendar, Outlook, and document edits into compliant billing entries.",
      "whatItDoes": "Assigns appropriate client matter codes and UTBMS task categories, drafting compliant billing narratives for partner approval.",
      "exampleTasks": [
        "Convert 18-minute client phone call into LEDES A105 billing entry",
        "Aggregate document editing timestamps into structured billable blocks",
        "Audit draft invoices for corporate client outside counsel guidelines",
        "Push approved time entries directly to Clio Manage or 3E"
      ]
    }
  ],
  "workflow": [
    {
      "step": 1,
      "title": "Prospective Client Inquires",
      "agent": "Elena Rostova (Intake Agent)",
      "description": "Corporate client requests legal counsel on M&A transaction or commercial dispute.",
      "output": "Matter details captured in 60 seconds"
    },
    {
      "step": 2,
      "title": "Autonomous Conflict Check",
      "agent": "Elena Rostova (Intake Agent)",
      "description": "Adverse parties, parent companies, and subsidiaries screened against firm client database.",
      "output": "Clean conflict check memo generated"
    },
    {
      "step": 3,
      "title": "Engagement Letter & Retainer",
      "agent": "Autonomous Legal Engine",
      "description": "Dispatches engagement agreement; collects digital retainer deposit via trust account gateway.",
      "output": "Matter opened in Clio / Elite 3E"
    },
    {
      "step": 4,
      "title": "Contract Audit & Playbook Redline",
      "agent": "Marcus Vance (Contract Agent)",
      "description": "Incoming counterparty contract uploaded; AI redlines unfavorable clauses based on firm playbook.",
      "output": "Track-changes Word document ready in 3 mins"
    },
    {
      "step": 5,
      "title": "Automatic Billable Time Capture",
      "agent": "Sophia Chen (Time Agent)",
      "description": "Attorney work automatically translated into compliant UTBMS time entries with zero manual logging.",
      "output": "100% captured billable time"
    },
    {
      "step": 6,
      "title": "Partner Executive Dashboard",
      "agent": "Executive Control Center",
      "description": "Managing partners view firm realization rates, active matter profitability, and WIP aging.",
      "output": "Complete legal practice financial visibility"
    }
  ],
  "useCases": [
    {
      "id": "leg-uc-1",
      "title": "Sub-5-Minute Playbook Contract Redlining",
      "problem": "Attorneys take days to review standard vendor agreements and commercial leases.",
      "solution": "AI audits contracts against your firm’s negotiated playbooks, flagging risks and inserting pre-approved clauses.",
      "agent": "Marcus Vance (Contract Agent)",
      "workflow": [
        "Upload counterparty agreement PDF/Word",
        "AI checks indemnification, cap on liability, and jurisdiction",
        "Inserts preferred standard language",
        "Outputs clean track-changes DOCX"
      ],
      "impact": "Reduces routine contract review time by 80%"
    },
    {
      "id": "leg-uc-2",
      "title": "Instant Ethical Conflict Screening",
      "problem": "Circulating internal conflict memos takes days, causing prospective clients to hire competing firms.",
      "solution": "AI scans active matters, past clients, corporate subsidiaries, and adverse parties in seconds, clearing conflicts.",
      "agent": "Elena Rostova (Intake Agent)",
      "workflow": [
        "Input prospective matter and parties",
        "Cross-reference practice management system",
        "Verify corporate registry ownership",
        "Issue automated clearance certificate"
      ],
      "impact": "Conflict clearance turnaround reduced from 48 hours to 30 seconds"
    },
    {
      "id": "leg-uc-3",
      "title": "Passive Billable Hour Capture",
      "problem": "Lawyers forget to log quick phone calls and emails, resulting in thousands in lost billables every month.",
      "solution": "AI reconstructs attorney daily work activities from calendar, Outlook, and document edits into compliant billing entries.",
      "agent": "Sophia Chen (Time Agent)",
      "workflow": [
        "Track digital work timestamps",
        "Assign appropriate client matter code and UTBMS task",
        "Draft compliant billing narrative",
        "Push to Clio or Elite 3E for partner review"
      ],
      "impact": "+18% increase in captured billable hours"
    },
    {
      "id": "leg-uc-4",
      "title": "Deposition & Discovery Document Summarization",
      "problem": "Litigators spend dozens of non-billable hours reading 200-page deposition transcripts.",
      "solution": "AI extracts chronological facts, witness admissions, contradictions, and key exhibit references into a 2-page brief.",
      "agent": "Marcus Vance (Legal Analyst)",
      "workflow": [
        "Upload deposition transcript PDF",
        "Extract chronological timeline of witness statements",
        "Highlight key evidentiary admissions",
        "Generate indexed executive summary with page citations"
      ],
      "impact": "75% time saved during trial preparation"
    }
  ],
  "interactiveDemo": {
    "title": "Ask Your Legal AI Workforce",
    "subtitle": "Simulate how legal agents conduct instant conflict checks and redline contracts against firm guidelines.",
    "presets": [
      {
        "agentId": "leg-contract",
        "agentName": "Marcus Vance (Contract Agent)",
        "task": "Audit 38-page Master Vendor Agreement against firm liability and indemnification playbook",
        "terminalLogs": [
          {
            "time": "10:14:02",
            "text": "Scanning Master Services Agreement (38 pages)...",
            "status": "info"
          },
          {
            "time": "10:14:06",
            "text": "✓ Section 12 (Indemnification): Uncapped liability flagged for Vendor gross negligence",
            "status": "warning"
          },
          {
            "time": "10:14:10",
            "text": "✓ Section 14 (Governing Law): Delaware jurisdiction matched; no change required",
            "status": "success"
          },
          {
            "time": "10:14:15",
            "text": "✓ Fallback Clause 12.2 inserted: Mutual cap at 2x annual contract fees",
            "status": "success"
          },
          {
            "time": "10:14:19",
            "text": "✓ Track-changes .docx and Executive Risk Summary compiled",
            "status": "done"
          }
        ],
        "summary": "Playbook redline complete in 17 seconds; 3 high-risk clauses remediated with attorney commentary."
      },
      {
        "agentId": "leg-intake",
        "agentName": "Elena Rostova (Intake Agent)",
        "task": "Screen prospective corporate client Apex Holdings Ltd for ethical conflicts of interest",
        "terminalLogs": [
          {
            "time": "11:05:01",
            "text": "Connecting to Practice Management database and corporate registry...",
            "status": "info"
          },
          {
            "time": "11:05:04",
            "text": "✓ 14 affiliated subsidiaries and holding entities indexed",
            "status": "info"
          },
          {
            "time": "11:05:07",
            "text": "✓ Cross-referenced against 1,240 active and historical matters in Clio",
            "status": "success"
          },
          {
            "time": "11:05:10",
            "text": "✓ 0 adverse party matches found; no direct ethical conflict detected",
            "status": "success"
          },
          {
            "time": "11:05:12",
            "text": "✓ Conflict Clearance Certificate issued; engagement letter dispatched to partner",
            "status": "done"
          }
        ],
        "summary": "Conflict search completed in 11 seconds with zero adverse hits; ready for partner engagement."
      }
    ]
  },
  "dashboardMetrics": [
    {
      "label": "Contracts Audited",
      "value": "412",
      "change": "+28% this mo"
    },
    {
      "label": "Average Redline Speed",
      "value": "3.4 mins",
      "change": "Down from 4 hrs"
    },
    {
      "label": "Conflict Check Speed",
      "value": "15 sec",
      "change": "Instant clearance"
    },
    {
      "label": "Billable Realization",
      "value": "94.8%",
      "change": "+12% captured"
    },
    {
      "label": "Active Firm Matters",
      "value": "186",
      "change": "All compliant"
    },
    {
      "label": "AI Legal Operations",
      "value": "6,800",
      "change": "Confidential"
    }
  ],
  "integrations": [
    {
      "name": "Clio / Clio Manage",
      "category": "Legal Practice Management",
      "icon": "Database"
    },
    {
      "name": "Thomson Reuters Elite / 3E",
      "category": "Enterprise Legal Accounting",
      "icon": "Layers"
    },
    {
      "name": "NetDocuments / iManage",
      "category": "Document Management System",
      "icon": "FileCheck"
    },
    {
      "name": "Fastcase / Westlaw API",
      "category": "Case Law & Statutory Research",
      "icon": "Globe"
    },
    {
      "name": "DocuSign Legal",
      "category": "Court & Retainer Digital Signatures",
      "icon": "ShieldCheck"
    },
    {
      "name": "Microsoft 365 Word Add-in",
      "category": "In-Word Contract Redlining",
      "icon": "Zap"
    }
  ],
  "roiMetrics": [
    {
      "metric": "< 4 mins",
      "label": "Commercial Contract Redline",
      "subtext": "Down from 4 hours manual associate drafting"
    },
    {
      "metric": "4.5x faster",
      "label": "Client Intake & Onboarding",
      "subtext": "Automated conflict screening and retainers"
    },
    {
      "metric": "+18%",
      "label": "Captured Billable Hours",
      "subtext": "Passive time tracking eliminates leakage"
    },
    {
      "metric": "20 hrs/wk",
      "label": "Associate Non-Billable Time Saved",
      "subtext": "Allows attorneys to focus on high-value counsel"
    }
  ],
  "caseStudy": {
    "business": "Mid-sized Commercial Litigation & Corporate Law Firm (45 Attorneys)",
    "type": "Corporate Law Firm",
    "challenge": "Associate attorneys were overwhelmed by routine vendor contract reviews and manual conflict checking, causing client intake delays of 3–5 days.",
    "solution": "Deployed Saadhyam AI with Marcus Vance (Contract Redline) and Elena Rostova (Intake & Conflict Check) integrated into Clio Manage.",
    "result": "Reduced routine contract turnaround time by 78%, cut conflict clearance to under 30 seconds, and captured an additional 14.5 billable hours per attorney each month.",
    "verified": true
  },
  "faqs": [
    {
      "q": "How does Saadhyam protect attorney-client privilege and strict confidentiality?",
      "a": "Saadhyam adheres to ABA Model Rules of Professional Conduct and strict confidentiality standards. All legal files are processed in isolated, single-tenant encrypted environments (AES-256) and are never used to train public AI models."
    },
    {
      "q": "Can Saadhyam integrate with our practice management software like Clio, iManage, or NetDocuments?",
      "a": "Yes. Saadhyam connects natively to Clio Manage, Thomson Reuters Elite 3E, NetDocuments, and iManage to automatically create matters, attach redlines, and push LEDES-compliant billing records."
    },
    {
      "q": "Can the AI redline Word documents using our firm’s custom negotiation playbooks?",
      "a": "Yes. You can upload your firm’s specific standard contract clauses, risk tolerance rules, and fallback positions. The AI reviews incoming contracts and generates a track-changes Word (.docx) document with attorney comment balloons."
    },
    {
      "q": "How does the AI capture billable time automatically?",
      "a": "Sophia Time Capture Agent monitors calendar meetings, document editing durations, and client emails. It suggests accurate billing entries with appropriate UTBMS task codes for partner review, eliminating lost billable time."
    },
    {
      "q": "Can the AI perform automated conflict of interest searches across our historical client records?",
      "a": "Yes. Elena Intake Agent scans active and historical matters, corporate subsidiaries, known adverse parties, and key individuals, producing an instant conflict memo for managing partner sign-off."
    }
  ],
  "seo": {
    "title": "AI Workforce for Law Firms & Legal Teams | Saadhyam AI",
    "description": "Automate client intake, ethical conflict checks, contract playbook redlining, legal research, and billable time capture with Saadhyam AI.",
    "keywords": "AI workforce for law firms, legal AI agent, contract redlining AI, Clio integration AI, legal intake automation"
  }
};
