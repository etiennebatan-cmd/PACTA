import { Gift, MessageCircle, Headphones, Rocket, Clock } from "lucide-react";
import { WaitlistForm } from "./WaitlistForm";

const benefits = [
  {
    icon: Gift,
    title: "Lifetime access",
    description: "One payment. Use forever. No recurring fees.",
  },
  {
    icon: MessageCircle,
    title: "Shape the product",
    description: "Your feedback directly influences what we build next.",
  },
  {
    icon: Headphones,
    title: "Priority support",
    description: "Direct line to our team. We're here for you.",
  },
];

export function EarlyAccess() {
  return (
    <section className="bg-background relative overflow-hidden" id="waitlist">
      {/* Gradient backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />
      
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary/10 border border-primary/20">
              <Rocket className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Limited spots available</span>
            </div>
            <h2 className="section-title">
              Early access +{" "}
              <span className="text-gradient">lifetime deal</span>
            </h2>
            <p className="section-subtitle mx-auto mt-4">
              Join the small group of early users who are helping shape the future of invoice follow-ups.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-card border border-border"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1 font-body">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Form card */}
          <div className="max-w-lg mx-auto p-8 rounded-3xl bg-card border border-border shadow-glow-primary">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold text-foreground mb-2 font-display">Join the waitlist</h3>
              <p className="text-muted-foreground">Be first in line when we launch.</p>
            </div>
            
            <WaitlistForm variant="default" />
            
            <div className="flex items-center justify-center gap-2 mt-6 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>Early access closes soon. Monthly pricing after.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
