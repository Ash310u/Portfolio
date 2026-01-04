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
    <section id="expertise" className="py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <SectionSubheading>Core Skills</SectionSubheading>
          <SectionHeading>My Expertise</SectionHeading>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {expertiseItems.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <Card
                key={item.title}
                className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:bg-card transition-all duration-300 group"
              >
                <CardHeader className="p-4 sm:p-6">
                  <div className="mb-3 sm:mb-4">
                    {Icon && (
                      <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-primary transition-transform duration-300 group-hover:scale-110" />
                    )}
                  </div>
                  <CardTitle className="font-headline text-lg sm:text-xl">{item.title}</CardTitle>
                  <CardDescription className="pt-2 text-sm sm:text-base">{item.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
