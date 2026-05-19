import { useState } from 'react';
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

const logoDetails = [
  { trigger: 'Shopify Webhook', action: 'Auto-Deduplicate CRM', impact: '100% data fidelity' },
  { trigger: 'Form Payload', action: 'Secure Vault Isolation', impact: 'Zero-trust verification' },
  { trigger: 'Stripe Ledger', action: 'ERP Reconciliation', impact: 'Instant accounting sync' },
  { trigger: 'Error Event', action: 'Secure Slack Decrypt', impact: 'Immediate team alert' },
  { trigger: 'Closed Ticket', action: 'Automated Feedback Loop', impact: 'Frictionless survey sync' },
];

export function Credibility() {
  const ref = useReveal();
  const [hoveredLogo, setHoveredLogo] = useState<number | null>(null);

  return (
    <section id="credibility" className="bg-mesh-credibility py-20 md:py-36">
      <div ref={ref} className="max-w-container mx-auto px-6 md:px-12">
        <span className="reveal label inline-block text-xs font-semibold tracking-widest uppercase text-accent-2 mb-5">
          Why It Works
        </span>
        <h2 className="reveal delay-r1 text-white">
          Built on systems thinking,<br />not software demos.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {cards.map((card, i) => (
            <div key={card.title} className={`reveal delay-r${i + 1} bg-bg border border-border rounded-xl p-8 flex flex-col gap-4 interactive-cred-card`}>
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
            Trusted by teams across industries (Hover logos to peek at blueprints)
          </p>
          <div className="flex items-center justify-center gap-6 md:gap-12 flex-wrap relative">
            {logos.map((bars, i) => (
              <div
                key={i}
                onMouseEnter={() => setHoveredLogo(i)}
                onMouseLeave={() => setHoveredLogo(null)}
                className="relative flex items-center gap-2 opacity-40 hover:opacity-100 transition-all duration-300 cursor-pointer py-4 px-6 rounded-lg bg-transparent hover:bg-white/[0.02] border border-transparent hover:border-border"
              >
                <div className="h-2.5 bg-muted rounded-sm" style={{ width: bars[0] }} />
                {bars[1] > 0 && <div className="h-2.5 bg-muted rounded-sm opacity-60" style={{ width: bars[1] }} />}
                
                {hoveredLogo === i && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 bg-surface border border-accent/25 backdrop-blur-md rounded-lg p-3 text-[10px] text-muted w-[185px] pointer-events-none shadow-[0_8px_25px_rgba(0,0,0,0.6)] animate-fade-in z-20 font-mono">
                    <div className="text-white font-bold mb-1 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-2 animate-pulse" />
                      REDACTED PIPELINE
                    </div>
                    <div className="text-accent-2 mb-0.5 font-semibold">IF: {logoDetails[i].trigger}</div>
                    <div className="text-muted mb-1.5">THEN: {logoDetails[i].action}</div>
                    <div className="border-t border-border pt-1 text-[8px] text-faint italic font-sans">
                      Impact: {logoDetails[i].impact}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
