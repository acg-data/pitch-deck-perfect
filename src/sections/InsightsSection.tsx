import { motion } from 'framer-motion';
import { FadeIn } from '@/components/animations/FadeIn';

const insights = [
  {
    tag: 'Strategy',
    title: 'Structuring your pitch for institutional investors'
  },
  {
    tag: 'Design',
    title: 'The Visual Hierarchy of a 10-slide deck'
  },
  {
    tag: 'Case Study',
    title: 'How Firm X raised $50M with better documentation'
  },
  {
    tag: 'Trends',
    title: '2026 Fundraising Benchmarks'
  }
];

export function InsightsSection() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary mb-4">
            Read Our Research & Insights
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {insights.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="bg-primary text-white p-8 h-64 flex flex-col justify-end cursor-pointer transition-transform hover:-translate-y-1"
            >
              <div className="text-xs uppercase tracking-wider text-accent mb-3">
                {insight.tag}
              </div>
              <h4 className="text-lg font-medium leading-snug">
                {insight.title}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
