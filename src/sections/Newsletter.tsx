import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FadeIn } from '@/components/animations/FadeIn';
import { Presentation, ArrowRight, Check } from 'lucide-react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Form */}
          <FadeIn direction="left">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
                Pitch Tips In Your Inbox.
                <br />
                <span className="text-gradient">Weekly.</span>
              </h2>

              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-14 pl-5 pr-4 rounded-full border-gray-200 focus:border-accent focus:ring-accent text-base"
                    required
                  />
                </div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    type="submit"
                    disabled={subscribed}
                    className={`h-14 px-8 rounded-full font-medium transition-all duration-200 ${
                      subscribed 
                        ? 'bg-accent text-primary' 
                        : 'bg-accent text-primary hover:bg-accent-hover'
                    }`}
                  >
                    {subscribed ? (
                      <>
                        <Check className="w-4 h-4 mr-2" />
                        Subscribed!
                      </>
                    ) : (
                      <>
                        Subscribe
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>

              <p className="text-gray-500 text-sm mt-4">
                Join 5,000+ founders getting weekly pitch tips, investor insights, and fundraising strategies.
              </p>
            </div>
          </FadeIn>

          {/* Right Column - Logo */}
          <FadeIn direction="right" delay={0.2}>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 lg:w-24 lg:h-24 rounded-2xl bg-accent/20 flex items-center justify-center">
                    <Presentation className="w-10 h-10 lg:w-16 lg:h-16 text-accent" />
                  </div>
                  <span className="text-5xl lg:text-7xl font-bold text-primary">Happy Pitch</span>
                </div>
                <div className="absolute -inset-8 bg-accent/5 rounded-full blur-3xl -z-10" />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
