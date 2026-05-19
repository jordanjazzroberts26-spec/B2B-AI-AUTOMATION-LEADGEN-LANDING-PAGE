import { useReveal } from '../hooks/useReveal';

const stats = [
  { number: '8', suffix: '+', label: 'Years working with operational systems and data' },
  { number: '120', suffix: '+', label: 'Automations running in production environments' },
  { number: '14', suffix: '+', label: 'Industries served across B2B operations' },
];

export function Stats() {
  const ref = useReveal();

  return (
    <section id="stats" className="border-t border-b border-border">
      <div ref={ref} className="max-w-container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {stats.map((stat, i) => (
            <div
              key={stat.number}
              className={`reveal delay-r${i + 1} py-10 px-6 md:px-12 flex flex-col gap-1.5 border-b md:border-b-0 md:border-r border-border last:border-r-0 last:border-b-0 transition-all duration-300 hover:scale-[1.02] hover:bg-white/[0.01] cursor-default`}
            >
              <div className="text-4xl md:text-5xl font-bold tracking-tighter text-white leading-none">
                {stat.number}<span className="text-accent-2">{stat.suffix}</span>
              </div>
              <div className="text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
