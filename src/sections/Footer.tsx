import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Presentation, Linkedin, Twitter, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  pages: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Process', href: '/process' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  company: [
    { label: 'Careers', href: '/careers' },
    { label: 'Blog', href: '/blog' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'FAQ', href: '/faq' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/legal#privacy' },
    { label: 'Terms of Service', href: '/legal#terms' },
    { label: 'Cookie Policy', href: '/legal#cookies' },
  ],
  contact: [
    { label: 'hello@happypitch.com', href: 'mailto:hello@happypitch.com', icon: Mail },
    { label: '+1 (555) 123-4567', href: 'tel:+15551234567', icon: Phone },
  ],
  location: [
    '100 Montgomery Street',
    'San Francisco, CA 94104',
  ],
  social: [
    { label: 'LinkedIn', href: '#', icon: Linkedin },
    { label: 'X', href: '#', icon: Twitter },
    { label: 'Instagram', href: '#', icon: Instagram },
    { label: 'Facebook', href: '#', icon: Facebook },
  ],
};

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                <Presentation className="w-4 h-4 text-accent" />
              </div>
              <span className="font-bold text-foreground">Happy Pitch</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-4">
              Helping founders create pitch decks that close deals.
            </p>
            <div className="flex gap-3">
              {footerLinks.social.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Pages</h3>
            <ul className="space-y-3">
              {footerLinks.pages.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              {footerLinks.contact.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors duration-200 text-sm"
                  >
                    <link.icon className="w-4 h-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-start gap-2 text-muted-foreground text-sm mt-4">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <div>
                {footerLinks.location.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>© 2025 Happy Pitch</span>
              <span className="flex items-center gap-1">
                Made with <span className="text-accent">♥</span> for founders
              </span>
            </div>
            <div className="text-sm text-muted-foreground">
              All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
