import { Link } from 'react-router-dom';
import { HeartPulse, Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';
import { companyConfig } from '@/config/company';

const footerLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'Expertise / Quality', path: '/expertise' },
  { label: 'Contact Us', path: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                <HeartPulse className="w-6 h-6 text-white" />
              </div>
              <span className="font-display font-bold text-lg">Pharma Healthcare</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              {companyConfig.description}
            </p>
            <div className="flex gap-3 mt-5">
              <a href={companyConfig.social.linkedin} className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href={companyConfig.social.facebook} className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href={companyConfig.social.twitter} className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display font-semibold text-base mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-base mb-4">Products</h3>
            <ul className="space-y-2.5">
              {companyConfig.products.map((product) => (
                <li key={product.id}>
                  <Link to="/products" className="text-sm text-white/70 hover:text-white transition-colors">
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-base mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-white/50 shrink-0 mt-0.5" />
                <span className="text-sm text-white/70">{companyConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-white/50 shrink-0" />
                <span className="text-sm text-white/70">{companyConfig.contact.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-white/50 shrink-0" />
                <span className="text-sm text-white/70">{companyConfig.contact.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Pharma Healthcare. All rights reserved.
          </p>
          <p className="text-xs text-white/50">
            {companyConfig.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
