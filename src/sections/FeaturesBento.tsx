import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';
import { ArrowRight, FileText, BarChart3, Zap } from 'lucide-react';

const slideTypes = [
  { name: 'Problem', color: '#ef4444' },
  { name: 'Solution', color: '#22c55e' },
  { name: 'Market', color: '#3b82f6' },
  { name: 'Traction', color: '#f59e0b' },
  { name: 'Team', color: '#8b5cf6' },
  { name: 'Ask', color: '#06b6d4' },
];

export function FeaturesBento() {
  return (
    <section className="py-20 lg:py-32 bg-happy-light" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Text */}
          <FadeIn>
            <div className="lg:sticky lg:top-32">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
                Everything You Need
                <br />
                To Raise Capital
              </h2>
              <p className="text-gray-600 text-lg mb-8 max-w-md">
                From story crafting to visual design, we handle every aspect of your pitch deck.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  className="bg-primary text-white hover:bg-primary-light rounded-full px-6 py-5 font-medium transition-all duration-200 hover:scale-[1.02] group"
                >
                  View Pricing
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button 
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full px-6 py-5 font-medium transition-all duration-200"
                >
                  See Examples
                </Button>
              </div>
            </div>
          </FadeIn>

          {/* Right Column - Bento Grid */}
          <StaggerContainer className="grid grid-cols-2 gap-4" staggerDelay={0.1}>
            {/* Card 1 - Story Crafting */}
            <StaggerItem>
              <motion.div 
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-5 shadow-card hover:shadow-card-hover transition-all duration-300 col-span-2 sm:col-span-1"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-ice-100 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-accent" />
                  </div>
                </div>
                <h3 className="font-semibold text-primary mb-2">Story Crafting</h3>
                <p className="text-sm text-gray-600">
                  We help you articulate your vision, problem, and solution in a compelling narrative.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {['Narrative', 'Messaging', 'Positioning'].map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 bg-ice-50 rounded-lg text-xs text-primary font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>

            {/* Card 2 - Slide Types */}
            <StaggerItem>
              <motion.div 
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-5 shadow-card hover:shadow-card-hover transition-all duration-300 col-span-2 sm:col-span-1"
              >
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {slideTypes.map((slide) => (
                    <div 
                      key={slide.name}
                      className="px-2 py-1.5 rounded-lg text-white text-xs font-medium text-center"
                      style={{ backgroundColor: slide.color }}
                    >
                      {slide.name}
                    </div>
                  ))}
                </div>
                <h3 className="font-semibold text-primary mb-2">Complete Slide Deck</h3>
                <p className="text-sm text-gray-600">
                  All essential slides crafted to tell your complete story.
                </p>
              </motion.div>
            </StaggerItem>

            {/* Card 3 - Data Visualization */}
            <StaggerItem>
              <motion.div 
                whileHover={{ y: -4 }}
                className="bg-gradient-to-br from-primary to-primary-light rounded-2xl p-5 shadow-card hover:shadow-card-hover transition-all duration-300 col-span-2 sm:col-span-1"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-accent" />
                  </div>
                </div>
                <h3 className="font-semibold text-white mb-2">Data Visualization</h3>
                <p className="text-sm text-white/80">
                  Transform complex data into beautiful, easy-to-understand charts and graphs.
                </p>
                <div className="mt-4 flex items-end gap-1">
                  {[30, 50, 40, 70, 55, 80, 95].map((h, i) => (
                    <div 
                      key={i} 
                      className="flex-1 bg-accent/30 rounded-t"
                      style={{ height: `${h}px` }}
                    />
                  ))}
                </div>
              </motion.div>
            </StaggerItem>

            {/* Card 4 - Visual Design */}
            <StaggerItem>
              <motion.div 
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 col-span-2 sm:col-span-1"
              >
                <div className="h-24 overflow-hidden">
                  <img 
                    src="/assets/pitch_laptop.jpg" 
                    alt="Pitch deck design" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-primary mb-2">Visual Design</h3>
                  <p className="text-sm text-gray-600">
                    Stunning, on-brand designs that make your deck stand out.
                  </p>
                </div>
              </motion.div>
            </StaggerItem>

            {/* Card 5 - Full Service */}
            <StaggerItem>
              <motion.div 
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-5 shadow-card hover:shadow-card-hover transition-all duration-300 col-span-2"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">End-to-End Service</h3>
                    <p className="text-sm text-gray-600">
                      From initial consultation to final delivery, we handle everything. Including revisions and investor feedback integration.
                    </p>
                    <div className="mt-3 flex gap-2">
                      {['Research', 'Writing', 'Design', 'Revisions'].map((tag) => (
                        <span 
                          key={tag}
                          className="px-3 py-1 bg-ice-50 rounded-full text-xs text-primary font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
