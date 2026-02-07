import { Clock, FileText, AlertCircle, Timer, TrendingDown } from "lucide-react";

const painPoints = [
  { icon: Clock, text: "Remembering who owes you money" },
  { icon: FileText, text: "Rewriting the same awkward email" },
  { icon: AlertCircle, text: "Worrying you'll sound too pushy" },
  { icon: Timer, text: "Putting it off (again)" },
];

export function Problem() {
  return (
    <section className="bg-background relative overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-destructive/3 blur-3xl" />
      
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">The real problem</p>
            <h2 className="section-title">
              Late payments aren't the issue.{" "}
              <br className="hidden md:block" />
              <span className="text-gradient">Chasing them is.</span>
            </h2>
          </div>

          {/* The reality */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left - Story */}
            <div className="space-y-6">
              <div className="space-y-4 text-xl text-muted-foreground leading-relaxed">
                <p>You already did the work.</p>
                <p>You delivered real value.</p>
                <p>You sent the invoice on time.</p>
                <p className="text-foreground font-semibold text-2xl">Then comes the part you dread...</p>
              </div>
            </div>

            {/* Right - Pain points */}
            <div className="space-y-3">
              {painPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-destructive/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center shrink-0">
                    <point.icon className="w-5 h-5 text-destructive" />
                  </div>
                  <span className="text-foreground font-medium">{point.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key insight */}
          <div className="text-center p-8 rounded-2xl bg-card border border-border">
            <TrendingDown className="w-10 h-10 text-primary mx-auto mb-4" />
            <p className="text-xl md:text-2xl text-foreground font-display">
              It's not about being bad at business.
            </p>
            <p className="text-xl md:text-2xl text-muted-foreground mt-2 font-display">
              It's about how asking for money makes you feel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
