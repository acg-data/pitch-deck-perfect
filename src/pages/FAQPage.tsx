import { motion } from 'framer-motion';
import { FadeIn } from '@/components/animations/FadeIn';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    category: 'General',
    questions: [
      {
        question: 'What is Happy Pitch?',
        answer: 'Happy Pitch is a pitch deck design agency that helps founders create compelling presentations to raise capital. We combine storytelling expertise with professional design to create decks that impress investors.',
      },
      {
        question: 'How long does the process take?',
        answer: 'Our typical turnaround time is 48 hours for the first draft. However, this can vary based on the complexity of your project and the package you choose. Enterprise clients receive priority delivery.',
      },
      {
        question: 'Do you work with startups at all stages?',
        answer: 'Yes! We work with startups from pre-seed through Series C and beyond. Each stage has different requirements, and we tailor our approach accordingly.',
      },
    ],
  },
  {
    category: 'Process',
    questions: [
      {
        question: 'What is your design process?',
        answer: 'Our process includes: 1) Discovery call to understand your business, 2) Story development and narrative framework, 3) Visual design and data visualization, 4) Review and refinement rounds, 5) Final delivery and coaching.',
      },
      {
        question: 'How many revision rounds are included?',
        answer: 'Revision rounds vary by package: Starter includes 2 rounds, Professional includes 5 rounds, and Enterprise includes unlimited revisions until you are completely satisfied.',
      },
      {
        question: 'What do you need from me to get started?',
        answer: 'We typically need your existing pitch materials (if any), brand guidelines, financial projections, and any specific data or metrics you want to highlight. We will guide you through exactly what we need during the discovery call.',
      },
    ],
  },
  {
    category: 'Pricing',
    questions: [
      {
        question: 'How much does a pitch deck cost?',
        answer: 'Our packages start at $3,500 for a Seed-stage deck and go up to custom pricing for Enterprise clients. The cost depends on the complexity, number of slides, and additional services like investor coaching.',
      },
      {
        question: 'Do you offer payment plans?',
        answer: 'Yes, we offer flexible payment options. For larger projects, we can split payments across milestones. Contact us to discuss a payment plan that works for your budget.',
      },
      {
        question: 'What is your refund policy?',
        answer: 'We offer a 100% satisfaction guarantee. If you are not happy with the first draft, we will refund your payment in full. We are confident in our ability to deliver exceptional work.',
      },
    ],
  },
  {
    category: 'Deliverables',
    questions: [
      {
        question: 'What formats do you deliver?',
        answer: 'We deliver your pitch deck in PowerPoint, Keynote, PDF, and Google Slides formats. We also provide individual slide images for use in other materials.',
      },
      {
        question: 'Do you provide the source files?',
        answer: 'Yes, all source files are included with your delivery. You have full ownership and can make edits yourself or work with other designers in the future.',
      },
      {
        question: 'Can you help with other materials?',
        answer: 'Absolutely! Beyond pitch decks, we can create one-pagers, financial models, executive summaries, and investor update templates. Just let us know what you need.',
      },
    ],
  },
];

export function FAQPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-primary to-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Frequently Asked
                <span className="text-accent block">Questions</span>
              </h1>
              <p className="text-white/70 text-lg">
                Everything you need to know about our pitch deck services. 
                Can not find what you are looking for? Contact us.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 lg:py-32 bg-happy-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {faqs.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <h2 className="text-2xl font-bold text-primary mb-6">{category.category}</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`${category.category}-${index}`}
                      className="bg-white rounded-xl px-6 shadow-sm border-none"
                    >
                      <AccordionTrigger className="text-left font-semibold text-primary hover:no-underline py-4">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
