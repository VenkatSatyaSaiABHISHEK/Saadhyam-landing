export const logisticsData = {
  "id": "logistics",
  "slug": "logistics",
  "name": "Logistics & Supply Chain",
  "shortName": "Logistics",
  "category": "Industrial & Operations",
  "icon": "Truck",
  "badge": "Autonomous Fleet & 3PL Operations",
  "eyebrow": "AI Workforce for Freight, Warehousing & Fleet Management",
  "headline": "Turn Your Logistics Company Into an AI-Powered Workforce",
  "subheadline": "Saadhyam AI helps freight brokers, 3PL warehouses, carriers, and fleet operators automate driver check-calls, shipment tracking, rate quoting, dock appointment scheduling, and POD reconciliation with intelligent AI agents.",
  "heroStats": [
    {
      "label": "Check-Call Automation",
      "value": "100%"
    },
    {
      "label": "Rate Quote Turnaround",
      "value": "< 60 sec"
    },
    {
      "label": "Driver Detention Reduction",
      "value": "-38%"
    },
    {
      "label": "POD Processing Speed",
      "value": "5x faster"
    }
  ],
  "heroDashboard": {
    "title": "Freight & Fleet Command Center",
    "status": "5 Logistics Agents Active Across 120 Trucks",
    "activeDeal": "Cross-Country Dry Van & Cold Chain Lanes",
    "metrics": [
      {
        "label": "Active Loads Monitored",
        "value": "312",
        "change": "GPS verified"
      },
      {
        "label": "Driver Check-Calls Automated",
        "value": "840",
        "change": "Today"
      },
      {
        "label": "Dock Appointments Booked",
        "value": "94",
        "change": "Zero detention"
      },
      {
        "label": "Rate Quotes Dispatched",
        "value": "148",
        "change": "42% win rate"
      }
    ]
  },
  "problems": [
    {
      "title": "Shippers constantly calling asking \"Where is my shipment?\"",
      "description": "Customer service teams spend 60% of their day answering manual track-and-trace phone calls and emails from anxious shippers.",
      "impact": "High customer service headcount and distracted operations staff"
    },
    {
      "title": "Dispatchers spending hours on manual driver check-calls",
      "description": "Freight coordinators dial drivers multiple times a day to confirm location, fuel status, and ETA, distracting drivers on highways.",
      "impact": "Driver fatigue, missed updates, and unlogged location data"
    }
  ],
  "agents": [
    {
      "id": "log-track",
      "name": "Elena Rostova",
      "role": "Automated Track & Trace Agent",
      "blobatarName": "ElenaFreightTrack",
      "badge": "24/7 Visibility",
      "purpose": "Provides instant real-time shipment updates to shippers, brokers, and consignees via WhatsApp, email, and tracking portals.",
      "whatItDoes": "Connects with ELD GPS systems and carrier EDI to deliver exact location pins, revised ETAs, and delay exception alerts.",
      "exampleTasks": [
        "Answer customer WhatsApp queries: \"Where is PO #92841 right now?\"",
        "Send proactive delay alerts when weather slows highway transit"
      ]
    },
    {
      "id": "log-dispatch",
      "name": "Marcus Vance",
      "role": "Driver Check-Call & Dispatch Agent",
      "blobatarName": "MarcusFleetDispatch",
      "badge": "Driver Coordination",
      "purpose": "Conducts automated WhatsApp check-ins with truck drivers, confirms pickup readiness, and logs transit milestones without calling.",
      "whatItDoes": "Checks in with drivers at scheduled intervals, captures current odometer and location, and verifies rest break compliance.",
      "exampleTasks": [
        "Send 07:00 AM check-in message to confirm driver on highway route",
        "Capture driver fuel stop and rest break timestamps"
      ]
    }
  ],
  "workflow": [
    {
      "step": 1,
      "title": "Shipper Request Ingested",
      "agent": "Elena Rostova (Tracking Agent)",
      "description": "Shipper emails load request for dry van freight.",
      "output": "Parsed lane details within 15 seconds"
    },
    {
      "step": 2,
      "title": "Autonomous Driver Check-Calls",
      "agent": "Marcus Vance (Dispatch Agent)",
      "description": "AI coordinates checkpoint check-ins over WhatsApp, logging GPS coordinates automatically.",
      "output": "100% check-call logging with zero phone calls"
    }
  ],
  "useCases": [
    {
      "id": "log-uc-1",
      "title": "24/7 Shipper WhatsApp Track & Trace",
      "problem": "Shippers flood support helplines asking for shipment ETAs during transit.",
      "solution": "Shippers enter their load number or PO on WhatsApp; AI returns live GPS pin and ETA within 3 seconds.",
      "agent": "Elena Rostova (Tracking Agent)",
      "workflow": [
        "Shipper enters PO on WhatsApp",
        "AI queries ELD GPS and TMS",
        "Returns interactive map link & verified ETA"
      ],
      "impact": "82% reduction in track-and-trace phone calls"
    }
  ],
  "interactiveDemo": {
    "title": "Ask Your AI Workforce",
    "subtitle": "Simulate how autonomous logistics agents track freight and process driver PODs.",
    "presets": [
      {
        "agentId": "log-track",
        "agentName": "Elena Rostova (Tracking Agent)",
        "task": "Provide live tracking telemetry for Load #94218 (Reefer Frozen Freight from Chicago to Atlanta)",
        "terminalLogs": [
          {
            "time": "15:20:01",
            "text": "Connecting to Samsara ELD and carrier tracking telemetry...",
            "status": "success"
          },
          {
            "time": "15:20:04",
            "text": "✓ Current Location: I-65 South near Louisville, KY (GPS: 38.2527° N)",
            "status": "success"
          },
          {
            "time": "15:20:08",
            "text": "✓ Reefer temperature telemetry: -10°F verified (continuous compliance)",
            "status": "success"
          },
          {
            "time": "15:20:12",
            "text": "✓ Highway transit speed: 62 MPH; Weather ahead: Clear",
            "status": "success"
          },
          {
            "time": "15:20:17",
            "text": "✓ Verified Delivery ETA: Tomorrow 07:45 AM (15 mins ahead of appointment)",
            "status": "done"
          }
        ],
        "summary": "Live telematics verified and delivered to shipper in 16 seconds."
      }
    ]
  },
  "dashboardMetrics": [
    {
      "label": "Active Monitored Loads",
      "value": "412",
      "change": "100% on schedule"
    },
    {
      "label": "Check-Calls Automated",
      "value": "1,840",
      "change": "Today"
    },
    {
      "label": "Average Quote Time",
      "value": "48 sec",
      "change": "Market leading"
    },
    {
      "label": "On-Time Delivery Rate",
      "value": "98.6%",
      "change": "+3.2% this mo"
    },
    {
      "label": "Detention Hours Saved",
      "value": "184 hrs",
      "change": "Optimized docks"
    },
    {
      "label": "AI Logistics Actions",
      "value": "14,200",
      "change": "Continuous"
    }
  ],
  "integrations": [
    {
      "name": "McLeod TMS",
      "category": "Transportation Management System",
      "icon": "Database"
    },
    {
      "name": "WhatsApp Fleet API",
      "category": "Driver & Shipper Communication",
      "icon": "MessageSquare"
    },
    {
      "name": "Samsara ELD",
      "category": "Fleet GPS & Hours of Service",
      "icon": "Zap"
    },
    {
      "name": "DAT One",
      "category": "Freight Rate & Capacity Benchmarks",
      "icon": "Globe"
    }
  ],
  "roiMetrics": [
    {
      "metric": "100%",
      "label": "Driver Check-Call Automation",
      "subtext": "Eliminates hundreds of phone calls per day"
    },
    {
      "metric": "< 60 sec",
      "label": "Spot Rate Quote Turnaround",
      "subtext": "Win more spot loads ahead of competitors"
    },
    {
      "metric": "-38%",
      "label": "Driver Detention Penalties",
      "subtext": "Automated dock appointment coordination"
    },
    {
      "metric": "5x faster",
      "label": "POD to Invoicing Velocity",
      "subtext": "Accelerates cash flow and carrier settlements"
    }
  ],
  "caseStudy": {
    "company": "Apex Freight Logistics & Dedicated Carrier Services",
    "type": "Regional Freight Brokerage & Fleet (140 Power Units)",
    "challenge": "Apex dispatchers spent 5 hours daily calling drivers for highway check-calls.",
    "solution": "Integrated Saadhyam Logistics AI Workforce with Elena (Track & Trace) and Marcus (Driver Dispatch) connected to McLeod TMS.",
    "result": "100% of driver check-calls automated via WhatsApp. Spot quote turnaround plunged to 48 seconds."
  },
  "faqs": [
    {
      "q": "Do truck drivers need to download an application to do check-calls?",
      "a": "No. Truck drivers communicate with Marcus Dispatch Agent via regular WhatsApp or SMS, tapping 1 button to confirm status."
    },
    {
      "q": "Can Saadhyam integrate with our existing TMS like McLeod or TMW?",
      "a": "Yes. Saadhyam features native API and EDI connectors for major transportation management systems."
    }
  ],
  "seo": {
    "title": "AI Workforce for Logistics, Freight & Fleet | Saadhyam AI",
    "description": "Automate driver check-calls, shipment tracking, freight quoting, dock scheduling, and POD verification with Saadhyam AI.",
    "keywords": "AI workforce for logistics, freight broker AI, driver check call automation, track and trace WhatsApp, TMS integration AI"
  }
};
