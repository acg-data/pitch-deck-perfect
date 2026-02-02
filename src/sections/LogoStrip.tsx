import { motion } from 'framer-motion';

const logos = [
  'SEQUOIA',
  'A16Z',
  'BENCHMARK',
  'GREYCROFT',
  'ACCEL'
];

export function LogoStrip() {
  return (
    <section className="py-8 border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center items-center gap-12 lg:gap-20 flex-wrap opacity-50"
        >
          {logos.map((logo, index) => (
            <span 
              key={index}
              className="text-lg font-bold text-gray-400 tracking-wider"
            >
              {logo}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
