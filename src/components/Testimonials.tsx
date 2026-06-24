import { useScrollReveal } from '../hooks/useScrollReveal';
import { Quote } from 'lucide-react';

export function Testimonials() {
  const sectionRef = useScrollReveal();

  const testimonials = [
    {
      quote: "The AI agent they built for our site handles 80% of top-of-funnel queries. Our SDRs are now only talking to highly qualified leads. It completely changed our sales velocity.",
      name: "Sarah Jenkins",
      role: "VP of Sales, TechFlow",
      image: "https://i.pravatar.cc/150?u=sarah"
    },
    {
      quote: "We were losing dozens of hours a week manually routing leads from our ads. The automation system was implemented in 4 days and hasn't missed a single lead since.",
      name: "Marcus Thorne",
      role: "Founder, GrowthStack",
      image: "https://i.pravatar.cc/150?u=marcus"
    }
  ];

  return (
    <section ref={sectionRef as any} className="py-24 md:py-32 relative border-t border-border overflow-hidden">
      <div className="max-w-[1000px] mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out">
          <h2 className="text-[32px] md:text-[48px] font-bold text-primary leading-tight">
            Trusted by operators.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div 
              key={i}
              className="bg-surface/80 backdrop-blur-md border border-border p-8 md:p-10 rounded-3xl animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out relative hover:shadow-inner hover:border-neon/40 hover:shadow-neon"
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <Quote className="w-10 h-10 text-border absolute top-8 right-8" />
              
              <div className="flex gap-2 mb-6">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-5 h-5 text-neon" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-muted text-lg leading-relaxed mb-10">"{t.quote}"</p>
              
              <div className="flex items-center gap-4 mt-auto">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border border-border grayscale opacity-80" />
                <div>
                  <h4 className="text-primary font-medium">{t.name}</h4>
                  <p className="text-muted text-sm">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
