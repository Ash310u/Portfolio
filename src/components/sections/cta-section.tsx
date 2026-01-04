import { defaultSiteData } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaSection() {
  const ctaData = defaultSiteData.footer;
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="text-center bg-card/30 rounded-lg p-12 shadow-inner-lg border border-border/20">
        <h2 className="text-4xl md:text-5xl font-bold font-headline">
          {ctaData.cta}
        </h2>
        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg" variant="outline" asChild>
            <Link href="https://github.com/Ash310u" target="_blank" rel="noopener noreferrer">
              View Work
            </Link>
          </Button>
          <Button size="lg" asChild>
            <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=ash310u@protonmain.com" target="_blank" rel="noopener noreferrer">
              Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
