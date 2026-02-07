import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/SocialProof";
import { WhoFor } from "@/components/WhoFor";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { Different } from "@/components/Different";
import { Trust } from "@/components/Trust";
import { EarlyAccess } from "@/components/EarlyAccess";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <SocialProof />
        <WhoFor />
        <Problem />
        <Solution />
        <Different />
        <Trust />
        <EarlyAccess />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
