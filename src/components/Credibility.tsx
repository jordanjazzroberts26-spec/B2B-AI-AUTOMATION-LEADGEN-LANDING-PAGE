import { LayoutGrid, Clock, Network } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const cards = [
  {
    icon: LayoutGrid,
    title: 'Systems-first thinking',
    desc: 'We come from operations and data backgrounds. We understand how businesses actually function before we suggest how to change them.',
  },
  {
    icon: Clock,
    title: 'Production-grade delivery',
    desc: 'Every automation we build is designed to run reliably in real environments — not just in a demo. We\'ve maintained systems across industries for years.',
  },
  {
    icon: Network,
    title: 'Cross-industry perspective',
    desc: 'Working across multiple sectors means we bring pattern recognition that single-industry specialists don\'t have. We\'ve seen what works and what doesn\'t.',
  },
];

const logos = [
  [70, 40],
  [90, 0],
  [50, 55],
  [80, 0],
  [60, 30],
];

export function Credibility() {
  const ref = useReveal();

  return (
    <section id="credibility" className="bg-surface py-20 md:py-36">
      <div ref={ref} className="max-w-container mx-auto px-6 md:px-12">
        <span className="reveal label inline-block text-xs font-semibold tracking-widest uppercase text-accent-2 mb-5">
          Why It Works
        </span>
        <h2 className="reveal delay-r1 text-white">
          Built on systems thinking,<br />not software demos.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {cards.map((card, i) => (
            <div key={card.title} className={`reveal delay-r${i + 1} bg-bg border border-border rounded-xl p-8 flex flex-col gap-4 hover:border-faint transition-colors`}>
              <div className="w-11 h-11 bg-accent/10 rounded-[10px] flex items-center justify-center text-accent-2">
                <card.icon className="w-[22px] h-[22px]" />
              </div>
              <h3 className="text-base text-white">{card.title}</h3>
              <p className="text-sm text-muted">{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="reveal mt-16 pt-12 border-t border-border">
          <p className="text-xs tracking-widest uppercase text-faint text-center mb-8">
            Trusted by teams across industries
          </p>
          <div className="flex items-center justify-center gap-8 md:gap-16 flex-wrap">
            {logos.map((bars, i) => (
              <div key={i} className="flex items-center gap-2 opacity-30 grayscale hover:opacity-50 transition-opacity">
                <div className="h-2.5 bg-muted rounded-sm" style={{ width: bars[0] }} />
                {bars[1] > 0 && <div className="h-2.5 bg-muted rounded-sm opacity-60" style={{ width: bars[1] }} />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
