"use client";

import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { useTheme } from "@/contexts/theme-context";

type LoaderProps = {
  onLoaded: () => void;
};

export default function Loader({ onLoaded }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const { themeData } = useTheme();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onLoaded, 500); // wait for fade out
          return 100;
        }
        return prev + 1;
      });
    }, 20); // 20ms * 100 = 2000ms = 2s load time

    return () => clearInterval(interval);
  }, [onLoaded]);

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("");
  };

  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center px-4">
      <div className="w-full max-w-xs sm:max-w-sm flex flex-col items-center gap-3 sm:gap-4 transition-opacity duration-500" style={{ opacity: progress < 100 ? 1 : 0 }}>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline font-bold text-primary">
          {getInitials(themeData.name)}
        </h1>
        <div className="w-full flex items-center gap-3 sm:gap-4">
          <Progress value={progress} className="h-1.5 sm:h-2 flex-1" />
          <span className="text-xs sm:text-sm font-mono text-muted-foreground w-10 sm:w-12 text-right">
            {Math.round(progress)}%
          </span>
        </div>
      </div>
    </div>
  );
}
