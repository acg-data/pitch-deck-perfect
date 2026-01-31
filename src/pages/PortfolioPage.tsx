import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/animations/FadeIn';
import { ExternalLink } from 'lucide-react';

const portfolioItems = [
  {
    id: 1,
    title: 'TechFlow AI',
    category: 'Series A',
    amount: '$12M',
    description: 'AI-powered workflow automation platform',
    image: '/assets/pitch_dashboard.jpg',
    tags: ['SaaS', 'AI/ML', 'B2B'],
  },
  {
    id: 2,
    title: 'GreenEnergy Co',
    category: 'Seed',
    amount: '$3.5M',
    description: 'Renewable energy marketplace',
    image: '/assets/asset_5.jpg',
    tags: ['Climate', 'Marketplace', 'B2C'],
  },
  {
    id: 3,
    title: 'HealthTrack',
    category: 'Series B',
    amount: '$25M',
    description: 'Remote patient monitoring platform',
    image: '/assets/asset_6.jpg',
    tags: ['HealthTech', 'IoT', 'B2B'],
  },
  {
    id: 4,
    title: 'FinServe Pro',
    category: 'Series A',
    amount: '$8M',
    description: 'Embedded finance infrastructure',
    image: '/assets/asset_7.jpg',
    tags: ['Fintech', 'Infrastructure', 'B2B'],
  },
  {
    id: 5,
    title: 'EduLearn',
    category: 'Seed',
    amount: '$2.8M',
    description: 'Personalized learning platform',
    image: '/assets/asset_8.jpg',
    tags: ['EdTech', 'AI/ML', 'B2C'],
  },
  {
    id: 6,
    title: 'LogisticsHub',
    category: 'Series A',
    amount: '$15M',
    description: 'Supply chain optimization platform',
    image: '/assets/asset_9.jpg',
    tags: ['Logistics', 'SaaS', 'B2B'],
  },
];

const categories = ['All', 'Seed', 'Series A', 'Series B'];

export function PortfolioPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-primary to-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Pitch Decks That
                <span className="text-accent block">Raised Millions</span>
              </h1>
              <p className="text-white/70 text-lg mb-8">
                Browse our portfolio of successful pitch decks. Each one helped founders 
                secure funding and scale their vision.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 lg:py-32 bg-happy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <FadeIn>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    category === 'All'
                      ? 'bg-primary text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <span className="text-white/80 text-sm">{item.category}</span>
                      <span className="text-accent font-bold">{item.amount}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-ice-50 rounded-lg text-xs text-primary font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    className="w-full rounded-full group/btn"
                  >
                    View Case Study
                    <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
