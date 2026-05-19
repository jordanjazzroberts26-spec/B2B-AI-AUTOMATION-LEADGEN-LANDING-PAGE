import { ArrowRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export function FinalCTA() {
  const ref = useReveal();

  return (
    <section id="final-cta" className="py-20 md:py-36 text-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(108,99,255,0.12)_0%,transparent_70%)] pointer-events-none" />
      <div ref={ref} className="max-w-container mx-auto px-6 md:px-12 relative z-10 max-w-[640px] ml-auto mr-auto">
        <div className="reveal">
          <span className="label inline-block text-xs font-semibold tracking-widest uppercase text-accent-2 mb-5">
            Get Started
          </span>
          <h2 className="text-white mb-5">
            Start with a clear picture<br />of what's possible.
          </h2>
          <p className="text-muted mb-10 text-lg leading-relaxed">
            If your business has operational complexity and you've been wondering whether AI could help — the audit is the right first step. It costs nothing and commits you to nothing.
          </p>
          <a
            href="#audit"
            className="inline-flex items-center gap-2 bg-accent text-white text-lg font-semibold px-9 py-4 rounded-lg no-underline hover:bg-[#7c74ff] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(108,99,255,0.35)] transition-all"
          >
            Request an Automation Audit
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="mt-5 text-xs text-faint">Free. No commitment. No sales pitch.</p>
        </div>
      </div>
    </section>
  );
}
