import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Is this already live?",
    answer:
      "Not yet — and that's actually a good thing. We're onboarding early users first to make sure Invoice Chaser works perfectly for real businesses like yours. Join the waitlist to be first in line.",
  },
  {
    question: "Will this email my clients without my permission?",
    answer:
      "Never. Every single reminder gets your approval before it's sent. You preview the exact email, you decide when it goes out. We're a tool that works for you, not around you.",
  },
  {
    question: "How does the AI actually sound human?",
    answer:
      "We trained our AI on thousands of successful payment reminders that maintained great client relationships. It adapts to your tone and style — friendly, professional, or firm — and never sounds like a template or a robot.",
  },
  {
    question: "What if I need to pause reminders for a client?",
    answer:
      "One click. That's it. You can pause, stop, or adjust any reminder sequence instantly. Life happens, and we get that.",
  },
  {
    question: "Who is this NOT for?",
    answer:
      "Large enterprises with dedicated accounting teams or complex ERP systems. We're built specifically for freelancers, consultants, small agencies, and service businesses who invoice clients directly.",
  },
  {
    question: "How much will this cost?",
    answer:
      "Early access members get a one-time lifetime deal at a significant discount. After early access closes, we'll switch to monthly subscription pricing. Get in now to lock in lifetime access.",
  },
];

export function FAQ() {
  return (
    <section className="section-alt relative">
      <div className="section-container">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary/10 border border-primary/20">
              <HelpCircle className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Got questions?</span>
            </div>
            <h2 className="section-title">Frequently asked questions</h2>
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30 data-[state=open]:shadow-glow transition-all"
              >
                <AccordionTrigger className="faq-trigger hover:no-underline py-5">
                  <span className="text-left pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
