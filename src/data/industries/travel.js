export const travelData = {
  "id": "travel",
  "slug": "travel",
  "name": "Travel & Tour Operators",
  "shortName": "Travel",
  "category": "Hospitality & Leisure",
  "icon": "Compass",
  "badge": "Autonomous Travel Agency Operations",
  "eyebrow": "AI Workforce for Travel Agencies, Tour Operators & OTAs",
  "headline": "Turn Your Travel Agency Into an AI-Powered Workforce",
  "subheadline": "Saadhyam AI empowers travel agencies and tour operators to automate multi-destination itinerary creation, visa inquiry handling, flight disruption rebooking, WhatsApp customer concierge, and supplier vouchers with intelligent AI agents.",
  "heroStats": [
    {
      "label": "Itinerary Customization Time",
      "value": "< 3 mins"
    },
    {
      "label": "Disruption Rebooking Speed",
      "value": "Instant"
    },
    {
      "label": "Traveler WhatsApp Response",
      "value": "< 10 sec"
    },
    {
      "label": "Booking Conversion Rate",
      "value": "+28%"
    }
  ],
  "heroDashboard": {
    "title": "Travel Operations Command Center",
    "status": "5 Travel Agents Active Across 620 Travelers In-Flight",
    "activeDeal": "Amalfi Coast Luxury Tour — 42 Guests Arriving",
    "metrics": [
      {
        "label": "Active Travelers In-Transit",
        "value": "620",
        "change": "100% on schedule"
      },
      {
        "label": "Flight Disruption Alerts",
        "value": "3",
        "change": "Auto-rebooked"
      },
      {
        "label": "Custom Itineraries Quoted",
        "value": "142",
        "change": "+32% this week"
      },
      {
        "label": "Traveler CSAT",
        "value": "4.95 / 5",
        "change": "Across 1,800 trips"
      }
    ]
  },
  "problems": [
    {
      "title": "Hours spent crafting bespoke multi-city itineraries",
      "description": "Travel consultants spend 3–4 hours per prospective booking manually researching flight connections, hotel availability, and local transfers.",
      "impact": "Slow quotation turnaround times and lost high-budget travelers"
    },
    {
      "title": "Emergency flight cancellations and timezone panic",
      "description": "When airlines cancel flights late at night, stranded travelers call frantic hotlines while local agency staff are asleep.",
      "impact": "Damaged agency reputation and negative public reviews"
    },
    {
      "title": "Endless repetitive visa and passport requirement questions",
      "description": "Travelers flood consultant WhatsApps asking about visa entry rules, vaccine certificates, and luggage dimensions.",
      "impact": "Diverts agent time away from closing high-margin corporate or luxury tours"
    },
    {
      "title": "Manual supplier voucher reconciliation and payment chasing",
      "description": "Tracking hotel confirmation vouchers, transfer receipts, and local tour guide payments across spreadsheets leads to billing errors.",
      "impact": "Margin slippage and delayed supplier settlements"
    }
  ],
  "agents": [
    {
      "id": "trv-concierge",
      "name": "Maya Atlas",
      "role": "24/7 Global Traveler Concierge Agent",
      "blobatarName": "MayaTravelGuide",
      "badge": "24/7 In-Transit Concierge",
      "purpose": "Supports travelers around the clock via WhatsApp, providing flight gate updates, weather forecasts, restaurant recommendations, and emergency rebooking.",
      "whatItDoes": "Monitors real-time flight telemetry, hotel bookings, and airline GDS feeds to answer traveler questions in 30+ languages.",
      "exampleTasks": [
        "Push real-time flight departure gate changes and baggage belt info on WhatsApp",
        "Handle instant hotel room changes or late check-in requests with front desks",
        "Provide verified visa entry requirements based on traveler nationality",
        "Recommend top-rated local dining options matching dietary preferences"
      ]
    },
    {
      "id": "trv-itinerary",
      "name": "Oliver Cross",
      "role": "Custom Itinerary & Quoting Agent",
      "blobatarName": "OliverItineraryOps",
      "badge": "Itinerary & Booking Quoting",
      "purpose": "Builds personalized day-by-day travel itineraries with pricing breakdowns in under 3 minutes.",
      "whatItDoes": "Integrates airline GDS and hotel wholesalers to generate interactive digital travel proposals and payment links.",
      "exampleTasks": [
        "Assemble 10-day Japan cultural itinerary matching budget and traveler interests",
        "Compare airline business class routing options across Star Alliance and Oneworld",
        "Draft branded PDF itinerary with hotel photos and activity maps",
        "Issue secure online deposit invoice with automatic currency conversion"
      ]
    }
  ],
  "workflow": [
    {
      "step": 1,
      "title": "Travel Inquiry Received",
      "agent": "Oliver Cross (Itinerary Agent)",
      "description": "Traveler submits dream vacation request on website, WhatsApp, or email.",
      "output": "Travel preferences parsed"
    },
    {
      "step": 2,
      "title": "Dynamic Itinerary Assembled",
      "agent": "Oliver Cross (Itinerary Agent)",
      "description": "Checks live flights, boutique hotels, and verified local guides to build day-by-day plan.",
      "output": "Interactive itinerary ready in 3 mins"
    },
    {
      "step": 3,
      "title": "Deposit & Voucher Issuance",
      "agent": "Autonomous Travel Engine",
      "description": "Collects digital deposit; issues hotel vouchers and transfer confirmation codes.",
      "output": "Trip confirmed and vouchers dispatched"
    },
    {
      "step": 4,
      "title": "24/7 In-Trip Concierge Care",
      "agent": "Maya Atlas (Travel Concierge)",
      "description": "Provides live gate updates, answers visa questions, and resolves hotel room adjustments.",
      "output": "Zero traveler stress"
    },
    {
      "step": 5,
      "title": "Post-Trip Review & Loyalty Follow-up",
      "agent": "Autonomous Travel Engine",
      "description": "Captures 5-star Google review and sends personalized travel credit for next holiday.",
      "output": "Repeat booking loyalty locked in"
    }
  ],
  "useCases": [
    {
      "id": "trv-uc-1",
      "title": "Sub-3-Minute Custom Itinerary Creation",
      "problem": "Agents take hours to build custom trip proposals, losing impatient travelers to online booking engines.",
      "solution": "AI creates stunning day-by-day itineraries with photos, inclusions, and live flight quotes in minutes.",
      "agent": "Oliver Cross (Itinerary Agent)",
      "workflow": [
        "Input destination, duration, and budget",
        "AI pulls verified hotel rates and excursions",
        "Builds branded interactive mobile itinerary",
        "Sends WhatsApp link with 1-click booking deposit"
      ],
      "impact": "Triples quote output capacity and increases booking conversions by 28%"
    },
    {
      "id": "trv-uc-2",
      "title": "Autonomous Flight Delay & Rebooking Assistant",
      "problem": "Stranded travelers in international airports face 2-hour phone queues when flights get cancelled.",
      "solution": "AI detects delay signals via flight radar, proposes alternative connections, and secures vouchers.",
      "agent": "Maya Atlas (Travel Concierge)",
      "workflow": [
        "Flight cancellation alert received from airline GDS",
        "AI finds next available connection",
        "Texts passenger with rebooking options and airline hotel vouchers",
        "Updates local airport transfer pickup time"
      ],
      "impact": "Resolves travel disruptions within 90 seconds"
    }
  ],
  "interactiveDemo": {
    "title": "Ask Your Travel AI Workforce",
    "subtitle": "Simulate how travel agents craft multi-destination proposals and assist in-flight passengers.",
    "presets": [
      {
        "agentId": "trv-itinerary",
        "agentName": "Oliver Cross (Itinerary Agent)",
        "task": "Generate 7-day luxury Swiss Alps winter itinerary for family of four with private ski transfers",
        "terminalLogs": [
          {
            "time": "12:00:01",
            "text": "Analyzing inquiry: Family of 4, Zermatt & St. Moritz, 5-star lodging...",
            "status": "info"
          },
          {
            "time": "12:00:04",
            "text": "✓ Verified luxury chalet availability with local wholesale API",
            "status": "info"
          },
          {
            "time": "12:00:08",
            "text": "✓ Glacier Express first-class panoramic rail seats reserved in draft",
            "status": "success"
          },
          {
            "time": "12:00:12",
            "text": "✓ Private bilingual ski instructor matched in Zermatt",
            "status": "success"
          },
          {
            "time": "12:00:15",
            "text": "✓ Branded interactive digital proposal compiled with 1-click Stripe deposit link",
            "status": "done"
          }
        ],
        "summary": "Complete luxury family itinerary produced in 14 seconds with live wholesale pricing."
      }
    ]
  },
  "dashboardMetrics": [
    {
      "label": "Travelers In-Trip",
      "value": "620",
      "change": "100% monitored"
    },
    {
      "label": "Itinerary Quote Turnaround",
      "value": "2.8 mins",
      "change": "Down from 4 hrs"
    },
    {
      "label": "Booking Conversion",
      "value": "31.4%",
      "change": "+9.2% increase"
    },
    {
      "label": "Disruptions Resolved",
      "value": "18",
      "change": "Avg 45 sec"
    },
    {
      "label": "WhatsApp Deflection",
      "value": "82%",
      "change": "Zero human touch"
    },
    {
      "label": "Agency Margin Health",
      "value": "18.4%",
      "change": "Optimized rates"
    }
  ],
  "integrations": [
    {
      "name": "Amadeus / Sabre GDS",
      "category": "Global Distribution System",
      "icon": "Globe"
    },
    {
      "name": "Travelport / Bedsonline",
      "category": "Hotel & Excursion Wholesalers",
      "icon": "Layers"
    },
    {
      "name": "WhatsApp Business API",
      "category": "Direct Traveler Concierge",
      "icon": "Smartphone"
    },
    {
      "name": "Travefy / Wetu",
      "category": "Itinerary Presentation Builders",
      "icon": "Map"
    },
    {
      "name": "Stripe Global / Flywire",
      "category": "Multi-Currency Payments",
      "icon": "DollarSign"
    },
    {
      "name": "FlightAware API",
      "category": "Real-Time Flight Telemetry",
      "icon": "Plane"
    }
  ],
  "roiMetrics": [
    {
      "metric": "< 3 mins",
      "label": "Custom Itinerary Proposal",
      "subtext": "Down from 3–4 hours of manual consultant research"
    },
    {
      "metric": "82%",
      "label": "Routine Traveler Query Deflection",
      "subtext": "Visa rules, luggage, and gate changes answered instantly"
    },
    {
      "metric": "+28%",
      "label": "Booking Quote Conversion",
      "subtext": "Fast turnaround captures travelers while intent is high"
    },
    {
      "metric": "24/7",
      "label": "Global Traveler Protection",
      "subtext": "In-flight assistance across every international timezone"
    }
  ],
  "caseStudy": {
    "business": "Independent Luxury Tour Operator (15 Travel Consultants)",
    "type": "Luxury Travel Agency",
    "challenge": "High quote request volume created a 3-day turnaround backlog, causing affluent travelers to book through online travel agencies.",
    "solution": "Deployed Saadhyam AI with Oliver Cross (Itinerary Quoting) and Maya Atlas (24/7 Concierge) on WhatsApp.",
    "result": "Cut quote response times to under 3 minutes, increased quote-to-booking conversion by 31%, and supported 600+ travelers with 0 nighttime staff burnout.",
    "verified": true
  },
  "faqs": [
    {
      "q": "Can the AI search real-time flight and hotel wholesale availability?",
      "a": "Yes. Saadhyam connects with major GDS platforms (Amadeus, Sabre) and hotel wholesalers (Bedsonline, Hotelbeds) to pull verified room rates and flight availability."
    },
    {
      "q": "How does the WhatsApp concierge handle flight delays and cancellations?",
      "a": "The AI connects to global flight tracking radar. When an airline cancels or delays a flight, it proactively alerts the traveler, provides alternative connections, and contacts the airport pickup driver."
    },
    {
      "q": "Can the AI answer complex visa and vaccination requirements?",
      "a": "Yes. The system maintains an up-to-date database of consular entry requirements based on the traveler’s passport citizenship and destination country."
    },
    {
      "q": "Can our travel agents review itineraries before they are sent to clients?",
      "a": "Yes. You can configure Saadhyam in \"Assisted Mode\" where the AI drafts the itinerary in 60 seconds and submits it for agent approval before sending."
    }
  ],
  "seo": {
    "title": "AI Workforce for Travel Agencies & Tour Operators | Saadhyam AI",
    "description": "Automate custom itinerary creation, 24/7 WhatsApp traveler concierge, flight disruption rebooking, and travel quoting with Saadhyam AI.",
    "keywords": "AI workforce for travel agencies, tour operator itinerary AI, WhatsApp travel concierge, GDS flight automation"
  }
};
