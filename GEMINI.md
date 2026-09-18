# GEMINI.md — Gemini API Guidelines & Smart Integration Patterns

This document outlines the standard patterns, model guidelines, and system integration strategies for leveraging the **@google/genai TypeScript SDK** within Mentra Collective and the upcoming Stochastic Sage suite.

---

## 🤖 Model Recommendation Matrix

Always select the optimal model according to functional complexity and latency constraints:

| Capability / Task | Model Selection | Rationale |
| :--- | :--- | :--- |
| **Real-time ELI5 Explanations** | `gemini-2.5-flash` | Low latency, highly optimized for structured text synthesis. |
| **Quant Tuning Recommendations** | `gemini-2.5-flash` | Optimal for analyzing raw mathematical curves and suggesting SRE tuning guides. |
| **Full Financial Policy Moderation** | `gemini-2.5-flash` or `gemini-2.5-pro` | High precision, structured schema output (JSON mode), complex logical matching. |
| **Advanced Multi-Modal Audits** | `gemini-2.5-flash` | Analyzes option payoffs alongside raw structural tables. |

---

## 🛠️ SDK Initialization (Server-Side Only)

To prevent client-side credential exposure and bypass CORS blocking, all Gemini API interactions must run behind server-side `/api/*` proxies.

```typescript
// server.ts or /server/gemini.ts
import { GoogleGenAI } from "@google/genai";

let aiClient: GoogleGenAI | null = null;

export function getGeminiAI(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is required on the server.");
    }
    aiClient = new GoogleGenAI({ apiKey });
  }
  return aiClient;
}
```

---

## 📝 Structured JSON Generation Patterns

For portfolio policy checking or moderation audits, always enforce a strict output schema to ensure system reliability:

```typescript
import { Type } from "@google/genai";

async function moderateOptionStrategy(description: string) {
  const ai = getGeminiAI();
  
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: `Analyze this derivative trading strategy description for compliance: "${description}"`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          isCompliant: { type: Type.BOOLEAN, description: "Whether strategy fits educational parameters" },
          riskTier: { type: Type.STRING, enum: ["LOW", "MEDIUM", "HIGH"] },
          suggestedAdjustments: { type: Type.STRING, description: "How to correct violating positions" }
        },
        required: ["isCompliant", "riskTier", "suggestedAdjustments"]
      }
    }
  });

  return JSON.parse(response.text);
}
```

---

## 🔍 System Prompting Best Practices

When engineering prompts for SRE and mathematical analysis (e.g., **PID Master** auto-tuning or **Markov Cash Flow** forecasting), structure prompts according to the following guidelines:

1. **Role Definition**: Specify the persona explicitly (e.g., *"You are a senior derivatives trader and Quantitative Risk Officer"*).
2. **Context Separation**: Clearly separate raw parameters (such as Strike, Drift, Implied Volatility, Set Point, PV) from historical context.
3. **Structured Outputs**: Use markdown block formatting or JSON structure to separate mathematical definitions from layperson (ELI5) explanations.
4. **Safety Guards**: Ensure the model appends standard financial/engineering disclaimers: *"For Educational Use Only. Simulators use mathematical models (GBM, Black-Scholes) which have inherent limitations and do not represent guaranteed future results."*
