import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingCards from "@/components/PricingCards";
import WebsiteSection from "@/components/WebsiteSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import StickyFloatingCTA from "@/components/StickyFloatingCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <ProblemSection />
      <FeaturesSection />
      <PricingCards />
      <WebsiteSection />
      <ContactForm />
      <Footer />
      <StickyFloatingCTA />
    </main>
  );
}
