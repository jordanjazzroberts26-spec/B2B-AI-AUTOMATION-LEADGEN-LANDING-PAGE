import { Asterisk } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#hero" className="text-base font-bold tracking-tight text-white no-underline flex items-center gap-2">
          <div className="w-7 h-7 bg-accent rounded-lg flex items-center justify-center">
            <Asterisk className="w-4 h-4 text-white" />
          </div>
          Nova
        </a>

        <div className="flex gap-6 flex-wrap justify-center">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted no-underline hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <span className="text-xs text-faint">&copy; 2026 Nova. AI Automation Specialist.</span>
      </div>
    </footer>
  );
}
