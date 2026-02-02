import { motion } from 'framer-motion';
import { FadeIn } from '@/components/animations/FadeIn';
import { Users, Clock, TrendingUp, UserCheck, Lightbulb, HandHelping } from 'lucide-react';

const reasons = [
  {
    icon: Users,
    title: 'Expert Teams',
    description: 'We build dedicated teams of designers and writers who understand your specific industry and investment focus.'
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: 'Get your materials when you need them with our streamlined workflow and 24/7 availability for urgent deadlines.'
  },
  {
    icon: TrendingUp,
    title: 'Data Driven Results',
    description: 'Leverage analytics and proven frameworks to understand what resonates with investors and optimize accordingly.'
  },
  {
    icon: UserCheck,
    title: 'Support Higher Standards',
    description: 'Scale your output without increasing headcount. We act as an extension of your team with white-glove service.'
  },
  {
    icon: Lightbulb,
    title: 'Simplify Complexity',
    description: 'We turn complex business models and financial data into clear, digestible visuals that tell a compelling story.'
  },
  {
    icon: HandHelping,
    title: 'Dedicated Support',
    description: 'Account managers ensure your projects run smoothly from initial consultation through final delivery and revisions.'
  }
];

export function WhyChoose() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary mb-6">
            Why Choose Pitch Deck Perfect?
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="p-6"
            >
              <reason.icon className="w-10 h-10 text-accent mb-5" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold text-primary mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
