import { motion } from 'framer-motion';
import { FadeIn } from '@/components/animations/FadeIn';
import { sanitizeHtml } from '@/lib/sanitize';
import { ArrowLeft, Calendar, Clock, User, Twitter, Linkedin, Facebook } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: 'The 10 Slides Every Pitch Deck Needs',
    content: `
      <p>After reviewing over 1,000 pitch decks, we have identified the 10 essential slides that every investor expects to see. Missing any of these can raise red flags and hurt your chances of securing funding.</p>
      
      <h2>1. Problem Slide</h2>
      <p>Start with the problem you are solving. Be specific and use real data to show the magnitude of the problem. Investors need to understand why this matters.</p>
      
      <h2>2. Solution Slide</h2>
      <p>Present your solution clearly and concisely. Show how it solves the problem better than existing alternatives. Use visuals to make it memorable.</p>
      
      <h2>3. Market Opportunity</h2>
      <p>Define your total addressable market (TAM), serviceable addressable market (SAM), and serviceable obtainable market (SOM). Show you have done your research.</p>
      
      <h2>4. Business Model</h2>
      <p>Explain how you make money. Be clear about your pricing, revenue streams, and unit economics. Investors want to see a path to profitability.</p>
      
      <h2>5. Traction</h2>
      <p>Show your progress with metrics. Revenue, user growth, engagement—whatever proves your business is working. Use charts and graphs to visualize growth.</p>
      
      <h2>6. Competition</h2>
      <p>Be honest about your competitive landscape. Use a magic quadrant or feature matrix to show where you fit. Never say you have no competition.</p>
      
      <h2>7. Go-to-Market</h2>
      <p>Explain your strategy for acquiring customers. Show your channels, tactics, and expected CAC and LTV. Investors want to see a scalable plan.</p>
      
      <h2>8. Team</h2>
      <p>Highlight your key team members and their relevant experience. Show why this team is uniquely qualified to execute this vision.</p>
      
      <h2>9. Financials</h2>
      <p>Present 3-5 year projections with key metrics. Be realistic but optimistic. Show your assumptions and explain your growth drivers.</p>
      
      <h2>10. The Ask</h2>
      <p>Clearly state how much you are raising and what you will use it for. Show milestones you will hit with this funding.</p>
      
      <p>Remember, these slides are just the foundation. The magic happens in how you tell your story and connect with investors emotionally while backing it up with data.</p>
    `,
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
    content: '<p>Content coming soon...</p>',
    image: '/assets/pitch_laptop.jpg',
    author: 'Sarah Chen',
    date: 'Jan 10, 2025',
    readTime: '12 min read',
    category: 'Series A',
    tags: ['Series A', 'Growth', 'Metrics'],
  },
];

export function BlogPostPage() {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === Number(id)) || blogPosts[0];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-12 bg-gradient-to-b from-primary to-primary-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            <span className="bg-accent text-primary text-sm font-bold px-4 py-1 rounded-full">
              {post.category}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-white/70">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <User className="w-5 h-5 text-accent" />
                </div>
                <span>{post.author}</span>
              </div>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Featured Image */}
      <section className="-mt-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 sm:h-96 object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <article
              className="prose prose-lg max-w-none prose-headings:text-primary prose-p:text-gray-600 prose-strong:text-primary prose-a:text-accent hover:prose-a:text-accent-hover"
              dangerouslySetInnerHTML={{ __html: sanitizeHtml(post.content) }}
            />
          </FadeIn>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-gray-100">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-ice-50 rounded-full text-sm text-primary font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Share */}
          <div className="flex items-center gap-4 mt-8">
            <span className="text-gray-600 font-medium">Share:</span>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full bg-ice-100 flex items-center justify-center text-gray-600 hover:bg-accent hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-full bg-ice-100 flex items-center justify-center text-gray-600 hover:bg-accent hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-full bg-ice-100 flex items-center justify-center text-gray-600 hover:bg-accent hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
