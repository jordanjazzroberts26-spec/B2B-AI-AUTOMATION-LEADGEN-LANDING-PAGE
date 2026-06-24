import { useScrollReveal } from '../hooks/useScrollReveal';
import { MessageSquare, Bot, Mail, ArrowRight } from 'lucide-react';

export function Services() {
  const sectionRef = useScrollReveal();

  const services = [
    {
      title: "Instagram DM Automation",
      desc: "Turn followers into booked calls on autopilot. AI-driven chat sequences that qualify leads and sync directly with your calendar.",
      icon: <MessageSquare className="w-7 h-7 text-neon" />,
      bgGradient: "from-neon/10 to-transparent",
      borderColor: "hover:border-neon/50",
      shadow: "hover:shadow-neon"
    },
    {
      title: "AI Chatbots & Agents",
      desc: "Custom-trained AI agents embedded on your site. They answer queries, overcome objections, and act as a 24/7 SDR.",
      icon: <Bot className="w-7 h-7 text-purple" />,
      bgGradient: "from-purple/10 to-transparent",
      borderColor: "hover:border-purple/50",
      shadow: "hover:shadow-neon" // Neon glow effect specified for active cards
    },
    {
      title: "Email & Lead Automation",
      desc: "Smart inbound routing and personalized email follow-ups. Ensure no lead ever falls through the cracks again.",
      icon: <Mail className="w-7 h-7 text-neon" />,
      bgGradient: "from-neon/10 to-purple/10",
      borderColor: "hover:border-neon/40",
      shadow: "hover:shadow-neon"
    }
  ];

  return (
    <section ref={sectionRef as any} id="services" className="py-24 md:py-32 relative border-t border-border">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        <div className="text-center mb-20 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out">
          <span className="text-purple font-semibold tracking-widest uppercase text-sm mb-4 block">Our Expertise</span>
          <h2 className="text-[40px] md:text-[56px] font-bold text-primary leading-tight">
            Systems that <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple to-neon">generate revenue.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div 
              key={i} 
              className={`group animate-on-scroll opacity-0 translate-y-8 transition-all duration-[800ms] ease-out bg-surface border border-border rounded-3xl p-8 lg:p-10 flex flex-col h-full relative overflow-hidden ${s.borderColor} ${s.shadow} hover:shadow-inner`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Subtle top gradient */}
              <div className={`absolute top-0 left-0 w-full h-32 bg-gradient-to-b ${s.bgGradient} opacity-50 pointer-events-none`} />
              
              <div className="w-16 h-16 rounded-2xl bg-border/40 flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 transition-transform duration-500">
                {s.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-primary mb-4 relative z-10">{s.title}</h3>
              <p className="text-muted leading-relaxed mb-10 flex-grow relative z-10">{s.desc}</p>
              
              <button className="flex items-center gap-2 text-primary font-medium group-hover:text-neon transition-colors mt-auto relative z-10 w-fit">
                Learn more <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
