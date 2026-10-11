import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';
import { companyConfig } from '@/config/company';

const highlights = [
  'Quality-driven pharmaceutical manufacturing',
  'Multiple dosage forms in our portfolio',
  'Trusted partnerships across markets',
  'Experienced and dedicated team',
];

export default function AboutPreview() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-brand-navy/10">
                <img
                  src={companyConfig.images.aboutOverview}
                  alt="Pharmaceutical manufacturing"
                  className="w-full h-[420px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-brand-navy text-white p-6 rounded-xl shadow-xl hidden md:block">
                <p className="text-3xl font-display font-bold">25+</p>
                <p className="text-sm text-white/70">Years of Experience</p>
                <p className="text-[10px] text-white/40 mt-1">Placeholder — to be verified</p>
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-light-blue rounded-2xl -z-10 hidden md:block" />
            </div>
          </Reveal>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-sm font-bold uppercase tracking-widest text-brand-navy mb-3 block">
                About Pharma Healthcare
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark-text leading-tight">
                Dedicated to Delivering
                <br />
                Quality Pharmaceuticals
              </h2>
              <p className="mt-5 text-base md:text-lg text-brand-dark-text/70 leading-relaxed">
                {companyConfig.description}
              </p>

              <ul className="mt-6 space-y-3">
                {highlights.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-brand-navy shrink-0" />
                    <span className="text-brand-dark-text/80">{item}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8">
                <Button to="/about" icon>Read More</Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
