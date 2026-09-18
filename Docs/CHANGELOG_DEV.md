# StrayStromStudios Developer Changelog (`CHANGELOG_DEV.md`)

*High-Frequency Engineering Log — Updated on Every Single Work Turn / Task Completion*

---

## [2.0.6] - 2026-09-16 10:15:00 UTC
### Firebase Connection Configuration Migration to `straystromstudios`
- **Firebase Configuration Update (`firebase-applet-config.json`)**:
  - Updated configuration parameters to the dedicated `straystromstudios` Firebase project:
    - `projectId`: `"straystromstudios"`
    - `appId`: `"1:551129626303:web:6cf66535e7489b73e7380a"`
    - `apiKey`: `"AIzaSyB3nmzks-IELg0_uOiibsEhc7WsTQyePVQ"`
    - `authDomain`: `"straystromstudios.firebaseapp.com"`
    - `storageBucket`: `"straystromstudios.firebasestorage.app"`
    - `messagingSenderId`: `"551129626303"`
    - `measurementId`: `"G-N0QKPX8G9P"`
- **Rules Deployment & Verification**:
  - Successfully deployed `firestore.rules` to project `straystromstudios`.
  - Verified `src/utils/firebase.ts` client initialization against the new config.
  - Verified with `npm run lint` (`tsc --noEmit`) and `compile_applet` (0 errors, 0 warnings).

---

## [2.0.5] - 2026-09-15 21:55:00 UTC
### Full WCAG 2.2 AA & Speechify Screen Reader Accessibility Overhaul
- **Speechify & Screen Reader Optimization**:
  - `src/components/VenturesSection.tsx`: Structured filter tabs with `role="tablist"`, `role="tab"`, `aria-selected`, and `role="tabpanel"`. Added semantic `<article>` cards, `aria-labelledby`, and `aria-hidden="true"` on decorative icons.
  - `src/components/ExperienceTimeline.tsx`: Converted timeline cards to `<article>` tags inside a semantic `role="feed"`. Enforced `aria-labelledby` linking to role titles and added semantic sub-sections with `<section aria-labelledby="...">` for Education and Community Leadership.
  - `src/components/CompetenciesMatrix.tsx`: Wrapped competency groupings in `<article>` containers with `aria-labelledby` and descriptive `aria-label` lists for screen reader navigation.
  - `src/components/NeurodiversitySection.tsx`: Added `aria-pressed` states on the Chris Reading Mode toggle, explicit accessible names, and structured `<section>` groupings for cognitive strengths and workplace accommodation standards.
  - `src/components/ConsultingSection.tsx`: Associated all form inputs with explicit `<label htmlFor="...">` and `id` attributes, added `aria-required="true"`, dynamic `role="status"` live region for submission confirmation, and `role="alert"` for error feedback.
  - `src/components/AskSreAiModal.tsx`: Enforced accessible dialog semantics (`role="dialog"`, `aria-modal="true"`, `aria-labelledby="dialog-title-ai-consult"`), Escape key listener for dismissal, and keyboard focus outlines. Fixed trailing syntax parenthesis.
  - `src/App.tsx`: Ensured semantic `<header role="banner">`, `<main role="main">`, `<footer role="contentinfo">`, and accessible dropdown menus with `aria-expanded` and `aria-haspopup="true"`.
- **Verification & Power of 10 Invariants**:
  - `npm run lint` (`tsc --noEmit`): 0 warnings, 0 errors.
  - `npm test`: 4/4 passing vitest unit tests.
  - `compile_applet`: Production build succeeded.

---

## [2.0.4] - 2026-09-15 21:30:00 UTC
### Dynamic Header Scrollspy & Active Section Highlighting
- **Dynamic Header Highlighting (`src/App.tsx`)**:
  - Engineered dynamic scrollspy integration using `requestAnimationFrame` with passive scroll listener and bounded iteration safety ceiling (`i < NAV_SECTIONS.length && i < 10`).
  - Implemented boundary handling: auto-highlights `Overview` at document top (`scrollY < 100`) and `Consulting` at document bottom (`windowHeight + scrollY >= docHeight - 80`).
  - Added smooth scroll offset compensation (`headerOffset = 76`) accounting for sticky header height.
- **Targeted Element & Navigation Styling**:
  - Re-styled the `<nav>` container (CSS Selector 7) with a dark segmented pill chassis (`bg-slate-950/70 border border-slate-800/90 backdrop-blur-sm`).
  - Updated all 6 navigation buttons (CSS Selectors 1–6):
    1. `nav-btn-overview` -> `astronight-profile-card`
    2. `nav-btn-ventures` -> `ventures-section`
    3. `nav-btn-experience` -> `experience-section`
    4. `nav-btn-competencies` -> `competencies-section`
    5. `nav-btn-cognitive` -> `neurodiversity-section`
    6. `nav-btn-consulting` -> `consulting-section`
  - High-contrast visual active highlight:
    - Default mode: `bg-sky-500/20 text-sky-300 border-sky-500/40 shadow-sm font-bold` with glowing pulse indicator (`bg-sky-400 animate-pulse`).
    - Chris's Reading Mode: Seamlessly inherits soft-green palette (`bg-emerald-700/30 text-emerald-200 border-emerald-500/50`).
    - Inactive: Subdued `text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 border-transparent`.
- **Accessibility & ARIA Support**:
  - Programmatic `aria-current="page"` on active section button.
  - Visible keyboard focus rings (`focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-1 focus-visible:ring-offset-slate-900 outline-none`).
- **Post-Refactor Automated Testing (`tests/unit/portfolio.test.ts`)**:
  - Added test case validating `NAV_SECTIONS` configuration and 6 matching DOM element IDs.
  - Test suite passing: 4/4 passed in vitest.
- **Verification**:
  - `npm test`: 100% passing.
  - `npm run lint` (`tsc --noEmit`): 0 warnings, 0 errors.
  - `compile_applet`: Production build succeeded.

---

## [2.0.3] - 2026-09-15 21:05:00 UTC
### 6-Venture Portfolio Ecosystem & Authoritative Narrative Alignment
- **Venture Expansion (`src/data/founder_ventures.json` & `src/data/mockData.ts`)**:
  - Imported and synchronized all 6 ventures into `mockData.ts` from `founder_ventures.json`:
    1. **RapportVerse** (`flagship`): Authentic networking with communication topology & graph analytics.
    2. **Ascend ATS** (`flagship`): Privacy-first applicant tracking with deterministic skills matching & candidate accommodation workflows.
    3. **Mentra Collective** (`flagship`): Accessible quantitative modeling terminal with decoupled options analytics.
    4. **ODEN Nexus** (`investigative`): Open Data & Evidence Network, forensic timeline graphing engine for investigative journalism & FOIA.
    5. **MiniBarnMaster** (`climate`): Climate-engineered structural planning engine for PNW agricultural sheds & geodesic domes.
    6. **LifeCreatesArt** (`fine-art`): Fine art preservation & cataloging engine with client-side WebAssembly HEIC transcoding.
- **Narrative Alignment & Identity (`src/types.ts` & `src/components/ProfileHeroCard.tsx`)**:
  - Implemented authoritative hero tagline: *"I see systems where others see only code."*
  - Added subtitle and verified pronouns (`He/They`).
  - Integrated sponsorship callout banner: *"Seeking sponsors, not just employers—leaders who understand that inclusion isn't simply about accommodation, but about unlocking perspectives that see around corners."*
- **Filterable Ventures UI (`src/components/VenturesSection.tsx`)**:
  - Added responsive filter tabs: *All Ventures*, *Flagship Platforms*, *Investigative Graph (ODEN)*, *Climate & Domes (MiniBarnMaster)*, and *Fine Art & Wasm (LifeCreatesArt)*.
  - Implemented category-specific badges with distinct semantic colors and borders.
  - Added support for client attribution tags (e.g., *Client: Robert Barnes*), active date indicators, and domain-specific tech chips (Wasm, Canvas, Graphology).
- **Backend & AI Consultant Synchronization (`server.ts`)**:
  - Updated `/api/gemini/consult` prompt and fallback responses with all 6 ventures, client histories, and sponsorship philosophy.
- **Testing & Post-Refactor Invariants (`tests/unit/portfolio.test.ts`)**:
  - Created automated test suite with Vitest verifying identity invariants, all 6 venture items, category distributions, and AstroNight gaming items.
  - Test suite passing: 3/3 passed in 312ms.
- **Verification**:
  - `npm test`: 100% passing.
  - `npm run lint` (`tsc --noEmit`): 0 warnings, 0 errors.
  - `npm run build`: Production bundle successful.

---

## [2.0.2] - 2026-09-15 20:45:00 UTC
### Dual-Persona Architecture: Christopher Barnes (SRE Lead) & AstroNight (Gaming Creator)
- **Persona Delineation Architecture (Approach 1 Approved & Implemented)**:
  - **Type Contracts (`src/types.ts`)**:
    - Added `GamingFocusItem` interface (`id`, `name`, `genre`, `tagline`, `focus`, `highlights`, `icon`, `status`).
    - Added `GamingProfile` interface (`tag`, `title`, `bio`, `platforms`, `games`).
    - Extended `FounderProfile` with optional `gamingProfile?: GamingProfile`.
  - **Data Integration (`src/data/mockData.ts`)**:
    - Updated `astroNightProfile.bio` to reflect creator focus across procedural sandboxes and strategic games.
    - Added structured `gamingProfile` defining:
      * **Hytale**: Adventure RPG & world-building, server architecture, modding systems.
      * **Minecraft**: Technical sandbox, complex Redstone computational logic, automated farming, SMP.
      * **Chess**: Classical & rapid strategy, spatial board geometry, cognitive pattern recognition.
    - Merged full ex-Citi Equity Derivatives (EQD) track record (99.98% availability, $2.5M+/day desk flow, 30% MTTR reduction, follow-the-sun APAC/EMEA/NAM support) into the professional profile.
  - **UI Implementation (`src/components/ProfileHeroCard.tsx`)**:
    - Replaced generic toggle labels with `🛠️ Christopher Barnes, SRE` and `🎮 AstroNight (Gaming Tag)`.
    - Implemented conditional rendering on right column:
      * **Christopher Barnes Mode**: Displays ex-Citi EQD SRE production scorecard with 99.98% availability, $2.5M+/day flow, -30% MTTR, -60% repeat incidents, and follow-the-sun model.
      * **AstroNight Mode**: Displays Gaming Focus Matrix (Hytale, Minecraft, Chess) with tags, status chips, highlights, and direct community links (YouTube, Discord).
    - Added quick AI prompt adaptation ("Ask AI Avatar" switches prompt between gaming focus and Citi uptime).
  - **Server AI Prompting & Fallbacks (`server.ts`)**:
    - Updated intelligent fallback to recognize gaming keywords (`astronight`, `hytale`, `minecraft`, `chess`, `youtube`, `discord`).
    - Updated Gemini 2.5 Flash system prompt to separate Christopher Barnes (senior SRE lead, ex-Citi EQD) from AstroNight (tactical gaming and sandbox creator).
  - **Verification**:
    - Type check passed with 0 errors (`tsc --noEmit`).
    - Production bundle build passed (`npm run build`).

---

## [2.0.1] - 2026-09-15 20:25:00 UTC
### Architecture & Governance Upgrade (Safety-Critical & WCAG AA Protocol)
- **Agent Instructions Overhaul (`AGENTS.md`)**:
  - Implemented Senior Software Architect (Strategy Mode) & Safety-Critical Engineering Lead workflow.
  - Formally codified NASA JPL "Power of 10" Safety-Critical Software Rules (deterministic flow, loop bounds, memory lifecycle, 60-line function limits, 2 assertions/function, minimal scope, return validation, static config constants, <=2 indirection levels, zero-warning compilation).
  - Codified mandatory Post-Refactor Protocol (automated unit tests in `/tests/unit/*.test.ts`, scorecard re-auditing, green test/lint/build suite verification).
  - Codified WCAG 2.1 & 2.2 Level AA accessibility invariants across Perceivable, Operable, Understandable, and Robust criteria.
  - Implemented Dual-Cadence Changelog governance (`CHANGELOG_DEV.md` high-frequency vs. `CHANGELOG.md` milestone frequency, with version drift detection).
- **Documentation Suite Expansion**:
  - Created `/Docs/CHANGELOG_DEV.md` (this high-frequency engineering log).
  - Created `/Docs/CHANGELOG.md` (public milestone release history).
  - Created `/Docs/INDEX_AUDIT.md` (safety scorecard, Power of 10 compliance, WCAG AA compliance, and modularity metrics).
  - Created `/Docs/INDEX_MARKETING.md` (LinkedIn, X/Twitter, and Discord social copy templates, positioning Chris Barnes's SRE track record).
  - Updated `/Docs/README.md` and `/Docs/STRUCTURE.md` to reflect full documentation suite.

---

## [2.0.0] - 2026-09-15 20:15:00 UTC
### Initial StrayStromStudios Portfolio Architecture
- **Root Pivot**: Refactored application into StrayStromStudios for Christopher (Chris) Barnes (**AstroNight**).
- **Core Components Created**:
  - `src/components/ProfileHeroCard.tsx`: Centered `#astronight-profile-card` with instant toggle between AstroNight SME and Christopher Barnes SRE.
  - `src/components/VenturesSection.tsx`: Showcased RapportVerse, Ascend ATS, Mentra Collective, and New Harmony Cafe.
  - `src/components/ExperienceTimeline.tsx`: Detailed Citi Equity Derivatives 99.98% uptime, Revature DevOps, education, and volunteer leadership.
  - `src/components/CompetenciesMatrix.tsx`: High-reliability SRE, DevOps/IaC, FinTech/FIX, and Distributed Cloud Architecture.
  - `src/components/NeurodiversitySection.tsx`: Dyslexia/Dyscalculia holistic pattern recognition and live `chris-reading-mode` toggle.
  - `src/components/ConsultingSection.tsx`: Advisory track selector and direct Firestore intake to `vetted_requests`.
  - `src/components/AskSreAiModal.tsx`: Gemini 2.5 Flash technical advisor modal.
- **Server Route Added**:
  - `server.ts`: Added `/api/gemini/consult` server-side proxy route with fallback handling.
- **Pruning**:
  - Removed deprecated components (`PodsTab.tsx`, `OptionsCornerTab.tsx`, `SustainabilityTab.tsx`, `OnboardingTab.tsx`, `RulebookTab.tsx`, `VettedPortalTab.tsx`, `AstroMirrorTab.tsx`, `blackScholes.ts`).
- **Compilation & Verification**:
  - Verified `tsc --noEmit` and `vite build` completed with zero warnings and zero errors.
