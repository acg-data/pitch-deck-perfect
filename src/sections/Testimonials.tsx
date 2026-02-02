import { motion } from 'framer-motion';
import { FadeIn } from '@/components/animations/FadeIn';
import { Button } from '@/components/ui/button';
import { testimonials } from '@/data/testimonials';

export function Testimonials() {
  return (
    <section className="py-20 lg:py-32 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-accent mb-4">
            Testimonials
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="text-white"
            >
              <p className="text-lg italic mb-6 opacity-90 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover bg-gray-300"
                  loading="lazy"
                  decoding="async"
                />
                <div>
                  <h5 className="font-semibold text-sm">{testimonial.name}</h5>
                  <span className="text-xs text-white/60">{testimonial.role}, {testimonial.company}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-accent text-primary hover:bg-accent-hover rounded-none px-8 py-6 text-sm font-semibold uppercase tracking-wider"
          >
            Read Success Stories
          </Button>
        </div>
      </div>
    </section>
  );
}
