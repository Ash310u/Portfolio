"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { defaultSiteData } from "@/lib/site-data";
import { PlaceHolderImages, ImagePlaceholder } from "@/lib/placeholder-images";

type ThemeData = {
  name: string;
  intro: string;
  tagline: string;
  aboutShort: string;
  aboutFull: string;
  heroSkills: { index: string; label: string }[];
  aboutVisual: string;
  heroBackground: ImagePlaceholder;
  accentColor: string;
};

type ThemeContextType = {
  themeData: ThemeData;
  setThemeValue: <K extends keyof ThemeData>(key: K, value: ThemeData[K]) => void;
  availableBackgrounds: ImagePlaceholder[];
};

const defaultThemeData: ThemeData = {
  name: defaultSiteData.name,
  intro: defaultSiteData.intro,
  tagline: defaultSiteData.tagline,
  aboutShort: defaultSiteData.aboutShort,
  aboutFull: defaultSiteData.aboutFull,
  heroSkills: defaultSiteData.heroSkills,
  aboutVisual: PlaceHolderImages.find(img => img.id === 'about-visual')?.imageUrl || '',
  heroBackground: PlaceHolderImages.find(img => img.id === 'hero-bg-1') || PlaceHolderImages[0],
  accentColor: "16 100% 50%", // Default Orange HSL
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [themeData, setThemeData] = useState<ThemeData>(defaultThemeData);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    try {
      const storedData = localStorage.getItem("portfolioThemeData");
      if (storedData) {
        setThemeData(JSON.parse(storedData));
      }
    } catch (error) {
      console.error("Failed to parse theme data from localStorage", error);
    }
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      try {
        localStorage.setItem("portfolioThemeData", JSON.stringify(themeData));
        document.documentElement.style.setProperty('--primary', themeData.accentColor);
        document.documentElement.style.setProperty('--ring', themeData.accentColor);
        document.documentElement.style.setProperty('--accent', themeData.accentColor);
      } catch (error) {
        console.error("Failed to save theme data to localStorage", error);
      }
    }
  }, [themeData, isMounted]);

  const setThemeValue = <K extends keyof ThemeData>(key: K, value: ThemeData[K]) => {
    setThemeData((prev) => ({ ...prev, [key]: value }));
  };
  
  const availableBackgrounds = PlaceHolderImages.filter(img => img.id.startsWith('hero-bg'));

  return (
    <ThemeContext.Provider value={{ themeData, setThemeValue, availableBackgrounds }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
