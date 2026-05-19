import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { HelpCircle, AlertTriangle, ArrowRight } from 'lucide-react';

export function LeakageCalculator() {
  const ref = useReveal();
  const [teamSize, setTeamSize] = useState<number>(25);
  const [bottlenecks, setBottlenecks] = useState({
    copyPaste: true,
    statusUpdates: false,
    errorFixes: true,
  });

  const toggleBottleneck = (key: keyof typeof bottlenecks) => {
    setBottlenecks((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Math variables
  let hoursPerEmployee = 0;
  if (bottlenecks.copyPaste) hoursPerEmployee += 1.8;
  if (bottlenecks.statusUpdates) hoursPerEmployee += 1.2;
  if (bottlenecks.errorFixes) hoursPerEmployee += 0.8;

  const weeklyWastedHours = Math.round(teamSize * hoursPerEmployee);
  const hourlyRate = 45; // Standard fully burdened operational rate
  const annualWastedCost = Math.round(weeklyWastedHours * 52 * hourlyRate);
  
  // Potential recoup (80% automation success rate)
  const recoverableHours = Math.round(weeklyWastedHours * 0.8);
  const potentialSavings = Math.round(annualWastedCost * 0.8);

  return (
    <section id="calculator" className="py-20 md:py-28 border-b border-border bg-mesh-credibility">
      <div ref={ref} className="max-w-container mx-auto px-6 md:px-12">
        <div className="text-center max-w-[620px] mx-auto mb-14">
          <span className="reveal label inline-block text-xs font-semibold tracking-widest uppercase text-accent-2 mb-5">
            Operational Audit Calculator
          </span>
          <h2 className="reveal delay-r1 text-white">
            Measure your organization's leakage.
          </h2>
          <p className="reveal delay-r2 text-muted mt-3">
            Operational drag scales exponentially with head count. Adjust your parameters below to see estimated weekly waste and what automation can recover.
          </p>
        </div>

        <div className="reveal delay-r3 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-8">
          {/* Left panel: sliders & toggles */}
          <div className="lg:col-span-7 bg-surface-2 border border-border rounded-xl p-8 flex flex-col justify-between shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
            <div>
              {/* Slider header */}
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-semibold text-white">Organization / Team Size</span>
                <span className="text-lg font-bold text-accent-2 font-mono">{teamSize} employees</span>
              </div>
              
              {/* Range input */}
              <input
                type="range"
                min="5"
                max="150"
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full h-1 bg-border rounded-lg appearance-none cursor-pointer accent-accent-2 mb-8 outline-none"
              />

              <h4 className="text-xs font-bold uppercase tracking-wider text-muted mb-4">Select Active Bottlenecks</h4>
              
              {/* Bottleneck selectors */}
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => toggleBottleneck('copyPaste')}
                  className={`w-full flex items-center justify-between p-4 rounded-lg border text-left cursor-pointer transition-all duration-300 ${
                    bottlenecks.copyPaste
                      ? 'bg-accent/5 border-accent/35 text-white'
                      : 'bg-transparent border-border text-muted hover:border-accent/20 hover:text-white'
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">Manual Data Copy-Pasting</span>
                    <span className="text-[11px] text-muted/80 mt-0.5">Moving info across sheets, emails, or CRM systems (1.8h / employee / week)</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={bottlenecks.copyPaste}
                    readOnly
                    className="w-4 h-4 rounded border-border text-accent-2 accent-accent-2 cursor-pointer"
                  />
                </button>

                <button
                  onClick={() => toggleBottleneck('statusUpdates')}
                  className={`w-full flex items-center justify-between p-4 rounded-lg border text-left cursor-pointer transition-all duration-300 ${
                    bottlenecks.statusUpdates
                      ? 'bg-accent/5 border-accent/35 text-white'
                      : 'bg-transparent border-border text-muted hover:border-accent/20 hover:text-white'
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">Chasing Status & Updates</span>
                    <span className="text-[11px] text-muted/80 mt-0.5">Checking in with staff to coordinate data handover (1.2h / employee / week)</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={bottlenecks.statusUpdates}
                    readOnly
                    className="w-4 h-4 rounded border-border text-accent-2 accent-accent-2 cursor-pointer"
                  />
                </button>

                <button
                  onClick={() => toggleBottleneck('errorFixes')}
                  className={`w-full flex items-center justify-between p-4 rounded-lg border text-left cursor-pointer transition-all duration-300 ${
                    bottlenecks.errorFixes
                      ? 'bg-accent/5 border-accent/35 text-white'
                      : 'bg-transparent border-border text-muted hover:border-accent/20 hover:text-white'
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">Fixing Human Typos & Errors</span>
                    <span className="text-[11px] text-muted/80 mt-0.5">Re-checking sheets, fixing formatting, and correcting input slips (0.8h / employee / week)</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={bottlenecks.errorFixes}
                    readOnly
                    className="w-4 h-4 rounded border-border text-accent-2 accent-accent-2 cursor-pointer"
                  />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-8 text-[11px] text-muted italic">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-500/80 flex-shrink-0" />
              Calculations based on average fully burdened operational overhead of ${hourlyRate}/hr.
            </div>
          </div>

          {/* Right panel: results & CTA */}
          <div className="lg:col-span-5 bg-surface border border-accent/20 rounded-xl p-8 flex flex-col justify-between shadow-[0_8px_32px_rgba(108,99,255,0.06)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[radial-gradient(circle_at_top_right,rgba(108,99,255,0.08)_0%,transparent_70%)] pointer-events-none" />
            
            <div>
              <h3 className="text-base font-bold text-white mb-6">Estimated Impact Summary</h3>
              
              {/* Lost values */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-surface-2 border border-border rounded-lg p-4">
                  <div className="text-xs text-muted/80 mb-1">Hours Lost / Wk</div>
                  <div className="text-2xl font-extrabold text-red-400 font-mono">{weeklyWastedHours}h</div>
                </div>
                <div className="bg-surface-2 border border-border rounded-lg p-4">
                  <div className="text-xs text-muted/80 mb-1">Annual Leakage</div>
                  <div className="text-2xl font-extrabold text-red-400 font-mono">${annualWastedCost.toLocaleString()}</div>
                </div>
              </div>

              {/* Recoverable values */}
              <div className="border-t border-border pt-6 mb-8">
                <div className="text-xs font-bold text-accent-2 uppercase tracking-widest mb-3">Recoverable with Meridian</div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-3xl font-extrabold text-white font-mono">${potentialSavings.toLocaleString()}</span>
                  <span className="text-xs text-muted">/ yr saved</span>
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  By automating redundant manual pathways, we typically eliminate up to 80% of current operational leaks, reclaiming <strong className="text-white font-semibold font-mono">{recoverableHours} hours/week</strong> for higher-leverage work.
                </p>
              </div>
            </div>

            {/* CTA action */}
            <a
              href="#audit"
              className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white font-semibold text-sm py-3 px-4 rounded-lg transition-all duration-300 no-underline shadow-[0_4px_20px_rgba(108,99,255,0.25)] hover:shadow-[0_4px_25px_rgba(108,99,255,0.4)] group"
            >
              Patch these leaks
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
