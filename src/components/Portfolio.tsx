import { useState } from 'react';
import { Play, X } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const demos = [
  {
    title: 'DM-to-Booking Funnel',
    category: 'Instagram Automation',
    duration: '2:14',
    poster: '/demos/demo-instagram.png',
    result: '+38% booked calls',
  },
  {
    title: 'Support Copilot',
    category: 'AI Chatbot',
    duration: '1:47',
    poster: '/demos/demo-chatbot.png',
    result: '82% tickets deflected',
  },
  {
    title: 'Lead Scoring Pipeline',
    category: 'Email & Lead Automation',
    duration: '3:02',
    poster: '/demos/demo-leadflow.png',
    result: '3.1x reply rate',
  },
  {
    title: 'Onboarding Autoflow',
    category: 'Workflow Automation',
    duration: '2:33',
    poster: '/demos/demo-workflow.png',
    result: '12 hrs/week saved',
  },
];

export function Portfolio() {
  const ref = useReveal();
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="work" ref={ref} className="py-24 md:py-32 relative">
      <div className="max-w-container mx-auto px-6 md:px-12">
        <div className="max-w-2xl mb-14 reveal">
          <span className="text-xs font-semibold tracking-widest uppercase text-accent-2">Selected work</span>
          <h2 className="text-white mt-4 mb-5 text-balance">See the systems in action.</h2>
          <p className="text-lg text-muted leading-relaxed text-pretty">
            Short walkthroughs of real automation builds — from trigger to outcome.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {demos.map((d, i) => (
            <button
              key={d.title}
              type="button"
              onClick={() => setActive(i)}
              className={`reveal delay-r${(i % 4) + 1} group relative text-left rounded-2xl overflow-hidden border border-border bg-surface aspect-video transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_20px_50px_-20px_rgba(0,212,255,0.45)]`}
            >
              <img
                src={d.poster}
                alt={`${d.title} demo preview`}
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />

              {/* Play button */}
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex items-center justify-center w-16 h-16 rounded-full bg-accent/90 text-bg shadow-[0_0_40px_rgba(0,212,255,0.6)] group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 ml-0.5 fill-current" />
                </span>
              </span>

              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="text-[11px] font-semibold tracking-wider uppercase text-white bg-black/40 backdrop-blur-sm border border-border px-2.5 py-1 rounded-full">
                  {d.category}
                </span>
              </div>
              <span className="absolute top-4 right-4 text-[11px] font-medium text-white bg-black/40 backdrop-blur-sm border border-border px-2 py-1 rounded-md">
                {d.duration}
              </span>

              <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between gap-3">
                <h3 className="text-lg font-semibold text-white">{d.title}</h3>
                <span className="text-xs font-semibold text-accent-2 whitespace-nowrap">{d.result}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            aria-label="Close video"
            className="absolute top-6 right-6 flex items-center justify-center w-10 h-10 rounded-full border border-border text-white hover:bg-surface transition-colors"
            onClick={() => setActive(null)}
          >
            <X className="w-5 h-5" />
          </button>
          <div
            className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden border border-border bg-surface relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={demos[active].poster} alt="" className="absolute inset-0 w-full h-full object-cover opacity-40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center px-6">
              <span className="flex items-center justify-center w-16 h-16 rounded-full bg-accent/90 text-bg shadow-[0_0_40px_rgba(0,212,255,0.6)]">
                <Play className="w-6 h-6 ml-0.5 fill-current" />
              </span>
              <p className="text-white font-semibold text-lg">{demos[active].title}</p>
              <p className="text-sm text-muted">Demo video coming soon</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
