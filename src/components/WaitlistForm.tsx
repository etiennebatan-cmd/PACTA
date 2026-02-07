import { useState } from "react";
import { Input } from "@/components/ui/input";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import type { Id } from "../../convex/_generated/dataModel";

interface WaitlistFormProps {
  variant?: "default" | "minimal";
}

export function WaitlistForm({ variant = "default" }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState<string>("");
  const [struggle, setStruggle] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const [waitlistId, setWaitlistId] = useState<Id<"waitlist"> | null>(null);

  const addToWaitlist = useMutation(api.waitlist.add);
  const updateStruggle = useMutation(api.waitlist.updateStruggle);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      const id = await addToWaitlist({
        email: email,
        userType: userType || undefined,
      });
      
      setWaitlistId(id);
      setIsSubmitting(false);
      setShowQuestion(true);
    } catch (err) {
      console.error('Submission error:', err);
      setError('Something went wrong. Please try again.');
      setIsSubmitting(false);
    }
  };

  const handleStruggleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (waitlistId && struggle.trim()) {
        await updateStruggle({
          id: waitlistId,
          struggle: struggle,
        });
      }
      
      setIsSubmitting(false);
      setIsSuccess(true);
    } catch (err) {
      console.error('Struggle update error:', err);
      setIsSuccess(true);
    }
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-gradient-to-br from-success/10 to-success/5 border border-success/20 animate-scale-in">
        <div className="w-14 h-14 rounded-full bg-success flex items-center justify-center shadow-lg">
          <Check className="w-7 h-7 text-success-foreground" />
        </div>
        <div className="text-center">
          <p className="text-xl font-semibold text-foreground mb-1">You're on the list!</p>
          <p className="text-muted-foreground">
            We'll reach out when early access opens.
          </p>
        </div>
      </div>
    );
  }

  if (showQuestion) {
    return (
      <div className="space-y-4 animate-fade-in">
        <div className="text-center mb-4">
          <p className="text-lg font-medium text-foreground">One quick question...</p>
          <p className="text-sm text-muted-foreground mt-1">This helps us build exactly what you need</p>
        </div>
        
        <form onSubmit={handleStruggleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              What's your biggest struggle with payment follow-ups?
            </label>
            <textarea
              value={struggle}
              onChange={(e) => setStruggle(e.target.value)}
              placeholder="e.g., Finding the right tone, tracking who to follow up with, remembering to send them..."
              className="w-full min-h-[100px] px-4 py-3 text-base bg-background border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground/60"
              disabled={isSubmitting}
            />
          </div>
          
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setIsSuccess(true)}
              className="flex-1 h-12 px-6 text-sm border border-border rounded-lg hover:bg-muted transition-colors"
              disabled={isSubmitting}
            >
              Skip
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 btn-hero h-12 px-6"
            >
              {isSubmitting ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  Continue
                  <ArrowRight className="w-4 h-4 ml-2" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <form onSubmit={handleEmailSubmit} className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 h-14 px-5 text-base bg-background border-border focus:border-primary focus:ring-primary/20 placeholder:text-muted-foreground/60"
          disabled={isSubmitting}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-hero h-14 px-8 whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <>
              Get Early Access
              <ArrowRight className="w-5 h-5 ml-2" />
            </>
          )}
        </button>
      </div>

      {variant === "default" && (
        <div className="flex flex-wrap justify-center gap-2 pt-2">
          {["Freelancer", "Small Agency", "Service Business"].map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setUserType(userType === type ? "" : type)}
              className={`px-4 py-2 text-sm rounded-full border transition-all duration-200 ${
                userType === type
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      )}

      {error && (
        <p className="text-sm text-destructive text-center animate-fade-in">{error}</p>
      )}
    </form>
  );
}