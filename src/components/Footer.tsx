import { Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img src="/favicon.ico" alt="PACTA" className="h-6 w-6" />
            <span className="font-semibold text-foreground">PACTA</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} PACTA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}