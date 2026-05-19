import { useState, type FormEvent } from 'react';
import { Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { supabase } from '../lib/supabase';

const includes = [
  'Review of your core operational workflows',
  'Identification of high-impact automation opportunities',
  'Plain-language summary of findings and recommendations',
  'No obligation to proceed — the audit stands on its own',
];

export function AuditOffer() {
  const ref = useReveal();
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    company: '',
    team_size: '',
    challenge: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.first_name || !form.email) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 2500);
      return;
    }
    setStatus('submitting');
    const { error } = await supabase.from('audit_submissions').insert([form]);
    if (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 2500);
    } else {
      setStatus('success');
    }
  };

  return (
    <section id="audit" className="py-20 md:py-36 relative overflow-hidden">
      <div className="absolute -bottom-52 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(108,99,255,0.1)_0%,transparent_70%)] pointer-events-none" />
      <div ref={ref} className="max-w-container mx-auto px-6 md:px-12">
        <div className="reveal relative bg-surface border border-border rounded-lg p-10 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center overflow-hidden audit-card-glow">
          <div>
            <div className="inline-flex items-center gap-2 bg-accent/12 border border-accent/25 text-accent-2 text-xs font-semibold tracking-wider uppercase px-3.5 py-1.5 rounded-full mb-6">
              <Clock className="w-3 h-3" />
              Free Automation Audit
            </div>
            <h2 className="text-white mb-5">
              A clear picture of where<br />automation actually helps.
            </h2>
            <p className="text-muted mb-8 leading-relaxed">
              The audit is a structured review of your current workflows. We look at how work moves through your business, where time is being lost, and where automation would create real, measurable improvement.
            </p>
            <ul className="flex flex-col gap-3.5">
              {includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted">
                  <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-accent-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="fname" className="text-xs font-medium text-muted tracking-wide">First name</label>
                <input
                  type="text"
                  id="fname"
                  placeholder="Alex"
                  value={form.first_name}
                  onChange={(e) => setForm({ ...form, first_name: e.target.value })}
                  className="bg-bg border border-border rounded-lg text-muted text-sm px-4 py-3 outline-none focus:border-accent transition-colors w-full"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="lname" className="text-xs font-medium text-muted tracking-wide">Last name</label>
                <input
                  type="text"
                  id="lname"
                  placeholder="Morgan"
                  value={form.last_name}
                  onChange={(e) => setForm({ ...form, last_name: e.target.value })}
                  className="bg-bg border border-border rounded-lg text-muted text-sm px-4 py-3 outline-none focus:border-accent transition-colors w-full"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-xs font-medium text-muted tracking-wide">Work email</label>
              <input
                type="email"
                id="email"
                placeholder="alex@company.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="bg-bg border border-border rounded-lg text-muted text-sm px-4 py-3 outline-none focus:border-accent transition-colors w-full"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="company" className="text-xs font-medium text-muted tracking-wide">Company name</label>
              <input
                type="text"
                id="company"
                placeholder="Acme Operations"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className="bg-bg border border-border rounded-lg text-muted text-sm px-4 py-3 outline-none focus:border-accent transition-colors w-full"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="size" className="text-xs font-medium text-muted tracking-wide">Team size</label>
              <select
                id="size"
                value={form.team_size}
                onChange={(e) => setForm({ ...form, team_size: e.target.value })}
                className="bg-bg border border-border rounded-lg text-muted text-sm px-4 py-3 outline-none focus:border-accent transition-colors w-full appearance-none cursor-pointer"
              >
                <option value="" disabled>Select range</option>
                <option value="1-10">1–10 people</option>
                <option value="11-50">11–50 people</option>
                <option value="51-200">51–200 people</option>
                <option value="200+">200+ people</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="challenge" className="text-xs font-medium text-muted tracking-wide">What's the biggest operational challenge right now?</label>
              <textarea
                id="challenge"
                placeholder="Briefly describe where time is being lost or where things break down…"
                value={form.challenge}
                onChange={(e) => setForm({ ...form, challenge: e.target.value })}
                className="bg-bg border border-border rounded-lg text-muted text-sm px-4 py-3 outline-none focus:border-accent transition-colors w-full resize-y min-h-[90px]"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'success' || status === 'submitting'}
              className={`w-full flex items-center justify-center gap-2 font-semibold text-base px-8 py-4 rounded-lg border-none cursor-pointer transition-all ${
                status === 'success'
                  ? 'bg-[#2d4a3e] text-white cursor-default'
                  : status === 'error'
                  ? 'bg-faint text-white'
                  : 'bg-accent text-white hover:bg-[#7c74ff] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(108,99,255,0.35)]'
              }`}
            >
              {status === 'submitting' && 'Submitting...'}
              {status === 'success' && 'Request received — we\'ll be in touch shortly.'}
              {status === 'error' && 'Please fill in your name and email.'}
              {status === 'idle' && (
                <>
                  Request My Free Audit
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
            <p className="text-xs text-faint leading-relaxed">
              We review every submission personally. You'll hear from us within two business days.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
