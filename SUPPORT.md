# Interaction & Support Guidelines

This document outlines the support matrix, AI assistance guidelines, and human-to-human interaction procedures for the **Mentra Collective** ecosystem.

## 🤖 AI-Human Collaboration Guidelines

To maximize developer velocity and maintain pristine codebase health, all AI agents or human developers contributing to this repository MUST adhere to the following rules:

1. **Keep App.tsx Modular**:
   - Do NOT compile unrelated utilities inside `App.tsx`.
   - Use `/src/data/` for static data structures.
   - Use `/src/utils/` for heavy mathematics (e.g., Black-Scholes solver).
   - Use `/src/components/` for distinct modal overlays, footer modules, or specific sub-panels.

2. **Dyslexia & Dyscalculia Accessibility Invariant**:
   - Avoid long, wall-of-text inline code documentation. Use high-contrast bulleted lists for system explanations.
   - Preserve the toggleable "Dyslexia Reading Theme" (Georgia font with light green styling). Ensure any new custom UI modules support the `dyslexicFont` and `theme` states seamlessly.

3. **No Mocking of Database Operations**:
   - Any access requests or profile creations MUST persist to the Firebase Firestore database using the `handleFirestoreError` protocols specified in the `firebase-integration` guidelines.

---

## 👥 Human-to-Human Support Directory

For recruitment, engineering mentorship, or platform support, please contact Christopher (Chris) Barnes through the following official channels:

- **E-mail**: [Chris.Barnes.2000@me.com](mailto:Chris.Barnes.2000@me.com)
- **Phone**: +1 (253) 224-1952
- **LinkedIn**: [linkedin.com/in/ChrisBarnes2000](https://www.linkedin.com/in/ChrisBarnes2000)
- **GitHub**: [github.com/ChrisBarnes2000](https://github.com/ChrisBarnes2000)

### Mentorship & Volunteer Projects
Chris is highly active as an alumni ambassador for Revature and is a dedicated FIRST Robotics mentor. If you are an alumnus or student looking for guidance in systems architecture or DevOps pipelines, feel free to open a ticket or reach out directly!
