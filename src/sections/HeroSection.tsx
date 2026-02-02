import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-primary overflow-hidden pt-20">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(56, 189, 248, 0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(56, 189, 248, 0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6"
          >
            Clear Stories That
            <br />
            <span className="text-accent italic">Close Deals</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto mb-10"
          >
            Combine high-touch service with scalable expertise to turn complex business strategies 
            into compelling pitch decks, presentations, and investor materials.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button 
              size="lg"
              className="bg-accent text-primary hover:bg-accent-hover rounded-none px-8 py-6 text-sm font-semibold uppercase tracking-wider transition-all duration-200"
            >
              Explore Solutions
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 rounded-none px-8 py-6 text-sm font-semibold uppercase tracking-wider transition-all duration-200"
            >
              View Services
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
