import { defaultSiteData } from "@/lib/site-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading, SectionSubheading } from "@/components/ui/section-headings";

export default function FaqSection() {
  const faqs = defaultSiteData.faqs;

  return (
    <section id="faq" className="py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
        <SectionSubheading>Questions?</SectionSubheading>
        <SectionHeading>Frequently Asked Questions</SectionHeading>
      </div>
        <div className="mt-8 sm:mt-10 md:mt-12 max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-base sm:text-lg text-left font-headline hover:text-primary px-2 sm:px-4">
                {faq.question}
              </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted-foreground px-2 sm:px-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        </div>
      </div>
    </section>
  );
}
