import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/animations/FadeIn';
import { Check, FileText, Palette, BarChart3, MessageSquare } from 'lucide-react';

const services = [
  {
    icon: FileText,
    title: 'Story Development',
    description: 'We work with you to craft a compelling narrative that captures your vision, market opportunity, and unique value proposition.',
    features: ['Narrative framework', 'Competitive positioning', 'Investor messaging', 'Story workshops'],
    price: 'From $2,500',
  },
  {
    icon: Palette,
    title: 'Visual Design',
    description: 'Stunning, on-brand designs that make your deck stand out and leave a lasting impression on investors.',
    features: ['Custom templates', 'Brand integration', 'Iconography', 'Typography systems'],
    price: 'From $3,500',
  },
  {
    icon: BarChart3,
    title: 'Data Visualization',
    description: 'Transform complex data into beautiful, easy-to-understand charts and graphs that tell your story.',
    features: ['Market sizing', 'Financial models', 'Growth metrics', 'Traction visualization'],
    price: 'From $2,000',
  },
  {
    icon: MessageSquare,
    title: 'Investor Coaching',
    description: 'Prepare for investor meetings with expert coaching on presentation skills and Q&A preparation.',
    features: ['Mock pitch sessions', 'Q&A preparation', 'Feedback integration', 'Presentation training'],
    price: 'From $1,500',
  },
];

const packages = [
  {
    name: 'Seed Stage',
    description: 'Perfect for early-stage startups seeking pre-seed to seed funding.',
    price: '$3,500',
    features: [
      '10-12 slide deck',
      'Story development',
      'Visual design',
      '2 revision rounds',
      '48-hour delivery',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Series A',
    description: 'Comprehensive package for startups ready to scale.',
    price: '$7,500',
    features: [
      '15-18 slide deck',
      'Advanced story development',
      'Premium visual design',
      'Data visualization',
      'Financial model review',
      '5 revision rounds',
      'Investor coaching session',
    ],
    cta: 'Most Popular',
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'Full-service solution for complex fundraising needs.',
    price: 'Custom',
    features: [
      'Unlimited slides',
      'Complete brand package',
      'Advanced analytics',
      'Multiple deck versions',
      'Unlimited revisions',
      'Ongoing support',
      'Priority delivery',
    ],
    cta: 'Contact Us',
    popular: false,
  },
];

export function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-primary to-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Services Built for
                <span className="text-accent block">Fundraising Success</span>
              </h1>
              <p className="text-white/70 text-lg mb-8">
                From story development to investor coaching, we provide everything you need 
                to create a pitch deck that closes deals.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-32 bg-happy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Our Services</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Each service can be purchased individually or as part of a comprehensive package.
              </p>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                        <Check className="w-4 h-4 text-accent flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-primary">{service.price}</span>
                    <Button variant="outline" className="rounded-full">
                      Learn More
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Pricing Packages</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Choose the package that fits your stage and fundraising goals.
              </p>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-2xl p-8 ${
                  pkg.popular
                    ? 'bg-primary text-white shadow-xl scale-105'
                    : 'bg-white shadow-card'
                }`}
              >
                {pkg.popular && (
                  <div className="inline-block bg-accent text-primary text-xs font-bold px-3 py-1 rounded-full mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className={`text-xl font-semibold mb-2 ${pkg.popular ? 'text-white' : 'text-primary'}`}>
                  {pkg.name}
                </h3>
                <p className={`text-sm mb-4 ${pkg.popular ? 'text-white/70' : 'text-gray-600'}`}>
                  {pkg.description}
                </p>
                <div className={`text-3xl font-bold mb-6 ${pkg.popular ? 'text-white' : 'text-primary'}`}>
                  {pkg.price}
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className={`flex items-center gap-2 text-sm ${pkg.popular ? 'text-white/80' : 'text-gray-600'}`}>
                      <Check className={`w-4 h-4 flex-shrink-0 ${pkg.popular ? 'text-accent' : 'text-accent'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full rounded-full py-5 ${
                    pkg.popular
                      ? 'bg-accent text-primary hover:bg-accent-hover'
                      : 'bg-primary text-white hover:bg-primary-light'
                  }`}
                >
                  {pkg.cta}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
