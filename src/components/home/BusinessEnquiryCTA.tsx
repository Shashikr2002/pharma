import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

export default function BusinessEnquiryCTA() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy to-brand-navy-dark" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(0,160,176,0.2) 0%, transparent 50%)',
        }} />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 md:px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-display font-bold text-white leading-tight"
        >
          Ready to Partner with
          <br />
          Pharma Healthcare?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-5 text-lg text-white/80 max-w-2xl mx-auto"
        >
          Get in touch with our team to discuss business opportunities, product enquiries,
          and partnership possibilities.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button to="/contact" size="lg" variant="secondary" icon>
            Contact Our Team
          </Button>
          <Button to="/products" size="lg" variant="outline" className="!border-white !text-white hover:!bg-white hover:!text-brand-navy">
            Explore Products
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
