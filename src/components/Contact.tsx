import { useEffect, useRef } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Remove the initial transform/opacity classes
            entry.target.classList.remove('opacity-0', 'translate-y-8', '-translate-x-8', 'translate-x-8');
            // Add the final transform/opacity classes
            entry.target.classList.add('opacity-100', 'translate-y-0', 'translate-x-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const animatedElements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    animatedElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="contact" 
      className="relative py-24 px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-[800ms] ease-out">
          <div className="inline-block px-4 py-1.5 rounded-full border border-neon/30 mb-6 shadow-neon">
            <span className="text-neon text-sm font-semibold tracking-wide">Get In Touch</span>
          </div>
          <h2 className="text-[56px] leading-tight md:text-[64px] font-bold text-primary mb-6">
            Ready To Automate<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon to-purple">
              Your Business?
            </span>
          </h2>
          <p className="text-muted text-[20px] max-w-2xl mx-auto">
            Let's discuss how AI automation can transform your operations. Book a free consultation today.
          </p>
        </div>

        {/* Two-column grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN — Contact Form */}
          <div className="animate-on-scroll opacity-0 -translate-x-8 transition-all duration-[800ms] ease-out delay-100">
            <form className="bg-surface border border-border rounded-2xl p-8 shadow-xl">
              <div className="space-y-6">
                <div>
                  <label className="block text-primary text-sm font-medium mb-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-primary placeholder-muted focus:outline-none focus:border-neon focus:ring-1 focus:ring-neon/20 transition-colors hover:shadow-inner"
                  />
                </div>
                
                <div>
                  <label className="block text-primary text-sm font-medium mb-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@company.com" 
                    className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-primary placeholder-muted focus:outline-none focus:border-neon focus:ring-1 focus:ring-neon/20 transition-colors hover:shadow-inner"
                  />
                </div>
                
                <div>
                  <label className="block text-primary text-sm font-medium mb-2">Company Name</label>
                  <input 
                    type="text" 
                    placeholder="Your Company" 
                    className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-primary placeholder-muted focus:outline-none focus:border-neon focus:ring-1 focus:ring-neon/20 transition-colors hover:shadow-inner"
                  />
                </div>
                
                <div>
                  <label className="block text-primary text-sm font-medium mb-2">Message</label>
                  <textarea 
                    rows={5}
                    placeholder="Tell us about your automation needs..." 
                    className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-primary placeholder-muted focus:outline-none focus:border-neon focus:ring-1 focus:ring-neon/20 transition-colors resize-none hover:shadow-inner"
                  ></textarea>
                </div>

                <button 
                  type="button"
                  className="group w-full flex items-center justify-center gap-2 bg-gradient-to-r from-neon to-purple text-primary font-semibold py-4 px-6 rounded-lg transition-all duration-300 shadow-neon hover:scale-[1.02]"
                >
                  Send Message
                  <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT COLUMN — Contact Info + CTA */}
          <div className="flex flex-col gap-6 animate-on-scroll opacity-0 translate-x-8 transition-all duration-[800ms] ease-out delay-200">
            
            {/* Card 1 — Email */}
            <div className="group flex items-center gap-6 bg-surface border border-border hover:border-neon/50 rounded-xl p-6 transition-colors duration-300 hover:shadow-inner hover:shadow-neon">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-neon/20 to-neon/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <Mail className="w-6 h-6 text-neon" />
              </div>
              <div>
                <h4 className="text-primary font-medium text-lg">Email Us</h4>
                <p className="text-muted mt-1">hello@aiautomation.com</p>
              </div>
            </div>

            {/* Card 2 — Phone */}
            <div className="group flex items-center gap-6 bg-surface border border-border hover:border-neon/50 rounded-xl p-6 transition-colors duration-300 hover:shadow-inner hover:shadow-neon">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-purple/20 to-purple/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <Phone className="w-6 h-6 text-purple" />
              </div>
              <div>
                <h4 className="text-primary font-medium text-lg">Call Us</h4>
                <p className="text-muted mt-1">+1 (555) 123-4567</p>
              </div>
            </div>

            {/* Card 3 — Location */}
            <div className="group flex items-center gap-6 bg-surface border border-border hover:border-neon/50 rounded-xl p-6 transition-colors duration-300 hover:shadow-inner hover:shadow-neon">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-neon/20 to-purple/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <MapPin className="w-6 h-6 text-neon" />
              </div>
              <div>
                <h4 className="text-primary font-medium text-lg">Visit Us</h4>
                <p className="text-muted mt-1">123 AI Street, Tech Valley<br />San Francisco, CA 94102</p>
              </div>
            </div>

            {/* Below the cards — CTA info box */}
            <div className="mt-4 bg-gradient-to-b from-surface to-bg border border-neon/30 rounded-2xl p-8 hover:shadow-neon transition-shadow duration-300">
              <h4 className="text-primary text-[24px] font-semibold mb-3">Quick Response Guaranteed</h4>
              <p className="text-muted leading-relaxed mb-6">
                We typically respond within 24 hours. For urgent inquiries, feel free to call us directly.
              </p>
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-neon"></span>
                </span>
                <span className="text-sm font-medium text-primary/90">Available Monday - Friday, 9AM - 6PM PST</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
