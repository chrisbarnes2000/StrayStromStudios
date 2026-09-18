import React from 'react';
import { 
  ShieldCheck, Server, TrendingUp, Cpu, 
  Terminal, Layers, CheckCircle2, Box 
} from 'lucide-react';
import { CompetencyCategory } from '../types';

interface CompetenciesMatrixProps {
  competencies: CompetencyCategory;
}

export const CompetenciesMatrix: React.FC<CompetenciesMatrixProps> = ({ competencies }) => {
  const categories = [
    {
      title: "Reliability & Production SRE",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      color: "emerald",
      skills: competencies.reliability,
      badge: "99.98% Standard"
    },
    {
      title: "DevOps & Cloud Infrastructure",
      icon: <Server className="w-5 h-5 text-sky-400" />,
      color: "sky",
      skills: competencies.devops,
      badge: "IaC & Kubernetes"
    },
    {
      title: "FinTech & Financial Systems",
      icon: <TrendingUp className="w-5 h-5 text-amber-400" />,
      color: "amber",
      skills: competencies.fintech,
      badge: "$2.5M+/Day Flow"
    },
    {
      title: "Distributed Architecture & UX",
      icon: <Cpu className="w-5 h-5 text-indigo-400" />,
      color: "indigo",
      skills: competencies.architecture || [
        "Full-Stack TypeScript / Node.js Architectures",
        "Cloud Firestore Real-Time DB & Attribute-Based Security Rules",
        "Server-Side API Key Encapsulation & Reverse-Proxy Security",
        "Neurodivergent Accessibility (Dynamic Typography & Soft-Green Overlays)"
      ],
      badge: "Full-Stack Security"
    }
  ];

  return (
    <section id="competencies-section" aria-labelledby="heading-competencies" className="space-y-6">
      <div>
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-indigo-400" aria-hidden="true" />
          <h2 id="heading-competencies" className="text-xl sm:text-2xl font-bold text-slate-100 tracking-tight">
            SRE &amp; Systems Architecture Competencies
          </h2>
        </div>
        <p className="text-sm text-slate-400 mt-1">
          Technical mastery honed across mission-critical financial desks and distributed production clusters.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((cat, idx) => (
          <article 
            key={idx}
            id={`competency-card-${idx}`}
            aria-labelledby={`competency-title-${idx}`}
            className="bento-card bg-slate-900/90 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <span aria-hidden="true">{cat.icon}</span>
                  <h3 id={`competency-title-${idx}`} className="text-base font-bold text-slate-100">{cat.title}</h3>
                </div>
                <span className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-slate-800 text-slate-300 border border-slate-700" aria-label={`Standard: ${cat.badge}`}>
                  {cat.badge}
                </span>
              </div>

              <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-slate-300" aria-label={`${cat.title} core capabilities`}>
                {cat.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Tech Badge Row */}
            <div className="mt-5 pt-3 border-t border-slate-800/60 flex flex-wrap gap-1.5" role="list" aria-label={`${cat.title} technology tools`}>
              {idx === 0 && ["Prometheus", "Grafana", "Loki", "Chaos Testing", "MTTR Automation"].map(t => (
                <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-950 text-slate-400 border border-slate-800">{t}</span>
              ))}
              {idx === 1 && ["Kubernetes", "Docker", "Terraform", "Jenkins", "GitHub Actions", "AWS"].map(t => (
                <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-950 text-slate-400 border border-slate-800">{t}</span>
              ))}
              {idx === 2 && ["FIX Protocol", "Equity Derivatives", "Pricing Engines", "Python Validation"].map(t => (
                <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-950 text-slate-400 border border-slate-800">{t}</span>
              ))}
              {idx === 3 && ["React", "TypeScript", "Node.js", "Express", "Firestore", "Gemini API"].map(t => (
                <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-950 text-slate-400 border border-slate-800">{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
