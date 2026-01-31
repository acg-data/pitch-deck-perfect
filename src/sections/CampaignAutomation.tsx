import { motion } from 'framer-motion';
import { FadeIn } from '@/components/animations/FadeIn';
import { Check, TrendingUp, Eye, Clock, MousePointer } from 'lucide-react';

const features = [
  { icon: Eye, text: 'Track Investor Engagement' },
  { icon: Clock, text: 'Time Spent Per Slide' },
  { icon: MousePointer, text: 'Click & Share Analytics' },
];

export function CampaignAutomation() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-happy-light overflow-hidden" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <FadeIn direction="left">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-ice-100 rounded-full px-4 py-2 mb-6">
                <TrendingUp className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-primary">Deck Analytics</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
                Know Exactly How
                <br />
                Investors Engage
              </h2>

              <p className="text-gray-600 text-lg mb-8">
                Our analytics dashboard shows you which slides capture attention, where investors drop off, and who's most interested in your pitch.
              </p>

              {/* Feature List */}
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-gray-700 font-medium">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Right Column - Dashboard */}
          <FadeIn direction="right" delay={0.2}>
            <motion.div 
              whileHover={{ y: -4 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary to-primary-light rounded-3xl p-6 shadow-2xl glow-ice">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-white font-semibold text-lg">Pitch Performance</h3>
                    <p className="text-white/60 text-sm">Last 30 days</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-accent" />
                  </div>
                </div>

                {/* Main Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="glass rounded-xl p-4">
                    <p className="text-white/60 text-xs mb-1">Total Views</p>
                    <p className="text-white text-2xl font-bold">1,247</p>
                    <p className="text-accent text-xs mt-1">+23% this week</p>
                  </div>
                  <div className="glass rounded-xl p-4">
                    <p className="text-white/60 text-xs mb-1">Avg. Time</p>
                    <p className="text-white text-2xl font-bold">4:32</p>
                    <p className="text-accent text-xs mt-1">+12% this week</p>
                  </div>
                </div>

                {/* Progress Bars */}
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-white/80">Completion Rate</span>
                      <span className="text-accent">78%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '78%' }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
                        className="h-full bg-accent rounded-full"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-white/80">Share Rate</span>
                      <span className="text-accent">45%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '45%' }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7, duration: 1, ease: 'easeOut' }}
                        className="h-full bg-accent/70 rounded-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Mini Chart */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-white/60 text-xs mb-3">Views by Day</p>
                  <div className="flex items-end justify-between h-16 gap-1">
                    {[30, 45, 35, 60, 50, 75, 65].map((h, i) => (
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
              </div>

              {/* Decorative glow */}
              <div className="absolute -inset-4 bg-accent/10 rounded-3xl blur-2xl -z-10" />
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
