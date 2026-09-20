export const insuranceData = {
  "id": "insurance",
  "slug": "insurance",
  "name": "Insurance Agencies & Brokers",
  "shortName": "Insurance",
  "category": "Financial & Wealth",
  "icon": "ShieldCheck",
  "badge": "Autonomous Insurance Brokerage Operations",
  "eyebrow": "AI Workforce for Independent Insurance Agencies & Brokers",
  "headline": "Turn Your Insurance Agency Into an AI-Powered Workforce",
  "subheadline": "Saadhyam AI empowers independent insurance agencies and brokers to automate First Notice of Loss (FNOL) claims intake, multi-carrier policy quotes, renewal retention follow-ups, and certificate of insurance (COI) issuance with intelligent AI agents.",
  "heroStats": [
    {
      "label": "FNOL Claims Intake Speed",
      "value": "< 3 mins"
    },
    {
      "label": "COI Issuance Turnaround",
      "value": "30 sec"
    },
    {
      "label": "Policy Renewal Retention",
      "value": "94%"
    },
    {
      "label": "Multi-Carrier Quote Prep",
      "value": "5x faster"
    }
  ],
  "heroDashboard": {
    "title": "Insurance Brokerage Operations Center",
    "status": "5 Insurance Agents Active Across 3,400 Policies",
    "activeDeal": "Commercial Fleet Auto & Umbrella — 42 Vehicles",
    "metrics": [
      {
        "label": "Active Policies in Force",
        "value": "3,420",
        "change": "+16% YoY growth"
      },
      {
        "label": "COI Certificates Issued",
        "value": "384",
        "change": "Instant turnaround"
      },
      {
        "label": "FNOL Claims Processed",
        "value": "28",
        "change": "Zero claim backlog"
      },
      {
        "label": "Renewal Retention Rate",
        "value": "94.6%",
        "change": "+4.8% improvement"
      }
    ]
  },
  "problems": [
    {
      "title": "Hours lost manually issuing Certificates of Insurance (COIs)",
      "description": "Commercial contractors and businesses constantly call brokers demanding urgent COIs for job sites, pulling licensed agents away from closing new policies.",
      "impact": "Dozens of lost agent sales hours and frustrated commercial clients"
    },
    {
      "title": "Chaotic First Notice of Loss (FNOL) claims intake",
      "description": "When policyholders get into auto accidents or suffer property damage, filing initial claim details over frantic phone calls leads to incomplete police reports and photos.",
      "impact": "Delayed claim adjusters and unhappy policyholders"
    },
    {
      "title": "Policyholder churn from sudden carrier premium rate hikes",
      "description": "Insurance carriers raise renewal premiums by 20%, and without automated re-shopping, policyholders switch to online direct carriers before the broker can intervene.",
      "impact": "10–15% annual book-of-business premium erosion"
    },
    {
      "title": "Exhausting multi-carrier quoting re-keying into rating engines",
      "description": "Producers spend 45 minutes manually re-typing the same homeowner or commercial driver information into 6 different carrier portals.",
      "impact": "Slow quote turnaround and low closing percentages"
    }
  ],
  "agents": [
    {
      "id": "ins-coi",
      "name": "Samantha Vance",
      "role": "COI & Policyholder Service Agent",
      "blobatarName": "SamanthaInsuranceOps",
      "badge": "COI & Policy Servicing",
      "purpose": "Generates Certificates of Insurance (COIs) in under 30 seconds, verifies policy limits, and issues ACORD-compliant PDF forms.",
      "whatItDoes": "Connects to agency management systems (AMS360, Applied Epic); reads certificate holder requirements and issues compliant certificates.",
      "exampleTasks": [
        "Issue ACORD 25 Certificate of Insurance with additional insured endorsement",
        "Verify commercial general liability policy limits ($1M / $2M aggregate)",
        "Email certified PDF COI directly to general contractor or landlord",
        "Process policy address changes and vehicle ID updates"
      ]
    },
    {
      "id": "ins-claims",
      "name": "David Vance",
      "role": "FNOL Claims Intake & Triage Agent",
      "blobatarName": "DavidClaimsOps",
      "badge": "FNOL & Claims Triage",
      "purpose": "Guides policyholders through FNOL claims reporting, collects incident photos, police reports, and submits structured files to carrier adjusters.",
      "whatItDoes": "Converses empathetically on WhatsApp or phone; logs incident timestamps, GPS coordinates, and dispatches emergency roadside assistance.",
      "exampleTasks": [
        "Collect accident scene photos, driver license details, and police report number",
        "Check policy deductible and coverage endorsements in real time",
        "Dispatch preferred emergency water restoration or auto body repair network",
        "Submit structured FNOL claim ticket directly into carrier adjuster portal"
      ]
    }
  ],
  "workflow": [
    {
      "step": 1,
      "title": "Client Requests COI or Reports Claim",
      "agent": "Samantha Vance / David Vance",
      "description": "Commercial client texts demanding urgent job site certificate.",
      "output": "Request validated in AMS"
    },
    {
      "step": 2,
      "title": "Policy Limit Verification",
      "agent": "Autonomous Insurance Engine",
      "description": "Verifies active coverage limits and additional insured endorsements in Applied Epic / AMS360.",
      "output": "Coverage certified compliant"
    },
    {
      "step": 3,
      "title": "ACORD Form Auto-Generated",
      "agent": "Samantha Vance (COI Agent)",
      "description": "Assembles digital ACORD 25 PDF with agency digital signature seal.",
      "output": "COI issued in 30 seconds"
    },
    {
      "step": 4,
      "title": "Automated 45-Day Renewal Re-Shop",
      "agent": "Autonomous Rating Engine",
      "description": "Detects upcoming carrier rate increase and automatically shops alternative carrier rates.",
      "output": "Client retained with better rate"
    },
    {
      "step": 5,
      "title": "Agency Principal Dashboard",
      "agent": "Executive Control Center",
      "description": "Broker principal monitors total premium in force, commission revenue, and loss ratios.",
      "output": "Agency book-of-business visibility"
    }
  ],
  "useCases": [
    {
      "id": "ins-uc-1",
      "title": "Instant 30-Second Certificate of Insurance (COI)",
      "problem": "Contractor clients wait hours for staff to manually generate ACORD certificates, delaying job site starts.",
      "solution": "AI reads client email or WhatsApp, verifies policy limits in agency management software, and sends approved PDF COI.",
      "agent": "Samantha Vance (COI Agent)",
      "workflow": [
        "Client uploads contract COI requirements",
        "AI checks policy limits in AMS360/Applied Epic",
        "Generates signed ACORD 25 certificate PDF",
        "Emails certificate holder and CCs broker"
      ],
      "impact": "COI turnaround reduced from 4 hours to 30 seconds"
    },
    {
      "id": "ins-uc-2",
      "title": "Autonomous FNOL Claims Intake & Triage",
      "problem": "Accident victims struggle through complex claim paperwork, leading to missing photos and delayed repairs.",
      "solution": "AI guides policyholder through friendly WhatsApp photo capture and files direct FNOL report to carrier.",
      "agent": "David Vance (Claims Agent)",
      "workflow": [
        "Policyholder reports accident on WhatsApp",
        "AI captures incident details, vehicle damage photos, and police report",
        "Verifies collision deductible",
        "Submits structured claim to carrier adjuster portal"
      ],
      "impact": "Reduces FNOL intake time by 75% with zero missing documentation"
    }
  ],
  "interactiveDemo": {
    "title": "Ask Your Insurance AI Workforce",
    "subtitle": "Simulate how insurance agents issue instant COIs and process first notice of loss claims.",
    "presets": [
      {
        "agentId": "ins-coi",
        "agentName": "Samantha Vance (COI Agent)",
        "task": "Commercial electrical contractor requesting urgent ACORD 25 COI for general contractor job site",
        "terminalLogs": [
          {
            "time": "09:30:01",
            "text": "Received COI request from Apex Electric Inc for project at 500 Market St...",
            "status": "info"
          },
          {
            "time": "09:30:04",
            "text": "✓ Verified active General Liability Policy #GL-89421 in Applied Epic",
            "status": "info"
          },
          {
            "time": "09:30:07",
            "text": "✓ Limits confirmed: $1,000,000 Occ / $2,000,000 Agg / Additional Insured endorsed",
            "status": "success"
          },
          {
            "time": "09:30:11",
            "text": "✓ ACORD 25 Certificate PDF compiled with digital agency signature seal",
            "status": "success"
          },
          {
            "time": "09:30:14",
            "text": "✓ Dispatched certified COI to general contractor with confirmation copy to client",
            "status": "done"
          }
        ],
        "summary": "Compliant ACORD 25 COI issued in 13 seconds with zero manual agency producer touch."
      }
    ]
  },
  "dashboardMetrics": [
    {
      "label": "Policies in Force",
      "value": "3,420",
      "change": "+16% YoY"
    },
    {
      "label": "COI Turnaround Time",
      "value": "28 sec",
      "change": "Down from 4 hrs"
    },
    {
      "label": "Retention Rate",
      "value": "94.6%",
      "change": "+4.8% renewal lift"
    },
    {
      "label": "FNOL Claims Intake",
      "value": "2.4 mins",
      "change": "Zero claim backlog"
    },
    {
      "label": "Multi-Carrier Quote Time",
      "value": "8 mins",
      "change": "5x faster"
    },
    {
      "label": "Commercial Loss Ratio",
      "value": "42.1%",
      "change": "Healthy book"
    }
  ],
  "integrations": [
    {
      "name": "Applied Epic / TAM",
      "category": "Agency Management System",
      "icon": "Database"
    },
    {
      "name": "Vertafore AMS360",
      "category": "Insurance Agency Management",
      "icon": "Layers"
    },
    {
      "name": "EZLynx / PL Rating",
      "category": "Comparative Rating Engines",
      "icon": "Sliders"
    },
    {
      "name": "WhatsApp Business API",
      "category": "Direct Policyholder Messaging",
      "icon": "Smartphone"
    },
    {
      "name": "DocuSign Insurance",
      "category": "Policy Applications & Signatures",
      "icon": "FileText"
    },
    {
      "name": "Twilio Voice AI",
      "category": "24/7 After-Hours Claims Phone Line",
      "icon": "Phone"
    }
  ],
  "roiMetrics": [
    {
      "metric": "30 sec",
      "label": "Certificate of Insurance (COI) Turnaround",
      "subtext": "Down from 4 hours of manual producer drafting"
    },
    {
      "metric": "+4.8%",
      "label": "Book-of-Business Retention Lift",
      "subtext": "Automated 45-day renewal re-shopping protects accounts"
    },
    {
      "metric": "< 3 mins",
      "label": "FNOL Claims Intake Speed",
      "subtext": "Complete photos and police details submitted to carrier"
    },
    {
      "metric": "25 hrs/wk",
      "label": "Licensed Producer Time Reclaimed",
      "subtext": "Producers focus on closing new commercial business"
    }
  ],
  "caseStudy": {
    "business": "Independent Commercial & Personal Lines Insurance Brokerage (18 Agents)",
    "type": "Independent Insurance Agency",
    "challenge": "Agents spent 30% of their work week manually generating COIs for contractors and handling routine policy queries, reducing new commercial sales calls.",
    "solution": "Integrated Saadhyam AI with Applied Epic, deploying Samantha Vance for COI automation and David Vance for FNOL claims triage.",
    "result": "Automated 92% of all COI requests in under 30 seconds, increased commercial renewal retention to 94.6%, and unlocked 25 hours per week of selling time for producers.",
    "verified": true
  },
  "faqs": [
    {
      "q": "Does Saadhyam integrate with Applied Epic, AMS360, and EZLynx?",
      "a": "Yes. Saadhyam connects directly with leading agency management systems including Applied Epic, Vertafore AMS360, HawkSoft, and comparative raters like EZLynx."
    },
    {
      "q": "How does the AI generate Certificates of Insurance (COIs) safely?",
      "a": "The AI reads the client’s request, verifies existing active policy limits and endorsements in your agency system, populates an official ACORD 25 PDF form, and applies your agency signature stamp."
    },
    {
      "q": "How does it help with policy renewals and premium rate increases?",
      "a": "45 days prior to expiration, Saadhyam checks the renewal rate from the incumbent carrier. If a rate hike exceeds your threshold (e.g. >10%), it automatically initiates a comparative re-quote to offer alternative options."
    },
    {
      "q": "Can policyholders submit accident claims via WhatsApp?",
      "a": "Yes. David Claims Agent guides the customer through photo uploads, driver license capture, and accident questions, assembling a complete FNOL dossier for the carrier adjuster."
    }
  ],
  "seo": {
    "title": "AI Workforce for Insurance Agencies & Brokers | Saadhyam AI",
    "description": "Automate Certificate of Insurance (COI) generation, FNOL claims intake, policyholder renewals, and carrier quoting with Saadhyam AI.",
    "keywords": "AI workforce for insurance agencies, automated COI generation, Applied Epic AI integration, FNOL claims intake AI"
  }
};
