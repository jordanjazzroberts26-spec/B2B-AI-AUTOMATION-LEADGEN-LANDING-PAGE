import { Asterisk } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 bg-bg/82 backdrop-blur-[14px] border-b border-border">
      <div className="max-w-container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="text-base font-bold tracking-tight text-white no-underline flex items-center gap-2">
          <div className="w-7 h-7 bg-accent rounded-lg flex items-center justify-center">
            <Asterisk className="w-4 h-4 text-white" />
          </div>
          Meridian
        </a>
        <a
          href="#audit"
          className="text-sm font-semibold text-muted no-underline px-4 py-2 border border-border rounded-md hover:border-accent-2 hover:text-white transition-colors"
        >
          Request an Audit
        </a>
      </div>
    </nav>
  );
}
