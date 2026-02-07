import { TrendingUp, DollarSign, Clock, Smile } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "47%",
    label: "faster payments",
    description: "Average improvement in collection time",
  },
  {
    icon: DollarSign,
    value: "$12K",
    label: "recovered monthly",
    description: "Average increase in cash flow",
  },
  {
    icon: Clock,
    value: "3 min",
    label: "setup time",
    description: "From signup to first automated reminder",
  },
  {
    icon: Smile,
    value: "Zero",
    label: "awkward emails",
    description: "No more dreading the follow-up",
  },
];

export function SocialProof() {
  return (
    <section className="bg-background relative overflow-hidden border-t border-border">
      <div className="section-container py-16 md:py-20">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider">What you can expect</p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/20 transition-colors"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-3xl md:text-4xl font-bold text-foreground mb-1 font-display">
                  {stat.value}
                </p>
                <p className="text-primary font-semibold text-sm mb-2">{stat.label}</p>
                <p className="text-xs text-muted-foreground">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
