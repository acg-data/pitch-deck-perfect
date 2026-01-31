import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/animations/FadeIn';
import { FloatingElement } from '@/components/animations/FloatingElement';
import { ArrowRight, Presentation, TrendingUp, DollarSign } from 'lucide-react';

export function CTABanner() {
  return (
    <section className="py-20 lg:py-32 gradient-cta relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <FadeIn direction="left">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
                <div className="flex -space-x-2">
                  <img 
                    src="/assets/testimonial_1.jpg" 
                    alt="Client" 
                    className="w-6 h-6 rounded-full border-2 border-primary object-cover"
                  />
                  <img 
                    src="/assets/testimonial_2.jpg" 
                    alt="Client" 
                    className="w-6 h-6 rounded-full border-2 border-primary object-cover"
                  />
                  <img 
                    src="/assets/testimonial_3.jpg" 
                    alt="Client" 
                    className="w-6 h-6 rounded-full border-2 border-primary object-cover"
                  />
                </div>
                <span className="text-sm text-white/80">Join 500+ founders who broke through</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Your Competition Is
                <br />
                Already Pitching.
              </h2>

              <p className="text-white/70 text-lg mb-8 max-w-lg">
                While you wait, someone else is closing your investors. Book a free strategy call today. We'll map out exactly how to make your deck impossible to ignore.
              </p>

              <Button 
                size="lg"
                className="bg-accent text-primary hover:bg-accent-hover rounded-full px-8 py-6 text-base font-medium transition-all duration-200 hover:scale-[1.02] group"
              >
                Claim My Strategy Call
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </FadeIn>

          {/* Right Column - Dashboard */}
          <FadeIn direction="right" delay={0.2}>
            <FloatingElement duration={6} distance={12}>
              <div className="relative">
                <motion.div 
                  whileHover={{ y: -4 }}
                  className="glass rounded-3xl p-6 shadow-2xl"
                >
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-white/60 text-sm">Total Capital Raised</p>
                    </div>
                    <div className="flex gap-4 text-right">
                      <div>
                        <p className="text-white/60 text-xs">Decks Created</p>
                        <p className="text-white font-semibold">500+</p>
                      </div>
                      <div>
                        <p className="text-white/60 text-xs">Success Rate</p>
                        <p className="text-white font-semibold">94%</p>
                      </div>
                    </div>
                  </div>

                  {/* Main Metric */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-white text-4xl font-bold">$2.4B</span>
                      <span className="bg-accent text-primary text-xs font-bold px-2 py-1 rounded-full">
                        +$150M this month
                      </span>
                    </div>
                    <p className="text-white/40 text-xs mt-1">Capital raised by our clients</p>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    <div className="glass rounded-xl p-3 text-center">
                      <Presentation className="w-5 h-5 text-accent mx-auto mb-1" />
                      <p className="text-white text-sm font-semibold">Seed</p>
                      <p className="text-white/60 text-xs">$3.5K+</p>
                    </div>
                    <div className="glass rounded-xl p-3 text-center">
                      <TrendingUp className="w-5 h-5 text-accent mx-auto mb-1" />
                      <p className="text-white text-sm font-semibold">Series A</p>
                      <p className="text-white/60 text-xs">$8K+</p>
                    </div>
                    <div className="glass rounded-xl p-3 text-center">
                      <DollarSign className="w-5 h-5 text-accent mx-auto mb-1" />
                      <p className="text-white text-sm font-semibold">Series B+</p>
                      <p className="text-white/60 text-xs">Custom</p>
                    </div>
                  </div>

                  {/* Mini Chart */}
                  <div className="pt-4 border-t border-white/10">
                    <div className="flex items-end justify-between h-16 gap-1">
                      {[25, 40, 35, 55, 45, 70, 60, 80, 75, 95].map((h, i) => (
                        <motion.div 
                          key={i}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${h}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.05, duration: 0.5 }}
                          className="flex-1 bg-accent/30 rounded-t hover:bg-accent/50 transition-colors"
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-xl" />
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
              </div>
            </FloatingElement>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
