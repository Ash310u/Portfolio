import { cn } from "@/lib/utils";
import React from "react";

export const SectionHeading = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn(
      "text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl font-headline",
      className
    )}
    {...props}
  >
    {children}
  </h2>
));
SectionHeading.displayName = "SectionHeading";

export const SectionSubheading = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "mb-2 text-base font-semibold leading-7 text-primary font-headline",
      className
    )}
    {...props}
  >
    {children}
  </p>
));
SectionSubheading.displayName = "SectionSubheading";
