import { useReveal } from '../hooks/useReveal';

const steps = [
  { num: '01', title: 'Short intro call', desc: 'We schedule a 20-minute call to understand your business and confirm the audit is the right starting point.' },
  { num: '02', title: 'We do the work', desc: 'We review your workflows, ask focused questions, and put together a structured picture of where automation applies.' },
  { num: '03', title: 'Clear recommendations', desc: 'You receive a plain-language summary of findings — specific, prioritized, and grounded in your actual operations.' },
  { num: '04', title: 'You decide what\'s next', desc: 'There\'s no pitch at the end. You take the findings and decide what, if anything, you want to do with them.' },
];

export function WhatHappensNext() {
  const ref = useReveal();

  return (
    <section id="next" className="bg-surface py-20 md:py-36">
      <div ref={ref} className="max-w-container mx-auto px-6 md:px-12">
        <span className="reveal label inline-block text-xs font-semibold tracking-widest uppercase text-accent-2 mb-5">
          After You Submit
        </span>
        <h2 className="reveal delay-r1 text-white">
          What happens next<br />is straightforward.
        </h2>
        <p className="reveal delay-r2 text-muted max-w-[480px] mt-3">
          No automated sequences. No sales funnel. Just a clear, human process.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14 relative next-steps-line">
          {steps.map((step, i) => (
            <div key={step.num} className={`reveal delay-r${i + 1} flex flex-col items-center text-center px-6 gap-5 relative z-10`}>
              <div className="w-14 h-14 rounded-full bg-bg border border-border flex items-center justify-center text-sm font-bold text-accent-2 flex-shrink-0">
                {step.num}
              </div>
              <h3 className="text-base text-white">{step.title}</h3>
              <p className="text-sm text-muted">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
