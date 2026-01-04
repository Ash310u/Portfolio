"use client";

import { useTheme } from "@/contexts/theme-context";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { generateAbstractVisual } from "@/ai/flows/generate-abstract-visual";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { SectionHeading, SectionSubheading } from "@/components/ui/section-headings";

export default function AboutSection() {
  const { themeData, setThemeValue } = useTheme();
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerateVisual = async () => {
    setIsLoading(true);
    try {
      const result = await generateAbstractVisual({ description: themeData.aboutFull });
      setThemeValue("aboutVisual", result.visualDataUri);
      toast({ title: "New visual generated successfully!" });
    } catch (error) {
      console.error("AI visual generation failed", error);
      toast({
        title: "Error",
        description: "Failed to generate new visual. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-2 space-y-4">
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-2xl group">
             <Image
                src="https://cpigzkkxvmdkxmvoifqj.supabase.co/storage/v1/object/public/assets/WhatsApp%20Image%202026-01-04%20at%2016.08.18.jpeg"
                alt="Portrait of Ashutosh Saha"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                data-ai-hint="portrait man"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
          <Button
            variant="outline"
            className="w-full"
            onClick={handleGenerateVisual}
            disabled={isLoading}
          >
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            Generate Abstract Visual with AI
          </Button>
        </div>
        <div className="md:col-span-3">
          <SectionSubheading>About Me</SectionSubheading>
          <SectionHeading>
            Engineering Scalable Systems & AI-Driven Products
          </SectionHeading>
          <div className="mt-6 prose prose-invert max-w-none text-muted-foreground space-y-4 text-base md:text-lg">
            {themeData.aboutFull.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
