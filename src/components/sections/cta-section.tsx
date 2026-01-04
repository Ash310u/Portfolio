import { defaultSiteData } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaSection() {
  const ctaData = defaultSiteData.footer;
  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center bg-card/30 rounded-lg p-6 sm:p-8 md:p-10 lg:p-12 shadow-inner-lg border border-border/20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-headline">
            {ctaData.cta}
          </h2>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
              <Link href="https://github.com/Ash310u" target="_blank" rel="noopener noreferrer">
                View Work
              </Link>
            </Button>
            <Button size="lg" asChild className="w-full sm:w-auto">
              <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=ash310u@protonmain.com" target="_blank" rel="noopener noreferrer">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
