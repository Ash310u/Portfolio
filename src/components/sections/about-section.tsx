"use client";

import { useTheme } from "@/contexts/theme-context";
import Image from "next/image";
import { SectionHeading, SectionSubheading } from "@/components/ui/section-headings";

export default function AboutSection() {
  const { themeData } = useTheme();

  return (
    <section 
      id="about" 
      className="py-24 sm:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <SectionSubheading>About Me</SectionSubheading>
            <SectionHeading>
              Engineering Scalable Systems & AI-Driven Products
            </SectionHeading>
            <div className="mt-6 prose prose-invert max-w-none text-muted-foreground space-y-4 text-base">
              {themeData.aboutFull.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="relative h-96 w-full max-w-md mx-auto md:h-[30rem]">
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
