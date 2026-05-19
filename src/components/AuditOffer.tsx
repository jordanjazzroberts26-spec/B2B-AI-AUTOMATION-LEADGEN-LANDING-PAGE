import { useState, type FormEvent } from 'react';
import { Clock, CheckCircle, ArrowRight, ShieldCheck, CheckSquare } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { supabase } from '../lib/supabase';
import { useScrollProgress } from '../hooks/useScrollProgress';

const includes = [
  'Review of your core operational workflows',
  'Identification of high-impact automation opportunities',
  'Plain-language summary of findings and recommendations',
  'No obligation to proceed — the audit stands on its own',
];

export function AuditOffer() {
  const ref = useReveal();
  const [step, setStep] = useState(1);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
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

  const scrollY = useScrollProgress();

  return (
    <section id="audit" className="py-20 md:py-36 relative overflow-hidden">
      <div style={{ transform: `translateX(-50%) translateY(${scrollY * 0.05}px)` }} className="absolute -bottom-52 left-1/2 w-[700px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(108,99,255,0.1)_0%,transparent_70%)] pointer-events-none" />
      <div ref={ref} className="max-w-container mx-auto px-6 md:px-12">
        <div className="reveal relative bg-surface border border-border rounded-lg p-10 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center overflow-hidden audit-card-glow shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
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

          <div className="bg-surface-2/40 border border-border p-8 rounded-xl relative shadow-inner">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center text-center p-6 bg-[#2d4a3e]/10 border border-green-500/20 rounded-xl min-h-[260px] animate-fade-in">
                <CheckSquare className="w-12 h-12 text-green-400 mb-4 animate-bounce" />
                <h4 className="text-base font-bold text-white mb-2">Audit Requested!</h4>
                <p className="text-xs text-muted leading-relaxed max-w-[280px]">
                  Thank you, {form.first_name}. We have logged your operational details and will reach out to schedule your 20-minute call within two business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Visual Step Tracker */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex-1 h-1 bg-border rounded-full mr-4 overflow-hidden">
                    <div
                      className="h-full bg-accent-2 transition-all duration-500"
                      style={{ width: `${(step / 3) * 100}%` }}
                    />
                  </div>
                  <span className="text-[10px] font-bold text-accent-2 uppercase tracking-widest font-mono">
                    Step {step} of 3
                  </span>
                </div>

                {/* Step 1: Operational Context */}
                {step === 1 && (
                  <div className="flex flex-col gap-4 animate-fade-in">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="company" className="text-xs font-semibold text-white tracking-wide">Company name</label>
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
                      <label htmlFor="size" className="text-xs font-semibold text-white tracking-wide">Team size</label>
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
                    
                    {status === 'error' && (
                      <div className="text-xs font-semibold text-red-400 mt-1 animate-pulse">
                        Please fill in all operational fields to continue.
                      </div>
                    )}

                    <button
                      type="button"
                      onClick={() => {
                        if (form.company && form.team_size) {
                          setStep(2);
                        } else {
                          setStatus('error');
                          setTimeout(() => setStatus('idle'), 2000);
                        }
                      }}
                      className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white font-semibold text-sm py-3.5 px-4 rounded-lg transition-all duration-300 mt-2 cursor-pointer border-none shadow-[0_4px_15px_rgba(108,99,255,0.2)]"
                    >
                      Continue to Step 2
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}

                {/* Step 2: Operational Friction */}
                {step === 2 && (
                  <div className="flex flex-col gap-4 animate-fade-in">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="challenge" className="text-xs font-semibold text-white tracking-wide">What is the biggest operational challenge right now?</label>
                      <textarea
                        id="challenge"
                        placeholder="E.g., team spends 3 hours a day copying CSV data between Shopify and our inventory system, leading to errors."
                        value={form.challenge}
                        onChange={(e) => setForm({ ...form, challenge: e.target.value })}
                        className="bg-bg border border-border rounded-lg text-muted text-sm px-4 py-3 outline-none focus:border-accent transition-colors w-full resize-y min-h-[110px]"
                      />
                    </div>

                    {status === 'error' && (
                      <div className="text-xs font-semibold text-red-400 mt-1 animate-pulse">
                        Please describe your challenge (at least 6 characters).
                      </div>
                    )}

                    <div className="grid grid-cols-3 gap-3 mt-2">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="bg-transparent border border-border hover:border-muted text-muted hover:text-white font-semibold text-xs py-3 px-2 rounded-lg transition-colors cursor-pointer"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          if (form.challenge.trim().length > 5) {
                            setStep(3);
                          } else {
                            setStatus('error');
                            setTimeout(() => setStatus('idle'), 2000);
                          }
                        }}
                        className="col-span-2 flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white font-semibold text-xs py-3 px-4 rounded-lg transition-all duration-300 cursor-pointer border-none shadow-[0_4px_15px_rgba(108,99,255,0.2)]"
                      >
                        Continue to Step 3
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Contact & Submit */}
                {step === 3 && (
                  <div className="flex flex-col gap-4 animate-fade-in">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="fname" className="text-xs font-semibold text-white tracking-wide">First name</label>
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
                        <label htmlFor="lname" className="text-xs font-semibold text-white tracking-wide">Last name</label>
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
                      <label htmlFor="email" className="text-xs font-semibold text-white tracking-wide">Work email</label>
                      <input
                        type="email"
                        id="email"
                        placeholder="alex@company.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="bg-bg border border-border rounded-lg text-muted text-sm px-4 py-3 outline-none focus:border-accent transition-colors w-full"
                      />
                    </div>

                    {status === 'error' && (
                      <div className="text-xs font-semibold text-red-400 mt-1 animate-pulse">
                        Please enter both your name and email to proceed.
                      </div>
                    )}
                    
                    <div className="grid grid-cols-3 gap-3 mt-2">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="bg-transparent border border-border hover:border-muted text-muted hover:text-white font-semibold text-xs py-3 px-2 rounded-lg transition-colors cursor-pointer"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={status === 'success' || status === 'submitting'}
                        className={`col-span-2 flex items-center justify-center gap-2 font-semibold text-xs py-3 px-4 rounded-lg border-none cursor-pointer transition-all ${
                          status === 'success'
                            ? 'bg-[#2d4a3e] text-white cursor-default'
                            : status === 'error'
                            ? 'bg-faint text-white'
                            : 'bg-accent text-white hover:bg-[#7c74ff] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(108,99,255,0.35)]'
                        }`}
                      >
                        {status === 'submitting' && 'Submitting...'}
                        {status === 'idle' && (
                          <>
                            Request My Free Audit
                            <ArrowRight className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}

                <p className="text-[10px] text-faint leading-relaxed mt-2">
                  We review every submission personally. Row-level data encryption applied automatically.
                </p>

                {/* Security trust badges and interactive tooltips */}
                <div className="border-t border-border pt-4 mt-2 flex flex-col gap-2 relative">
                  <div className="flex items-center justify-between text-[10px] text-muted">
                    <span className="font-bold text-accent-2 uppercase tracking-wider flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" /> Secure Submission
                    </span>
                    <span className="text-faint font-mono">AES-256 Encrypted</span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-[9px] font-semibold text-muted text-center">
                    <button
                      type="button"
                      onMouseEnter={() => setActiveTooltip('nda')}
                      onMouseLeave={() => setActiveTooltip(null)}
                      onClick={() => setActiveTooltip(activeTooltip === 'nda' ? null : 'nda')}
                      className="bg-surface border border-border/80 rounded py-1 hover:border-accent-2/30 hover:text-white cursor-pointer relative transition-colors duration-200"
                    >
                      Mutual NDA
                      {activeTooltip === 'nda' && (
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 bg-surface border border-accent/30 rounded-lg p-2.5 text-left w-[180px] pointer-events-none shadow-[0_8px_20px_rgba(0,0,0,0.5)] z-30 leading-normal normal-case font-normal text-muted font-sans">
                          <strong className="text-white block mb-0.5 font-semibold">Automatic Legal Protection</strong>
                          We execute a mutual NDA immediately upon submission. Your details are never shared or published.
                        </div>
                      )}
                    </button>

                    <button
                      type="button"
                      onMouseEnter={() => setActiveTooltip('model')}
                      onMouseLeave={() => setActiveTooltip(null)}
                      onClick={() => setActiveTooltip(activeTooltip === 'model' ? null : 'model')}
                      className="bg-surface border border-border/80 rounded py-1 hover:border-accent-2/30 hover:text-white cursor-pointer relative transition-colors duration-200"
                    >
                      No AI Training
                      {activeTooltip === 'model' && (
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 bg-surface border border-accent/30 rounded-lg p-2.5 text-left w-[180px] pointer-events-none shadow-[0_8px_20px_rgba(0,0,0,0.5)] z-30 leading-normal normal-case font-normal text-muted font-sans">
                          <strong className="text-white block mb-0.5 font-semibold">Complete IP Sovereignty</strong>
                          We guarantee that your operational pipelines are never used to train public LLM models.
                        </div>
                      )}
                    </button>

                    <button
                      type="button"
                      onMouseEnter={() => setActiveTooltip('isolation')}
                      onMouseLeave={() => setActiveTooltip(null)}
                      onClick={() => setActiveTooltip(activeTooltip === 'isolation' ? null : 'isolation')}
                      className="bg-surface border border-border/80 rounded py-1 hover:border-accent-2/30 hover:text-white cursor-pointer relative transition-colors duration-200"
                    >
                      Data Isolation
                      {activeTooltip === 'isolation' && (
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 bg-surface border border-accent/30 rounded-lg p-2.5 text-left w-[180px] pointer-events-none shadow-[0_8px_20px_rgba(0,0,0,0.5)] z-30 leading-normal normal-case font-normal text-muted font-sans">
                          <strong className="text-white block mb-0.5 font-semibold">Row-Level Security (RLS)</strong>
                          Inputs are stored in an encrypted database with restricted access.
                        </div>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
