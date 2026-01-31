import { motion } from 'framer-motion';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';
import { testimonials } from '@/data/testimonials';
import { Quote, Star } from 'lucide-react';

export function Testimonials() {
  return (
    <section className="py-20 lg:py-32 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Join The Ranks Of
            <br />
            <span className="text-gradient">Funded Legends</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            These founders came to us with dreams and left with term sheets. Your success story starts here.
          </p>
        </FadeIn>

        {/* Testimonials Grid */}
        <StaggerContainer 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          staggerDelay={0.15}
        >
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.id}>
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 h-full"
              >
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-accent/30" />
                </div>

                {/* Title */}
                <h3 className="font-semibold text-primary mb-3">
                  {testimonial.title}
                </h3>

                {/* Quote */}
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div>
                    <p className="font-semibold text-primary text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-500 text-xs">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mt-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <FadeIn delay={0.4} className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-primary text-white hover:bg-primary-light rounded-full px-8 py-4 font-medium transition-all duration-200"
          >
            Write My Success Story
          </motion.button>
        </FadeIn>
      </div>
    </section>
  );
}
