import React from 'react';
import { 
  Sparkles, BookOpen, CheckCircle2, Eye, 
  HelpCircle, Lightbulb, Compass, HeartHandshake 
} from 'lucide-react';

interface NeurodiversitySectionProps {
  accommodations: string[];
  chrisReadingMode: boolean;
  onToggleReadingMode: () => void;
}

export const NeurodiversitySection: React.FC<NeurodiversitySectionProps> = ({
  accommodations,
  chrisReadingMode,
  onToggleReadingMode
}) => {
  return (
    <section id="neurodiversity-section" aria-labelledby="heading-neurodiversity" className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" aria-hidden="true" />
            <h2 id="heading-neurodiversity" className="text-xl sm:text-2xl font-bold text-slate-100 tracking-tight">
              Cognitive Diversity &amp; Systemic Thinking
            </h2>
          </div>
          <p className="text-sm text-slate-400 mt-1">
            Transforming Dyslexia and Dyscalculia into holistic architectural pattern recognition and fault-tolerant system design.
          </p>
        </div>

        {/* Live Reading Mode Toggle Button */}
        <button
          id="btn-neurodiversity-reading-toggle"
          type="button"
          aria-pressed={chrisReadingMode}
          aria-label={chrisReadingMode ? "Disable Chris Reading Mode (soft green overlay and Georgia font)" : "Enable Chris Reading Mode (soft green overlay and Georgia font)"}
          onClick={onToggleReadingMode}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 shadow-md focus-visible:ring-2 focus-visible:ring-emerald-400 outline-none ${
            chrisReadingMode
              ? 'bg-emerald-600 hover:bg-emerald-500 text-white'
              : 'bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
          }`}
        >
          <BookOpen className="w-4 h-4" aria-hidden="true" />
          <span>{chrisReadingMode ? 'Disable Chris Reading Mode' : 'Experience Chris Reading Mode'}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: The Cognitive Advantage */}
        <section aria-labelledby="heading-cognitive-advantage" className="lg:col-span-7 bento-card bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4">
          <h3 id="heading-cognitive-advantage" className="text-base font-bold text-slate-100 flex items-center gap-2">
            <Compass className="w-4 h-4 text-sky-400" aria-hidden="true" />
            <span>The Non-Linear SRE Advantage</span>
          </h3>

          <p className="text-sm text-slate-300 leading-relaxed">
            Dyslexic and dyscalculic cognition processes information holistically rather than linearly. In software reliability and distributed architecture, this is a profound asset:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
              <div className="text-xs font-bold text-amber-400">Macro-System Mapping</div>
              <p className="text-xs text-slate-400 leading-normal">
                Instantly grasps complex multi-tiered dependency webs, uncovering subtle cascading failure points before they manifest in production.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
              <div className="text-xs font-bold text-sky-400">Chaos Pattern Recognition</div>
              <p className="text-xs text-slate-400 leading-normal">
                Excels in anomalous state recovery during high-pressure triage, identifying root causes that linear checklists miss.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
              <div className="text-xs font-bold text-emerald-400">Proactive Automation</div>
              <p className="text-xs text-slate-400 leading-normal">
                Eliminates repetitive manual friction by automating validation scripts, runbooks, and self-healing cluster policies.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
              <div className="text-xs font-bold text-indigo-400">Empathy-Driven Tooling</div>
              <p className="text-xs text-slate-400 leading-normal">
                Designs clear documentation and intuitive developer workflows that reduce cognitive fatigue across whole engineering teams.
              </p>
            </div>
          </div>
        </section>

        {/* Right Column: Accommodations Matrix */}
        <section aria-labelledby="heading-accommodations-matrix" className="lg:col-span-5 bento-card bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4">
          <h3 id="heading-accommodations-matrix" className="text-base font-bold text-slate-100 flex items-center gap-2">
            <HeartHandshake className="w-4 h-4 text-emerald-400" aria-hidden="true" />
            <span>Inclusive Collaboration &amp; Interview Standards</span>
          </h3>

          <p className="text-xs text-slate-400 leading-normal">
            Christopher openly champions equitable hiring and accessible working environments. His proven baseline accommodations include:
          </p>

          <ul className="space-y-2.5 text-xs text-slate-300" aria-label="Workplace accommodation standards">
            {accommodations.map((acc, idx) => (
              <li key={idx} className="flex items-start gap-2.5 p-2 rounded-lg bg-slate-950/50 border border-slate-800/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                <span>{acc}</span>
              </li>
            ))}
          </ul>

          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300">
            <span className="font-semibold block mb-0.5">Live Accessibility Sandbox:</span>
            When you toggle "Chris Reading Mode", this application immediately applies Georgia serif typography and the optimal soft green overlay (<code className="font-mono text-emerald-200">#E2F0D9</code>) designed for sustained visual tracking.
          </div>
        </section>
      </div>
    </section>
  );
};
