"use client";

import Link from "next/link";
import { defaultSiteData } from "@/lib/site-data";
import { Youtube, Instagram, X, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { useState, useEffect } from "react";

const iconMap = {
  Youtube: Youtube,
  Instagram: Instagram,
  X: X,
  Linkedin: Linkedin,
};

export default function Footer() {
  const data = defaultSiteData.footer;
  const [copyright, setCopyright] = useState(data.copyright);

  useEffect(() => {
    setCopyright(data.copyright.replace('%YEAR%', new Date().getFullYear().toString()));
  }, [data.copyright]);

  return (
    <footer className="bg-background border-t border-border/50 mt-12 sm:mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
          <div className="text-center md:text-left order-1 md:order-1">
            <Link href="/" className="text-base sm:text-lg font-bold font-headline">
              {defaultSiteData.name}
            </Link>
          </div>
          <nav className="flex flex-wrap justify-center gap-3 sm:gap-4 order-3 md:order-2">
            {data.links.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.title}
              </Link>
            ))}
          </nav>
          <div className="flex gap-2 order-2 md:order-3">
            {data.socials.map((social) => {
              const Icon = iconMap[social.icon as keyof typeof iconMap];
              return (
                <Link
                  key={social.title}
                  href={social.href}
                  aria-label={social.title}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "text-muted-foreground hover:text-foreground h-8 w-8 sm:h-10 sm:w-10"
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {Icon && <Icon className="h-4 w-4 sm:h-5 sm:w-5" />}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="mt-6 sm:mt-8 text-center text-xs text-muted-foreground">
          <p>{copyright}</p>
        </div>
      </div>
    </footer>
  );
}
