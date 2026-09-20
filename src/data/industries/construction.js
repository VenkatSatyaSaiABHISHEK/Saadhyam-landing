export const constructionData = {
  id: 'construction',
  slug: 'construction',
  name: 'Construction',
  shortName: 'Construction',
  category: 'Engineering & Property',
  icon: 'HardHat',
  badge: 'Autonomous Jobsite Operations',
  eyebrow: 'AI Workforce for Construction & General Contractors',
  headline: 'Turn Your Construction Projects Into an AI-Powered Workforce',
  subheadline: 'Saadhyam AI helps construction firms, general contractors and developers automate subcontractor coordination, daily site logs, RFIs, safety compliance, and material deliveries with intelligent AI agents.',
  heroStats: [
    { label: 'RFI Resolution Time', value: '4.2x faster' },
    { label: 'Daily Log Compliance', value: '100%' },
    { label: 'Subcontractor On-Time Rate', value: '96.8%' },
    { label: 'Safety Audit Closure', value: '< 24 hrs' }
  ],
  heroDashboard: {
    title: 'Jobsite Operations Hub',
    status: '5 Construction Agents Active',
    activeDeal: 'Apex Tower Phase II — 32 Storey Commercial',
    metrics: [
      { label: 'Active Subcontractors', value: '18 Trades', change: 'All scheduled' },
      { label: 'Daily Logs Filed', value: '100%', change: 'Photo verified' },
      { label: 'Open RFIs', value: '4', change: '3 resolved today' },
      { label: 'Schedule Variance', value: '+2 Days', change: 'Ahead of deadline' }
    ]
  },
  problems: [
    {
      title: 'Subcontractor delays and uncoordinated trade schedules',
      description: 'Plumbing, electrical, drywall, and HVAC crews arrive on site only to discover previous trade work is unfinished, causing costly standby claims and cascading project delays.',
      impact: 'Up to 20% project schedule overrun and dispute claims'
    },
    {
      title: 'RFIs and change orders lost in email threads',
      description: 'Site engineers wait days for architects and structural engineers to answer urgent Request for Information (RFI) questions, keeping crews idle on the slab.',
      impact: 'Tens of thousands in daily idle labor costs'
    },
    {
      title: 'Handwritten daily site logs and unverified safety audits',
      description: 'Superintendents spend evening hours compiling daily progress logs from text messages and crumpled paper notes, frequently omitting weather delays and safety flags.',
      impact: 'Severe legal exposure during contract dispute claims'
    },
    {
      title: 'Material deliveries arriving without staging space ready',
      description: 'Concrete mixers, rebar trucks, and glass panels arrive unannounced, blocking site access and causing crane scheduling bottlenecks.',
      impact: 'Traffic penalties, demurrage fees, and material damage'
    },
    {
      title: 'Project managers lack real-time budget burn visibility',
      description: 'Cost codes and labor hours take weeks to update in accounting, preventing project executives from catching cost overruns until invoices arrive.',
      impact: 'Unplanned margin erosion on fixed-price contracts'
    },
    {
      title: 'Stalled client reporting and slow progress billing',
      description: 'Compiling monthly AIA G702 progress billing packets and milestone evidence takes days, delaying multimillion-dollar progress cash collections.',
      impact: 'Severely constrained subcontractor payroll cash flow'
    }
  ],
  agents: [
    {
      id: 'const-subcon',
      name: 'Marcus Vance',
      role: 'Subcontractor Coordination Agent',
      blobatarName: 'MarcusSubcon',
      badge: 'Trade Scheduling',
      purpose: 'Coordinates subcontractor mobilization dates, verifies crew headcount, and confirms prerequisite trade readiness via WhatsApp.',
      whatItDoes: 'Sends automated check-ins to trade foremen 48 hours prior to scheduled mobilization, verifies crew size, and alerts site superintendents.',
      exampleTasks: [
        'Confirm electrical subcontractor arrival date and crew headcount',
        'Verify prerequisite framing inspection clearance before drywall team arrives',
        'Send site access safety pass and parking instructions to trade leads',
        'Log subcontractor daily headcounts against bid contract requirements'
      ]
    },
    {
      id: 'const-rfi',
      name: 'Elena Rostova',
      role: 'RFI & Document Agent',
      blobatarName: 'ElenaBlueprints',
      badge: 'Blueprints & Specs',
      purpose: 'Drafts structured RFIs from jobsite photos and voice notes, tracks engineer responses, and links answers to drawing sheets.',
      whatItDoes: 'Parses architectural specification documents, cross-references BIM coordinates, formats standardized RFI tickets, and notifies engineers.',
      exampleTasks: [
        'Convert site photo and voice note into formal Procore RFI',
        'Cross-reference structural vs MEP drawing conflicts',
        'Send urgent follow-ups to architect for overdue drawing clarifications',
        'Distribute approved RFI revisions to affected subcontractor foremen'
      ]
    },
    {
      id: 'const-safety',
      name: 'Alex Rivera',
      role: 'Site Safety & Compliance Agent',
      blobatarName: 'AlexSafetySite',
      badge: 'OSHA & Site Safety',
      purpose: 'Verifies daily toolbox talks, tracks OSHA compliance certifications, audits safety equipment photos, and logs incident reports.',
      whatItDoes: 'Checks subcontractor worker insurance validity, delivers daily morning safety briefing checklists, and audits PPE compliance.',
      exampleTasks: [
        'Verify insurance certificates (COI) for incoming trade workers',
        'Deliver daily localized safety toolbox talk topics via WhatsApp',
        'Log incident photos and near-miss reports with GPS timestamps',
        'Compile monthly OSHA 300 safety compliance logs'
      ]
    },
    {
      id: 'const-logistics',
      name: 'David Hayes',
      role: 'Material Logistics & Staging Agent',
      blobatarName: 'DavidSiteSupply',
      badge: 'Deliveries & Crane',
      purpose: 'Schedules material delivery time slots, allocates crane hoist times, and verifies delivery ticket quantities against purchase orders.',
      whatItDoes: 'Coordinates gate access for concrete mixers and steel trucks, manages laydown yard capacity, and captures signed delivery bills.',
      exampleTasks: [
        'Book 2-hour loading dock and crane hook slots for structural steel',
        'Match delivery receipt quantities against approved material POs',
        'Send gate security truck driver access codes and route instructions',
        'Alert concrete testing lab 3 hours prior to major pour delivery'
      ]
    },
    {
      id: 'const-schedule',
      name: 'Sophia Chen',
      role: 'Project Schedule & Cost Agent',
      blobatarName: 'SophiaCivilPM',
      badge: 'Schedule & Earned Value',
      purpose: 'Tracks milestone schedule progress (Critical Path Method), monitors budget burn rates, and compiles executive owner progress reports.',
      whatItDoes: 'Integrates Primavera P6 / Procore data, calculates Schedule Performance Index (SPI), and generates visual progress dossiers.',
      exampleTasks: [
        'Calculate daily critical path milestone slippage risk',
        'Audit daily equipment fuel and rental equipment cost burn',
        'Compile monthly owner progress billing packet with verified photos',
        'Deliver executive weekly video and WhatsApp briefing to developers'
      ]
    }
  ],
  workflow: [
    {
      step: 1,
      title: 'Morning Trade Check-in',
      agent: 'Marcus Vance (Subcontractor Agent)',
      description: 'Automated 06:30 AM WhatsApp check-in with trade foremen confirms headcount and material readiness.',
      output: '100% verified crew count on site by 07:00 AM'
    },
    {
      step: 2,
      title: 'Material Delivery & Crane Staging',
      agent: 'David Hayes (Logistics Agent)',
      description: 'Scheduled rebar and ready-mix trucks arrive in assigned time windows with crane hoist reserved.',
      output: 'Zero gate bottlenecks or idle truck wait fees'
    },
    {
      step: 3,
      title: 'Site RFI Capture & Routing',
      agent: 'Elena Rostova (RFI Agent)',
      description: 'Superintendent snaps photo of MEP clash; AI formulates RFI and routes to structural engineer.',
      output: 'RFI submitted to architect in under 4 minutes'
    },
    {
      step: 4,
      title: 'Safety Audit & Toolbox Talk',
      agent: 'Alex Rivera (Safety Agent)',
      description: 'Morning safety talk signed off digitally on foremen phones; PPE compliance verified.',
      output: 'OSHA compliant digital audit trail'
    },
    {
      step: 5,
      title: 'Automated Daily Site Log',
      agent: 'Autonomous Site Engine',
      description: 'Weather, subcontractor hours, equipment runtime, and work completed compiled into daily log.',
      output: 'Verified Procore / ACC daily log created'
    },
    {
      step: 6,
      title: 'Milestone Progress Billing',
      agent: 'Sophia Chen (Schedule & Cost Agent)',
      description: 'Completed milestone verified with drone/photo evidence; progress billing invoice generated.',
      output: 'AIA G702 billing prepared for owner approval'
    },
    {
      step: 7,
      title: 'Executive Developer Dashboard',
      agent: 'Executive Control Center',
      description: 'Developer leadership views live schedule variance, cost forecast, and jobsite milestone videos.',
      output: 'Real-time multi-site construction visibility'
    }
  ],
  useCases: [
    {
      id: 'const-uc-1',
      title: 'Autonomous Subcontractor Mobilization',
      problem: 'Trade foremen arrive unannounced or miss mobilization dates, delaying succeeding trades.',
      solution: 'AI conducts automated multi-turn check-ins with trade foremen 72h, 48h, and 24h prior to scheduled start.',
      agent: 'Marcus Vance (Subcontractor Agent)',
      workflow: ['Check P6 master schedule', 'Message trade foreman on WhatsApp', 'Verify crew size & material staging', 'Confirm gate pass'],
      impact: '96.8% on-time trade mobilization rate'
    },
    {
      id: 'const-uc-2',
      title: 'Instant Voice-to-RFI Generation',
      problem: 'Foremen delay logging RFIs because sitting at a trailer laptop takes 45 minutes.',
      solution: 'Foreman records a 30-second WhatsApp voice note with a photo; AI drafts a complete RFI with spec references.',
      agent: 'Elena Rostova (RFI Agent)',
      workflow: ['Foreman sends voice memo & photo', 'AI identifies grid location and drawing sheet', 'Drafts formatted RFI in Procore', 'Alerts structural engineer'],
      impact: 'RFI turnaround time reduced by 75%'
    },
    {
      id: 'const-uc-3',
      title: 'Automated Daily Construction Log',
      problem: 'Superintendents hate typing daily logs, leading to missing data when disputes arise.',
      solution: 'AI pulls weather telemetry, trade headcounts, delivery tickets, and work photos into a daily log automatically.',
      agent: 'Autonomous Site Engine',
      workflow: ['Aggregate weather API data', 'Collect subcontractor WhatsApp headcounts', 'Collate signed delivery slips', 'Generate signed PDF daily log'],
      impact: '100% daily log compliance with zero superintendent overtime'
    },
    {
      id: 'const-uc-4',
      title: 'Jobsite Delivery & Crane Slot Booking',
      problem: 'Multiple flatbed trucks arrive simultaneously, blocking city streets and waiting hours for crane access.',
      solution: 'Suppliers book specific 90-minute delivery slots through an AI scheduling link tied to crane availability.',
      agent: 'David Hayes (Logistics Agent)',
      workflow: ['Supplier requests delivery slot', 'AI checks hoist and crane availability', 'Issues timed delivery pass with GPS gate pin', 'Notifies rigger crew upon arrival'],
      impact: 'Eliminates delivery congestion and truck detention charges'
    },
    {
      id: 'const-uc-5',
      title: 'Subcontractor Insurance & KYC Verification',
      problem: 'Expired worker compensation policies expose general contractors to catastrophic liability.',
      solution: 'AI scans uploaded Certificates of Insurance (COI), verifies expiration dates, and alerts trade leads before expiry.',
      agent: 'Alex Rivera (Safety Agent)',
      workflow: ['Subcontractor uploads insurance PDF', 'AI extracts policy limits & expiry dates', 'Flags deficient coverage', 'Locks gate pass if expired'],
      impact: 'Zero uninsured trade workers on jobsites'
    },
    {
      id: 'const-uc-6',
      title: 'Owner Milestone Progress Billing',
      problem: 'Preparing monthly progress draw applications takes days of paperwork and photo compilation.',
      solution: 'AI matches completed schedule milestones with subcontractor sign-offs and produces the AIA billing dossier.',
      agent: 'Sophia Chen (Schedule & Cost Agent)',
      workflow: ['Milestone marked complete in schedule', 'Compile supporting inspection sign-offs', 'Format AIA G702 / G703 schedule of values', 'Submit to owner for rapid sign-off'],
      impact: 'Progress billing payment turnaround accelerated by 12 days'
    }
  ],
  interactiveDemo: {
    title: 'Ask Your AI Workforce',
    subtitle: 'Simulate how your autonomous construction agents resolve jobsite bottlenecks and trade coordination.',
    presets: [
      {
        agentId: 'const-subcon',
        agentName: 'Marcus Vance (Subcontractor Agent)',
        task: 'Mobilize 3 mechanical and electrical crews for Floor 14 rough-in',
        terminalLogs: [
          { time: '06:30:01', text: 'Initiating trade check-ins for Floor 14 MEP rough-in...', status: 'success' },
          { time: '06:30:05', text: '✓ Electrical Foreman confirmed: 8 electricians on site, materials staged', status: 'success' },
          { time: '06:30:09', text: '✓ Plumbing Foreman confirmed: 6 pipefitters arriving at Gate 2', status: 'success' },
          { time: '06:30:14', text: '✓ HVAC team flagged missing 10-inch duct elbows; AI checked supplier delivery', status: 'warning' },
          { time: '06:30:18', text: '✓ Supplier confirmed duct elbows arriving at 09:15 AM (Dock 1 slot booked)', status: 'success' },
          { time: '06:30:22', text: '✓ Superintendent daily mobilization sheet synchronized with Procore', status: 'done' }
        ],
        summary: '3 trades mobilized, supply shortage resolved, and superintendent briefed by 06:31 AM.'
      },
      {
        agentId: 'const-rfi',
        agentName: 'Elena Rostova (RFI Agent)',
        task: 'Process voice memo and photo for structural beam clash on Column C4',
        terminalLogs: [
          { time: '11:15:02', text: 'Ingesting 24-second audio note and photo from Foreman Dave...', status: 'success' },
          { time: '11:15:06', text: '✓ Speech transcribed: "Fire sprinkler line hits structural beam at Column C4"', status: 'success' },
          { time: '11:15:10', text: '✓ Cross-referenced Drawing S-204 (Structural) vs M-102 (Fire Protection)', status: 'success' },
          { time: '11:15:15', text: '✓ RFI #142 drafted with marked-up PDF crop and proposed offset detail', status: 'success' },
          { time: '11:15:19', text: '✓ High-priority RFI ticket pushed to Lead Structural Engineer via email & SMS', status: 'done' }
        ],
        summary: 'Complete engineering RFI compiled and dispatched in 17 seconds.'
      }
    ]
  },
  dashboardMetrics: [
    { label: 'Active Trade Crews', value: '24', change: '100% accounted' },
    { label: 'Daily Logs Verified', value: '100%', change: 'Zero backlogs' },
    { label: 'Open RFIs', value: '3', change: 'Avg age 1.2 days' },
    { label: 'Safety Compliance', value: '99.4%', change: 'Zero incidents' },
    { label: 'Deliveries Scheduled', value: '14', change: 'Crane booked' },
    { label: 'AI Jobsite Actions', value: '3,840', change: 'Continuous' }
  ],
  integrations: [
    { name: 'Procore', category: 'Construction Management Software', icon: 'Database' },
    { name: 'Autodesk Construction Cloud', category: 'BIM 360 & Drawing Specs', icon: 'Layers' },
    { name: 'WhatsApp Construction Gateway', category: 'Trade & Foreman Chat', icon: 'MessageSquare' },
    { name: 'Primavera P6', category: 'Critical Path Master Scheduling', icon: 'Calendar' },
    { name: 'PlanGrid', category: 'Mobile Blueprint Markup', icon: 'FileCheck' },
    { name: 'Twilio Telephony', category: 'Emergency Site Broadcasts', icon: 'PhoneCall' }
  ],
  roiMetrics: [
    { metric: '4.2x faster', label: 'RFI Resolution Velocity', subtext: 'Subcontractors spend less time waiting' },
    { metric: '100%', label: 'Daily Site Log Compliance', subtext: 'Instant proof for delay and weather claims' },
    { metric: '96.8%', label: 'Subcontractor On-Time Rate', subtext: 'Frictionless mobilization check-ins' },
    { metric: '18 hrs/wk', label: 'Superintendent Time Saved', subtext: 'More time spent on the slab managing quality' }
  ],
  caseStudy: {
    company: 'Apex Commercial Builders & Contractors',
    type: 'Commercial General Contractor ($180M Annual Volume)',
    challenge: 'Apex suffered from delayed RFIs that took an average of 6 days to resolve, missing daily logs that left them vulnerable to owner delay claims, and uncoordinated trade deliveries clogging downtown jobsite docks.',
    solution: 'Deployed Saadhyam Construction AI Workforce with Marcus (Subcontractors), Elena (RFIs), and David (Logistics) connected directly to Procore and WhatsApp.',
    result: 'Average RFI turnaround dropped from 6 days to under 24 hours. Daily log compliance hit 100%, and trade delivery detention fees were reduced by $84,000 across two major high-rise projects.'
  },
  faqs: [
    {
      q: 'Do subcontractors need to install a special mobile app to use Saadhyam?',
      a: 'No. Subcontractors and foremen interact using regular WhatsApp or SMS. They receive check-in requests, send photos, and reply with text or voice notes naturally without downloading any new app.'
    },
    {
      q: 'Can Saadhyam integrate directly with our existing Procore or Autodesk Construction Cloud account?',
      a: 'Yes. Saadhyam features certified bi-directional API connectors for Procore, Autodesk Construction Cloud (BIM 360), PlanGrid, and Primavera P6, automatically updating daily logs, RFIs, and schedule tasks.'
    },
    {
      q: 'How does the AI turn a voice note and jobsite photo into a formal RFI?',
      a: 'The superintendent or foreman sends a voice note and photo on WhatsApp. Saadhyam transcribes the audio, extracts grid coordinates, cross-references drawing sheets, attaches the photo, and creates a formatted RFI ticket in your PM system.'
    },
    {
      q: 'Can the AI prevent delivery congestion at our site gates and loading docks?',
      a: 'Yes. The Logistics Agent coordinates a shared delivery calendar. Suppliers request delivery time slots, and the AI allocates crane hook times and gate passes, preventing multiple concrete or steel trucks from arriving simultaneously.'
    },
    {
      q: 'Can Saadhyam verify trade worker insurance certificates (COI) before they enter the jobsite?',
      a: 'Yes. The Safety Agent scans uploaded insurance certificates, checks general liability and workers compensation limits against project requirements, and flags expiring certificates weeks in advance.'
    },
    {
      q: 'Can the executive team monitor multiple jobsites from a single dashboard?',
      a: 'Yes. Leadership gets a unified multi-project control center showing daily log completion, subcontractor attendance, open RFI aging, schedule performance indices, and safety metrics across all active jobsites.'
    }
  ],
  seo: {
    title: 'AI Workforce for Construction & General Contractors | Saadhyam AI',
    description: 'Automate subcontractor coordination, daily site logs, RFIs, safety compliance, and material deliveries with Saadhyam AI.',
    keywords: 'AI workforce for construction, construction AI agents, Procore WhatsApp automation, jobsite daily log AI, RFI automation'
  }
};
