export const healthcareData = {
  "id": "healthcare",
  "slug": "healthcare",
  "name": "Healthcare & Clinics",
  "shortName": "Healthcare",
  "category": "Healthcare & Life Sciences",
  "icon": "Activity",
  "badge": "Autonomous Clinic Operations",
  "eyebrow": "AI Workforce for Outpatient Clinics & Diagnostic Centers",
  "headline": "Turn Your Healthcare Practice Into an AI-Powered Workforce",
  "subheadline": "Saadhyam AI helps specialty clinics, dental practices, diagnostic labs, and medical centers automate patient scheduling, intake forms, lab test delivery, and care follow-ups with intelligent AI agents.",
  "heroStats": [
    {
      "label": "Patient Triage Speed",
      "value": "< 10 sec"
    },
    {
      "label": "No-Show Reduction",
      "value": "45%"
    },
    {
      "label": "Intake Form Completion",
      "value": "98%"
    },
    {
      "label": "EHR Charting Hours Saved",
      "value": "18 hrs/wk"
    }
  ],
  "heroDashboard": {
    "title": "Clinic Operations Hub",
    "status": "5 Clinical Practice Agents Active",
    "activeDeal": "Specialty Care & Diagnostic Center A",
    "metrics": [
      {
        "label": "Appointments Booked",
        "value": "284",
        "change": "This week"
      },
      {
        "label": "Digital Intakes Filed",
        "value": "98%",
        "change": "Prior to arrival"
      },
      {
        "label": "Lab Reports Dispatched",
        "value": "142",
        "change": "OTP secured"
      },
      {
        "label": "Patient CSAT Score",
        "value": "4.9 / 5.0",
        "change": "Top tier"
      }
    ]
  },
  "problems": [
    {
      "title": "High consultation no-show rates drain practice revenues",
      "description": "Without automated SMS and WhatsApp confirmation workflows, specialty clinics experience 25% no-show rates, leaving expensive doctors idle.",
      "impact": "Tens of thousands in lost monthly practice billings"
    },
    {
      "title": "Patients arrive unprepared for diagnostic tests",
      "description": "Patients turn up for blood work or ultrasounds having eaten breakfast or missed medication prep, forcing appointments to be cancelled.",
      "impact": "Wasted appointment slots and frustrated patients"
    },
    {
      "title": "Front desk buried under routine phone calls",
      "description": "Receptionists spend entire shifts answering repetitive questions about clinic opening hours, doctor fees, parking, and report readiness.",
      "impact": "Long clinic check-in lines and poor patient in-person experience"
    }
  ],
  "agents": [
    {
      "id": "hc-scheduling",
      "name": "Sarah Jenkins",
      "role": "Clinic Appointment & Triage Agent",
      "blobatarName": "SarahClinicLead",
      "badge": "Scheduling & Triage",
      "purpose": "Books specialist appointments, manages doctor calendars, handles reschedules, and triages patient symptoms.",
      "whatItDoes": "Connects directly with clinic EMR to offer live doctor slots, confirms visits via WhatsApp, and collects preliminary symptom details.",
      "exampleTasks": [
        "Book dental, pediatric, or dermatology consultation slots",
        "Send interactive 1-tap WhatsApp appointment confirmations",
        "Offer cancelled high-demand slots to waitlisted patients"
      ]
    },
    {
      "id": "hc-intake",
      "name": "Maya Lin",
      "role": "Patient Intake & KYC Agent",
      "blobatarName": "MayaHealthForm",
      "badge": "Digital Intake",
      "purpose": "Collects digital medical history, insurance cards, and consent forms prior to patient arrival at the clinic.",
      "whatItDoes": "Sends mobile-friendly digital intake links, extracts insurance card details via OCR, and saves records into the patient chart.",
      "exampleTasks": [
        "Collect patient past medical history and allergies digitally",
        "Capture and verify insurance policy card images via OCR",
        "Pre-populate patient chart in EMR before doctor consultation"
      ]
    }
  ],
  "workflow": [
    {
      "step": 1,
      "title": "Patient Reaches Out",
      "agent": "Sarah Jenkins (Appointment Agent)",
      "description": "Patient messages clinic on WhatsApp or website looking to see a specialist.",
      "output": "Inquiry addressed in under 5 seconds"
    },
    {
      "step": 2,
      "title": "Slot Selection & Booking",
      "agent": "Sarah Jenkins (Appointment Agent)",
      "description": "AI presents open doctor consultation slots and locks the booking into clinic EMR.",
      "output": "Appointment confirmed with calendar invite"
    },
    {
      "step": 3,
      "title": "Digital Intake & Insurance Card",
      "agent": "Maya Lin (Intake Agent)",
      "description": "Patient receives digital intake link; uploads insurance card and medical history from home.",
      "output": "Chart prepared before patient steps into clinic"
    }
  ],
  "useCases": [
    {
      "id": "hc-uc-1",
      "title": "Autonomous Multi-Specialist Appointment Scheduling",
      "problem": "Clinic front-desk staff miss dozens of appointment calls during morning patient check-in rush.",
      "solution": "AI books, reschedules, and cancels appointments 24/7 across multiple doctors with live EMR calendar sync.",
      "agent": "Sarah Jenkins (Appointment Agent)",
      "workflow": [
        "Patient asks for consultation",
        "AI queries doctor specialty and open slots",
        "Confirms booking and sends WhatsApp pass"
      ],
      "impact": "35% of clinic appointments booked after business hours"
    }
  ],
  "interactiveDemo": {
    "title": "Ask Your AI Workforce",
    "subtitle": "Simulate how your autonomous clinic agents manage patient scheduling and lab prep.",
    "presets": [
      {
        "agentId": "hc-scheduling",
        "agentName": "Sarah Jenkins (Appointment Agent)",
        "task": "Book dermatology consultation and collect digital insurance intake for patient Emily",
        "terminalLogs": [
          {
            "time": "09:15:01",
            "text": "Ingesting patient WhatsApp inquiry: \"Need dermatology appointment this week\"...",
            "status": "success"
          },
          {
            "time": "09:15:04",
            "text": "✓ Queried Dr. Rachel Adams schedule: Thursday 11:30 AM available",
            "status": "success"
          },
          {
            "time": "09:15:08",
            "text": "✓ Patient confirmed Thursday 11:30 AM slot; appointment locked in EMR",
            "status": "success"
          },
          {
            "time": "09:15:13",
            "text": "✓ Mobile digital intake link dispatched via WhatsApp",
            "status": "success"
          },
          {
            "time": "09:15:18",
            "text": "✓ Insurance card scanned via OCR: Aetna PPO Verified (Co-pay: $25)",
            "status": "done"
          }
        ],
        "summary": "Appointment booked, insurance verified, and intake completed in 17 seconds."
      }
    ]
  },
  "dashboardMetrics": [
    {
      "label": "Weekly Consultations",
      "value": "412",
      "change": "+22% growth"
    },
    {
      "label": "Appointment No-Show Rate",
      "value": "5.2%",
      "change": "Down from 26%"
    },
    {
      "label": "Digital Intake Pass Rate",
      "value": "98.4%",
      "change": "Zero paper"
    },
    {
      "label": "Lab Reports Delivered",
      "value": "380",
      "change": "OTP secured"
    },
    {
      "label": "Average Patient Wait",
      "value": "4 mins",
      "change": "Streamlined"
    },
    {
      "label": "AI Clinic Tasks",
      "value": "7,400",
      "change": "Continuous"
    }
  ],
  "integrations": [
    {
      "name": "Kareo / AdvancedMD",
      "category": "Clinic EHR & Practice Management",
      "icon": "Database"
    },
    {
      "name": "WhatsApp Health Gateway",
      "category": "Patient Communication",
      "icon": "MessageSquare"
    },
    {
      "name": "AthenaHealth / eClinicalWorks",
      "category": "Cloud EHR Integration",
      "icon": "Layers"
    },
    {
      "name": "Diagnostic LIS API",
      "category": "Lab & Radiology Results",
      "icon": "FileCheck"
    },
    {
      "name": "Twilio Voice",
      "category": "Telephony & Appointment Calling",
      "icon": "PhoneCall"
    },
    {
      "name": "Stripe Healthcare Gateway",
      "category": "Patient Co-Pay Collection",
      "icon": "ShieldCheck"
    }
  ],
  "roiMetrics": [
    {
      "metric": "< 10 sec",
      "label": "Patient Triage Response Time",
      "subtext": "Sub-second response on all channels"
    },
    {
      "metric": "45%",
      "label": "Reduction in Clinic No-Shows",
      "subtext": "Automated 1-tap WhatsApp reminders"
    },
    {
      "metric": "98%",
      "label": "Pre-Visit Digital Intake Rate",
      "subtext": "Eliminates paper clipboards in waiting room"
    },
    {
      "metric": "18 hrs/wk",
      "label": "Doctor & Nurse Charting Time Saved",
      "subtext": "More dedicated patient care time"
    }
  ],
  "caseStudy": {
    "company": "Beacon Health Specialty Clinics & Diagnostics",
    "type": "Multi-Location Outpatient Group (4 Locations, 22 Physicians)",
    "challenge": "Beacon Health suffered from a 26% no-show rate that cost $65,000 monthly.",
    "solution": "Implemented Saadhyam Healthcare AI Workforce with Sarah (Scheduling) and Maya (Intake) connected to AthenaHealth EHR and WhatsApp.",
    "result": "No-show rates dropped to 5.2%. 98% of patients completed digital intake before arriving."
  },
  "faqs": [
    {
      "q": "Is Saadhyam HIPAA-compliant and safe for patient health information?",
      "a": "Yes. Saadhyam enforces strict healthcare data safeguards, including AES-256 encryption, business associate agreement (BAA) eligibility, and zero retention of PHI on public models."
    },
    {
      "q": "Can patients book and reschedule clinic visits directly on WhatsApp?",
      "a": "Yes. Patients can choose doctors, select convenient appointment times, receive instant digital passes, and reschedule or cancel with a single tap."
    }
  ],
  "seo": {
    "title": "AI Workforce for Healthcare & Outpatient Clinics | Saadhyam AI",
    "description": "Automate clinic appointment scheduling, patient intake, diagnostic prep, lab report delivery, and care follow-ups with Saadhyam AI.",
    "keywords": "AI workforce for healthcare, clinic appointment AI, outpatient triage bot, medical intake automation, healthcare WhatsApp AI"
  }
};
