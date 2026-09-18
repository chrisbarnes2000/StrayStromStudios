# Changelog

All notable changes to StrayStromStudios / Christopher Barnes portfolio are documented here.

## [2.0.0] - 2026-09-15
### Changed - Complete Portfolio Rebrand (StrayStromStudios)
- **Portfolio Pivot**: Performed complete remix pivoting the application from a multi-tab financial simulator into the official engineering portfolio and consulting firm for **Christopher (Chris) Barnes** (**AstroNight**).
- **Preserved Core AstroNight / Christopher Barnes Data**: Retained and amplified all verified SRE accomplishments, Citi Equity Derivatives 99.98% uptime metrics ($2.5M+/day desk coverage), Revature DevOps leadership, education, and volunteer mentorship records.
- **Centerpiece Profile Card**: Preserved and styled `#astronight-profile-card` with instant toggle between **AstroNight SME** and **Christopher Barnes, SRE** with strict CSS selector compliance.
- **Founder Ventures Showcase**: Built dedicated showcase highlighting **RapportVerse**, **Ascend ATS**, **Mentra Collective**, **New Harmony Cafe**, and **FIRST Robotics**.
- **Removed Obsolete Financial Modules**: Pruned trading pods, options corner, sustainability ESG tables, onboarding simulations, and market rulebook.
- **Cognitive Accommodations & Dyslexia Mode**: Reinforced `chris-reading-mode` with Georgia serif typography and `#E2F0D9` soft green eye-strain reduction overlay.
- **Consulting Portal**: Engineered consultation booking interface writing directly to Cloud Firestore `vetted_requests` collection with attribute-based security compliance.
- **Ask SRE AI Advisor**: Integrated Gemini 2.5 Flash server proxy (`/api/gemini/consult`) for interactive technical questions.
- **Documentation Overhaul**: Cleared and reset `Docs/` directory, updating `package.json`, `metadata.json`, and `index.html`.


## [1.7.0] - 2026-07-02
### Added
- **Sustainability Index Modularization**: Extracted the Sustainability Index tracker, ESG asset lists, and Collective Power calculator into a dedicated component, cleaning up `App.tsx` state management.
- **State Delegation**: Transferred all sustainability-related local states out of `src/App.tsx`.
- **Drastic Line Count Reduction**: Removed ~80 lines of inline UI code from `src/App.tsx`.

## [1.6.0] - 2026-07-02
### Added
- **Onboarding Tab Modularization**: Surgically decoupled and extracted the Onboarding interactive market simulation tab, including all related states, logic, and transaction history, into a new dedicated component.
- **State Delegation**: Transferred all simulation-related local states out of `src/App.tsx`, lowering root state complexity and rendering loads.
- **Drastic Line Count Reduction**: Removed ~200 lines of complex simulation rendering code from `src/App.tsx` while keeping complete feature parity.

## [1.5.0] - 2026-07-02
### Added
- **Options Corner Tab Modularization**: Surgically decoupled and extracted the Options Corner tab, Black-Scholes calculation logic, SVG payoff payoff-profile drawing, and localized states out of `src/App.tsx` into a dedicated standalone component.
- **SRE-Grade SVG Resize Safety**: Created an interactive, responsive ResizeObserver for the SVG payoff profile, completely preventing DOM reflow limitations and loops.
- **State Delegation**: Transferred all local Options-related states out of `src/App.tsx`, lowering root state complexity and rendering loads.
- **Drastic Line Count Reduction**: Removed ~300 lines of complex visual rendering code from `src/App.tsx` while keeping complete visual and math parity.

## [1.4.0] - 2026-07-02
### Added
- **AstroNight Modularization**: Decoupled and extracted the massive AstroNight Portfolio Mirror, Public Ledger, Personal Journal, and auxiliary Gemini-based components into `/src/components/AstroMirrorTab.tsx`.
- **State Delegation**: Transferred local states (`profileViewMode`, `selectedHolding`, `eli5Result`, `newsResult`, loading states, and API endpoints) out of `src/App.tsx` into the standalone component.
- **Cognitive Theme Preservation**: Guaranteed complete feature parity and seamless compliance for Christopher's Dyslexia accessibility preferences in the new tab layout.
- **Drastic Line Count Reduction**: Removed ~500 lines of monolithic layout clutter from `src/App.tsx`, lowering cognitive load for SRE maintenance.

## [1.3.0] - 2026-07-02
### Added
- **Investment Pods Componentization**: Surgically decoupled and extracted the massive inline Investment Pods view into `src/components/PodsTab.tsx` for optimal modularity and faster loadtimes.
- **Durable Firestore Sync**: Configured write-through cloud synchronization for investment pods, proposals, active user memberships, and live vote counters.
- **Adhesion Correction**: Remodeled the "Details" action to allow comprehensive viewing of deep-dive analytical metrics and portfolios without triggering automatic pod membership.
- **Vote & Auto-Execution Engines**: Added bidirectional voting telemetry (thumbs up / thumbs down) mapped directly to backend security rules.
- **Admin Dashboard Blueprint**: Architected structural plans, role structures, and database schemas for an upcoming dynamic content moderator dashboard.

## [1.2.0] - 2026-07-02
### Added
- **Bento Grid Design Theme**: High-contrast Slate palette (`#0F172A`/`#1E293B`) with vibrant Sky Blue (`#38BDF8`) accents, Emerald/Rose profit-loss charts, and precise geometric grid configurations.
- **Firebase Firestore Integration**: Synchronized vetted access requests and live verification structures to a persistent, secure cloud database.
- **Christopher Barnes Profile**: Comprehensive DevOps & Site Reliability Engineer portfolio detailing real-world $2.5M+/day trading system support at Citi Group.
- **Dyslexia Accommodations Theme**: Toggleable soft-green background overlay and high-legibility serif fonts directly matching Christopher's presentation requirements.
- **Vetted User Portal**: Complete flow for authenticated or registered users to request secure password links, onboarding invites, and official verification badges.
- **Version Tracking**: Automated changelog display connected directly to system files.

## [1.1.0] - 2026-06-15
### Added
- **Equity Derivatives Visualizer**: Real-time Black-Scholes mathematical pricing solver.
- **Investment Pods**: Collaborative strategy groups supporting proposal creation and voting telemetry.
- **Automated ESG Filters**: Deep-learning ESG scoring pipelines ensuring zero-exposure to discriminatory lobbying.

## [1.0.0] - 2026-05-01
### Added
- **Strategic Mirroring**: Public real-time mirror of lead portfolio actions.
- **Simulated Learning Tracks**: Gamified newcomer onboarding with real-world economic scenarios.
