import { useEffect, useState } from 'react';
import { Asterisk } from 'lucide-react';
import { useScrollProgress } from '../hooks/useScrollProgress';

export function Navbar() {
  const scrollY = useScrollProgress();
  const [isAuditActive, setIsAuditActive] = useState(false);

  useEffect(() => {
    const auditSection = document.getElementById('audit');
    if (!auditSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsAuditActive(entry.isIntersecting);
      },
      {
        rootMargin: '-20% 0px -40% 0px',
        threshold: 0.1,
      }
    );

    observer.observe(auditSection);
    return () => observer.disconnect();
  }, []);

  const hasScrolled = scrollY > 50;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
        hasScrolled
          ? 'bg-bg/90 backdrop-blur-[20px] border-b border-border shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="text-base font-bold tracking-tight text-white no-underline flex items-center gap-2">
          <div className="w-7 h-7 bg-accent rounded-lg flex items-center justify-center">
            <Asterisk className="w-4 h-4 text-white" />
          </div>
          Meridian
        </a>
        <a
          href="#audit"
          className={`text-sm font-semibold no-underline px-4 py-2 border rounded-md transition-all flex items-center gap-2 ${
            isAuditActive
              ? 'bg-accent/15 border-accent-2 text-white shadow-[0_0_15px_rgba(108,99,255,0.25)]'
              : 'text-muted border-border hover:border-accent-2 hover:text-white'
          }`}
        >
          Request an Audit
          {isAuditActive && (
            <span className="w-1.5 h-1.5 bg-accent-2 rounded-full animate-pulse" />
          )}
        </a>
      </div>
    </nav>
  );
}
