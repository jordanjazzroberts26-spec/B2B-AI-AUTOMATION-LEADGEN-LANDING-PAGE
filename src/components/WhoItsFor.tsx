import { Check, X } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const goodFit = [
  'Running a business with real operations — teams, workflows, and recurring processes that need to work reliably',
  'Watching your team spend time on work that feels like it should already be automated',
  'Curious about AI but want to understand what it actually means for your specific situation before committing to anything',
  'A founder or operator who values clarity and wants a grounded perspective — not a pitch',
];

const badFit = [
  'Are looking for a tool that solves everything automatically without understanding your business first',
  'Are exploring AI as a side project or early-stage experiment without operational infrastructure in place',
  'Expect immediate results without a structured process for understanding what needs to change',
];

export function WhoItsFor() {
  const ref = useReveal();

  return (
    <section id="for" className="bg-surface py-20 md:py-36">
      <div ref={ref} className="max-w-container mx-auto px-6 md:px-12">
        <span className="reveal label inline-block text-xs font-semibold tracking-widest uppercase text-accent-2 mb-5">
          Fit & Clarity
        </span>
        <h2 className="reveal delay-r1 text-white">
          This work is specific.<br />So is who it's right for.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border rounded-lg overflow-hidden mt-14">
          <div className="reveal delay-r2 bg-surface-2 p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-9 h-9 rounded-lg bg-accent/15 flex items-center justify-center flex-shrink-0">
                <Check className="w-[18px] h-[18px] text-accent-2" />
              </div>
              <span className="text-base font-semibold text-muted">This is a good fit if you are…</span>
            </div>
            <ul className="flex flex-col gap-4">
              {goodFit.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted leading-relaxed">
                  <span className="flex-shrink-0 mt-0.5 w-[18px] h-[18px] rounded-full bg-accent/20 text-accent-2 flex items-center justify-center">
                    <Check className="w-2.5 h-2.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal delay-r3 bg-surface-2 p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                <X className="w-[18px] h-[18px] text-faint" />
              </div>
              <span className="text-base font-semibold text-muted">This probably isn't the right fit if you…</span>
            </div>
            <ul className="flex flex-col gap-4">
              {badFit.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted leading-relaxed">
                  <span className="flex-shrink-0 mt-0.5 w-[18px] h-[18px] rounded-full bg-white/5 text-faint flex items-center justify-center">
                    <X className="w-2.5 h-2.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
