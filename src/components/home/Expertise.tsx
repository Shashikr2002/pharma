import { motion } from 'framer-motion';
import { Truck, Settings, Handshake, Layers } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { companyConfig } from '@/config/company';

const iconMap: Record<string, React.ElementType> = {
  Truck,
  Settings,
  Handshake,
  Layers,
};

export default function Expertise() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <SectionHeading
          eyebrow="What We Do"
          title="Our Expertise"
          subtitle="Pharmaceutical capabilities built on quality, precision, and trusted partnerships."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {companyConfig.expertise.map((item, i) => {
            const Icon = iconMap[item.icon] || Settings;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative p-6 rounded-2xl bg-brand-soft-gray border border-gray-100 hover:border-brand-navy/20 hover:bg-white hover:shadow-xl hover:shadow-brand-navy/5 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-xl bg-brand-navy/10 group-hover:bg-brand-navy flex items-center justify-center mb-5 transition-all duration-300">
                  <Icon className="w-7 h-7 text-brand-navy group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-display font-bold text-lg text-brand-dark-text mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-brand-dark-text/60 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
