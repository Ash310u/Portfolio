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
    <section id="faq" className="py-24 sm:py-32">
      <div className="text-center">
        <SectionSubheading>Questions?</SectionSubheading>
        <SectionHeading>Frequently Asked Questions</SectionHeading>
      </div>
      <div className="mt-12 max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-lg text-left font-headline hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
