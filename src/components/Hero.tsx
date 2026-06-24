import { ArrowRight, Sparkles, Bot, Mail, Instagram } from 'lucide-react';
import { CanvasParticles } from './CanvasParticles';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { useScrambleText } from '../hooks/useScrambleText';

export function Hero() {
  const scrollY = useScrollProgress();
  const { displayText: scrambled } = useScrambleText('automation that scales.', 40, 1400);

  return (
    <section id="hero" className="pt-36 md:pt-52 pb-24 md:pb-40 relative overflow-hidden">
      {/* Layered glow */}
      <div className="absolute -top-52 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(108,99,255,0.16)_0%,transparent_70%)] pointer-events-none" />

      {/* Parallax floating orbs */}
      <div style={{ transform: `translateY(${scrollY * 0.08}px)` }} className="absolute inset-0 pointer-events-none z-[1]">
        <div className="hero-orb-1" />
        <div className="hero-orb-2" />
        <div className="hero-orb-3" />
      </div>

      <CanvasParticles />
      <div className="hero-grid-bg absolute inset-0 pointer-events-none" />

      {/* Floating service chips with subtle parallax */}
      <div
        style={{ transform: `translateY(${scrollY * -0.06}px)` }}
        className="hidden lg:flex absolute top-44 right-12 xl:right-24 flex-col gap-4 z-[2] pointer-events-none"
      >
        <FloatChip icon={<Instagram className="w-4 h-4" />} label="Instagram DM Bot" delay="0s" offset="float-a" />
        <FloatChip icon={<Bot className="w-4 h-4" />} label="AI Chatbot" delay="0.4s" offset="float-b" />
        <FloatChip icon={<Mail className="w-4 h-4" />} label="Lead Automation" delay="0.8s" offset="float-c" />
      </div>

      <div className="max-w-container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-[840px]">
          <div className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-muted border border-border px-3.5 py-1.5 rounded-full mb-8 animate-fade-up bg-surface/50 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-accent-2" />
            AI Automation Specialist
          </div>
          <h1 className="text-white mb-6 animate-fade-up [animation-delay:0.12s] text-balance">
            I help businesses replace busywork with{' '}
            <em className="not-italic bg-gradient-to-br from-accent-2 to-accent bg-clip-text text-transparent">
              {scrambled}
            </em>
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-[600px] mb-11 leading-relaxed animate-fade-up [animation-delay:0.24s] text-pretty">
            I design and build intelligent systems — Instagram DM bots, AI chatbots, and
            lead pipelines — that capture, qualify, and convert customers{' '}
            <strong className="text-white font-medium">around the clock</strong>, so your team
            can focus on the work that matters.
          </p>
          <div className="flex items-center gap-6 flex-wrap animate-fade-up [animation-delay:0.38s]">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-accent text-white text-sm font-semibold px-8 py-3.5 rounded-lg no-underline hover:bg-[#7c74ff] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(108,99,255,0.4)] transition-all"
            >
              Book a Free Strategy Call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 text-sm font-semibold text-muted no-underline hover:text-white transition-colors"
            >
              View Demos
            </a>
          </div>

          {/* Trust row */}
          <div className="mt-14 flex items-center gap-8 flex-wrap animate-fade-up [animation-delay:0.5s]">
            <Stat value="120+" label="Workflows shipped" />
            <div className="w-px h-10 bg-border" />
            <Stat value="40k+" label="Hours automated" />
            <div className="w-px h-10 bg-border" />
            <Stat value="24/7" label="Always-on systems" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="text-xs text-faint uppercase tracking-wider mt-1">{label}</div>
    </div>
  );
}

function FloatChip({
  icon,
  label,
  delay,
  offset,
}: {
  icon: React.ReactNode;
  label: string;
  delay: string;
  offset: string;
}) {
  return (
    <div
      className={`${offset} flex items-center gap-2.5 bg-surface/70 backdrop-blur-md border border-border rounded-xl px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.5)]`}
      style={{ animationDelay: delay }}
    >
      <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent/15 text-accent-2">{icon}</span>
      <span className="text-sm font-medium text-white whitespace-nowrap">{label}</span>
    </div>
  );
}
