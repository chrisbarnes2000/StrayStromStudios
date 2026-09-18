# StrayStromStudios — Architecture & Engineering Documentation

This directory contains the architecture specifications, component structures, safety-critical guidelines, and design documentation for **StrayStromStudios**, the official engineering portfolio and consulting portal for **Christopher (Chris) Barnes** (known as **AstroNight**).

---

## 🏛️ Architecture Overview

The application is architected as a high-availability, modular single-page portfolio with server-side API routing and Cloud Firestore data persistence.

### Core Modules
1. **Profile & Persona Engine (`src/components/ProfileHeroCard.tsx`)**:
   - Features the primary `#astronight-profile-card` with instant switching between the **AstroNight SME** identity and the **Christopher Barnes SRE** professional profile.
   - Highlights key production metrics ($2.5M+/day desk coverage, 99.98% availability, -30% MTTR, -60% repeat incidents).
2. **Founder Ventures Showcase (`src/components/VenturesSection.tsx`)**:
   - Deep-dives into **RapportVerse**, **Ascend ATS**, **Mentra Collective**, and **New Harmony Cafe**.
   - Details architectural contributions, data persistence models, and technology stacks.
3. **SRE & Production Timeline (`src/components/ExperienceTimeline.tsx`)**:
   - Interactive history of Citi Equity Derivatives support, Revature DevOps leadership, academic achievements, and FIRST Robotics mentorship.
4. **Competencies Matrix (`src/components/CompetenciesMatrix.tsx`)**:
   - Interactive categorization across Reliability & SRE, DevOps & IaC, FinTech & FIX protocol, and Distributed Cloud Architecture.
5. **Neurodiversity & Accessibility Suite (`src/components/NeurodiversitySection.tsx`)**:
   - Documentation of Chris's system-level cognitive strengths (Dyslexia/Dyscalculia holistic pattern recognition).
   - Live toggling of `chris-reading-mode` (Georgia serif font + `#E2F0D9` soft green eye-strain reduction overlay).
6. **Consulting Portal (`src/components/ConsultingSection.tsx`)**:
   - Inquiry form writing directly to Cloud Firestore `vetted_requests` collection with attribute-based security compliance.
7. **Ask SRE AI Advisor (`src/components/AskSreAiModal.tsx`)**:
   - Powered by Gemini 2.5 Flash via `/api/gemini/consult` to answer technical questions regarding Chris's background and architecture.

---

## 📚 Documentation Suite & Index Directory

All architectural governance and tracking documents are organized under `/Docs/`:

| Document | Purpose | Cadence |
| :--- | :--- | :--- |
| **`/Docs/README.md`** | High-level system architecture and component catalog | As architecture updates |
| **`/Docs/CHANGELOG_DEV.md`** | Granular, high-frequency developer engineering log | **Every work turn** |
| **`/Docs/CHANGELOG.md`** | User-facing public release notes & milestone history | Major milestone releases |
| **`/Docs/STRUCTURE.md`** | Comprehensive project file tree & directory mappings | On file creation / removal |
| **`/Docs/INDEX_ROADMAP.md`** | System milestone roadmap, complexity triggers, & tech debt backlog | At roadmap triggers |
| **`/Docs/INDEX_AUDIT.md`** | Safety-critical scorecards, NASA JPL Power of 10 audit, & WCAG AA status | Post-refactor / periodic |
| **`/Docs/INDEX_MARKETING.md`** | Social broadcast copy, LinkedIn playbooks, and community feedback guides | Release cuts & campaigns |

---

## 🚀 Safety-Critical Engineering: NASA JPL "Power of 10"

All codebase additions and refactoring maintain 100% compliance with the **NASA JPL Power of 10** safety rules:
1. **Simple Control Flow**: Linear async/await execution without recursion or circular loops.
2. **Fixed Loop Bounds**: Statically provable bounds on all iterations.
3. **Deterministic Memory**: Clean lifecycle destruction for observers and listeners.
4. **Compact Function Length**: Functions restricted to <60 lines of logic.
5. **High Assertion Density**: Rigorous input validation pre-conditions.
6. **Minimal Data Scope**: Scoped React state with minimal exposure.
7. **Strict Parameter Validation**: Validated return values and error handling.
8. **No Magic Values**: Strongly typed domain interfaces in `src/types.ts`.
9. **Restricted Indirection**: Max call depth <= 2 levels.
10. **Zero-Warning Compilation**: Verified `tsc --noEmit` and clean production build.

---

## ♿ WCAG 2.1 / 2.2 AA Accessibility Compliance

The application enforces strict accessibility invariants:
- **Contrast**: >4.5:1 ratio across standard text; eye-strain-free `chris-reading-mode`.
- **Keyboard Access**: 100% navigable with focus-visible indicators.
- **Form Associations**: Explicit labels and contextual validation states.
- **Robustness**: Semantic HTML elements and live region announcements.
