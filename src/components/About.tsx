import { Clock, TrendingUp, ShieldCheck, Zap } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const benefits = [
  {
    icon: Clock,
    title: 'Reclaim your time',
    text: 'Automate repetitive manual tasks so your team spends hours on strategy, not copy-paste.',
  },
  {
    icon: TrendingUp,
    title: 'Convert more leads',
    text: 'Respond to every inquiry in seconds, qualify automatically, and never let a hot lead go cold.',
  },
  {
    icon: ShieldCheck,
    title: 'Consistent & reliable',
    text: 'Systems that follow your process perfectly, every time — no fatigue, no missed steps.',
  },
  {
    icon: Zap,
    title: 'Scale without hiring',
    text: 'Handle 10x the volume with the same team by letting AI do the heavy lifting.',
  },
];

export function About() {
  const ref = useReveal();

  return (
    <section id="about" ref={ref} className="py-24 md:py-32 relative">
      <div className="max-w-container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          <div className="reveal">
            <span className="text-xs font-semibold tracking-widest uppercase text-accent-2">Why automation</span>
            <h2 className="text-white mt-4 mb-6 text-balance">
              Your business is leaking time and revenue to work that machines do better.
            </h2>
            <p className="text-lg text-muted leading-relaxed mb-5 text-pretty">
              Most growing businesses are held back by the same thing: humans stuck doing
              repetitive, rules-based work. Answering the same DMs, chasing leads, copying data
              between tools.
            </p>
            <p className="text-lg text-muted leading-relaxed text-pretty">
              I build AI-powered automation systems that quietly run in the background —
              capturing demand, qualifying prospects, and moving work forward 24/7. The result
              is a leaner operation that converts better and scales without the chaos.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className={`reveal delay-r${i + 1} interactive-cred-card bg-surface border border-border rounded-2xl p-6`}
                >
                  <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-accent/15 text-accent-2 mb-4">
                    <Icon className="w-5 h-5" />
                  </span>
                  <h3 className="text-base font-semibold text-white mb-2">{b.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{b.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
