import { FounderProfile, FoundingVenture, Holding, InvestmentPod } from '../types';
import founderVenturesData from './founder_ventures.json';

export const astroNightProfile: FounderProfile = {
  name: "AstroNight",
  realName: "Christopher (Chris) Barnes",
  title: "Resilient Systems Specialist | DevOps Engineer | Founder & Lead SRE",
  preferredTitle: "Resilient Systems Specialist | DevOps Engineer | Founder & Lead SRE",
  pronouns: "He/They",
  heroTagline: "I see systems where others see only code.",
  heroSubtitle: "Resilience is designed in, not patched on.",
  elevatorPitch: "Systems thinker, founder, and mission-driven engineer who transforms high-stakes reliability challenges into automated, resilient systems. Maintained 99.98% uptime for Citi's equity derivatives trading floor while reducing incident resolution by 30% through intelligent automation and cross-regional collaboration.",
  sponsorshipStatement: "Seeking sponsors, not just employers—leaders who understand that inclusion isn't simply about accommodation, but about unlocking perspectives that see around corners.",
  avatar: "🌌",
  email: "Chris.Barnes.2000@me.com",
  phone: "+1 (253) 224-1952",
  github: "https://github.com/ChrisBarnes2000",
  linkedin: "https://linkedin.com/in/ChrisBarnes2000",
  location: "Bonney Lake, WA (Remote/Hybrid)",
  bio: "AstroNight is my gaming, YouTube, and Discord creator tag — dedicated to deep tactical gameplay, procedural sandboxes, and strategic community exploration across Hytale, Minecraft, and Chess.",
  experience: [
    "Citi Group - Application Support Analyst (Equity Derivatives)",
    "Revature - Software Engineer (DevOps Lead)",
    "FIRST Robotics Mentor - Graham Kapowsin High School",
    "RapportVerse - Founder & Lead Architect",
    "Ascend ATS - Founder & Lead Architect",
    "Mentra Collective - Founder & Lead SRE",
    "ODEN Nexus - Founder & Lead Architect",
    "MiniBarnMaster - Full-Stack Architect & Lead SRE",
    "LifeCreatesArt - Full-Stack Architect & Lead Engineer"
  ],
  gamingProfile: {
    tag: "AstroNight",
    title: "Gaming Creator & Community Lead",
    bio: "Content creator and gamer exploring emergent systems, procedural generation, Redstone engineering, and tactical masteries.",
    platforms: {
      youtube: "https://youtube.com/@AstroNight",
      discord: "https://discord.gg/astronight",
      twitch: "https://twitch.tv/astronight"
    },
    games: [
      {
        id: "hytale",
        name: "Hytale",
        genre: "Adventure RPG & World-Building",
        tagline: "Anticipated sandbox RPG combining adventure with community server architecture.",
        focus: "Procedural generation, modding architecture, world scripts, and adventure exploration.",
        highlights: [
          "Server Architecture & Custom Scripting",
          "Procedural World-Building Analysis",
          "Community Guild & Lore Exploration"
        ],
        icon: "⚔️",
        status: "Anticipated Focus"
      },
      {
        id: "minecraft",
        name: "Minecraft",
        genre: "Technical Sandbox & Redstone Engineering",
        tagline: "High-complexity survival builds, Redstone computational logic, and automated farms.",
        focus: "Applying systems-thinking to automated contraptions, resource farms, and community servers.",
        highlights: [
          "Redstone Logic & Computational Circuits",
          "Automated Farming & Sorting Systems",
          "Technical Survival Multiplayer (SMP)"
        ],
        icon: "⛏️",
        status: "Active Series"
      },
      {
        id: "chess",
        name: "Chess",
        genre: "Classical & Rapid Strategy",
        tagline: "Cognitive pattern recognition, positional board control, and tactical calculation.",
        focus: "Deep analytical pattern recognition matching dyslexia's spatial strengths with board geometry.",
        highlights: [
          "Positional Control & Pawn Structures",
          "Rapid & Classical Time Controls",
          "Endgame Calculation & Tactical Puzzles"
        ],
        icon: "♟️",
        status: "Ongoing Study"
      }
    ]
  },
  cvDetails: {
    professionalProfile: "DevOps Engineer and Application Support Specialist with proven ex-Citi Equity Derivatives (EQD) experience who transforms high-stakes reliability challenges into automated, resilient systems. Maintained 99.98% system availability for Citi's equity derivatives trading desks processing $2.5M+/day while reducing incident resolution by 30% through intelligent automation. Leverages neurodivergent system-thinking (Dyslexia/Dyscalculia) to bridge innovative problem-finding with disciplined execution in financial technology and distributed cloud environments.",
    cognitiveApproach: "Neurodivergent (Dyslexia/Dyscalculia) system-thinker • Holistic pattern recognizer • Methodical executor • Cross-functional technical translator",
    competencies: {
      reliability: [
        "99.98% System Uptime in HFT / High-Stakes Trading Environments",
        "Predictive Incident Response & MTTR Reduction (-30%)",
        "Proactive Root Cause Analysis (-60% Repeat Incidents, -80% Downtime)",
        "Disaster Recovery, Chaos Resilience & Failover Planning",
        "Telemetry Observability Stacks (Prometheus, Grafana, Loki)"
      ],
      devops: [
        "Automated CI/CD Pipeline Architecture (Jenkins, GitHub Actions, Docker)",
        "Container Orchestration & Scaling (Kubernetes, Docker Swarm)",
        "Infrastructure as Code & Multi-Region Setup (Terraform, AWS, GCP)",
        "Automated Production Blue-Green Deployments (99.9% Pipeline Uptime)",
        "Config Management & Secret Hardening"
      ],
      fintech: [
        "Equity Derivatives & High-Frequency Trading Desk Support ($2.5M+/day)",
        "FIX Protocol Message Flows & Automated Validation (Python)",
        "Regulatory Compliance, Audit Trails & Risk Hardening",
        "Options Pricing Infrastructure & Black-Scholes Model Decoupling",
        "APAC/EMEA/NAM 'Follow-The-Sun' Global Collaboration Model"
      ],
      architecture: [
        "Full-Stack TypeScript / Node.js / React / Vite Architectures",
        "Cloud Firestore Real-Time DB & Attribute-Based Security Rules",
        "Server-Side API Key Encapsulation & Reverse-Proxy Security",
        "Neurodivergent Accessibility (Dynamic Typography & Soft-Green Overlays)",
        "Deterministic Matching Algorithms & Structured LLM Schema Parsers"
      ]
    },
    workExperience: [
      {
        role: "Application Support Analyst - Equity Derivatives",
        company: "Citi (via Revature)",
        location: "New York, NY (Hybrid / Remote)",
        period: "Dec 2022 – Oct 2024",
        bullets: [
          "Extreme Reliability: Maintained 99.98% system availability for equity derivatives trading desks processing $2.5M+/day in transaction volume.",
          "High-Pressure Incident Triage: Resolved 95% of critical production incidents within strict 15-minute SLAs, preventing catastrophic trade execution delays.",
          "Global Follow-The-Sun Handover: Redesigned cross-regional operational workflows across APAC, EMEA, and NAM desks, slashing mean time to resolution (MTTR) by 30%.",
          "Root Cause Analysis & Vulnerability Remediation: Conducted deep-dive RCAs to address systemic failure modes, reducing repeat incidents by 60% and downtime by 80%.",
          "Team Scalability & Documentation: Authored comprehensive operational playbooks and guided onboarding, reducing new engineer ramp-up time by 70%.",
          "Automation & Data Integrity: Engineered Python validation scripts and SQL audit pipelines, increasing trade flow accuracy by 25% and automating ServiceNow SLA reporting (+85% compliance transparency)."
        ]
      },
      {
        role: "Software Engineer - DevOps Lead",
        company: "Revature Projects",
        location: "Remote",
        period: "Jun 2022 – Oct 2024",
        bullets: [
          "CI/CD Transformation: Architected Jenkins, GitHub Actions, and Docker pipelines that increased deployment cadence by 75% with 99.9% uptime for automated blue-green releases.",
          "Infrastructure as Code (IaC): Authored reusable Terraform configurations and Kubernetes cluster definitions, speeding up multi-region environment provisioning by 35%.",
          "Observability & Proactive Telemetry: Deployed unified Grafana, Prometheus, and Loki monitoring stacks, cutting overall application downtime by 80% through predictive anomaly alerts."
        ]
      },
      {
        role: "Founder & Lead Architect",
        company: "RapportVerse",
        location: "Bonney Lake, WA",
        period: "Jun 2025 – Present",
        bullets: [
          "Built a next-generation professional networking platform re-centering authentic connection and multi-modal rapport without corporate algorithmic distortion.",
          "Visualized unseen communication patterns, relational topology, and trust metrics through interactive graph visualizers.",
          "Architected zero-exposure privacy protocols and verifiable credential badges."
        ]
      },
      {
        role: "Founder & Lead Architect",
        company: "Ascend ATS",
        location: "Bonney Lake, WA",
        period: "2025 – Present",
        bullets: [
          "Designed an inclusive, privacy-first applicant tracking system combining deterministic skill verification with comprehensive identity security.",
          "Pioneered granular PII redaction and an end-to-end neurodivergent accommodations request portal.",
          "Engineered real-time, non-blocking Cloud Firestore synchronizers and structured resume parsing."
        ]
      },
      {
        role: "Founder & Lead SRE",
        company: "Mentra Collective",
        location: "Bonney Lake, WA",
        period: "2025 – Present",
        bullets: [
          "Architected an accessible quantitative options modeling terminal and simulation suite.",
          "Decoupled Black-Scholes calculation pipelines from active UI frames to ensure smooth 60fps telemetry rendering.",
          "Implemented attribute-based Cloud Firestore access controls and secure server-side Gemini API proxies."
        ]
      },
      {
        role: "Founder & Lead Architect",
        company: "ODEN Nexus",
        location: "Bonney Lake, WA",
        period: "2025 – Present",
        bullets: [
          "Architected unified investigative graph mapping terminal for journalists, researchers, and forensic analysts.",
          "Integrated D3-Force physics graph engines with React-Konva GPU acceleration for 10,000+ relational nodes.",
          "Built automated public records request and FOIA discovery workflow managers."
        ]
      },
      {
        role: "Product Manager & Lead Backend Developer",
        company: "New Harmony Cafe",
        location: "San Francisco Bay Area, CA",
        period: "Jul 2020 – Dec 2020",
        bullets: [
          "Led an agile team of 5 engineers and UX designers using SCRUM sprint cadences, accelerating feature velocity by 20%.",
          "Maintained 100% backend uptime for digital storefronts and order management platforms supporting over 1,000 daily active users.",
          "Reduced issue resolution time by 30% through automated ticketing and regression triage."
        ]
      }
    ],
    education: [
      {
        degree: "Bachelor of Applied Computer Science – Backend Web & Data Science",
        school: "Dominican University of California",
        period: "2019 – 2021"
      },
      {
        degree: "Associate of Science – Computer Science (GPA 3.09, Phi Theta Kappa Honor Society)",
        school: "Pierce College at Puyallup",
        period: "2017 – 2019"
      }
    ],
    volunteerLeadership: [
      {
        role: "FIRST Robotics Mentor",
        organization: "Graham Kapowsin High School",
        period: "2021 – 2022",
        details: "Taught mechanical automation, systems thinking, sensor integration, and Gracious Professionalism to high school robotics competitors."
      },
      {
        role: "Alumni Ambassador",
        organization: "Revature",
        period: "June 2022 – Present",
        details: "Built community feedback loops, mentored incoming engineering associates, and facilitated transition programs into enterprise production desks."
      },
      {
        role: "Computer Science Lab Assistant & Peer Tutor",
        organization: "Pierce College",
        period: "2018 – 2019",
        details: "Provided one-on-one debugging assistance, data structure walkthroughs, and foundational algorithmic instruction for undergraduate CS students."
      }
    ],
    accommodations: [
      "Document presentation preferences for dyslexia: One-click toggle for soft-green screen theme (#E2F0D9) and serif typography (Georgia).",
      "Human-evaluated interviews and practical demonstrations over automated AI filters.",
      "Scenario-based technical reviews with prep materials provided in advance.",
      "Extended time allowances for timed evaluations."
    ]
  }
};

export const founderVentures: FoundingVenture[] = founderVenturesData.founder_ventures as FoundingVenture[];

export const consultingServices = [
  {
    id: "sre-architecture",
    title: "SRE & Reliability Architecture",
    description: "Architecting mission-critical reliability infrastructure, SLA/SLO definition, failover automation, and disaster recovery plans modeled on Wall Street high-frequency trading resilience.",
    deliverables: ["Architecture Audit & Single Point of Failure (SPOF) Analysis", "Automated Health Checks & Self-Healing Playbooks", "Global Follow-The-Sun Handover Procedures"]
  },
  {
    id: "devops-iac",
    title: "DevOps & CI/CD Pipeline Modernization",
    description: "Containerization with Kubernetes and Docker, blue-green deployment pipelines with Jenkins/GitHub Actions, and multi-region infrastructure as code with Terraform.",
    deliverables: ["Zero-Downtime Pipeline Architecture", "Terraform Multi-Cloud Reusable Modules", "Continuous Integration Security & Secret Hardening"]
  },
  {
    id: "observability",
    title: "Telemetry & Observability Stack",
    description: "Complete observability design with Grafana, Prometheus, and Loki. Moving from reactive alert fatigue to proactive anomaly detection.",
    deliverables: ["Custom Performance & Error Budget Dashboards", "Low-Latency Alerting Threshold Rules", "Root Cause Analysis (RCA) Runbooks"]
  },
  {
    id: "neurodiversity",
    title: "Neurodiversity in Tech Advisory",
    description: "Consulting on inclusive engineering leadership, cognitive accessibility workflows, and designing engineering systems that empower non-linear thinkers.",
    deliverables: ["Cognitive Accessibility Tooling Review", "Inclusive Interview & Onboarding Frameworks", "Systems-Thinking Workshops"]
  }
];

// Fallback dummy collections if referenced
export const initialHoldings: Holding[] = [];
export const initialPods: InvestmentPod[] = [];
export const sustainabilityIndexAssets: any[] = [];
export const simulationSteps: any[] = [];
