export const professionalServicesData = {
  "id": "professional-services",
  "slug": "professional-services",
  "name": "Professional Services & Consulting",
  "shortName": "Consulting",
  "category": "Professional & Advisory",
  "icon": "Briefcase",
  "badge": "Autonomous Advisory Operations",
  "eyebrow": "AI Workforce for Management Consultancies, Agencies & Advisory Firms",
  "headline": "Turn Your Advisory Firm Into an AI-Powered Workforce",
  "subheadline": "Saadhyam AI helps consultancies, marketing agencies, and accounting firms automate RFP proposal generation, client onboarding, timesheet logging, deliverable research, and executive reporting with intelligent AI agents.",
  "heroStats": [
    {
      "label": "RFP Proposal Draft Speed",
      "value": "< 10 mins"
    },
    {
      "label": "Client Onboarding Time",
      "value": "< 24 hrs"
    },
    {
      "label": "Billable Utilization Rate",
      "value": "+16%"
    },
    {
      "label": "Research Synthesis Speed",
      "value": "5x faster"
    }
  ],
  "heroDashboard": {
    "title": "Advisory Firm Operations Center",
    "status": "5 Advisory Agents Active Across 34 Client Engagements",
    "activeDeal": "Vanguard Strategy — Global Supply Chain Transformation",
    "metrics": [
      {
        "label": "Active Client Engagements",
        "value": "34",
        "change": "100% on schedule"
      },
      {
        "label": "RFP Win Rate",
        "value": "42.8%",
        "change": "+8.4% this quarter"
      },
      {
        "label": "Billable Realization Rate",
        "value": "93.2%",
        "change": "Near zero leakage"
      },
      {
        "label": "Executive Briefs Produced",
        "value": "184",
        "change": "This month"
      }
    ]
  },
  "problems": [
    {
      "title": "Dozens of partner hours wasted drafting bespoke RFP proposals",
      "description": "Responding to corporate RFPs requires searching through past pitch decks, re-writing bios, and recalculating project budgets under tight deadlines.",
      "impact": "Missed RFP deadlines and hundreds of thousands in unbilled partner hours"
    },
    {
      "title": "Manual client onboarding and engagement kickoff delays",
      "description": "Collecting client NDAs, scoping deliverables, requesting cloud credentials, and scheduling kickoff meetings takes weeks of back-and-forth emails.",
      "impact": "Slow project ramp-ups and delayed cash collection"
    },
    {
      "title": "Time tracking leakage and forgotten project hours",
      "description": "Consultants and agency creatives wait until Friday afternoon to guess where their billable hours went, under-reporting client work.",
      "impact": "10–18% billable revenue lost every billing cycle"
    },
    {
      "title": "Exhausting market research and competitive benchmark synthesis",
      "description": "Junior analysts spend late nights manually compiling competitor matrices, quarterly filings, and industry trend reports into slides.",
      "impact": "High analyst turnover and slow deliverable turnaround"
    }
  ],
  "agents": [
    {
      "id": "prof-proposal",
      "name": "Julian Reed",
      "role": "RFP Proposal & Pitch Deck Agent",
      "blobatarName": "JulianConsultOps",
      "badge": "RFP & Pitch Generation",
      "purpose": "Audits RFP requirements, extracts relevant past case studies, and drafts tailored commercial proposals and slide decks.",
      "whatItDoes": "Indexes historical firm proposals, matches team bios and client testimonials, and formats compliant bid responses in minutes.",
      "exampleTasks": [
        "Parse 60-page Enterprise RFP PDF and extract mandatory evaluation criteria",
        "Draft structured proposal sections with past client case studies and deliverables",
        "Calculate transparent staffing fee breakdown based on partner/analyst rates",
        "Generate formatted client pitch deck and executive summary"
      ]
    },
    {
      "id": "prof-research",
      "name": "Clara Sterling",
      "role": "Market Research & Benchmark Agent",
      "blobatarName": "ClaraResearchOps",
      "badge": "Research & Deliverable Synthesis",
      "purpose": "Synthesizes market data, competitive intelligence, and SEC filings into executive briefs for client deliverables.",
      "whatItDoes": "Scrapes financial databases, earnings transcripts, and regulatory filings; compiles benchmark comparison tables and slide drafts.",
      "exampleTasks": [
        "Analyze 10 competitor annual reports and draft comparison matrix",
        "Summarize key industry regulatory shifts impacting client business",
        "Produce clean slide charts and data citations for consulting engagement",
        "Draft weekly client progress email with completed work milestones"
      ]
    }
  ],
  "workflow": [
    {
      "step": 1,
      "title": "RFP or Lead Received",
      "agent": "Julian Reed (Proposal Agent)",
      "description": "Corporate client issues RFP for strategy consulting or agency retainer.",
      "output": "Requirements matrix created"
    },
    {
      "step": 2,
      "title": "Proposal Drafted in 10 Mins",
      "agent": "Julian Reed (Proposal Agent)",
      "description": "Synthesizes firm case studies, consultant credentials, and commercial terms into winning bid.",
      "output": "Executive proposal ready"
    },
    {
      "step": 3,
      "title": "Contract & Kickoff Onboarding",
      "agent": "Autonomous Advisory Engine",
      "description": "Dispatches engagement agreement, gathers client assets, and schedules kickoff workshop.",
      "output": "Client onboarded in 24 hours"
    },
    {
      "step": 4,
      "title": "Research & Deliverable Synthesis",
      "agent": "Clara Sterling (Research Agent)",
      "description": "Compiles market research benchmarks and drafts client presentation slides.",
      "output": "Deliverable drafted for partner review"
    },
    {
      "step": 5,
      "title": "Partner Executive Dashboard",
      "agent": "Executive Control Center",
      "description": "Managing partners monitor billable utilization, project margins, and client satisfaction.",
      "output": "Firm profitability visibility"
    }
  ],
  "useCases": [
    {
      "id": "prof-uc-1",
      "title": "Sub-15-Minute RFP Proposal Assembly",
      "problem": "Consulting partners spend 20+ hours piecing together past pitch decks for enterprise bids.",
      "solution": "AI scans the RFP, pulls your firm’s best historical case studies, and outputs a complete branded proposal.",
      "agent": "Julian Reed (Proposal Agent)",
      "workflow": [
        "Upload RFP document",
        "AI maps requirements to firm past experience",
        "Drafts executive summary and fee structure",
        "Generates polished presentation deck"
      ],
      "impact": "Reduces RFP preparation time by 85% with higher win rates"
    },
    {
      "id": "prof-uc-2",
      "title": "Autonomous Client Deliverable Research",
      "problem": "Junior staff spend hundreds of non-billable hours reading filings and gathering competitor benchmarks.",
      "solution": "AI ingests client industry data, pulls verified financial filings, and generates structured analysis tables.",
      "agent": "Clara Sterling (Research Agent)",
      "workflow": [
        "Enter research question and competitor list",
        "AI analyzes public filings and industry databases",
        "Formats comparative benchmark table",
        "Drafts bulleted executive summary with source links"
      ],
      "impact": "Accelerates deliverable research turnaround by 5x"
    }
  ],
  "interactiveDemo": {
    "title": "Ask Your Advisory AI Workforce",
    "subtitle": "Simulate how consulting AI agents draft proposals and compile competitive market research.",
    "presets": [
      {
        "agentId": "prof-proposal",
        "agentName": "Julian Reed (Proposal Agent)",
        "task": "Draft enterprise consulting proposal for Fortune 500 Retailer digital transformation RFP",
        "terminalLogs": [
          {
            "time": "16:00:01",
            "text": "Ingesting 48-page Digital Transformation RFP PDF...",
            "status": "info"
          },
          {
            "time": "16:00:05",
            "text": "✓ 6 core workstreams identified: Omnichannel, ERP Migration, Change Mgmt",
            "status": "info"
          },
          {
            "time": "16:00:09",
            "text": "✓ Extracted 3 relevant retail case studies from firm repository",
            "status": "success"
          },
          {
            "time": "16:00:13",
            "text": "✓ Modeled 12-week phased project plan and blended staffing rates",
            "status": "success"
          },
          {
            "time": "16:00:16",
            "text": "✓ Draft proposal and slide deck compiled for Partner review",
            "status": "done"
          }
        ],
        "summary": "Complete proposal ready in 15 seconds; tailored to client requirements with verified past case studies."
      }
    ]
  },
  "dashboardMetrics": [
    {
      "label": "RFP Win Rate",
      "value": "42.8%",
      "change": "+8.4% this quarter"
    },
    {
      "label": "Proposal Drafting Time",
      "value": "12 mins",
      "change": "Down from 20 hrs"
    },
    {
      "label": "Billable Realization",
      "value": "94.2%",
      "change": "+14% captured"
    },
    {
      "label": "Active Projects",
      "value": "34",
      "change": "All profitable"
    },
    {
      "label": "Onboarding Speed",
      "value": "< 24 hrs",
      "change": "Down from 10 days"
    },
    {
      "label": "Client Net Promoter",
      "value": "78 NPS",
      "change": "Top quartile"
    }
  ],
  "integrations": [
    {
      "name": "Monday.com / Asana",
      "category": "Project & Engagement Management",
      "icon": "Layers"
    },
    {
      "name": "Harvest / Toggl",
      "category": "Time Tracking & Utilization",
      "icon": "Clock"
    },
    {
      "name": "QuickBooks / Xero",
      "category": "Accounting & Client Invoicing",
      "icon": "DollarSign"
    },
    {
      "name": "Salesforce / HubSpot",
      "category": "Client CRM & Pipeline",
      "icon": "Database"
    },
    {
      "name": "DocuSign / PandaDoc",
      "category": "Proposals & Engagement Letters",
      "icon": "FileText"
    },
    {
      "name": "Microsoft PowerPoint / Slides",
      "category": "Deliverable Presentations",
      "icon": "Presentation"
    }
  ],
  "roiMetrics": [
    {
      "metric": "< 15 mins",
      "label": "RFP Proposal Draft Speed",
      "subtext": "Down from 20+ partner hours of manual assembly"
    },
    {
      "metric": "+16%",
      "label": "Billable Utilization Rate",
      "subtext": "Reduces non-billable administrative and research work"
    },
    {
      "metric": "< 24 hrs",
      "label": "Client Onboarding Turnaround",
      "subtext": "Contracts, NDAs, and project kickoffs automated"
    },
    {
      "metric": "5x faster",
      "label": "Competitive Intelligence Synthesis",
      "subtext": "Deep-dive market data turned into client slides"
    }
  ],
  "caseStudy": {
    "business": "Boutique Management Consultancy (30 Principals & Associates)",
    "type": "Strategy Consulting Firm",
    "challenge": "Partners were bogged down drafting 20-page RFP responses, limiting the number of bids the firm could submit and slowing project delivery.",
    "solution": "Implemented Saadhyam AI with Julian Reed (Proposal Agent) and Clara Sterling (Research Agent) connected to internal knowledge bases.",
    "result": "Tripled RFP response capacity, increased proposal win rate from 28% to 42%, and saved over 120 hours of non-billable partner time every month.",
    "verified": true
  },
  "faqs": [
    {
      "q": "How does Saadhyam draft proposals that accurately reflect our firm’s past work?",
      "a": "Saadhyam indexes your firm’s approved past proposals, case studies, team CVs, and methodology frameworks, assembling proposals that match your exact brand voice and pricing models."
    },
    {
      "q": "Can the AI assist with client deliverable research and competitor benchmarks?",
      "a": "Yes. Clara Research Agent can ingest hundreds of financial filings, market reports, and industry publications to output clean structured tables, citations, and executive summaries."
    },
    {
      "q": "Does it integrate with our time tracking and project management tools?",
      "a": "Yes. Saadhyam connects with tools like Harvest, Toggl, Monday.com, and Asana to log billable tasks, track project phase budgets, and alert partners when margins slip."
    },
    {
      "q": "Is our firm’s proprietary methodology and client data secure?",
      "a": "Absolutely. Saadhyam provides enterprise-grade data isolation. Your files, proprietary frameworks, and client communications are strictly private and never used for public training."
    }
  ],
  "seo": {
    "title": "AI Workforce for Consulting & Professional Services | Saadhyam AI",
    "description": "Automate RFP proposals, client onboarding, market research synthesis, and billable time tracking with Saadhyam AI.",
    "keywords": "AI workforce for consulting firms, RFP proposal automation AI, management consulting AI agent, billable time capture"
  }
};
