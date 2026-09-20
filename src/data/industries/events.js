export const eventsData = {
  "id": "events",
  "slug": "events",
  "name": "Conferences & Event Management",
  "shortName": "Events",
  "category": "Modern Business & Tech",
  "icon": "Calendar",
  "badge": "Autonomous Event Operations",
  "eyebrow": "AI Workforce for Corporate Conferences, Expos & Event Organizers",
  "headline": "Turn Your Event Operations Into an AI-Powered Workforce",
  "subheadline": "Saadhyam AI empowers conference producers and event agencies to automate attendee registration support, sponsor prospectus outreach, speaker asset collection, schedule updates, and VIP badge concierge with intelligent AI agents.",
  "heroStats": [
    {
      "label": "Attendee Ticket Support Deflection",
      "value": "86%"
    },
    {
      "label": "Sponsor Lead Follow-up Speed",
      "value": "< 2 mins"
    },
    {
      "label": "Speaker Asset Collection",
      "value": "100% on time"
    },
    {
      "label": "VIP Concierge Response",
      "value": "< 10 sec"
    }
  ],
  "heroDashboard": {
    "title": "Conference Operations Command Center",
    "status": "5 Event Agents Active Across 4,200 Attendees",
    "activeDeal": "FutureTech Summit 2026 — Main Hall (Day 1 Live)",
    "metrics": [
      {
        "label": "Registered Attendees",
        "value": "4,280",
        "change": "100% badged"
      },
      {
        "label": "Live Q&A Queries Answered",
        "value": "1,840",
        "change": "Avg 8 sec"
      },
      {
        "label": "Sponsorship Pipeline",
        "value": "$420,000",
        "change": "Sold out"
      },
      {
        "label": "Session Attendance Rate",
        "value": "92.4%",
        "change": "+14% vs 2025"
      }
    ]
  },
  "problems": [
    {
      "title": "Inboxes flooded with repetitive attendee logistical questions",
      "description": "Event organizers drown under thousands of emails asking about badge pick-up locations, parking vouchers, hotel room blocks, and dietary accommodations.",
      "impact": "Critical production deadlines missed and delayed stage schedules"
    },
    {
      "title": "Slow follow-up with inbound corporate sponsor leads",
      "description": "High-value tech sponsors request exhibitor prospectuses, but busy organizers take 3–5 days to send pricing decks and floor plans.",
      "impact": "Lost sponsorship revenue to competing industry conferences"
    },
    {
      "title": "Chasing keynote speakers for bios, headshots, and slide decks",
      "description": "Producers spend weeks sending frantic emails to celebrity keynotes and panel executives to collect slide decks and AV technical riders.",
      "impact": "Last-minute stage panic and unformatted presentation slides"
    },
    {
      "title": "Chaotic onsite badge printing and registration queues",
      "description": "Attendees wait in 45-minute registration lines on morning of Day 1 because badge QR codes fail or ticket transfers were not recorded.",
      "impact": "Frustrated attendees and delayed opening keynote starts"
    }
  ],
  "agents": [
    {
      "id": "evt-attendee",
      "name": "Chloe Nexus",
      "role": "Attendee Concierge & WhatsApp Guide",
      "blobatarName": "ChloeEventGuide",
      "badge": "24/7 Attendee Support",
      "purpose": "Guides conference attendees with badge QR codes, session agenda recommendations, venue maps, and speaker Q&A.",
      "whatItDoes": "Integrates with Eventbrite, Bizzabo, and Whova; pushes real-time stage schedule changes and resolves attendee badge issues.",
      "exampleTasks": [
        "Issue digital attendee badge QR code for express kiosk check-in",
        "Recommend breakout sessions based on attendee job title and interests",
        "Push instant alert when keynote stage start time shifts by 15 minutes",
        "Answer dietary meal voucher and networking cocktail venue questions"
      ]
    },
    {
      "id": "evt-sponsor",
      "name": "Victor Sterling",
      "role": "Sponsorship Sales & Asset Agent",
      "blobatarName": "VictorSponsorOps",
      "badge": "Sponsor Sales & Delivery",
      "purpose": "Qualifies prospective sponsor leads, sends booth floor plans, issues sponsorship agreements, and collects marketing banners.",
      "whatItDoes": "Tracks sponsor deliverable deadlines (logos, booth dimensions, speaker passes) and ensures 100% sponsor contractual fulfillment.",
      "exampleTasks": [
        "Send interactive sponsorship prospectus with remaining Tier 1 booth inventory",
        "Generate digital sponsorship contract with tiered invoice milestones",
        "Collect high-resolution vector logos and company blurbs for event app",
        "Provide sponsor ROI summary with total booth scans and attendee impressions"
      ]
    }
  ],
  "workflow": [
    {
      "step": 1,
      "title": "Attendee Registers or Inquires",
      "agent": "Chloe Nexus (Attendee Concierge)",
      "description": "Participant purchases pass on website; receives welcome pack.",
      "output": "Registration synced in CRM"
    },
    {
      "step": 2,
      "title": "Digital Badge & Express Check-In QR",
      "agent": "Chloe Nexus (Attendee Concierge)",
      "description": "Issues mobile wallet QR badge 24 hours prior to conference kickoff.",
      "output": "Express check-in enabled"
    },
    {
      "step": 3,
      "title": "Autonomous Speaker Asset Collection",
      "agent": "Autonomous Production Engine",
      "description": "Automates collection and formatting of speaker slides, headshots, and mic requirements.",
      "output": "All stage assets locked"
    },
    {
      "step": 4,
      "title": "Live Event Real-Time Concierge",
      "agent": "Chloe Nexus (Attendee Concierge)",
      "description": "Answers venue wayfinding, pushes stage updates, and coordinates VIP networking.",
      "output": "Seamless onsite experience"
    },
    {
      "step": 5,
      "title": "Post-Event Feedback & Sponsor Reporting",
      "agent": "Victor Sterling (Sponsor Agent)",
      "description": "Gathers Net Promoter Score ratings and delivers verified sponsor impact reports.",
      "output": "Next year renewals secured"
    }
  ],
  "useCases": [
    {
      "id": "evt-uc-1",
      "title": "24/7 WhatsApp Attendee Concierge & Wayfinding",
      "problem": "Thousands of attendees swamp information desks asking where session halls, bathrooms, and Wi-Fi codes are.",
      "solution": "AI concierge delivers instant directions, personalized session agendas, and Wi-Fi credentials via WhatsApp.",
      "agent": "Chloe Nexus (Attendee Concierge)",
      "workflow": [
        "Attendee texts conference WhatsApp number",
        "AI identifies ticket tier and session preferences",
        "Provides interactive venue map and stage directions",
        "Sends 10-minute alert before favorited panel begins"
      ],
      "impact": "Deflects 86% of routine onsite attendee inquiries"
    },
    {
      "id": "evt-uc-2",
      "title": "Automated Speaker Slide & Asset Collection",
      "problem": "Producers waste hundreds of hours chasing 80+ speakers for presentation decks and bio photos.",
      "solution": "AI automatically requests, verifies resolution/aspect ratios, and compiles speaker slide decks.",
      "agent": "Victor Sterling (Asset Agent)",
      "workflow": [
        "AI pings confirmed speakers with upload portal link",
        "Validates 16:9 slide presentation formatting",
        "Sends polite progressive WhatsApp reminders before deadline",
        "Syncs approved slide deck to AV technician control room"
      ],
      "impact": "100% on-time speaker slide submission with zero AV panic"
    }
  ],
  "interactiveDemo": {
    "title": "Ask Your Events AI Workforce",
    "subtitle": "Simulate how event agents guide attendees and manage sponsorship inquiries in real time.",
    "presets": [
      {
        "agentId": "evt-attendee",
        "agentName": "Chloe Nexus (Attendee Concierge)",
        "task": "Attendee asking where AI Keynote Stage is and how to get vegetarian lunch pass",
        "terminalLogs": [
          {
            "time": "10:05:01",
            "text": "Inbound attendee message: \"Where is the AI Keynote and lunch?\"",
            "status": "info"
          },
          {
            "time": "10:05:03",
            "text": "✓ Verified attendee pass: VIP All-Access (Badge #8942)",
            "status": "info"
          },
          {
            "time": "10:05:06",
            "text": "✓ Keynote Stage located in Hall B (2 mins walk past registration)",
            "status": "success"
          },
          {
            "time": "10:05:09",
            "text": "✓ VIP Vegetarian Buffet voucher QR code attached to chat message",
            "status": "success"
          },
          {
            "time": "10:05:12",
            "text": "✓ Interactive indoor venue map pin dropped for Hall B entrance",
            "status": "done"
          }
        ],
        "summary": "Attendee directed and meal voucher issued in 11 seconds with interactive indoor map pin."
      }
    ]
  },
  "dashboardMetrics": [
    {
      "label": "Registered Attendees",
      "value": "4,280",
      "change": "100% badged"
    },
    {
      "label": "Support Deflection",
      "value": "86.4%",
      "change": "Target >80%"
    },
    {
      "label": "Sponsor Quota Attained",
      "value": "114%",
      "change": "$480k total"
    },
    {
      "label": "Speaker Decks Ready",
      "value": "100%",
      "change": "Zero AV delays"
    },
    {
      "label": "Registration Wait Time",
      "value": "< 45 sec",
      "change": "Express QR kiosks"
    },
    {
      "label": "Attendee Event NPS",
      "value": "82 NPS",
      "change": "All-time high"
    }
  ],
  "integrations": [
    {
      "name": "Eventbrite / Bizzabo",
      "category": "Ticketing & Registration",
      "icon": "Calendar"
    },
    {
      "name": "Whova / Swapcard",
      "category": "Event App & Community Networking",
      "icon": "Smartphone"
    },
    {
      "name": "HubSpot / Salesforce",
      "category": "Sponsorship Sales CRM",
      "icon": "Database"
    },
    {
      "name": "WhatsApp Business API",
      "category": "Live Attendee Concierge",
      "icon": "MessageSquare"
    },
    {
      "name": "Stripe Billing",
      "category": "Sponsor & Ticket Invoicing",
      "icon": "DollarSign"
    },
    {
      "name": "Slido / Mentimeter",
      "category": "Live Stage Q&A & Audience Polls",
      "icon": "Activity"
    }
  ],
  "roiMetrics": [
    {
      "metric": "86%",
      "label": "Attendee Ticket Deflection",
      "subtext": "Badge, venue, Wi-Fi, and schedule queries answered instantly"
    },
    {
      "metric": "100%",
      "label": "Speaker Assets On-Time",
      "subtext": "Eliminates frantic slide chasing and AV delays"
    },
    {
      "metric": "< 2 mins",
      "label": "Sponsor Prospectus Dispatch",
      "subtext": "Locks in exhibitor commitments ahead of rival events"
    },
    {
      "metric": "40 hrs/wk",
      "label": "Event Producer Time Saved",
      "subtext": "Allows organizers to focus on VIP hospitality and show execution"
    }
  ],
  "caseStudy": {
    "business": "Global Enterprise B2B Tech Conference (4,000 Attendees, 60 Sponsors)",
    "type": "Enterprise Technology Expo",
    "challenge": "Organizers were swamped by 3,000+ repetitive attendee logistics questions, while sponsorship sales teams lost deals due to slow proposal follow-ups.",
    "solution": "Deployed Saadhyam AI with Chloe Nexus (Attendee Concierge) and Victor Sterling (Sponsorship Sales Agent).",
    "result": "Deflected 86% of attendee support inquiries, cut registration line wait times to under 45 seconds, and accelerated sponsorship sales to sell out the expo floor 6 weeks early.",
    "verified": true
  },
  "faqs": [
    {
      "q": "Can the AI issue digital wallet badge QR codes for express check-in?",
      "a": "Yes. Saadhyam syncs with Eventbrite or Bizzabo to send attendees their personalized check-in barcode via WhatsApp and email, enabling 5-second express kiosk badge printing."
    },
    {
      "q": "How does it notify attendees if a stage schedule or speaker changes?",
      "a": "When an organizer updates the master agenda, Saadhyam automatically sends a WhatsApp push notification to attendees who favorited that session or speaker."
    },
    {
      "q": "Can the AI qualify prospective event sponsors and send pitch decks?",
      "a": "Yes. Victor Sponsor Agent interacts with incoming sponsor inquiries, qualifies company budget, shares available booth inventory, and schedules calls with the sponsorship director."
    },
    {
      "q": "Can attendees ask venue wayfinding and parking questions in real time?",
      "a": "Yes. The AI contains the full venue map, parking rates, Wi-Fi passwords, and local restaurant options, answering attendees in seconds."
    }
  ],
  "seo": {
    "title": "AI Workforce for Conferences & Event Management | Saadhyam AI",
    "description": "Automate conference attendee support, sponsorship sales, speaker asset collection, and badge check-ins with Saadhyam AI.",
    "keywords": "AI workforce for conferences, event attendee chatbot, event sponsorship automation, Bizzabo AI integration"
  }
};
