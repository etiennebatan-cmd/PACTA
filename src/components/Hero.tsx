import { Zap, Brain, Heart, CheckCircle } from "lucide-react";
import { WaitlistForm } from "./WaitlistForm";

export function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
      {/* Layered background */}
      <div className="absolute inset-0 bg-pattern opacity-40" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 right-0 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl" />
      
      {/* Accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
      
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center stagger-children">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-primary/10 border border-primary/20">
            <Brain className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">AI-Powered • Human-Sounding</span>
          </div>
          
          {/* Headline - clear and emotional */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-foreground leading-[1.05] mb-8 font-display">
            Finally get paid{" "}
            <span className="text-gradient">without</span>{" "}
            the awkward chase
          </h1>
          
          {/* Sub-headline - speaks to the feeling */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-body">
            You did the work. You sent the invoice. Now let AI handle the uncomfortable part — 
            polite, perfectly-timed reminders that sound exactly like you wrote them.
          </p>
          
          {/* Value props - what they get */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {[
              { icon: CheckCircle, text: "No more dreaded follow-ups" },
              { icon: Heart, text: "Keeps client relationships intact" },
              { icon: Zap, text: "Get paid 47% faster on average" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-muted-foreground">
                <item.icon className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
          
          {/* CTA Form */}
          <div className="max-w-md mx-auto mb-6">
            <WaitlistForm />
          </div>
          
          {/* Trust line */}
          <p className="text-sm text-muted-foreground">
            <span className="text-primary font-semibold">Early access:</span> Lifetime deal at a one-time price
          </p>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
