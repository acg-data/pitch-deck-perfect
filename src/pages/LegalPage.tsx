import { motion } from 'framer-motion';
import { FadeIn } from '@/components/animations/FadeIn';
import { sanitizeHtml } from '@/lib/sanitize';
import { FileText, Shield, Cookie, Scale } from 'lucide-react';

const legalPages = [
  {
    id: 'privacy',
    icon: Shield,
    title: 'Privacy Policy',
    content: `
      <h2>Privacy Policy</h2>
      <p>Last updated: January 2025</p>
      
      <h3>1. Information We Collect</h3>
      <p>We collect information you provide directly to us, including:</p>
      <ul>
        <li>Name, email address, and phone number</li>
        <li>Company information and funding stage</li>
        <li>Project details and requirements</li>
        <li>Payment information</li>
      </ul>
      
      <h3>2. How We Use Your Information</h3>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Provide and improve our services</li>
        <li>Communicate with you about your project</li>
        <li>Process payments and send invoices</li>
        <li>Send marketing communications (with your consent)</li>
      </ul>
      
      <h3>3. Information Sharing</h3>
      <p>We do not sell your personal information. We may share information with:</p>
      <ul>
        <li>Service providers who assist in our operations</li>
        <li>Legal authorities when required by law</li>
        <li>Business partners with your consent</li>
      </ul>
      
      <h3>4. Data Security</h3>
      <p>We implement appropriate technical and organizational measures to protect your personal information.</p>
      
      <h3>5. Your Rights</h3>
      <p>You have the right to access, correct, or delete your personal information. Contact us to exercise these rights.</p>
    `,
  },
  {
    id: 'terms',
    icon: FileText,
    title: 'Terms of Service',
    content: `
      <h2>Terms of Service</h2>
      <p>Last updated: January 2025</p>
      
      <h3>1. Acceptance of Terms</h3>
      <p>By accessing or using our services, you agree to be bound by these Terms of Service.</p>
      
      <h3>2. Services</h3>
      <p>Happy Pitch provides pitch deck design and consulting services. The specific deliverables and timeline will be outlined in your project agreement.</p>
      
      <h3>3. Payment Terms</h3>
      <p>Payment is due according to the schedule outlined in your project agreement. Late payments may result in project delays.</p>
      
      <h3>4. Intellectual Property</h3>
      <p>Upon full payment, you receive full ownership of the final deliverables. We retain the right to use non-confidential work in our portfolio.</p>
      
      <h3>5. Confidentiality</h3>
      <p>We maintain strict confidentiality regarding your business information and will not disclose it to third parties without your consent.</p>
      
      <h3>6. Limitation of Liability</h3>
      <p>Our liability is limited to the amount paid for our services. We are not responsible for funding outcomes or investor decisions.</p>
      
      <h3>7. Termination</h3>
      <p>Either party may terminate the agreement with written notice. Refunds will be provided according to our refund policy.</p>
    `,
  },
  {
    id: 'cookies',
    icon: Cookie,
    title: 'Cookie Policy',
    content: `
      <h2>Cookie Policy</h2>
      <p>Last updated: January 2025</p>
      
      <h3>1. What Are Cookies</h3>
      <p>Cookies are small text files stored on your device when you visit our website.</p>
      
      <h3>2. How We Use Cookies</h3>
      <p>We use cookies for:</p>
      <ul>
        <li>Essential website functionality</li>
        <li>Analytics and performance monitoring</li>
        <li>Personalizing your experience</li>
        <li>Marketing and advertising</li>
      </ul>
      
      <h3>3. Types of Cookies</h3>
      <ul>
        <li><strong>Essential:</strong> Required for basic website functionality</li>
        <li><strong>Analytics:</strong> Help us understand how visitors interact with our site</li>
        <li><strong>Marketing:</strong> Used to deliver relevant advertisements</li>
      </ul>
      
      <h3>4. Managing Cookies</h3>
      <p>You can control cookies through your browser settings. Note that disabling certain cookies may affect website functionality.</p>
    `,
  },
];

export function LegalPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-primary to-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <Scale className="w-16 h-16 text-accent mx-auto mb-6" />
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Legal Information
              </h1>
              <p className="text-white/70 text-lg">
                Transparency and trust are core to our business. Here you will find our legal policies.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Legal Content */}
      <section className="py-20 lg:py-32 bg-happy-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {legalPages.map((page, index) => {
              const Icon = page.icon;
              return (
                <motion.div
                  key={page.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 lg:p-12 shadow-card"
                  id={page.id}
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h2 className="text-2xl font-bold text-primary">{page.title}</h2>
                  </div>
                  <div
                    className="prose prose-lg max-w-none prose-headings:text-primary prose-p:text-gray-600 prose-strong:text-primary prose-li:text-gray-600"
                    dangerouslySetInnerHTML={{ __html: sanitizeHtml(page.content) }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
