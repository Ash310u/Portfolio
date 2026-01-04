"use client";

import { useState, useEffect } from "react";
import Loader from "@/components/loader";
import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import ExpertiseSection from "@/components/sections/expertise-section";
import FaqSection from "@/components/sections/faq-section";
import CtaSection from "@/components/sections/cta-section";
import Footer from "@/components/layout/footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate asset loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // Adjust time as needed for preloading

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader onLoaded={() => setLoading(false)} />;
  }

  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <div className="w-full">
        <AboutSection />
        <ExpertiseSection />
        <FaqSection />
        <CtaSection />
      </div>
      <Footer />
    </main>
  );
}
