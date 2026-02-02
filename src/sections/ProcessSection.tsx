import { motion } from 'framer-motion';
import { FadeIn } from '@/components/animations/FadeIn';
import { Button } from '@/components/ui/button';
import { Lightbulb, Pencil, Maximize2, Check } from 'lucide-react';

const processes = [
  {
    icon: Lightbulb,
    title: 'Strategy',
    description: 'We help you distill your business model and investment thesis into a clear, compelling narrative structure.',
    features: ['Narrative alignment', 'Storyboarding', 'Visual direction']
  },
  {
    icon: Pencil,
    title: 'Design',
    description: 'Our expert designers bring your story to life with premium visuals, charts, and professional formatting.',
    features: ['Custom pitch decks', 'Financial modeling', 'Data visualization']
  },
  {
    icon: Maximize2,
    title: 'Scale',
    description: 'Flexible support that fits your needs, from ad-hoc projects to ongoing retainer partnerships.',
    features: ['Volume discounts', 'Dedicated teams', '24/7 Availability']
  }
];

export function ProcessSection() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary mb-4">
            Complete Deal-Closing Support
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Partnerships that scale with your firm's growth and fundraising needs.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {processes.map((process, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              {/* Top - White */}
              <div className="p-8 text-center bg-white">
                <process.icon className="w-10 h-10 text-accent mx-auto mb-4" strokeWidth={1.5} />
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {process.description}
                </p>
              </div>

              {/* Bottom - Dark */}
              <div className="p-8 bg-primary text-white">
                <ul className="space-y-3">
                  {process.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3 text-sm">
                      <Check className="w-4 h-4 text-accent flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-accent text-primary hover:bg-accent-hover rounded-none px-8 py-6 text-sm font-semibold uppercase tracking-wider"
          >
            Our Process
          </Button>
        </div>
      </div>
    </section>
  );
}
