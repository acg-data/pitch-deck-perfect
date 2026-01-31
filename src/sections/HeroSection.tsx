import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FloatingElement } from '@/components/animations/FloatingElement';
import { ArrowRight, Sparkles } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen gradient-hero-radial overflow-hidden pt-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(56, 189, 248, 0.5) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(56, 189, 248, 0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-24">
        {/* Social Proof Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-3 glass rounded-full px-4 py-2">
            <div className="flex -space-x-2">
              <img 
                src="/assets/testimonial_1.jpg" 
                alt="Client" 
                className="w-8 h-8 rounded-full border-2 border-primary object-cover"
              />
              <img 
                src="/assets/testimonial_2.jpg" 
                alt="Client" 
                className="w-8 h-8 rounded-full border-2 border-primary object-cover"
              />
              <img 
                src="/assets/testimonial_3.jpg" 
                alt="Client" 
                className="w-8 h-8 rounded-full border-2 border-primary object-cover"
              />
              <div className="w-8 h-8 rounded-full border-2 border-primary bg-accent flex items-center justify-center">
                <span className="text-xs font-bold text-primary">+500</span>
              </div>
            </div>
            <span className="text-sm text-white/80">500+ founders turned into funded legends</span>
            <Sparkles className="w-4 h-4 text-accent" />
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-6"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
            Stop Getting Ghosted.
            <br />
            <span className="text-gradient-ice">Start Getting Funded.</span>
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-white/70 text-lg sm:text-xl max-w-2xl mx-auto mb-10"
        >
          Most pitch decks die in inbox purgatory. Yours won't. We build decks that demand attention, spark FOMO, and open wallets. From scrappy seed rounds to Series C victories.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button 
            size="lg"
            className="bg-accent text-primary hover:bg-accent-hover rounded-full px-8 py-6 text-base font-medium transition-all duration-200 hover:scale-[1.02] group"
          >
            Build My Winning Deck
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-6 text-base font-medium transition-all duration-200"
          >
            View Portfolio
          </Button>
        </motion.div>

        {/* Hero Devices */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="relative flex justify-center"
        >
          <FloatingElement duration={6} distance={15}>
            <img 
              src="/assets/hero_devices.png" 
              alt="Pitch deck presentations on multiple devices" 
              className="w-full max-w-3xl mx-auto drop-shadow-2xl"
            />
          </FloatingElement>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
