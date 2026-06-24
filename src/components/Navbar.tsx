import { useEffect, useState } from 'react';
import { Asterisk, Menu, X } from 'lucide-react';
import { useScrollProgress } from '../hooks/useScrollProgress';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Testimonials', href: '#testimonials' },
];

export function Navbar() {
  const scrollY = useScrollProgress();
  const [menuOpen, setMenuOpen] = useState(false);
  const hasScrolled = scrollY > 50;

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
        hasScrolled
          ? 'bg-bg/90 backdrop-blur-[20px] border-b border-border shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#hero" className="text-base font-bold tracking-tight text-white no-underline flex items-center gap-2">
          <div className="w-7 h-7 bg-accent rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(108,99,255,0.45)]">
            <Asterisk className="w-4 h-4 text-white" />
          </div>
          Nova
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted no-underline hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex text-sm font-semibold no-underline px-4 py-2 border border-border rounded-md text-muted hover:border-accent-2 hover:text-white hover:shadow-[0_0_18px_rgba(108,99,255,0.25)] transition-all"
          >
            Let&apos;s Talk
          </a>
          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-md border border-border text-white"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[64px] bottom-0 bg-bg/95 backdrop-blur-xl border-t border-border px-6 py-8 flex flex-col gap-2 animate-fade-in">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-lg font-medium text-muted no-underline py-3 border-b border-border hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 inline-flex items-center justify-center bg-accent text-white text-sm font-semibold px-6 py-3.5 rounded-lg no-underline"
          >
            Let&apos;s Talk
          </a>
        </div>
      )}
    </nav>
  );
}
