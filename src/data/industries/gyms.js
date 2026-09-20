export const gymsData = {
  "id": "gyms",
  "slug": "gyms",
  "name": "Gyms & Fitness Centers",
  "shortName": "Fitness",
  "category": "Hospitality & Leisure",
  "icon": "Activity",
  "badge": "Autonomous Gym & Club Operations",
  "eyebrow": "AI Workforce for Health Clubs, CrossFit Boxes & Fitness Studios",
  "headline": "Turn Your Gym Into an AI-Powered Workforce",
  "subheadline": "Saadhyam AI helps health clubs and fitness studios automate trial pass inquiries, membership renewals, personal training trial bookings, class waitlists, and member retention check-ins with intelligent AI agents.",
  "heroStats": [
    {
      "label": "Free Pass Lead Conversion",
      "value": "+32%"
    },
    {
      "label": "Membership Renewal Rate",
      "value": "92%"
    },
    {
      "label": "PT Trial Booking Speed",
      "value": "< 30 sec"
    },
    {
      "label": "Member Retention Check-in",
      "value": "100%"
    }
  ],
  "heroDashboard": {
    "title": "Fitness Club Operations Center",
    "status": "4 Fitness Agents Active Across 1,400 Members",
    "activeDeal": "IronCore Fitness — New Year Transformation Challenge",
    "metrics": [
      {
        "label": "Active Gym Members",
        "value": "1,420",
        "change": "+18% net growth"
      },
      {
        "label": "Free Pass Conversions",
        "value": "84",
        "change": "This month"
      },
      {
        "label": "PT Trials Booked",
        "value": "46",
        "change": "+28% vs last mo"
      },
      {
        "label": "Failed Payment Recovered",
        "value": "$8,400",
        "change": "Automated dunning"
      }
    ]
  },
  "problems": [
    {
      "title": "Free day pass leads go cold without prompt follow-ups",
      "description": "Prospective members request a free trial pass online, but front desk staff busy with check-ins fail to call them until 48 hours later.",
      "impact": "Wasted Instagram/Facebook ad spend and low join rates"
    },
    {
      "title": "Silent member churn when workout frequency drops",
      "description": "Members gradually stop visiting the gym, and by the time staff notice two months later, the member cancels their subscription.",
      "impact": "High annual member churn and predictable revenue loss"
    },
    {
      "title": "Unsold personal training slots and trainer idle time",
      "description": "Personal trainers spend hours trying to text prospective clients between training sessions instead of running billable fitness sessions.",
      "impact": "High trainer turnover and missed high-margin recurring PT revenue"
    },
    {
      "title": "Expired credit cards and failed monthly subscription billing",
      "description": "Gym managers waste days manually calling members whose recurring dues failed, causing awkward front-desk confrontations.",
      "impact": "3–5% involuntary churn every single billing cycle"
    }
  ],
  "agents": [
    {
      "id": "gym-member",
      "name": "Zara Swift",
      "role": "Member Onboarding & Retention Agent",
      "blobatarName": "ZaraFitnessGuide",
      "badge": "24/7 Member Retention & Sales",
      "purpose": "Engages prospective members who claim a trial pass, schedules facility tours, and re-engages members whose gym attendance declines.",
      "whatItDoes": "Monitors turnstile barcode check-ins in Mindbody/ABC Fitness; triggers friendly motivation check-ins when members miss 10 consecutive days.",
      "exampleTasks": [
        "Engage free pass downloader within 60 seconds via WhatsApp to schedule club tour",
        "Check member attendance telemetry; trigger encouraging re-activation message if inactive",
        "Collect member workout goal feedback (weight loss, strength, marathon prep)",
        "Upgrade trial members to annual membership with special joining bonus"
      ]
    },
    {
      "id": "gym-pt",
      "name": "Jax Hunter",
      "role": "Personal Training & Class Booking Agent",
      "blobatarName": "JaxTrainerOps",
      "badge": "PT Sales & Class Waitlists",
      "purpose": "Matches members with certified personal trainers, books complimentary fitness assessments, and fills empty group fitness spots.",
      "whatItDoes": "Syncs trainer schedules, collects member health goals, and fills cancellation slots on popular spin or pilates classes.",
      "exampleTasks": [
        "Match member seeking hypertrophy with senior strength coach",
        "Book 45-minute Body Composition & Fitness Assessment on coach calendar",
        "Alert waitlisted members when spot opens in 6:00 PM HIIT class",
        "Follow up after first workout session to schedule weekly PT package"
      ]
    }
  ],
  "workflow": [
    {
      "step": 1,
      "title": "Trial Pass Claimed Online",
      "agent": "Zara Swift (Member Agent)",
      "description": "Prospect clicks Instagram ad and claims a 3-Day VIP Free Pass.",
      "output": "Lead captured in CRM"
    },
    {
      "step": 2,
      "title": "Instant WhatsApp Welcome & Tour Booking",
      "agent": "Zara Swift (Member Agent)",
      "description": "Sends digital barcode pass and schedules club walkthrough with a trainer.",
      "output": "Tour scheduled in 2 mins"
    },
    {
      "step": 3,
      "title": "Complimentary Fitness Assessment",
      "agent": "Jax Hunter (PT Agent)",
      "description": "Books InBody scan and movement screening with senior fitness trainer.",
      "output": "Trainer calendar updated"
    },
    {
      "step": 4,
      "title": "Turnstile Telemetry & Retention Monitor",
      "agent": "Autonomous Club Engine",
      "description": "Tracks workout cadence; sends encouragement if attendance drops below weekly goal.",
      "output": "Member habit reinforced"
    },
    {
      "step": 5,
      "title": "Club Owner Executive View",
      "agent": "Executive Control Center",
      "description": "Owner tracks net member growth, PT revenue, and retention churn trends.",
      "output": "Predictable club profitability"
    }
  ],
  "useCases": [
    {
      "id": "gym-uc-1",
      "title": "Sub-60-Second Free Pass Lead Conversion",
      "problem": "Prospects downloading trial passes are contacted days later, after their workout motivation has cooled.",
      "solution": "AI sends immediate WhatsApp welcome with digital turnstile barcode and schedules a tour.",
      "agent": "Zara Swift (Member Agent)",
      "workflow": [
        "Prospect claims free pass",
        "AI issues digital wallet pass via WhatsApp",
        "Asks fitness goal and suggests best class",
        "Books VIP tour with fitness consultant"
      ],
      "impact": "Increases trial pass to paying member conversion by 32%"
    },
    {
      "id": "gym-uc-2",
      "title": "Proactive Attendance-Based Churn Prevention",
      "problem": "Members who stop coming for 2 weeks end up cancelling their contracts 60 days later.",
      "solution": "AI detects missed workout patterns and sends empathetic, supportive check-ins before churn happens.",
      "agent": "Zara Swift (Member Agent)",
      "workflow": [
        "Check-in sensor flags 12 days without gym scan",
        "AI sends personalized WhatsApp: \"We miss you at the club\"",
        "Offers complimentary stretch session or trainer tip",
        "Member re-engages and resumes workouts"
      ],
      "impact": "Reduces annual membership churn by 24%"
    }
  ],
  "interactiveDemo": {
    "title": "Ask Your Fitness AI Workforce",
    "subtitle": "Simulate how gym agents convert trial leads and re-engage inactive gym members.",
    "presets": [
      {
        "agentId": "gym-member",
        "agentName": "Zara Swift (Member Agent)",
        "task": "Claimed 3-Day Free Pass lead: Schedule club tour and match with personal trainer",
        "terminalLogs": [
          {
            "time": "11:10:01",
            "text": "New lead detected from Instagram Campaign: Sarah Jenkins...",
            "status": "info"
          },
          {
            "time": "11:10:03",
            "text": "✓ Dispatched WhatsApp welcome with digital wallet gym barcode",
            "status": "info"
          },
          {
            "time": "11:10:06",
            "text": "✓ Member stated goal: Half-marathon endurance & core strength",
            "status": "success"
          },
          {
            "time": "11:10:09",
            "text": "✓ Matched with Coach Jax (Endurance Specialist) for Friday 10:00 AM",
            "status": "success"
          },
          {
            "time": "11:10:12",
            "text": "✓ Lead status updated to \"Tour Scheduled\" in Mindbody CRM",
            "status": "done"
          }
        ],
        "summary": "Lead converted and booked with trainer within 11 seconds of free pass download."
      }
    ]
  },
  "dashboardMetrics": [
    {
      "label": "Active Members",
      "value": "1,420",
      "change": "+14% YoY"
    },
    {
      "label": "Trial-to-Paid Join",
      "value": "44.8%",
      "change": "+12.4% lift"
    },
    {
      "label": "Monthly Churn Rate",
      "value": "2.4%",
      "change": "Down from 5.8%"
    },
    {
      "label": "PT Trial Bookings",
      "value": "142",
      "change": "+38% this quarter"
    },
    {
      "label": "Dunning Recovery",
      "value": "94.2%",
      "change": "Saved $12k dues"
    },
    {
      "label": "Member Retention NPS",
      "value": "74 NPS",
      "change": "Top quartile"
    }
  ],
  "integrations": [
    {
      "name": "Mindbody / Mariana Tek",
      "category": "Gym & Studio Management",
      "icon": "Activity"
    },
    {
      "name": "ABC Fitness / ClubReady",
      "category": "Health Club Billing & Access",
      "icon": "Database"
    },
    {
      "name": "WhatsApp Business API",
      "category": "Direct Member Messaging",
      "icon": "Smartphone"
    },
    {
      "name": "Stripe Billing / Dunning",
      "category": "Automated Payment Recovery",
      "icon": "DollarSign"
    },
    {
      "name": "Gympass / ClassPass",
      "category": "Aggregator Partner Sync",
      "icon": "Users"
    },
    {
      "name": "Brivo / Openpath Access",
      "category": "Turnstile Door Access Control",
      "icon": "Lock"
    }
  ],
  "roiMetrics": [
    {
      "metric": "+32%",
      "label": "Trial Pass Lead Conversion",
      "subtext": "Instant conversational engagement locks in new members"
    },
    {
      "metric": "-24%",
      "label": "Annual Member Churn Reduction",
      "subtext": "Attendance telemetry flags drop-offs before cancellation"
    },
    {
      "metric": "94%",
      "label": "Failed Dues Recovery Rate",
      "subtext": "Automated payment link recovery prevents billing friction"
    },
    {
      "metric": "20 hrs/wk",
      "label": "Front Desk Time Reclaimed",
      "subtext": "Staff focus on welcoming members on the gym floor"
    }
  ],
  "caseStudy": {
    "business": "Premier Multi-Location Fitness Club (3 Locations, 3,200 Members)",
    "type": "Commercial Health Club",
    "challenge": "Over 60% of trial pass leads were never contacted, and membership churn reached 6.2% monthly due to lack of member engagement.",
    "solution": "Integrated Saadhyam AI with Mindbody and WhatsApp, deploying Zara Swift for member retention and Jax Hunter for PT bookings.",
    "result": "Increased trial-to-paid conversion by 34%, reduced monthly churn to 2.4%, and booked 110 additional personal training packages in 90 days.",
    "verified": true
  },
  "faqs": [
    {
      "q": "How does the AI detect when a gym member is at risk of cancelling?",
      "a": "Saadhyam syncs with your access control turnstiles (like Mindbody or ABC Fitness). When a member’s visit frequency drops below their baseline (e.g. no check-ins for 10 days), the AI triggers a personalized check-in."
    },
    {
      "q": "Can the AI recover expired credit card payments automatically?",
      "a": "Yes. When a monthly recurring dues charge declines, the AI sends a polite, private WhatsApp message with a secure link to update credit card details, recovering over 90% of failed dues."
    },
    {
      "q": "Does it book personal training assessments directly onto trainer calendars?",
      "a": "Yes. It checks trainer availability in real time, matches the member based on fitness goals, and sends calendar invites with reminder notifications."
    },
    {
      "q": "Can it notify waitlisted members when a popular class spot opens up?",
      "a": "Yes. If someone drops out of a packed spin or yoga class, the AI texts the next member on the waitlist with a 1-tap confirmation link."
    }
  ],
  "seo": {
    "title": "AI Workforce for Gyms & Fitness Clubs | Saadhyam AI",
    "description": "Automate gym trial lead conversion, member retention, personal training bookings, and dues recovery with Saadhyam AI.",
    "keywords": "AI workforce for gyms, fitness club lead automation, Mindbody AI integration, gym member retention AI"
  }
};
