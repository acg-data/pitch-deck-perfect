import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FadeIn } from '@/components/animations/FadeIn';
import { ArrowRight, Mail, Phone, MapPin, Clock, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@happypitch.com',
    href: 'mailto:hello@happypitch.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: '100 Montgomery Street, San Francisco, CA 94104',
    href: '#',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon-Fri: 9AM - 6PM PST',
    href: '#',
  },
];

export function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    stage: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-primary to-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Let us Build Your
                <span className="text-accent block">Winning Deck</span>
              </h1>
              <p className="text-white/70 text-lg">
                Ready to raise capital? Get in touch and let us discuss how we can help 
                you create a pitch deck that closes deals.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-32 bg-happy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <FadeIn direction="left">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  Whether you are ready to start or just exploring options, we are here to help. 
                  Reach out and we will respond within 24 hours.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        className="flex items-start gap-4 group"
                      >
                        <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-colors">
                          <Icon className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <div className="font-semibold text-primary">{item.label}</div>
                          <div className="text-gray-600">{item.value}</div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </FadeIn>

            {/* Contact Form */}
            <FadeIn direction="right">
              <div className="bg-white rounded-2xl p-8 shadow-card">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-2">Message Sent!</h3>
                    <p className="text-gray-600">
                      Thank you for reaching out. We will get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-primary mb-2">
                          Name *
                        </label>
                        <Input
                          required
                          placeholder="Your name"
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          className="rounded-xl"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-primary mb-2">
                          Email *
                        </label>
                        <Input
                          required
                          type="email"
                          placeholder="you@company.com"
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          className="rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-primary mb-2">
                          Company
                        </label>
                        <Input
                          placeholder="Your company"
                          value={formState.company}
                          onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                          className="rounded-xl"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-primary mb-2">
                          Funding Stage
                        </label>
                        <select
                          value={formState.stage}
                          onChange={(e) => setFormState({ ...formState, stage: e.target.value })}
                          className="w-full h-10 px-3 rounded-xl border border-input bg-background text-sm"
                        >
                          <option value="">Select stage</option>
                          <option value="pre-seed">Pre-seed</option>
                          <option value="seed">Seed</option>
                          <option value="series-a">Series A</option>
                          <option value="series-b">Series B+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        Message *
                      </label>
                      <Textarea
                        required
                        placeholder="Tell us about your project and what you are looking for..."
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        className="rounded-xl min-h-[120px]"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-accent text-primary hover:bg-accent-hover rounded-full py-6 font-medium transition-all duration-200 hover:scale-[1.02] group"
                    >
                      Send Message
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
