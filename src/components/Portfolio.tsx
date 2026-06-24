import { useScrollReveal } from '../hooks/useScrollReveal';
import { Play } from 'lucide-react';

export function Portfolio() {
  const sectionRef = useScrollReveal();

  const projects = [
    {
      title: "Real Estate Lead Routing",
      metric: "+145% Lead Conversion",
      tag: "AI Agent",
      color: "neon"
    },
    {
      title: "E-Commerce Support Bot",
      metric: "78% Tickets Resolved",
      tag: "Chatbot",
      color: "purple"
    },
    {
      title: "B2B Outbound Engine",
      metric: "32 Meetings / Week",
      tag: "Email Automation",
      color: "neon"
    }
  ];

  return (
    <section ref={sectionRef as any} id="portfolio" className="py-24 md:py-32 relative">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out">
          <div>
            <h2 className="text-[40px] md:text-[56px] font-bold text-primary leading-tight">
              Featured <span className="text-neon">Work.</span>
            </h2>
            <p className="text-muted text-lg mt-4 max-w-xl">
              See how our automation systems operate in the real world. Real businesses, real workflows, real results.
            </p>
          </div>
          <button className="hidden md:inline-flex items-center gap-2 border border-border text-primary hover:border-neon/50 px-6 py-3 rounded-full transition-colors hover:shadow-neon">
            View full portfolio
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div 
              key={i}
              className="group animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out flex flex-col gap-4"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Video Placeholder Container */}
              <div className={`relative aspect-video bg-surface border border-border group-hover:border-${p.color}/40 rounded-2xl overflow-hidden cursor-pointer transition-colors duration-500 hover:shadow-inner group-hover:shadow-neon`}>
                <div className="absolute inset-0 bg-gradient-to-tr from-bg to-transparent opacity-60 z-10" />
                
                {/* Simulated UI/Dashboard elements in background */}
                <div className="absolute inset-4 border border-border rounded-xl opacity-20 pointer-events-none" />
                <div className="absolute top-8 left-8 right-8 h-8 bg-border rounded-md opacity-20 pointer-events-none" />
                <div className="absolute top-20 left-8 w-1/3 h-24 bg-border rounded-md opacity-20 pointer-events-none" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className={`w-16 h-16 rounded-full bg-${p.color}/10 flex items-center justify-center backdrop-blur-md border border-${p.color}/30 group-hover:scale-110 group-hover:bg-${p.color}/20 transition-all duration-300 shadow-neon`}>
                    <Play className={`w-6 h-6 text-${p.color} ml-1`} fill="currentColor" />
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-primary font-semibold text-xl">{p.title}</h3>
                  <span className={`text-${p.color} text-sm font-medium px-3 py-1 bg-${p.color}/10 rounded-full`}>
                    {p.tag}
                  </span>
                </div>
                <p className="text-muted font-mono text-sm uppercase tracking-wider">{p.metric}</p>
              </div>
            </div>
          ))}
        </div>
        
        <button className="md:hidden mt-10 w-full inline-flex justify-center items-center gap-2 border border-border text-primary hover:border-neon/50 px-6 py-4 rounded-full transition-colors animate-on-scroll opacity-0 translate-y-8 hover:shadow-neon">
          View full portfolio
        </button>

      </div>
    </section>
  );
}
