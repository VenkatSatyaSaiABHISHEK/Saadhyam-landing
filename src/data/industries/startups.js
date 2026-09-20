export const startupsData = {
  "id": "startups",
  "slug": "startups",
  "name": "High-Growth Tech Startups",
  "shortName": "Startups",
  "category": "Modern Business & Tech",
  "icon": "Rocket",
  "badge": "Autonomous Startup Operations",
  "eyebrow": "AI Workforce for Founders, YC Startups & Scaleups",
  "headline": "Scale Your Startup 10x Faster With an AI Workforce",
  "subheadline": "Saadhyam AI empowers lean founding teams to automate outbound SDR prospecting, inbound qualification, investor updates, candidate screening, and 24/7 customer onboarding with intelligent AI agents.",
  "heroStats": [
    {
      "label": "Outbound Pipeline Created",
      "value": "3.4x"
    },
    {
      "label": "Inbound Lead Response",
      "value": "< 15 sec"
    },
    {
      "label": "Investor Update Prep Time",
      "value": "5 mins"
    },
    {
      "label": "Headcount Leverage",
      "value": "10x"
    }
  ],
  "heroDashboard": {
    "title": "Startup Growth Command Center",
    "status": "4 Autonomous Growth Agents Active",
    "activeDeal": "Series A Pipeline — $1.8M ARR Run-Rate Target",
    "metrics": [
      {
        "label": "Qualified Demo Bookings",
        "value": "142",
        "change": "+45% this month"
      },
      {
        "label": "Inbound Response Time",
        "value": "12 sec",
        "change": "Zero lead decay"
      },
      {
        "label": "Outreach Deliverability",
        "value": "98.6%",
        "change": "Custom warmup"
      },
      {
        "label": "Founder Time Saved",
        "value": "25 hrs/wk",
        "change": "Redirected to product"
      }
    ]
  },
  "problems": [
    {
      "title": "Founders bogged down in repetitive sales prospecting",
      "description": "Instead of shipping product and speaking with enterprise customers, technical founders spend 20+ hours a week scraping LinkedIn and sending cold emails.",
      "impact": "Slow product iteration speed and stalled engineering velocity"
    },
    {
      "title": "Inbound signups go cold due to delayed follow-ups",
      "description": "High-intent signups test your SaaS product, encounter onboarding roadblocks, and churn before anyone on your small team sends a personal follow-up.",
      "impact": "Low trial-to-paid conversion rates and wasted marketing budget"
    },
    {
      "title": "Manual preparation of weekly investor and board updates",
      "description": "Pulling revenue metrics, churn rates, cash runway, and product roadmaps across Stripe, Mixpanel, and GitHub takes full days every month.",
      "impact": "Distracted leadership and delayed investor updates"
    },
    {
      "title": "Resume screening fatigue during rapid hiring sprints",
      "description": "Posting a job opening attracts hundreds of unqualified applicants, consuming hours of founder interview time without surfacing top talent.",
      "impact": "Slow hiring cycles and delayed team expansion"
    }
  ],
  "agents": [
    {
      "id": "startup-sdr",
      "name": "Leo Hunter",
      "role": "Autonomous Outbound SDR Agent",
      "blobatarName": "LeoStartupSDR",
      "badge": "Outbound Pipeline Generation",
      "purpose": "Researches target accounts, drafts highly personalized multi-channel outreach, and books qualified discovery calls directly onto founder calendars.",
      "whatItDoes": "Enriches ICP prospects with firmographic data, monitors buying signals (fundraising, job posts), and engages prospects with personalized value props.",
      "exampleTasks": [
        "Enrich 200 target VP of Engineering profiles matching ideal customer persona",
        "Draft personalized icebreakers referencing recent company news or podcast talks",
        "Follow up on unread emails with relevant case study metrics",
        "Confirm prospect availability and drop Google Meet invite with agenda"
      ]
    },
    {
      "id": "startup-onboard",
      "name": "Maya Pulse",
      "role": "Inbound Product Qualification & Onboarding Agent",
      "blobatarName": "MayaOnboarding",
      "badge": "Trial-to-Paid Conversion",
      "purpose": "Guides new signups through workspace setup, answers API questions, and identifies high-value accounts for sales calls.",
      "whatItDoes": "Monitors product analytics events, pings users who get stuck during onboarding, and routes enterprise accounts to founders.",
      "exampleTasks": [
        "Message trial user within 60 seconds of signup offering tailored onboarding guidance",
        "Identify enterprise domain signups and trigger instant Slack alert to founder",
        "Walk developer through API authentication and webhook configuration",
        "Schedule product demo when team account invites 5+ coworkers"
      ]
    }
  ],
  "workflow": [
    {
      "step": 1,
      "title": "Buying Signal Detected",
      "agent": "Leo Hunter (Autonomous SDR)",
      "description": "Target startup raises Series A or hires key role; profile enriched with contact data.",
      "output": "ICP account verified"
    },
    {
      "step": 2,
      "title": "Hyper-Personalized Outreach",
      "agent": "Leo Hunter (Autonomous SDR)",
      "description": "Dispatches contextual email referencing company milestones and specific business pain.",
      "output": "High-open rate message sent"
    },
    {
      "step": 3,
      "title": "Prospect Responds or Signs Up",
      "agent": "Maya Pulse (Onboarding Agent)",
      "description": "Answers pricing questions or guides user through interactive onboarding.",
      "output": "Prospect qualified in 15 seconds"
    },
    {
      "step": 4,
      "title": "Demo Booked on Calendar",
      "agent": "Autonomous Calendar Engine",
      "description": "Schedules qualified prospect directly onto founder Google Calendar with executive brief.",
      "output": "Demo ready with pre-call dossier"
    },
    {
      "step": 5,
      "title": "Founder Performance Dashboard",
      "agent": "Executive Control Center",
      "description": "Displays pipeline velocity, trial-to-paid conversion rate, and revenue burn multiple.",
      "output": "Real-time board metrics dashboard"
    }
  ],
  "useCases": [
    {
      "id": "startup-uc-1",
      "title": "Autonomous Outbound SDR Engine",
      "problem": "Early-stage founders cannot afford $120k/yr full-time SDRs to generate outbound sales pipeline.",
      "solution": "AI continuously enriches target accounts, writes tailored emails, and books qualified meetings.",
      "agent": "Leo Hunter (Outbound SDR)",
      "workflow": [
        "Define ICP criteria",
        "AI finds target decision makers on LinkedIn/Apollo",
        "Crafts personalized outreach",
        "Books demo directly on founder calendar"
      ],
      "impact": "Generates 20–30 qualified B2B demos per month on autopilot"
    },
    {
      "id": "startup-uc-2",
      "title": "Instant Inbound Lead Qualification",
      "problem": "Leads submitting website contact forms wait 24 hours for a reply, resulting in 80% drop-off.",
      "solution": "AI engages incoming leads within 15 seconds, qualifies budget and timeline, and schedules instant demos.",
      "agent": "Maya Pulse (Onboarding Agent)",
      "workflow": [
        "User submits form or starts trial",
        "AI qualifies company size and use case",
        "Answers technical architecture questions",
        "Books instant calendar demo"
      ],
      "impact": "Increases demo show-up and booking rate by 3.4x"
    }
  ],
  "interactiveDemo": {
    "title": "Ask Your Startup AI Workforce",
    "subtitle": "Simulate how AI employees generate sales pipeline and qualify incoming product signups.",
    "presets": [
      {
        "agentId": "startup-sdr",
        "agentName": "Leo Hunter (Outbound SDR)",
        "task": "Research and engage CTO of newly funded FinTech startup for B2B demo",
        "terminalLogs": [
          {
            "time": "09:00:01",
            "text": "Signal detected: FinScale raises $14M Series A funding...",
            "status": "info"
          },
          {
            "time": "09:00:04",
            "text": "✓ CTO identified: Alex Rivera (ex-Stripe engineering leader)",
            "status": "info"
          },
          {
            "time": "09:00:08",
            "text": "✓ Enriched email and verified deliverability (MX score 100%)",
            "status": "success"
          },
          {
            "time": "09:00:12",
            "text": "✓ Drafted personalized note referencing rapid scaling and compliance infrastructure",
            "status": "success"
          },
          {
            "time": "09:00:15",
            "text": "✓ Follow-up scheduled for Day 3 if unopened; meeting calendar link active",
            "status": "done"
          }
        ],
        "summary": "Target account personalized and engaged within 15 seconds of funding announcement."
      }
    ]
  },
  "dashboardMetrics": [
    {
      "label": "Outbound Pipeline",
      "value": "$480,000",
      "change": "+38% this mo"
    },
    {
      "label": "Demo Booking Rate",
      "value": "14.2%",
      "change": "Industry avg 3%"
    },
    {
      "label": "Inbound Response Time",
      "value": "12 sec",
      "change": "Instant routing"
    },
    {
      "label": "Onboarding Activation",
      "value": "64.8%",
      "change": "+18% trial conversion"
    },
    {
      "label": "Burn Rate Savings",
      "value": "$18,500/mo",
      "change": "No SDR agency fees"
    },
    {
      "label": "Founder Hours Saved",
      "value": "25 hrs/wk",
      "change": "Focused on product"
    }
  ],
  "integrations": [
    {
      "name": "HubSpot / Close CRM",
      "category": "Modern Startup CRM",
      "icon": "Database"
    },
    {
      "name": "Apollo.io / Clay",
      "category": "Prospect Data Enrichment",
      "icon": "Layers"
    },
    {
      "name": "Slack / Discord",
      "category": "Team Notifications & Alerting",
      "icon": "MessageSquare"
    },
    {
      "name": "Stripe Billing",
      "category": "Payment & Subscription Analytics",
      "icon": "DollarSign"
    },
    {
      "name": "Google Calendar / Cal.com",
      "category": "Automated Meeting Booking",
      "icon": "Calendar"
    },
    {
      "name": "PostHog / Mixpanel",
      "category": "Product Telemetry & Activation",
      "icon": "Activity"
    }
  ],
  "roiMetrics": [
    {
      "metric": "3.4x",
      "label": "More Qualified Sales Meetings",
      "subtext": "Continuous AI SDR outbound and instant inbound booking"
    },
    {
      "metric": "$18k+/mo",
      "label": "Payroll & Agency Savings",
      "subtext": "Replaces expensive outbound prospecting agencies"
    },
    {
      "metric": "< 15 sec",
      "label": "Inbound Lead Response Speed",
      "subtext": "Eliminates lead decay and increases demo attendance"
    },
    {
      "metric": "25 hrs/wk",
      "label": "Founder Time Reclaimed",
      "subtext": "Frees leadership to focus on product and customers"
    }
  ],
  "caseStudy": {
    "business": "Seed-Stage B2B AI Developer Tools Startup (YC W24)",
    "type": "B2B SaaS Startup",
    "challenge": "With only two technical founders, outbound sales prospecting was inconsistent, resulting in an unpredictable sales pipeline and slow enterprise traction.",
    "solution": "Deployed Saadhyam AI with Leo Hunter (Outbound SDR) integrated into Apollo and Close CRM to autonomously prospect engineering leaders.",
    "result": "Booked 38 enterprise discovery demos in 60 days, accelerated ARR to $500k, and closed a $3M seed funding round without hiring a full-time sales rep.",
    "verified": true
  },
  "faqs": [
    {
      "q": "How does the AI SDR find verified email addresses and company information?",
      "a": "Saadhyam integrates with trusted data providers (like Apollo, Clay, and Clearbit) to identify real decision-makers, verify email deliverability, and analyze current company job postings and news."
    },
    {
      "q": "Will the AI sound like a generic, robotic spammer?",
      "a": "No. Saadhyam analyzes prospect LinkedIn profiles, company announcements, and recent GitHub/blog activity to craft genuine, value-oriented emails that read like a well-researched personal note from a founder."
    },
    {
      "q": "Can the AI qualify product signups and ping founders in Slack?",
      "a": "Yes. When an enterprise account (e.g., a Fortune 500 domain) signs up, Maya Onboarding Agent detects high intent and sends an instant Slack alert with meeting calendar options."
    },
    {
      "q": "Can we configure custom qualification criteria before booking a demo?",
      "a": "Yes. You can define exact criteria (e.g., minimum team size, specific tech stack, budget threshold) so only qualified prospects land on your calendar."
    }
  ],
  "seo": {
    "title": "AI Workforce for Startups & High-Growth Tech Companies | Saadhyam AI",
    "description": "Scale your startup 10x faster with AI agents for outbound SDR prospecting, inbound lead qualification, onboarding, and operations.",
    "keywords": "AI SDR for startups, startup sales automation, inbound lead qualification AI, autonomous founder workforce"
  }
};
