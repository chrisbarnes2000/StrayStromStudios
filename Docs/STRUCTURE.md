# StrayStromStudios Directory Structure

```
/
├── server.ts                       # Express server with Vite middleware & Gemini proxy
├── package.json                    # Package metadata & scripts (straystromstudios v2.0.0)
├── metadata.json                   # AI Studio applet configuration & permissions
├── index.html                      # HTML entry point with synchronized SEO meta tags
├── firestore.rules                 # Cloud Firestore security rules
├── firebase-applet-config.json     # Firebase client credentials
├── AGENTS.md                       # Agent persistent persona, workflow, Power of 10 & WCAG rules
├── GEMINI.md                       # Gemini model selection & proxy integration guide
├── CHANGELOG.md                    # Root release history & migration changelog
├── Docs/
│   ├── README.md                   # Architecture overview & documentation index
│   ├── CHANGELOG_DEV.md            # High-frequency developer log (updated every turn)
│   ├── CHANGELOG.md                # Milestone public changelog
│   ├── STRUCTURE.md                # Directory mapping & file tree
│   ├── INDEX_ROADMAP.md            # SRE consulting roadmap & complexity triggers
│   ├── INDEX_AUDIT.md              # NASA JPL Power of 10 & WCAG AA scorecard
│   └── INDEX_MARKETING.md          # Social broadcast, LinkedIn copy & marketing playbook
└── src/
    ├── main.tsx                    # React client entry point
    ├── App.tsx                     # Master portfolio application container
    ├── index.css                   # Global Bento styling & chris-reading-mode definitions
    ├── types.ts                    # TypeScript interfaces for profile, ventures & inquiries
    ├── data/
    │   ├── mockData.ts             # Profile datasets, ventures, competencies & metrics
    │   └── founder_ventures.json   # Raw JSON definitions for founder ventures
    ├── components/
    │   ├── ProfileHeroCard.tsx     # Centerpiece profile card with #astronight-profile-card
    │   ├── VenturesSection.tsx     # Founder ventures & architectural projects
    │   ├── ExperienceTimeline.tsx  # Work history, Citi 99.98% uptime & leadership
    │   ├── CompetenciesMatrix.tsx  # SRE, DevOps, FinTech & cloud matrix
    │   ├── NeurodiversitySection.tsx # Cognitive superpower & dyslexia accessibility
    │   ├── ConsultingSection.tsx   # Advisory services & Firestore inquiry form
    │   └── AskSreAiModal.tsx       # Gemini 2.5 Flash technical advisor modal
    └── utils/
        └── firebase.ts             # Firebase Firestore initialization & error handling
```
