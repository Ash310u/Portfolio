"use client";

import { useTheme } from "@/contexts/theme-context";
import Image from "next/image";
import { SectionHeading, SectionSubheading } from "@/components/ui/section-headings";

export default function AboutSection() {
  const { themeData } = useTheme();

  return (
    <section 
      id="about" 
      className="py-16 sm:py-20 md:py-24 lg:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          <div className="max-w-xl mx-auto md:mx-0 order-2 md:order-1">
            <SectionSubheading>About Me</SectionSubheading>
            <SectionHeading>
              Engineering Scalable Systems & AI-Driven Products
            </SectionHeading>
            <div className="mt-4 sm:mt-6 prose prose-invert max-w-none text-muted-foreground space-y-3 sm:space-y-4 text-sm sm:text-base">
              {themeData.aboutFull.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="relative h-64 sm:h-80 md:h-96 lg:h-[30rem] w-full max-w-md mx-auto md:mx-0 order-1 md:order-2">
            <Image
              src="https://cpigzkkxvmdkxmvoifqj.supabase.co/storage/v1/object/public/assets/WhatsApp%20Image%202026-01-04%20at%2016.08.18.jpeg"
              alt="A picture of Ashutosh Saha"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
