import React, { useState } from 'react';
import { 
  Rocket, Layers, Shield, Cpu, ExternalLink, CheckCircle2, 
  Terminal, Sparkles, Code2, Database, BrainCircuit, 
  Search, Hammer, Palette, Building2, User
} from 'lucide-react';
import { FoundingVenture } from '../types';

interface VenturesSectionProps {
  ventures: FoundingVenture[];
  onOpenAiConsult?: (initialPrompt?: string) => void;
}

type CategoryFilter = 'all' | 'flagship' | 'investigative' | 'climate' | 'fine-art';

export const VenturesSection: React.FC<VenturesSectionProps> = ({ ventures, onOpenAiConsult }) => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');

  const filteredVentures = ventures.filter(v => {
    if (activeFilter === 'all') return true;
    return v.category === activeFilter;
  });

  const getCategoryBadge = (category?: string) => {
    switch (category) {
      case 'flagship':
        return { label: 'Flagship Platform', color: 'text-sky-400 bg-sky-500/10 border-sky-500/30' };
      case 'investigative':
        return { label: 'Investigative & FOIA', color: 'text-amber-400 bg-amber-500/10 border-amber-500/30' };
      case 'climate':
        return { label: 'Climate & Structural', color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30' };
      case 'fine-art':
        return { label: 'Fine Art & Media Wasm', color: 'text-purple-400 bg-purple-500/10 border-purple-500/30' };
      default:
        return { label: 'Venture System', color: 'text-slate-400 bg-slate-800 border-slate-700' };
    }
  };

  return (
    <section id="ventures-section" className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <Rocket className="w-5 h-5 text-sky-400" />
            <h2 className="text-xl sm:text-2xl font-bold text-slate-100 tracking-tight">
              Founder Ventures &amp; Architectural Systems
            </h2>
          </div>
          <p className="text-sm text-slate-400 mt-1">
            Enterprise platforms, forensic graphing engines, and climate/fine-art systems architected by Chris Barnes.
          </p>
        </div>

        {onOpenAiConsult && (
          <button
            type="button"
            onClick={() => onOpenAiConsult("Tell me about Chris's architectural contributions to RapportVerse, Ascend ATS, ODEN Nexus, and MiniBarnMaster.")}
            className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1.5 self-start sm:self-auto bg-indigo-500/10 px-3 py-1.5 rounded-lg border border-indigo-500/20"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ask AI about Architecture</span>
          </button>
        )}
      </div>

      {/* Filter Tabs */}
      <div 
        role="tablist" 
        aria-label="Filter founder ventures by category" 
        className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none"
      >
        <button
          type="button"
          role="tab"
          id="tab-ventures-all"
          aria-selected={activeFilter === 'all'}
          onClick={() => setActiveFilter('all')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all focus-visible:ring-2 focus-visible:ring-sky-400 outline-none ${
            activeFilter === 'all'
              ? 'bg-sky-500 text-slate-950 font-bold shadow'
              : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
          }`}
        >
          All Ventures ({ventures.length})
        </button>

        <button
          type="button"
          role="tab"
          id="tab-ventures-flagship"
          aria-selected={activeFilter === 'flagship'}
          onClick={() => setActiveFilter('flagship')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all focus-visible:ring-2 focus-visible:ring-sky-400 outline-none ${
            activeFilter === 'flagship'
              ? 'bg-sky-500 text-slate-950 font-bold shadow'
              : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
          }`}
        >
          Flagship Platforms (3)
        </button>

        <button
          type="button"
          role="tab"
          id="tab-ventures-investigative"
          aria-selected={activeFilter === 'investigative'}
          onClick={() => setActiveFilter('investigative')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all focus-visible:ring-2 focus-visible:ring-amber-400 outline-none ${
            activeFilter === 'investigative'
              ? 'bg-amber-500 text-slate-950 font-bold shadow'
              : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
          }`}
        >
          Investigative Graph (ODEN)
        </button>

        <button
          type="button"
          role="tab"
          id="tab-ventures-climate"
          aria-selected={activeFilter === 'climate'}
          onClick={() => setActiveFilter('climate')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all focus-visible:ring-2 focus-visible:ring-emerald-400 outline-none ${
            activeFilter === 'climate'
              ? 'bg-emerald-500 text-slate-950 font-bold shadow'
              : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
          }`}
        >
          Climate &amp; Domes (MiniBarnMaster)
        </button>

        <button
          type="button"
          role="tab"
          id="tab-ventures-fine-art"
          aria-selected={activeFilter === 'fine-art'}
          onClick={() => setActiveFilter('fine-art')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all focus-visible:ring-2 focus-visible:ring-purple-400 outline-none ${
            activeFilter === 'fine-art'
              ? 'bg-purple-500 text-slate-950 font-bold shadow'
              : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
          }`}
        >
          Fine Art &amp; Wasm (LifeCreatesArt)
        </button>
      </div>

      {/* Grid of Ventures */}
      <div 
        role="tabpanel" 
        id="panel-ventures-list" 
        aria-label="Ventures and architectural systems list"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredVentures.map((venture, idx) => {
          const badge = getCategoryBadge(venture.category);
          return (
            <article 
              key={venture.project || idx}
              id={`venture-card-${venture.project.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              aria-labelledby={`venture-title-${venture.project.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              className="bento-card bg-slate-900/90 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between hover:border-slate-700 transition-all duration-200 group"
            >
              <div className="space-y-4">
                {/* Top Badge & Role */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-semibold border ${badge.color}`}>
                        {badge.label}
                      </span>
                      {venture.dates && (
                        <span className="text-[10px] font-mono text-slate-400">
                          {venture.dates}
                        </span>
                      )}
                    </div>
                    <h3 
                      id={`venture-title-${venture.project.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                      className="text-lg font-bold text-slate-100 group-hover:text-sky-300 transition-colors"
                    >
                      {venture.project}
                    </h3>
                    <div className="text-[11px] font-semibold text-sky-400 mt-0.5">
                      {venture.role}
                    </div>
                  </div>

                  {venture.client && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-950 text-slate-300 border border-slate-800 shrink-0 flex items-center gap-1">
                      <User className="w-3 h-3 text-slate-400" aria-hidden="true" />
                      <span>{venture.client}</span>
                    </span>
                  )}
                </div>

                {/* Tagline & Mission */}
                <p className="text-xs text-slate-300 font-medium leading-relaxed">
                  {venture.tagline}
                </p>

                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs text-slate-400 leading-normal">
                  <span className="font-semibold text-slate-300 block mb-1">Mission:</span>
                  {venture.mission}
                </div>

                {/* Architectural Highlights */}
                <div className="space-y-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">
                    Key Architectural Contributions
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {venture.key_architectural_contributions.map((item, i) => {
                      if (typeof item === 'string') {
                        return (
                          <li key={i} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                            <span>{item}</span>
                          </li>
                        );
                      }
                      return (
                        <li key={i} className="flex flex-col gap-0.5 bg-slate-950/40 p-2 rounded-lg border border-slate-800/60">
                          <div className="flex items-center gap-1.5 font-medium text-slate-200">
                            <CheckCircle2 className="w-3 h-3 text-sky-400 shrink-0" aria-hidden="true" />
                            <span>{item.feature}</span>
                          </div>
                          <span className="text-[11px] text-slate-400 pl-4">{item.description}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              {/* Tech Stack Chips */}
              <div className="mt-5 pt-4 border-t border-slate-800/80 space-y-2">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 block">
                  Tech Stack
                </span>
                <div className="flex flex-wrap gap-1.5" role="list" aria-label={`Technologies used in ${venture.project}`}>
                  {venture.technologies.frontend.slice(0, 3).map((tech, tIdx) => (
                    <span key={tIdx} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-sky-300 border border-slate-700">
                      {tech}
                    </span>
                  ))}
                  {venture.technologies.backend.slice(0, 2).map((tech, tIdx) => (
                    <span key={tIdx} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-indigo-300 border border-slate-700">
                      {tech}
                    </span>
                  ))}
                  {venture.technologies.database.slice(0, 2).map((tech, tIdx) => (
                    <span key={tIdx} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-emerald-300 border border-slate-700">
                      {tech}
                    </span>
                  ))}
                  {venture.technologies.intelligence_engine && venture.technologies.intelligence_engine.slice(0, 1).map((tech, tIdx) => (
                    <span key={tIdx} className="px-2 py-0.5 rounded text-[10px] font-mono bg-indigo-950 text-indigo-300 border border-indigo-800">
                      {tech}
                    </span>
                  ))}
                  {venture.technologies.media_processing && venture.technologies.media_processing.slice(0, 1).map((tech, tIdx) => (
                    <span key={tIdx} className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-950 text-purple-300 border border-purple-800">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
