import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/animations/FadeIn';
import { Check, X } from 'lucide-react';
import { useState } from 'react';

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for first-time founders',
    monthlyPrice: 500,
    yearlyPrice: 400,
    features: [
      { name: '10-12 slide deck', included: true },
      { name: 'Basic story development', included: true },
      { name: 'Standard visual design', included: true },
      { name: '2 revision rounds', included: true },
      { name: '48-hour delivery', included: true },
      { name: 'Investor coaching', included: false },
      { name: 'Data visualization', included: false },
      { name: 'Priority support', included: false },
    ],
    cta: 'Get Started',
  },
  {
    name: 'Professional',
    description: 'For serious fundraising efforts',
    monthlyPrice: 1500,
    yearlyPrice: 1200,
    popular: true,
    features: [
      { name: '15-18 slide deck', included: true },
      { name: 'Advanced story development', included: true },
      { name: 'Premium visual design', included: true },
      { name: '5 revision rounds', included: true },
      { name: '24-hour delivery', included: true },
      { name: 'Investor coaching (2 sessions)', included: true },
      { name: 'Data visualization', included: true },
      { name: 'Priority support', included: false },
    ],
    cta: 'Most Popular',
  },
  {
    name: 'Enterprise',
    description: 'Full-service solution',
    monthlyPrice: null,
    yearlyPrice: null,
    features: [
      { name: 'Unlimited slides', included: true },
      { name: 'Complete brand package', included: true },
      { name: 'Custom design system', included: true },
      { name: 'Unlimited revisions', included: true },
      { name: 'Same-day delivery', included: true },
      { name: 'Unlimited coaching', included: true },
      { name: 'Advanced analytics', included: true },
      { name: 'Dedicated account manager', included: true },
    ],
    cta: 'Contact Sales',
  },
];

const faqs = [
  {
    question: 'What is included in each package?',
    answer: 'Each package includes slide deck creation, story development, and visual design. Higher tiers include additional services like investor coaching, data visualization, and faster delivery times.',
  },
  {
    question: 'Can I upgrade my package later?',
    answer: 'Yes! You can upgrade your package at any time. We will apply any payments you have already made toward the new package.',
  },
  {
    question: 'What is your refund policy?',
    answer: 'We offer a 100% satisfaction guarantee. If you are not happy with the first draft, we will refund your payment in full.',
  },
  {
    question: 'How long does the process take?',
    answer: 'Delivery times vary by package: Starter (48 hours), Professional (24 hours), Enterprise (same day). We also offer expedited delivery for an additional fee.',
  },
];

export function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-primary to-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Simple, Transparent
                <span className="text-accent block">Pricing</span>
              </h1>
              <p className="text-white/70 text-lg mb-8">
                Choose the plan that fits your needs. All plans include our core pitch deck creation services.
              </p>
              
              {/* Billing Toggle */}
              <div className="flex items-center justify-center gap-4">
                <span className={`text-sm ${!isYearly ? 'text-white' : 'text-white/50'}`}>Monthly</span>
                <button
                  onClick={() => setIsYearly(!isYearly)}
                  className="relative w-14 h-7 bg-white/20 rounded-full transition-colors"
                >
                  <motion.div
                    className="absolute top-1 w-5 h-5 bg-accent rounded-full"
                    animate={{ left: isYearly ? '32px' : '4px' }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                </button>
                <span className={`text-sm ${isYearly ? 'text-white' : 'text-white/50'}`}>
                  Yearly <span className="text-accent">(Save 20%)</span>
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 lg:py-32 bg-happy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-2xl p-8 ${
                  plan.popular
                    ? 'bg-primary text-white shadow-xl scale-105 relative'
                    : 'bg-white shadow-card'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-accent text-primary text-xs font-bold px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className={`text-xl font-semibold mb-2 ${plan.popular ? 'text-white' : 'text-primary'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${plan.popular ? 'text-white/70' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
                
                <div className="mb-6">
                  {plan.monthlyPrice ? (
                    <>
                      <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-primary'}`}>
                        ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      <span className={plan.popular ? 'text-white/70' : 'text-gray-600'}>/month</span>
                    </>
                  ) : (
                    <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-primary'}`}>
                      Custom
                    </span>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature.name} className="flex items-center gap-3">
                      {feature.included ? (
                        <Check className={`w-5 h-5 ${plan.popular ? 'text-accent' : 'text-accent'}`} />
                      ) : (
                        <X className="w-5 h-5 text-gray-300" />
                      )}
                      <span className={`text-sm ${
                        feature.included
                          ? plan.popular ? 'text-white/80' : 'text-gray-600'
                          : 'text-gray-400'
                      }`}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full rounded-full py-5 ${
                    plan.popular
                      ? 'bg-accent text-primary hover:bg-accent-hover'
                      : 'bg-primary text-white hover:bg-primary-light'
                  }`}
                >
                  {plan.cta}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
            </div>
          </FadeIn>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <h3 className="font-semibold text-primary mb-2">{faq.question}</h3>
                <p className="text-gray-600 text-sm">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
