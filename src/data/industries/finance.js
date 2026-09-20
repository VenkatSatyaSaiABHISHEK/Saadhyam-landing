export const financeData = {
  "id": "finance",
  "slug": "finance",
  "name": "Finance & Banking",
  "shortName": "Finance",
  "category": "Financial Services",
  "icon": "Landmark",
  "badge": "Autonomous Banking Operations",
  "eyebrow": "AI Workforce for Banking, Wealth & FinTech",
  "headline": "Turn Your Financial Firm Into an AI-Powered Workforce",
  "subheadline": "Saadhyam AI helps banks, wealth managers, lenders, and fintechs automate client onboarding KYC, loan underwriting, portfolio updates, compliance audits, and document verification with intelligent AI agents.",
  "heroStats": [
    {
      "label": "KYC Verification Time",
      "value": "< 90 sec"
    },
    {
      "label": "Loan Underwriting Speed",
      "value": "6x faster"
    },
    {
      "label": "Client Nurture Rate",
      "value": "99.2%"
    },
    {
      "label": "Audit Trail Accuracy",
      "value": "100%"
    }
  ],
  "heroDashboard": {
    "title": "Financial Services Command Center",
    "status": "5 Certified Financial Agents Active",
    "activeDeal": "Commercial Credit Facility & Wealth Cohort A",
    "metrics": [
      {
        "label": "Applications Processed",
        "value": "1,420",
        "change": "+38% this wk"
      },
      {
        "label": "Instant KYC Approvals",
        "value": "94.2%",
        "change": "Zero human touch"
      },
      {
        "label": "Active Portfolio Inquiries",
        "value": "382",
        "change": "Sub-second reply"
      },
      {
        "label": "AUM Serviced",
        "value": "$840M",
        "change": "Real-time telemetry"
      }
    ]
  },
  "problems": [
    {
      "title": "Multi-day loan application reviews and manual KYC",
      "description": "Lenders lose high-credit borrowers because manual document extraction, income verification, and fraud checks take 3 to 7 business days.",
      "impact": "Up to 45% borrower drop-off to instant digital lending competitors"
    },
    {
      "title": "Wealth clients wait hours for portfolio summaries",
      "description": "High-net-worth investors inquiring about equity allocation, tax-loss harvesting, or yield changes must wait for advisors to manually pull spreadsheets.",
      "impact": "Reduced client satisfaction and high advisor administrative overhead"
    },
    {
      "title": "Compliance teams overwhelmed by AML audits",
      "description": "Anti-Money Laundering (AML) monitoring and SAR filings generate thousands of false-positive alerts, burying compliance analysts in paperwork.",
      "impact": "High regulatory fine risk and inflated compliance staffing costs"
    },
    {
      "title": "Disjointed advisor notes and forgotten follow-ups",
      "description": "Financial advisors conduct hours of client calls every week but fail to log meeting action items, resulting in missed investment execution mandates.",
      "impact": "Lost advisory fee opportunities and compliance exposure"
    }
  ],
  "agents": [
    {
      "id": "fin-kyc",
      "name": "Elena Rostova",
      "role": "Loan Origination & KYC Agent",
      "blobatarName": "ElenaLending",
      "badge": "Lending & Underwriting",
      "purpose": "Verifies government IDs, extracts income and bank statements, checks credit scores, and pre-qualifies loan applicants instantly.",
      "whatItDoes": "Conducts conversational borrower onboarding, validates tax returns and bank statements via Plaid/APIs, and scores credit eligibility.",
      "exampleTasks": [
        "Extract and verify data from 6 months of borrower bank statements",
        "Run real-time credit bureau queries and calculate debt-to-income (DTI)",
        "Screen applicants against OFAC, PEP, and global sanctions watchlists",
        "Issue instant digital pre-qualification letters for mortgages and loans"
      ]
    },
    {
      "id": "fin-wealth",
      "name": "Marcus Sterling",
      "role": "Wealth Client Concierge Agent",
      "blobatarName": "MarcusWealth",
      "badge": "Wealth & Portfolio",
      "purpose": "Answers high-net-worth client portfolio queries, shares performance reports, and prepares advisors for client reviews.",
      "whatItDoes": "Connects to portfolio accounting systems to provide instant asset allocation breakdowns, dividend updates, and performance attribution.",
      "exampleTasks": [
        "Deliver on-demand portfolio return summaries via secure WhatsApp",
        "Summarize market earnings impacts on client stock holdings",
        "Draft personalized quarterly review dossiers for financial advisors",
        "Schedule annual wealth strategy review sessions with clients"
      ]
    }
  ],
  "workflow": [
    {
      "step": 1,
      "title": "Borrower Inquiry",
      "agent": "Elena Rostova (Lending Agent)",
      "description": "Borrower applies on mobile app, website, or messages bank concierge on WhatsApp.",
      "output": "Application initiated within 10 seconds"
    },
    {
      "step": 2,
      "title": "Digital KYC & Document Extraction",
      "agent": "Elena Rostova (Lending Agent)",
      "description": "Extracts ID, tax forms, and pulls 6 months of bank statement transactions via open banking API.",
      "output": "100% verified income and identity match"
    },
    {
      "step": 3,
      "title": "AI Underwriting & Risk Scoring",
      "agent": "Credit Assessment Engine",
      "description": "Evaluates Debt-to-Income (DTI), cash flow stability, and bureau scores against credit policy.",
      "output": "Instant approval sanction with custom rate"
    },
    {
      "step": 4,
      "title": "Digital Agreement & E-Sign",
      "agent": "Autonomous Contract Engine",
      "description": "Generates loan agreement note and collects legally binding biometric e-signature.",
      "output": "Loan contract signed in 3 minutes"
    }
  ],
  "useCases": [
    {
      "id": "fin-uc-1",
      "title": "Autonomous Personal & SME Loan Underwriting",
      "problem": "Underwriters spend 4 hours per file manually calculating cash flow and debt service ratios.",
      "solution": "AI ingests tax returns and bank PDFs, categorizes cash flows, checks bureau scores, and generates credit memos.",
      "agent": "Elena Rostova (Lending Agent)",
      "workflow": [
        "Borrower uploads bank statements",
        "AI reconciles income vs obligations",
        "Computes DTI & credit score",
        "Issues instant decision sanction"
      ],
      "impact": "Loan approval turnaround reduced from 3 days to 4 minutes"
    },
    {
      "id": "fin-uc-2",
      "title": "24/7 Wealth Client Portfolio Inquiries",
      "problem": "Advisors cannot answer client WhatsApp queries about fund performance during market volatility.",
      "solution": "AI securely answers client portfolio queries with exact returns, sector exposures, and tax summaries.",
      "agent": "Marcus Sterling (Wealth Concierge)",
      "workflow": [
        "Client asks: \"How did my tech holdings perform this week?\"",
        "AI queries portfolio accounting system",
        "Generates personalized returns summary",
        "Offers 1-click advisor call"
      ],
      "impact": "Instant response on 92% of routine wealth client questions"
    }
  ],
  "interactiveDemo": {
    "title": "Ask Your AI Workforce",
    "subtitle": "Simulate how your autonomous banking agents process loan files and wealth queries.",
    "presets": [
      {
        "agentId": "fin-kyc",
        "agentName": "Elena Rostova (Lending Agent)",
        "task": "Underwrite $50,000 unsecured SME loan application for TechLogix Inc.",
        "terminalLogs": [
          {
            "time": "14:00:01",
            "text": "Ingesting SME loan application package for TechLogix Inc...",
            "status": "success"
          },
          {
            "time": "14:00:04",
            "text": "✓ 12 months GST/VAT filings and bank statements extracted via OCR",
            "status": "success"
          },
          {
            "time": "14:00:08",
            "text": "✓ Average monthly revenue: $84,200; Net profit margin: 18.4%",
            "status": "success"
          },
          {
            "time": "14:00:13",
            "text": "✓ Commercial bureau score: 782; Zero tax defaults detected",
            "status": "success"
          },
          {
            "time": "14:00:17",
            "text": "✓ Instant loan sanction approved: $50,000 at 10.8% APR (Term: 36 mo)",
            "status": "success"
          },
          {
            "time": "14:00:21",
            "text": "✓ Digital promissory note dispatched via DocuSign to CEO",
            "status": "done"
          }
        ],
        "summary": "Complete commercial credit file underwritten and sanctioned in 20 seconds."
      }
    ]
  },
  "dashboardMetrics": [
    {
      "label": "Loan Apps Underwritten",
      "value": "3,840",
      "change": "+44% this mo"
    },
    {
      "label": "Average Approval Time",
      "value": "3.8 mins",
      "change": "Down from 4 days"
    },
    {
      "label": "KYC Pass Rate",
      "value": "96.2%",
      "change": "Instant biometric"
    },
    {
      "label": "AML False Flags Reduced",
      "value": "-68%",
      "change": "Contextual AI"
    },
    {
      "label": "Client Retention Rate",
      "value": "99.4%",
      "change": "Top quartile"
    },
    {
      "label": "AI Operations Completed",
      "value": "18,400",
      "change": "Audit logged"
    }
  ],
  "integrations": [
    {
      "name": "Core Banking System (Finacle/Temenos)",
      "category": "Core Ledger & Accounts",
      "icon": "Database"
    },
    {
      "name": "Plaid / Open Banking API",
      "category": "Account & Bank Verification",
      "icon": "Layers"
    },
    {
      "name": "Credit Bureaus (Experian/CIBIL)",
      "category": "Risk & Bureau Scoring",
      "icon": "FileCheck"
    },
    {
      "name": "Salesforce Financial Services",
      "category": "Wealth & Loan CRM",
      "icon": "Globe"
    },
    {
      "name": "WhatsApp Financial Gateway",
      "category": "Encrypted Client Messaging",
      "icon": "MessageSquare"
    },
    {
      "name": "DocuSign Financial",
      "category": "Regulatory Digital Signatures",
      "icon": "ShieldCheck"
    }
  ],
  "roiMetrics": [
    {
      "metric": "< 90 sec",
      "label": "Digital KYC Verification",
      "subtext": "Down from 48 hours branch processing"
    },
    {
      "metric": "6x faster",
      "label": "Loan Underwriting Turnaround",
      "subtext": "Accelerated loan disbursement cycle"
    },
    {
      "metric": "-68%",
      "label": "AML False Positive Alerts",
      "subtext": "Compliance teams focus on real threats"
    },
    {
      "metric": "28 hrs/wk",
      "label": "Advisor Admin Time Saved",
      "subtext": "More face-to-face client advisory meetings"
    }
  ],
  "caseStudy": {
    "company": "Sterling Horizon Capital Bank & Lending",
    "type": "Regional Commercial Bank ($4.2B Assets Under Management)",
    "challenge": "Sterling Horizon took 4 to 6 business days to underwrite commercial loans, losing top borrowers to online fintech lenders.",
    "solution": "Integrated Saadhyam Financial AI Workforce with Elena (Lending) and Marcus (Wealth) linked to their core banking platform and Plaid API.",
    "result": "SME loan approvals accelerated to under 15 minutes. Loan origination volume surged by 62% in 90 days."
  },
  "faqs": [
    {
      "q": "How does Saadhyam ensure strict banking compliance and data protection (SOC 2, ISO 27001)?",
      "a": "Saadhyam complies with global financial regulatory guidelines, including SOC 2 Type II, ISO 27001, GLBA, and banking secrecy standards. All customer financial data is encrypted with AES-256 in transit and at rest."
    },
    {
      "q": "Can Saadhyam integrate directly with our Core Banking System?",
      "a": "Yes. Saadhyam features secure ISO 20022 and banking REST API adapters that connect to modern and legacy core banking ledgers to check balances, verify transactions, and book sanctioned loans."
    }
  ],
  "seo": {
    "title": "AI Workforce for Banking & Financial Services | Saadhyam AI",
    "description": "Automate loan underwriting, digital KYC, wealth management reporting, compliance audits, and account servicing with Saadhyam AI.",
    "keywords": "AI workforce for banking, fintech AI agents, loan underwriting automation, KYC verification AI, wealth management bot"
  }
};
