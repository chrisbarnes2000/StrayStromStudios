import React from 'react';
import { 
  Briefcase, GraduationCap, Users, ShieldCheck, 
  Calendar, MapPin, CheckCircle2, TrendingUp, Award 
} from 'lucide-react';
import { WorkExperienceItem, EducationItem, VolunteerLeadershipItem } from '../types';

interface ExperienceTimelineProps {
  workExperience: WorkExperienceItem[];
  education: EducationItem[];
  volunteerLeadership: VolunteerLeadershipItem[];
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({
  workExperience,
  education,
  volunteerLeadership
}) => {
  return (
    <section id="experience-section" className="space-y-8">
      {/* Section Header */}
      <div>
        <div className="flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-emerald-400" aria-hidden="true" />
          <h2 className="text-xl sm:text-2xl font-bold text-slate-100 tracking-tight">
            Engineering Experience &amp; High-Availability Track Record
          </h2>
        </div>
        <p className="text-sm text-slate-400 mt-1">
          High-frequency financial systems, DevOps leadership, and production-tested site reliability.
        </p>
      </div>

      {/* Work Experience Timeline */}
      <div className="space-y-6" role="feed" aria-label="Professional work experience history">
        {workExperience.map((job, idx) => (
          <article 
            key={idx}
            id={`job-card-${idx}`}
            aria-labelledby={`job-role-${idx}`}
            className="bento-card bg-slate-900/90 border border-slate-800 rounded-2xl p-6 relative overflow-hidden"
          >
            {/* Top row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800">
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 id={`job-role-${idx}`} className="text-lg font-bold text-slate-100">{job.role}</h3>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {job.company}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-xs text-slate-400 mt-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" aria-hidden="true" />
                    <span>{job.location}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" aria-hidden="true" />
                    <span>{job.period}</span>
                  </span>
                </div>
              </div>

              {job.company.includes("Citi") && (
                <div className="flex items-center gap-2 self-start sm:self-auto bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800">
                  <ShieldCheck className="w-4 h-4 text-sky-400" aria-hidden="true" />
                  <span className="text-xs font-mono font-bold text-sky-300">99.98% UPTIME</span>
                </div>
              )}
            </div>

            {/* Bullets */}
            <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed" aria-label={`Accomplishments at ${job.company}`}>
              {job.bullets.map((bullet, bIdx) => (
                <li key={bIdx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      {/* Two-column layout for Education & Leadership */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        {/* Education */}
        <section aria-labelledby="heading-education" className="bento-card bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4">
          <div className="flex items-center gap-2 text-slate-100">
            <GraduationCap className="w-5 h-5 text-sky-400" aria-hidden="true" />
            <h3 id="heading-education" className="text-lg font-bold">Education &amp; Applied Sciences</h3>
          </div>

          <div className="space-y-4">
            {education.map((edu, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <div className="text-sm font-semibold text-slate-200">{edu.degree}</div>
                <div className="flex items-center justify-between text-xs text-slate-400 mt-1">
                  <span>{edu.school}</span>
                  <span className="font-mono">{edu.period}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Volunteer & Mentorship */}
        <section aria-labelledby="heading-community-leadership" className="bento-card bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4">
          <div className="flex items-center gap-2 text-slate-100">
            <Users className="w-5 h-5 text-indigo-400" aria-hidden="true" />
            <h3 id="heading-community-leadership" className="text-lg font-bold">Community Leadership &amp; Mentorship</h3>
          </div>

          <div className="space-y-4">
            {volunteerLeadership.map((vol, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-slate-200">{vol.role}</div>
                  <span className="text-[11px] font-mono text-slate-500">{vol.period}</span>
                </div>
                <div className="text-xs text-sky-400 font-medium mt-0.5">{vol.organization}</div>
                <p className="text-xs text-slate-300 mt-1.5 leading-normal">{vol.details}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};
