import { motion } from 'framer-motion';
import { FadeIn } from '@/components/animations/FadeIn';
import { CountUp } from '@/components/animations/CountUp';
import { Button } from '@/components/ui/button';

const stats = [
  { value: 2400, prefix: '$', suffix: 'B+', label: 'Capital Raised' },
  { value: 500, suffix: '+', label: 'Active Clients' },
  { value: 1000, suffix: '+', label: 'Projects Delivered' }
];

export function StatsSection() {
  return (
    <section className="py-20 lg:py-32 bg-[#F8F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary mb-4">
            Chosen By Sophisticated Businesses
          </h2>
        </FadeIn>

        <div className="flex flex-wrap justify-center gap-20 lg:gap-32 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="text-center"
            >
              <h3 className="text-4xl lg:text-5xl font-bold text-accent mb-2">
                <CountUp 
                  end={stat.value} 
                  prefix={stat.prefix} 
                  suffix={stat.suffix}
                  duration={2}
                />
              </h3>
              <p className="text-sm font-semibold uppercase tracking-wider text-gray-600">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-accent text-primary hover:bg-accent-hover rounded-none px-8 py-6 text-sm font-semibold uppercase tracking-wider"
          >
            See Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
}
