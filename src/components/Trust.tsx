import { Eye, SlidersHorizontal, Pause, Shield, Lock } from "lucide-react";

const trustPoints = [
  {
    icon: Eye,
    title: "Preview every email",
    description: "See exactly what your client will receive before it sends",
  },
  {
    icon: SlidersHorizontal,
    title: "Adjust tone anytime",
    description: "Go from friendly to firm with one click, per client",
  },
  {
    icon: Pause,
    title: "Pause instantly",
    description: "Stop any reminder sequence immediately if needed",
  },
  {
    icon: Shield,
    title: "Nothing sends without you",
    description: "Every email requires your approval. Period.",
  },
];

export function Trust() {
  return (
    <section className="section-alt relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-success/5 blur-3xl" />
      
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">Complete control</p>
            <h2 className="section-title">
              Your reputation.{" "}
              <span className="text-gradient">Your rules.</span>
            </h2>
            <p className="section-subtitle mx-auto mt-4">
              We know how much your client relationships matter. That's why you stay in charge of everything.
            </p>
          </div>

          {/* Trust grid */}
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {trustPoints.map((point, index) => (
              <div
                key={index}
                className="feature-card flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center shrink-0">
                  <point.icon className="w-6 h-6 text-success" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1 font-body">{point.title}</h3>
                  <p className="text-sm text-muted-foreground">{point.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Security badge */}
          <div className="text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-card border border-border">
              <Lock className="w-4 h-4 text-success" />
              <span className="text-sm text-muted-foreground">
                This is <span className="text-foreground font-medium">your voice</span> — we just handle the timing and delivery.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
