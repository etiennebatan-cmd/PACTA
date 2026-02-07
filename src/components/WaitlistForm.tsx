import { useState } from "react";
import { Input } from "@/components/ui/input";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";

interface WaitlistFormProps {
  variant?: "default" | "minimal";
}

export function WaitlistForm({ variant = "default" }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const addToWaitlist = useMutation(api.waitlist.add);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      await addToWaitlist({
        email: email,
        userType: userType || undefined,
      });
      
      setIsSubmitting(false);
      setIsSuccess(true);
    } catch (err) {
      console.error('Submission error:', err);
      setError('Something went wrong. Please try again.');
      setIsSubmitting(false);
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

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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