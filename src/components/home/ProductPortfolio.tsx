import { motion } from 'framer-motion';
import { Pill, Tablets, Droplet, CircleDot, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '@/components/ui/SectionHeading';
import { companyConfig } from '@/config/company';

const iconMap: Record<string, React.ElementType> = {
  Pill,
  Capsule: Tablets,
  Droplet,
  CircleDot,
};

export default function ProductPortfolio() {
  return (
    <section className="py-20 md:py-28 bg-brand-soft-gray">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <SectionHeading
          eyebrow="Our Products"
          title="Product Portfolio"
          subtitle="A diverse range of pharmaceutical formulations manufactured under stringent quality controls."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {companyConfig.products.map((product, i) => {
            const Icon = iconMap[product.icon] || Pill;
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link to="/products" className="group block">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-brand-navy/10 transition-all duration-500 h-full">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent" />
                      <div className="absolute top-4 left-4 w-10 h-10 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center">
                        <Icon className="w-5 h-5 text-brand-navy" />
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-display font-bold text-lg text-brand-dark-text group-hover:text-brand-navy transition-colors">
                        {product.name}
                      </h3>
                      <p className="mt-2 text-sm text-brand-dark-text/60 leading-relaxed line-clamp-3">
                        {product.description}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-navy">
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
