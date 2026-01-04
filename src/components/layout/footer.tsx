"use client";

import Link from "next/link";
import { defaultSiteData } from "@/lib/site-data";
import { Youtube, Instagram, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { useState, useEffect } from "react";

const iconMap = {
  Youtube: Youtube,
  Instagram: Instagram,
  X: X,
};

export default function Footer() {
  const data = defaultSiteData.footer;
  const [copyright, setCopyright] = useState(data.copyright);

  useEffect(() => {
    setCopyright(data.copyright.replace('%YEAR%', new Date().getFullYear().toString()));
  }, [data.copyright]);

  return (
    <footer className="bg-background border-t border-border/50 mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <Link href="/" className="text-lg font-bold font-headline">
              {defaultSiteData.name}
            </Link>
          </div>
          <nav className="flex flex-wrap justify-center gap-4">
            {data.links.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.title}
              </Link>
            ))}
          </nav>
          <div className="flex gap-2">
            {data.socials.map((social) => {
              const Icon = iconMap[social.icon as keyof typeof iconMap];
              return (
                <Link
                  key={social.title}
                  href={social.href}
                  aria-label={social.title}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {Icon && <Icon className="h-5 w-5" />}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-muted-foreground">
          <p>{copyright}</p>
        </div>
      </div>
    </footer>
  );
}
