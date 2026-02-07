import { User, Users, Briefcase, CheckCircle2 } from "lucide-react";

const audiences = [
  {
    icon: User,
    title: "Freelancers & consultants",
    description: "You're great at your craft. Chasing payments? Not so much. We get it.",
  },
  {
    icon: Users,
    title: "Small agencies",
    description: "Your team is busy delivering results. Let us handle the uncomfortable money conversations.",
  },
  {
    icon: Briefcase,
    title: "Service businesses",
    description: "Professional reminders that protect your reputation and your relationships.",
  },
];

export function WhoFor() {
  return (
    <section className="section-alt relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/3 blur-3xl" />
      
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">Who it's for</p>
            <h2 className="section-title">
              Built for people who{" "}
              <span className="text-gradient">deserve to get paid</span>
            </h2>
            <p className="section-subtitle mx-auto mt-4">
              Without the stress, guilt, or awkwardness of asking.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {audiences.map((item, index) => (
              <article
                key={index}
                className="feature-card group"
              >
                <div className="w-14 h-14 mb-5 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 font-body">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </article>
            ))}
          </div>

          {/* Pull quote */}
          <div className="highlight-box text-center">
            <CheckCircle2 className="w-8 h-8 text-primary mx-auto mb-4" />
            <p className="text-xl md:text-2xl text-foreground font-display">
              "If you've ever delayed sending a reminder because it felt uncomfortable — this is for you."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
