import { motion } from 'framer-motion';
import { Globe2, MapPin, Plane, Building2 } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import { companyConfig } from '@/config/company';

const reachPoints = [
  { title: 'Multiple Markets', description: 'Expanding presence across domestic and international pharmaceutical markets.', icon: Globe2 },
  { title: 'Strategic Locations', description: 'Operations designed to serve partners efficiently across regions.', icon: MapPin },
  { title: 'Export Capabilities', description: 'Growing export operations to meet global healthcare demands.', icon: Plane },
  { title: 'Partnership Network', description: 'Building trusted relationships with distributors, institutions, and healthcare organizations.', icon: Building2 },
];

export default function GlobalReach() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-sm font-bold uppercase tracking-widest text-brand-navy mb-3 block">
                Global Reach
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark-text leading-tight">
                Global Reach and
                <br />
                Partnerships
              </h2>
              <p className="mt-5 text-base text-brand-dark-text/70 leading-relaxed">
                We are committed to expanding our presence and building trusted
                partnerships across markets. Our focus on responsible growth ensures
                that quality remains central to every new relationship.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {reachPoints.map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="p-4 rounded-xl bg-brand-soft-gray border border-gray-100"
                  >
                    <point.icon className="w-6 h-6 text-brand-navy mb-2" />
                    <h4 className="font-semibold text-sm text-brand-dark-text">{point.title}</h4>
                    <p className="text-xs text-brand-dark-text/60 mt-1">{point.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <Reveal delay={0.2}>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-brand-navy/10">
                <img
                  src={companyConfig.images.globalPartnership}
                  alt="Global partnerships"
                  className="w-full h-[440px] object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/20 to-transparent rounded-2xl" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
