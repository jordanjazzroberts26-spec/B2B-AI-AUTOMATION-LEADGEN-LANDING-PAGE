import { Star } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const testimonials = [
  {
    quote:
      'Our Instagram DMs used to be a black hole. Now every lead gets answered in seconds and books a call automatically. We closed 40% more deals in the first month.',
    name: 'Sarah Lindqvist',
    role: 'Founder, Bloom Studio',
    initials: 'SL',
  },
  {
    quote:
      'The AI chatbot handles the questions my team used to spend hours on. It feels like we hired three support reps overnight — without the overhead.',
    name: 'Marcus Bell',
    role: 'COO, Nordwind SaaS',
    initials: 'MB',
  },
  {
    quote:
      'The lead automation pipeline is genuinely the best investment we made this year. Cleaner data, faster follow-ups, and our reply rate tripled.',
    name: 'Priya Nair',
    role: 'Head of Growth, Lumen',
    initials: 'PN',
  },
];

export function Testimonials() {
  const ref = useReveal();

  return (
    <section id="testimonials" ref={ref} className="py-24 md:py-32 relative bg-mesh-credibility border-y border-border">
      <div className="max-w-container mx-auto px-6 md:px-12">
        <div className="max-w-2xl mb-14 reveal">
          <span className="text-xs font-semibold tracking-widest uppercase text-accent-2">Testimonials</span>
          <h2 className="text-white mt-4 text-balance">Trusted by founders who needed to scale.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className={`reveal delay-r${i + 1} interactive-cred-card flex flex-col bg-surface border border-border rounded-2xl p-7`}
            >
              <div className="flex gap-1 mb-5" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="w-4 h-4 text-accent-2 fill-current" />
                ))}
              </div>
              <blockquote className="text-base text-white leading-relaxed mb-7">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/15 text-accent-2 text-sm font-semibold">
                  {t.initials}
                </span>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-muted">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
