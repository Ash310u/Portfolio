"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "@/contexts/theme-context";

export default function HeroSection() {
  const { themeData } = useTheme();

  return (
    <section className="relative h-[110vh] min-h-[700px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://cpigzkkxvmdkxmvoifqj.supabase.co/storage/v1/object/public/assets/ezgif.com-video-to-webp-converter%20(1).webp"
          alt={themeData.heroBackground.description}
          fill
          priority
          unoptimized
          className="object-cover"
          data-ai-hint={themeData.heroBackground.imageHint}
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent"></div>
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="relative grid h-full grid-cols-1 md:grid-cols-2 items-center gap-8">
            {/* Left Side Text Block */}
            <div className="flex flex-col justify-center text-left">
              <span className="text-lg font-medium text-primary mb-2 font-headline">{themeData.intro}</span>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold font-headline leading-none -ml-1">
                {themeData.name.split(" ")[0]}
                <br />
                {themeData.name.split(" ").slice(1).join(" ")}
              </h1>
              <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4">
                {themeData.heroSkills.map((skill) => (
                  <div key={skill.index} className="flex items-baseline">
                    <span className="text-sm font-mono text-primary/80 mr-3">{skill.index}</span>
                    <span className="text-sm text-foreground/80">{skill.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side Text Block */}
            <div className="hidden md:flex flex-col items-end text-right justify-center">
              <h2 className="text-3xl lg:text-4xl font-bold font-headline max-w-md">
                {themeData.tagline}
              </h2>
              <p className="mt-4 text-base lg:text-lg text-muted-foreground max-w-md">
                {themeData.aboutShort}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
