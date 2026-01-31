import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/animations/FadeIn';
import { ArrowRight, MessageSquare, FileText, Palette, Presentation, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Discovery Call',
    description: 'We start with a deep-dive conversation to understand your business, vision, and fundraising goals.',
    duration: '30 minutes',
  },
  {
    number: '02',
    icon: FileText,
    title: 'Story Development',
    description: 'Our team crafts a compelling narrative framework that positions your startup for success.',
    duration: '1-2 days',
  },
  {
    number: '03',
    icon: Palette,
    title: 'Design & Visualization',
    description: 'We bring your story to life with stunning visuals, charts, and data presentations.',
    duration: '2-3 days',
  },
  {
    number: '04',
    icon: Presentation,
    title: 'Review & Refine',
    description: 'Collaborative review sessions to perfect every slide based on your feedback.',
    duration: '1-2 days',
  },
  {
    number: '05',
    icon: Rocket,
    title: 'Launch Ready',
    description: 'Final delivery in all formats, plus coaching to help you nail your pitch.',
    duration: 'Final delivery',
  },
];

export function ProcessPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-primary to-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Our Proven
                <span className="text-accent block">5-Step Process</span>
              </h1>
              <p className="text-white/70 text-lg mb-8">
                A battle-tested methodology that has helped 500+ startups raise over $2.4 billion.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 lg:py-32 bg-happy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}
                >
                  <div className="flex-1">
                    <div className="bg-white rounded-2xl p-8 shadow-card">
                      <div className="flex items-start gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center">
                            <Icon className="w-8 h-8 text-accent" />
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-4xl font-bold text-accent/30">{step.number}</span>
                            <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                              {step.duration}
                            </span>
                          </div>
                          <h3 className="text-2xl font-semibold text-primary mb-3">{step.title}</h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 lg:text-center">
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block">
                        <motion.div
                          initial={{ height: 0 }}
                          whileInView={{ height: 60 }}
                          viewport={{ once: true }}
                          className="w-0.5 bg-accent/30 mx-auto"
                        />
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Book a free discovery call and let us show you how we can help you raise capital.
            </p>
            <Button
              size="lg"
              className="bg-accent text-primary hover:bg-accent-hover rounded-full px-8 py-6 text-base font-medium transition-all duration-200 hover:scale-[1.02] group"
            >
              Book Discovery Call
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
