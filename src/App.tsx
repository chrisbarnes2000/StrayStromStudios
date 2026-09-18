import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, Sparkles, BookOpen, Terminal, 
  Briefcase, Rocket, Layers, Mail, Calendar, 
  Github, Linkedin, Phone, ExternalLink, Sliders, Check
} from 'lucide-react';
import { astroNightProfile, founderVentures } from './data/mockData';
import { ProfileHeroCard } from './components/ProfileHeroCard';
import { VenturesSection } from './components/VenturesSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { CompetenciesMatrix } from './components/CompetenciesMatrix';
import { NeurodiversitySection } from './components/NeurodiversitySection';
import { ConsultingSection } from './components/ConsultingSection';
import { AskSreAiModal } from './components/AskSreAiModal';

export interface NavSection {
  id: string;
  label: string;
  elementId: string;
}

export const NAV_SECTIONS: readonly NavSection[] = [
  { id: 'overview', label: 'Overview', elementId: 'astronight-profile-card' },
  { id: 'ventures', label: 'Ventures', elementId: 'ventures-section' },
  { id: 'experience', label: 'Experience', elementId: 'experience-section' },
  { id: 'competencies', label: 'Competencies', elementId: 'competencies-section' },
  { id: 'cognitive', label: 'Cognitive', elementId: 'neurodiversity-section' },
  { id: 'consulting', label: 'Consulting', elementId: 'consulting-section' },
] as const;

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('overview');
  const [chrisReadingMode, setChrisReadingMode] = useState<boolean>(false);
  const [sensoryMenuOpen, setSensoryMenuOpen] = useState<boolean>(false);
  const [largeText, setLargeText] = useState<boolean>(false);
  const [aiModalOpen, setAiModalOpen] = useState<boolean>(false);
  const [aiInitialPrompt, setAiInitialPrompt] = useState<string | undefined>(undefined);

  const handleOpenAiConsult = (prompt?: string) => {
    setAiInitialPrompt(prompt);
    setAiModalOpen(true);
  };

  const handleScrollTo = (targetIdOrKey: string) => {
    const navSection = NAV_SECTIONS.find(
      s => s.id === targetIdOrKey || s.elementId === targetIdOrKey
    );
    const elementId = navSection ? navSection.elementId : targetIdOrKey;
    if (navSection) {
      setActiveSection(navSection.id);
    }
    const el = document.getElementById(elementId);
    if (el) {
      const headerOffset = 76;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Dynamic scroll-spy effect with requestAnimationFrame and bounded iterations
  useEffect(() => {
    let ticking = false;

    const updateActiveSectionOnScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Boundary 1: At the very top
      if (scrollY < 100) {
        setActiveSection('overview');
        return;
      }

      // Boundary 2: At or near bottom of document
      if (windowHeight + scrollY >= docHeight - 80) {
        setActiveSection('consulting');
        return;
      }

      // Boundary 3: Determine section closest to header threshold
      const headerOffset = 110;
      let currentActive = NAV_SECTIONS[0].id;
      let minDistance = Infinity;

      for (let i = 0; i < NAV_SECTIONS.length && i < 10; i++) {
        const section = NAV_SECTIONS[i];
        const el = document.getElementById(section.elementId);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        // If section header is above offset and bottom is still below offset
        if (rect.top <= headerOffset && rect.bottom > headerOffset) {
          currentActive = section.id;
          minDistance = 0;
          break;
        }

        const distance = Math.abs(rect.top - headerOffset);
        if (distance < minDistance) {
          minDistance = distance;
          currentActive = section.id;
        }
      }

      setActiveSection(currentActive);
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveSectionOnScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateActiveSectionOnScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      className={`min-h-screen transition-colors duration-200 ${
        chrisReadingMode 
          ? 'chris-reading-mode' 
          : 'bg-slate-950 text-slate-100'
      } ${largeText ? 'text-size-large' : ''}`}
    >
      {/* 
        DOM Hierarchy Guarantee:
        div#root:nth-of-type(1) 
          > div:nth-of-type(1) [Outer App Wrapper]
            > div:nth-of-type(1) [Header & Navigation Bar]
            > div:nth-of-type(2) [Main Container]
      */}

      {/* Accessible Skip to Main Content Link for Speechify, Screen Readers & Keyboard Navigation */}
      <a 
        id="skip-to-content-link"
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-sky-500 focus:text-slate-950 focus:font-bold focus:rounded-lg focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-white"
      >
        Skip to main content
      </a>

      {/* 1. Header & Navigation Bar (div:nth-of-type(1)) */}
      <header role="banner" className="border-b border-slate-800/80 bg-slate-900/80 backdrop-blur sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Brand Logo & Name */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center font-mono font-black text-slate-950 text-sm shadow-md" aria-hidden="true">
              SS
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm sm:text-base tracking-tight text-slate-100">
                  StrayStromStudios
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20" aria-label="Version 2.0.0">
                  v2.0.0
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">
                Christopher Barnes • SRE Architect &amp; DevOps Advisory
              </p>
            </div>
          </div>

          {/* Nav Links with Dynamic Scrollspy Highlighting */}
          <nav 
            id="header-nav-bar" 
            aria-label="Main Portfolio Navigation"
            className={`hidden md:flex items-center gap-1 text-xs font-semibold p-1 rounded-xl transition-colors duration-200 ${
              chrisReadingMode
                ? 'bg-slate-800/80 border border-emerald-800/40 text-slate-200 shadow-inner'
                : 'bg-slate-950/70 border border-slate-800/90 text-slate-300 shadow-inner backdrop-blur-sm'
            }`}
          >
            {/* 1. Overview */}
            <button 
              id="nav-btn-overview"
              type="button" 
              onClick={() => handleScrollTo('overview')}
              aria-current={activeSection === 'overview' ? 'page' : undefined}
              className={`px-3 py-1.5 rounded-lg transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap border focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-1 focus-visible:ring-offset-slate-900 outline-none ${
                activeSection === 'overview'
                  ? chrisReadingMode
                    ? 'bg-emerald-700/30 text-emerald-200 border-emerald-500/50 shadow-sm font-bold'
                    : 'bg-sky-500/20 text-sky-300 border-sky-500/40 shadow-sm font-bold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 border-transparent'
              }`}
            >
              {activeSection === 'overview' && (
                <span 
                  aria-hidden="true"
                  className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                    chrisReadingMode ? 'bg-emerald-400' : 'bg-sky-400 animate-pulse'
                  }`} 
                />
              )}
              <span>Overview</span>
            </button>

            {/* 2. Ventures */}
            <button 
              id="nav-btn-ventures"
              type="button" 
              onClick={() => handleScrollTo('ventures')}
              aria-current={activeSection === 'ventures' ? 'page' : undefined}
              className={`px-3 py-1.5 rounded-lg transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap border focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-1 focus-visible:ring-offset-slate-900 outline-none ${
                activeSection === 'ventures'
                  ? chrisReadingMode
                    ? 'bg-emerald-700/30 text-emerald-200 border-emerald-500/50 shadow-sm font-bold'
                    : 'bg-sky-500/20 text-sky-300 border-sky-500/40 shadow-sm font-bold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 border-transparent'
              }`}
            >
              {activeSection === 'ventures' && (
                <span 
                  aria-hidden="true"
                  className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                    chrisReadingMode ? 'bg-emerald-400' : 'bg-sky-400 animate-pulse'
                  }`} 
                />
              )}
              <span>Ventures</span>
            </button>

            {/* 3. Experience */}
            <button 
              id="nav-btn-experience"
              type="button" 
              onClick={() => handleScrollTo('experience')}
              aria-current={activeSection === 'experience' ? 'page' : undefined}
              className={`px-3 py-1.5 rounded-lg transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap border focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-1 focus-visible:ring-offset-slate-900 outline-none ${
                activeSection === 'experience'
                  ? chrisReadingMode
                    ? 'bg-emerald-700/30 text-emerald-200 border-emerald-500/50 shadow-sm font-bold'
                    : 'bg-sky-500/20 text-sky-300 border-sky-500/40 shadow-sm font-bold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 border-transparent'
              }`}
            >
              {activeSection === 'experience' && (
                <span 
                  aria-hidden="true"
                  className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                    chrisReadingMode ? 'bg-emerald-400' : 'bg-sky-400 animate-pulse'
                  }`} 
                />
              )}
              <span>Experience</span>
            </button>

            {/* 4. Competencies */}
            <button 
              id="nav-btn-competencies"
              type="button" 
              onClick={() => handleScrollTo('competencies')}
              aria-current={activeSection === 'competencies' ? 'page' : undefined}
              className={`px-3 py-1.5 rounded-lg transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap border focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-1 focus-visible:ring-offset-slate-900 outline-none ${
                activeSection === 'competencies'
                  ? chrisReadingMode
                    ? 'bg-emerald-700/30 text-emerald-200 border-emerald-500/50 shadow-sm font-bold'
                    : 'bg-sky-500/20 text-sky-300 border-sky-500/40 shadow-sm font-bold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 border-transparent'
              }`}
            >
              {activeSection === 'competencies' && (
                <span 
                  aria-hidden="true"
                  className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                    chrisReadingMode ? 'bg-emerald-400' : 'bg-sky-400 animate-pulse'
                  }`} 
                />
              )}
              <span>Competencies</span>
            </button>

            {/* 5. Cognitive */}
            <button 
              id="nav-btn-cognitive"
              type="button" 
              onClick={() => handleScrollTo('cognitive')}
              aria-current={activeSection === 'cognitive' ? 'page' : undefined}
              className={`px-3 py-1.5 rounded-lg transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap border focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-1 focus-visible:ring-offset-slate-900 outline-none ${
                activeSection === 'cognitive'
                  ? chrisReadingMode
                    ? 'bg-emerald-700/30 text-emerald-200 border-emerald-500/50 shadow-sm font-bold'
                    : 'bg-sky-500/20 text-sky-300 border-sky-500/40 shadow-sm font-bold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 border-transparent'
              }`}
            >
              {activeSection === 'cognitive' && (
                <span 
                  aria-hidden="true"
                  className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                    chrisReadingMode ? 'bg-emerald-400' : 'bg-sky-400 animate-pulse'
                  }`} 
                />
              )}
              <span>Cognitive</span>
            </button>

            {/* 6. Consulting */}
            <button 
              id="nav-btn-consulting"
              type="button" 
              onClick={() => handleScrollTo('consulting')}
              aria-current={activeSection === 'consulting' ? 'page' : undefined}
              className={`px-3 py-1.5 rounded-lg transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap border focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-1 focus-visible:ring-offset-slate-900 outline-none ${
                activeSection === 'consulting'
                  ? chrisReadingMode
                    ? 'bg-emerald-700/30 text-emerald-200 border-emerald-500/50 shadow-sm font-bold'
                    : 'bg-sky-500/20 text-sky-300 border-sky-500/40 shadow-sm font-bold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 border-transparent'
              }`}
            >
              {activeSection === 'consulting' && (
                <span 
                  aria-hidden="true"
                  className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                    chrisReadingMode ? 'bg-emerald-400' : 'bg-sky-400 animate-pulse'
                  }`} 
                />
              )}
              <span>Consulting</span>
            </button>
          </nav>

          {/* Quick Actions */}
          <div className="flex items-center gap-2">
            {/* Ask AI Advisor Button */}
            <button
              id="btn-nav-ask-ai"
              type="button"
              onClick={() => handleOpenAiConsult()}
              className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 transition-all flex items-center gap-1.5"
              title="Ask Chris's SRE AI Avatar (Gemini 2.5 Flash)"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span className="hidden sm:inline">Ask SRE AI</span>
            </button>

            {/* Chris's Reading Mode Direct Toggle */}
            <button
              id="btn-nav-toggle-chris-reading"
              type="button"
              onClick={() => setChrisReadingMode(!chrisReadingMode)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                chrisReadingMode
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700'
              }`}
              title="Toggle Chris's Reading Mode (Georgia font & soft-green #E2F0D9 overlay)"
            >
              <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden md:inline">Chris Reading</span>
            </button>

            {/* Sensory Settings Drawer / Dropdown */}
            <div className="relative">
              <button
                type="button"
                aria-expanded={sensoryMenuOpen}
                aria-haspopup="true"
                aria-label="Sensory and accessibility preferences menu"
                onClick={() => setSensoryMenuOpen(!sensoryMenuOpen)}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors focus-visible:ring-2 focus-visible:ring-sky-400 outline-none"
                title="Sensory & Accessibility Preferences"
              >
                <Sliders className="w-4 h-4" aria-hidden="true" />
              </button>

              {sensoryMenuOpen && (
                <div 
                  role="dialog" 
                  aria-label="Sensory and accessibility preferences" 
                  className="absolute right-0 mt-2 w-64 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl p-4 z-50 text-xs space-y-3"
                >
                  <div className="font-bold text-slate-200 pb-2 border-b border-slate-800 flex items-center justify-between">
                    <span>Accessibility &amp; Sensory</span>
                    <button 
                      type="button" 
                      aria-label="Close preferences menu"
                      onClick={() => setSensoryMenuOpen(false)}
                      className="text-slate-400 hover:text-slate-200 focus-visible:ring-2 focus-visible:ring-sky-400 outline-none rounded p-0.5"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Chris's Reading Theme</span>
                    <button
                      type="button"
                      aria-pressed={chrisReadingMode}
                      onClick={() => setChrisReadingMode(!chrisReadingMode)}
                      className={`px-2 py-1 rounded font-semibold text-[11px] focus-visible:ring-2 focus-visible:ring-emerald-400 outline-none ${
                        chrisReadingMode ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {chrisReadingMode ? 'Active' : 'Off'}
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Enlarge Text Size</span>
                    <button
                      type="button"
                      aria-pressed={largeText}
                      onClick={() => setLargeText(!largeText)}
                      className={`px-2 py-1 rounded font-semibold text-[11px] focus-visible:ring-2 focus-visible:ring-sky-400 outline-none ${
                        largeText ? 'bg-sky-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {largeText ? '+10%' : 'Standard'}
                    </button>
                  </div>

                  <div className="pt-2 border-t border-slate-800 text-[10px] text-slate-400 leading-normal">
                    Optimized for non-linear pattern recognition, eye strain reduction, and high contrast legibility.
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* 2. Main Content Container (semantic <main> for Speechify & Screen Readers) */}
      <main id="main-content" role="main" tabIndex={-1} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 outline-none">
        {/* 
          div:nth-of-type(1) inside main
          Contains the first column div:nth-of-type(1) enclosing #astronight-profile-card
        */}
        <div className="space-y-12">
          {/* div:nth-of-type(1) enclosing the profile card */}
          <div>
            <ProfileHeroCard 
              profile={astroNightProfile}
              chrisReadingMode={chrisReadingMode}
              onToggleReadingMode={() => setChrisReadingMode(!chrisReadingMode)}
              onOpenAiConsult={handleOpenAiConsult}
              onNavigateToSection={handleScrollTo}
            />
          </div>

          {/* Founder Ventures Showcase */}
          <VenturesSection 
            ventures={founderVentures}
            onOpenAiConsult={handleOpenAiConsult}
          />

          {/* Production SRE Experience & Track Record */}
          <ExperienceTimeline 
            workExperience={astroNightProfile.cvDetails.workExperience}
            education={astroNightProfile.cvDetails.education}
            volunteerLeadership={astroNightProfile.cvDetails.volunteerLeadership}
          />

          {/* SRE & DevOps Competencies Matrix */}
          <CompetenciesMatrix 
            competencies={astroNightProfile.cvDetails.competencies}
          />

          {/* Cognitive Superpowers & Dyslexia Accessibility Section */}
          <NeurodiversitySection 
            accommodations={astroNightProfile.cvDetails.accommodations}
            chrisReadingMode={chrisReadingMode}
            onToggleReadingMode={() => setChrisReadingMode(!chrisReadingMode)}
          />

          {/* Consulting Engagements & Booking Portal */}
          <ConsultingSection />
        </div>
      </main>

      {/* Footer */}
      <footer role="contentinfo" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 border-t border-slate-800/80 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-bold text-slate-300">StrayStromStudios</span>
          <span>•</span>
          <span>Christopher Barnes (AstroNight)</span>
          <span>•</span>
          <span>Bonney Lake, WA</span>
        </div>

        <div className="flex items-center gap-4 text-slate-400">
          <a href="mailto:Chris.Barnes.2000@me.com" className="hover:text-slate-200 transition-colors">
            Chris.Barnes.2000@me.com
          </a>
          <span>•</span>
          <a href="https://github.com/ChrisBarnes2000" target="_blank" rel="noopener noreferrer" className="hover:text-slate-200 transition-colors">
            GitHub
          </a>
          <span>•</span>
          <a href="https://linkedin.com/in/ChrisBarnes2000" target="_blank" rel="noopener noreferrer" className="hover:text-slate-200 transition-colors">
            LinkedIn
          </a>
        </div>
      </footer>

      {/* Interactive AI Advisor Modal */}
      <AskSreAiModal 
        isOpen={aiModalOpen}
        onClose={() => setAiModalOpen(false)}
        initialPrompt={aiInitialPrompt}
      />
    </div>
  );
}
