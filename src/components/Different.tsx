import { X, Sparkles, Check, Bot, Zap, MessageCircle, Heart } from "lucide-react";

const notItems = [
  "Generic 'your invoice is overdue' emails",
  "Complex accounting software you'll never use",
  "Payment processing setup nightmares",
  "Templates that sound like a robot wrote them",
];

const yesItems = [
  { icon: Heart, text: "Emails that protect your client relationships" },
  { icon: Bot, text: "AI that truly sounds like you wrote it" },
  { icon: Zap, text: "Set once, works forever automation" },
  { icon: MessageCircle, text: "Tone that matches each client" },
];

export function Different() {
  return (
    <section className="bg-background relative">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">Why we're different</p>
            <h2 className="section-title">
              Not another tool.{" "}
              <br className="hidden md:block" />
              <span className="text-gradient">A better way to get paid.</span>
            </h2>
            <p className="section-subtitle mx-auto mt-4">
              We built this because we've been there — dreading that follow-up email.
            </p>
          </div>

          {/* Comparison grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* What we're NOT */}
            <div className="p-8 rounded-2xl bg-card border border-border">
              <h3 className="text-lg font-semibold text-muted-foreground mb-6 font-body">What we're not</h3>
              <div className="space-y-4">
                {notItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center shrink-0">
                      <X className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What we ARE */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20">
              <h3 className="text-lg font-semibold text-foreground mb-6 font-body flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                What we are
              </h3>
              <div className="space-y-4">
                {yesItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom highlight */}
          <div className="text-center">
            <div className="inline-flex items-center gap-4 px-8 py-5 rounded-2xl bg-primary/10 border border-primary/20">
              <Sparkles className="w-6 h-6 text-primary shrink-0" />
              <p className="text-lg md:text-xl font-medium text-foreground">
                Well-timed reminders that feel personal — sent automatically.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
