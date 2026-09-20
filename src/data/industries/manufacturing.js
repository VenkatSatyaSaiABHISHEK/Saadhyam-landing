export const manufacturingData = {
  "id": "manufacturing",
  "slug": "manufacturing",
  "name": "Manufacturing",
  "shortName": "Manufacturing",
  "category": "Industrial & Operations",
  "icon": "Factory",
  "badge": "Autonomous Plant Operations",
  "eyebrow": "AI Workforce for Manufacturing & Industrial Plants",
  "headline": "Turn Your Manufacturing Operations Into an AI-Powered Workforce",
  "subheadline": "Saadhyam AI empowers industrial manufacturers to automate vendor communication, procurement PO tracking, maintenance alerts, quality reporting, and shop floor inventory operations with intelligent AI agents.",
  "heroStats": [
    {
      "label": "PO Processing Time",
      "value": "< 2 mins"
    },
    {
      "label": "Unplanned Downtime",
      "value": "-36%"
    },
    {
      "label": "Vendor Delivery Adherence",
      "value": "98.4%"
    },
    {
      "label": "Inventory Accuracy",
      "value": "99.8%"
    }
  ],
  "heroDashboard": {
    "title": "Manufacturing Control Center",
    "status": "6 Industrial Agents Active",
    "activeDeal": "Line 4 — Precision Automotive Assemblies",
    "metrics": [
      {
        "label": "Daily Output (Units)",
        "value": "14,280",
        "change": "99.2% target"
      },
      {
        "label": "Open Vendor POs",
        "value": "64",
        "change": "All on schedule"
      },
      {
        "label": "Plant OEE Score",
        "value": "88.4%",
        "change": "+4.2% this mo"
      },
      {
        "label": "Preventive Alerts",
        "value": "3",
        "change": "Scheduled offline"
      }
    ]
  },
  "problems": [
    {
      "title": "Vendor delays and opaque delivery timelines",
      "description": "Suppliers fail to update delivery milestones, leaving plant managers unaware of raw material delays until assembly lines are forced to halt.",
      "impact": "Expensive factory downtime and delayed finished-goods delivery"
    },
    {
      "title": "Unplanned machine downtime from lagging logs",
      "description": "Equipment vibration flags, temperature anomalies, and lubrication cycles logged in paper binders delay preventive servicing until catastrophic failure occurs.",
      "impact": "Thousands of dollars per hour in stalled production"
    },
    {
      "title": "Manual shift handovers and quality audit reports",
      "description": "Shift supervisors spend the first 45 minutes of each shift deciphering handwritten clipboards and cross-checking machine reject rates.",
      "impact": "Frequent human error and delayed batch defect corrections"
    },
    {
      "title": "Fragmented RFQ quoting and PO reconciliation",
      "description": "Procurement teams juggle hundreds of vendor quotation PDFs across email, resulting in delayed purchase orders and inconsistent supplier pricing.",
      "impact": "Suboptimal material pricing and procurement bottlenecks"
    }
  ],
  "agents": [
    {
      "id": "mfg-procure",
      "name": "Marcus Stone",
      "role": "Procurement & Vendor Agent",
      "blobatarName": "MarcusProcure",
      "badge": "Procurement & Supply",
      "purpose": "Coordinates vendor RFQs, validates supplier delivery dates, reconciles purchase orders, and expedites critical raw material shipments.",
      "whatItDoes": "Ingests bill of materials (BOM), dispatches automated quote requests to verified suppliers, compares lead times, and triggers POs in ERP.",
      "exampleTasks": [
        "Dispatches RFQs to approved raw material vendors",
        "Tracks in-transit shipment milestones via logistics APIs",
        "Follows up with suppliers on delinquent delivery dates via WhatsApp",
        "Reconciles supplier invoices against purchase orders"
      ]
    },
    {
      "id": "mfg-maintenance",
      "name": "Elena Rostova",
      "role": "Shop Floor Maintenance Agent",
      "blobatarName": "ElenaMaintOps",
      "badge": "Preventive Maintenance",
      "purpose": "Monitors machine operating hours, schedules preventive maintenance routines, and alerts technicians before component breakdown.",
      "whatItDoes": "Syncs machine runtime telemetry, issues work orders for technician inspections, and tracks spare parts availability.",
      "exampleTasks": [
        "Schedule quarterly CNC spindle lubrication and calibration",
        "Trigger instant work order when motor temperature exceeds threshold",
        "Check inventory availability for replacement hydraulic seals",
        "Log technician sign-offs and maintenance completion"
      ]
    }
  ],
  "workflow": [
    {
      "step": 1,
      "title": "BOM & Material Requirement",
      "agent": "Marcus Stone (Procurement)",
      "description": "Production plan generates raw material requirement; AI checks inventory and identifies shortfalls.",
      "output": "Material shortage flagged 10 days in advance"
    },
    {
      "step": 2,
      "title": "Automated RFQ & Vendor Quoting",
      "agent": "Marcus Stone (Procurement)",
      "description": "AI dispatches RFQs to approved vendors, parses pricing/lead-time, and selects optimal supplier.",
      "output": "Vendor selected within 30 minutes"
    },
    {
      "step": 3,
      "title": "PO Generation & ERP Sync",
      "agent": "Autonomous ERP Connector",
      "description": "Purchase order generated in SAP / Oracle SCM with pre-approved price thresholds.",
      "output": "PO delivered to vendor via WhatsApp & EDI"
    },
    {
      "step": 4,
      "title": "Production Run & Telemetry",
      "agent": "Elena Rostova (Maintenance Agent)",
      "description": "Shop floor machines run; AI monitors vibration, cycles, and temperature telemetry continuously.",
      "output": "Zero unplanned downtime incidents"
    }
  ],
  "useCases": [
    {
      "id": "mfg-uc-1",
      "title": "Autonomous Supplier Delivery Follow-Ups",
      "problem": "Suppliers go silent on expected delivery dates, risking factory shutdown.",
      "solution": "AI messages suppliers via WhatsApp/email at milestone checkpoints to verify transit status and dispatch dates.",
      "agent": "Marcus Stone (Procurement)",
      "workflow": [
        "Detect scheduled delivery within 48h",
        "Ping supplier WhatsApp API",
        "Parse delivery status",
        "Update production schedule in ERP"
      ],
      "impact": "98.4% on-time raw material delivery rate"
    },
    {
      "id": "mfg-uc-2",
      "title": "Predictive Maintenance Work Order Trigger",
      "problem": "Technicians miss scheduled machine servicing intervals, leading to motor burnout.",
      "solution": "AI tracks machine cycle counts and sensor readings, automatically generating maintenance work orders.",
      "agent": "Elena Rostova (Maintenance Agent)",
      "workflow": [
        "Sensor logs 5,000 continuous hours",
        "AI checks replacement parts in stock",
        "Assigns work order to duty technician",
        "Logs sign-off and reset"
      ],
      "impact": "36% reduction in unplanned factory downtime"
    }
  ],
  "interactiveDemo": {
    "title": "Ask Your AI Workforce",
    "subtitle": "Simulate how autonomous industrial agents manage vendor procurement and shop floor maintenance.",
    "presets": [
      {
        "agentId": "mfg-procure",
        "agentName": "Marcus Stone (Procurement)",
        "task": "Expedite delivery for delayed aluminum coil shipment with Supplier X",
        "terminalLogs": [
          {
            "time": "08:30:02",
            "text": "Detecting scheduled delivery delay for PO #89421 (Supplier X)...",
            "status": "warning"
          },
          {
            "time": "08:30:05",
            "text": "✓ Automated WhatsApp inquiry dispatched to Supplier Dispatch Head",
            "status": "success"
          },
          {
            "time": "08:30:11",
            "text": "✓ Supplier confirmed truck breakdown; replacement vehicle dispatched",
            "status": "success"
          },
          {
            "time": "08:30:16",
            "text": "✓ New ETA calculated: Today 14:30 PM (within safety buffer)",
            "status": "success"
          },
          {
            "time": "08:30:20",
            "text": "✓ ERP production schedule adjusted for Line 2; zero downtime incurred",
            "status": "done"
          }
        ],
        "summary": "Shipment milestone verified and schedule adjusted without halting production."
      }
    ]
  },
  "dashboardMetrics": [
    {
      "label": "Factory OEE Score",
      "value": "89.4%",
      "change": "+3.8%"
    },
    {
      "label": "Active Vendor Orders",
      "value": "112",
      "change": "99% on track"
    },
    {
      "label": "Unplanned Downtime",
      "value": "1.2%",
      "change": "Target <2%"
    },
    {
      "label": "Inventory Turnover",
      "value": "12.4x",
      "change": "Optimized capital"
    },
    {
      "label": "Batch Reject Rate",
      "value": "0.24%",
      "change": "Six Sigma target"
    },
    {
      "label": "AI Plant Operations",
      "value": "6,420",
      "change": "Continuous"
    }
  ],
  "integrations": [
    {
      "name": "SAP S/4HANA / ERP",
      "category": "Enterprise Resource Planning",
      "icon": "Database"
    },
    {
      "name": "Oracle SCM",
      "category": "Supply Chain Management",
      "icon": "Layers"
    },
    {
      "name": "WhatsApp Supplier Portal",
      "category": "Vendor Communication",
      "icon": "MessageSquare"
    },
    {
      "name": "SCADA / PLC Gateway",
      "category": "Shop Floor Telemetry",
      "icon": "Zap"
    },
    {
      "name": "Barcode Scanners",
      "category": "Warehouse Inventory",
      "icon": "FileCheck"
    },
    {
      "name": "Twilio Alerts",
      "category": "Emergency Plant Escalation",
      "icon": "PhoneCall"
    }
  ],
  "roiMetrics": [
    {
      "metric": "< 2 mins",
      "label": "PO Generation & Dispatch",
      "subtext": "Down from 3 days manual drafting"
    },
    {
      "metric": "-36%",
      "label": "Unplanned Machine Downtime",
      "subtext": "Predictive maintenance before failure"
    },
    {
      "metric": "98.4%",
      "label": "Supplier On-Time Delivery",
      "subtext": "Proactive milestone WhatsApp follow-ups"
    },
    {
      "metric": "20 hrs/wk",
      "label": "Supervisor Reporting Time Saved",
      "subtext": "Automated shift briefs and OEE calculations"
    }
  ],
  "caseStudy": {
    "company": "Apex Precision Engineering & Automotive Components",
    "type": "Tier-1 Industrial Supplier (3 Plants, 600 Operators)",
    "challenge": "Apex suffered from frequent raw material delays from 80+ suppliers and uncoordinated machine breakdowns that cost $12,000 per hour.",
    "solution": "Deployed Saadhyam Industrial AI Workforce with Marcus (Procurement) and Elena (Maintenance) connected directly to SAP ERP and shop-floor IoT sensors.",
    "result": "Supplier delivery adherence surged to 98.4%. Machine downtime fell by 36%, and supervisor admin work was reduced by 15 hours weekly per plant."
  },
  "faqs": [
    {
      "q": "Can Saadhyam integrate with our existing SAP or Oracle ERP system?",
      "a": "Yes. Saadhyam connects via standard RFC, BAPI, and REST APIs to SAP S/4HANA, ECC, and Oracle SCM to read bills of materials, create purchase requisitions, and sync inventory."
    },
    {
      "q": "How does the AI communicate with suppliers who only use WhatsApp or email?",
      "a": "Saadhyam uses official WhatsApp Business API and email gateways to converse directly with suppliers, asking for delivery confirmations and parsing quote PDFs."
    }
  ],
  "seo": {
    "title": "AI Workforce for Manufacturing & Industrial Plants | Saadhyam AI",
    "description": "Automate vendor procurement, preventive maintenance, shop floor quality, and inventory operations with Saadhyam AI.",
    "keywords": "AI workforce for manufacturing, industrial AI agents, factory maintenance automation, procurement AI bot, OEE tracking AI"
  }
};
