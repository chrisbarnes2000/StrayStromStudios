import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = 3000;

// Lazy initialization of GoogleGenAI client to prevent crashing on startup if key is missing
function getGeminiClient() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === "MY_GEMINI_API_KEY" || apiKey.trim() === "") {
    return null;
  }
  return new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });
}

// 1. Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "StrayStromStudios Portfolio API", version: "2.0.0" });
});

// 2. API: Get founder ventures
app.get("/api/portfolio/ventures", (req, res) => {
  try {
    const venturesPath = path.join(process.cwd(), "src", "data", "founder_ventures.json");
    if (fs.existsSync(venturesPath)) {
      const data = fs.readFileSync(venturesPath, "utf-8");
      res.json(JSON.parse(data));
    } else {
      res.status(404).json({ error: "Founder ventures file not found" });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// Cache for AI responses
interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

const aiConsultCache = new Map<string, CacheEntry<any>>();
const CACHE_TTL = 15 * 60 * 1000; // 15 minutes

// 3. API: SRE & Architecture AI Consultant (Ask Chris's AI Avatar)
app.post("/api/gemini/consult", async (req, res) => {
  const { question, category } = req.body;

  if (!question || typeof question !== "string" || question.trim() === "") {
    return res.status(400).json({ error: "Question is required" });
  }

  const normalizedQ = question.trim().toLowerCase();
  const cached = aiConsultCache.get(normalizedQ);
  if (cached && (Date.now() - cached.timestamp < CACHE_TTL)) {
    return res.json(cached.data);
  }

  const ai = getGeminiClient();
  if (!ai) {
    // Intelligent fallback responses reflecting Chris's real SRE profile, ex-Citi EQD experience, and AstroNight gaming focus
    let fallbackText = "Christopher Barnes is an SRE & DevOps Architect who maintained 99.98% uptime for Citi's $2.5M+/day equity derivatives trading platforms. He also operates under the gaming/creator tag AstroNight, focusing on Hytale, Minecraft (Redstone engineering), and tactical Chess.";
    
    if (normalizedQ.includes("astronight") || normalizedQ.includes("game") || normalizedQ.includes("gaming") || normalizedQ.includes("minecraft") || normalizedQ.includes("hytale") || normalizedQ.includes("chess") || normalizedQ.includes("youtube") || normalizedQ.includes("discord")) {
      fallbackText = "AstroNight is Chris's gaming, YouTube, and Discord tag! His content and gaming focus center on high-complexity systems: Hytale (adventure RPG, procedural generation, and community server modding), Minecraft (computational Redstone logic and technical survival multiplayer), and Chess (positional board geometry and pattern recognition).";
    } else if (normalizedQ.includes("citi") || normalizedQ.includes("uptime") || normalizedQ.includes("hft") || normalizedQ.includes("eqd") || normalizedQ.includes("derivatives")) {
      fallbackText = "In his professional career at Citi (via Revature), Christopher Barnes served as Application Support Analyst for Equity Derivatives desks trading $2.5M+/day. He engineered 99.98% system availability, resolved 95% of critical incidents in <15-minute SLAs, spearheaded the global APAC/EMEA/NAM follow-the-sun support model reducing MTTR by 30%, reduced repeat incidents by 60% through root cause analysis, and automated trade flows and ServiceNow reporting (+85% compliance transparency).";
    } else if (normalizedQ.includes("venture") || normalizedQ.includes("rapportverse") || normalizedQ.includes("ascend") || normalizedQ.includes("mentra") || normalizedQ.includes("oden") || normalizedQ.includes("minibarn") || normalizedQ.includes("lifecreatesart")) {
      fallbackText = "Chris has founded and architected 6 key ventures: RapportVerse (authentic professional networking with communication topology), Ascend ATS (privacy-first inclusive hiring with deterministic skills matching), Mentra Collective (accessible options modeling terminal), ODEN Nexus (unified investigative graph mapping terminal for FOIA/journalism), MiniBarnMaster (climate-engineered PNW shed & geodesic dome planning), and LifeCreatesArt (fine art archiving with WebAssembly HEIC transcoding).";
    } else if (normalizedQ.includes("neurodivers") || normalizedQ.includes("dyslexi") || normalizedQ.includes("reading") || normalizedQ.includes("accommodation")) {
      fallbackText = "Chris views Dyslexia and Dyscalculia as architectural superpowers that drive holistic, non-linear pattern recognition and system-level resilience. In this portfolio, you can test 'Chris's Reading Mode'—which applies Georgia serif typography and a soft green overlay (#E2F0D9) optimized for visual tracking.";
    } else if (normalizedQ.includes("hire") || normalizedQ.includes("consult") || normalizedQ.includes("contact") || normalizedQ.includes("sponsor")) {
      fallbackText = "Chris is available for DevOps/SRE architecture consulting, reliability audits, CI/CD pipeline modernization, and technical advisory. As Chris notes: 'Seeking sponsors, not just employers—leaders who understand that inclusion isn't simply about accommodation, but about unlocking perspectives that see around corners.' Reach out directly at Chris.Barnes.2000@me.com or +1 (253) 224-1952.";
    }

    const fallbackResponse = {
      answer: fallbackText,
      isFallback: true,
      suggestedFollowUps: [
        "What is AstroNight's focus in Hytale, Minecraft, and Chess?",
        "How did Christopher Barnes maintain 99.98% uptime for Citi's equity derivatives desks?",
        "What are Chris's architectural contributions to RapportVerse and Ascend ATS?"
      ],
      notice: "Showing verified background data. To enable dynamic generative AI responses, configure GEMINI_API_KEY."
    };

    aiConsultCache.set(normalizedQ, { data: fallbackResponse, timestamp: Date.now() });
    return res.json(fallbackResponse);
  }

  try {
    const prompt = `You are the interactive AI Technical & Gaming Advisor for Christopher (Chris) Barnes, whose gaming, YouTube, and Discord tag is AstroNight.
You are embedded on his official portfolio website: StrayStromStudios.

CHRIS'S VERIFIED PROFESSIONAL SRE PROFILE (CHRISTOPHER BARNES):
- Lead SRE & DevOps Architect with a distinguished background at Citi Group (Application Support Analyst for Equity Derivatives desks handling $2.5M+/day).
- Maintained 99.98% system availability in high-frequency trading (HFT) and equity derivatives environments.
- Implemented global APAC/EMEA/NAM follow-the-sun support model, reducing incident resolution time by 30% and boosting team productivity by 30%.
- Conducted proactive root cause analyses reducing repeat incidents by 60% and downtime by 80%.
- Developed onboarding programs reducing new hire ramp-up by 70%.
- Built automated Python validation scripts improving accuracy by 25%.
- Tech Stack: Kubernetes, Docker, Terraform, AWS, Jenkins, GitHub Actions, Grafana, Prometheus, Loki, Python, TypeScript, Node.js, Express, React, Firebase Firestore, FIX Protocol.
- Founder Ventures:
  * StrayStromStudios (Consulting firm)
  * RapportVerse (Founder & Lead Architect, authentic networking & communication analytics)
  * Ascend ATS (Founder & Lead Architect, privacy-first applicant tracking with deterministic skills matching & candidate accommodation workflows)
  * Mentra Collective (Founder & Lead SRE, decoupled financial modeling and options analytics)
  * ODEN Nexus (Founder & Lead Architect, investigative graph mapping terminal for FOIA/journalism)
  * MiniBarnMaster (Full-Stack Architect & Lead SRE, climate-engineered shed/dome planning)
  * LifeCreatesArt (Full-Stack Architect & Lead Engineer, fine art archiving with WebAssembly HEIC transcoding)

CHRIS'S PHILOSOPHY & SPONSORSHIP:
- Hero Tagline: "I see systems where others see only code."
- Subtitle: "Resilience is designed in, not patched on."
- Sponsorship Statement: "Seeking sponsors, not just employers—leaders who understand that inclusion isn't simply about accommodation, but about unlocking perspectives that see around corners."

CHRIS'S GAMING & CREATOR PROFILE (ASTRONIGHT):
- Tag: AstroNight (used across gaming, YouTube, and Discord).
- Current Gaming Focus:
  1. Hytale: Adventure RPG, procedural world-building, server architecture, modding systems, and community exploration.
  2. Minecraft: Technical sandbox, complex Redstone computational logic, automated farming systems, and survival multiplayer (SMP).
  3. Chess: Classical and rapid strategy, spatial board geometry, and cognitive pattern recognition leveraging dyslexia's holistic spatial strengths.

NEURODIVERSITY & COGNITIVE APPROACH:
- Diagnosed with Dyslexia and Dyscalculia; utilizes this for holistic system-level thinking, 3D/spatial topology, and non-linear architectural pattern recognition.
- Preferences: Georgia serif font with soft-green (#E2F0D9) canvas overlay ("Chris's Reading Mode"); scenario-based assessments; human-evaluated interviews.
- Education: Bachelor of Applied Computer Science from Dominican University of California (2019-2021); Associate of Science from Pierce College at Puyallup (2017-2019).
- Volunteer: FIRST Robotics Mentor (Graham Kapowsin High School), Revature Alumni Ambassador.
- Contact: Chris.Barnes.2000@me.com, (253) 224-1952, Bonney Lake, WA.

USER QUESTION: "${question}"
CATEGORY: "${category || 'General'}"

INSTRUCTIONS:
1. If the user asks about gaming, YouTube, Discord, Hytale, Minecraft, or Chess, address them from the perspective of AstroNight the gamer/creator with enthusiasm and technical depth.
2. If the user asks about SRE, Citi, DevOps, high availability, or architecture consulting, represent Christopher Barnes the senior SRE lead with quantified production metrics.
3. Answer directly, concisely, and professionally (2-4 paragraphs or crisp bulleted points).
4. End with 2-3 relevant suggested follow-up questions.
5. Output your response formatted in clean markdown.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    const answer = response.text || "Christopher Barnes is a DevOps Architect and Site Reliability Engineer specializing in resilient distributed systems.";
    
    const result = {
      answer,
      isFallback: false,
      suggestedFollowUps: [
        "How does Chris approach high-stakes reliability and incident response?",
        "Tell me more about Chris's founder ventures (RapportVerse & Ascend ATS)",
        "What are Chris's consulting specialties and engagement models?"
      ]
    };

    aiConsultCache.set(normalizedQ, { data: result, timestamp: Date.now() });
    res.json(result);
  } catch (err: any) {
    console.error("Gemini consult error:", err);
    res.json({
      answer: "Christopher Barnes is a DevOps Architect & Site Reliability Engineer who maintained 99.98% uptime for Citi's $2.5M+/day equity derivatives trading platforms. He is available for SRE architecture consulting, reliability audits, and systems engineering.",
      isFallback: true,
      error: err.message
    });
  }
});

// Vite Middleware & Routing
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
