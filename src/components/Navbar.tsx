import { Send } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/favicon.ico" alt="PACTA" className="h-8 w-8" />
          <span className="font-bold text-xl text-foreground">PACTA</span>
        </div>
        <a href="#waitlist" className="px-5 py-2.5 text-sm font-semibold rounded-lg bg-primary text-primary-foreground transition-all duration-200 hover:bg-primary/90 hover:shadow-glow">Get Early Access</a>
      </div>
    </nav>
  );
}