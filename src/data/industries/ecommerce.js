export const ecommerceData = {
  "id": "ecommerce",
  "slug": "ecommerce",
  "name": "E-Commerce & D2C Brands",
  "shortName": "E-Commerce",
  "category": "Consumer & Commerce",
  "icon": "ShoppingBag",
  "badge": "Autonomous D2C Store Operations",
  "eyebrow": "AI Workforce for Shopify, Amazon & Omni-Channel Brands",
  "headline": "Turn Your E-Commerce Store Into an AI-Powered Workforce",
  "subheadline": "Saadhyam AI helps online brands automate WISMO customer inquiries, abandoned cart recovery, returns & exchanges, inventory restock alerts, and catalog optimization with intelligent AI agents.",
  "heroStats": [
    {
      "label": "WISMO Ticket Resolution",
      "value": "Instant"
    },
    {
      "label": "Abandoned Cart Recovery",
      "value": "+26%"
    },
    {
      "label": "Return Processing Time",
      "value": "< 60 sec"
    },
    {
      "label": "Support Deflection Rate",
      "value": "74%"
    }
  ],
  "heroDashboard": {
    "title": "E-Commerce Operations Center",
    "status": "6 D2C Agents Active Across Shopify Plus & Amazon",
    "activeDeal": "Spring Apparel Drop — 4,200 Orders In Flight",
    "metrics": [
      {
        "label": "Daily Order Volume",
        "value": "2,840",
        "change": "+31% vs last week"
      },
      {
        "label": "WISMO Deflection Rate",
        "value": "76.4%",
        "change": "Zero human touch"
      },
      {
        "label": "Cart Recovery Revenue",
        "value": "$48,200",
        "change": "This week"
      },
      {
        "label": "Customer CSAT",
        "value": "4.9 / 5.0",
        "change": "Across 12k ratings"
      }
    ]
  },
  "problems": [
    {
      "title": "Support queues swamped by \"Where Is My Order?\" (WISMO) queries",
      "description": "Over 60% of all customer tickets are routine tracking inquiries that consume support agent hours during peak shipping seasons.",
      "impact": "High customer support payroll costs and slower VIP resolution times"
    },
    {
      "title": "High abandoned cart rates and passive recovery emails",
      "description": "Standard generic cart recovery emails get caught in promotional folders and fail to answer real-time buyer objections regarding sizing or shipping.",
      "impact": "Thousands in lost top-line revenue every single day"
    },
    {
      "title": "Complex return, exchange, and refund disputes",
      "description": "Manual return authorization creates long wait times, leading to frustrated shoppers, credit card chargebacks, and high return fraud.",
      "impact": "Damaged customer retention and expensive chargeback fees"
    },
    {
      "title": "Slow product catalog enrichment and SEO tagging",
      "description": "Merchandising teams spend hours drafting product descriptions, meta tags, and alt text across hundreds of seasonal SKU variants.",
      "impact": "Delayed product launches and lost organic Google search traffic"
    }
  ],
  "agents": [
    {
      "id": "ecom-support",
      "name": "Aria D2C",
      "role": "Omnichannel Customer Experience Agent",
      "blobatarName": "AriaEcomConcierge",
      "badge": "24/7 WISMO & Support",
      "purpose": "Handles real-time shipping tracking, returns, sizing guidance, and order edits across WhatsApp, Instagram DM, and chat.",
      "whatItDoes": "Connects directly to Shopify, Gorgias, and carrier tracking APIs to update addresses, issue return labels, and resolve inquiries.",
      "exampleTasks": [
        "Instantly provide real-time carrier tracking link and parcel ETA",
        "Process size exchanges with auto-generated return shipping QR codes",
        "Update shipping address before warehouse fulfillment dispatch",
        "Recommend complementary items based on current cart contents"
      ]
    },
    {
      "id": "ecom-cart",
      "name": "Kai Merchant",
      "role": "Cart Recovery & Sales Conversion Agent",
      "blobatarName": "KaiSalesEcom",
      "badge": "Revenue & Cart Recovery",
      "purpose": "Detects abandoned checkouts and conducts intelligent, conversational follow-ups answering pricing, shipping, or compatibility questions.",
      "whatItDoes": "Monitors checkout drop-offs, sends dynamic WhatsApp/SMS recovery messages with one-click checkout links and personalized incentives.",
      "exampleTasks": [
        "Send conversational WhatsApp recovery message within 15 minutes of checkout drop",
        "Answer sizing and material queries that prevented immediate checkout",
        "Offer dynamic time-limited free shipping threshold incentive",
        "Recover high-value multi-item carts with direct payment links"
      ]
    }
  ],
  "workflow": [
    {
      "step": 1,
      "title": "Shopper Inquires or Abandons Cart",
      "agent": "Aria D2C / Kai Merchant",
      "description": "Customer asks about order status or leaves items in cart at final payment step.",
      "output": "Session context captured immediately"
    },
    {
      "step": 2,
      "title": "Real-Time Store API Sync",
      "agent": "Autonomous D2C Engine",
      "description": "AI verifies inventory, carrier tracking, and order history directly in Shopify Plus.",
      "output": "Live order status verified"
    },
    {
      "step": 3,
      "title": "Conversational Resolution",
      "agent": "Aria D2C (Support Concierge)",
      "description": "Answers tracking questions, resolves return requests, or provides customized checkout link.",
      "output": "Ticket deflected or checkout completed"
    },
    {
      "step": 4,
      "title": "Automated Logistics Action",
      "agent": "Autonomous Fulfillment Dispatch",
      "description": "Generates prepaid return label, updates ERP, or triggers fulfillment hold in 3PL warehouse.",
      "output": "Warehouse and inventory synced"
    },
    {
      "step": 5,
      "title": "E-Commerce Analytics Dashboard",
      "agent": "Executive Control Center",
      "description": "Store founders view live recovered revenue, ticket deflection percentage, and CSAT scores.",
      "output": "Real-time store performance visibility"
    }
  ],
  "useCases": [
    {
      "id": "ecom-uc-1",
      "title": "Autonomous WISMO Deflection at Scale",
      "problem": "Customer support teams are buried under thousands of repetitive \"Where is my order?\" tickets during sales peaks.",
      "solution": "AI verifies tracking milestones with carrier APIs and provides instant, reassuring tracking updates in chat or WhatsApp.",
      "agent": "Aria D2C (Customer Concierge)",
      "workflow": [
        "Customer asks tracking status",
        "AI queries Shopify and FedEx/DHL API",
        "Provides real-time delivery window and map link",
        "Closes ticket with zero human intervention"
      ],
      "impact": "Deflects 74% of all routine customer support tickets"
    },
    {
      "id": "ecom-uc-2",
      "title": "Conversational High-Value Cart Recovery",
      "problem": "Shoppers abandon carts due to unexpected shipping fees or unanswered sizing questions.",
      "solution": "AI sends empathetic WhatsApp/SMS messages addressing specific hesitation reasons and providing 1-click checkout.",
      "agent": "Kai Merchant (Cart Agent)",
      "workflow": [
        "Detect abandoned cart above $100",
        "Analyze drop-off point and product SKU",
        "Send personalized WhatsApp checkout link",
        "Process payment and trigger fulfillment"
      ],
      "impact": "+26% increase in recovered cart revenue"
    }
  ],
  "interactiveDemo": {
    "title": "Ask Your E-Commerce AI Workforce",
    "subtitle": "Simulate how autonomous D2C agents resolve order queries and recover abandoned carts.",
    "presets": [
      {
        "agentId": "ecom-support",
        "agentName": "Aria D2C (Customer Support)",
        "task": "Customer asking where their Order #48291 is and requesting delivery date update",
        "terminalLogs": [
          {
            "time": "14:20:01",
            "text": "Inbound WhatsApp query detected: \"Where is my order #48291?\"",
            "status": "info"
          },
          {
            "time": "14:20:03",
            "text": "✓ Verified Order #48291 in Shopify Plus: Shipped via UPS Next Day",
            "status": "info"
          },
          {
            "time": "14:20:06",
            "text": "✓ Queried UPS tracking API: Package out for delivery (ETA 16:30 today)",
            "status": "success"
          },
          {
            "time": "14:20:09",
            "text": "✓ Dispatched friendly WhatsApp reply with live tracking map link",
            "status": "success"
          },
          {
            "time": "14:20:11",
            "text": "✓ Customer rated resolution 5-stars; ticket marked resolved in Gorgias",
            "status": "done"
          }
        ],
        "summary": "Query resolved in 10 seconds; ticket deflected without human agent intervention."
      }
    ]
  },
  "dashboardMetrics": [
    {
      "label": "Monthly Orders",
      "value": "38,420",
      "change": "+24% vs prev mo"
    },
    {
      "label": "Support Deflection",
      "value": "76.2%",
      "change": "Target >70%"
    },
    {
      "label": "Average Response Time",
      "value": "8 sec",
      "change": "Down from 4 hrs"
    },
    {
      "label": "Cart Recoveries",
      "value": "$84,200",
      "change": "+32% captured"
    },
    {
      "label": "Return Approval Time",
      "value": "45 sec",
      "change": "Instant labels"
    },
    {
      "label": "Customer CSAT",
      "value": "4.88 / 5",
      "change": "15,000+ ratings"
    }
  ],
  "integrations": [
    {
      "name": "Shopify / Shopify Plus",
      "category": "E-Commerce Platform",
      "icon": "ShoppingBag"
    },
    {
      "name": "Gorgias / Zendesk",
      "category": "Customer Support Helpdesk",
      "icon": "MessageSquare"
    },
    {
      "name": "Klaviyo / Omnisend",
      "category": "Marketing Automation",
      "icon": "Mail"
    },
    {
      "name": "ShipStation / EasyPost",
      "category": "Carrier Shipping & 3PL Logistics",
      "icon": "Truck"
    },
    {
      "name": "Loop Returns / Returnly",
      "category": "Automated Returns & Exchanges",
      "icon": "RefreshCw"
    },
    {
      "name": "WhatsApp Business API",
      "category": "Direct Conversational Commerce",
      "icon": "Smartphone"
    }
  ],
  "roiMetrics": [
    {
      "metric": "74%",
      "label": "Support Ticket Deflection",
      "subtext": "WISMO and returns resolved automatically"
    },
    {
      "metric": "+26%",
      "label": "Abandoned Cart Recovery",
      "subtext": "Conversational follow-ups via WhatsApp and SMS"
    },
    {
      "metric": "< 60 sec",
      "label": "Return Authorization Speed",
      "subtext": "Auto-checks return policy and issues QR codes"
    },
    {
      "metric": "4.8x ROI",
      "label": "First 90 Days Deployment",
      "subtext": "Reduced support payroll and recovered lost sales"
    }
  ],
  "caseStudy": {
    "business": "Fast-Growing D2C Activewear Apparel Brand ($12M ARR)",
    "type": "D2C E-Commerce Brand",
    "challenge": "Holiday sales volume overwhelmed the 4-person support team, resulting in 36-hour response delays for order tracking and sizing exchanges.",
    "solution": "Integrated Saadhyam AI with Shopify Plus and Gorgias, deploying Aria D2C for 24/7 customer support and Kai Merchant for abandoned cart recovery.",
    "result": "Achieved 76% automated deflection of WISMO tickets, cut average first-response time from 36 hours to under 10 seconds, and recovered $124,000 in abandoned carts during Q4.",
    "verified": true
  },
  "faqs": [
    {
      "q": "Does Saadhyam connect directly with our Shopify or WooCommerce store?",
      "a": "Yes. Saadhyam features certified, 1-click connectors for Shopify, Shopify Plus, WooCommerce, and Magento, syncing products, order tracking, and customer records in real time."
    },
    {
      "q": "How does the AI handle return and exchange authorizations?",
      "a": "The AI checks your return policy rules (such as items within 30 days and non-final sale tags), verifies item condition questions with the customer, and issues digital return shipping labels or QR codes automatically."
    },
    {
      "q": "Can the AI recover abandoned carts over WhatsApp and SMS?",
      "a": "Yes. It engages shoppers who dropped off at checkout with personalized conversational messages, answers product sizing or delivery questions, and provides one-click checkout links."
    },
    {
      "q": "What happens when a customer has an edge case inquiry?",
      "a": "When an inquiry requires executive sign-off or custom appeasement, Saadhyam smoothly escalates the conversation to your human support team in Gorgias or Zendesk with complete conversation context."
    }
  ],
  "seo": {
    "title": "AI Workforce for E-Commerce & D2C Brands | Saadhyam AI",
    "description": "Automate customer support, WISMO inquiries, abandoned cart recovery, returns, and store operations with Saadhyam AI.",
    "keywords": "AI workforce for ecommerce, Shopify AI customer service, abandoned cart recovery AI, D2C automated returns"
  }
};
