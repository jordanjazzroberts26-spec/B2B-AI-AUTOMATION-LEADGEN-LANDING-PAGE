import { Instagram, Bot, Mail, ArrowUpRight, Check } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const services = [
  {
    icon: Instagram,
    title: 'Instagram DM Automation',
    text: 'Turn your DMs into a 24/7 sales engine. Auto-reply to comments and messages, qualify leads, and book calls — instantly.',
    points: ['Comment-to-DM funnels', 'Keyword auto-replies', 'Lead capture & tagging'],
  },
  {
    icon: Bot,
    title: 'AI Chatbots',
    text: 'Custom GPT-powered assistants trained on your business that answer questions, recommend products, and support customers on autopilot.',
    points: ['Trained on your data', 'Website & WhatsApp', 'Human handoff built in'],
    featured: true,
  },
  {
    icon: Mail,
    title: 'Email & Lead Automation',
    text: 'End-to-end pipelines that capture leads, score them, and nurture with perfectly timed, personalized email sequences.',
    points: ['Smart lead scoring', 'CRM sync & enrichment', 'Automated nurture flows'],
  },
];

export function Services() {
  const ref = useReveal();

  return (
    <section id="services" ref={ref} className="py-24 md:py-32 relative bg-mesh-for border-y border-border">
      <div className="max-w-container mx-auto px-6 md:px-12">
        <div className="max-w-2xl mb-14 reveal">
          <span className="text-xs font-semibold tracking-widest uppercase text-accent-2">What I build</span>
          <h2 className="text-white mt-4 mb-5 text-balance">Automation systems built around how you actually work.</h2>
          <p className="text-lg text-muted leading-relaxed text-pretty">
            Three core services, each designed to remove a specific bottleneck between you and
            more revenue.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className={`reveal delay-r${i + 1} interactive-cred-card group relative flex flex-col rounded-2xl p-7 border ${
                  s.featured
                    ? 'bg-surface-2 border-accent/30 shadow-[0_0_40px_-12px_rgba(108,99,255,0.4)]'
                    : 'bg-surface border-border'
                }`}
              >
                {s.featured && (
                  <span className="absolute top-6 right-6 text-[10px] font-semibold tracking-wider uppercase text-accent-2 bg-accent/15 px-2.5 py-1 rounded-full">
                    Most popular
                  </span>
                )}
                <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/15 text-accent-2 mb-6 group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6" />
                </span>
                <h3 className="text-xl font-semibold text-white mb-3">{s.title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-6">{s.text}</p>
                <ul className="flex flex-col gap-2.5 mb-7">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-sm text-muted">
                      <Check className="w-4 h-4 text-accent-2 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-white no-underline group-hover:text-accent-2 transition-colors"
                >
                  Learn more
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
