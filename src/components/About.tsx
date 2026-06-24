import { useScrollReveal } from '../hooks/useScrollReveal';
import { Cpu, Zap, LineChart, ShieldCheck } from 'lucide-react';

export function About() {
  const sectionRef = useScrollReveal();

  const benefits = [
    {
      icon: <Zap className="w-6 h-6 text-neon" />,
      title: "Hyper-Efficiency",
      desc: "Automate repetitive workflows and reclaim hundreds of hours per month."
    },
    {
      icon: <LineChart className="w-6 h-6 text-purple" />,
      title: "Scalable Growth",
      desc: "Systems that handle 10 or 10,000 leads with zero drop in performance."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-neon" />,
      title: "Error-Free Ops",
      desc: "Eliminate human error from data entry, follow-ups, and pipeline management."
    },
    {
      icon: <Cpu className="w-6 h-6 text-purple" />,
      title: "Always On",
      desc: "Your AI never sleeps. Capture, qualify, and route leads 24/7/365."
    }
  ];

  return (
    <section ref={sectionRef as any} id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="animate-on-scroll opacity-0 -translate-x-8 transition-all duration-1000 ease-out">
            <h2 className="text-[40px] md:text-[56px] font-bold text-primary leading-tight mb-6">
              The unfair advantage for <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon to-purple">modern businesses.</span>
            </h2>
            <p className="text-muted text-lg md:text-xl leading-relaxed mb-8">
              We build custom AI automation infrastructure that strips away the friction in your operations. By replacing manual grunt work with intelligent, autonomous systems, we help businesses scale revenue without scaling headcount.
            </p>
            <div className="inline-flex items-center gap-4 bg-surface border border-border rounded-full px-6 py-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-neon"></span>
              </span>
              <span className="text-primary text-sm font-medium tracking-wide">Fully Managed & Maintained</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-on-scroll opacity-0 translate-x-8 transition-all duration-1000 ease-out delay-200">
            {benefits.map((b, i) => (
              <div key={i} className="group bg-surface backdrop-blur-sm border border-border hover:border-neon/40 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-neon hover:shadow-inner">
                <div className="w-12 h-12 rounded-xl bg-border/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  {b.icon}
                </div>
                <h3 className="text-primary font-semibold text-lg mb-2">{b.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
