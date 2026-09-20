export const educationData = {
  "id": "education",
  "slug": "education",
  "name": "Education",
  "shortName": "Education",
  "category": "Institutions & Learning",
  "icon": "GraduationCap",
  "badge": "Autonomous Campus Operations",
  "eyebrow": "AI Workforce for Universities, Schools & EdTech",
  "headline": "Turn Your Educational Institution Into an AI-Powered Workforce",
  "subheadline": "Saadhyam AI helps schools, colleges and edtech platforms automate student admissions, parent communication, fee follow-ups, attendance tracking, and academic support with intelligent AI agents.",
  "heroStats": [
    {
      "label": "Inquiry Response Time",
      "value": "< 10 sec"
    },
    {
      "label": "Admission Conversion",
      "value": "+38%"
    },
    {
      "label": "Fee Collection Velocity",
      "value": "2.5x"
    },
    {
      "label": "Parent Engagement",
      "value": "94%"
    }
  ],
  "heroDashboard": {
    "title": "Campus Academic Operations Hub",
    "status": "6 Academic Agents Active",
    "activeDeal": "Fall 2026 Admissions Cohort",
    "metrics": [
      {
        "label": "Active Inquiries",
        "value": "840",
        "change": "+45% this wk"
      },
      {
        "label": "Campus Tours Booked",
        "value": "92",
        "change": "This Saturday"
      },
      {
        "label": "Tuition Follow-ups Sent",
        "value": "314",
        "change": "86% cleared"
      },
      {
        "label": "Enrolled Students",
        "value": "1,240",
        "change": "Capacity: 92%"
      }
    ]
  },
  "problems": [
    {
      "title": "Admission queries overwhelm counselors during peak seasons",
      "description": "During enrollment months, thousands of prospective students ask questions about eligibility, cut-offs, fee structures, and scholarship options. Counselors cannot respond quickly, losing top candidates.",
      "impact": "High candidate drop-off to competing institutions"
    },
    {
      "title": "Parents face delayed responses on grades and updates",
      "description": "Parents calling school offices for examination schedules, bus tracking, attendance flags, and report cards encounter busy lines and delayed email replies.",
      "impact": "Poor parent satisfaction and communication breakdowns"
    },
    {
      "title": "Stalled fee collections require tedious manual reminders",
      "description": "Finance teams spend hundreds of hours every term drafting manual reminder letters, making phone calls, and cross-matching bank receipts for tuition payments.",
      "impact": "Cash flow delays and high administrative burden"
    },
    {
      "title": "Students lack 24/7 academic and LMS assistance",
      "description": "Students studying late at night or over weekends get stuck on syllabus questions, library portal access, or course prerequisites with no support available.",
      "impact": "Course dropouts and reduced learning engagement"
    },
    {
      "title": "Manual attendance and welfare tracking",
      "description": "Tracking absent students, notifying guardians, and correlating attendance drops with academic decline requires disconnected spreadsheet logs.",
      "impact": "Failure to intervene early before students fail or drop out"
    },
    {
      "title": "Leadership lacks real-time enrollment pipeline visibility",
      "description": "Deans and directors receive outdated weekly reports and cannot dynamically allocate scholarship funds or marketing budget to unfilled courses.",
      "impact": "Unfilled seats and suboptimal cohort yield"
    }
  ],
  "agents": [
    {
      "id": "edu-student-support",
      "name": "Leo Bennett",
      "role": "Student Support Agent",
      "blobatarName": "LeoStudentGuide",
      "badge": "24/7 Academic Concierge",
      "purpose": "Guides students through course timetables, exam schedules, campus navigation, library resources, and LMS portal navigation.",
      "whatItDoes": "Answers student inquiries instantaneously, explains course syllabus and prerequisite requirements, and assists with assignment portal queries.",
      "exampleTasks": [
        "Provide instant exam schedule and venue details",
        "Help students navigate LMS assignment submission portals",
        "Share course syllabus prerequisites and reading lists",
        "Answer campus facility and library booking queries"
      ]
    },
    {
      "id": "edu-admissions",
      "name": "Emma Watson",
      "role": "Admission & Enrollment Agent",
      "blobatarName": "EmmaAdmissions",
      "badge": "Enrollment Counselor",
      "purpose": "Engages prospective applicants, verifies program eligibility criteria, answers fee queries, and schedules campus admission interviews.",
      "whatItDoes": "Conducts multi-turn conversational admissions qualification, guides candidates through form submission, and tracks application milestones.",
      "exampleTasks": [
        "Qualify candidate academic eligibility for selected degree programs",
        "Share tuition fee breakdowns, hostel fees, and scholarship criteria",
        "Book campus walk-throughs and counselor 1-on-1 interview slots",
        "Send automated reminders for document submission deadlines"
      ]
    },
    {
      "id": "edu-parent-comm",
      "name": "Sophia Miller",
      "role": "Parent Communication Agent",
      "blobatarName": "SophiaParentLink",
      "badge": "Parent Relations",
      "purpose": "Maintains open, proactive communication with parents regarding student progress, school events, bus tracking, and circular notices.",
      "whatItDoes": "Dispatches personalized attendance notifications, upcoming parent-teacher conference invites, and school calendar updates via WhatsApp.",
      "exampleTasks": [
        "Notify parents of unexcused student absences within 15 minutes",
        "Schedule Parent-Teacher Meeting (PTM) appointment slots",
        "Answer inquiries regarding school transport schedules and holidays",
        "Deliver verified digital report cards and exam grade summaries"
      ]
    },
    {
      "id": "edu-fee-followup",
      "name": "David Tuition",
      "role": "Fee Follow-Up & Billing Agent",
      "blobatarName": "DavidTuitionCare",
      "badge": "Tuition & Billing",
      "purpose": "Automates polite, milestone-based tuition fee reminders, payment link delivery, and instant digital receipt generation.",
      "whatItDoes": "Notifies parents of upcoming term deadlines, generates 1-tap payment links, handles installment inquiries, and updates student ledgers.",
      "exampleTasks": [
        "Send friendly fee due reminders 7 days and 2 days prior to deadline",
        "Generate instant secure online payment links via WhatsApp and SMS",
        "Reconcile successful payments with the campus ERP finance ledger",
        "Answer installment plan and scholarship deduction questions"
      ]
    }
  ],
  "workflow": [
    {
      "step": 1,
      "title": "Inquiry Arrives",
      "agent": "Emma Watson (Admissions Agent)",
      "description": "Prospective student or parent inquires via web form, education portal, or WhatsApp.",
      "output": "Inquiry acknowledged in under 10 seconds"
    },
    {
      "step": 2,
      "title": "Eligibility & Program Match",
      "agent": "Emma Watson (Admissions Agent)",
      "description": "AI verifies candidate GPA/grades, course interest, and answers scholarship options.",
      "output": "Candidate pre-qualified for enrollment"
    },
    {
      "step": 3,
      "title": "Campus Tour & Counselor Slot",
      "agent": "Autonomous Calendar Engine",
      "description": "Candidate books guided Saturday campus tour and counselor interview slot.",
      "output": "Calendar invite & campus parking pass sent"
    },
    {
      "step": 4,
      "title": "Digital Application & KYC",
      "agent": "Document Verification Engine",
      "description": "Applicant uploads transcripts and ID; AI verifies completeness and flags missing items.",
      "output": "Application verified and pushed to SIS"
    },
    {
      "step": 5,
      "title": "Tuition Fee Payment",
      "agent": "David Tuition (Billing Agent)",
      "description": "Dispatches secure fee link; generates digital admission receipt upon completion.",
      "output": "Payment reconciled in campus ERP"
    },
    {
      "step": 6,
      "title": "Continuous Academic Support",
      "agent": "Leo Bennett (Student Support)",
      "description": "24/7 assistance for coursework queries, parent attendance alerts, and exam notifications.",
      "output": "Zero parent communication friction"
    }
  ],
  "useCases": [
    {
      "id": "edu-uc-1",
      "title": "24/7 Admissions Lead Engagement",
      "problem": "Prospective students inquiring after 6 PM or over weekends receive delayed responses.",
      "solution": "AI instantly responds to queries on programs, fees, eligibility, and schedules counselor visits.",
      "agent": "Emma Watson (Admissions Agent)",
      "workflow": [
        "Inquiry received on WhatsApp/Web",
        "AI matches desired program",
        "Answers fee & scholarship questions",
        "Books counselor phone call"
      ],
      "impact": "38% increase in completed student admission applications"
    },
    {
      "id": "edu-uc-2",
      "title": "Autonomous Tuition Fee Reminders",
      "problem": "Administrative staff spend weeks manually tracking fee defaulters and sending circulars.",
      "solution": "Automated milestone-based WhatsApp reminders with 1-click payment links and instant receipts.",
      "agent": "David Tuition (Billing Agent)",
      "workflow": [
        "Detect approaching fee due date",
        "Send personalized WhatsApp reminder with link",
        "Process payment confirmation",
        "Update student ledger in ERP"
      ],
      "impact": "Fee collection cycle shortened by 14 days"
    },
    {
      "id": "edu-uc-3",
      "title": "Instant Parent Attendance Notifications",
      "problem": "Parents are unaware when students skip classes until end-of-term report cards arrive.",
      "solution": "Daily automatic WhatsApp notification sent to guardians within 15 minutes of unexcused absence.",
      "agent": "Sophia Miller (Parent Communication)",
      "workflow": [
        "Biometric/teacher attendance logged",
        "System identifies unexcused absences",
        "Instant alert dispatched to registered parent mobile",
        "Option to submit doctor note"
      ],
      "impact": "62% reduction in unauthorized student absenteeism"
    },
    {
      "id": "edu-uc-4",
      "title": "24/7 LMS & Homework Assistant",
      "problem": "Students get stuck on assignment portals or syllabus concepts outside classroom hours.",
      "solution": "AI guides students through assignment submissions, past papers, and university resource portals.",
      "agent": "Leo Bennett (Student Support)",
      "workflow": [
        "Student asks question in LMS or WhatsApp",
        "AI retrieves course materials & guidelines",
        "Delivers step-by-step clarification",
        "Logs frequently asked topics for teacher"
      ],
      "impact": "88% of technical LMS questions resolved without IT tickets"
    }
  ],
  "interactiveDemo": {
    "title": "Ask Your AI Workforce",
    "subtitle": "Simulate how autonomous campus agents manage admissions and tuition workflows.",
    "presets": [
      {
        "agentId": "edu-admissions",
        "agentName": "Emma Watson (Admissions Agent)",
        "task": "Engage and qualify 20 weekend MBA inquiry submissions",
        "terminalLogs": [
          {
            "time": "10:00:02",
            "text": "Ingesting 20 prospective student inquiries from web & LinkedIn...",
            "status": "success"
          },
          {
            "time": "10:00:05",
            "text": "✓ 20 candidate profiles extracted and checked against eligibility rules",
            "status": "success"
          },
          {
            "time": "10:00:09",
            "text": "✓ 16 candidates qualified with >3 years work experience & bachelor GPA",
            "status": "success"
          },
          {
            "time": "10:00:14",
            "text": "✓ 16 personalized WhatsApp brochures sent with scholarship guide",
            "status": "success"
          },
          {
            "time": "10:00:18",
            "text": "✓ 7 campus interview slots booked with admissions director",
            "status": "success"
          },
          {
            "time": "10:00:22",
            "text": "✓ Student Information System updated with candidate pipeline tags",
            "status": "done"
          }
        ],
        "summary": "16 high-caliber candidates qualified, 7 director interviews scheduled in 20 seconds."
      }
    ]
  },
  "dashboardMetrics": [
    {
      "label": "Total Inquiries (Month)",
      "value": "1,420",
      "change": "+32%"
    },
    {
      "label": "Admission Applications",
      "value": "486",
      "change": "84% complete"
    },
    {
      "label": "Campus Visits Booked",
      "value": "142",
      "change": "This month"
    },
    {
      "label": "Fee Collection Velocity",
      "value": "91.8%",
      "change": "+18% speed"
    },
    {
      "label": "Parent CSAT Score",
      "value": "4.8 / 5.0",
      "change": "890 reviews"
    },
    {
      "label": "AI Campus Tasks Run",
      "value": "8,940",
      "change": "Continuous"
    }
  ],
  "integrations": [
    {
      "name": "Canvas LMS / Blackboard",
      "category": "Learning Management System",
      "icon": "Layers"
    },
    {
      "name": "WhatsApp Education API",
      "category": "Parent & Student Outreach",
      "icon": "MessageSquare"
    },
    {
      "name": "Google Classroom",
      "category": "Assignment & Timetable Sync",
      "icon": "Globe"
    },
    {
      "name": "Campus SIS / ERP",
      "category": "Student Information System",
      "icon": "Database"
    },
    {
      "name": "Stripe / Fee Gateway",
      "category": "Tuition Fee Collection",
      "icon": "FileCheck"
    },
    {
      "name": "Twilio Alerts",
      "category": "Emergency Campus Broadcast",
      "icon": "PhoneCall"
    }
  ],
  "roiMetrics": [
    {
      "metric": "< 10 sec",
      "label": "Average Inquiry Response Time",
      "subtext": "Down from 24 hours email lag"
    },
    {
      "metric": "+38%",
      "label": "Admission Enrollment Conversion",
      "subtext": "Frictionless guidance through application"
    },
    {
      "metric": "2.5x",
      "label": "Faster Fee Realization",
      "subtext": "Automated 1-click WhatsApp payment links"
    },
    {
      "metric": "25 hrs/wk",
      "label": "Counselor Administrative Time Saved",
      "subtext": "More 1-on-1 student mentoring"
    }
  ],
  "caseStudy": {
    "company": "Oakridge Global Academy & University College",
    "type": "K-12 & Higher Education Group (3 Campuses, 4,500 Students)",
    "challenge": "Oakridge counselors struggled to handle 2,000+ admission inquiries during summer intake. 40% of applicants dropped off due to slow replies. Concurrently, finance teams spent weeks collecting late tuition fees.",
    "solution": "Implemented Saadhyam Education AI Workforce with Emma (Admissions), Sophia (Parent Communications), and David (Fee Follow-Up) integrated into their Campus ERP and WhatsApp API.",
    "result": "100% of admission inquiries answered in 10 seconds. Completed applications rose by 41%, and tuition fee collection time dropped by 16 days with zero parent complaints."
  },
  "faqs": [
    {
      "q": "Can Saadhyam answer admissions questions about our exact courses, fees, and eligibility?",
      "a": "Yes. You can upload your university or school prospectus, fee charts, scholarship criteria, and course catalogs. Saadhyam indexes them and only provides verified, accurate information to applicants."
    },
    {
      "q": "Can parents receive automated attendance alerts and report cards on WhatsApp?",
      "a": "Yes. Saadhyam integrates with your biometric check-in or teacher attendance system to automatically notify parents of unexcused absences within minutes, and delivers secure report cards on exam result days."
    },
    {
      "q": "Can the AI automate tuition fee collection and generate payment links?",
      "a": "Yes. David Tuition Agent sends courteous reminder notifications with customized 1-tap payment links, reconciles completed transactions, and issues digital receipts immediately."
    },
    {
      "q": "Does Saadhyam integrate with our existing LMS like Canvas, Moodle, or Blackboard?",
      "a": "Yes. Saadhyam features connectors for major LMS platforms to answer timetable queries, deliver exam schedules, and guide students through assignment submission deadlines."
    }
  ],
  "seo": {
    "title": "AI Workforce for Education & Universities | Saadhyam AI",
    "description": "Automate student admissions, parent communication, tuition fee follow-ups, and campus operations with Saadhyam AI.",
    "keywords": "AI workforce for education, university admissions AI, school WhatsApp bot, student support automation, campus ERP AI"
  }
};
