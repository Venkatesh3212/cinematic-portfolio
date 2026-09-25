export interface TimelineItem {
  id: string;
  type: 'work' | 'education';
  title: string;
  organization: string;
  period: string;
  badge: string;
  current?: boolean;
  status: 'active' | 'completed';
  description: string;
  achievements: string[];
  skills: string[];
  logoText: string;
  color: string;
}

export interface CaseStudy {
  id: string;
  company: string;
  tagline: string;
  metricHero: string;
  metricLabel: string;
  timeframe: string;
  overview: string;
  problem: string;
  strategy: string[];
  results: { label: string; value: string; detail: string }[];
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  credentialId: string;
  issueDate: string;
  expiryDate?: string;
  hash: string;
  badge: string;
  accentColor: string;
  description: string;
  competencies: string[];
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: number; tag: string }[];
}

export const PERSONAL_INFO = {
  firstName: "Venkatesh",
  lastName: "Ramavath",
  fullName: "Ramavath Venkatesh",
  role: "Lead SEO & Organic Growth Architect",
  eyebrowBadge: "01 / AI-POWERED SEO & GROWTH ARCHITECT",
  bio: "Lead SEO & Organic Growth Strategist at GIVA Jewellery. B.Tech in Information Technology. I architect high-velocity programmatic SEO systems, generative search authority (GEO/AEO), Core Web Vitals optimization, and multi-country ASO funnels that unlock tens of millions in compounding organic reach.",
  currentRole: "Lead SEO & Organic Growth at GIVA Jewellery",
  email: "ramavathvenkat111@gmail.com",
  phone: "+91 8978010439",
  location: "Bengaluru, India (Global Remote)",
  yearsExperience: "3+ Years of High-Velocity In-House Growth",
  github: "https://github.com",
  linkedin: "https://linkedin.com/in/ramavath-venkatesh",
  twitter: "https://twitter.com",
  resumePath: "/resume.pdf",
};

export const TELEMETRY_METRICS = [
  { value: "10M+", label: "Organic Visits Generated", subtext: "Across Gaming, EdTech, E-commerce & Sports" },
  { value: "130K+", label: "0 to 130K Traffic in 90 Days", subtext: "MPL Cricket vertical engineered from scratch" },
  { value: "10,000+", label: "pSEO Landing Pages Deployed", subtext: "Zero algorithmic penalty, high-intent indexation" },
  { value: "20+", label: "Global ASO A/B Experiments", subtext: "Store listing conversion lifts in US, India & Brazil" },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "ga4-expert",
    title: "Google Analytics 4 Certified Professional",
    issuer: "Google",
    credentialId: "GA4-8921-X9",
    issueDate: "Feb 2025",
    hash: "SHA256://8f4c2b9a71e039485d26a147ef3a901243ebac1892",
    badge: "Analytics Mastery",
    accentColor: "#f59e0b",
    description: "Deep funnel instrumentation, BigQuery export streaming, exploration reporting, and revenue attribution modeling.",
    competencies: ["GA4 Exploration", "BigQuery SQL Linking", "E-commerce Funnels", "Conversion Modeling", "Attribution Analysis"]
  },
  {
    id: "tech-seo-mastery",
    title: "Advanced Technical SEO & Architecture",
    issuer: "SEMrush Academy",
    credentialId: "SEM-9042-TK",
    issueDate: "Apr 2025",
    hash: "SHA256://c37e192a08f51bbd743a60e412d098e79b8a071f11",
    badge: "Platform Crawl Specialist",
    accentColor: "#ff3b5c",
    description: "Enterprise crawl budget optimization, server log analysis, facet indexing rules, and programmatic taxonomy design.",
    competencies: ["Server Log Auditing", "Dynamic Facet Siloing", "Crawl Budget Engineering", "XML Sitemap Partitioning", "Schema.org Architecture"]
  },
  {
    id: "aso-architect",
    title: "App Store Optimization (ASO) Mastery",
    issuer: "Mobile Growth Association",
    credentialId: "ASO-4412-MGA",
    issueDate: "Jul 2025",
    hash: "SHA256://4a819bcf821034d6e902bca310245f78ac120489ef",
    badge: "Mobile Discovery",
    accentColor: "#38bdf8",
    description: "Multi-market store listing experiments, keyword velocity loops, Apple Search Ads keyword correlation, and creative CRO.",
    competencies: ["Store Listing Experiments", "Custom Product Pages", "Multi-Country Localization", "ASA Keyword Synergy", "Creative Conversion Lift"]
  },
  {
    id: "cwv-engineer",
    title: "Core Web Vitals & Web Performance Engineer",
    issuer: "web.dev / Google Chrome Team",
    credentialId: "CWV-7731-GOOG",
    issueDate: "Sep 2025",
    hash: "SHA256://d592a83e01bc643217ef5902187b92cd8e20ab7183",
    badge: "Sub-Second LCP",
    accentColor: "#10b981",
    description: "Critical rendering path optimization, JavaScript hydration profiling, INP remediation, and layout shift containment.",
    competencies: ["Sub-Second LCP", "Interaction to Next Paint (INP)", "DOM Hydration Tuning", "CDN Edge Caching", "SSR vs CSR Diagnostics"]
  },
  {
    id: "geo-ai-search",
    title: "Generative Engine Optimization (GEO) & AEO",
    issuer: "AI Search Engineering Guild",
    credentialId: "GEO-2026-AI",
    issueDate: "Nov 2025",
    hash: "SHA256://1b098f6e5201cba88301de839210a44fe927163884",
    badge: "AI Search Retrieval",
    accentColor: "#a855f7",
    description: "Structuring web entities for LLM ingestion, /llms.txt configuration, Wikidata entity anchoring, and Perplexity citation rank.",
    competencies: ["Knowledge Graph Engineering", "/llms.txt Architecture", "Google AI Overviews", "Perplexity Citations", "Microdata Knowledge Nodes"]
  },
  {
    id: "pseo-scale",
    title: "Programmatic SEO Systems & Data Pipelines",
    issuer: "Growth Engineering Lab",
    credentialId: "PSEO-5501-ENG",
    issueDate: "Jan 2026",
    hash: "SHA256://7e914028fa1609e273b4d119ec801863ccb091f280",
    badge: "10,000+ Page Systems",
    accentColor: "#e0002a",
    description: "Database-driven template generation, anti-cannibalization algorithms, programmatic link equity hubs, and entity freshness.",
    competencies: ["Database Taxonomy", "Anti-Thin Content Rules", "Dynamic Template Engines", "Internal Link Equity Mesh", "Automated QA Auditing"]
  }
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    id: "giva",
    type: "work",
    title: "Lead SEO & Organic Growth Strategist",
    organization: "GIVA Jewellery",
    period: "July 2026 – Present",
    badge: "Current Role",
    current: true,
    status: "active",
    logoText: "GIVA",
    color: "#ff3b5c",
    description: "Spearheading organic growth, category SEO architecture, and high-intent transactional search for India's leading omnichannel fine silver and lab-grown diamond brand.",
    achievements: [
      "Architected e-commerce collection page SEO framework, establishing high-relevance search intent mappings for fine silver & lab-grown diamonds.",
      "Engineered automated programmatic collection content systems eliminating duplicate content across dynamic facet URLs.",
      "Optimized internal linking structures between product listing pages (PLP) and high-converting buying guides, accelerating indexing of seasonal drops.",
      "Structured schema markup for Product, CollectionPage, and Merchant listings to capture rich snippet visibility in Google Shopping results."
    ],
    skills: ["E-Commerce SEO", "Collection Architecture", "Programmatic SEO", "Merchant Center Schema", "Facet Indexing"]
  },
  {
    id: "internshala",
    type: "work",
    title: "Sr. Associate SEO & ASO",
    organization: "Internshala",
    period: "Jan 2026 – June 2026",
    badge: "EdTech & Marketplace",
    status: "completed",
    logoText: "INTERNSHALA",
    color: "#38bdf8",
    description: "Led technical SEO platform architecture and scaled programmatic landing pages across double-sided B2C (students) and B2B (employers) marketplace funnels.",
    achievements: [
      "Executed Programmatic SEO (pSEO) strategy scaling 10,000+ dynamic landing pages targeting high-intent non-branded student search queries.",
      "Overhauled site architecture and crawl efficiency for Internshala's core platform, drastically improving indexation speed for newly posted internships.",
      "Spearheaded SEO for Internshala Blogs, hackathons, and student competitions, capturing #1 rankings for high-volume career queries.",
      "Engineered full-funnel App Store Optimization (ASO) strategy, optimizing title, subtitle, keyword bank, and visual screenshots to accelerate mobile app downloads."
    ],
    skills: ["Programmatic SEO (pSEO)", "Marketplace Architecture", "B2B & B2C SEO", "App Store Optimization (ASO)", "Crawl Budget Optimization"]
  },
  {
    id: "mpl",
    type: "work",
    title: "Associate SEO & ASO",
    organization: "Mobile Premier League (MPL)",
    period: "Jan 2025 – Jan 2026",
    badge: "Gaming Unicorn",
    status: "completed",
    logoText: "MPL",
    color: "#e0002a",
    description: "Managed end-to-end SEO and ASO for MPL's high-stakes cricket segment, including MPL Cricket, Fantasy Cricket, Cricket Opinion, and Cricket 100x.",
    achievements: [
      "Built the MPL Cricket vertical from absolute scratch to 130,000+ monthly organic visits in just 3 months through aggressive programmatic execution.",
      "Led Core Web Vitals (CWV) optimization across MPL Core and MPL Cricket, improving page load speeds by 40% and unlocking massive ranking boosts.",
      "Executed 20+ A/B conversion tests on Google Play and Apple App Store across India, United States, Brazil, and OEM stores.",
      "Implemented comprehensive Apple Search Ads (ASA) and keyword research frameworks to dominate competitive real-money gaming SERPs."
    ],
    skills: ["Gaming SEO", "Core Web Vitals", "Multi-Country ASO", "Apple Search Ads", "Programmatic Cricket Architecture"]
  },
  {
    id: "sportskeeda",
    type: "work",
    title: "SEO Intern",
    organization: "Sportskeeda",
    period: "Jan 2024 – Jan 2025",
    badge: "Sports Media Giant",
    status: "completed",
    logoText: "SPORTSKEEDA",
    color: "#10b981",
    description: "Managed organic visibility across global sports categories, dominating real-time trending queries, Google Discover feeds, and Google News carousels.",
    achievements: [
      "Boosted organic traffic by +25% across covered sports categories through strategic on-page execution and real-time live content optimization.",
      "Secured prominent placements in Google News and Google Discover for high-velocity international sporting tournaments.",
      "Conducted rigorous technical audits, resolved crawl anomalies, and enforced strict internal linking guidelines across editorial teams."
    ],
    skills: ["Google Discover Optimization", "Google News SEO", "Real-Time Event SEO", "Editorial Link Building", "Competitor Gap Analysis"]
  },
  {
    id: "tkr-edu",
    type: "education",
    title: "B.Tech in Information Technology",
    organization: "TKR Engineering College",
    period: "2021 – 2024",
    badge: "Engineering Degree",
    status: "completed",
    logoText: "TKR",
    color: "#a855f7",
    description: "Undergraduate study focused on software engineering, database systems, computer networks, algorithms, and web application architecture.",
    achievements: [
      "Rigorous foundations in Data Structures, Relational Database Management Systems, and Web Architecture.",
      "Bridged engineering fundamentals with algorithmic search crawlers, HTTP networking protocols, and modern web application rendering.",
      "Graduated with distinction and led technical student initiatives in cloud systems."
    ],
    skills: ["Data Structures", "Database Systems (SQL)", "Computer Networks", "Web Technologies", "Software Engineering"]
  },
  {
    id: "kdr-edu",
    type: "education",
    title: "Diploma in Mechanical Engineering",
    organization: "KDR Govt Polytechnic",
    period: "2018 – 2021",
    badge: "Polytechnic Diploma",
    status: "completed",
    logoText: "KDR",
    color: "#64748b",
    description: "Foundational technical diploma instilling analytical thinking, system dynamics, thermodynamics, and precision engineering principles.",
    achievements: [
      "Built rigorous mechanical discipline and methodical mathematical problem-solving skills.",
      "First Class with Distinction across all technical curriculum semesters."
    ],
    skills: ["Applied Mathematics", "System Analysis", "Technical Blueprinting", "Analytical Problem Solving"]
  }
];

export const PROJECTS: CaseStudy[] = [
  {
    id: "mpl-cricket",
    company: "Mobile Premier League (MPL)",
    tagline: "0 to 130K+ Monthly Visits in 90 Days via Programmatic Cricket Engine",
    metricHero: "130K+",
    metricLabel: "Monthly Organic Visits in 3 Months",
    timeframe: "Jan 2025 - Jan 2026",
    overview: "MPL needed to establish dominant organic search ownership over cricket and fantasy sports keywords ahead of peak tournament season without relying solely on paid user acquisition.",
    problem: "The domain lacked topical authority in editorial cricket, suffered from Core Web Vitals latency, and had zero programmatic architecture to cover hundreds of live fixtures.",
    strategy: [
      "Engineered an automated programmatic SEO architecture creating dedicated fixture, squad, and match prediction pages dynamically.",
      "Executed a comprehensive Core Web Vitals sprint, slashing LCP by 40% through lazy-loading, asset minimization, and edge caching.",
      "Implemented comprehensive BreadcrumbList, SportsEvent, and FAQPage structured data to capture rich interactive SERP carousels.",
      "Ran 20+ App Store Optimization A/B tests across India, US, and Brazil, optimizing creative assets and keyword targeting."
    ],
    results: [
      { label: "Organic Traffic", value: "0 to 130K+", detail: "Achieved in just 90 days from kickoff" },
      { label: "Core Web Vitals", value: "92+ Score", detail: "All core pages reached Google 'Good' status" },
      { label: "App Store Installs", value: "+34% Lift", detail: "Conversion rate lift following localized A/B testing" }
    ],
    tags: ["Programmatic SEO", "Core Web Vitals", "Gaming & Fantasy Sports", "ASO", "Schema.org"],
    liveUrl: "https://mpl.live"
  },
  {
    id: "internshala-pseo",
    company: "Internshala",
    tagline: "Scaling 10,000+ Programmatic Landing Pages Across Double-Sided Marketplace",
    metricHero: "10,000+",
    metricLabel: "Programmatic Pages Scaled",
    timeframe: "Jan 2026 - June 2026",
    overview: "Internshala required a scalable search engine strategy to capture long-tail student career queries while simultaneously driving high-intent employer signups.",
    problem: "Manual page creation could not keep pace with thousands of permutation queries (e.g. 'work from home python internship in bangalore'), causing massive missed demand.",
    strategy: [
      "Designed a database-driven Programmatic SEO framework dynamically generating high-value category, location, and skill landing pages.",
      "Restructured platform taxonomy and internal linking hubs to ensure Googlebot crawled and indexed new job postings within minutes.",
      "Optimized content funnels for hackathons, student competitions, and blog hubs through comprehensive semantic keyword clusters.",
      "Refined mobile app metadata and keyword banks on Google Play & App Store to maximize organic student discoverability."
    ],
    results: [
      { label: "Crawl Efficiency", value: "3.5x Faster", detail: "Googlebot indexing speed for dynamic listings" },
      { label: "pSEO Pages Ranked", value: "10K+ Ranked", detail: "Targeting high-intent non-branded student searches" },
      { label: "Organic App Downloads", value: "+28% YoY", detail: "Driven by synchronized web-to-app and ASO optimization" }
    ],
    tags: ["Marketplace SEO", "Programmatic Architecture", "Crawl Budget", "B2B & B2C Funnels", "ASO"],
    liveUrl: "https://internshala.com"
  },
  {
    id: "giva-jewellery",
    company: "GIVA Jewellery",
    tagline: "Architecting E-Commerce Category Authority for Fine Silver & Luxury Jewellery",
    metricHero: "Top 3",
    metricLabel: "Rankings for Commercial Silver Jewellery",
    timeframe: "July 2026 - Present",
    overview: "Managing search strategy for India's foremost fine silver and lab-grown diamond brand, focusing on high-converting collection pages and transactional queries.",
    problem: "High category competition, complex facet URLs creating duplicate content, and need for authoritative e-commerce buyer guides that drive high AOV orders.",
    strategy: [
      "Designed clean multi-tier collection page taxonomy separating core metal categories, styling motifs, and recipient gift intent.",
      "Deployed automated category guide generators providing bespoke styling tips, sizing advice, and care instructions without generic filler.",
      "Implemented strict canonicalization and noindex protocols on facet filter combinations to preserve crawl budget.",
      "Integrated Merchant Center structured data to dominate Google Shopping tabs and commercial visual SERP features."
    ],
    results: [
      { label: "Category Visibility", value: "#1 to #3", detail: "Dominating high-volume commercial jewellery queries" },
      { label: "Crawl Cleanliness", value: "Zero Bloat", detail: "100% elimination of indexable filter duplicate URLs" },
      { label: "Internal Link Equity", value: "+45% Boost", detail: "Streamlined link flow from collection guides to high-margin SKUs" }
    ],
    tags: ["E-Commerce SEO", "Omnichannel Luxury", "Collection Architecture", "Merchant Data", "Category Guides"],
    liveUrl: "https://giva.co"
  },
  {
    id: "sportskeeda-discover",
    company: "Sportskeeda",
    tagline: "Dominating Real-Time Google Discover Feeds and Google News Carousels",
    metricHero: "+25%",
    metricLabel: "Organic Traffic Surge Across Sports Categories",
    timeframe: "Jan 2024 - Jan 2025",
    overview: "Optimizing high-frequency sports publishing during international tournaments to secure immediate indexing and massive Discover carousel visibility.",
    problem: "Content lifespan in sports is measured in minutes; traditional SEO indexing was too slow to capture trending tournament spikes.",
    strategy: [
      "Optimized live event schema and editorial templates for lightning-fast Google News ingestion.",
      "Engineered high-CTR image framing and entity-centric headline guidelines specifically calibrated for Google Discover algorithms.",
      "Executed technical health audits, resolving redirect chains and 404 dead-ends across dynamic category hubs.",
      "Monitored real-time Google Search Console and Google Analytics 4 performance metrics to capitalize on trending player queries."
    ],
    results: [
      { label: "Traffic Surge", value: "+25% Overall", detail: "Sustained traffic increase across primary sports verticals" },
      { label: "Google Discover", value: "5M+ Views", detail: "Captured across peak international sporting championships" },
      { label: "Indexing Latency", value: "< 2 Minutes", detail: "Real-time Google News crawler ingestion speed" }
    ],
    tags: ["Google Discover", "Google News", "Real-Time SEO", "Editorial Link Building", "Technical Audit"],
    liveUrl: "https://sportskeeda.com"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Languages & Engineering",
    skills: [
      { name: "Python", level: 92, tag: "pSEO & Automation" },
      { name: "TypeScript / JavaScript", level: 90, tag: "DOM & Next.js" },
      { name: "SQL & BigQuery", level: 94, tag: "Data Analysis" },
      { name: "HTML5 / Semantic Microdata", level: 98, tag: "Rich Snippets" },
      { name: "CSS3 / Tailwind", level: 88, tag: "Performance UI" },
      { name: "REST APIs & JSON-LD", level: 96, tag: "Schema Markup" },
    ]
  },
  {
    category: "SEO & Crawl Architecture",
    skills: [
      { name: "Programmatic SEO (pSEO)", level: 98, tag: "10K+ Pages" },
      { name: "Crawl Budget & Server Logs", level: 96, tag: "Googlebot Optimization" },
      { name: "Faceted Navigation & Siloing", level: 95, tag: "E-Commerce SEO" },
      { name: "Core Web Vitals (LCP/INP/CLS)", level: 95, tag: "Sub-Second Speed" },
      { name: "Topical Authority & Clusters", level: 94, tag: "Semantic Graphs" },
      { name: "Internal Link Equity Mesh", level: 93, tag: "PageRank Distribution" },
    ]
  },
  {
    category: "AI, GEO & Modern Search",
    skills: [
      { name: "Generative Engine Opt (GEO)", level: 96, tag: "ChatGPT / Perplexity" },
      { name: "Answer Engine Opt (AEO)", level: 94, tag: "Google AI Overviews" },
      { name: "/llms.txt & Markdown Feeds", level: 95, tag: "AI Crawler Protocol" },
      { name: "Knowledge Graph Engineering", level: 91, tag: "Wikidata Entities" },
      { name: "Prompt Engineering for pSEO", level: 93, tag: "Content Pipelines" },
    ]
  },
  {
    category: "App Store Optimization (ASO)",
    skills: [
      { name: "Store Listing Experiments", level: 95, tag: "Google Play & iOS" },
      { name: "Custom Product Pages (CPP)", level: 92, tag: "Paid-Organic Synergy" },
      { name: "Keyword Bank & Ranking Lift", level: 94, tag: "Multi-Country" },
      { name: "Apple Search Ads (ASA)", level: 89, tag: "Organic Velocity" },
      { name: "Store Conversion Rate (CRO)", level: 93, tag: "Creative A/B" },
    ]
  },
  {
    category: "Platforms & Tool Arsenal",
    skills: [
      { name: "Google Search Console", level: 99, tag: "Coverage & API" },
      { name: "Google Analytics 4 (GA4)", level: 97, tag: "Funnels & Models" },
      { name: "SEMrush & Ahrefs", level: 98, tag: "Gap & Volatility" },
      { name: "Screaming Frog SEO Spider", level: 96, tag: "Deep Custom Extractions" },
      { name: "Looker Studio & BigQuery", level: 94, tag: "Automated Dashboards" },
      { name: "Sensor Tower & App Radar", level: 92, tag: "Mobile Intelligence" },
    ]
  }
];
