import { Send } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow">
            <Send className="w-4 h-4 text-primary-foreground rotate-12" />
          </div>
          <span className="font-semibold text-foreground tracking-tight">Invoice Chaser</span>
        </div>

        {/* CTA */}
        <a
          href="#waitlist"
          className="px-5 py-2.5 text-sm font-semibold rounded-lg bg-primary text-primary-foreground transition-all duration-200 hover:bg-primary/90 hover:shadow-glow"
        >
          Get Early Access
        </a>
      </div>
    </nav>
  );
}
