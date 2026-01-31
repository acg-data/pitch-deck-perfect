import { motion } from 'framer-motion';
import { FadeIn } from '@/components/animations/FadeIn';
import { FloatingElement } from '@/components/animations/FloatingElement';
import { Check, Target } from 'lucide-react';

const features = [
  'Investor-Ready Narratives',
  'Data-Driven Storytelling',
  'Market-Winning Positioning',
];

export function ContentGeneration() {
  return (
    <section className="py-20 lg:py-32 bg-white overflow-hidden" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Image */}
          <FadeIn direction="left">
            <div className="relative">
              <FloatingElement duration={7} distance={15}>
                <img 
                  src="/assets/slide_cards.png" 
                  alt="Pitch deck slide composition" 
                  className="w-full max-w-lg mx-auto"
                />
              </FloatingElement>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/10 rounded-full blur-xl" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-ice-200/30 rounded-full blur-2xl" />
            </div>
          </FadeIn>

          {/* Right Column - Content */}
          <FadeIn direction="right" delay={0.2}>
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-ice-100 rounded-full px-4 py-2 mb-6">
                <Target className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-primary">Our Process</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
                From Raw Ideas To
                <br />
                <span className="text-gradient">Pitch-Perfect Decks</span>
              </h2>

              <p className="text-gray-600 text-lg mb-8">
                We transform your vision into a compelling narrative that resonates with investors. Our proven process ensures every slide drives your fundraising success.
              </p>

              {/* Feature List */}
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-gray-100">
                <div>
                  <p className="text-3xl font-bold text-primary">$2B+</p>
                  <p className="text-sm text-gray-500">Capital Raised</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">500+</p>
                  <p className="text-sm text-gray-500">Decks Created</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">94%</p>
                  <p className="text-sm text-gray-500">Success Rate</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
