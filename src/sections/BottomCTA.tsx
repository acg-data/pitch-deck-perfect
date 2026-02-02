import { motion } from 'framer-motion';
import { FadeIn } from '@/components/animations/FadeIn';
import { Button } from '@/components/ui/button';

export function BottomCTA() {
  return (
    <section className="py-24 lg:py-32 bg-white text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary mb-6">
            Your Next Deal Starts
            <br />
            With Better Collateral
          </h2>
          <p className="text-gray-600 text-lg mb-10">
            Start elevating your brand with the right partner today.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Button 
              size="lg"
              className="bg-accent text-primary hover:bg-accent-hover rounded-none px-10 py-6 text-sm font-semibold uppercase tracking-wider"
            >
              Get Started
            </Button>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
