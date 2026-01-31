import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/animations/FadeIn';
import { ArrowRight, MapPin, Briefcase, DollarSign, Heart, Zap, Globe, Coffee } from 'lucide-react';

const benefits = [
  {
    icon: DollarSign,
    title: 'Competitive Salary',
    description: 'We pay above-market rates to attract the best talent.',
  },
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Comprehensive health, dental, and vision coverage.',
  },
  {
    icon: Zap,
    title: 'Flexible PTO',
    description: 'Unlimited paid time off. We trust you to manage your time.',
  },
  {
    icon: Globe,
    title: 'Remote First',
    description: 'Work from anywhere. We are a distributed team.',
  },
  {
    icon: Coffee,
    title: 'Learning Budget',
    description: '$2,000/year for courses, books, and conferences.',
  },
  {
    icon: Briefcase,
    title: 'Equity',
    description: 'Meaningful equity in a fast-growing company.',
  },
];

const openings = [
  {
    id: 1,
    title: 'Senior Pitch Deck Designer',
    department: 'Design',
    location: 'Remote',
    type: 'Full-time',
    description: 'Create stunning pitch decks that help founders raise millions.',
  },
  {
    id: 2,
    title: 'Venture Capital Analyst',
    department: 'Strategy',
    location: 'San Francisco',
    type: 'Full-time',
    description: 'Help startups craft compelling financial narratives and market analyses.',
  },
  {
    id: 3,
    title: 'Customer Success Manager',
    department: 'Operations',
    location: 'Remote',
    type: 'Full-time',
    description: 'Ensure our clients have an exceptional experience from start to finish.',
  },
  {
    id: 4,
    title: 'Content Marketing Manager',
    department: 'Marketing',
    location: 'Remote',
    type: 'Full-time',
    description: 'Create content that educates and inspires the founder community.',
  },
];

export function CareersPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-primary to-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Join Our
                <span className="text-accent block">Mission</span>
              </h1>
              <p className="text-white/70 text-lg mb-8">
                Help founders tell their stories and change the world. We are building 
                the best pitch deck agency on the planet.
              </p>
              <Button
                size="lg"
                className="bg-accent text-primary hover:bg-accent-hover rounded-full px-8 py-6 text-base font-medium transition-all duration-200 hover:scale-[1.02] group"
              >
                View Openings
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-32 bg-happy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Why Work With Us</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We believe in taking care of our team. Here is what you can expect when you join Happy Pitch.
              </p>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 lg:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Open Positions</h2>
              <p className="text-gray-600">
                Join our team and help founders succeed.
              </p>
            </div>
          </FadeIn>
          <div className="space-y-4">
            {openings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.01 }}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-1">{job.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{job.description}</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-ice-50 rounded-full text-xs text-primary font-medium">
                        {job.department}
                      </span>
                      <span className="px-3 py-1 bg-ice-50 rounded-full text-xs text-primary font-medium flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {job.location}
                      </span>
                      <span className="px-3 py-1 bg-ice-50 rounded-full text-xs text-primary font-medium">
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <Button className="rounded-full bg-accent text-primary hover:bg-accent-hover whitespace-nowrap">
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2" />
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
