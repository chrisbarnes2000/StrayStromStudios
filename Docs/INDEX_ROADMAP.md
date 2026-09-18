# StrayStromStudios Engineering Roadmap (`INDEX_ROADMAP.md`)

*System Milestones, Planned Architecture Enhancements, and Complexity Triggers*

---

## 🚦 Roadmap Triggers & Complexity Policy

In accordance with `AGENTS.md` and safety-critical engineering policies:
- **Direct Refactor Trigger**: When any file exceeds **500 lines** or a feature change involves **>10 files**, do not apply direct ad-hoc edits. Pause and specify a formal phased proposal in this document first.
- **Methodology Gaps**: Unclear or conflicting logic triggers an immediate audit in `/Docs/INDEX_AUDIT.md`.
- **Mandatory Post-Refactor Protocol**: Following each milestone implementation, execute automated tests, re-evaluate scorecards in `/Docs/INDEX_AUDIT.md`, and verify zero-warning compilation.

---

## 📍 Milestones & System Pillars

### Milestone 1: Core Portfolio & SRE Advisory Architecture (Completed - v2.0.0)
- [x] **Dual-Persona Profile Engine**: Interactive centerpiece `#astronight-profile-card` toggling between AstroNight SME and Christopher Barnes SRE.
- [x] **Verified Metrics Showcase**: 99.98% System Availability at Citi Group supporting $2.5M+/day in equity derivatives flow, -30% MTTR, -60% repeat incidents.
- [x] **Founder Ventures Showcase**: Interactive architecture cards for RapportVerse, Ascend ATS, Mentra Collective, and New Harmony Cafe.
- [x] **SRE & Production Timeline**: Chronological track of Citi Group Equity Derivatives support, Revature DevOps leadership, academic achievements, and FIRST Robotics mentorship.
- [x] **Competencies Matrix**: SRE, DevOps & IaC, FinTech & FIX protocol, and Distributed Cloud Architecture.
- [x] **Cognitive Diversity & Dyslexia Mode**: Live toggle for `chris-reading-mode` (Georgia font + `#E2F0D9` soft green eye-strain reduction overlay).
- [x] **Consulting Intake Portal**: Direct client inquiry form persisting into Cloud Firestore `vetted_requests` collection with attribute-based security verification.
- [x] **Ask SRE AI Advisor**: Server-side Gemini 2.5 Flash proxy (`/api/gemini/consult`) with fallback intelligence.
- [x] **Documentation & Governance Suite**: Complete overhaul of `AGENTS.md`, `README.md`, `CHANGELOG_DEV.md`, `CHANGELOG.md`, `STRUCTURE.md`, `INDEX_AUDIT.md`, and `INDEX_MARKETING.md`.

---

### Milestone 2: Interactive SRE Runbook Simulator (Planned - v2.1.0)
- [ ] **Interactive Terminal Sandbox**: Web-based xterm-styled terminal demonstrating automated Python algorithmic trade validation and FIX message parser.
- [ ] **Simulated Chaos Engineering Scenario**: Interactive failure injection scenario (e.g. simulated exchange disconnect) showing automated failover handling and telemetry alerts.
- [ ] **Direct Calendar Booking Integration**: Optional modal integration for scheduling direct 30-minute SRE reliability consultations.
- [ ] **Telemetry Dashboard Widget**: Visual latency distribution chart and synthetic SLA monitor demonstrating Chris's real-time monitoring philosophies.

---

### Milestone 3: Venture Deep-Dive Portals (Future - v2.2.0)
- [ ] **RapportVerse Interactive Node Graph**: Visual representation of the trust-topology algorithm and mathematical rapport scoring.
- [ ] **Ascend ATS Blind Screening Sandbox**: Interactive demo showing how deterministic skills extraction replaces subjective CV screening.
- [ ] **Comprehensive Test Automation**: Jest/Vitest suite covering all boundary invariants and fallback states in `/tests/unit/*.test.ts`.
