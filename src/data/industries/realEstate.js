export const realEstateData = {
  id: 'real-estate',
  slug: 'real-estate',
  name: 'Real Estate',
  shortName: 'Real Estate',
  category: 'Sales & Property',
  icon: 'Building2',
  badge: 'Autonomous Real Estate Workforce',
  eyebrow: 'AI Workforce for Real Estate',
  headline: 'Turn Your Real Estate Business Into an AI-Powered Workforce',
  subheadline: 'Saadhyam AI helps real estate teams manage leads, follow-ups, customer communication, property enquiries, sales operations and reporting with intelligent AI agents.',
  heroStats: [
    { label: 'Lead Response Time', value: '< 15 sec' },
    { label: 'Site Tour Bookings', value: '3.4x' },
    { label: 'Automated Follow-ups', value: '96%' },
    { label: 'CRM Sync Accuracy', value: '100%' }
  ],
  heroDashboard: {
    title: 'Real Estate Operations Hub',
    status: '8 Agents Active',
    activeDeal: 'Skyline Residences — Penthouse B',
    metrics: [
      { label: 'Active Buyer Leads', value: '342', change: '+28% this wk' },
      { label: 'Site Visits Scheduled', value: '48', change: '12 today' },
      { label: 'Auto-Followups Sent', value: '892', change: 'Instant sync' },
      { label: 'Pipeline Value', value: '$38.4M', change: 'Verified leads' }
    ]
  },
  problems: [
    {
      title: 'Leads are not followed up on time',
      description: 'Prospective buyers inquire across portals and WhatsApp during evenings and weekends when sales reps are off duty. By Monday morning, 60% of buyers have moved on to competitors.',
      impact: '60% drop in lead conversion within 1 hour'
    },
    {
      title: 'Enquiries are scattered across WhatsApp and calls',
      description: 'Brokers and agents juggle unlogged personal chats, SMS, portal leads, and voicemails. Critical buyer preferences, budgets, and timelines get buried with no centralized record.',
      impact: 'Zero unified customer trail across sales teams'
    },
    {
      title: 'Sales teams manually update CRM',
      description: 'Agents spend up to 2 hours every evening manually entering call notes, staging statuses, and buyer feedback into CRMs instead of closing deals.',
      impact: '10+ hours wasted per agent every week'
    },
    {
      title: 'Customers repeatedly ask the same questions',
      description: 'Carpet area, maintenance charges, floor plans, bank loan approvals, and parking rules consume hours of repetitive answering across every single prospect.',
      impact: 'High agent burnout and delayed response times'
    },
    {
      title: 'Managers lack real-time sales visibility',
      description: 'Leadership waits for weekend meetings or stale spreadsheet reports to know how many site visits happened or which inventory units are stalling.',
      impact: 'Delayed pipeline forecasting and stalled closings'
    },
    {
      title: 'Reports are manually prepared',
      description: 'Compiling weekly conversion metrics, broker commissions, and marketing attribution requires tedious spreadsheet merges with frequent human errors.',
      impact: 'Inaccurate marketing spend and pipeline blindspots'
    }
  ],
  agents: [
    {
      id: 're-sales',
      name: 'Alex Rivera',
      role: 'AI Sales Agent',
      blobatarName: 'AlexRealty',
      badge: 'Sales & Negotiations',
      purpose: 'Engages high-intent buyers, shares personalized brochures, answers pricing queries, and drives bookings 24/7.',
      whatItDoes: 'Conducts natural buyer conversations across WhatsApp and web, verifies purchase budgets, presents matching units, and navigates buyer objections.',
      exampleTasks: [
        'Engage portal leads within 15 seconds',
        'Share customized 3D floor plans and payment plans',
        'Answer mortgage eligibility and tax questions',
        'Negotiate soft offers within pre-approved discount bands'
      ]
    },
    {
      id: 're-qualify',
      name: 'Elena Vance',
      role: 'AI Lead Qualification Agent',
      blobatarName: 'ElenaRealty',
      badge: 'Lead Qualification',
      purpose: 'Filters tire-kickers from high-net-worth buyers by gathering verified budget, timeline, and financing parameters.',
      whatItDoes: 'Runs structured conversational qualification criteria to score leads, checks pre-approval status, and tags urgency levels for human closers.',
      exampleTasks: [
        'Qualify buyer budget and purchase timeline',
        'Verify loan pre-approval and cash readiness',
        'Tag lead priority (A/B/C) into CRM',
        'Filter out duplicate broker inquiries'
      ]
    },
    {
      id: 're-followup',
      name: 'Marcus Chen',
      role: 'AI Follow-Up Agent',
      blobatarName: 'MarcusRealty',
      badge: 'Autonomous Nurture',
      purpose: 'Runs persistent, respectful, personalized nurture cadences across WhatsApp, SMS, and email until the prospect books a site visit.',
      whatItDoes: 'Monitors lead engagement, triggers milestone reminders, sends price-drop alerts on favorite properties, and re-engages dormant buyers.',
      exampleTasks: [
        'Send day-1, day-3, and day-7 personalized nurture cadences',
        'Alert buyers when similar properties enter market',
        'Re-activate cold leads with new inventory updates',
        'Confirm attendance 2 hours prior to scheduled visits'
      ]
    },
    {
      id: 're-support',
      name: 'Maya Patel',
      role: 'AI Property Support Agent',
      blobatarName: 'MayaRealty',
      badge: '24/7 Customer Care',
      purpose: 'Answers exhaustive technical, legal, and amenities questions regarding developments and units instantaneously.',
      whatItDoes: 'Maintains an updated knowledge base of master plans, legal clearances, HOA rules, parking allocations, and neighborhood amenities.',
      exampleTasks: [
        'Answer questions regarding deed titles and approvals',
        'Provide maintenance fee and amenity schedules',
        'Share school district ratings and transit maps',
        'Handle post-booking documentation inquiries'
      ]
    },
    {
      id: 're-calling',
      name: 'Sophia Stone',
      role: 'AI Calling Agent',
      blobatarName: 'SophiaRealty',
      badge: 'Voice Qualification',
      purpose: 'Places and receives sub-second voice calls to qualify inbound web inquiries and confirm site tour appointments.',
      whatItDoes: 'Speaks with natural human inflection, answers complex buyer questions over the phone, and live-transfers qualified VIP buyers to senior sales managers.',
      exampleTasks: [
        'Call web form leads within 60 seconds of submission',
        'Confirm upcoming weekend site tour schedules',
        'Conduct voice surveys following completed site visits',
        'Live warm-transfer hot prospects to on-site agents'
      ]
    },
    {
      id: 're-reporting',
      name: 'David Vance',
      role: 'AI Reporting Agent',
      blobatarName: 'DavidRealty',
      badge: 'Pipeline Analytics',
      purpose: 'Compiles real-time executive summaries, inventory velocity analytics, and sales rep performance scorecards.',
      whatItDoes: 'Aggregates multi-channel data, calculates CAC and pipeline conversion velocity, and sends automated morning WhatsApp briefs to leadership.',
      exampleTasks: [
        'Generate daily morning sales pipeline brief',
        'Track unsold inventory velocity by unit tier',
        'Attribute lead conversions to marketing campaigns',
        'Flag stalled leads requiring executive escalation'
      ]
    },
    {
      id: 're-marketing',
      name: 'Chloe Monet',
      role: 'AI Marketing Agent',
      blobatarName: 'ChloeRealty',
      badge: 'Campaign Automation',
      purpose: 'Creates targeted listing descriptions, localized ad copy, and social showcase posts for newly launched developments.',
      whatItDoes: 'Drafts SEO-optimized property descriptions, segments email lists based on buyer interest brackets, and analyzes ad performance.',
      exampleTasks: [
        'Generate localized property listings across portals',
        'Segment buyers by price preference for newsletter drops',
        'Track cost-per-qualified-lead across ad channels',
        'Draft WhatsApp broadcast campaigns for project launches'
      ]
    },
    {
      id: 're-document',
      name: 'Jordan Hayes',
      role: 'AI Document Agent',
      blobatarName: 'JordanRealty',
      badge: 'Contracts & Compliance',
      purpose: 'Drafts and verifies letters of intent, booking forms, KYC documents, and e-signature packages with zero manual errors.',
      whatItDoes: 'Auto-fills buyer details into pre-approved legal templates, audits customer IDs for KYC compliance, and tracks contract sign-offs.',
      exampleTasks: [
        'Generate customized booking application forms',
        'Verify government ID and address proofs',
        'Dispatch DocuSign packages to buyers and sellers',
        'Archive executed agreements with tamper audit logs'
      ]
    }
  ],
  workflow: [
    {
      step: 1,
      title: 'Lead Arrives',
      agent: 'Alex Rivera (AI Sales Agent)',
      description: 'Buyer submits enquiry on portal, Facebook ad, website, or messages on WhatsApp.',
      output: 'Inquiry parsed & sanitized within 500ms'
    },
    {
      step: 2,
      title: 'AI Qualifies Lead',
      agent: 'Elena Vance (AI Qualification Agent)',
      description: 'Instant multi-turn conversation verifies budget, 2BHK/3BHK preference, purchase timeline, and loan status.',
      output: 'Verified buyer intent score (Grade A: 94/100)'
    },
    {
      step: 3,
      title: 'AI Updates CRM',
      agent: 'Autonomous Pipeline Engine',
      description: 'Syncs full profile, preferences, notes, and transcript directly into Salesforce / HubSpot.',
      output: 'Zero manual data entry required'
    },
    {
      step: 4,
      title: 'AI Follows Up',
      agent: 'Marcus Chen (AI Follow-Up Agent)',
      description: 'Dispatches custom interactive floorplan brochure and 3D walkthrough video link via WhatsApp.',
      output: '88% open rate, average view duration 3.8 mins'
    },
    {
      step: 5,
      title: 'Sales Team Gets Qualified Lead',
      agent: 'Sophia Stone (AI Calling Agent)',
      description: 'Calls buyer to lock in Saturday 11:00 AM private site tour and notifies assigned sales director.',
      output: 'Calendar invite created & SMS reminder sent'
    },
    {
      step: 6,
      title: 'Customer Interaction',
      agent: 'Human Closer + AI Copilot',
      description: 'On-site agent receives pre-brief summary of buyer budget and unit preferences prior to tour.',
      output: 'High-touch, hyper-personalized tour experience'
    },
    {
      step: 7,
      title: 'AI Generates Report',
      agent: 'David Vance (AI Reporting Agent)',
      description: 'Logs tour feedback, updates deal stage, and recalibrates conversion probability.',
      output: 'Daily pipeline report generated automatically'
    },
    {
      step: 8,
      title: 'Management Dashboard',
      agent: 'Executive Control Center',
      description: 'Leadership monitors live inventory burn-down, rep closing rates, and forecast revenue.',
      output: 'Real-time sales velocity and revenue visibility'
    }
  ],
  useCases: [
    {
      id: 'uc-1',
      title: 'Automated 24/7 Lead Follow-Up',
      problem: 'Leads arriving at night go cold before sales reps clock in at 10 AM.',
      solution: 'Saadhyam immediately engages new leads on WhatsApp within 15 seconds, shares floor plans, and schedules site tours.',
      agent: 'Alex Rivera (AI Sales Agent)',
      workflow: ['Inbound lead ingested', 'Instant WhatsApp message with property deck', 'Interactive budget check', 'Site visit booked'],
      impact: '96% engagement rate on night & weekend inquiries'
    },
    {
      id: 'uc-2',
      title: 'Multi-Portal Lead Consolidation',
      problem: 'Inquiries scattered across Zillow, 99acres, Magicbricks, Instagram, and web forms create chaos.',
      solution: 'Centralizes all portal leads into a single stream, dedupes contact records, and starts uniform qualification.',
      agent: 'Elena Vance (Lead Qualification)',
      workflow: ['Webhooks listen to all portals', 'Deduplication against existing database', 'Enrich contact info', 'Assign priority tier'],
      impact: 'Zero leads lost across fragmented portals'
    },
    {
      id: 'uc-3',
      title: 'Autonomous Site Tour Scheduling',
      problem: 'Coordinating buyer availability with sales agent calendars requires 4 to 5 phone calls.',
      solution: 'AI shares live calendar slots, syncs agent availability, books calendar invites, and sends automated reminder nudges.',
      agent: 'Sophia Stone (AI Calling Agent)',
      workflow: ['Query calendar availability', 'Offer dynamic time slots to buyer', 'Send Google/Outlook calendar invite', 'WhatsApp reminder 2 hours prior'],
      impact: '3.4x more site visits completed per week'
    },
    {
      id: 'uc-4',
      title: 'Instant FAQ & Amenities Resolution',
      problem: 'Agents repeatedly answer questions on carpet area, bank approvals, and maintenance charges.',
      solution: 'AI instantly answers over 500+ project questions with exact dimensions, approved lenders, and completion timelines.',
      agent: 'Maya Patel (Property Support)',
      workflow: ['Natural language question received', 'Vector search across project prospectus', 'Precise verified answer provided', 'Related units suggested'],
      impact: '100% instant resolution on repetitive inquiries'
    },
    {
      id: 'uc-5',
      title: 'Cold Lead Re-engagement Cadence',
      problem: 'Databases of 10,000+ past buyers sit dormant because sales reps prioritize fresh inquiries.',
      solution: 'AI scans past preferences, identifies matching new unit inventory, and reaches out with bespoke price drop or launch alerts.',
      agent: 'Marcus Chen (AI Follow-Up Agent)',
      workflow: ['Filter inactive leads (>60 days)', 'Match against new phase launch', 'Send personalized WhatsApp touchpoint', 'Route active replies to reps'],
      impact: '18% reactivation of dormant contact databases'
    },
    {
      id: 'uc-6',
      title: 'Automated CRM Activity Logging',
      problem: 'Sales agents skip entering call transcripts and visit notes, leaving management blind.',
      solution: 'Every call, WhatsApp chat, and qualification parameter is automatically summarized and pushed into CRM fields.',
      agent: 'Autonomous Pipeline Engine',
      workflow: ['Session completed', 'AI generates structured summary', 'Update custom fields in CRM', 'Notify team channel on Slack'],
      impact: '100% CRM hygiene with zero manual rep effort'
    },
    {
      id: 'uc-7',
      title: 'Voice-Based Inbound & Outbound Calling',
      problem: 'High lead volume makes it impossible for human teams to call back every web submission within 5 minutes.',
      solution: 'Voice AI calls leads within 60 seconds, speaks fluently in multiple accents/languages, and qualifies buyer intent.',
      agent: 'Sophia Stone (AI Calling Agent)',
      workflow: ['Form submission trigger', 'Dial lead via Twilio/telephony', 'Voice conversation qualification', 'Live call transfer if hot lead'],
      impact: 'Average call connection time reduced to 42 seconds'
    },
    {
      id: 'uc-8',
      title: 'Booking Form & Document Verification',
      problem: 'Manual verification of KYC documents, buyer IDs, and loan approvals delays unit reservation.',
      solution: 'AI inspects uploaded IDs, checks signatures, extracts data, and prepares clean digital reservation files.',
      agent: 'Jordan Hayes (AI Document Agent)',
      workflow: ['Buyer uploads ID & tax documents', 'AI OCR & fraud check', 'Pre-fill legal reservation contract', 'Send for biometric e-signature'],
      impact: 'Reservation turnaround reduced from 3 days to 25 mins'
    },
    {
      id: 'uc-9',
      title: 'Broker Channel Partner Communication',
      problem: 'Brokers constantly inquire about inventory availability, commission payouts, and promotional schemes.',
      solution: 'Dedicated AI portal for channel partners answers real-time unit availability, calculates commissions, and sends brochures.',
      agent: 'Alex Rivera (AI Sales Agent)',
      workflow: ['Channel partner verification', 'Real-time inventory lookup', 'Auto-generate co-branded collateral', 'Commission slab calculator'],
      impact: '4x faster broker collateral distribution'
    },
    {
      id: 'uc-10',
      title: 'Executive Sales & Inventory Analytics',
      problem: 'Real estate directors struggle to track unit burn-down rates and marketing spend efficiency across developments.',
      solution: 'AI calculates conversion velocity, unit stagnation warnings, and marketing ROI, generating daily interactive briefing dashboards.',
      agent: 'David Vance (AI Reporting Agent)',
      workflow: ['Nightly data aggregation', 'Cross-correlate ad spend vs. bookings', 'Identify underperforming unit types', 'Deliver morning WhatsApp audio brief'],
      impact: 'Real-time decision making with zero manual reporting'
    }
  ],
  interactiveDemo: {
    title: 'Ask Your AI Workforce',
    subtitle: 'Simulate how your autonomous real estate agents execute complex sales and operations tasks.',
    presets: [
      {
        agentId: 're-sales',
        agentName: 'Alex Rivera (AI Sales Agent)',
        task: 'Follow up with today’s 24 inbound portal leads',
        terminalLogs: [
          { time: '09:00:02', text: 'Scanning inbound leads from Zillow, Web Form & WhatsApp...', status: 'success' },
          { time: '09:00:05', text: '✓ 24 new leads detected and deduplicated against CRM', status: 'success' },
          { time: '09:00:08', text: '✓ 17 leads qualified based on budget (>$750k) and 60-day timeline', status: 'success' },
          { time: '09:00:12', text: '✓ 17 personalized WhatsApp messages dispatched with 3D floor plans', status: 'success' },
          { time: '09:00:16', text: '✓ 5 site visit appointments confirmed for this Saturday', status: 'success' },
          { time: '09:00:20', text: '✓ CRM deal stages updated & calendar invites delivered to sales reps', status: 'done' }
        ],
        summary: '17 qualified leads nurtured, 5 weekend site visits booked, 0 manual hours required.'
      },
      {
        agentId: 're-calling',
        agentName: 'Sophia Stone (AI Calling Agent)',
        task: 'Call back 10 weekend open-house attendees for feedback',
        terminalLogs: [
          { time: '11:15:01', text: 'Initiating voice qualification calls to weekend attendees...', status: 'success' },
          { time: '11:15:07', text: '✓ 8 calls connected successfully with sub-second voice latency', status: 'success' },
          { time: '11:15:14', text: '✓ 3 buyers expressed intent to submit formal offer on 3BHK units', status: 'success' },
          { time: '11:15:19', text: '✓ Live warm-transfer initiated to Senior Closer Marcus', status: 'success' },
          { time: '11:15:24', text: '✓ Full call audio transcripts and sentiment scores logged in CRM', status: 'done' }
        ],
        summary: '3 warm buyer offers surfaced, full voice sentiment analyzed and synchronized.'
      },
      {
        agentId: 're-reporting',
        agentName: 'David Vance (AI Reporting Agent)',
        task: 'Generate weekly inventory burn-down and CAC analysis',
        terminalLogs: [
          { time: '18:00:02', text: 'Querying unit reservation database across Phase 1 & 2...', status: 'success' },
          { time: '18:00:06', text: '✓ 142 total units analyzed; 88 reserved, 54 remaining', status: 'success' },
          { time: '18:00:11', text: '✓ Average customer acquisition cost calculated: $1,420 (down 32%)', status: 'success' },
          { time: '18:00:15', text: '✓ Stagnant inventory alert triggered for 4 ground-floor duplexes', status: 'warning' },
          { time: '18:00:19', text: '✓ Executive PDF report & WhatsApp audio summary dispatched to CEO', status: 'done' }
        ],
        summary: 'Executive inventory report compiled in 17 seconds with actionable pricing recommendations.'
      }
    ]
  },
  dashboardMetrics: [
    { label: 'New Inquiries (Today)', value: '64', change: '+34%' },
    { label: 'Qualified Buyer Leads', value: '48', change: '75% conversion' },
    { label: 'Site Tours Booked', value: '18', change: 'This week' },
    { label: 'Calls Handled', value: '142', change: 'Sub-second voice' },
    { label: 'Pipeline Value', value: '$24.8M', change: 'High intent' },
    { label: 'AI Tasks Executed', value: '1,840', change: '24/7 autonomous' }
  ],
  integrations: [
    { name: 'WhatsApp Business', category: 'Messaging & Direct Nurture', icon: 'MessageSquare' },
    { name: 'Salesforce CRM', category: 'Enterprise Pipeline', icon: 'Database' },
    { name: 'HubSpot Real Estate', category: 'Inbound Marketing & CRM', icon: 'Layers' },
    { name: 'Zillow / MLS Feeds', category: 'Listing Syndication', icon: 'Globe' },
    { name: 'Google Calendar', category: 'Tour Scheduling', icon: 'Calendar' },
    { name: 'Twilio Voice', category: 'Telephony & AI Calling', icon: 'PhoneCall' },
    { name: 'DocuSign', category: 'E-Signatures & Contracts', icon: 'FileCheck' },
    { name: 'Follow Up Boss', category: 'Realty Sales Automation', icon: 'Zap' }
  ],
  roiMetrics: [
    { metric: '15 seconds', label: 'Average Lead Response Time', subtext: 'Down from 6.5 hours industry average' },
    { metric: '96%', label: 'Automated Follow-Up Rate', subtext: 'Zero leads fall through the cracks' },
    { metric: '3.4x', label: 'Site Tour Bookings Increase', subtext: 'Frictionless calendar scheduling' },
    { metric: '22 hrs/wk', label: 'Rep Time Saved from Admin', subtext: 'More time spent touring and closing' }
  ],
  caseStudy: {
    company: 'Skyline Capital & Realty Partners',
    type: 'Multi-Location Residential & Luxury Brokerage',
    challenge: 'Skyline received over 800 inquiries monthly from social ads and portals. 45% arrived after business hours, leading to cold leads, delayed follow-ups, and sales reps spending 3 hours daily typing notes into CRM.',
    solution: 'Deployed Saadhyam AI Workforce with Alex (Sales), Elena (Qualification), and Sophia (Voice Calling) integrated directly with WhatsApp and Salesforce.',
    result: '100% of inquiries engaged within 20 seconds. Qualified site visits surged by 240% in 60 days, and agent admin time dropped by 18 hours per rep weekly.'
  },
  faqs: [
    {
      q: 'Can Saadhyam handle incoming property enquiries across WhatsApp and portals?',
      a: 'Yes. Saadhyam connects natively to WhatsApp Business API, Facebook Lead Ads, Zillow, Magicbricks, and web inquiry forms. It greets buyers within 15 seconds, answers their exact questions, and shares floor plans.'
    },
    {
      q: 'Can Saadhyam follow up with leads automatically over days and weeks?',
      a: 'Yes. The AI Follow-Up Agent maintains polite, persistent, context-aware nurture sequences. If a buyer views a 2BHK brochure, the agent sends video walk-throughs, construction status updates, and site tour invites until they take action.'
    },
    {
      q: 'Can it update our existing CRM like Salesforce or HubSpot?',
      a: 'Yes. Saadhyam features bi-directional synchronization with Salesforce, HubSpot, Follow Up Boss, Zoho CRM, and custom databases. It logs complete call transcripts, buyer budget, preferences, and updates deal stages automatically.'
    },
    {
      q: 'Can the AI make and receive phone calls with realistic voices?',
      a: 'Yes. Sophia Voice AI conducts natural, sub-second latency voice conversations with human cadence. She qualifies leads, answers property queries, and can warm-transfer hot prospects directly to human sales reps.'
    },
    {
      q: 'Can managers monitor live sales activity and agent performance?',
      a: 'Absolutely. The Control Center provides real-time visibility into active buyer conversations, qualification scores, booked site visits, and agent responsiveness metrics across all properties.'
    },
    {
      q: 'Can we train the AI on our specific project brochures, pricing, and floor plans?',
      a: 'Yes. You can upload PDF brochures, master plans, price sheets, payment schedules, and legal FAQs. The AI indexes your exact documents and will only answer with verified facts about your properties.'
    },
    {
      q: 'Can Saadhyam book appointments directly into my sales team’s calendars?',
      a: 'Yes. It checks real-time availability on Google Calendar, Outlook, or CRM schedules and lets buyers pick preferred site tour slots, sending instant calendar invites and location maps.'
    },
    {
      q: 'Can we create custom AI agents tailored to our brokerage’s unique sales process?',
      a: 'Yes. Saadhyam allows you to customize agent personas, prompts, escalation criteria, working hours, and operational permissions to perfectly mirror your agency’s sales methodology.'
    }
  ],
  seo: {
    title: 'AI Workforce for Real Estate | Saadhyam AI',
    description: 'Automate real estate sales, lead qualification, follow-ups, customer communication, and operations with intelligent AI agents from Saadhyam.',
    keywords: 'AI workforce for real estate, AI real estate agent, autonomous lead qualification, real estate WhatsApp automation, property sales AI'
  }
};
