export const hospitalityData = {
  "id": "hospitality",
  "slug": "hospitality",
  "name": "Hospitality & Hotels",
  "shortName": "Hospitality",
  "category": "Consumer & Hospitality",
  "icon": "BedDouble",
  "badge": "Autonomous Guest Experience",
  "eyebrow": "AI Workforce for Hotels, Resorts & Luxury Stays",
  "headline": "Turn Your Hotel Into an AI-Powered Hospitality Workforce",
  "subheadline": "Saadhyam AI helps luxury hotels, boutique resorts, and multi-property chains automate 24/7 guest concierge, mobile check-in, room service orders, housekeeping workflows, and amenity upsells with intelligent AI agents.",
  "heroStats": [
    {
      "label": "Guest Request Resolution",
      "value": "< 90 sec"
    },
    {
      "label": "Ancillary Upsell Revenue",
      "value": "+28%"
    },
    {
      "label": "Mobile Check-in Rate",
      "value": "82%"
    },
    {
      "label": "Staff Efficiency Gain",
      "value": "24 hrs/wk"
    }
  ],
  "heroDashboard": {
    "title": "Hotel & Resort Operations Hub",
    "status": "5 Hospitality Agents Active",
    "activeDeal": "Azure Bay Luxury Resort & Spa",
    "metrics": [
      {
        "label": "Active In-House Guests",
        "value": "384",
        "change": "94% occupancy"
      },
      {
        "label": "Concierge Queries Resolved",
        "value": "512",
        "change": "Today"
      },
      {
        "label": "Room Service & Spa Orders",
        "value": "$18,400",
        "change": "+32% upsell"
      },
      {
        "label": "Housekeeping Rooms Cleared",
        "value": "142",
        "change": "100% on time"
      }
    ]
  },
  "problems": [
    {
      "title": "Front desk queues and delayed room check-ins",
      "description": "Guests arriving after long flights must wait in 20-minute lobby lines while desk staff manually key in passport details, credit cards, and key cards.",
      "impact": "Poor arrival first impression and low initial guest satisfaction"
    },
    {
      "title": "In-room service orders lost in phone queues",
      "description": "Guests dialing the operator for extra towels, room service, or late check-out encounter busy signals, resulting in unlogged requests and complaints.",
      "impact": "Negative TripAdvisor and Google reviews during stay"
    }
  ],
  "agents": [
    {
      "id": "hosp-concierge",
      "name": "Elena Rostova",
      "role": "24/7 AI Guest Concierge Agent",
      "blobatarName": "ElenaConcierge",
      "badge": "24/7 Guest Experience",
      "purpose": "Answers guest inquiries instantly over WhatsApp, recommends local dining, coordinates valet parking, and handles concierge bookings.",
      "whatItDoes": "Fluent in 30+ languages, provides tailored local recommendations, answers Wi-Fi/amenity queries, and schedules resort activities.",
      "exampleTasks": [
        "Share high-speed Wi-Fi passwords and breakfast timings",
        "Recommend top-rated local seafood restaurants within walking distance",
        "Arrange airport transfer limousine pickups with flight tracking"
      ]
    },
    {
      "id": "hosp-checkin",
      "name": "Alex Rivera",
      "role": "Digital Check-in & Keyless Entry Agent",
      "blobatarName": "AlexKeylessStay",
      "badge": "Fast Check-In",
      "purpose": "Enables mobile pre-arrival registration, passport verification, digital registration cards, and mobile key generation.",
      "whatItDoes": "Sends pre-arrival WhatsApp check-in link 24 hours prior, collects digital signatures and ID scans, and issues mobile room keys.",
      "exampleTasks": [
        "Collect passport scans and digital signature before guest arrives",
        "Pre-authorize incidentals on guest credit card via secure gateway",
        "Send mobile room key / digital door PIN upon room readiness"
      ]
    }
  ],
  "workflow": [
    {
      "step": 1,
      "title": "Pre-Arrival WhatsApp Link",
      "agent": "Alex Rivera (Check-in Agent)",
      "description": "Guest receives mobile check-in invite 24h before arrival; uploads ID and selects room preferences.",
      "output": "Digital registration signed in 60 seconds"
    },
    {
      "step": 2,
      "title": "Lobby Bypass & Mobile Key",
      "agent": "Alex Rivera (Check-in Agent)",
      "description": "Guest arrives, receives WhatsApp digital room PIN, and bypasses front-desk queues completely.",
      "output": "Zero front-desk wait time"
    },
    {
      "step": 3,
      "title": "In-Stay 24/7 AI Concierge",
      "agent": "Elena Rostova (Guest Concierge)",
      "description": "Guest requests extra towels and dining recommendation via WhatsApp; towels arrive in 8 mins.",
      "output": "Immediate resolution with zero staff phone calls"
    }
  ],
  "useCases": [
    {
      "id": "hosp-uc-1",
      "title": "24/7 Multilingual WhatsApp Guest Concierge",
      "problem": "International guests face language barriers when calling front desk for room amenities or directions.",
      "solution": "AI chats fluently in 30+ languages, answering questions about breakfast, amenities, and local tours instantly.",
      "agent": "Elena Rostova (Guest Concierge)",
      "workflow": [
        "Guest messages in French or Japanese",
        "AI answers instantly with localized hotel guidance",
        "Orders room items in Opera PMS"
      ],
      "impact": "100% instant resolution on guest queries with zero language barriers"
    }
  ],
  "interactiveDemo": {
    "title": "Ask Your AI Workforce",
    "subtitle": "Simulate how your autonomous hospitality agents serve guests and dispatch hotel staff.",
    "presets": [
      {
        "agentId": "hosp-concierge",
        "agentName": "Elena Rostova (Guest Concierge)",
        "task": "Fulfill guest WhatsApp request for 2 extra towels and recommend nearby Italian dining for Room 402",
        "terminalLogs": [
          {
            "time": "20:15:01",
            "text": "Ingesting guest WhatsApp message from Room 402: \"Need extra bath towels & dinner advice\"...",
            "status": "success"
          },
          {
            "time": "20:15:04",
            "text": "✓ Work order #HK-402 dispatched to 4th Floor Housekeeping Attendant Marco",
            "status": "success"
          },
          {
            "time": "20:15:08",
            "text": "✓ Queried curated local dining guide: Recommended \"Trattoria Bella\" (4.8★, 300m away)",
            "status": "success"
          },
          {
            "time": "20:15:12",
            "text": "✓ Delivered interactive dining map link & offered to book a 20:45 PM table",
            "status": "success"
          },
          {
            "time": "20:15:17",
            "text": "✓ Marco confirmed towels delivered to Room 402 in 6 minutes; logged in Opera PMS",
            "status": "done"
          }
        ],
        "summary": "Towels dispatched and dinner recommendation delivered in 16 seconds."
      }
    ]
  },
  "dashboardMetrics": [
    {
      "label": "In-House Guests Active",
      "value": "428",
      "change": "96% occupancy"
    },
    {
      "label": "Guest Queries Resolved",
      "value": "1,840",
      "change": "Sub-minute"
    },
    {
      "label": "Digital Check-in Rate",
      "value": "84.2%",
      "change": "Zero lobby line"
    },
    {
      "label": "Ancillary Spend / Guest",
      "value": "$84",
      "change": "+32% upsell"
    },
    {
      "label": "Housekeeping SLA",
      "value": "7.8 mins",
      "change": "Rapid delivery"
    },
    {
      "label": "AI Hospitality Tasks",
      "value": "9,200",
      "change": "24/7 continuous"
    }
  ],
  "integrations": [
    {
      "name": "Oracle Opera PMS / Cloud",
      "category": "Property Management System",
      "icon": "Database"
    },
    {
      "name": "WhatsApp Hospitality API",
      "category": "Guest Messaging & Service",
      "icon": "MessageSquare"
    },
    {
      "name": "Amadeus / Sabre Hospitality",
      "category": "Central Reservation System",
      "icon": "Globe"
    },
    {
      "name": "Micros / Simphony POS",
      "category": "Food, Beverage & Spa Billing",
      "icon": "Layers"
    },
    {
      "name": "Assa Abloy / Salto",
      "category": "Mobile Keyless Door Locks",
      "icon": "ShieldCheck"
    },
    {
      "name": "TripAdvisor Reviews",
      "category": "Reputation & Feedback Sync",
      "icon": "Zap"
    }
  ],
  "roiMetrics": [
    {
      "metric": "< 90 sec",
      "label": "Guest Request Resolution",
      "subtext": "Down from 25 minutes phone wait"
    },
    {
      "metric": "+28%",
      "label": "Ancillary Room Upsells",
      "subtext": "Automated pre-arrival WhatsApp offers"
    },
    {
      "metric": "82%",
      "label": "Mobile Check-in Adoption",
      "subtext": "Guests bypass front desk lines"
    },
    {
      "metric": "24 hrs/wk",
      "label": "Front Desk Admin Time Saved",
      "subtext": "Staff can focus on VIP greeting"
    }
  ],
  "caseStudy": {
    "company": "The Grand Azure Luxury Resort & Villas",
    "type": "5-Star Beach Resort (240 Suites & Villas)",
    "challenge": "The Grand Azure suffered from 25-minute lobby queues at 3 PM check-in.",
    "solution": "Deployed Saadhyam Hospitality AI Workforce with Elena (Concierge) and Alex (Check-in) connected to Oracle Opera PMS and WhatsApp.",
    "result": "84% of guests opted for mobile check-in, completely eliminating lobby queues. Review scores reached 4.9 on TripAdvisor."
  },
  "faqs": [
    {
      "q": "Can guests message the hotel on WhatsApp without downloading an app?",
      "a": "Yes. Guests communicate using their standard WhatsApp messenger to request towels, order room service, and ask for local tips."
    },
    {
      "q": "Does Saadhyam integrate with our existing PMS like Oracle Opera, Cloudbeds, or Mews?",
      "a": "Yes. Saadhyam features direct certified integrations with Oracle Opera (OXI / OHIP), Cloudbeds, Mews, and HotSOS."
    }
  ],
  "seo": {
    "title": "AI Workforce for Hotels & Hospitality | Saadhyam AI",
    "description": "Automate 24/7 guest concierge, mobile check-in, housekeeping dispatch, room service orders, and amenity upsells with Saadhyam AI.",
    "keywords": "AI workforce for hotels, hotel AI concierge, WhatsApp hotel bot, mobile check-in automation, hospitality AI agents"
  }
};
