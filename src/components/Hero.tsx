import { ArrowRight } from 'lucide-react';
import { CanvasParticles } from './CanvasParticles';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { useScrambleText } from '../hooks/useScrambleText';

export function Hero() {
  const scrollY = useScrollProgress();
  const { displayText: scrambledHeadline } = useScrambleText("systems that weren't built to scale.", 40, 1500);

  return (
    <section id="hero" className="pt-32 md:pt-48 pb-20 md:pb-36 relative overflow-hidden">
      <div className="absolute -top-52 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(108,99,255,0.13)_0%,transparent_70%)] pointer-events-none" />
      <div style={{ transform: `translateY(${scrollY * 0.08}px)` }} className="absolute inset-0 pointer-events-none z-[1]">
        <div className="hero-orb-1" />
        <div className="hero-orb-2" />
        <div className="hero-orb-3" />
      </div>
      <CanvasParticles />
      <div className="hero-grid-bg absolute inset-0 pointer-events-none" />
      <div className="max-w-container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-[820px]">
          <div className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-muted border border-border px-3.5 py-1.5 rounded-full mb-8 animate-fade-up">
            <span className="w-1.5 h-1.5 bg-accent-2 rounded-full" />
            AI Automation for Operational Teams
          </div>
          <h1 className="text-white mb-6 animate-fade-up [animation-delay:0.12s]">
            Your business runs on<br />
            <em className="not-italic bg-gradient-to-br from-accent-2 to-accent bg-clip-text text-transparent">
              {scrambledHeadline}
            </em>
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-[580px] mb-11 leading-relaxed animate-fade-up [animation-delay:0.24s]">
            Manual handoffs. Disconnected tools. Work that gets done by people
            because <strong className="text-muted font-medium">no one has had the time to fix it.</strong> We help
            operations-heavy businesses identify exactly where automation creates
            real leverage — and build it properly.
          </p>
          <div className="flex items-center gap-6 flex-wrap animate-fade-up [animation-delay:0.38s]">
            <a
              href="#audit"
              className="inline-flex items-center gap-2 bg-accent text-white text-sm font-semibold px-8 py-3.5 rounded-lg no-underline hover:bg-[#7c74ff] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(108,99,255,0.35)] transition-all"
            >
              Request an Automation Audit
              <ArrowRight className="w-4 h-4" />
            </a>
            <span className="text-xs text-faint">No commitment. No sales call.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
