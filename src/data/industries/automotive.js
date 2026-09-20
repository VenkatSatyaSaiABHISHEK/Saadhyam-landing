export const automotiveData = {
  "id": "automotive",
  "slug": "automotive",
  "name": "Automotive & Dealerships",
  "shortName": "Automotive",
  "category": "Sales & Property",
  "icon": "Car",
  "badge": "Autonomous Dealership Workforce",
  "eyebrow": "AI Workforce for Car Dealerships & Service Centers",
  "headline": "Turn Your Automotive Dealership Into an AI-Powered Workforce",
  "subheadline": "Saadhyam AI helps automotive dealerships and multi-brand service centers automate inbound sales leads, test drive scheduling, service bay repair updates, recall notices, and trade-in appraisals with intelligent AI agents.",
  "heroStats": [
    {
      "label": "Lead Response Latency",
      "value": "< 20 sec"
    },
    {
      "label": "Test Drive Bookings",
      "value": "3.2x"
    },
    {
      "label": "Service Bay Retention",
      "value": "+41%"
    },
    {
      "label": "Trade-in Conversion",
      "value": "88%"
    }
  ],
  "heroDashboard": {
    "title": "Automotive Dealership Hub",
    "status": "5 Certified Automotive Agents Active",
    "activeDeal": "Apex Auto Group — Sales & Service Lane",
    "metrics": [
      {
        "label": "Test Drives Scheduled",
        "value": "42",
        "change": "This weekend"
      },
      {
        "label": "Service Appointments",
        "value": "118",
        "change": "Fully booked"
      },
      {
        "label": "Trade-in Appraisals",
        "value": "28",
        "change": "Valuation issued"
      },
      {
        "label": "Inbound Web Leads",
        "value": "340",
        "change": "100% engaged"
      }
    ]
  },
  "problems": [
    {
      "title": "Slow lead response times allow car buyers to visit competitors",
      "description": "Prospective buyers submit inquiries on AutoTrader, CarGurus, and dealer websites after hours. When reps reply next morning, the buyer is already test-driving elsewhere.",
      "impact": "Up to 50% drop in showroom appointment conversion"
    },
    {
      "title": "Service lane phones constantly ringing with repair status calls",
      "description": "Service advisors spend half their day answering \"Is my car ready yet?\" instead of writing repair orders and consulting customers in person.",
      "impact": "Advisor burnout, phone congestion, and lower customer satisfaction"
    }
  ],
  "agents": [
    {
      "id": "auto-sales",
      "name": "Alex Rivera",
      "role": "Dealership Sales & Test Drive Agent",
      "blobatarName": "AlexAutoSales",
      "badge": "Sales & Test Drives",
      "purpose": "Engages inbound car shopping inquiries, verifies inventory trim and colors, and locks in showroom test drive appointments.",
      "whatItDoes": "Converses natively across WhatsApp and web chat, shares window stickers and walkaround videos, and books calendar test drive slots.",
      "exampleTasks": [
        "Engage AutoTrader and web form leads within 20 seconds",
        "Confirm exact VIN inventory availability, color, and package options",
        "Book VIP test drive appointments and assign specific sales reps"
      ]
    },
    {
      "id": "auto-service",
      "name": "Elena Rostova",
      "role": "Service Lane & Repair Update Agent",
      "blobatarName": "ElenaServiceLane",
      "badge": "Service & Maintenance",
      "purpose": "Books service bay appointments, sends automated WhatsApp repair progress milestones, and gathers digital repair approvals.",
      "whatItDoes": "Integrates with DMS to update customers when multi-point inspection, parts order, or car wash is complete.",
      "exampleTasks": [
        "Book oil change, brake inspection, and tire rotation appointments",
        "Send WhatsApp video inspection link with technician recommendations",
        "Notify customer when vehicle is ready for pickup with invoice link"
      ]
    }
  ],
  "workflow": [
    {
      "step": 1,
      "title": "Car Shopper Inquires",
      "agent": "Alex Rivera (Sales Agent)",
      "description": "Customer inquires about SUV trim availability on web or WhatsApp.",
      "output": "Inquiry answered within 15 seconds"
    },
    {
      "step": 2,
      "title": "Inventory VIN Match",
      "agent": "Alex Rivera (Sales Agent)",
      "description": "AI verifies live DMS lot inventory, confirms color, and sends 360-degree video.",
      "output": "Matched to VIN on lot"
    },
    {
      "step": 3,
      "title": "VIP Test Drive Booked",
      "agent": "Autonomous Booking Engine",
      "description": "Customer chooses Saturday 11:00 AM test drive; car prepped with customer name tag.",
      "output": "Calendar invite & location pin sent"
    }
  ],
  "useCases": [
    {
      "id": "auto-uc-1",
      "title": "24/7 After-Hours Test Drive Scheduling",
      "problem": "Car buyers browsing inventory on weekend evenings lose interest by Monday morning.",
      "solution": "AI verifies lot inventory in real time, answers lease/finance queries, and locks in test drives 24/7.",
      "agent": "Alex Rivera (Sales Agent)",
      "workflow": [
        "Shopper inquires on website or WhatsApp",
        "AI confirms vehicle is on lot",
        "Presents available weekend test drive slots",
        "Sends confirmation pass"
      ],
      "impact": "3.2x more test drive appointments booked"
    }
  ],
  "interactiveDemo": {
    "title": "Ask Your AI Workforce",
    "subtitle": "Simulate how autonomous dealership agents book test drives and coordinate vehicle repairs.",
    "presets": [
      {
        "agentId": "auto-sales",
        "agentName": "Alex Rivera (Sales Agent)",
        "task": "Book Saturday test drive for 2026 Hybrid SUV and issue trade-in valuation for 2021 Sedan",
        "terminalLogs": [
          {
            "time": "10:00:01",
            "text": "Ingesting customer web inquiry: \"Test drive 2026 Hybrid SUV\"...",
            "status": "success"
          },
          {
            "time": "10:00:04",
            "text": "✓ Queried DMS inventory: 2026 Hybrid Platinum in Pearl White available on lot",
            "status": "success"
          },
          {
            "time": "10:00:13",
            "text": "✓ Saturday 11:30 AM VIP test drive confirmed with Senior Sales Rep Carlos",
            "status": "success"
          },
          {
            "time": "10:00:18",
            "text": "✓ VinSolutions CRM updated; test drive pass & parking pin sent to customer",
            "status": "done"
          }
        ],
        "summary": "Test drive confirmed and trade-in appraised in 17 seconds."
      }
    ]
  },
  "dashboardMetrics": [
    {
      "label": "Showroom Inquiries",
      "value": "542",
      "change": "+34% this wk"
    },
    {
      "label": "Test Drives Completed",
      "value": "184",
      "change": "This month"
    },
    {
      "label": "Service Bay Bookings",
      "value": "412",
      "change": "DMS synced"
    },
    {
      "label": "Trade-in Valuations",
      "value": "98",
      "change": "High intent"
    },
    {
      "label": "Average Lead Response",
      "value": "18 sec",
      "change": "Sub-minute"
    },
    {
      "label": "AI Automotive Tasks",
      "value": "8,400",
      "change": "Continuous"
    }
  ],
  "integrations": [
    {
      "name": "VinSolutions / DealerSocket",
      "category": "Automotive CRM & Pipeline",
      "icon": "Database"
    },
    {
      "name": "CDK Global / Reynolds",
      "category": "Dealer Management System (DMS)",
      "icon": "Layers"
    },
    {
      "name": "WhatsApp Dealership Gateway",
      "category": "Sales & Service Messaging",
      "icon": "MessageSquare"
    },
    {
      "name": "Kelley Blue Book",
      "category": "Vehicle Valuation Data",
      "icon": "Globe"
    }
  ],
  "roiMetrics": [
    {
      "metric": "< 20 sec",
      "label": "Inbound Lead Response Time",
      "subtext": "Down from 4.5 hours industry average"
    },
    {
      "metric": "3.2x",
      "label": "Showroom Test Drive Bookings",
      "subtext": "Frictionless calendar scheduling on WhatsApp"
    },
    {
      "metric": "+41%",
      "label": "Service Bay Retention",
      "subtext": "Automated recall and maintenance nudges"
    },
    {
      "metric": "20 hrs/wk",
      "label": "Service Advisor Time Saved",
      "subtext": "Eliminates repetitive repair status phone calls"
    }
  ],
  "caseStudy": {
    "company": "Apex Auto Mall & Luxury Dealership Group",
    "type": "Multi-Franchise Dealership Group (4 Locations)",
    "challenge": "Apex suffered from delayed after-hours lead response, missing dozens of buyers to nearby competitor showrooms.",
    "solution": "Implemented Saadhyam Automotive AI Workforce with Alex (Sales) and Elena (Service) connected to VinSolutions CRM and CDK Global DMS.",
    "result": "100% of leads engaged within 20 seconds. Weekend test drive bookings surged by 220%."
  },
  "faqs": [
    {
      "q": "Can Saadhyam integrate with our Dealer Management System (CDK, Reynolds)?",
      "a": "Yes. Saadhyam connects via certified APIs and real-time data feeds with major DMS providers to check vehicle inventory and schedule repair bays."
    },
    {
      "q": "Can car shoppers book test drives and select specific vehicles on WhatsApp?",
      "a": "Yes. Customers can browse available inventory, view photos, and book test drive slots with instant calendar invites."
    }
  ],
  "seo": {
    "title": "AI Workforce for Automotive Dealerships & Service | Saadhyam AI",
    "description": "Automate dealership inbound leads, test drive scheduling, service lane repair updates, and trade-in appraisals with Saadhyam AI.",
    "keywords": "AI workforce for dealerships, automotive AI agent, car dealer WhatsApp bot, test drive scheduling AI, DMS integration AI"
  }
};
