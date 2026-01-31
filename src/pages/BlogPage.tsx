import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/animations/FadeIn';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: 'The 10 Slides Every Pitch Deck Needs',
    excerpt: 'Learn the essential slides that investors expect to see in every pitch deck, and how to make each one compelling.',
    image: '/assets/slide_cards.png',
    author: 'Alex Thompson',
    date: 'Jan 15, 2025',
    readTime: '8 min read',
    category: 'Fundraising',
    tags: ['Pitch Decks', 'Investors', 'Best Practices'],
  },
  {
    id: 2,
    title: 'How to Nail Your Series A Pitch',
    excerpt: 'Series A fundraising requires a different approach than seed. Here is what you need to know.',
    image: '/assets/pitch_laptop.jpg',
    author: 'Sarah Chen',
    date: 'Jan 10, 2025',
    readTime: '12 min read',
    category: 'Series A',
    tags: ['Series A', 'Growth', 'Metrics'],
  },
  {
    id: 3,
    title: 'The Psychology of Investor Decisions',
    excerpt: 'Understanding how investors think can help you craft a pitch that resonates on a deeper level.',
    image: '/assets/customer_acquisition.jpg',
    author: 'Dr. Emily Rodriguez',
    date: 'Jan 5, 2025',
    readTime: '10 min read',
    category: 'Psychology',
    tags: ['Investor Psychology', 'Storytelling', 'Persuasion'],
  },
  {
    id: 4,
    title: 'Design Trends for 2025 Pitch Decks',
    excerpt: 'Stay ahead of the curve with these emerging design trends that are capturing investor attention.',
    image: '/assets/hero_devices.png',
    author: 'Marcus Johnson',
    date: 'Dec 28, 2024',
    readTime: '6 min read',
    category: 'Design',
    tags: ['Design Trends', 'Visuals', 'Branding'],
  },
  {
    id: 5,
    title: 'Common Pitch Deck Mistakes to Avoid',
    excerpt: 'We have reviewed 1000+ pitch decks. Here are the most common mistakes and how to fix them.',
    image: '/assets/pitch_dashboard.jpg',
    author: 'Alex Thompson',
    date: 'Dec 20, 2024',
    readTime: '15 min read',
    category: 'Tips',
    tags: ['Mistakes', 'Best Practices', 'Review'],
  },
  {
    id: 6,
    title: 'Building Financial Models Investors Trust',
    excerpt: 'A guide to creating realistic, defensible financial projections for your pitch deck.',
    image: '/assets/asset_5.jpg',
    author: 'Sarah Chen',
    date: 'Dec 15, 2024',
    readTime: '11 min read',
    category: 'Finance',
    tags: ['Financial Models', 'Projections', 'Metrics'],
  },
];

const categories = ['All', 'Fundraising', 'Series A', 'Psychology', 'Design', 'Tips', 'Finance'];

export function BlogPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-primary to-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Insights for
                <span className="text-accent block">Founders</span>
              </h1>
              <p className="text-white/70 text-lg mb-8">
                Expert advice, industry insights, and practical tips to help you 
                succeed in your fundraising journey.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Blog Grid */}
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

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-primary text-xs font-bold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                        <User className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-sm text-gray-600">{post.author}</span>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-accent hover:text-accent-hover font-medium text-sm flex items-center gap-1 transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8"
            >
              Load More Articles
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
