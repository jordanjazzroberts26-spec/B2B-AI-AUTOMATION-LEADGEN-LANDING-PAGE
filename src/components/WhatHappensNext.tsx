import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { Calendar, FileText, Settings, ShieldCheck, CheckSquare, Sparkles } from 'lucide-react';

const steps = [
  { num: '01', title: 'Short intro call', desc: 'We schedule a 20-minute call to understand your business and confirm the audit is the right starting point.' },
  { num: '02', title: 'We do the work', desc: 'We review your workflows, ask focused questions, and put together a structured picture of where automation applies.' },
  { num: '03', title: 'Clear recommendations', desc: 'You receive a plain-language summary of findings — specific, prioritized, and grounded in your actual operations.' },
  { num: '04', title: 'You decide what\'s next', desc: 'There\'s no pitch at the end. You take the findings and decide what, if anything, you want to do with them.' },
];

export function WhatHappensNext() {
  const ref = useReveal();
  const scrollY = useScrollProgress();
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const toggleStep = (index: number) => {
    setActiveStep(activeStep === index ? null : index);
  };

  return (
    <section id="next" className="bg-mesh-next py-20 md:py-36">
      <div ref={ref} className="max-w-container mx-auto px-6 md:px-12">
        <span className="reveal label inline-block text-xs font-semibold tracking-widest uppercase text-accent-2 mb-5">
          After You Submit
        </span>
        <h2 className="reveal delay-r1 text-white">
          What happens next<br />is straightforward.
        </h2>
        <p className="reveal delay-r2 text-muted max-w-[480px] mt-3 mb-4">
          No automated sequences. No sales funnel. Just a clear, human process. Click on any step to peek inside the deliverables.
        </p>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14 relative next-steps-line">
          {steps.map((step, i) => {
            const isActive = activeStep === i;
            return (
              <button
                key={step.num}
                onClick={() => toggleStep(i)}
                className={`reveal delay-r${i + 1} flex flex-col items-center text-center px-4 py-6 gap-5 bg-transparent border border-transparent hover:bg-white/[0.02] hover:border-border rounded-xl transition-all duration-300 relative z-10 cursor-pointer w-full text-left outline-none ${
                  isActive ? 'bg-surface border border-accent/20 shadow-[0_0_20px_rgba(108,99,255,0.08)]' : ''
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-full border flex items-center justify-center text-sm font-bold flex-shrink-0 transition-all duration-300 ${
                    isActive
                      ? 'bg-accent/15 border-accent-2 text-white shadow-[0_0_15px_rgba(108,99,255,0.25)]'
                      : 'bg-bg border-border text-accent-2'
                  }`}
                >
                  {step.num}
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-base text-white">{step.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{step.desc}</p>
                </div>
                <div className="text-[10px] font-bold text-accent-2/60 uppercase tracking-widest mt-1">
                  {isActive ? 'Click to close preview' : 'Click to inspect'}
                </div>
              </button>
            );
          })}
        </div>

        {/* Expandable Storytelling Deliverables Panel */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden mt-10 rounded-xl ${
            activeStep !== null
              ? 'max-h-[500px] opacity-100 border border-border bg-surface p-6 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.5)]'
              : 'max-h-0 opacity-0 border-none'
          }`}
        >
          {activeStep === 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-5 h-5 text-accent-2" />
                  <h4 className="text-lg font-semibold text-white">Step 01: The Exploration Call</h4>
                </div>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  We spend 20 minutes alignment-matching. There are no pitch decks, pressure, or slides. We talk about how your data moves and map out where the leakages are.
                </p>
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center gap-2 text-xs text-muted">
                    <CheckSquare className="w-3.5 h-3.5 text-accent-2" />
                    Operational systems compatibility audit
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted">
                    <CheckSquare className="w-3.5 h-3.5 text-accent-2" />
                    Immediate data privacy check & security alignment
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted">
                    <CheckSquare className="w-3.5 h-3.5 text-accent-2" />
                    Definition of success metrics for your custom build
                  </div>
                </div>
              </div>
              <div 
                className="bg-surface-2 border border-border/80 rounded-lg p-5 font-mono text-[10px] text-muted leading-relaxed shadow-inner"
                style={{ transform: `translateY(${(scrollY - 1800) * 0.03}px)` }}
              >
                <div className="border-b border-border/80 pb-2 mb-3 text-white flex justify-between items-center">
                  <span>AGENDA: DISCOVERY_MEETING.md</span>
                  <span className="w-2 h-2 rounded-full bg-accent-2 animate-pulse" />
                </div>
                <div className="text-accent-2 font-bold mb-2"># Key Discussion Areas</div>
                <div>- Map: Sheet triggers to CRM records</div>
                <div>- Check: Human touchpoints vs API handlers</div>
                <div>- Security: Encrypted data-in-transit parameters</div>
                <div className="mt-4 text-white/50">&gt; Status: Ready to schedule</div>
              </div>
            </div>
          )}

          {activeStep === 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Settings className="w-5 h-5 text-accent-2" />
                  <h4 className="text-lg font-semibold text-white">Step 02: Systems Mapping Audit</h4>
                </div>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  We look under the hood of your operations. Our team investigates the current tooling architecture, data latency patterns, and operational loops to trace bottlenecks.
                </p>
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center gap-2 text-xs text-muted">
                    <CheckSquare className="w-3.5 h-3.5 text-accent-2" />
                    Manual entry frequency & human-error tracking
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted">
                    <CheckSquare className="w-3.5 h-3.5 text-accent-2" />
                    API integrations capability & data sync latency mapping
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted">
                    <CheckSquare className="w-3.5 h-3.5 text-accent-2" />
                    Redundant tooling overhead cost audit
                  </div>
                </div>
              </div>
              <div 
                className="bg-surface-2 border border-border/80 rounded-lg p-5 font-mono text-[10px] text-muted leading-relaxed shadow-inner flex flex-col gap-2.5"
                style={{ transform: `translateY(${(scrollY - 1800) * 0.03}px)` }}
              >
                <div className="border-b border-border/80 pb-2 text-white flex justify-between items-center">
                  <span>ANALYSIS: PIPELINE_LOGS.log</span>
                  <span className="text-red-400 font-bold">WARNINGS FOUND</span>
                </div>
                <div className="flex items-center gap-2 bg-red-500/5 border border-red-500/10 p-2 rounded text-red-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                  [LATENCY] Email trigger delay: 18 min overhead detected
                </div>
                <div className="flex items-center gap-2 bg-amber-500/5 border border-amber-500/10 p-2 rounded text-amber-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  [REDUNDANCY] 3 overlapping Zapier plans found ($120/mo waste)
                </div>
                <div className="flex items-center gap-2 bg-green-500/5 border border-green-500/10 p-2 rounded text-green-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  [SECURITY] Data payload encryption levels: SECURE
                </div>
              </div>
            </div>
          )}

          {activeStep === 2 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-5 h-5 text-accent-2" />
                  <h4 className="text-lg font-semibold text-white">Step 03: The Blueprint Report</h4>
                </div>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  You receive a customized, plain-language operational blueprint. It details where the leaks are and specifies the exact automation pipelines that will patch them.
                </p>
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center gap-2 text-xs text-muted">
                    <CheckSquare className="w-3.5 h-3.5 text-accent-2" />
                    Exact workflow flowcharts with API trigger configurations
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted">
                    <CheckSquare className="w-3.5 h-3.5 text-accent-2" />
                    Projected Return-on-Investment (ROI) and hours saved mapping
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted">
                    <CheckSquare className="w-3.5 h-3.5 text-accent-2" />
                    Prioritized phased roadmaps for clean engineering rollout
                  </div>
                </div>
              </div>
              <div 
                className="bg-surface-2 border border-border/80 rounded-lg p-5 font-mono text-[10px] text-muted leading-relaxed shadow-inner"
                style={{ transform: `translateY(${(scrollY - 1800) * 0.03}px)` }}
              >
                <div className="border-b border-border/80 pb-2 mb-3 text-white flex justify-between items-center">
                  <span>DELIVERABLE: AUTOMATION_BLUEPRINT.pdf</span>
                  <span className="text-accent-2 font-bold flex items-center gap-1"><Sparkles className="w-2.5 h-2.5" /> VERIFIED</span>
                </div>
                <div className="bg-white/5 p-3 rounded mb-2 border border-white/5">
                  <div className="font-bold text-white mb-1">Pipeline #1: Lead Routing Auto-Verification</div>
                  <div>- Triggers: Stripe Webhook, Typeform Payload</div>
                  <div>- Actions: Auto-deduplication, Custom AI Categorization</div>
                  <div className="text-accent-2 font-bold mt-1">Impact: saves 14 hrs/week, reduces delays to 0 seconds.</div>
                </div>
              </div>
            </div>
          )}

          {activeStep === 3 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck className="w-5 h-5 text-accent-2" />
                  <h4 className="text-lg font-semibold text-white">Step 04: Zero-Pressure Sovereignty</h4>
                </div>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  The recommendations are yours to keep. If you have an in-house development team, you can hand them our blueprint to build it. If you want us to execute it, we're ready.
                </p>
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center gap-2 text-xs text-muted">
                    <CheckSquare className="w-3.5 h-3.5 text-accent-2" />
                    100% intellectual property (IP) ownership stays with you
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted">
                    <CheckSquare className="w-3.5 h-3.5 text-accent-2" />
                    No sales calls, automated email sequences, or pitch funnels
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted">
                    <CheckSquare className="w-3.5 h-3.5 text-accent-2" />
                    Complete clarity on costs, timelines, and deployment steps
                  </div>
                </div>
              </div>
              <div 
                className="bg-surface-2 border border-border/80 rounded-lg p-5 font-mono text-[10px] text-muted leading-relaxed shadow-inner flex flex-col gap-3 justify-center items-center h-full min-h-[140px] text-center"
                style={{ transform: `translateY(${(scrollY - 1800) * 0.03}px)` }}
              >
                <div className="text-white font-bold text-xs">SOVEREIGN OPTIONS</div>
                <div className="flex flex-col gap-2 w-full max-w-[200px]">
                  <div className="bg-white/5 border border-border py-2 px-3 rounded text-white text-[9px] font-bold">
                    Build In-House (Blueprint Free)
                  </div>
                  <div className="bg-accent/10 border border-accent-2/30 py-2 px-3 rounded text-accent-2 text-[9px] font-bold">
                    Partner With Meridian
                  </div>
                </div>
                <div className="text-[9px] text-muted italic">Both choices are completely supported by our team.</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

