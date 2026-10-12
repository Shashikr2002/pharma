import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, HeartPulse } from 'lucide-react';
import { companyConfig } from '@/config/company';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'Expertise / Quality', path: '/expertise' },
  { label: 'Contact Us', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-lg shadow-brand-navy/5 py-2'
          : 'bg-white/95 backdrop-blur-sm py-3'
      }`}
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-navy via-brand-accent to-brand-navy" />
      <nav className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="w-10 h-10 rounded-lg bg-brand-navy flex items-center justify-center">
            <HeartPulse className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-display font-bold text-brand-navy text-lg">
              Pharma Healthcare
            </span>
            <span className="text-[10px] text-brand-dark-text/60 font-medium uppercase tracking-wider">
              {companyConfig.tagline}
            </span>
          </div>
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = location.pathname === link.path;
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                    active
                      ? 'text-brand-navy bg-brand-light-blue'
                      : 'text-brand-dark-text/80 hover:text-brand-navy hover:bg-brand-soft-gray'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex items-center px-5 py-2.5 bg-brand-navy text-white text-sm font-semibold rounded-lg hover:bg-brand-navy-dark transition-all duration-300 shadow-md shadow-brand-navy/20"
          >
            Business Enquiry
          </Link>
        </div>

        <button
          className="lg:hidden p-2 text-brand-navy"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <ul className="px-4 py-3 space-y-1">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`block px-4 py-3 text-sm font-semibold rounded-lg transition-colors ${
                      active
                        ? 'text-brand-navy bg-brand-light-blue'
                        : 'text-brand-dark-text/80 hover:bg-brand-soft-gray'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link
                to="/contact"
                className="block px-4 py-3 mt-2 bg-brand-navy text-white text-sm font-semibold rounded-lg text-center"
              >
                Business Enquiry
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
