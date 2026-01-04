"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "@/contexts/theme-context";

export default function HeroSection() {
  const { themeData } = useTheme();

  return (
    <section className="relative h-[100vh] min-h-[600px] sm:min-h-[700px] md:h-[110vh] md:min-h-[800px] w-full overflow-hidden">
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
        <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-48 bg-gradient-to-t from-background to-transparent"></div>
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="relative grid h-full grid-cols-1 md:grid-cols-2 items-center gap-6 sm:gap-8 lg:gap-12">
            {/* Left Side Text Block */}
            <div className="flex flex-col justify-center text-left space-y-4 sm:space-y-6">
              <span className="text-sm sm:text-base lg:text-lg font-medium text-primary mb-1 sm:mb-2 font-headline">{themeData.intro}</span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-headline leading-tight sm:leading-none -ml-0.5 sm:-ml-1">
                {themeData.name.split(" ")[0]}
                <br />
                {themeData.name.split(" ").slice(1).join(" ")}
              </h1>
              <div className="mt-4 sm:mt-6 md:mt-8 grid grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-3 sm:gap-y-4">
                {themeData.heroSkills.map((skill) => (
                  <div key={skill.index} className="flex items-baseline">
                    <span className="text-xs sm:text-sm font-mono text-primary/80 mr-2 sm:mr-3">{skill.index}</span>
                    <span className="text-xs sm:text-sm text-foreground/80 break-words">{skill.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side Text Block */}
            <div className="hidden md:flex flex-col items-end text-right justify-center space-y-3 lg:space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold font-headline max-w-md">
                {themeData.tagline}
              </h2>
              <p className="mt-2 lg:mt-4 text-sm sm:text-base lg:text-lg text-muted-foreground max-w-md">
                {themeData.aboutShort}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
