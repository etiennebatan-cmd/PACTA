import { Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Send className="w-4 h-4 text-primary-foreground rotate-12" />
            </div>
            <span className="font-semibold text-foreground">Invoice Chaser</span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Invoice Chaser. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
