import { motion } from 'framer-motion';
import { FadeIn } from '@/components/animations/FadeIn';
import { Button } from '@/components/ui/button';

const clientTypes = [
  'Venture Capital',
  'Private Equity',
  'Real Estate',
  'Hedge Funds'
];

export function TrustedBy() {
  return (
    <section className="py-16 lg:py-24 bg-[#F8F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <h3 className="text-2xl font-semibold text-primary mb-3">
            Trusted By Leading Investment Firms
          </h3>
          <p className="text-gray-600 mb-10">
            Our solutions are built for the rigorous demands of institutional finance.
          </p>
        </FadeIn>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-6 mb-10"
        >
          {clientTypes.map((type, index) => (
            <div 
              key={index}
              className="bg-white px-8 py-4 border border-gray-200 font-semibold text-gray-600 text-sm"
            >
              {type}
            </div>
          ))}
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button 
            size="lg"
            className="bg-primary text-white hover:bg-primary/90 rounded-none px-8 py-6 text-sm font-semibold uppercase tracking-wider"
          >
            View All
          </Button>
          <Button 
            size="lg"
            className="bg-primary text-white hover:bg-primary/90 rounded-none px-8 py-6 text-sm font-semibold uppercase tracking-wider"
          >
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
}
