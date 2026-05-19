import { useReveal } from '../hooks/useReveal';

const steps = [
  { num: '01', title: 'Understand the current system', desc: 'We map how work actually moves through your business — not how it\'s supposed to, but how it does. That means talking to the people doing it.' },
  { num: '02', title: 'Identify bottlenecks and waste', desc: 'We look for the places where time is lost, handoffs break down, and manual effort is filling gaps that a well-designed system would close.' },
  { num: '03', title: 'Design practical automations', desc: 'We propose specific, scoped solutions — not a platform overhaul. Each recommendation is tied to a real problem and a measurable outcome.' },
  { num: '04', title: 'Decide together what makes sense', desc: 'You get a clear picture of what\'s possible and what it takes. What happens next is entirely your call. There\'s no pressure in either direction.' },
];

export function HowItWorks() {
  const ref = useReveal();

  return (
    <section id="how" className="py-20 md:py-36">
      <div ref={ref} className="max-w-container mx-auto px-6 md:px-12">
        <span className="reveal label inline-block text-xs font-semibold tracking-widest uppercase text-accent-2 mb-5">
          The Process
        </span>
        <h2 className="reveal delay-r1 text-white">
          How we approach<br />every engagement.
        </h2>
        <p className="reveal delay-r2 text-muted max-w-[520px] mt-3">
          Automation built without understanding the system underneath it creates new problems.
          We start with the work, not the technology.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border rounded-lg overflow-hidden mt-14">
          {steps.map((step, i) => (
            <div key={step.num} className={`reveal delay-r${i + 1} bg-surface p-7 md:p-10 flex flex-col gap-5 hover:bg-surface-2 transition-colors`}>
              <div className="text-xs font-bold tracking-widest text-accent-2 tabular-nums">{step.num}</div>
              <div className="text-base font-semibold text-white leading-snug">{step.title}</div>
              <p className="text-sm text-muted leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
