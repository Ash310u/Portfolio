"use client";

import { useState } from "react";
import { useTheme } from "@/contexts/theme-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetDescription,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Settings } from "lucide-react";
import Image from "next/image";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const accentColors = [
  { name: 'Orange', value: '16 100% 50%' },
  { name: 'Blue', value: '221 83% 53%' },
  { name: 'Green', value: '142 76% 36%' },
  { name: 'Purple', value: '262 83% 58%' },
];

export default function ThemeCustomizer() {
  const { themeData, setThemeValue, availableBackgrounds } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="fixed bottom-4 right-4 z-50 rounded-full h-10 w-10 sm:h-12 sm:w-12 shadow-lg bg-card/80 backdrop-blur-sm"
        >
          <Settings className="h-5 w-5 sm:h-6 sm:w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Customize Your Site</SheetTitle>
          <SheetDescription>
            Make changes to your portfolio. Your updates are saved automatically.
          </SheetDescription>
        </SheetHeader>
        <ScrollArea className="h-[calc(100%-8rem)] pr-4">
          <div className="space-y-6 py-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={themeData.name}
                onChange={(e) => setThemeValue("name", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="intro">Intro Line</Label>
              <Input
                id="intro"
                value={themeData.intro}
                onChange={(e) => setThemeValue("intro", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tagline">Professional Tagline</Label>
              <Textarea
                id="tagline"
                value={themeData.tagline}
                onChange={(e) => setThemeValue("tagline", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="aboutShort">Short Intro Description</Label>
              <Textarea
                id="aboutShort"
                value={themeData.aboutShort}
                onChange={(e) => setThemeValue("aboutShort", e.target.value)}
              />
            </div>
             <div className="space-y-2">
              <Label>Accent Color</Label>
              <RadioGroup
                value={themeData.accentColor}
                onValueChange={(value) => setThemeValue("accentColor", value)}
                className="flex flex-wrap gap-2 sm:gap-3"
              >
                {accentColors.map((color) => (
                  <Label
                    key={color.name}
                    htmlFor={`color-${color.name}`}
                    className="flex items-center gap-2 rounded-md border p-2 cursor-pointer hover:border-primary"
                  >
                    <RadioGroupItem value={color.value} id={`color-${color.name}`} />
                     <span
                      className="h-4 w-4 rounded-full"
                      style={{ backgroundColor: `hsl(${color.value})` }}
                    />
                    {color.name}
                  </Label>
                ))}
              </RadioGroup>
            </div>
            <div className="space-y-2">
                <Label>Hero Background</Label>
                <RadioGroup
                    value={themeData.heroBackground.id}
                    onValueChange={(id) => {
                        const bg = availableBackgrounds.find(b => b.id === id);
                        if (bg) setThemeValue("heroBackground", bg);
                    }}
                    className="grid grid-cols-2 sm:grid-cols-3 gap-2"
                >
                    {availableBackgrounds.map((bg) => (
                         <Label
                            key={bg.id}
                            htmlFor={bg.id}
                            className="relative block cursor-pointer rounded-md border-2 border-transparent has-[[data-state=checked]]:border-primary"
                        >
                            <Image
                                src={bg.imageUrl}
                                alt={bg.description}
                                width={200}
                                height={112}
                                className="rounded-md aspect-video object-cover w-full"
                            />
                             <RadioGroupItem value={bg.id} id={bg.id} className="sr-only" />
                        </Label>
                    ))}
                </RadioGroup>
            </div>
          </div>
        </ScrollArea>
        <SheetFooter>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
