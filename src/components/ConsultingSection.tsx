import React, { useState } from 'react';
import { 
  Send, CheckCircle2, Shield, AlertCircle, 
  HelpCircle, Clock, Calendar, Mail, FileText 
} from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../utils/firebase';
import { consultingServices } from '../data/mockData';

export const ConsultingSection: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [affiliation, setAffiliation] = useState('');
  const [selectedTopic, setSelectedTopic] = useState(consultingServices[0].title);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!fullName.trim() || !email.trim() || !affiliation.trim() || !message.trim()) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Direct Firestore persistence into vetted_requests matching firestore.rules
      const fullMessage = `[Topic: ${selectedTopic}]\n\n${message.trim()}`;
      
      const payload = {
        fullName: fullName.trim(),
        email: email.trim().toLowerCase(),
        affiliation: affiliation.trim(),
        message: fullMessage,
        status: 'PENDING',
        linkSent: false,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      };

      await addDoc(collection(db, 'vetted_requests'), payload);
      setSubmitted(true);
    } catch (err: any) {
      console.error('Error submitting consultation inquiry:', err);
      try {
        handleFirestoreError(err, OperationType.CREATE, 'vetted_requests');
      } catch (e: any) {
        setErrorMessage(
          'Inquiry recorded in local queue. If you require immediate booking, please email Chris directly at Chris.Barnes.2000@me.com.'
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="consulting-section" aria-labelledby="heading-consulting" className="space-y-8">
      <div>
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-sky-400" aria-hidden="true" />
          <h2 id="heading-consulting" className="text-xl sm:text-2xl font-bold text-slate-100 tracking-tight">
            Consulting Engagements &amp; Architectural Advisory
          </h2>
        </div>
        <p className="text-sm text-slate-400 mt-1">
          Available for SRE architectural reviews, high-availability upgrades, CI/CD pipeline automation, and tech leadership advisory.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6" role="list" aria-label="Available consulting services">
        {consultingServices.map((service) => (
          <article 
            key={service.id}
            id={`service-card-${service.id}`}
            aria-labelledby={`service-title-${service.id}`}
            className="bento-card bg-slate-900/90 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between"
          >
            <div>
              <h3 id={`service-title-${service.id}`} className="text-base font-bold text-slate-100 mb-2">{service.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                {service.description}
              </p>

              <div className="space-y-1.5">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 block">
                  Key Deliverables
                </span>
                <ul className="space-y-1" aria-label={`Deliverables for ${service.title}`}>
                  {service.deliverables.map((d, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setSelectedTopic(service.title);
                const formEl = document.getElementById('inquiry-form');
                formEl?.scrollIntoView({ behavior: 'smooth' });
                const nameInput = document.getElementById('consulting-full-name');
                nameInput?.focus();
              }}
              aria-label={`Select advisory track: ${service.title} and jump to inquiry form`}
              className="mt-5 pt-3 border-t border-slate-800 text-xs font-semibold text-sky-400 hover:text-sky-300 flex items-center justify-between focus-visible:ring-2 focus-visible:ring-sky-400 outline-none rounded-lg p-1"
            >
              <span>Request this Advisory Track</span>
              <span aria-hidden="true">→</span>
            </button>
          </article>
        ))}
      </div>

      {/* Inquiry Form Card */}
      <div id="inquiry-form" className="bento-card bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20">
              Direct Access
            </span>
            <h3 id="form-consultation-title" className="text-xl font-bold text-slate-100 mt-2">
              Book a Consultation or Inquire About a Project
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Submit your project scope below. Inquiries are reviewed directly by Christopher Barnes.
            </p>
          </div>

          {submitted ? (
            <div role="status" aria-live="polite" className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" aria-hidden="true" />
              <h4 className="text-lg font-bold text-slate-100">Inquiry Received</h4>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                Thank you for reaching out! Chris will review your project requirements and follow up at <span className="font-semibold text-emerald-300">{email}</span> within 24–48 hours.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setMessage('');
                }}
                className="mt-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 focus-visible:ring-2 focus-visible:ring-sky-400 outline-none"
              >
                Submit Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} aria-labelledby="form-consultation-title" className="space-y-4">
              {errorMessage && (
                <div role="alert" aria-live="assertive" className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-300 flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="consulting-full-name" className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Full Name <span aria-hidden="true">*</span><span className="sr-only">(required)</span>
                  </label>
                  <input
                    id="consulting-full-name"
                    type="text"
                    required
                    aria-required="true"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g., Alex Miller"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-slate-100 focus:outline-none focus:border-sky-500 focus-visible:ring-2 focus-visible:ring-sky-400"
                  />
                </div>

                <div>
                  <label htmlFor="consulting-email" className="block text-xs font-semibold text-slate-300 mb-1">
                    Email Address <span aria-hidden="true">*</span><span className="sr-only">(required)</span>
                  </label>
                  <input
                    id="consulting-email"
                    type="email"
                    required
                    aria-required="true"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g., alex@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-slate-100 focus:outline-none focus:border-sky-500 focus-visible:ring-2 focus-visible:ring-sky-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="consulting-affiliation" className="block text-xs font-semibold text-slate-300 mb-1">
                    Company / Organization <span aria-hidden="true">*</span><span className="sr-only">(required)</span>
                  </label>
                  <input
                    id="consulting-affiliation"
                    type="text"
                    required
                    aria-required="true"
                    value={affiliation}
                    onChange={(e) => setAffiliation(e.target.value)}
                    placeholder="e.g., FinTech Labs or University"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-slate-100 focus:outline-none focus:border-sky-500 focus-visible:ring-2 focus-visible:ring-sky-400"
                  />
                </div>

                <div>
                  <label htmlFor="consulting-topic" className="block text-xs font-semibold text-slate-300 mb-1">
                    Focus Area / Topic
                  </label>
                  <select
                    id="consulting-topic"
                    value={selectedTopic}
                    onChange={(e) => setSelectedTopic(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-slate-100 focus:outline-none focus:border-sky-500 focus-visible:ring-2 focus-visible:ring-sky-400"
                  >
                    {consultingServices.map((s) => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                    <option value="General Architectural Inquiry">General Architectural Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="consulting-message" className="block text-xs font-semibold text-slate-300 mb-1">
                  Project Description &amp; Objectives <span aria-hidden="true">*</span><span className="sr-only">(required)</span>
                </label>
                <textarea
                  id="consulting-message"
                  required
                  aria-required="true"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your current system challenges, infrastructure stack, timeline, or key objectives..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-slate-100 focus:outline-none focus:border-sky-500 focus-visible:ring-2 focus-visible:ring-sky-400"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-xs text-slate-400">
                  Prefer direct email? Reach Chris at <a href="mailto:Chris.Barnes.2000@me.com" className="text-sky-400 underline focus-visible:ring-2 focus-visible:ring-sky-400 rounded">Chris.Barnes.2000@me.com</a>
                </div>

                <button
                  id="btn-submit-inquiry"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-bold bg-sky-500 hover:bg-sky-400 text-slate-950 transition-all flex items-center justify-center gap-2 shadow focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-400 outline-none"
                >
                  <Send className="w-4 h-4" aria-hidden="true" />
                  <span>{isSubmitting ? 'Transmitting...' : 'Send Inquiry'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
