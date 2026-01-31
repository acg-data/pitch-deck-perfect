import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/animations/FadeIn';
import { ArrowRight, Target, Users, Award, Clock, Sparkles } from 'lucide-react';

const stats = [
  { value: '500+', label: 'Pitch Decks Created', icon: Target },
  { value: '$2.4B', label: 'Capital Raised', icon: Award },
  { value: '94%', label: 'Success Rate', icon: Sparkles },
  { value: '48h', label: 'Average Delivery', icon: Clock },
];

const values = [
  {
    title: 'Founder-First',
    description: 'We believe every founder deserves a compelling story. Your success is our mission.',
  },
  {
    title: 'Data-Driven',
    description: 'We combine creative storytelling with hard data to create decks that investors trust.',
  },
  {
    title: 'Speed & Quality',
    description: 'Fast turnaround without compromising on quality. Because timing matters in fundraising.',
  },
  {
    title: 'Partnership',
    description: 'We dont just deliver decks—we partner with you throughout your fundraising journey.',
  },
];

export function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-primary to-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                We Help Founders
                <span className="text-accent block">Tell Their Story</span>
              </h1>
              <p className="text-white/70 text-lg mb-8">
                Happy Pitch was founded with a simple mission: help entrepreneurs create pitch decks 
                that actually close deals. We have helped 500+ startups raise over $2.4 billion in funding.
              </p>
              <Button 
                size="lg"
                className="bg-accent text-primary hover:bg-accent-hover rounded-full px-8 py-6 text-base font-medium transition-all duration-200 hover:scale-[1.02] group"
              >
                Work With Us
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-happy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn direction="left">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                  Our Mission
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  We believe that great ideas deserve great presentations. Too many brilliant founders 
                  struggle to communicate their vision effectively to investors. That is where we come in.
                </p>
                <p className="text-gray-600 text-lg mb-6">
                  Our team combines expertise in venture capital, design, and storytelling to create 
                  pitch decks that not only look stunning but also address the key questions investors 
                  need answered.
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent-hover border-2 border-white flex items-center justify-center"
                      >
                        <Users className="w-5 h-5 text-primary" />
                      </div>
                    ))}
                  </div>
                  <span className="text-gray-600">Join our growing team</span>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="grid grid-cols-2 gap-4">
                {values.map((value) => (
                  <motion.div
                    key={value.title}
                    whileHover={{ y: -4 }}
                    className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300"
                  >
                    <h3 className="font-semibold text-primary mb-2">{value.title}</h3>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
