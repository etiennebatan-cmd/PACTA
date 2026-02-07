import { ArrowRight, Sparkles } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="bg-background border-t border-border relative overflow-hidden">
      {/* Gradient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/10 blur-3xl" />
      
      <div className="section-container relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <Sparkles className="w-10 h-10 text-primary mx-auto mb-6" />
          
          <h2 className="section-title mb-4">
            Ready to get paid{" "}
            <span className="text-gradient">without the stress?</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8">
            Join hundreds of freelancers and agencies who stopped dreading invoice follow-ups.
          </p>

          <a
            href="#waitlist"
            className="btn-hero inline-flex"
          >
            Get Early Access
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
          
          <p className="mt-6 text-sm text-muted-foreground">
            No spam. No credit card. Just early access.
          </p>
        </div>
      </div>
    </section>
  );
}
