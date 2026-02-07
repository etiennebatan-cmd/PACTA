import { Upload, MessageSquare, Send, ArrowRight, Sparkles, FileText, Clock, Mail } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: Upload,
    title: "Forward your invoice",
    description: "Just forward the invoice email to us. Our AI instantly extracts the client name, amount owed, and due date. No typing, no forms, no manual entry.",
    highlight: "30 seconds to set up",
    detail: "Works with any invoice format",
  },
  {
    number: 2,
    icon: MessageSquare,
    title: "Choose how to sound",
    description: "Pick your reminder style: Friendly, Professional, or Firm. The AI adapts to match your voice and your relationship with each client — never generic or robotic.",
    highlight: "Your tone, always",
    detail: "Customize per client",
  },
  {
    number: 3,
    icon: Send,
    title: "Sit back and get paid",
    description: "Perfectly-timed reminders go out automatically at day 1, 7, 14, and 30 past due. You approve each one before it sends. No surprises, just results.",
    highlight: "47% faster payments",
    detail: "Stay in full control",
  },
];

export function Solution() {
  return (
    <section className="section-alt relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl -translate-y-1/2" />
      
      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">How it actually works</p>
          <h2 className="section-title max-w-3xl mx-auto">
            Set it up once.{" "}
            <span className="text-gradient">Get paid on autopilot.</span>
          </h2>
          <p className="section-subtitle mx-auto mt-6">
            No learning curve. No complex dashboards. Just results you can feel in your bank account.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative group"
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-6 top-20 w-px h-16 bg-gradient-to-b from-primary/40 to-border" />
                )}

                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {/* Step number */}
                  <div className="step-number shrink-0">
                    {step.number}
                  </div>

                  {/* Content card */}
                  <div className="feature-card flex-1 w-full">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold text-foreground font-body">
                            {step.title}
                          </h3>
                          <span className="badge-primary text-xs">
                            <Sparkles className="w-3 h-3" />
                            {step.highlight}
                          </span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-3">{step.description}</p>
                        <p className="text-sm text-primary font-medium">{step.detail}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What you get summary */}
        <div className="max-w-3xl mx-auto mt-16 p-8 rounded-2xl bg-card border border-border">
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center font-body">What happens after you sign up:</h3>
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div>
              <FileText className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="font-medium text-foreground">Forward invoices</p>
              <p className="text-sm text-muted-foreground">We handle detection</p>
            </div>
            <div>
              <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="font-medium text-foreground">AI schedules reminders</p>
              <p className="text-sm text-muted-foreground">Perfectly timed</p>
            </div>
            <div>
              <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="font-medium text-foreground">You approve & send</p>
              <p className="text-sm text-muted-foreground">Always in control</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="#waitlist"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            Start getting paid faster
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
