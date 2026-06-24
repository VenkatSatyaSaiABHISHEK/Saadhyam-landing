import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Mail, Phone, MapPin, Shield, FileText, 
  HelpCircle, Info, Globe, Building2, CheckCircle
} from 'lucide-react';

const translations = {
  en: {
    backToHome: "Back to Home",
    lastUpdated: "Last updated: June 2026",
    terms: {
      title: "Terms & Conditions",
      subtitle: "Please read these terms carefully before using Saadhyam AI.",
      sections: [
        {
          title: "1. Service Rules",
          content: "Saadhyam AI provides an AI-powered growth platform for business analysis, GEO/AEO (Generative / Answer Engine Optimization) recommendations, and automated customer workflows. You agree to use the platform only for lawful business operations and in compliance with all local regulations."
        },
        {
          title: "2. User Responsibilities",
          content: "You are responsible for maintaining the confidentiality of your account credentials, including API keys. You must not use our services for malicious activities, scrapers, automated heavy query abuse, or violating intellectual property rights of MentNeo or others."
        },
        {
          title: "3. Refund Eligibility",
          content: "Refunds for subscription payments are governed by our Refund & Cancellation Policy. Service usage and credits used during the trial/billing period may affect your eligibility for partial or full refunds."
        },
        {
          title: "4. Account Suspension Rules",
          content: "We reserve the right to suspend or terminate accounts that violate these terms, perform unauthorized operations, fail to settle payments, or engage in behavior that disrupts the platform infrastructure."
        }
      ]
    },
    privacy: {
      title: "Privacy Policy",
      subtitle: "Learn how we protect your personal and business data.",
      sections: [
        {
          title: "1. How We Collect User Data",
          content: "We collect user information when you register on our platform, sync business tools (such as Instagram API, websites, Google My Business), or contact support. This includes basic details (name, email, phone number, business type) and technical connection data."
        },
        {
          title: "2. How We Use User Data",
          content: "Your data is used to customize AI-driven marketing strategies, generate growth metrics, automate customer communications (such as review replies), handle billing processes, and continuously train and optimize our recommendation engine."
        },
        {
          title: "3. Third-Party Integrations",
          content: "Saadhyam AI integrates with secure platforms such as Firebase (data storage), Google Analytics, Meta Business Manager, and WhatsApp API to deploy campaigns and synchronize analytics. We do not sell your data to third parties."
        }
      ]
    },
    refund: {
      title: "Refund & Cancellation Policy",
      subtitle: "Our policies regarding refunds and subscription cancellations.",
      sections: [
        {
          title: "1. Is Refund Available?",
          content: "Yes, we offer a 14-day money-back guarantee for first-time premium subscriptions if the system does not meet your specified setup expectations. Free trial accounts are not charged and are not subject to refunds."
        },
        {
          title: "2. Refund Processing Time",
          content: "Once approved, refunds are processed within 7 to 10 business days and will be credited back to your original source of payment."
        },
        {
          title: "3. Cancellation Conditions",
          content: "You can cancel your subscription at any time via your account dashboard. Upon cancellation, your premium access will remain active until the end of your current billing period, after which it will downgrade."
        }
      ]
    },
    contact: {
      title: "Contact Us",
      subtitle: "Get in touch with the Saadhyam AI and MentNeo team.",
      email: "info@saadhyam.com",
      phone: "+91 80193 42939",
      address: "Saadhyam AI (powered by MentNeo), Hitech City, Hyderabad, Telangana, India - 500081"
    },
    about: {
      title: "About Us",
      subtitle: "Empowering businesses through smart autonomous growth.",
      details: {
        title: "About Saadhyam AI",
        content: "Saadhyam AI is a state-of-the-art business growth automation engine powered by MentNeo. We help local enterprises, clinics, e-commerce brands, and startups automate their visibility, handle review responses automatically, and optimize content for answer engines (AEO/GEO)."
      },
      mission: {
        title: "Our Mission",
        content: "To build the most accessible, autonomous, and powerful growth operating system that allows merchants to scale their customer acquisition and retention effortlessly using AI."
      },
      vision: {
        title: "Our Vision",
        content: "A future where every local business has an intelligent digital counterpart working 24/7 to analyze, execute, and grow their physical footprint."
      },
      featuresTitle: "Our Features & Capabilities",
      categories: [
        {
          name: "Strategy & Analytics",
          items: ["Dashboard", "Business Analysis", "Radar AI", "Competitor Analysis", "Daily Suggestions"]
        },
        {
          name: "Growth & Optimization",
          items: ["AEO & GEO", "Google Hub", "Website AI", "Plugins Store", "Pricing"]
        },
        {
          name: "Marketing & Content",
          items: ["Content Creator", "Social Media", "Meta Ads", "WhatsApp Sales"]
        },
        {
          name: "AI Communication",
          items: ["AI Agents", "AI Voice Agent", "Review Reply", "B2B Chat"]
        },
        {
          name: "Workspace Control",
          items: ["B2B Network", "Settings", "Support"]
        }
      ]
    }
  },
  te: {
    backToHome: "హోమ్ పేజీకి తిరిగి వెళ్ళు",
    lastUpdated: "చివరిగా నవీకరించబడింది: జూన్ 2026",
    terms: {
      title: "నిబంధనలు & షరతులు",
      subtitle: "సాధ్యం AI ఉపయోగించే ముందు దయచేసి ఈ నిబంధనలను జాగ్రత్తగా చదవండి.",
      sections: [
        {
          title: "1. సేవా నిబంధనలు",
          content: "సాధ్యం AI అనేది మీ వ్యాపార విశ్లేషణ, GEO/AEO ఆప్టిమైజేషన్ మరియు స్వయంచాలక వర్క్‌ఫ్లోల కోసం రూపొందించబడిన AI-ఆధారిత వేదిక. మీరు ఈ ప్లాట్‌ఫారమ్‌ను చట్టబద్ధమైన వ్యాపార కార్యకలాపాల కోసం మాత్రమే ఉపయోగించాలి."
        },
        {
          title: "2. వినియోగదారు బాధ్యతలు",
          content: "మీ ఖాతా ఆధారాలు మరియు API కీలను భద్రంగా ఉంచుకోవడం మీ బాధ్యత. MentNeo లేదా ఇతరుల మేధో సంపత్తి హక్కులను ఉల్లంఘించే విధంగా లేదా దుర్వినియోగం చేసే విధంగా ప్లాట్‌ఫారమ్‌ను ఉపయోగించకూడదు."
        },
        {
          title: "3. రీఫండ్ అర్హత",
          content: "చందా చెల్లింపుల రీఫండ్‌లు మా రీఫండ్ & రద్దు పాలసీకి లోబడి ఉంటాయి. ట్రయల్ వ్యవధిలో ఉపయోగించిన క్రెడిట్‌లు లేదా సేవల ఆధారంగా మీ అర్హత నిర్ణయించబడుతుంది."
        },
        {
          title: "4. ఖాతా నిలిపివేత నిబంధనలు",
          content: "నిబంధనలను ఉల్లంఘించినా, మోసపూరిత లావాదేవీలకు పాల్పడినా లేదా సిస్టమ్‌కు అంతరాయం కలిగించినా మీ ఖాతాను నిలిపివేసే హక్కు మాకు ఉంది."
        }
      ]
    },
    privacy: {
      title: "గోప్యతా విధానం",
      subtitle: "మీ వ్యక్తిగత మరియు వ్యాపార డేటాను మేము ఎలా రక్షిస్తామో ఇక్కడ తెలుసుకోండి.",
      sections: [
        {
          title: "1. డేటా ఎలా సేకరిస్తాము? (User data ela collect chestaru)",
          content: "మీరు మా ప్లాట్‌ఫారమ్‌లో నమోదు చేసుకున్నప్పుడు, మీ వ్యాపార సాధనాలను సమకాలీకరించినప్పుడు (sync చేసినప్పుడు - Instagram API, వెబ్‌సైట్, Google My Business వంటివి) లేదా మమ్మల్ని సంప్రదించినప్పుడు మేము మీ సమాచారాన్ని (పేరు, ఇమెయిల్, ఫోన్ నంబర్, వ్యాపార రకం మరియు సిస్టమ్ కనెక్షన్ వివరాలు) సేకరిస్తాము."
        },
        {
          title: "2. డేటా ఎలా ఉపయోగిస్తాము? (Data ela use chestaru)",
          content: "మీ డేటా ఆధారంగా AI-ఆధారిత వ్యూహాలను రూపొందించడానికి, వ్యాపార ప్రగతిని విశ్లేషించడానికి, ప్రకటనల ఆటోమేషన్, బిల్లింగ్ ప్రాసెస్ మరియు మా సిఫార్సు ఇంజిన్‌ను నిరంతరం మెరుగుపరచడానికి మేము సమాచారాన్ని ఉపయోగిస్తాము."
        },
        {
          title: "3. థర్డ్-పార్టీ ఇంటిగ్రేషన్లు",
          content: "డేటా నిల్వ కోసం Firebase, అనలిటిక్స్ కోసం Google Analytics, క్యాంపెయిన్ల కోసం Meta & WhatsApp API లతో సాధ్యం AI సురక్షితంగా అనుసంధానించబడుతుంది. మేము మీ డేటాను ఇతరులకు విక్రయించము."
        }
      ]
    },
    refund: {
      title: "రీఫండ్ & రద్దు పాలసీ",
      subtitle: "రీఫండ్‌లు మరియు చందా రద్దుకు సంబంధించిన మా విధానాలు.",
      sections: [
        {
          title: "1. రీఫండ్ ఉంటుందా? (Refund untunda?)",
          content: "అవును, మీరు మొదటిసారి సబ్‌స్క్రిప్షన్ తీసుకున్నప్పుడు, సిస్టమ్ పనితీరు మీ అంచనాలకు సరిపోకపోతే 14 రోజులలోపు రీఫండ్ అడగవచ్చు. ఉచిత ట్రయల్ ఖాతాలకు ఎటువంటి చార్జీలు పడవు కాబట్టి వీటికి రీఫండ్ వర్తించదు."
        },
        {
          title: "2. ఎన్ని రోజుల్లో ప్రాసెస్ చేస్తారు? (Enni rojullo process chestaru?)",
          content: "రీఫండ్ ఆమోదించబడిన తర్వాత, 7 నుండి 10 పనిదినాలలో (business days) మీ ఒరిజినల్ పేమెంట్ అకౌంట్‌కు డబ్బు తిరిగి జమ చేయబడుతుంది."
        },
        {
          title: "3. రద్దు షరతులు",
          content: "మీరు ఎప్పుడైనా మీ ఖాతా డ్యాష్‌బోర్డ్ నుండి మీ సబ్‌స్క్రిప్షన్‌ను రద్దు చేసుకోవచ్చు. రద్దు చేసిన తర్వాత కూడా, బిల్లింగ్ గడువు ముగిసేవరకు ప్రీమియం సేవలు అందుబాటులో ఉంటాయి."
        }
      ]
    },
    contact: {
      title: "మమ్మల్ని సంప్రదించండి",
      subtitle: "సాధ్యం AI మరియు MentNeo బృందాన్ని ఇక్కడ సంప్రదించవచ్చు.",
      email: "info@saadhyam.com",
      phone: "+91 80193 42939",
      address: "సాధ్యం AI (MentNeo ద్వారా నడపబడుతుంది), హైటెక్ సిటీ, హైదరాబాద్, తెలంగాణ, భారతదేశం - 500081"
    },
    about: {
      title: "మా గురించి",
      subtitle: "స్మార్ట్ అటానమస్ గ్రోత్ ద్వారా వ్యాపారాలను బలోపేతం చేయడం.",
      details: {
        title: "సాధ్యం గురించి వివరాలు (Saadhyam gurinchi details)",
        content: "సాధ్యం AI (Saadhyam AI) అనేది MentNeo ద్వారా అందించబడుతున్న అత్యుత్తమ వ్యాపార వృద్ధి ఆటోమేషన్ ఇంజిన్. మేము స్థానిక వ్యాపారాలు, రెస్టారెంట్లు, సెలూన్లు, ఇ-కామర్స్ బ్రాండ్లు మరియు స్టార్టప్‌లకు ఆటోమేటిక్ రివ్యూ సమాధానాలు, GEO/AEO ఆప్టిమైజేషన్ సేవలను అందిస్తాము."
      },
      mission: {
        title: "మా లక్ష్యం (Mission)",
        content: "ప్రతి వ్యాపార యజమాని AI సహాయంతో తమ కస్టమర్లను సులభంగా ఆకర్షించుకునేలా మరియు వ్యాపారాన్ని వేగంగా వృద్ధి చేసుకునేలా సరళమైన, స్వయంప్రతిపత్త వేదికను అందించడం."
      },
      vision: {
        title: "మా విజన్ (Vision)",
        content: "ప్రతి చిన్న మరియు స్థానిక వ్యాపారానికి ఒక మేధోపరమైన డిజిటల్ అసిస్టెంట్ 24/7 అందుబాటులో ఉంటూ, వారి శారీరక మరియు డిజిటల్ ఉనికిని నిరంతరం అభివృద్ధి చేయడం."
      },
      featuresTitle: "మా ఫీచర్లు & సామర్థ్యాలు",
      categories: [
        {
          name: "వ్యూహం & విశ్లేషణ",
          items: ["డ్యాష్‌బోర్డ్", "బిజినెస్ అనాలిసిస్", "రాడార్ AI", "పోటీదారుల విశ్లేషణ", "రోజువారీ సూచనలు"]
        },
        {
          name: "వృద్ధి & ఆప్టిమైజేషన్",
          items: ["AEO & GEO", "గూగుల్ హబ్", "వెబ్‌సైట్ AI", "ప్లగిన్ల స్టోర్", "ధరలు"]
        },
        {
          name: "మార్కెటింగ్ & కంటెంట్",
          items: ["కంటెంట్ క్రియేటర్", "సోషల్ మీడియా", "మెటా యాడ్స్", "వాట్సాప్ సేల్స్"]
        },
        {
          name: "AI కమ్యూనికేషన్",
          items: ["AI ఏజెంట్లు", "AI వాయిస్ ఏజెంట్", "రివ్యూ రిప్లై", "B2B చాట్"]
        },
        {
          name: "వర్క్‌స్పేస్ నియంత్రణ",
          items: ["B2B నెట్‌వర్క్", "సెట్టింగులు", "సపోర్ట్"]
        }
      ]
    }
  },
  hi: {
    backToHome: "मुख्य पृष्ठ पर वापस जाएं",
    lastUpdated: "अंतिम अद्यतन: जून 2026",
    terms: {
      title: "नियम और शर्तें",
      subtitle: "साध्यम एआई का उपयोग करने से पहले कृपया इन शर्तों को ध्यान से पढ़ें।",
      sections: [
        {
          title: "1. सेवा नियम",
          content: "साध्यम एआई व्यावसायिक विश्लेषण, GEO/AEO (जनरेटिव / आंसर इंजन ऑप्टिमाइज़ेशन) सिफारिशों और स्वचालित ग्राहक वर्कफ़्लो के लिए एआई-संचालित विकास मंच प्रदान करता है। आप केवल वैध व्यावसायिक कार्यों के लिए इस मंच का उपयोग करने के लिए सहमत हैं।"
        },
        {
          title: "2. उपयोगकर्ता की जिम्मेदारियां",
          content: "अपने खाते की क्रेडेंशियल और API कुंजियों की गोपनीयता बनाए रखना आपकी जिम्मेदारी है। आप दुर्भावनापूर्ण गतिविधियों, स्क्रेपर्स, अत्यधिक क्वेरी दुरुपयोग, या MentNeo की बौद्धिक संपदा अधिकारों के उल्लंघन के लिए इस सेवा का उपयोग नहीं करेंगे।"
        },
        {
          title: "3. धनवापसी पात्रता",
          content: "सदस्यता भुगतान के लिए धनवापसी हमारी धनवापसी और रद्दीकरण नीति द्वारा शासित होती है। परीक्षण या बिलिंग अवधि के दौरान उपयोग किए गए क्रेडिट पात्रता को प्रभावित कर सकते हैं।"
        },
        {
          title: "4. खाता निलंबन नियम",
          content: "नियमों का उल्लंघन करने, अनधिकृत संचालन करने या भुगतान न करने पर हम किसी भी खाते को निलंबित या समाप्त करने का अधिकार सुरक्षित रखते हैं।"
        }
      ]
    },
    privacy: {
      title: "गोपनीयता नीति",
      subtitle: "जानें कि हम आपके व्यक्तिगत और व्यावसायिक डेटा की सुरक्षा कैसे करते।",
      sections: [
        {
          title: "1. डेटा कैसे एकत्र किया जाता है?",
          content: "जब आप हमारे प्लेटफ़ॉर्म पर पंजीकरण करते हैं, व्यावसायिक टूल (जैसे Instagram API, वेबसाइट, Google My Business) को सिंक करते हैं, या सहायता टीम से संपर्क करते हैं, तो हम आपकी जानकारी (जैसे नाम, ईमेल, फोन नंबर, व्यावसायिक प्रकार) एकत्र करते हैं।"
        },
        {
          title: "2. डेटा का उपयोग कैसे किया जाता है?",
          content: "आपके डेटा का उपयोग एआई-संचालित मार्केटिंग रणनीतियों को तैयार करने, विकास मेट्रिक्स उत्पन्न करने, ग्राहक संचार को स्वचालित करने (जैसे समीक्षा प्रतिक्रियाएं), और हमारे अनुशंसा इंजन को बेहतर बनाने के लिए किया जाता है।"
        },
        {
          title: "3. तीसरे पक्ष के एकीकरण",
          content: "साध्यम एआई डेटा स्टोरेज के लिए Firebase, एनालिटिक्स के लिए Google Analytics, अभियानों के लिए Meta और WhatsApp API जैसे सुरक्षित प्लेटफ़ॉर्म के साथ एकीकृत होता है। हम आपका डेटा तीसरे पक्ष को नहीं बेचते हैं।"
        }
      ]
    },
    refund: {
      title: "वापसी और रद्दीकरण नीति",
      subtitle: "वापसी और सदस्यता रद्दीकरण के संबंध में हमारी नीतियां।",
      sections: [
        {
          title: "1. क्या रिफंड उपलब्ध है?",
          content: "हाँ, यदि सिस्टम आपकी आवश्यकताओं को पूरा नहीं करता है, तो हम पहली बार प्रीमियम सदस्यता लेने पर 14 दिनों की मनी-बैक गारंटी प्रदान करते हैं। मुफ्त परीक्षण खातों पर शुल्क नहीं लिया जाता है, इसलिए उन पर धनवापसी लागू नहीं होती है।"
        },
        {
          title: "2. रिफंड कितने दिनों में प्रोसेस होता है?",
          content: "एक बार स्वीकृत होने के बाद, रिफंड 7 से 10 कार्य दिवसों के भीतर संसाधित किया जाता है और आपके भुगतान के मूल स्रोत में जमा कर दिया जाता है।"
        },
        {
          title: "3. रद्दीकरण की शर्तें",
          content: "आप अपने खाता डैशबोर्ड से किसी भी समय अपनी सदस्यता रद्द कर सकते हैं। रद्द करने पर, आपकी प्रीमियम पहुंच वर्तमान बिलिंग अवधि के अंत तक सक्रिय रहेगी।"
        }
      ]
    },
    contact: {
      title: "संपर्क करें",
      subtitle: "साध्यम एआई और MentNeo टीम से संपर्क करें।",
      email: "info@saadhyam.com",
      phone: "+91 80193 42939",
      address: "व्यावसायिक पता: साध्यम एआई (MentNeo द्वारा संचालित), हाईटेक सिटी, हैदराबाद, तेलंगाना, भारत - 500081"
    },
    about: {
      title: "हमारे बारे में",
      subtitle: "स्मार्ट स्वायत्त विकास के माध्यम से व्यवसायों को सशक्त बनाना।",
      details: {
        title: "साध्यम के बारे में विवरण",
        content: "साध्यम एआई (Saadhyam AI) MentNeo द्वारा संचालित एक अत्याधुनिक व्यावसायिक विकास स्वचालन इंजन है। हम स्थानीय उद्यमों, क्लीनिकों, रेस्तरां, सैलून और ई-कॉमर्स ब्रांडों को अपनी दृश्यता बढ़ाने, स्वचालित रूप से समीक्षा प्रतिक्रियाओं को संभालने और खोज इंजनों (AEO/GEO) के लिए सामग्री को अनुकूलित करने में मदद करते हैं।"
      },
      mission: {
        title: "हमारा उद्देश्य",
        content: "एक ऐसा सरल, स्वायत्त और शक्तिशाली विकास ऑपरेटिंग सिस्टम बनाना जो हर व्यापारी को एआई का उपयोग करके अपने ग्राहकों को आसानी से आकर्षित करने और व्यवसाय को तेजी से बढ़ाने की अनुमति देता है।"
      },
      vision: {
        title: "हमारी परिकल्पना",
        content: "एक ऐसा भविष्य जहां प्रत्येक स्थानीय व्यवसाय के पास 24/7 काम करने वाला एक स्मार्ट डिजिटल सहायक हो, जो उनके व्यवसाय का विश्लेषण, निष्पादन और विकास करे।"
      },
      featuresTitle: "हमारी विशेषताएं और क्षमताएं",
      categories: [
        {
          name: "रणनीति और विश्लेषण",
          items: ["डैशबोर्ड", "व्यावसायिक विश्लेषण", "रडार एआई", "प्रतिस्पर्धी विश्लेषण", "दैनिक सुझाव"]
        },
        {
          name: "विकास और अनुकूलन",
          items: ["AEO और GEO", "गूगल हब", "वेबसाइट एआई", "प्लगइन्स स्टोर", "मूल्य निर्धारण"]
        },
        {
          name: "विपणन और सामग्री",
          items: ["सामग्री निर्माता", "सोशल मीडिया", "मेटा विज्ञापन", "व्हाट्सएप बिक्री"]
        },
        {
          name: "एआई संचार",
          items: ["एआई एजेंट", "एआई वॉयस एजेंट", "समीक्षा उत्तर", "B2B चैट"]
        },
        {
          name: "कार्यस्थान नियंत्रण",
          items: ["B2B नेटवर्क", "सेटिंग्स", "समर्थन"]
        }
      ]
    }
  }
};

const Logo = ({ width = '32px', height = '32px' }) => (
  <div className="logo-container" style={{ width, height }}>
    <motion.img 
      src="https://i.ibb.co/rRhY66tN/Whats-App-Image-2026-05-11-at-8-22-35-PM-removebg-preview.png" 
      alt="Saadhyam Logo" className="logo-img"
      initial={{ rotateY: 0 }} animate={{ rotateY: 360 }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
    />
  </div>
);

export default function MandatoryPages({ pageType, lang, setLang }) {
  const t = translations[lang] || translations.en;
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pageType]);

  const handleBackToHome = (e) => {
    e.preventDefault();
    window.history.pushState(null, '', '/');
    window.dispatchEvent(new Event('popstate'));
  };

  const renderContent = () => {
    switch (pageType) {
      case 'terms':
        return (
          <>
            <h1 style={{ fontSize: '40px', marginBottom: '10px' }} className="text-gradient">
              {t.terms.title}
            </h1>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '30px', fontSize: '16px' }}>
              {t.terms.subtitle}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {t.terms.sections.map((section, idx) => (
                <div key={idx} className="bento-card" style={{ padding: '24px', background: 'rgba(255,255,255,0.01)' }}>
                  <h3 style={{ fontSize: '18px', color: 'white', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Shield size={18} color="var(--accent-purple)" />
                    {section.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.6' }}>
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </>
        );

      case 'privacy':
        return (
          <>
            <h1 style={{ fontSize: '40px', marginBottom: '10px' }} className="text-gradient">
              {t.privacy.title}
            </h1>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '30px', fontSize: '16px' }}>
              {t.privacy.subtitle}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {t.privacy.sections.map((section, idx) => (
                <div key={idx} className="bento-card" style={{ padding: '24px', background: 'rgba(255,255,255,0.01)' }}>
                  <h3 style={{ fontSize: '18px', color: 'white', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <FileText size={18} color="var(--accent-pink)" />
                    {section.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.6' }}>
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </>
        );

      case 'refund':
        return (
          <>
            <h1 style={{ fontSize: '40px', marginBottom: '10px' }} className="text-gradient">
              {t.refund.title}
            </h1>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '30px', fontSize: '16px' }}>
              {t.refund.subtitle}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {t.refund.sections.map((section, idx) => (
                <div key={idx} className="bento-card" style={{ padding: '24px', background: 'rgba(255,255,255,0.01)' }}>
                  <h3 style={{ fontSize: '18px', color: 'white', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <HelpCircle size={18} color="var(--accent-blue)" />
                    {section.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.6' }}>
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </>
        );

      case 'contact':
        return (
          <>
            <h1 style={{ fontSize: '40px', marginBottom: '10px' }} className="text-gradient">
              {t.contact.title}
            </h1>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '30px', fontSize: '16px' }}>
              {t.contact.subtitle}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              <div className="bento-card" style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{ padding: '12px', background: 'rgba(168, 85, 247, 0.1)', borderRadius: '12px', border: '1px solid rgba(168, 85, 247, 0.2)' }}>
                  <Mail size={24} color="var(--accent-purple)" />
                </div>
                <div>
                  <h4 style={{ color: 'white', fontSize: '16px', marginBottom: '6px' }}>Email Support</h4>
                  <a href={`mailto:${t.contact.email}`} style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '15px', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>
                    {t.contact.email}
                  </a>
                </div>
              </div>

              <div className="bento-card" style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{ padding: '12px', background: 'rgba(236, 72, 153, 0.1)', borderRadius: '12px', border: '1px solid rgba(236, 72, 153, 0.2)' }}>
                  <Phone size={24} color="var(--accent-pink)" />
                </div>
                <div>
                  <h4 style={{ color: 'white', fontSize: '16px', marginBottom: '6px' }}>Call Us</h4>
                  <a href={`tel:${t.contact.phone.replace(/\s+/g, '')}`} style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '15px', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>
                    {t.contact.phone}
                  </a>
                </div>
              </div>

              <div className="bento-card" style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', gridColumn: 'span 1' }}>
                <div style={{ padding: '12px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '12px', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
                  <MapPin size={24} color="var(--accent-blue)" />
                </div>
                <div>
                  <h4 style={{ color: 'white', fontSize: '16px', marginBottom: '6px' }}>Business Address</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.5' }}>
                    {t.contact.address}
                  </p>
                </div>
              </div>
            </div>
          </>
        );

      case 'about':
        return (
          <>
            <h1 style={{ fontSize: '40px', marginBottom: '10px' }} className="text-gradient">
              {t.about.title}
            </h1>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '30px', fontSize: '16px' }}>
              {t.about.subtitle}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div className="bento-card" style={{ padding: '30px', background: 'rgba(255,255,255,0.01)' }}>
                <h3 style={{ fontSize: '20px', color: 'white', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Building2 size={20} color="var(--accent-purple)" />
                  {t.about.details.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.7' }}>
                  {t.about.details.content}
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                <div className="bento-card" style={{ padding: '24px', background: 'rgba(255,255,255,0.01)' }}>
                  <h3 style={{ fontSize: '18px', color: 'white', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Info size={18} color="var(--accent-pink)" />
                    {t.about.mission.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.6' }}>
                    {t.about.mission.content}
                  </p>
                </div>

                <div className="bento-card" style={{ padding: '24px', background: 'rgba(255,255,255,0.01)' }}>
                  <h3 style={{ fontSize: '18px', color: 'white', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle size={18} color="var(--accent-blue)" />
                    {t.about.vision.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.6' }}>
                    {t.about.vision.content}
                  </p>
                </div>
              </div>

              <div style={{ marginTop: '40px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '30px' }}>
                <h3 style={{ fontSize: '22px', color: 'white', marginBottom: '20px' }}>{t.about.featuresTitle}</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
                  {t.about.categories.map((cat, idx) => (
                    <div key={idx} className="bento-card" style={{ padding: '20px', background: 'rgba(255,255,255,0.01)' }}>
                      <h4 style={{ fontSize: '15px', color: 'white', marginBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '6px', fontWeight: 600 }}>{cat.name}</h4>
                      <ul style={{ listStyle: 'none', padding: 0 }}>
                        {cat.items.map((item, itemIdx) => (
                          <li key={itemIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', fontSize: '13px', color: 'var(--text-secondary)' }}>
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-purple)' }} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navbar */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          right: 0, 
          padding: '16px 24px', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          zIndex: 100, 
          background: 'rgba(0, 0, 0, 0.5)', 
          backdropFilter: 'blur(20px)', 
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)' 
        }}
      >
        <a 
          href="/" 
          onClick={handleBackToHome}
          style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}
        >
          <Logo width="32px" height="32px" />
          <span style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: '22px', color: 'var(--text-primary)', letterSpacing: '-0.5px' }}>
            Saadhyam <span className="text-gradient">AI</span>
          </span>
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <select 
            className="language-selector" 
            value={lang} 
            onChange={(e) => setLang(e.target.value)}
          >
            <option value="en">English</option>
            <option value="hi">हिंदी</option>
            <option value="te">తెలుగు</option>
          </select>
          <a 
            href="/" 
            onClick={handleBackToHome} 
            className="btn-secondary" 
            style={{ padding: '10px 20px', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <ArrowLeft size={16} />
            <span>{t.backToHome}</span>
          </a>
        </div>
      </motion.nav>

      {/* Main Content Area */}
      <main style={{ flex: 1, padding: '120px 24px 60px', position: 'relative', zIndex: 1 }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <motion.div 
            key={pageType}
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="glass-panel" 
            style={{ padding: '40px', borderRadius: '30px' }}
          >
            {renderContent()}

            <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
              <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                {t.lastUpdated}
              </span>
              <a 
                href="/" 
                onClick={handleBackToHome} 
                style={{ color: 'var(--accent-purple)', textDecoration: 'none', fontSize: '14px', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                <ArrowLeft size={14} /> {t.backToHome}
              </a>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
