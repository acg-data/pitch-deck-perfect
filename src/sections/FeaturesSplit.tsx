import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/animations/FadeIn';

const features = [
  {
    title: 'Focus on Relationships',
    description: 'Delegate the heavy lifting of design and formatting so you can focus on investor relationships and closing deals.',
    active: true
  },
  {
    title: 'Design Impressive Materials',
    description: 'Stand out with bespoke visual identities that resonate with sophisticated investors and institutional partners.',
    active: false
  },
  {
    title: 'Stay Compliant',
    description: 'Navigate regulatory requirements with ease using our built-in compliance review and approval workflows.',
    active: false
  }
];

export function FeaturesSplit() {
  return (
    <section className="py-20 lg:py-32 bg-[#F8F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <FadeIn direction="left">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary mb-6">
                Everything You Need to Win More Business
              </h2>
              <p className="text-gray-600 text-lg mb-10">
                A comprehensive approach to creating pitch decks and marketing materials for leading investment firms.
              </p>

              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className={`mb-6 pl-5 border-l-2 ${feature.active ? 'border-accent' : 'border-gray-200'}`}
                >
                  <h4 className="text-lg font-semibold text-primary mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}

              <Button 
                size="lg"
                className="bg-accent text-primary hover:bg-accent-hover rounded-none px-8 py-6 text-sm font-semibold uppercase tracking-wider mt-4"
              >
                Learn More
              </Button>
            </div>
          </FadeIn>

          {/* Right Image */}
          <FadeIn direction="right" delay={0.2}>
            <div className="relative">
              <img 
                src="/assets/hero_devices.png" 
                alt="Pitch deck dashboard" 
                className="w-full rounded-lg shadow-2xl"
                loading="lazy"
                decoding="async"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
