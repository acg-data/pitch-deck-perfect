import { motion } from 'framer-motion';

import { FadeIn } from '@/components/animations/FadeIn';
import { TrendingUp, Users, Clock, Award } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    company: 'TechFlow AI',
    logo: '/assets/asset_1.png',
    industry: 'SaaS / AI',
    funding: '$12M',
    round: 'Series A',
    timeline: '3 weeks',
    challenge: 'Complex technical product needed clear explanation for non-technical investors.',
    solution: 'Created visual metaphors and simplified technical concepts without losing accuracy.',
    results: [
      'Oversubscribed round by 40%',
      '3 term sheets received',
      'Valuation 2x above initial target',
    ],
    testimonial: {
      quote: 'Happy Pitch transformed our technical jargon into a compelling story that investors actually understood.',
      author: 'Sarah Chen',
      role: 'CEO, TechFlow AI',
    },
  },
  {
    id: 2,
    company: 'GreenEnergy Co',
    logo: '/assets/asset_2.jpg',
    industry: 'Climate Tech',
    funding: '$3.5M',
    round: 'Seed',
    timeline: '2 weeks',
    challenge: 'Early-stage company with limited traction needed to prove market opportunity.',
    solution: 'Focused on market size, regulatory tailwinds, and team expertise to build credibility.',
    results: [
      'Round closed in 4 weeks',
      'Led by top climate VC',
      'Featured in TechCrunch',
    ],
    testimonial: {
      quote: 'They helped us punch way above our weight. The deck opened doors we did not think possible.',
      author: 'Marcus Johnson',
      role: 'Founder, GreenEnergy Co',
    },
  },
  {
    id: 3,
    company: 'HealthTrack',
    logo: '/assets/asset_3.png',
    industry: 'HealthTech',
    funding: '$25M',
    round: 'Series B',
    timeline: '4 weeks',
    challenge: 'Scaling company needed to show growth trajectory and unit economics.',
    solution: 'Built data-rich narrative with clear path to profitability and expansion strategy.',
    results: [
      '25x revenue multiple achieved',
      'Strategic investor joined',
      'Expansion to 3 new markets',
    ],
    testimonial: {
      quote: 'The attention to detail and understanding of healthcare investors was exceptional.',
      author: 'Dr. Emily Rodriguez',
      role: 'CEO, HealthTrack',
    },
  },
];

export function CaseStudiesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-primary to-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Success Stories
                <span className="text-accent block">From Our Clients</span>
              </h1>
              <p className="text-white/70 text-lg mb-8">
                Real results from real founders. See how we have helped startups across 
                industries raise capital and achieve their goals.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 lg:py-32 bg-happy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-card"
              >
                <div className="grid lg:grid-cols-2">
                  {/* Content Side */}
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-4 mb-6">
                      <img
                        src={study.logo}
                        alt={study.company}
                        className="w-12 h-12 rounded-xl object-cover"
                      />
                      <div>
                        <h2 className="text-2xl font-bold text-primary">{study.company}</h2>
                        <p className="text-gray-500">{study.industry}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-8">
                      <div className="text-center p-4 bg-ice-50 rounded-xl">
                        <TrendingUp className="w-5 h-5 text-accent mx-auto mb-2" />
                        <div className="font-bold text-primary">{study.funding}</div>
                        <div className="text-xs text-gray-500">{study.round}</div>
                      </div>
                      <div className="text-center p-4 bg-ice-50 rounded-xl">
                        <Clock className="w-5 h-5 text-accent mx-auto mb-2" />
                        <div className="font-bold text-primary">{study.timeline}</div>
                        <div className="text-xs text-gray-500">Timeline</div>
                      </div>
                      <div className="text-center p-4 bg-ice-50 rounded-xl">
                        <Award className="w-5 h-5 text-accent mx-auto mb-2" />
                        <div className="font-bold text-primary">Success</div>
                        <div className="text-xs text-gray-500">Result</div>
                      </div>
                    </div>

                    <div className="space-y-4 mb-8">
                      <div>
                        <h4 className="font-semibold text-primary mb-1">The Challenge</h4>
                        <p className="text-gray-600 text-sm">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-1">Our Solution</h4>
                        <p className="text-gray-600 text-sm">{study.solution}</p>
                      </div>
                    </div>

                    <div className="bg-primary/5 rounded-xl p-6 mb-6">
                      <h4 className="font-semibold text-primary mb-3">Key Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <blockquote className="border-l-4 border-accent pl-4 italic text-gray-600">
                      "{study.testimonial.quote}"
                      <footer className="mt-2 not-italic">
                        <div className="font-semibold text-primary">{study.testimonial.author}</div>
                        <div className="text-sm text-gray-500">{study.testimonial.role}</div>
                      </footer>
                    </blockquote>
                  </div>

                  {/* Visual Side */}
                  <div className="bg-gradient-to-br from-primary to-primary-light p-8 lg:p-12 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Users className="w-16 h-16 text-accent mx-auto mb-4" />
                      <div className="text-5xl font-bold mb-2">{study.funding}</div>
                      <div className="text-white/70">Raised with our deck</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
