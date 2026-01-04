import { defaultSiteData } from "@/lib/site-data";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SectionHeading, SectionSubheading } from "@/components/ui/section-headings";
import { Server, Share2, BrainCircuit, Gauge, PackageCheck, Database } from "lucide-react";

const iconMap = {
  Server,
  Share2,
  BrainCircuit,
  Gauge,
  PackageCheck,
  Database,
};

export default function ExpertiseSection() {
  const expertiseItems = defaultSiteData.expertise;

  return (
    <section id="expertise" className="py-24 sm:py-32">
      <div className="text-center">
        <SectionSubheading>Core Skills</SectionSubheading>
        <SectionHeading>My Expertise</SectionHeading>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {expertiseItems.map((item) => {
          const Icon = iconMap[item.icon as keyof typeof iconMap];
          return (
            <Card
              key={item.title}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:bg-card transition-all duration-300 group"
            >
              <CardHeader>
                <div className="mb-4">
                  {Icon && (
                    <Icon className="h-10 w-10 text-primary transition-transform duration-300 group-hover:scale-110" />
                  )}
                </div>
                <CardTitle className="font-headline">{item.title}</CardTitle>
                <CardDescription className="pt-2">{item.description}</CardDescription>
              </CardHeader>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
