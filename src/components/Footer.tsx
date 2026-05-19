export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-container mx-auto px-6 md:px-12 flex items-center justify-between flex-wrap gap-4">
        <span className="text-xs text-faint">&copy; 2025 Meridian. All rights reserved.</span>
        <div className="flex gap-6">
          <a href="#" className="text-xs text-faint no-underline hover:text-muted transition-colors">Privacy</a>
          <a href="#" className="text-xs text-faint no-underline hover:text-muted transition-colors">Terms</a>
          <a href="#audit" className="text-xs text-faint no-underline hover:text-muted transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
