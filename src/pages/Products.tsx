import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Pill, Tablets, Droplet, CircleDot, Filter, ArrowRight, Mail } from 'lucide-react';
import PageBanner from '@/components/ui/PageBanner';
import Button from '@/components/ui/Button';
import { companyConfig } from '@/config/company';

const iconMap: Record<string, React.ElementType> = {
  Pill,
  Capsule: Tablets,
  Droplet,
  CircleDot,
};

const categories = ['All', 'Tablets', 'Capsules', 'Liquids', 'Ointments'];

export default function Products() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = useMemo(() => {
    return companyConfig.products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeCategory === 'All' || product.name === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <>
      <PageBanner
        title="Our Products"
        subtitle="A diverse pharmaceutical portfolio manufactured under stringent quality controls."
        image={companyConfig.images.scientistPills}
        breadcrumb="Home / Products"
      />

      {/* Category Overview */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-sm font-bold uppercase tracking-widest text-brand-navy mb-3 block">
              Product Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark-text">
              Categories We Offer
            </h2>
            <p className="mt-4 text-brand-dark-text/70">
              Our portfolio spans multiple dosage forms to serve varied healthcare needs.
              Product details are available upon enquiry.
            </p>
          </div>

          {/* Search & Filters */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 mb-10">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-dark-text/40" />
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-brand-soft-gray border border-gray-100 focus:border-brand-navy focus:outline-none text-brand-dark-text placeholder:text-brand-dark-text/40 transition-colors"
              />
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              <Filter className="w-4 h-4 text-brand-dark-text/40 shrink-0" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-sm font-semibold rounded-lg whitespace-nowrap transition-all ${
                    activeCategory === cat
                      ? 'bg-brand-navy text-white'
                      : 'bg-brand-soft-gray text-brand-dark-text/70 hover:bg-brand-light-blue'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, i) => {
              const Icon = iconMap[product.icon] || Pill;
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-brand-navy/10 transition-all duration-500 border border-gray-50"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/50 to-transparent" />
                    <div className="absolute top-3 left-3 w-9 h-9 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center">
                      <Icon className="w-4 h-4 text-brand-navy" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-bold text-lg text-brand-dark-text group-hover:text-brand-navy transition-colors">
                      {product.name}
                    </h3>
                    <p className="mt-2 text-sm text-brand-dark-text/60 leading-relaxed line-clamp-3">
                      {product.description}
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      <Button to="/contact" size="sm" className="!px-4 !py-2 !text-xs">
                        <Mail className="w-3.5 h-3.5" />
                        Enquire
                      </Button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-brand-dark-text/50 text-lg">No products found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* Enquiry CTA */}
      <section className="py-20 bg-brand-navy">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white">
            Looking for Specific Product Information?
          </h2>
          <p className="mt-4 text-white/70">
            Contact our team for detailed product catalogues, specifications, and partnership opportunities.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/contact" variant="secondary" size="lg" icon>
              Make an Enquiry
            </Button>
            <Button to="/expertise" variant="outline" size="lg" className="!border-white !text-white hover:!bg-white hover:!text-brand-navy">
              Our Expertise
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
