import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import Button from '@/components/ui/Button';
import { companyConfig } from '@/config/company';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={companyConfig.images.heroBg}
          alt="Pharmaceutical manufacturing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/85 to-brand-navy/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-brand-navy/30" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center py-32">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-semibold text-white mb-6"
        >
          {companyConfig.tagline}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight"
        >
          Advancing Healthcare
          <br />
          <span className="text-brand-accent">Through Quality</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
        >
          Delivering high-quality pharmaceuticals across multiple dosage forms with
          a commitment to quality-driven manufacturing and trusted partnerships.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button to="/products" size="lg" icon>
            Explore Products
          </Button>
          <Button to="/contact" variant="outline" size="lg" className="!border-white !text-white hover:!bg-white hover:!text-brand-navy">
            Contact Our Team
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex items-center justify-center gap-2 text-white/60 text-sm"
        >
          <Play className="w-4 h-4" />
          <span>Pharmaceutical manufacturing at scale</span>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
}
