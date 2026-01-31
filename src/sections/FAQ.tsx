import { FadeIn } from '@/components/animations/FadeIn';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { MessageCircle, ArrowRight } from 'lucide-react';

const faqItems = [
  {
    question: 'What does the pitch deck creation process look like?',
    answer: 'Our process begins with a discovery call to understand your business, vision, and fundraising goals. We then conduct market research, craft your narrative, design the slides, and iterate based on your feedback. Typical turnaround is 2-3 weeks.',
  },
  {
    question: 'How much does a pitch deck cost?',
    answer: 'Our pricing depends on the complexity and stage of your company. Seed stage decks start at $3,500, while Series A and beyond typically range from $5,000-$10,000. We also offer custom packages for ongoing support.',
  },
  {
    question: 'What information do you need from me?',
    answer: 'We need your business plan, financial projections, market research, product details, team bios, and any existing materials. Don\'t worry if you don\'t have everything—we help you identify and fill gaps during our discovery process.',
  },
  {
    question: 'How many revisions are included?',
    answer: 'All packages include unlimited revisions within the project scope. We work closely with you until you\'re completely satisfied with every slide. Most clients need 2-3 rounds of revisions.',
  },
  {
    question: 'Can you help with investor introductions?',
    answer: 'While we don\'t directly make introductions, we have a network of VC relationships and can provide guidance on outreach strategies. Many of our clients have successfully raised from top-tier firms.',
  },
  {
    question: 'Do you offer ongoing support after the deck is complete?',
    answer: 'Yes! We offer maintenance packages for updates, new slides, and versions tailored to different investor types. We also provide pitch coaching and Q&A preparation services.',
  },
];

export function FAQ() {
  return (
    <section className="py-20 lg:py-32 bg-happy-light" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left Column - Header */}
          <FadeIn className="lg:col-span-2">
            <div className="lg:sticky lg:top-32">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
                Frequently Asked
                <br />
                Questions
              </h2>
              <p className="text-gray-600 mb-8">
                Everything you need to know about our pitch deck services. Can't find what you're looking for? Reach out to our team.
              </p>

              {/* Contact CTA Card */}
              <div className="bg-white rounded-2xl p-6 shadow-card">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-primary mb-2">
                  Still Have Questions?
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Our team is here to help. Schedule a free consultation to discuss your pitch deck needs.
                </p>
                <Button 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/5 rounded-full group"
                >
                  Book a Call
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </FadeIn>

          {/* Right Column - Accordion */}
          <FadeIn delay={0.2} className="lg:col-span-3">
            <Accordion type="single" collapsible className="space-y-3">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white rounded-xl px-6 border-none shadow-card data-[state=open]:shadow-card-hover transition-shadow duration-300"
                >
                  <AccordionTrigger className="text-left font-medium text-primary hover:no-underline py-5">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-5 leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
