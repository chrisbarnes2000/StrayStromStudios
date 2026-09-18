import React, { useState } from 'react';
import { 
  Terminal, ShieldCheck, Mail, Phone, Github, Linkedin, 
  MapPin, Award, CheckCircle2, BookOpen, Sparkles, Cpu,
  Server, Activity, ExternalLink, Zap, Gamepad2, Play, MessageSquare, Swords
} from 'lucide-react';
import { FounderProfile } from '../types';

interface ProfileHeroCardProps {
  profile: FounderProfile;
  chrisReadingMode: boolean;
  onToggleReadingMode: () => void;
  onOpenAiConsult?: (initialPrompt?: string) => void;
  onNavigateToSection?: (sectionId: string) => void;
}

export const ProfileHeroCard: React.FC<ProfileHeroCardProps> = ({
  profile,
  chrisReadingMode,
  onToggleReadingMode,
  onOpenAiConsult,
  onNavigateToSection
}) => {
  const [activePersona, setActivePersona] = useState<'astronight' | 'christopher'>('christopher');

  const isAstro = activePersona === 'astronight';
  const gaming = profile.gamingProfile;

  return (
    <div 
      id="astronight-profile-card"
      className="bento-card border border-slate-700/80 bg-slate-900/90 rounded-2xl p-6 shadow-xl transition-all duration-300 relative overflow-hidden"
    >
      {/* Background ambient gradient flare */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header with dual persona toggle */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-xl shadow-inner" aria-hidden="true">
            {isAstro ? '🎮' : '🛠️'}
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-semibold uppercase tracking-wider text-sky-400">
                {isAstro ? 'Gaming / YouTube / Discord Tag' : 'Resilient Systems Specialist | Ex-Citi EQD'}
              </span>
              {profile.pronouns && (
                <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800 text-slate-300 border border-slate-700" aria-label={`Pronouns: ${profile.pronouns}`}>
                  {profile.pronouns}
                </span>
              )}
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true"></span>
                <span>{isAstro ? 'Content & Strategy' : 'Active for SRE Consulting'}</span>
              </span>
            </div>
            <h1 className="text-2xl font-bold text-slate-100 tracking-tight mt-0.5">
              {isAstro ? `${profile.name} (AstroNight)` : profile.realName}
            </h1>
            {!isAstro && profile.heroTagline && (
              <p className="text-xs font-medium text-slate-400 italic mt-0.5">
                "{profile.heroTagline}"
              </p>
            )}
          </div>
        </div>

        {/* The persona selector buttons */}
        <div className="flex items-center bg-slate-950/80 p-1 rounded-xl border border-slate-800 self-stretch sm:self-auto shadow-inner" role="group" aria-label="Persona view selector">
          <button
            id="btn-persona-christopher"
            type="button"
            aria-pressed={!isAstro}
            onClick={() => setActivePersona('christopher')}
            className={`flex-1 sm:flex-initial px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 flex items-center justify-center gap-1.5 focus-visible:ring-2 focus-visible:ring-sky-400 outline-none ${
              !isAstro 
                ? 'bg-sky-500 text-slate-950 shadow-md font-bold' 
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <span aria-hidden="true">🛠️</span>
            <span>Christopher Barnes, SRE</span>
          </button>
          <button
            id="btn-persona-astronight"
            type="button"
            aria-pressed={isAstro}
            onClick={() => setActivePersona('astronight')}
            className={`flex-1 sm:flex-initial px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 flex items-center justify-center gap-1.5 focus-visible:ring-2 focus-visible:ring-purple-400 outline-none ${
              isAstro 
                ? 'bg-purple-500 text-white shadow-md font-bold' 
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <span aria-hidden="true">🎮</span>
            <span>AstroNight (Gaming Tag)</span>
          </button>
        </div>
      </div>

      {/* Main Body */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left column: Bio & Identity */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
              {isAstro ? 'Tag: AstroNight • Hytale / Minecraft / Chess' : 'Profile: Christopher Barnes • DevOps Architect & SRE Lead'}
            </span>
          </div>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {isAstro 
              ? profile.bio 
              : profile.cvDetails.professionalProfile}
          </p>

          {/* Context callout: SRE Invariant vs. Gaming Approach */}
          {isAstro ? (
            <div className="p-3.5 rounded-xl bg-purple-950/40 border border-purple-900/50 flex items-start gap-3">
              <Gamepad2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-purple-400 block mb-0.5">
                  Gaming Tag Philosophy: AstroNight
                </span>
                <p className="text-xs text-slate-300 leading-normal">
                  Exploring high-complexity sandboxes and strategy: Redstone computational circuits in Minecraft, procedural generation and modding systems in Hytale, and board geometry in Chess.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 block mb-0.5">
                    Cognitive Superpower &amp; Methodology
                  </span>
                  <p className="text-xs text-slate-300 leading-normal">
                    {profile.cvDetails.cognitiveApproach}
                  </p>
                </div>
              </div>

              {profile.sponsorshipStatement && (
                <div className="p-3 rounded-xl bg-sky-950/30 border border-sky-800/40 flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-xs text-sky-200 leading-normal italic">
                    "{profile.sponsorshipStatement}"
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Contact and social chips */}
          <div className="flex flex-wrap items-center gap-2 pt-1" role="list" aria-label="Direct contact links">
            <a 
              id="link-profile-email"
              href={`mailto:${profile.email}`}
              aria-label={`Send email to Christopher Barnes at ${profile.email}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors focus-visible:ring-2 focus-visible:ring-sky-400 outline-none"
            >
              <Mail className="w-3.5 h-3.5 text-sky-400" aria-hidden="true" />
              <span>{profile.email}</span>
            </a>

            <a 
              id="link-profile-phone"
              href={`tel:${profile.phone.replace(/[^0-9]/g, '')}`}
              aria-label={`Call Christopher Barnes at ${profile.phone}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400 outline-none"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
              <span>{profile.phone}</span>
            </a>

            <a 
              id="link-profile-github"
              href={profile.github}
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="View Christopher Barnes GitHub profile (opens in new tab)"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-400 outline-none"
            >
              <Github className="w-3.5 h-3.5 text-indigo-400" aria-hidden="true" />
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3 text-slate-400" aria-hidden="true" />
            </a>

            <a 
              id="link-profile-linkedin"
              href={profile.linkedin}
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="View Christopher Barnes LinkedIn profile (opens in new tab)"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors focus-visible:ring-2 focus-visible:ring-blue-400 outline-none"
            >
              <Linkedin className="w-3.5 h-3.5 text-blue-400" aria-hidden="true" />
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3 text-slate-400" aria-hidden="true" />
            </a>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-950/60 text-slate-400 border border-slate-800" aria-label={`Location: ${profile.location}`}>
              <MapPin className="w-3.5 h-3.5 text-rose-400" aria-hidden="true" />
              <span>{profile.location}</span>
            </div>
          </div>
        </div>

        {/* Right column: Dynamic Display (SRE Track Record vs. Gaming Focus Matrix) */}
        <div className="lg:col-span-5 space-y-3">
          {isAstro && gaming ? (
            /* Gaming Focus Matrix: Hytale / Minecraft / Chess */
            <div className="p-4 rounded-xl bg-slate-950/80 border border-purple-900/40 shadow-inner" role="region" aria-label="AstroNight Gaming Focus Matrix">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-300 flex items-center gap-1.5">
                  <Gamepad2 className="w-4 h-4 text-purple-400" aria-hidden="true" />
                  AstroNight Gaming Focus
                </span>
                <span className="text-[11px] font-mono text-purple-400">YouTube / Discord</span>
              </div>

              <div className="space-y-2.5">
                {gaming.games.map((game) => (
                  <div key={game.id} className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-purple-800/50 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-100 flex items-center gap-1.5">
                        <span aria-hidden="true">{game.icon}</span>
                        <span>{game.name}</span>
                      </span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-purple-950/80 text-purple-300 border border-purple-800/40 font-mono">
                        {game.status}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1">{game.tagline}</div>
                    <div className="flex flex-wrap gap-1 mt-1.5">
                      {game.highlights.map((hl, idx) => (
                        <span key={idx} className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800/80 text-slate-300">
                          {hl}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Platform Community Links */}
              <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-400">Community Hubs:</span>
                <div className="flex items-center gap-2">
                  {gaming.platforms.youtube && (
                    <a 
                      href={gaming.platforms.youtube} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Visit AstroNight on YouTube"
                      className="inline-flex items-center gap-1 text-red-400 hover:text-red-300 transition-colors font-medium text-[11px] focus-visible:ring-2 focus-visible:ring-red-400 outline-none"
                    >
                      <Play className="w-3 h-3 fill-red-400" aria-hidden="true" />
                      <span>YouTube</span>
                    </a>
                  )}
                  {gaming.platforms.discord && (
                    <a 
                      href={gaming.platforms.discord} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Join AstroNight Discord Community"
                      className="inline-flex items-center gap-1 text-indigo-400 hover:text-indigo-300 transition-colors font-medium text-[11px] focus-visible:ring-2 focus-visible:ring-indigo-400 outline-none"
                    >
                      <MessageSquare className="w-3 h-3" aria-hidden="true" />
                      <span>Discord</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ) : (
            /* Professional SRE Scorecard (Citi EQD + Revature) */
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 shadow-inner" role="region" aria-label="Citi Equity Derivatives SRE Track Record Metrics">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                  Citi EQD SRE Track Record
                </span>
                <span className="text-[11px] font-mono text-sky-400">Equity Derivatives</span>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800">
                  <div className="text-xl font-mono font-bold text-emerald-400 tracking-tight" aria-hidden="true">99.98%</div>
                  <div className="text-[11px] text-slate-400">System Availability</div>
                  <span className="sr-only">Production reliability standard: 99.98% high availability supporting Citi Equity Derivatives desks.</span>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800">
                  <div className="text-xl font-mono font-bold text-sky-400 tracking-tight" aria-hidden="true">$2.5M+/day</div>
                  <div className="text-[11px] text-slate-400">Trading Desk Flow</div>
                  <span className="sr-only">Financial volume: In excess of 2.5 million dollars daily trading desk order flow.</span>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800">
                  <div className="text-xl font-mono font-bold text-amber-400 tracking-tight" aria-hidden="true">-30%</div>
                  <div className="text-[11px] text-slate-400">MTTR Resolution Time</div>
                  <span className="sr-only">Incident response improvement: 30 percent reduction in Mean Time To Resolution.</span>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800">
                  <div className="text-xl font-mono font-bold text-indigo-400 tracking-tight" aria-hidden="true">-60%</div>
                  <div className="text-[11px] text-slate-400">Repeat Incidents (RCA)</div>
                  <span className="sr-only">Root cause analysis impact: 60 percent reduction in repeat production incidents.</span>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-400">Follow-The-Sun Model</span>
                <span className="text-slate-200 font-medium">APAC • EMEA • NAM</span>
              </div>
            </div>
          )}

          {/* Dyslexia reading mode toggle card */}
          <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
              <div>
                <div className="text-xs font-semibold text-slate-200">Chris's Reading Mode</div>
                <div className="text-[11px] text-slate-400">Georgia font + #E2F0D9 soft green</div>
              </div>
            </div>

            <button
              id="btn-toggle-chris-reading"
              type="button"
              onClick={onToggleReadingMode}
              aria-pressed={chrisReadingMode}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-emerald-400 outline-none ${
                chrisReadingMode
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <span>{chrisReadingMode ? 'Active' : 'Enable'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer quick action row */}
      <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span className="font-semibold text-slate-300">
            {isAstro ? 'Gaming Focus:' : 'Professional SRE:'}
          </span>
          {isAstro ? (
            <>
              <span>Hytale World-Building</span>
              <span aria-hidden="true">•</span>
              <span>Minecraft Redstone Logic</span>
              <span aria-hidden="true">•</span>
              <span>Tactical Chess</span>
            </>
          ) : (
            <>
              <span>Ex-Citi Equity Derivatives</span>
              <span aria-hidden="true">•</span>
              <span>99.98% High Availability</span>
              <span aria-hidden="true">•</span>
              <span>Zero-Downtime CI/CD</span>
            </>
          )}
        </div>

        <div className="flex items-center gap-2">
          {onOpenAiConsult && (
            <button
              id="btn-ask-sre-ai-quick"
              type="button"
              onClick={() => onOpenAiConsult(isAstro ? "What is AstroNight's focus in Hytale, Minecraft, and Chess?" : "How did Chris maintain 99.98% uptime at Citi?")}
              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 transition-all flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-indigo-400 outline-none"
            >
              <Zap className="w-3.5 h-3.5 text-indigo-400" aria-hidden="true" />
              <span>Ask AI Avatar</span>
            </button>
          )}

          {onNavigateToSection && (
            <button
              id="btn-inquire-consult-quick"
              type="button"
              onClick={() => onNavigateToSection('consulting')}
              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold transition-all flex items-center gap-1.5 shadow focus-visible:ring-2 focus-visible:ring-sky-400 outline-none"
            >
              <span>Book Architecture Consultation</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
