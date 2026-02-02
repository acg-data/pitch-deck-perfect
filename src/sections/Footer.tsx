import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Presentation } from 'lucide-react';

const footerLinks = {
  products: [
    { label: 'Pitch Decks', href: '/services' },
    { label: 'Financial Models', href: '/services' },
    { label: 'Investor Memos', href: '/services' },
    { label: 'Presentation Design', href: '/services' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  connect: [
    { label: 'LinkedIn', href: '#' },
    { label: 'Twitter', href: '#' },
    { label: 'Instagram', href: '#' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Presentation className="w-6 h-6 text-accent" />
              <span className="font-semibold text-xl">Pitch Deck Perfect</span>
            </Link>
            <p className="text-white/60 text-sm mb-6 max-w-xs">
              Premium design and documentation services for investment firms and startups.
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-none"
              />
              <Button className="bg-accent text-primary hover:bg-accent-hover rounded-none px-4">
                Join
              </Button>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Products
            </h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Connect
            </h4>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 text-center text-white/40 text-sm">
          © 2026 Pitch Deck Perfect. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
