export const restaurantsData = {
  "id": "restaurants",
  "slug": "restaurants",
  "name": "Restaurants & Hospitality Chains",
  "shortName": "Restaurants",
  "category": "Hospitality & Leisure",
  "icon": "Utensils",
  "badge": "Autonomous Restaurant Operations",
  "eyebrow": "AI Workforce for Fine Dining, Multi-Location Chains & Cafes",
  "headline": "Turn Your Restaurant Operations Into an AI-Powered Workforce",
  "subheadline": "Saadhyam AI helps restaurants and hospitality groups automate table reservations, phone booking calls, private dining catering inquiries, supplier invoice reconciliation, and review replies with intelligent AI agents.",
  "heroStats": [
    {
      "label": "Phone Booking Capture Rate",
      "value": "100%"
    },
    {
      "label": "Private Event Inquiries",
      "value": "3x faster"
    },
    {
      "label": "Supplier Invoice Auditing",
      "value": "< 60 sec"
    },
    {
      "label": "Table No-Show Reduction",
      "value": "-35%"
    }
  ],
  "heroDashboard": {
    "title": "Restaurant Operations Command Center",
    "status": "4 Hospitality Agents Active Across 6 Locations",
    "activeDeal": "Osteria Grand — Saturday Dinner Seating (Fully Booked)",
    "metrics": [
      {
        "label": "Phone Calls Answered",
        "value": "284",
        "change": "100% answered"
      },
      {
        "label": "Covers Booked (Tonight)",
        "value": "340",
        "change": "Capacity 98%"
      },
      {
        "label": "Private Dining Pipeline",
        "value": "$24,800",
        "change": "+22% vs last mo"
      },
      {
        "label": "Google Review Rating",
        "value": "4.92 ★",
        "change": "42 new replies"
      }
    ]
  },
  "problems": [
    {
      "title": "Missed reservation phone calls during hectic dinner rushes",
      "description": "Hostesses cannot answer ringing phones while greeting arriving guests and managing table seatings, losing high-value party reservations.",
      "impact": "20–30 missed reservation calls per evening shift"
    },
    {
      "title": "High table no-show rates during peak dining hours",
      "description": "Guests make reservations days in advance but fail to show up, leaving prime tables empty and ruining restaurant revenue margins.",
      "impact": "Up to 15% lost seating capacity on weekend evenings"
    },
    {
      "title": "Slow responses to lucrative private dining and catering RFPs",
      "description": "Corporate dinner planners and wedding catering leads wait days for event managers to reply with banquet menus and pricing minimums.",
      "impact": "Corporate parties book rival event venues"
    },
    {
      "title": "Manual supplier paper invoices and price creep",
      "description": "Kitchen managers stack food invoices on clipboards without noticing meat or dairy suppliers quietly increasing unit prices.",
      "impact": "2–4% unnecessary food cost margin erosion"
    }
  ],
  "agents": [
    {
      "id": "rest-host",
      "name": "Camille Dubois",
      "role": "24/7 AI Phone Host & Table Concierge",
      "blobatarName": "CamilleHostess",
      "badge": "24/7 Voice & Table Booking",
      "purpose": "Answers restaurant phone calls in a natural, friendly voice, manages OpenTable/Resy bookings, dietary inquiries, and operating hours.",
      "whatItDoes": "Handles voice calls and WhatsApp messages simultaneously; checks real-time table floor plans to book reservations and take modifications.",
      "exampleTasks": [
        "Answer phone call in natural tone and book 4-person table for 8:00 PM",
        "Confirm guest dietary allergies (e.g., gluten-free, peanut allergy) and note on ticket",
        "Send automatic WhatsApp reservation confirmation with parking directions",
        "Send 2-hour reminder message requiring 1-click confirmation to prevent no-shows"
      ]
    },
    {
      "id": "rest-events",
      "name": "Chef Marco",
      "role": "Private Dining & Catering Sales Agent",
      "blobatarName": "ChefMarcoOps",
      "badge": "Catering & Private Dining",
      "purpose": "Qualifies corporate dinner and private party inquiries, shares banquet menus, calculates minimum spends, and collects event deposits.",
      "whatItDoes": "Responds to private event form submissions within 60 seconds, provides customized group proposals, and locks in event calendar dates.",
      "exampleTasks": [
        "Send 3-course private dining menu options and wine pairing add-ons",
        "Calculate minimum beverage spend for 30-person mezzanine buyout",
        "Generate digital event contract with credit card hold authorization",
        "Notify executive chef of finalized banquet guest counts and allergies"
      ]
    }
  ],
  "workflow": [
    {
      "step": 1,
      "title": "Guest Calls or Messages",
      "agent": "Camille Dubois (Voice Host)",
      "description": "Customer dials restaurant during prep hour to request a table for tonight.",
      "output": "Call answered on first ring"
    },
    {
      "step": 2,
      "title": "Live Table Inventory Check",
      "agent": "Autonomous Table Engine",
      "description": "Cross-checks OpenTable / Resy floor plan for available 4-top seatings.",
      "output": "Table reserved & POS tagged"
    },
    {
      "step": 3,
      "title": "Automated SMS / WhatsApp Confirmation",
      "agent": "Autonomous Messaging Agent",
      "description": "Dispatches confirmation card with dress code, directions, and dietary note.",
      "output": "Reservation locked in"
    },
    {
      "step": 4,
      "title": "Two-Hour No-Show Safeguard",
      "agent": "Camille Dubois (Voice Host)",
      "description": "Requests 1-tap WhatsApp attendance confirmation; releases table if cancelled.",
      "output": "Zero wasted table covers"
    },
    {
      "step": 5,
      "title": "General Manager Operations View",
      "agent": "Executive Control Center",
      "description": "GM monitors tonight’s expected covers, food cost trends, and staff labor metrics.",
      "output": "Complete shift visibility"
    }
  ],
  "useCases": [
    {
      "id": "rest-uc-1",
      "title": "Zero-Missed-Call Autonomous Voice Host",
      "problem": "Host staff cannot answer ringing phones while seating guests, losing dozens of bookings every night.",
      "solution": "AI Voice Host answers every call instantly, books tables into Resy/OpenTable, and answers menu questions.",
      "agent": "Camille Dubois (Voice Host)",
      "workflow": [
        "Customer calls restaurant number",
        "AI answers with friendly warm greeting",
        "Verifies date, party size, and seating preference",
        "Syncs booking directly with reservation system"
      ],
      "impact": "100% reservation call capture rate with zero staff distraction"
    },
    {
      "id": "rest-uc-2",
      "title": "Automated 1-Click No-Show Prevention",
      "problem": "Guests forget reservations, leaving tables empty on busy Friday and Saturday nights.",
      "solution": "AI sends interactive WhatsApp reminders requiring 1-click confirmation, releasing unused tables for waitlists.",
      "agent": "Camille Dubois (Voice Host)",
      "workflow": [
        "AI triggers interactive WhatsApp 3 hours prior",
        "Guest taps \"Confirm\" or \"Release\"",
        "If released, waitlist party is notified immediately",
        "Table filled within 5 minutes"
      ],
      "impact": "Reduces weekend table no-shows by 35%"
    }
  ],
  "interactiveDemo": {
    "title": "Ask Your Restaurant AI Workforce",
    "subtitle": "Simulate how AI phone hosts manage reservations and handle private dining inquiries.",
    "presets": [
      {
        "agentId": "rest-host",
        "agentName": "Camille Dubois (Voice Host)",
        "task": "Guest calling to book romantic booth for 2 at 8:15 PM with anniversary flower arrangement",
        "terminalLogs": [
          {
            "time": "18:45:01",
            "text": "Inbound voice call answered on 1st ring: \"Hello, welcome to Osteria Grand...\"",
            "status": "info"
          },
          {
            "time": "18:45:04",
            "text": "✓ Guest requests 2 guests for tonight at 8:15 PM",
            "status": "info"
          },
          {
            "time": "18:45:07",
            "text": "✓ Checked OpenTable floor inventory: Table 14 (Private Corner Booth) available",
            "status": "success"
          },
          {
            "time": "18:45:10",
            "text": "✓ Captured anniversary note: Kitchen alerted for celebratory dessert presentation",
            "status": "success"
          },
          {
            "time": "18:45:14",
            "text": "✓ Reservation confirmed; WhatsApp directions and confirmation code dispatched",
            "status": "done"
          }
        ],
        "summary": "Call handled in 32 seconds with full dietary and occasion notes attached to host stand POS."
      }
    ]
  },
  "dashboardMetrics": [
    {
      "label": "Reservation Calls",
      "value": "1,420",
      "change": "100% answered"
    },
    {
      "label": "Table No-Show Rate",
      "value": "3.8%",
      "change": "Down from 14%"
    },
    {
      "label": "Private Event Revenue",
      "value": "$68,400",
      "change": "+24% this mo"
    },
    {
      "label": "Average Cover Value",
      "value": "$84.50",
      "change": "+12% wine upsell"
    },
    {
      "label": "Supplier Invoices Audited",
      "value": "164",
      "change": "Zero price creep"
    },
    {
      "label": "Guest Sentiment Score",
      "value": "96.4%",
      "change": "Positive sentiment"
    }
  ],
  "integrations": [
    {
      "name": "OpenTable / Resy",
      "category": "Table & Reservation Management",
      "icon": "Calendar"
    },
    {
      "name": "Toast POS / Square",
      "category": "Point of Sale & Menu Billing",
      "icon": "Database"
    },
    {
      "name": "SevenRooms",
      "category": "Guest Experience & CRM",
      "icon": "Users"
    },
    {
      "name": "WhatsApp Business API",
      "category": "Direct Guest Messaging",
      "icon": "Smartphone"
    },
    {
      "name": "Google Business Profile",
      "category": "Local Reviews & Maps Presence",
      "icon": "Star"
    },
    {
      "name": "Plate IQ / MarginEdge",
      "category": "Restaurant Invoice & Recipe Costing",
      "icon": "FileText"
    }
  ],
  "roiMetrics": [
    {
      "metric": "100%",
      "label": "Reservation Call Capture",
      "subtext": "Never miss another dinner or party booking"
    },
    {
      "metric": "-35%",
      "label": "Table No-Show Reduction",
      "subtext": "Automated 1-click confirmation unlocks tables"
    },
    {
      "metric": "< 60 sec",
      "label": "Private Event RFP Response",
      "subtext": "Locks in corporate banquet bookings before competitors"
    },
    {
      "metric": "18 hrs/wk",
      "label": "Hostess & Manager Time Saved",
      "subtext": "Floor staff focus on greeting and dining service"
    }
  ],
  "caseStudy": {
    "business": "Upscale Italian Dining Group (3 Metro Locations)",
    "type": "Restaurant & Hospitality Group",
    "challenge": "High phone call volume during dinner services led to 40+ unanswered calls daily and a 12% weekend table no-show rate.",
    "solution": "Deployed Saadhyam AI with Camille Dubois (AI Voice Host) integrated into OpenTable and WhatsApp.",
    "result": "Captured 100% of incoming phone reservations, decreased no-shows to 3.8%, and booked $42,000 in additional private dining revenue within 60 days.",
    "verified": true
  },
  "faqs": [
    {
      "q": "Can the AI speak naturally to callers over the phone without sounding robotic?",
      "a": "Yes. Saadhyam AI uses natural, warm conversational voice synthesis with ultra-low latency (<500ms), answering questions about seating, parking, and daily specials flawlessly."
    },
    {
      "q": "Does it sync with OpenTable, Resy, or Toast in real time?",
      "a": "Yes. The AI connects directly to your existing table management software, checking live table inventory, booking tables, and tagging guest allergies on the floor plan."
    },
    {
      "q": "How does it stop table no-shows?",
      "a": "It sends polite WhatsApp/SMS reminders with 1-click \"Confirm\" or \"Modify\" buttons. If a guest cannot make it, the table is automatically released for waitlist guests."
    },
    {
      "q": "Can it handle corporate catering and private dining inquiries?",
      "a": "Yes. Chef Marco Catering Agent responds to event inquiries instantly with banquet menus, pricing minimums, and digital deposit links."
    }
  ],
  "seo": {
    "title": "AI Workforce for Restaurants & Hospitality Groups | Saadhyam AI",
    "description": "Automate restaurant phone reservations, table no-show prevention, catering sales, and review replies with Saadhyam AI.",
    "keywords": "AI phone host for restaurants, restaurant reservation AI, OpenTable AI integration, table no-show prevention"
  }
};
