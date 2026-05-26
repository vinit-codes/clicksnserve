import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingCards from "@/components/PricingCards";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import StickyFloatingCTA from "@/components/StickyFloatingCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-emerald-500/30">
      <Navbar />
      <Hero />
      <ProblemSection />
      <FeaturesSection />
      <PricingCards />
      <ContactForm />
      <Footer />
      <StickyFloatingCTA />
    </main>
  );
}
