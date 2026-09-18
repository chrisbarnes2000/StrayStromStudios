import React, { useState, useEffect } from 'react';
import { 
  Sparkles, X, Send, Bot, User, CheckCircle2, 
  HelpCircle, RefreshCw, Terminal, AlertCircle 
} from 'lucide-react';

interface AskSreAiModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPrompt?: string;
}

interface Message {
  role: 'user' | 'assistant';
  text: string;
  isFallback?: boolean;
}

export const AskSreAiModal: React.FC<AskSreAiModalProps> = ({
  isOpen,
  onClose,
  initialPrompt
}) => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      text: "Hello! I am Christopher Barnes's SRE AI Advisor. You can ask me anything about Chris's 99.98% uptime track record at Citi, his founder ventures (RapportVerse, Ascend ATS, Mentra Collective), DevOps & Kubernetes architecture, or his neurodivergent engineering philosophy."
    }
  ]);

  const suggestions = [
    "How did Chris maintain 99.98% uptime for Citi equity derivatives?",
    "What are Chris's architectural contributions to RapportVerse and Ascend ATS?",
    "How does Chris turn Dyslexia/Dyscalculia into an SRE superpower?",
    "What CI/CD and Kubernetes practices does Chris advocate for?"
  ];

  useEffect(() => {
    if (initialPrompt && isOpen) {
      handleAsk(initialPrompt);
    }
  }, [initialPrompt, isOpen]);

  // Handle Escape key to dismiss dialog
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleAsk = async (questionText: string) => {
    if (!questionText.trim() || loading) return;

    const userMsg: Message = { role: 'user', text: questionText.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/gemini/consult', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: questionText.trim() })
      });

      const data = await res.json();
      const botMsg: Message = {
        role: 'assistant',
        text: data.answer || "I am currently unable to retrieve a response. Please reach out to Chris directly at Chris.Barnes.2000@me.com.",
        isFallback: data.isFallback
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err: any) {
      console.error("AI consult error:", err);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          text: "Christopher Barnes is an SRE & DevOps Architect with a proven 99.98% uptime track record in high-frequency financial trading desks. He can be contacted directly at Chris.Barnes.2000@me.com."
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="dialog-title-ai-consult"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn"
    >
      <div className="w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col max-h-[85vh] overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400" aria-hidden="true">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 id="dialog-title-ai-consult" className="text-sm sm:text-base font-bold text-slate-100 flex items-center gap-2">
                <span>Ask SRE AI Advisor</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-mono">
                  Gemini 2.5 Flash
                </span>
              </h3>
              <p className="text-xs text-slate-400">Interactive architectural advisor for Christopher Barnes</p>
            </div>
          </div>

          <button
            type="button"
            aria-label="Close AI Advisor dialog"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors focus-visible:ring-2 focus-visible:ring-sky-400 outline-none"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Message Thread */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4" role="log" aria-live="polite" aria-label="Conversation history">
          {messages.map((m, idx) => (
            <div 
              key={idx}
              className={`flex gap-3 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {m.role === 'assistant' && (
                <div className="w-7 h-7 rounded-lg bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-xs shrink-0 mt-0.5" aria-hidden="true">
                  🤖
                </div>
              )}

              <div 
                className={`max-w-[85%] p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                  m.role === 'user'
                    ? 'bg-sky-500 text-slate-950 font-medium'
                    : 'bg-slate-950/80 border border-slate-800 text-slate-200'
                }`}
              >
                <div className="whitespace-pre-line">{m.text}</div>
                {m.isFallback && (
                  <div className="mt-2 pt-2 border-t border-slate-800/80 text-[10px] text-slate-400 italic">
                    Verified historical background record
                  </div>
                )}
              </div>

              {m.role === 'user' && (
                <div className="w-7 h-7 rounded-lg bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-xs shrink-0 mt-0.5" aria-hidden="true">
                  👤
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-3 text-slate-400 text-xs" role="status" aria-live="polite">
              <div className="w-7 h-7 rounded-lg bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-xs shrink-0" aria-hidden="true">
                🤖
              </div>
              <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center gap-2">
                <RefreshCw className="w-3.5 h-3.5 animate-spin text-sky-400" aria-hidden="true" />
                <span>Consulting Christopher's SRE architectural memory...</span>
              </div>
            </div>
          )}
        </div>

        {/* Suggestion Chips */}
        <div className="p-3 border-t border-slate-800/80 bg-slate-950/40 overflow-x-auto">
          <div className="flex items-center gap-1.5 min-w-max" role="group" aria-label="Suggested questions">
            <span className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider mr-1">Prompts:</span>
            {suggestions.map((s, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleAsk(s)}
                className="px-2.5 py-1 rounded-lg text-xs bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors focus-visible:ring-2 focus-visible:ring-sky-400 outline-none"
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Input Bar */}
        <div className="p-3 sm:p-4 border-t border-slate-800 bg-slate-950/70">
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              handleAsk(input);
            }} 
            className="flex items-center gap-2"
          >
            <label htmlFor="ai-consult-input" className="sr-only">
              Ask Christopher's SRE AI Advisor a question
            </label>
            <input
              id="ai-consult-input"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about 99.98% uptime, Kubernetes, RapportVerse, or consulting..."
              className="flex-1 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs sm:text-sm text-slate-100 focus:outline-none focus:border-sky-500 focus-visible:ring-2 focus-visible:ring-sky-400"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 disabled:opacity-50 text-slate-950 font-bold text-xs transition-all flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-sky-400 outline-none"
            >
              <Send className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Ask</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
